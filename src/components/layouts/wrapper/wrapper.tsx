"use client";

import { cn } from "@/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
}

interface WrapperProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(`max-w-[95vw] mx-auto xl:px-16 lg:px-10 px-6`, className)}
    >
      {children}
    </div>
  );
};
