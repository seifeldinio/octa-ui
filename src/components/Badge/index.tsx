import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-1.5 py-0.5 text-xs transition-colors ",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#E8E8E8] text-[#616161]",
        info: "border-transparent bg-[#E0F0FF] text-[#00527C]",
        success: "border-transparent bg-[#CDFEE1] text-[#0C5132]",
        attention: "border-transparent bg-[#FFEF9D] text-[#4F4700]",
        warning: "border-transparent bg-[#FFD6A4] text-[#5E4200]",
        critical: "border-transparent bg-[#FEDAD9] text-[#8E1F0B]",
        new: "border-transparent bg-[#f2f2f2] text-[#616161]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

