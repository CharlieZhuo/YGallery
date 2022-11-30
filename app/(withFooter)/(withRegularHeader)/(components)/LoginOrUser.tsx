import SignInButton from "./SignInButton";
import UserAvatar from "./UserAvatar";

import { createSCSupabaseClient } from "../../../../util/supabase-server";

export default async function LoginOrUser() {
  const supabase = createSCSupabaseClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data.user);

  if (error || !data.user) {
    return (
      <div>
        <SignInButton></SignInButton>
      </div>
    );
  } else {
    return (
      <>
        {/* @ts-expect-error Server Component */}
        <UserAvatar user={data.user}></UserAvatar>
      </>
    );
  }
}
