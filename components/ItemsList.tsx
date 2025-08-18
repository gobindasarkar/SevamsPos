"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import SingleItem from "./SingleItem";
import itemsimage1 from "@/public/items-image-1.jpg";
import itemsimage2 from "@/public/items-image-2.jpg";
import itemsimage3 from "@/public/items-image-3.jpg";
import { StaticImageData } from "next/image";

type Item = {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  category: string;
  Vegetarian: boolean;
};

const allItems: Item[] = [
  { id: 1, image: itemsimage1, title: "Chicken Pizza", price: 120, category: "Pizza", Vegetarian: false },
  { id: 2, image: itemsimage2, title: "Chicken Burst Pizza", price: 150, category: "Pizza", Vegetarian: false },
  { id: 3, image: itemsimage3, title: "Sweet Corn Pizza", price: 70, category: "Pizza", Vegetarian: true },
  { id: 4, image: itemsimage1, title: "Chicken Pizza", price: 120, category: "Pizza", Vegetarian: false },
  { id: 5, image: itemsimage2, title: "Chicken Burst Pizza", price: 150, category: "Pizza", Vegetarian: false },
  { id: 6, image: itemsimage3, title: "Sweet Corn Pizza", price: 70, category: "Pizza", Vegetarian: true },
  { id: 7, image: itemsimage1, title: "BBQ Chicken Pizza", price: 180, category: "Pizza", Vegetarian: false },
  { id: 8, image: itemsimage2, title: "Paneer Pizza", price: 110, category: "Pizza", Vegetarian: true },
  { id: 9, image: itemsimage3, title: "Veggie Delight Pizza", price: 95, category: "Pizza", Vegetarian: true },
  { id: 10, image: itemsimage1, title: "Mushroom Pizza", price: 100, category: "Pizza", Vegetarian: true },
  { id: 11, image: itemsimage2, title: "Double Cheese Pizza", price: 160, category: "Pizza", Vegetarian: true },
  { id: 12, image: itemsimage3, title: "Farmhouse Pizza", price: 200, category: "Pizza", Vegetarian: true },
];

export default function ItemsList() {
  const [visibleItems, setVisibleItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const firstLoad = 6;
  const itemsPerPage = 6;

  const loadMore = useCallback(() => {
    const start = page === 1 ? 0 : firstLoad + (page - 2) * itemsPerPage;
    const end = page === 1 ? firstLoad : start + itemsPerPage;

    const newItems = allItems.slice(start, end);

    setVisibleItems((prev) => [...prev, ...newItems]);
    setHasMore(end < allItems.length);
  }, [page]);

  useEffect(() => {
    loadMore();
  }, [page, loadMore]);
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore]);

  return (
    <div className="mt-6">
      <div className="grid gap-3 sm:gap-6 grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
      </div>
      {hasMore && (
        <div ref={loaderRef} className="text-center p-4 text-gray-500">
          Loading more items...
        </div>
      )}
    </div>
  );
}
