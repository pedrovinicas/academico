import ContactCard from "@/components/misc/(home)/cards/contact-card";
import { GridCards } from "@/components/misc/(home)/grid-cards";
import { Intro } from "@/components/misc/(home)/intro";

const Home = () => {
  return (
    // A margem/espaçamento da seção principal foi mantida
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      
      {/* O componente Intro agora cuida de toda a apresentação inicial.
          O h1 e a div que estavam aqui foram removidos.
      */}
      <Intro />
      
      {/* O resto dos componentes da página */}
      <GridCards />
      <ContactCard />
      
    </section>
  );
};

export default Home;