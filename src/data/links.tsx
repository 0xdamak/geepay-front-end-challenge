import Grid from "@/public/svgs/grid.svg";
import Report from "@/public/svgs/report.svg";
import Customers from "@/public/svgs/customers.svg";
import Package from "@/public/svgs/package.svg";
import Badge from "@/public/svgs/badge.svg";
import Warning from "@/public/svgs/warning.svg";
import RightArrow from "@/public/svgs/right-arrow.svg";
import Gear from "@/public/svgs/gear.svg";
import SignOut from "@/public/svgs/sign-out.svg";

export const links = {
  top: [
    {
      title: "Dashboard",
      icon: <Grid />,
      href: "/",
    },
    {
      title: "Report",
      icon: <Report className="" />,
      href: "/report",
    },
    {
      title: "Customers",
      icon: <Customers />,
      href: "/#",
    },
    {
      title: "Orders",
      icon: <Package />,
      href: "/orders",
    },
    {
      title: "Offers",
      icon: <Badge />,
      href: "/#",
    },
    {
      title: "Refunds",
      icon: <Warning />,
      href: "/#",
    },
  ],
  bottom: [
    {
      title: "Sign In",
      icon: <RightArrow />,
      href: "/#",
    },
    {
      title: "Settings",
      icon: <Gear />,
      href: "/#",
    },
    {
      title: "Sign Out",
      icon: <SignOut />,
      href: "/#",
    },
  ],
};
