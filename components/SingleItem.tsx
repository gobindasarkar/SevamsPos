import Image, { StaticImageData } from "next/image";
import { FaCartShopping } from "react-icons/fa6";


interface SingleItemProps {
    image: StaticImageData;
    title: string;
    price: number;
    category: string,
    Vegetarian: boolean
}

export default function SingleItem({ image, title, price, category, Vegetarian }: SingleItemProps) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-md bg-[#ECEDED] hover:shadow-lg transition-transform hover:scale-[1.02] group">
            <div className="relative w-full h-52">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute w-full h-full bg-black/50 flex items-center justify-center  transition-all opacity-0 group-hover:opacity-100">
                    <button className="flex items-center px-3 py-2 bg-pcolor rounded-lg gap-x-2 text-white transition-all mt-10 group-hover:mt-0 hover:bg-hcolor cursor-pointer"><FaCartShopping /> ADD</button>
                </div>
            </div>
            <div className="p-2 sm:p-4">
                <h3 className="text-lg sm:text-xl font-medium text-black">{title}</h3>
                <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-y-1">
                    <div className="flex items-center gap-x-2 text-xs font-normal text-bcolor ">
                        <div>{category}</div>
                        <div>customisable</div>
                    </div>
                    <div className="flex items-center gap-x-2 flex-1 justify-start sm:justify-end"><span className="font-semibold text-base text-black">₹{price.toFixed(2)}</span> {Vegetarian === true ? <div className="flex items-center justify-center border border-green-600 w-5 h-5"><span className="w-2.5 h-2.5 rounded-full bg-green-600"></span></div> : <div className="flex items-center justify-center border border-red-600 w-5 h-5"><span className="w-2.5 h-2.5 rounded-full bg-red-600"></span></div>}</div>
                </div>
            </div>
        </div>
    )
}
