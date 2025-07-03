// components/Biografia.tsx

import Link from "next/link";

export default function Biografia() {
  return (
    <div>
      <h1 className="mt-4 mb-2 text-2xl font-bold dark:text-white">
        Pedro Vinícius de Castro
      </h1>
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          Historiador pela{" "}
          <Link href="https://fflch.usp.br/" target="_blank" className="underline hover:text-black dark:hover:text-white">
            Universidade de São Paulo (FFLCH-USP)
          </Link>
          , com trajetória de pesquisa focada na intersecção entre a cultura material japonesa e a experiência imigrante no Brasil.
        </p>
        <p>
          Sua investigação atual, centrada na pesquisa e catalogação da coleção da Família Kojima no{" "}
          <Link href="https://museudoipiranga.org.br/" target="_blank" className="underline hover:text-black dark:hover:text-white">
            Museu Paulista
          </Link>
          , serve como base para seu projeto de mestrado, que analisa as adaptações, permanências e rupturas no espaço doméstico dos imigrantes japoneses.
        </p>
         <p>
          É pesquisador vinculado ao{" "}
          <Link href="https://sites.usp.br/gema/" target="_blank" className="underline hover:text-black dark:hover:text-white">
            GEMA (Grupo de Pesquisa Espaço Doméstico, Corpo e Materialidades - USP/Museu Paulista)
          </Link>{" "}
          e ao{" "}
          <Link href="https://nejap.paginas.ufsc.br/" target="_blank" className="underline hover:text-black dark:hover:text-white">
            NEJAP (Núcleo de Estudos Japoneses)
          </Link>.
        </p>
        <p>
            Para contato profissional ou acadêmico:{" "}
            <a
              className="underline hover:text-black dark:hover:text-white"
              href="mailto:pedro.cas@usp.br"
            >
              email
            </a>{" "}
            ou{" "}
            <a
              className="underline hover:text-black dark:hover:text-white"
              href="https://lattes.cnpq.br/1970471858793746"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lattes
            </a>
            .
        </p>
      </div>
    </div>
  );
};