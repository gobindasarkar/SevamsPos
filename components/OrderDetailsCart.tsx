
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
export default function OrderDetailsCart() {
    return (
        <div className="mt-3">
            <h3 className='text-base lg:text-xl font-medium capitalize mt-3 mb-2'>KOT-25/26-59</h3>
            <ul className="h-52 overflow-y-auto">
                {items.map((curElm) => {
                    const {id,image,title,price} = curElm;
                    return (
                        <li
                            key={id}
                            className="flex justify-between items-center gap-x-2 py-2 px-3 bg-[#EAF0F0] rounded-2xl mb-3 last:mb-0 relative"
                        >
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
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm sm:text-base font-semibold capitalize text-tcolor mb-1">quantity</h4>
                                <h3 className="text-xl font-semibold text-black">2</h3>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
