import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 uppercase text-sm font-bold tracking-wider transition-colors";

  const variants = {
    primary: "bg-peach hover:bg-pale-peach text-white",
    secondary: "bg-almost-black hover:bg-gray-800 text-white",
    outline: "border-2 border-almost-black hover:bg-almost-black hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
