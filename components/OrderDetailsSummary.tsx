import React from 'react'

export default function OrderDetailsSummary() {
    return (
        <div className='mt-3'>
            <div className='border border-dashed border-bordercolor2 rounded-lg'>
                <ul className="text-base font-medium mb-3">
                    <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span>Subtotal</span><span>₹200</span></li>
                    <li className="flex items-center justify-between border-dashed border-b border-bordercolor2 last:border-0 py-2 px-4 "><span className='text-2xl capitalize font-bold'>total:</span><span className='text-2xl font-bold'> ₹200</span></li>
                </ul>
            </div>
        </div>
    )
}
