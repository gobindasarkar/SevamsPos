import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaUtensils } from "react-icons/fa"
export default function SearchFilter() {
    return (
        <div className="flex items-center gap-x-3">
            <div className="flex-1">
                <input className="w-full h-12 border border-bordercolor2 rounded-4xl px-4 ring-0 outline-0" type="text" placeholder="Type to search food..." />
            </div>
            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="px-5 py-2.5 rounded-lg bg-pcolor text-base capitalize text-white cursor-pointer outline-0 flex items-center gap-x-2"><FaUtensils /> Menu</DropdownMenuTrigger>
                    <DropdownMenuContent className="border border-bordercolor2 right-0" align="end">
                        <DropdownMenuItem>Coffee</DropdownMenuItem>
                        <DropdownMenuItem>Pizza</DropdownMenuItem>
                        <DropdownMenuItem>Biriyani</DropdownMenuItem>
                        <DropdownMenuItem>Momos</DropdownMenuItem>
                        <DropdownMenuItem>Moctail and Brevarage</DropdownMenuItem>
                        <DropdownMenuItem>Chinees</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
