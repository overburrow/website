"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

import "./animation.css";

type LogoProps = {
  size: number;
  animated?: boolean;
} & ComponentProps<"div">;

export const Logo = ({
  size,
  animated = false,
  className,
  ...props
}: LogoProps) => {
  return (
    <div
      {...props}
      style={{ width: size, height: size }}
      className={cn("group relative", className)}
    >
      <LogoSVG animated={animated} />
    </div>
  );
};

type LogoSVGProps = {
  animated: boolean;
};

const LogoSVG = ({ animated }: LogoSVGProps) => {
  return (
    <svg viewBox="-80 -86 160 160">
      <defs>
        <mask id="logo-outer-mask">
          <rect x="-72" y="-72" width="144" height="135.5" fill="white" />
          <circle cy="16" r="60" fill="black" />
        </mask>
        <mask id="logo-inner-mask">
          <rect x="-72" y="-72" width="144" height="135.5" fill="white" />
          <circle cy="40" r="36" fill="black" />
        </mask>
      </defs>

      <circle
        r="72"
        mask="url(#logo-outer-mask)"
        className={cn("fill-foreground", animated && "animate-breathe-md")}
      />
      <circle
        cy="24"
        r="48"
        mask="url(#logo-inner-mask)"
        className={cn("fill-foreground", animated && "animate-breathe-lg")}
      />
    </svg>
  );
};
