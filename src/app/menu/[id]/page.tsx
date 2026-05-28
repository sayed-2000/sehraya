"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/src/data";
import { motion } from "framer-motion";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DrinkDetailsPage({ params }: Props) {
  const { id } = await params;

  const item = menuItems.find((drink) => drink.id === Number(id));

  if (!item) {
    return notFound();
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="  z-30  px-4 "
    >
      <motion.div
        className="
         flex justify-center items-center
         min-h-[calc(100vh-160px)]
        "
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Content */}
        <div
          className="
            bg-black/30
            backdrop-blur-xl
            border border-primary/20
            rounded-3xl
            p-8
            shadow-xl
            max-w-2xl
          "
        >
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div>
              <p className="text-primary font-semibold mb-3">{item.category}</p>

              <h1 className="text-xl font-bold text-white">{item.name}</h1>

              <p className="text-primary text-xl font-bold mt-5">
                {item.price}
              </p>

              <h2 className="text-xl font-bold text-white mt-8">المكونات</h2>
            </div>

            <div
              className="
              flex-1
            relative h-[170px] w-[170px]
            rounded-3xl overflow-hidden
            border border-primary/40
            shadow-2xl
          "
            >
              <Image
                src={`/assets${item.image}`}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Ingredients */}
          <div className="">
            {/* <h2 className="text-2xl font-bold text-white mb-4">المكونات</h2> */}

            <div
              className="
    mt-4
    text-gray-300
    leading-8
    bg-primary/5
    border border-primary/10
    rounded-2xl
    p-4
  "
            >
              {item.ingredients}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
