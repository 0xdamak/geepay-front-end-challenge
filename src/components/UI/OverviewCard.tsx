import { clsx } from "clsx";
import { formatToThreeDecimalPlaces } from "@/src/helpers/formatToThreeDecimalPlaces";
import { type ReactNode } from "react";
import UpwardTrendChart from "@/public/svgs/upward-trend-chart.svg";
import UpwardTrendArrow from "@/public/svgs/upward-trend-arrow.svg";
import DownwardTrendChart from "@/public/svgs/downward-trend-chart.svg";
import DownwardTrendArrow from "@/public/svgs/downward-trend-arrow.svg";

interface Props {
  title: string;
  number: number;
  trend: "upward" | "downward";
  icon: ReactNode;
  percentage: number;
  currency?: boolean;
}

export default function OverviewCard({
  number,
  icon,
  title,
  trend,
  currency,
  percentage,
}: Props): JSX.Element {
  return (
    <div className="flex h-full w-full min-w-56 flex-col justify-center gap-4 rounded-1xl bg-white px-5 py-4 xl:gap-6">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center gap-4 rounded-full border border-gray-200">
          {icon}
        </span>
        {trend === "upward" && <UpwardTrendChart />}
        {trend === "downward" && <DownwardTrendChart />}
      </div>

      <div>
        <h2 className="font-jakarta text-lg font-medium text-neutral-400">
          {title}
        </h2>
        <h1 className="font-jakarta text-2xl">
          {!currency && number.toLocaleString()}
          {currency && `$${formatToThreeDecimalPlaces(number)}`}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={clsx(
            "flex items-center gap-1 rounded-full px-2 py-1 text-xs",
            {
              "bg-emerald-400/10 text-emerald-400": trend === "upward",
              "bg-red-400/10 text-red-400": trend === "downward",
            },
          )}
        >
          {trend === "upward" && <UpwardTrendArrow />}
          {trend === "downward" && <DownwardTrendArrow />}
          <span className="text-sm xl:text-xs">{percentage}%</span>
        </div>
        <span>vs. previous month</span>
      </div>
    </div>
  );
}
