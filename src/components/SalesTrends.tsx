import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { BarChart } from "../components/UI/Charts";
import { formatToThreeDecimalPlaces } from "../helpers/formatToThreeDecimalPlaces";
import { type ScriptableContext } from "chart.js";
import ChevronDown from "@/public/svgs/chevron-down.svg";

const durations = ["daily", "weekly", "monthly", "annually"] as const;

export default function SalesTrends(): JSX.Element {
  const [selectedDuration, setSelectedDuration] =
    useState<(typeof durations)[number]>("daily");

  const sales = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        id: 1,
        label: "Monthly Sales",
        data: [7, 16, 3, 27, 9, 45, 9, 25, 33, 8, 30, 21],
        fill: "start",
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(52,202,165,0.8)");
          gradient.addColorStop(1, "rgba(52,202,165,0.1)");
          return gradient;
        },
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="mb-5 flex items-center justify-between gap-4"
      >
        <h1 className="font-jakarta text-lg font-semibold">Sales Trends</h1>
        <div className="flex items-center gap-2">
          <span className="cursor-pointer font-normal text-emerald-400">
            Sort by :
          </span>
          <Listbox value={selectedDuration} onChange={setSelectedDuration}>
            <div className="relative">
              <Listbox.Button className="flex h-8 min-w-24 items-center justify-center gap-2 rounded-full border border-gray-200 px-3 py-2">
                <span className="font-jakarta text-xs capitalize">
                  {selectedDuration}
                </span>
                <ChevronDown />
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute right-0 top-10 flex w-40 flex-col rounded-xl bg-white p-4 shadow-lg">
                  {durations.map((duration) => (
                    <Listbox.Option
                      key={duration}
                      value={duration}
                      className="relative cursor-pointer rounded-7xl px-3 py-1 duration-300 hover:bg-gray-100"
                    >
                      {({ selected }) => (
                        <>
                          {selected && (
                            <span className="absolute left-2 top-1/2 mr-2 inline-block h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-400" />
                          )}
                          <span className="ml-4 capitalize">{duration}</span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </motion.div>
      <BarChart
        options={{
          plugins: {
            tooltip: {
              usePointStyle: true,
              boxWidth: 5,
              callbacks: {
                label: function (context) {
                  const { y: value } = context.parsed;
                  const label = formatToThreeDecimalPlaces(value);
                  return label;
                },
              },
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: false,
              },
            },
            y: {
              title: {
                display: false,
              },
              ticks: {
                callback: function (value) {
                  return formatToThreeDecimalPlaces(+value);
                },
              },
            },
          },
        }}
        data={sales}
        datasetIdKey="sales"
      />
    </>
  );
}
