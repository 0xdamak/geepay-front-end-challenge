"use client";

import { useEffect, useState } from "react";
import { orders } from "../data/order";
import { platforms } from "../data/platforms";
import OrdersTable from "../components/OrdersTable";
import TopPlatforms from "../components/TopPlatforms";
import SalesTrends from "../components/SalesTrends";
import Overview from "../components/Overview";
import PageLoader from "../components/UI/PageLoader";

export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <section className="mb-7 grid grid-cols-8 gap-6">
        <div className="col-span-full rounded-1xl bg-white px-5 py-4 xl:col-span-5">
          <SalesTrends />
        </div>
        <div className="col-span-full xl:col-span-3">
          <Overview />
        </div>
      </section>

      <section className="grid grid-cols-8 gap-6">
        <div className="col-span-full lg:col-span-5">
          <OrdersTable data={orders.slice(0, 5)} />
        </div>
        <div className="col-span-full lg:col-span-3">
          <TopPlatforms data={platforms.slice(0, 4)} />
        </div>
      </section>
    </>
  );
}
