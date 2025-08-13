import ItemsList from "@/components/ItemsList";
import OrderDetails from "@/components/OrderDetails";
import SearchFilter from "@/components/SearchFilter";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-6">
          <div className="col-span-2">
            <SearchFilter />
            <ItemsList />
          </div>
          <div>
            <OrderDetails />
          </div>
        </div>
      </div>
    </>
  );
}
