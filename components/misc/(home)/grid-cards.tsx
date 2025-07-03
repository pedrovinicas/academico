import { ProjectCard } from "@/components/custom/ProjectCard"; // Este caminho deve funcionar agora que o arquivo está no lugar certo.

export const GridCards = () => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1: Materialidade */}
      <div className="lg:col-span-1">
        <ProjectCard
          href="/work"
          title="Materialidade no espaço doméstico nipo-brasileiro"
          description="Investigando o espaço doméstico e a cultura material na diáspora nipo-brasileira."
          imageUrl="/images/card-materialidade.jpg"
        />
      </div>

      {/* Card 2: Coleção Kojima */}
      <div className="lg:col-span-2">
        <ProjectCard
          href="/work"
          title="A Coleção Kojima do Museu do Ipiranga"
          description="Pesquisa e catalogação da Família Kojima para o Museu do Ipiranga."
          imageUrl="/images/card-kojima.jpg"
        />
      </div>

      {/* Card 3: Publicações */}
      <div className="lg:col-span-1">
        <ProjectCard
          href="/publicacoes"
          title="Publicações"
          description="Artigos, capítulos de livros e trabalhos apresentados em eventos acadêmicos."
          imageUrl="/images/card-publicacoes.gif" // Atualizado para .gif
        />
      </div>

      {/* Card 4: Grupos de Pesquisa */}
      <div className="lg:col-span-1">
        <ProjectCard
          href="https://sites.usp.br/gema/"
          title="Grupos de Pesquisa"
          description="Conheça o GEMA e o NEJAP, grupos dos quais faço parte e que fomentam o debate acadêmico."
          imageUrl="/images/card-grupos.jpg"
        />
      </div>

      {/* Card 5: Divulgação Científica */}
      <div className="lg:col-span-1">
        <ProjectCard
          href="#" // O "#" indica que este card não tem link
          title="Divulgação Científica"
          description="Minhas participações no podcast Historiae e outras iniciativas de História Pública."
          imageUrl="/images/card-divulgacao.jpg"
        />
      </div>

      {/* Card 6: Citação Walter Benjamin */}
      <div className="lg:col-span-3">
        <ProjectCard
          href="#"
          title="— Walter Benjamin"
          description="Um acontecimento vivido é finito, ou pelo menos encerrado na esfera do vivido, ao passo que o acontecimento lembrado é sem limites, porque é apenas uma chave para tudo que veio antes e depois."
          imageUrl="/images/card-benjamin.jpg"
        />
      </div>
    </div>
  );
};