"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/Button";
import { QuantitySelector } from "@/components/QuantitySelector";
import Link from "next/link";
import { useState, use } from "react";
import { products } from "@/lib/data/products";
import { useCart } from "@/lib/CartContext";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-center text-xl">Product not found</p>
          <Link href="/" className="block text-center mt-8 text-peach hover:underline">
            Return Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    alert(`Added ${quantity} ${product.name} to cart!`);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href={`/${resolvedParams.category}`} className="text-gray-600 hover:text-peach mb-12 inline-block">
          Go Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          <div className="bg-light-grey rounded-lg p-12">
            <div className="relative w-full h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            {product.new && (
              <p className="text-peach uppercase tracking-[10px] text-sm">
                New Product
              </p>
            )}
            <h1 className="text-4xl font-bold uppercase">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <p className="text-2xl font-bold">$ {product.price.toLocaleString()}</p>

            <div className="flex gap-4 items-center">
              <QuantitySelector
                initialQuantity={quantity}
                onChange={setQuantity}
              />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div>
            <h2 className="text-3xl font-bold uppercase mb-8">Features</h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              {product.features.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold uppercase mb-8">In the Box</h2>
            <div className="space-y-2">
              {product.includes.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <span className="text-peach font-bold">{item.quantity}x</span>
                  <span className="text-gray-600">{item.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="bg-light-grey rounded-lg overflow-hidden">
            <img
              src={product.gallery.first}
              alt="Gallery 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-light-grey rounded-lg overflow-hidden">
            <img
              src={product.gallery.second}
              alt="Gallery 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-light-grey rounded-lg overflow-hidden">
            <img
              src={product.gallery.third}
              alt="Gallery 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {product.others && product.others.length > 0 && (
          <section className="mb-32">
            <h2 className="text-3xl font-bold uppercase text-center mb-12">
              You may also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.others.map((other) => (
                <div key={other.slug} className="text-center">
                  <div className="bg-light-grey rounded-lg p-8 mb-6">
                    <div className="relative w-full h-64">
                      <img
                        src={other.image}
                        alt={other.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold uppercase mb-4">{other.name}</h3>
                  <Link href={`/${product.category}/${other.slug}`}>
                    <Button>See Product</Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard
              name="Headphones"
              image="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              href="/headphones"
            />
            <CategoryCard
              name="Speakers"
              image="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              href="/speakers"
            />
            <CategoryCard
              name="Earphones"
              image="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              href="/earphones"
            />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
