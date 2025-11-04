import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="bg-light-grey rounded-lg p-6 text-center hover:shadow-lg transition group cursor-pointer">
        <div className="relative w-full h-40 mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-lg font-bold uppercase mb-2">{name}</h3>
        <div className="flex items-center justify-center text-sm text-gray-600 group-hover:text-peach transition">
          <span className="uppercase font-bold tracking-wider">Shop</span>
          <ChevronRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
}
