import type { Metadata } from "next";

// 1. Metadados atualizados para SEO e aba do navegador
export const metadata: Metadata = {
  title: "Publicações", // Você pode customizar, ex: "Publicações | Pedro Castro"
  description: "Artigos acadêmicos, resumos e ensaios de Pedro Castro.", // Nova descrição
};

// 2. O nome do componente foi alterado para refletir a página
const PublicacoesPage = () => {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-4">Publicações</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Uma coletânea de artigos, resumos publicados em anais e ensaios
            desenvolvidos ao longo da minha trajetória acadêmica.
          </p>
        </div>

        {/* 3. Nova estrutura de conteúdo com as seções que você pediu */}
        <div className="space-y-12">
          <article>
            <h2 className="text-xl font-bold mb-4">
              Artigos Acadêmicos
            </h2>
            <p className="text-zinc-500 dark:text-zinc-500 italic">
              (Nenhum artigo publicado no momento.)
            </p>
          </article>

          <article>
            <h2 className="text-xl font-bold mb-4">
              Resumos Publicados em Anais de Congressos
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <a
                  href="https://laop.fflch.usp.br/resumos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  Castro, P. Orientalismo no Oriente: representações do Egito na
                  cultura pop japonesa. In: III Colóquio Internacional do
                  Antigo Egito e Oriente Próximo, 2023, São Paulo. Arquivos e
                  Coleções na Antiguidade Oriental: História e Possibilidades
                  Teórico-Metodológicas, 2023.
                </a>
              </li>
            </ul>
          </article>

          <article>
            <h2 className="text-xl font-bold mb-4">Ensaios Online</h2>
            <p className="text-zinc-500 dark:text-zinc-500 italic">
              (Nenhum ensaio publicado no momento.)
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PublicacoesPage;