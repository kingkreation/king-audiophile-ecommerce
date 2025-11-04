import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const speakers = [
  {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    category: "speakers",
    image: "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    isNew: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  },
  {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    category: "speakers",
    image: "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    isNew: false,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
  },
];

export default function SpeakersPage() {
  return (
    <>
      <Header />

      <section className="bg-almost-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase text-center">Speakers</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {speakers.map((product, index) => (
            <div key={product.slug} className={index % 2 === 1 ? "md:flex-row-reverse" : ""}>
              <ProductCard {...product} />
            </div>
          ))}
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

      <Footer />
    </>
  );
}
