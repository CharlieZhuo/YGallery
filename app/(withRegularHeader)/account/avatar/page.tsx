import AvatarUploader from "./AvatarUploader";
import { redirect } from "next/navigation";

import { createSCSupabaseClient } from "../../../../util/supabase-server";

export default async function AvatarForm() {
  const supabase = createSCSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  if (data.user)
    return (
      <div>
        <AvatarUploader user={data.user}></AvatarUploader>
      </div>
    );
  else redirect("/login");
}
