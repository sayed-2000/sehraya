"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { menuItems, categories } from "@/src/data/index";
import CategoriesSlider from "@/src/components/CategoriesSlider";
import MenuGrid from "@/src/components/MenuGrid";



export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className=" z-20 text-foreground bg-background">
      {/* Hero */}
      <div className="relative flex items-center justify-center mt-10">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            قائمة المنيو
          </h1>
          <p className="text-gray-300 mt-3">اختر من أفضل المشروبات والحلويات</p>
        </div>
      </div>

      <CategoriesSlider
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <MenuGrid items={filteredItems} />

      {/* Back Home */}
      <div className="flex justify-center my-10">
        <Link href="/">
          <Button
            variant="outline"
            className="border-primary/30 cursor-pointer  bg-transparent text-primary hover:bg-primary hover:text-black  px-6 py-6 text-lg
                transition-all duration-300 ease-in-out"
          >
            رجوع الي الرئسيه
          </Button>
        </Link>
      </div>
    </div>
  );
}
