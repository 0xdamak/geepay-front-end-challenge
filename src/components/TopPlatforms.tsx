"use client";

import { formatToUSDCurrency } from "../helpers/formatToUSDCurrency";
import { motion } from "framer-motion";
import Link from "next/link";
import ProgressBar from "./UI/ProgressBar";

interface Props {
  data: Array<{
    name: string;
    amount: number;
    rate: string;
    width: string;
  }>;
  seeAll?: boolean;
}
export default function TopPlatforms({
  data,
  seeAll = true,
}: Props): JSX.Element {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="mx-auto max-w-5xl rounded-1xl bg-white px-5 py-4"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h1 className="font-jakarta text-lg font-semibold">Top Platform</h1>
        {seeAll && (
          <Link
            href="/report"
            className="cursor-pointer font-normal text-emerald-400"
          >
            See All
          </Link>
        )}
      </div>
      <div className="space-y-5">
        {data.map((platform) => (
          <div key={encodeURI(platform.name)} className="space-y-3">
            <h1 className="font-jakarta text-lg font-semibold">
              {platform.name}
            </h1>
            <ProgressBar width={platform.width} />
            <div className="flex items-center justify-between gap-4 font-jakarta text-lg text-neutral-600">
              <span>{formatToUSDCurrency(platform.amount)}</span>
              <span>{platform.rate}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
