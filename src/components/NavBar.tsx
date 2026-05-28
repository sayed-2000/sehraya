import Link from "next/link";
import { Coffee, Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10  backdrop-blur-xl ">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo_.png" alt="logo" width={50} height={50} />
        </Link>

        <Link href="/menu" className=" items-center gap-3 ">
          <Button
            variant="outline"
            className="border-primary/30 cursor-pointer  bg-transparent text-primary hover:bg-primary hover:text-black"
          >
            <ShoppingBag className=" h-4 w-4" />
            Menu
          </Button>
        </Link>
      </div>
    </header>
  );
}
