import SignInButton from "./SignInButton";
import UserStatusData from "./userStatusData";

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
      <div>
        {/* @ts-expect-error Server Component */}
        <UserStatusData user={data.user}></UserStatusData>
      </div>
    );
  }
}
