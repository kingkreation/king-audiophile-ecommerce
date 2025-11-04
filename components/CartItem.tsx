import Image from "next/image";

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function CartItem({
  name,
  price,
  quantity,
  image,
  onIncrement,
  onDecrement,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 bg-light-grey rounded">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-sm">{name}</h3>
        <p className="text-sm text-gray-500">$ {price.toLocaleString()}</p>
      </div>

      <div className="flex items-center bg-light-grey">
        <button
          onClick={onDecrement}
          className="px-3 py-2 hover:text-peach transition"
        >
          -
        </button>
        <span className="px-3 py-2 text-sm font-bold">{quantity}</span>
        <button
          onClick={onIncrement}
          className="px-3 py-2 hover:text-peach transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
