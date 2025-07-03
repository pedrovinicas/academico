import Biografia from "@/components/Biografia";
import GridCards from "@/components/GridCards"; // <-- 1. IMPORTE AQUI

export default function Home() {
  return (
    <section className="md:mt-8 lg:mt-10 pt-8 pb-16">
      <Biografia />
      <GridCards /> {/* <-- 2. ADICIONE AQUI */}
    </section>
  );
};