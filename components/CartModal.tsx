"use client";

import { X } from "lucide-react";
import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, total, itemCount, updateQuantity, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      <div className="fixed top-32 right-6 bg-white rounded-lg p-8 z-50 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold uppercase">Cart ({itemCount})</h2>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-gray-400 hover:text-peach transition text-sm underline"
            >
              Remove all
            </button>
          )}
        </div>

        <div className="space-y-6 mb-8">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
                onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
                onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
              />
            ))
          )}
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-gray-500 uppercase">Total</span>
          <span className="text-xl font-bold">$ {total.toLocaleString()}</span>
        </div>

        {items.length > 0 && (
          <Link href="/checkout" onClick={onClose}>
            <Button className="w-full">Checkout</Button>
          </Link>
        )}
      </div>
    </>
  );
}
