"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import { useWindowDimension } from "@/src/hooks/useWindowDimension";
import { links } from "@/src/data/links";
import Link from "next/link";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export default function SideNav(): JSX.Element {
  const pathname = usePathname();
  const { width = 0 } = useWindowDimension();

  function ToolTip({ text }: { text: string }): JSX.Element {
    return (
      <span className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm text-white opacity-0 transition-opacity">
        {text}
      </span>
    );
  }

  if (width < 640) {
    return <></>;
  }
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 border border-neutral-200 bg-gray-100">
      <ul className="flex h-full flex-col items-center gap-6 p-5">
        <li className="mb-1">
          <Logo />
        </li>
        {links.top.map((link, index) => (
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={encodeURI(link.title)}
            className={clsx("relative [&>span]:hover:opacity-100", {
              "rounded-full before:absolute before:left-14 before:top-1/2 before:h-[1.3125rem] before:w-[0.1875rem] before:-translate-y-1/2 before:bg-black-100":
                pathname === link.href,
            })}
          >
            <Link
              href={link.href}
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full duration-300 hover:bg-gray-200/50",
                {
                  "[&>svg>path]:duration-300 [&>svg>path]:hover:stroke-black-100/70":
                    true,
                  "[&>svg>path]:stroke-black-100": pathname === link.href,
                },
              )}
            >
              {link.icon}
            </Link>
            <ToolTip text={link.title} />
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: links.top.length * 0.1 }}
          className="mb-auto"
        >
          <ThemeSwitch />
        </motion.li>
        {links.bottom.map((link, index) => (
          <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (index + 7) * 0.1 }}
            key={encodeURI(link.title)}
            className={clsx("relative [&>span]:hover:opacity-100", {
              "rounded-full before:absolute before:left-14 before:top-1/2 before:h-[1.3125rem] before:w-[0.1875rem] before:-translate-y-1/2 before:bg-black-100":
                pathname === link.href,
            })}
          >
            <Link
              href={link.href}
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-full duration-300 hover:bg-gray-200/50",
                {
                  "[&>svg>path]:duration-300 [&>svg>path]:hover:stroke-black-100/70":
                    true,
                  "[&>svg>path]:stroke-black-100": pathname === link.href,
                  "hover:bg-red-200": link.title === "Sign Out",
                },
              )}
            >
              {link.icon}
            </Link>
            <ToolTip text={link.title} />
          </motion.li>
        ))}
      </ul>
    </aside>
  );
}
