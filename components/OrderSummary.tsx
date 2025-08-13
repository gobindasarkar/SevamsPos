import React from 'react'

export default function OrderSummary() {
    return (
        <div className='mt-3'>
            <div className='border border-dashed border-bordercolor2 rounded-lg'>
                <ul className="text-base font-medium mb-3">
                    <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span>Subtotal</span><span>₹200</span></li>
                    <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span className='text-2xl capitalize font-bold'>total:</span><span className='text-2xl font-bold'> ₹200</span></li>
                </ul>
                <div className='flex items-center gap-2 justify-center py-3 px-1'>
                    <button className='px-4 py-2 md:px-3 lg:px-5 lg:py-2.5 rounded-lg bg-[#EC5A5A] text-sm lg:text-base capitalize text-white cursor-pointer outline-0 transition-all hover:bg-hcolor'>cancel order</button>
                    <button className='px-4 py-2 md:px-3 lg:px-5 lg:py-2.5 rounded-lg bg-pcolor text-sm lg:text-base capitalize text-white cursor-pointer outline-0 transition-all hover:bg-hcolor'>Send Order</button>
                </div>
            </div>
        </div>
    )
}
