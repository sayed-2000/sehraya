"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  ingredients: string;
}

interface Props {
  items: MenuItem[];
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function MenuGrid({ items }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        grid grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        gap-6 p-6 mt-6
      "
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={cardVariants}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            border border-primary
            rounded-xl overflow-hidden
            shadow-lg hover:shadow-2xl
            transition-all duration-300
            bg-black/20 backdrop-blur-md
          "
        >
          {/* Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={`/assets${item.image}`}
              alt={item.name}
              loading="lazy"
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         25vw"
              fill
              className="
                object-cover
                transition-transform duration-500
                hover:scale-110
              "
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-2 bg-black/40">
            <h3 className="text-lg font-bold text-text-color">{item.name}</h3>

            <p className="text-primary font-semibold">{item.price}</p>

            <Link
              href={`/menu/${item.id}`}
              className="w-full  rounded-md  transition-all duration-300
                hover:scale-[1.02]"
            >
              <Button
                className="
                py-5
                w-full
                cursor-pointer
                bg-primary text-black
                hover:bg-primary/90
                
              "
              >
                عرض
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
