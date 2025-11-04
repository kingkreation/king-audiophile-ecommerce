"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onChange?: (quantity: number) => void;
}

export function QuantitySelector({
  initialQuantity = 1,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  return (
    <div className="flex items-center bg-light-grey">
      <button
        onClick={handleDecrement}
        className="px-4 py-3 hover:text-peach transition"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-6 py-3 text-sm font-bold">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-4 py-3 hover:text-peach transition"
      >
        +
      </button>
    </div>
  );
}
