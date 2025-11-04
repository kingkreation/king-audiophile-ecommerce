import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      
      <section className="bg-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 text-center md:text-left">
          <p className="text-gray-400 uppercase tracking-[10px] text-sm mb-6">
            New Product
          </p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 max-w-md">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
            <Button>See Product</Button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
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

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">
              Bringing you the <span className="text-peach">best</span> audio gear
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-light-grey rounded-lg overflow-hidden">
            <div className="relative w-full h-96">
              <img
                src="/assets/shared/desktop/image-best-gear.jpg"
                alt="Best gear"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
