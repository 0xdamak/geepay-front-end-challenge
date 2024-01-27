import {
  type ChartData,
  type ChartOptions,
  CategoryScale,
  Chart,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
} from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

interface LineProps {
  datasetIdKey: string;
  options: ChartOptions<"line">;
  data: ChartData<"line">;
}

interface BarProps {
  datasetIdKey: string;
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
}

export function LineChart(props: LineProps): JSX.Element {
  Chart.register(
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  );
  return <Line {...props} />;
}

export function BarChart(props: BarProps): JSX.Element {
  Chart.register(
    PointElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  );
  return <Bar {...props} />;
}
