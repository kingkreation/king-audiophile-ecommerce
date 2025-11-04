"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { CartModal } from "./CartModal";
import { useCart } from "@/lib/CartContext";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <header className="bg-almost-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                </g>
              </svg>
            </button>

            <Link href="/" className="text-2xl font-bold">
              audiophile
            </Link>

            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
                Home
              </Link>
              <Link href="/headphones" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
                Headphones
              </Link>
              <Link href="/speakers" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
                Speakers
              </Link>
              <Link href="/earphones" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
                Earphones
              </Link>
            </nav>

            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-peach transition relative"
            >
              <ShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-peach text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <Link href="/" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
              Home
            </Link>
            <Link href="/headphones" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
              Headphones
            </Link>
            <Link href="/speakers" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
              Speakers
            </Link>
            <Link href="/earphones" className="hover:text-peach transition uppercase text-sm font-bold tracking-wider">
              Earphones
            </Link>
          </nav>
        </div>
      )}

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
