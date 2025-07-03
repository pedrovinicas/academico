import InfoCard from "@/components/InfoCard";

// Aqui definimos as informações de cada card. Fácil de editar no futuro!
const cardsData = [
  {
    title: "Publicações",
    description: "Artigos, capítulos de livros e trabalhos apresentados em eventos acadêmicos.",
    href: "/publicacoes",
    imgSrc: "/images/card-publicacoes.jpg", // Caminho para a imagem que você colocou na pasta public
  },
  {
    title: "Grupos de Pesquisa",
    description: "Conheça o GEMA e o NEJAP, grupos dos quais faço parte e que fomentam o debate acadêmico.",
    href: "/projetos", // Pode ajustar este link se criar uma página específica para grupos
    imgSrc: "/images/card-grupos.jpg",
  },
  {
    title: "Divulgação Científica",
    description: "Minhas participações em podcasts e outras iniciativas de História Pública.",
    href: "/#", // Pode ajustar este link no futuro
    imgSrc: "/images/card-divulgacao.jpg",
  },
];

export default function GridCards() {
  return (
    // Divisor e o Grid
    <div className="my-12">
      <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {cardsData.map((card) => (
          <InfoCard
            key={card.title}
            href={card.href}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}