"use client";

import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import Link, { type LinkProps } from "next/link";

type Type = "button" | "submit" | "reset" | "link";

type BaseButtonTypeProps = HTMLMotionProps<"button"> & {
  color?: "primary" | "secondary" | "white";
  className?: string;
};

type BaseLinkTypeProps = LinkProps & {
  color?: "primary" | "secondary" | "white";
  className?: string;
};

type BaseButtonProps = {
  icon?: ReactNode;
  type?: Type;
  text: string;
} & (BaseButtonTypeProps | BaseLinkTypeProps);

const motionProps = {
  initial: {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  whileHover: { scale: 1.01, boxShadow: "0 12px 18px -3px rgb(0 0 0 / 0.1)" },
  whileTap: { scale: 0.99, boxShadow: "0 8px 12px -2px rgb(0 0 0 / 0.1)" },
};

export function Button({
  icon,
  type,
  text,
  className,
  color = "primary",
  ...props
}: BaseButtonProps): JSX.Element {
  const classes = clsx(
    "flex h-10 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-7xl border px-4 py-2 text-sm font-semibold text-black-300 xs:text-base sm:h-12 sm:px-7 sm:py-3",
    {
      "bg-white": color === "white",
      "bg-gray-50": color === "primary",
      "border-emerald-400 bg-emerald-400 text-white": color === "secondary",
    },
    className,
  );
  if (type === "link") {
    return (
      <Link legacyBehavior {...(props as BaseLinkTypeProps)}>
        <motion.a {...motionProps} className={classes}>
          {text}
          {icon}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      {...(props as BaseButtonTypeProps)}
      type={type}
      className={classes}
    >
      {text}
      {icon}
    </motion.button>
  );
}
