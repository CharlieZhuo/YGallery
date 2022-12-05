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
    <span
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "auto",
        display: "block",
        width: sizePx,
        height: sizePx,
        margin: `5px`,
      }}
    >
      {Boolean(userAvatarUrl) ? (
        <Image
          src={userAvatarUrl!}
          alt={`Avatar of user`}
          width={sizePx}
          height={sizePx}
          style={{
            borderRadius: `50%`,

            outline: `2px solid black`,
            outlineOffset: `-2px`,
          }}
        ></Image>
      ) : (
        <UserIcon
          style={{
            outline: `2px solid black`,
            outlineOffset: `-2px`,
            borderRadius: `50%`,
          }}
          width={sizePx}
          height={sizePx}
        ></UserIcon>
      )}
    </span>
  );
}
