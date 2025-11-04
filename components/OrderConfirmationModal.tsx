"use client";

import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

interface OrderItem {
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderConfirmationModalProps {
  isOpen: boolean;
  orderNumber: string;
  items: OrderItem[];
  total: number;
}

export function OrderConfirmationModal({
  isOpen,
  orderNumber,
  items,
  total,
}: OrderConfirmationModalProps) {
  if (!isOpen) return null;

  const firstItem = items[0];
  const otherItemsCount = items.length - 1;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-md w-full">
          <div className="mb-6">
            <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M12 16L14.5 18.5L20 13"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold uppercase mb-4">
              Thank you <br /> for your order
            </h2>
            <p className="text-gray-600">
              You will receive an email confirmation shortly.
            </p>
          </div>

          <div className="bg-light-grey rounded-lg mb-6 overflow-hidden">
            <div className="p-6">
              {firstItem && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 bg-white rounded flex-shrink-0">
                    <img
                      src={firstItem.image}
                      alt={firstItem.productName}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{firstItem.productName}</h3>
                    <p className="text-sm text-gray-500">
                      $ {firstItem.price.toLocaleString()}
                    </p>
                  </div>
                  <span className="text-gray-500 font-bold">
                    x{firstItem.quantity}
                  </span>
                </div>
              )}

              {otherItemsCount > 0 && (
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-500 text-center">
                    and {otherItemsCount} other item{otherItemsCount > 1 ? "s" : ""}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-almost-black text-white p-6">
              <p className="text-sm text-gray-400 uppercase mb-2">Grand Total</p>
              <p className="text-xl font-bold">$ {total.toLocaleString()}</p>
            </div>
          </div>

          <Link href="/" className="block">
            <Button className="w-full">Back to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
