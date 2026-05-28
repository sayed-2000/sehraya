"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
      <section className="relative  w-full">
          
      {/* Content */}
      <div className="relative  mt-[-90px] z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="cursor-pointer! text-5xl md:text-7xl font-bold text-white tracking-wide">
          سهراية
        </h1>

        <p className="mt-4 max-w-2xl text-lg md:text-2xl text-text-color">
          عش أجواء السهر مع أفضل المشروبات والحلويات
        </p>

        <div className="mt-8">
          <Link href="/menu" className="cursor-pointer!">
            <Button
              variant="outline"
              className="border-primary/30 cursor-pointer  bg-transparent text-primary hover:bg-primary hover:text-black  px-6 py-6 text-lg
                transition-all duration-300 ease-in-out"
            >
              استعرض المنيو
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
