import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

interface ProductCardProps {
  name: string;
  slug: string;
  category: string;
  image: string;
  isNew?: boolean;
  description: string;
}

export function ProductCard({
  name,
  slug,
  category,
  image,
  isNew,
  description,
}: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="bg-light-grey rounded-lg p-12 flex items-center justify-center">
        <div className="relative w-full h-80">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-6">
        {isNew && (
          <p className="text-peach uppercase tracking-[10px] text-sm">
            New Product
          </p>
        )}
        <h2 className="text-4xl font-bold uppercase">{name}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <Link href={`/${category}/${slug}`}>
          <Button>See Product</Button>
        </Link>
      </div>
    </div>
  );
}
