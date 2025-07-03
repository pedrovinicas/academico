import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Definindo os "ingredientes" que nosso card vai receber
interface CardProps {
  href: string;
  imageUrl: string;
  title: string;
  description: string;
}

export const ProjectCard = ({ href, imageUrl, title, description }: CardProps) => {
  const isExternal = href.startsWith("http");

  const CardContent = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-zinc-100 p-4 transition-transform duration-300 ease-in-out hover:scale-[1.02] dark:bg-zinc-900">
      {/* Imagem de Fundo */}
      <Image
        src={imageUrl}
        alt={`Imagem para o card ${title}`}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20 transition-opacity duration-300 group-hover:opacity-30"
      />

      {/* Overlay para escurecer a imagem e melhorar a leitura */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-zinc-100 via-zinc-100/80 to-transparent dark:from-zinc-900 dark:via-zinc-900/80"></div>

      {/* Conteúdo do Card */}
      <div className="relative z-10 flex h-full flex-col">
        <h3 className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-1 flex-grow text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-4 flex items-center text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Ver mais
          <ArrowUpRight size={14} className="ml-1" />
        </div>
      </div>
    </div>
  );

  // Se não tiver link (href="#"), renderiza como um div simples
  if (href === "#") {
    return <div className="h-full">{CardContent}</div>;
  }

  // Se tiver link, renderiza como um Link clicável
  return (
    <Link href={href} target={isExternal ? "_blank" : "_self"} className="block h-full">
      {CardContent}
    </Link>
  );
};