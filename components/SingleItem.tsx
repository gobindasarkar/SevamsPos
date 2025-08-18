"use client"
import { useState } from "react";

import Image, { StaticImageData } from "next/image";
import { FaCartShopping } from "react-icons/fa6";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
interface SingleItemProps {
    image: StaticImageData;
    title: string;
    price: number;
    category: string,
    Vegetarian: boolean
}
interface Variants {
    id: number,
    name: string,
}
const allVariants: Variants[] = [
    { id: 1, name: "Half", },
    { id: 2, name: "Full", },
];
interface Addons {
    id: number,
    name: string,
}
const allAddons: Addons[] = [
    { id: 1, name: "Extra Chicken", },
    { id: 2, name: " Extra Onion", },
];

export default function SingleItem({ image, title, price, category, Vegetarian }: SingleItemProps) {
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

    const handleVariantChange = (name: string) => {
        setSelectedVariant((prev) => (prev === name ? null : name)); // toggle
    };
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
                    <Dialog>
                        <DialogTrigger className="flex items-center px-3 py-2 bg-pcolor rounded-lg gap-x-2 text-white transition-all mt-10 group-hover:mt-0 hover:bg-hcolor cursor-pointer"><FaCartShopping /> ADD</DialogTrigger>
                        <DialogContent>
                            <DialogHeader className="flex items-center gap-x-2 flex-row">
                                <Image
                                    src={image}
                                    alt={title}
                                    className="object-cover w-14 h-14 rounded-lg max-w-14 max-h-14"
                                />
                                <DialogTitle>
                                    {title}
                                </DialogTitle>
                            </DialogHeader>
                            <DialogDescription>
                                <div className="p-1 rounded-lg shadow-sm mb-2 last:mb-0">
                                    <div className="mb-1.5">
                                        <h3 className="bg-pcolor px-1 py-0 rounded-sm text-white text-sm">Variants</h3>
                                        <h4 className="text-xs font-normal mt-0.5">Select only one option</h4>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {allVariants.map((curElm) => (
                                            <li key={curElm.id} className="flex items-center justify-between">
                                                <div className="flex items-center gap-x-2 flex-1">
                                                    {Vegetarian ? (
                                                        <div className="flex items-center justify-center border border-green-600 w-5 h-5 rounded-sm">
                                                            <span className="w-2.5 h-2.5 rounded-lg bg-green-600"></span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center justify-center border border-red-600 w-5 h-5 rounded-sm">
                                                            <span className="w-2.5 h-2.5 rounded-lg bg-red-600"></span>
                                                        </div>
                                                    )}
                                                    <span className="font-medium text-sm text-black">{curElm.name}</span>
                                                </div>
                                                <label className="inline-flex items-center gap-x-2 text-base font-medium text-black cursor-pointer">
                                                    <span>₹ 80.00</span>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedVariant === curElm.name}
                                                        onChange={() => handleVariantChange(curElm.name)}
                                                        className="w-5 h-5 border border-bordercolor2 rounded-lg"
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`p-1 rounded-lg shadow-sm mb-2 last:mb-0 ${selectedVariant ? "" : "hidden"}`}>
                                    <div className="mb-1.5">
                                        <h3 className="bg-pcolor px-1 py-0 rounded-sm text-white text-sm">Addons</h3>
                                        <h4 className="text-xs font-normal mt-0.5">Select one or multiple options</h4>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {allAddons.map((curElm) => (
                                            <li key={curElm.id} className="flex items-center justify-between">
                                                <div className="flex items-center gap-x-2 flex-1">
                                                    {Vegetarian ? (
                                                        <div className="flex items-center justify-center border border-green-600 w-5 h-5 rounded-sm">
                                                            <span className="w-2.5 h-2.5 rounded-lg bg-green-600"></span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex items-center justify-center border border-red-600 w-5 h-5 rounded-sm">
                                                            <span className="w-2.5 h-2.5 rounded-lg bg-red-600"></span>
                                                        </div>
                                                    )}
                                                    <span className="font-medium text-sm text-black">{curElm.name}</span>
                                                </div>
                                                <label className="inline-flex items-center gap-x-2 text-base font-medium text-black">
                                                    <span>₹ 80.00</span>
                                                    <input
                                                        type="checkbox"
                                                        name={curElm.name}
                                                        className="w-5 h-5 border border-bordercolor2 rounded-lg"
                                                    />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </DialogDescription>
                            <DialogFooter className="flex items-center justify-between">
                                <input className="flex-1 w-full h-11 rounded-xl border border-bordercolor2 px-2 ring-0 focus:ring-0 outline-0 text-sm font-normal" type="text" placeholder="Add a cooking request (optional)" id="cookingrequest" />
                                <button className="'px-4 py-2 md:px-3 lg:px-5 lg:py-2.5 rounded-lg bg-pcolor text-sm lg:text-base capitalize text-white cursor-pointer outline-0 transition-all hover:bg-hcolor">+ ₹ 80.00</button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
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
