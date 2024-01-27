import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { clsx } from "clsx";
import type { Metadata } from "next";
import TopNav from "../components/UI/TopNav";
import SideNav from "../components/UI/SideNav";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Geegpay - Global Banking for Africa's Professionals",
  description:
    "Create USD, GBP, and EUR virtual bank accounts to easily receive international payments for your work. Get USD virtual cards that work everywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={clsx("sm:ml-20", inter.variable, jakarta.variable)}>
        <SideNav />
        <TopNav />
        <main className="mx-auto mt-[5.5rem] h-[calc(100vh-5.5rem)] max-w-8xl overflow-y-auto p-3 sm:p-5">
          {children}
        </main>
      </body>
    </html>
  );
}
