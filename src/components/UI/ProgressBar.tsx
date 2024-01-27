import { getRandomColor } from "@/src/helpers/getRandomColor";

interface Props {
  width: string;
}
export default function ProgressBar({ width = "45%" }: Props): JSX.Element {
  return (
    <div className="h-3 w-full rounded-7xl bg-neutral-100">
      <div
        className="h-2.5 rounded-full"
        style={{ width, backgroundColor: getRandomColor() }}
      ></div>
    </div>
  );
}
