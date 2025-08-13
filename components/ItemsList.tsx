import SingleItem from "./SingleItem";
import itemsimage1 from '@/public/items-image-1.jpg'
import itemsimage2 from '@/public/items-image-2.jpg'
import itemsimage3 from '@/public/items-image-3.jpg'
const items = [
    {
        id: 1,
        image: itemsimage1,
        title: "Chicken Pizza",
        price: 120.00,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 2,
        image: itemsimage2,
        title: "Chicken Burst Pizza",
        price: 150.00,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 3,
        image: itemsimage3,
        title: "Sweet Corn Pizza",
        price: 70.00,
        category: "Pizza",
        Vegetarian: true,
    },
    {
        id: 4,
        image: itemsimage1,
        title: "Chicken Pizza",
        price: 120.00,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 5,
        image: itemsimage2,
        title: "Chicken Burst Pizza",
        price: 150.00,
        category: "Pizza",
        Vegetarian: false,
    },
    {
        id: 6,
        image: itemsimage3,
        title: "Sweet Corn Pizza",
        price: 70.00,
        category: "Pizza",
        Vegetarian: true,
    },
];
export default function ItemsList() {
    return (
        <div className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <SingleItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}
