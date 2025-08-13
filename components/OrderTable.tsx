import { FaFile, FaRegUser } from "react-icons/fa6";
import { MdTableBar } from "react-icons/md";
export default function OrderTable() {
    return (
        <ul className="text-base font-medium border border-dashed border-bordercolor2 rounded-lg mt-3">
            <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span><FaFile /></span><span>AC</span></li>
            <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span><FaRegUser /></span><span>2</span></li>
            <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span>Table:</span><span className="flex items-center gap-x-1.5 "><MdTableBar className="text-2xl text-pcolor" /> A6</span></li>
        </ul>
    )
}
