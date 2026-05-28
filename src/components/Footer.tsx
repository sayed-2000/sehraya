import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        relative z-30
        mt-auto
        border-t border-primary/10
        bg-black/30
        backdrop-blur-md
      "
    >
      <div
        className="
          container mx-auto
          flex items-center justify-center
          px-4 py-5
        "
      >
        <p className="text-sm text-gray-300 text-center">
          Designed & Developed by EN{" "}
          <Link
            href="https://my-portfolio-kappa-gules-60.vercel.app/"
            target="_blank"
            className="
              text-primary
              font-semibold
              transition-all duration-300
              hover:text-primary/80
              hover:underline
            "
          >
            Sayed Aymen
          </Link>
        </p>
      </div>
    </footer>
  );
}
