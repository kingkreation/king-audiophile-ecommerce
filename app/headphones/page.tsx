import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

const headphones = [
  {
    name: "XX99 Mark II",
    slug: "xx99-mark-two-headphones",
    category: "headphones",
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
    isNew: true,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  },
  {
    name: "XX99 Mark I",
    slug: "xx99-mark-one-headphones",
    category: "headphones",
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
    isNew: false,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
  },
  {
    name: "XX59",
    slug: "xx59-headphones",
    category: "headphones",
    image: "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
    isNew: false,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  },
];

export default function HeadphonesPage() {
  return (
    <>
      <Header />

      <section className="bg-almost-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase text-center">Headphones</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {headphones.map((product, index) => (
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
