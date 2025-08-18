import OrderDetailsCart from '@/components/OrderDetailsCart'
import OrderDetailsSummary from '@/components/OrderDetailsSummary'
import OrderTable from '@/components/OrderTable'
import React from 'react'

export default function page() {
    return (
        <div className="container mx-auto p-4">
            <div className="p-4 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between">
                    <h4 className="mb-0 text-xl font-medium capitalize text-tcolor">Order Details</h4>
                    <button className="text-base capitalize font-medium text-pcolor cursor-pointer transition-all hover:text-hcolor">back</button>
                </div>
                <OrderTable />
                <OrderDetailsCart />
                <OrderDetailsSummary />
            </div>
        </div>
    )
}
