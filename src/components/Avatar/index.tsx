import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

// Variants for the Avatar component
const avatarVariants = cva(
  "rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center text-center",
  {
    variants: {
      variant: {
        pink: "bg-[#FBCFFB] text-[#791A79]",
        mint: "bg-[#38FAA3] text-[#0C5132]",
        blue: "bg-[#C0E1FF] text-[#00527C]",
        red: "bg-[#FED1DD] text-[#8D0448]",
      },
      size: {
        sm: "h-8 w-8",
        medium: "h-12 w-12 rounded-2xl",
        large: "h-16 w-16 rounded-3xl",
      },
    },
    defaultVariants: {
      size: "medium",
      variant: "pink",
    },
  }
);

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  children?: React.ReactNode; // Allowing either image URL or text as children
}

// Avatar component
export function Avatar({
  className,
  size,
  variant,
  children,
  ...props
}: AvatarProps) {
  const isImage =
    typeof children === "string" &&
    children.match(/\.(jpeg|jpg|gif|png)$/) != null;

  return (
    <div
      className={cn(avatarVariants({ size, variant }), className)}
      style={isImage ? { backgroundImage: `url(${children})` } : undefined}
      {...props}
    >
      {!isImage && children}
    </div>
  );
}
