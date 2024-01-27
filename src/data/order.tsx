import MarcusBergson from "@/public/images/marcus-bergson.jpeg";
import JaydonVaccaro from "@/public/images/jaydon-vaccaro.jpeg";
import CoreySchleifer from "@/public/images/corey-schleifer.jpeg";
import CooperPress from "@/public/images/cooper-press.jpeg";
import PhillipLubin from "@/public/images/phillip-lubin.jpeg";

export const orders = [
  {
    name: "Marcus Bergson",
    date: new Date("Nov 15, 2023"),
    amount: 80000,
    status: "paid" as const,
    image: MarcusBergson,
  },
  {
    name: "Jaydon Vaccaro",
    date: new Date("Nov 15, 2023"),
    amount: 12000,
    status: "refund" as const,
    image: JaydonVaccaro,
  },
  {
    name: "Corey Schleifer",
    date: new Date("Nov 14, 2023"),
    amount: 12000,
    status: "paid" as const,
    image: CoreySchleifer,
  },
  {
    name: "Cooper Press",
    date: new Date("Nov 14, 2023"),
    amount: 12000,
    status: "refund" as const,
    image: CooperPress,
  },
  {
    name: "Phillip Lubin",
    date: new Date("Nov 13, 2023"),
    amount: 12000,
    status: "paid" as const,
    image: PhillipLubin,
  },
  {
    name: "Marcus Bergson",
    date: new Date("Nov 15, 2023"),
    amount: 80000,
    status: "paid" as const,
    image: MarcusBergson,
  },
  {
    name: "Jaydon Vaccaro",
    date: new Date("Nov 15, 2023"),
    amount: 12000,
    status: "refund" as const,
    image: JaydonVaccaro,
  },
  {
    name: "Corey Schleifer",
    date: new Date("Nov 14, 2023"),
    amount: 12000,
    status: "paid" as const,
    image: CoreySchleifer,
  },
  {
    name: "Cooper Press",
    date: new Date("Nov 14, 2023"),
    amount: 12000,
    status: "refund" as const,
    image: CooperPress,
  },
  {
    name: "Phillip Lubin",
    date: new Date("Nov 13, 2023"),
    amount: 12000,
    status: "paid" as const,
    image: PhillipLubin,
  },
];
