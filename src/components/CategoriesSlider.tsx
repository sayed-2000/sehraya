"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

export default function CategoriesSlider({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const activeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedCategory]);

  return (
    <div className="mt-10 px-4">
      <div
        className="
          flex gap-3 overflow-x-auto
          md:justify-center
          no-scrollbar
          scroll-smooth
        "
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;

          return (
            <div
              key={cat.id}
              ref={isActive ? activeRef : null}
              className="relative shrink-0"
            >
              <Button
                onClick={() => setSelectedCategory(cat.id)}
                variant="ghost"
                className={`
                  relative z-10 cursor-pointer px-5
                  transition-all duration-300
                  ${isActive ? "text-black" : "text-primary "}
                `}
              >
                {cat.name}
              </Button>

              {/* Animated Active Background */}
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="
                    absolute inset-0
                    bg-primary
                    rounded-xl
                    shadow-[0_0_20px_rgba(212,160,23,0.35)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
