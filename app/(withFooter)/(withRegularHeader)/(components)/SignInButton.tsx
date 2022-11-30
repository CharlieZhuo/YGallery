import Link from "next/link";

export default function SignInButton() {
  return (
    <Link href={`/login`}>
      <button>登录</button>
    </Link>
  );
}
