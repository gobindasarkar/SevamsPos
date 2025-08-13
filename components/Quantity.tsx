"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

type QuantitySelectorProps = {
  min?: number;
  max?: number;
  step?: number;
  initial?: number;
  onChange?: (value: number) => void;
};

export default function Quantity({
  min = 1,
  max = 99,
  step = 1,
  initial = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(initial);

  const updateQuantity = (value: number) => {
    if (value < min || value > max) return;
    setQuantity(value);
    onChange?.(value);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <button
        onClick={() => updateQuantity(quantity - step)}
        disabled={quantity <= min}
        className="w-7 h-7 rounded-full bg-pcolor text-white inline-flex items-center justify-center transition-all hover:bg-hcolor cursor-pointer"
      >
        <FaMinus />
      </button>

      <span className="min-w-[2rem] md:min-w-[3rem] text-center text-lg sm:text-2xl bg-white text-tcolor font-semibold rounded-3xl">{quantity}</span>

      <button
        onClick={() => updateQuantity(quantity + step)}
        disabled={quantity >= max}
        className="w-7 h-7 rounded-full bg-pcolor text-white inline-flex items-center justify-center transition-all hover:bg-hcolor cursor-pointer"
      >
       <FaPlus />
      </button>
    </div>
  );
}
