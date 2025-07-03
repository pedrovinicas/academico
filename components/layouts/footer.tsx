import { clsx } from "clsx";
import type { ComponentProps } from "react";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        "flex flex-col font-medium text-zinc-700 dark:text-zinc-100 md:pt-0 pt-5",
        className,
      )}
      {...props}
    >
      <hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
      <div className="flex items-center justify-between pt-2 text-sm">
        <span>
          © <time dateTime={String(year)}>{year}</time>
        </span>

        {/* <-- MUDANÇA AQUI: Créditos atualizados */}
        <span className="text-zinc-500 dark:text-zinc-400">
          Desenvolvido por Pedro de Castro
        </span>
      </div>
    </footer>
  );
};