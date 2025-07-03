import ContactCard from "@/components/misc/(home)/cards/contact-card";
import { GridCards } from "@/components/misc/(home)/grid-cards";
import Intro from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      {/* SEU NOME E BIO REINSERIDOS AQUI */}
      <h1 className="mt-0 mb-1 text-xl font-medium dark:text-white">
        Pedro Vinícius de Castro
      </h1>
      <div className="max-w-[58ch] text-zinc-600 dark:text-zinc-400">
        Historiador; explorando as conexões entre cultura material, migração e identidade no Japão Meiji e no Brasil.
      </div>

      {/* O resto dos componentes da página */}
      <Intro />
      <GridCards />
      <ContactCard />
    </section>
  );
};

export default Home;