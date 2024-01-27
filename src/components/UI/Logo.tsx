import Link from "next/link";
import LogoImage from "@/public/svgs/logo.svg";

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <LogoImage />
    </Link>
  );
}
