"use client";

import { useState } from "react";
import UserAvatarDisplay from "../../../components/UserAvatarDisplay";
import styles from "./userStatusMenu.module.css";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import supabaseBrowser from "../../../util/supabase-browser";
import { useRouter } from "next/navigation";

export default function UserStatusMenu({
  avatarUrl,
  userName,
}: {
  avatarUrl?: string;
  userName: string;
}) {
  const [CollapsedMenu, setCollapsedMenu] = useState(true);

  const router = useRouter();

  const textVariants = {
    hidden: {
      width: `0`,
      marginInline: `0px`,
    },
    show: {
      width: "auto",
      marginInline: `15px`,
    },
  };

  const innerContainerVariants: Variants = {
    normal: {
      backgroundColor: `rgb(215, 215, 215 /0)`,
    },
    expanded: {
      backgroundColor: `rgb(215, 215, 215)`,
    },
  };

  const menuItemVariants: Variants = {
    normal: {
      opacity: 1,
    },
    initial: {
      opacity: 0.2,
      y: `-20px`,
    },
    exit: {
      opacity: 0.2,
      y: `-20px`,
    },
  };

  return (
    <motion.div className={styles.menuContainer}>
      <motion.div
        variants={innerContainerVariants}
        initial={"normal"}
        animate={CollapsedMenu ? "normal" : "expanded"}
        className={styles.iconContainer}
      >
        <div style={{}}></div>
        <UserAvatarDisplay
          sizePx={64}
          userAvatarUrl={avatarUrl}
          onClick={(e) => setCollapsedMenu((v) => !v)}
        ></UserAvatarDisplay>
        <motion.p
          variants={textVariants}
          initial={"hidden"}
          animate={CollapsedMenu ? "hidden" : "show"}
          layout
          className={styles.username}
        >
          {userName}
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.menu}
        style={{ insetBlockStart: `${64 + 10}px` }}
      >
        <AnimatePresence>
          {!CollapsedMenu && (
            <>
              <motion.div
                className={styles.menuItem}
                initial={{ opacity: 0, y: `20px` }}
                animate={{ opacity: 1, y: `0` }}
                exit={{ opacity: 0, y: `20px` }}
              >
                <Link className={styles.menulink} href={"./account"}>
                  个人中心
                </Link>
              </motion.div>
              <motion.div
                className={styles.menuItem}
                initial={{ opacity: 0, y: `20px` }}
                animate={{ opacity: 1, y: `0` }}
                exit={{ opacity: 0, y: `20px` }}
              >
                <button
                  className={styles.menulink}
                  onClick={(e) => {
                    supabaseBrowser.auth.signOut().then(() => {
                      router.refresh();
                    });
                  }}
                >
                  退出登录
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
