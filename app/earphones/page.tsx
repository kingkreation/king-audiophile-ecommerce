import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const earphones = [
  {
    name: "YX1 Wireless Earphones",
    slug: "yx1-earphones",
    category: "earphones",
    image: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    isNew: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  },
];

export default function EarphonesPage() {
  return (
    <>
      <Header />

      <section className="bg-almost-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase text-center">Earphones</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {earphones.map((product) => (
            <ProductCard key={product.slug} {...product} />
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
