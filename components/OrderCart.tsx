import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import Quantity from "./Quantity";
import Image, { StaticImageData } from "next/image";

import itemsimage1 from "@/public/items-image-1.jpg";
import itemsimage2 from "@/public/items-image-2.jpg";
import itemsimage3 from "@/public/items-image-3.jpg";

type Item = {
    id: number;
    image: StaticImageData;
    title: string;
    price: number;
    category: string;
    Vegetarian: boolean;
};

const items: Item[] = [
    {
        id: 1,
        image: itemsimage1,
        title: "Chicken Pizza",
        price: 120.0,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 2,
        image: itemsimage2,
        title: "Chicken Burst Pizza",
        price: 150.0,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 3,
        image: itemsimage3,
        title: "Sweet Corn Pizza",
        price: 70.0,
        category: "Pizza",
        Vegetarian: true,
    },
    {
        id: 4,
        image: itemsimage1,
        title: "Chicken Pizza",
        price: 120.0,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 5,
        image: itemsimage2,
        title: "Chicken Burst Pizza",
        price: 150.0,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 6,
        image: itemsimage3,
        title: "Sweet Corn Pizza",
        price: 70.0,
        category: "Pizza",
        Vegetarian: true,
    },
];
export default function OrderCart() {
    return (
        <div className="mt-3">
            <ul className="h-52 overflow-y-auto">
                {items.map((curElm) => {
                    const {id,image,title,price} = curElm;
                    return (
                        <li
                            key={id}
                            className="flex justify-between items-center gap-x-2 py-2 px-3 bg-[#EAF0F0] rounded-2xl mb-3 last:mb-0 relative"
                        >
                            <button className="w-7 h-7 rounded-full bg-red-500 text-white inline-flex items-center justify-center transition-all hover:bg-red-800 cursor-pointer absolute top-2 right-2"><FaRegTrashCan /></button>
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src={image}
                                    alt={title}
                                    width={60}
                                    height={60}
                                    className="rounded-xl"
                                />
                                <div>
                                    <h3 className="font-semibold text-sm sm:text-base capitalize text-tcolor mb-0">{title}</h3>
                                    <h4 className="text-black text-base sm:text-lg font-semibold mb-0">₹ {price.toFixed(2)}</h4>
                                    <button className="text-blue-500 hover:text-blue-700 inline-block p-0 m-0 shadow-none outline-0 cursor-pointer">
                                        <FaPencil />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold capitalize text-tcolor mb-1">quantity</h4>
                                <Quantity />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
