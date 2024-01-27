"use client";

import { useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { formatToUSDCurrency } from "../helpers/formatToUSDCurrency";
import { Button } from "./UI/Button";
import { capitalizeFirstLetters } from "../helpers/capitalizeFirstLetters";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import OpenFile from "@/public/svgs/open-file.svg";
import Modal from "./UI/Modal";
import Logo from "@/public/svgs/logo.svg";

interface Props {
  data: Array<{
    name: string;
    amount: number;
    date: number | Date;
    status: "refund" | "paid";
    image: StaticImageData;
  }>;
  seeAll?: boolean;
}

export default function OrdersTable({
  data,
  seeAll = true,
}: Props): JSX.Element {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<
    Props["data"][number] | null
  >();
  const headerStyle =
    "whitespace-nowrap py-5 px-3 border-b border-gray-150 text-left text-base font-medium capitalize text-gray-400";

  function downloadOrder(): void {
    if (!selectedOrder) return;
    const csvHeader = ["name", "amount", "status", "date"];
    const csvContent = [selectedOrder]
      .map((order) => ({
        name: capitalizeFirstLetters(order.name),
        date: formatDate(order.date),
        amount: formatToUSDCurrency(order.amount),
        status: capitalizeFirstLetters(order.status),
      }))
      .map((order) =>
        csvHeader
          .map((key) => (order as Record<string, string>)[key])
          .join(","),
      )
      .join("\n");

    const csvString = `${csvHeader.map((title) => capitalizeFirstLetters(title)).join(",")}\n${csvContent}`;

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Order - ${selectedOrder?.name}`);

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-1xl bg-white px-5 py-4"
      >
        <div className="mb-5 flex items-center justify-between gap-4">
          {seeAll && (
            <>
              <h1 className="font-jakarta text-lg font-semibold">
                Last Orders
              </h1>
              <Link
                href="/orders"
                className="cursor-pointer font-normal text-emerald-400"
              >
                See All
              </Link>
            </>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className={headerStyle}>Name</th>
                <th className={headerStyle}>Date</th>
                <th className={headerStyle}>Amount</th>
                <th className={headerStyle}>Status</th>
                <th className={headerStyle}>Invoice</th>
              </tr>
            </thead>
            <tbody className="[&>tr:not(:last-child)>td]:border-gray-150 [&>tr:not(:last-child)>td]:border-b">
              {data.map((order) => (
                <tr
                  key={encodeURI(order.name)}
                  className="font-jakarta text-base capitalize [&>td]:px-2 [&>td]:py-5"
                >
                  <td className="text-left font-normal text-stone-600">
                    <div className="flex items-center gap-2">
                      <Image
                        src={order.image}
                        alt="user"
                        width={500}
                        height={500}
                        className="h-8 w-8 shrink-0 rounded-full object-cover"
                      />
                      <span className="min-w-28">{order.name}</span>
                    </div>
                  </td>
                  <td className="!px-8 font-normal text-neutral-500">
                    <span className="inline-block min-w-28">
                      {formatDate(order.date)}
                    </span>
                  </td>
                  <td className="font-medium">
                    {formatToUSDCurrency(order.amount)}
                  </td>
                  <td
                    className={clsx({
                      "text-emerald-400": order.status === "paid",
                      "text-red-400": order.status === "refund",
                    })}
                  >
                    {order.status}
                  </td>
                  <td className="text-sm">
                    <div
                      onClick={() => {
                        setModalDisplay(true);
                        setSelectedOrder(order);
                      }}
                      className="flex cursor-pointer items-center gap-1"
                    >
                      <OpenFile />
                      View
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <Modal
        display={modalDisplay}
        title="Invoice"
        close={() => {
          setModalDisplay(false);
          setSelectedOrder(null);
        }}
      >
        <div>
          <Logo className="m-2 mr-auto scale-150" />
          <h1 className="mt-2 text-xl font-bold text-emerald-400">Geegpay</h1>
        </div>
        <ul className="my-8 space-y-4">
          <li className="flex items-center gap-4">
            <h1 className="w-16 font-jakarta font-semibold text-neutral-800">
              Name:
            </h1>
            <span className="text-gray-600">{selectedOrder?.name}</span>
          </li>
          <li className="flex items-center gap-4">
            <h1 className="w-16 font-jakarta font-semibold text-neutral-800">
              Date:
            </h1>
            <span className="text-gray-600">
              {formatDate(selectedOrder?.date ?? new Date())}
            </span>
          </li>
          <li className="flex items-center gap-4">
            <h1 className="w-16 font-jakarta font-semibold text-neutral-800">
              Status:
            </h1>
            <span
              className={clsx("capitalize", {
                "text-emerald-400": selectedOrder?.status === "paid",
                "text-red-400": selectedOrder?.status === "refund",
              })}
            >
              {selectedOrder?.status}
            </span>
          </li>
          <li className="border-t border-neutral-300">
            <h1
              className={clsx("my-4 text-left text-3xl", {
                "text-emerald-400": selectedOrder?.status === "paid",
                "text-red-400": selectedOrder?.status === "refund",
              })}
            >
              {formatToUSDCurrency(selectedOrder?.amount)}
            </h1>
          </li>
        </ul>
        <div className="flex items-center justify-end gap-4">
          <Button
            color="primary"
            text="Cancel"
            onClick={() => {
              setModalDisplay(false);
              setSelectedOrder(null);
            }}
          />
          <Button color="secondary" text="Download" onClick={downloadOrder} />
        </div>
      </Modal>
    </>
  );
}
