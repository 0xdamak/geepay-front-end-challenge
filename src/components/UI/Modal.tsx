"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CloseCircle from "@/public/svgs/close-circle.svg";

interface Props {
  children: ReactNode;
  title: string;
  display: boolean;
  close: () => void;
}

const Modal = ({ title, children, display, close }: Props): JSX.Element => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (display && html !== null) {
      html.style.overflow = "hidden";
    }
    if (!display && html !== null) {
      html.style.removeProperty("overflow");
    }
  }, [display]);

  return (
    <AnimatePresence>
      {display && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={close}
            className="fixed left-0 top-0 z-30 h-screen w-screen bg-black/25"
          />
          <motion.div
            initial={{ scale: 0, x: "-50%" }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={close}
            className="fixed left-1/2 top-1/4 z-30 flex  w-full max-w-lg justify-center p-4"
          >
            <div
              className="flex h-full min-h-48 w-full shrink-0 flex-col rounded-2xl bg-white"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <h1 className="font-jakarta text-xl font-semibold">{title}</h1>
                <div
                  className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full duration-300 hover:bg-gray-100"
                  onClick={close}
                >
                  <CloseCircle className="h-8 w-8" />
                </div>
              </div>
              <div className="h-full px-6 py-5">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
