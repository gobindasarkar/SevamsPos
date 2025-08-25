import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import OrderDetails from "./OrderDetails";
import { IoBagOutline } from "react-icons/io5";
export default function OrderSummaryMobile() {
    return (
        <div className="fixed bottom-0 left-0 block sm:hidden bg-white shadow-[0_0_35px_rgba(0,0,0,0.25)] py-3 px-4 w-full rounded-tr-xl rounded-tl-xl">
            <div className="flex">
                <div className="flex-1 flex items-center gap-x-2.5 justify-between">
                    <div className="relative">
                        <IoBagOutline className="text-4xl text-black" />
                        <span className="bg-pcolor absolute -right-1 -top-1 w-6 h-6 rounded-full text-xs text-white inline-flex justify-center items-center">5</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold text-tcolor mb-0">Subtotal: ₹200</h4>
                        <h5 className="text-xs text-gray-700">Extra charges may apply</h5>
                    </div>
                </div>
                <Dialog>
                    <DialogTrigger className="px-5 py-2.5 rounded-lg bg-pcolor text-base capitalize text-white cursor-pointer outline-0 flex items-center gap-x-2">order summary</DialogTrigger>
                    <DialogContent className="p-0">
                        <DialogHeader>
                            <OrderDetails />
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
