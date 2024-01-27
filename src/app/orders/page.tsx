import { orders } from "../../data/order";
import OrdersTable from "../../components/OrdersTable";

export default function Orders(): JSX.Element {
  return <OrdersTable data={orders} seeAll={false} />;
}
