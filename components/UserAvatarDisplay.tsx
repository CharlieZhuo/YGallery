"ues Client";

import Image from "next/image";

import { User as UserIcon } from "react-feather";

import { MouseEvent } from "react";

export default function UserAvatarDisplay({
  userAvatarUrl,
  sizePx,
  onClick,
}: {
  userAvatarUrl?: string;
  sizePx: number;
  onClick?: (e: MouseEvent) => void;
}) {
  return (
    <span onClick={onClick} style={{ cursor: onClick ? "pointer" : "auto" }}>
      {Boolean(userAvatarUrl) ? (
        <Image
          src={userAvatarUrl!}
          alt={`Avatar of user`}
          width={sizePx}
          height={sizePx}
        ></Image>
      ) : (
        <UserIcon width={sizePx} height={sizePx}></UserIcon>
      )}
    </span>
  );
}
