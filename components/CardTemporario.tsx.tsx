import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InfoCardProps {
  href: string;
  imgSrc: string;
  title: string;
  description: string;
}

export default function InfoCard({ href, imgSrc, title, description }: InfoCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-all">
      <div className="relative h-40 w-full">
        <Image
          src={imgSrc}
          alt={`Imagem para ${title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold flex items-center">
          {title}
          <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </Link>
  );
}