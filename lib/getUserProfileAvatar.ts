import { cache } from "react";
import "server-only";
import { createSCSupabaseClient } from "../util/supabase-server";

export const getUserAvatarUrl = cache(async (userId?: string) => {
  const supabase = createSCSupabaseClient();

  const { data: avatarFiles, error } = await supabase.storage
    .from("avatars")
    .list(`${userId}`);

  console.groupCollapsed(`AvatarFiles:`);
  console.debug(avatarFiles);
  console.groupEnd();

  if (avatarFiles) {
    const firstFile = avatarFiles.at(0);

    console.groupCollapsed(`firstFile:`);
    console.debug(firstFile);
    console.groupEnd();

    if (firstFile) {
      const { data, error } = await supabase.storage
        .from("avatars")
        .createSignedUrl(`${userId}/${firstFile.name}`, 120);
      if (data && !error) {
        const resultUrl = data.signedUrl;
        return resultUrl;
      } else if (error) {
        console.error(`Error creating signed url of avatar from storage`);
        throw error;
      }
    }
  }
  return undefined;
});

export const getUserProfile = cache(async (userId: string) => {
  const supabase = createSCSupabaseClient();
  const { data, error } = await supabase
    .from("Profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();
  if (data && !error) {
    return data;
  } else if (error) {
    throw error;
  } else return null;
});
