import Intro from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      {/* Nome com destaque */}
      <h1 className="mt-0 mb-1 text-2xl font-bold tracking-tight dark:text-white">
        Pedro Vinícius de Castro
      </h1>

      {/* Subtítulo atualizado, com estilo sutil */}
      <div className="text-base text-zinc-500 dark:text-zinc-400">
        Historiador com pesquisa focada na intersecção entre a cultura material japonesa e a experiência imigrante no Brasil.
      </div>

      {/* O componente Intro com a biografia completa logo abaixo */}
      <Intro />
      
    </section>
  );
};

export default Home;