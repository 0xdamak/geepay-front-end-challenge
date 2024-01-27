"use client";

import { usePathname } from "next/navigation";
import { useWindowDimension } from "@/src/hooks/useWindowDimension";
import { Menu, Transition } from "@headlessui/react";
import { clsx } from "clsx";
import { links } from "@/src/data/links";
import { formatDate } from "@/src/helpers/formatDate";
import Link from "next/link";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import MagnifyingGlass from "@/public/svgs/magnifying-glass.svg";
import Calendar from "@/public/svgs/calendar.svg";
import Bell from "@/public/svgs/bell.svg";
import ChevronDown from "@/public/svgs/chevron-down.svg";
import User from "@/public/images/user.jpeg";

export default function TopNav(): JSX.Element {
  const pathname = usePathname();
  const { width = 0 } = useWindowDimension();

  function getPageTitle(): string {
    if (pathname === "/") return "Dashboard";
    if (pathname === "/report") return "Report";
    if (pathname === "/orders") return "Orders";
    return "";
  }

  function MenuItem({
    title,
    icon,
    href,
  }: {
    title: string;
    icon: JSX.Element;
    href: string;
  }): JSX.Element {
    return (
      <Menu.Item>
        <Link
          href={href}
          className={clsx(
            "flex items-center gap-3 rounded-7xl px-4 py-2 duration-300 hover:bg-gray-100",
            {
              "bg-emerald-400 [&>span]:text-white [&>span]:hover:text-gray-400 [&>svg>path]:stroke-white [&>svg>path]:hover:stroke-gray-400":
                pathname === href,
            },
          )}
        >
          {icon}
          <span className="text-sm font-semibold text-gray-400">{title}</span>
        </Link>
      </Menu.Item>
    );
  }

  return (
    <nav className="fixed left-0 top-0 z-10 h-[5.5rem] w-full border-b border-gray-300 bg-neutral-50 p-4 sm:ml-20 sm:w-[calc(100vw-5rem)]">
      <ul className="flex h-full w-full items-center gap-2 sm:gap-4">
        {width < 640 && (
          <li>
            <Logo />
          </li>
        )}
        <li className="mr-auto">
          <h1 className="font-jakarta text-base font-semibold sm:text-xl">
            {getPageTitle()}
          </h1>
        </li>
        {width > 1023 && (
          <li className="relative">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              className="h-12 w-full max-w-80 rounded-3xl border border-gray-200 bg-white px-10 placeholder:text-neutral-600"
              type="text"
              placeholder="Search..."
            />
          </li>
        )}
        {width > 767 && (
          <li className="flex items-center gap-4">
            <Calendar />
            <span className="text-sm font-medium text-neutral-800">
              {formatDate(new Date(), "long")}
            </span>
          </li>
        )}

        {width < 640 && (
          <li>
            <ThemeSwitch display="mobile" />
          </li>
        )}

        <li>
          <Menu as="div" className="relative flex">
            <Menu.Button>
              <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full sm:ml-5 sm:border sm:border-gray-200">
                <Bell />
              </span>
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute -right-8 top-10 z-10 flex w-72 flex-col space-y-4 rounded-xl bg-white p-4 shadow-lg">
                <Menu.Item>
                  <div className="space-y-2">
                    <h1 className="font-jakarta text-xs text-gray-500">
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                      New notification 🚀
                    </h1>
                    <div className="rounded-lg bg-gray-100 p-2">
                      <h2 className="mb-1 font-jakarta text-sm font-semibold text-black">
                        Order Complete!
                      </h2>
                      <p className="text-sm">
                        Order to Marcus Bergson has been completed
                      </p>
                    </div>
                  </div>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>

        <li className="ml-1 flex h-10 min-w-fit items-center justify-between gap-2 rounded-4xl border border-gray-200 px-2 py-1 sm:h-13 sm:min-w-52 [&>*]:flex-shrink-0">
          <Image
            src={User}
            alt="user"
            width={500}
            height={500}
            className="h-7 w-7 rounded-full object-cover sm:h-9 sm:w-9"
          />
          {width > 639 && (
            <h2 className="text-right text-base font-normal">
              Justin Bergson
              <span className="block text-sm text-stone-500">
                Justin@gmail.com
              </span>
            </h2>
          )}
          <Menu as="div" className="relative flex">
            <Menu.Button>
              <ChevronDown className="cursor-pointer sm:ml-1" />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 top-10 z-10 flex w-72 flex-col space-y-4 rounded-xl bg-white p-4 shadow-lg">
                {width < 640 && (
                  <Menu.Item>
                    <div className="flex items-center gap-4">
                      <Image
                        src={User}
                        alt="user"
                        width={500}
                        height={500}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <h2 className="text-left text-base font-normal">
                        Justin Bergson
                        <span className="block text-sm text-stone-500">
                          Justin@gmail.com
                        </span>
                      </h2>
                    </div>
                  </Menu.Item>
                )}
                {width < 640 &&
                  links.top.map((link) => (
                    <MenuItem key={encodeURI(link.title)} {...link} />
                  ))}
                {links.bottom.map((link) => (
                  <MenuItem key={encodeURI(link.title)} {...link} />
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </nav>
  );
}
