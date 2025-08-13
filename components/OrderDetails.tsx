import OrderCart from "./OrderCart";
import OrderSummary from "./OrderSummary";
import OrderTable from "./OrderTable";


export default function OrderDetails() {
  return (
    <div className="p-4 rounded-lg bg-gray-50">
      <div className="flex items-center justify-between">
        <h4 className="mb-0 text-xl font-medium capitalize text-tcolor">Order Details</h4>
        <button className="text-base capitalize font-medium text-pcolor cursor-pointer transition-all hover:text-hcolor">back</button>
      </div>
      <OrderTable />
      <OrderCart />
      <OrderSummary />
    </div>
  )
}
