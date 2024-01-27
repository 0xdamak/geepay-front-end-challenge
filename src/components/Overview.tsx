import { motion } from "framer-motion";
import OverviewCard from "./UI/OverviewCard";
import PackageWithVerifiedBadge from "@/public/svgs/package-with-verified-badge.svg";
import PackageWithRotatingArrows from "@/public/svgs/package-with-rotating-arrows.svg";
import Cart from "@/public/svgs/cart.svg";
import DollarSignStamp from "@/public/svgs/dollar-sign-stamp.svg";

export default function Overview(): JSX.Element {
  const reports = [
    {
      title: "Total Order",
      number: 350,
      icon: <PackageWithVerifiedBadge />,
      trend: "upward" as const,
      percentage: 23.5,
    },
    {
      title: "Total Refund",
      number: 270,
      icon: <PackageWithRotatingArrows />,
      trend: "downward" as const,
      percentage: 23.5,
    },
    {
      title: "Average Sales",
      number: 1567,
      icon: <Cart />,
      trend: "downward" as const,
      percentage: 23.5,
    },
    {
      title: "Total Income",
      number: 350,
      icon: <DollarSignStamp />,
      trend: "upward" as const,
      percentage: 23.5,
      currency: true,
    },
  ];
  return (
    <div className="grid h-full w-full gap-6 sm:grid-cols-2">
      {reports.map((report, index) => (
        <motion.div
          key={encodeURI(report.title)}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
          className="max-h-48 xl:max-h-max"
        >
          <OverviewCard {...report} />
        </motion.div>
      ))}
    </div>
  );
}
