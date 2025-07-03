import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Intro = () => {
  return (
    <section className="mt-8 text-zinc-600 dark:text-zinc-400">
      <div className="space-y-4">
        {/* Sua biografia acadêmica detalhada */}
        <p>
          Graduado em História pela{" "}
          <Link href="https://fflch.usp.br/" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            Universidade de São Paulo (FFLCH-USP)
          </Link>
          , desenvolve uma pesquisa sobre Cultura Material no espaço doméstico
          durante os períodos Meiji, Taisho e Showa e suas dinâmicas de adaptação
          na diáspora nipônica em São Paulo, em parceria com o{" "}
          <Link href="https://museudoipiranga.org.br/" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            Museu Paulista
          </Link>
          . É membro do{" "}
          <Link href="https://sites.usp.br/gema/" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            GEMA (Grupo de Pesquisa Espaço Doméstico, Corpo e Materialidades)
          </Link>{" "}
          e{" "}
          <Link href="https://nejap.paginas.ufsc.br/" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            NEJAP (Núcleo de Estudos Japoneses)
          </Link>
          , um grupo interinstitucional que reúne integrantes de diversas
          filiações acadêmicas. Anteriormente, foi pesquisador do{" "}
          <Link href="https://laop.fflch.usp.br/" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            Laboratório do Antigo Oriente-Próximo da Universidade de São Paulo
          </Link>
          , onde conduziu o projeto “Orientalismo no Oriente: representações do
          Antigo Egito na cultura pop japonesa”, sob orientação da Dra. Thais
          Rocha da Silva (UFMG/Oxford).
        </p>
        <p>
          Atua como divulgador científico em História Pública no podcast{" "}
          <Link href="https://open.spotify.com/show/053p0I6a1pFF1Tz3c8l6nS" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            Historiae
          </Link>{" "}
          e é pesquisador associado do{" "}
          <Link href="https://www.ees.ac.uk/resource/being-egyptian.html" target="_blank" className="link text-black dark:text-white/95 underline underline-offset-auto">
            Being Egyptian
          </Link>
          , projeto sobre espaço doméstico na Antiguidade, mantido pela The
          Egyptian Exploration Society e a Universidade de Oxford.
        </p>
        
        {/* Links de navegação interna */}
        <div className="flex gap-3">
          <Link
            href="/publicacoes" // Mudei o link para /publicacoes
            className="inline-flex link text-black relative dark:text-white/95"
          >
            Publicações{" "}
            <ArrowUpRight size={10} className="mt-1 ml-[2px] items-center" />
          </Link>
          <Link
            href="/projetos" // Mudei o link para /projetos
            className="inline-flex link text-black relative dark:text-white/95"
          >
            Projetos{" "}
            <ArrowUpRight size={10} className="mt-1 ml-[2px] items-center" />
          </Link>
        </div>
      </div>

      {/* Separador */}
      <svg
        aria-hidden="true"
        width="80"
        height="16"
        viewBox="0 0 432 38"
        fill="none"
        className="text-zinc-400 my-5"
      >
        <path
          d="M402.74 37.5899C390.193 37.5899 374.767 21.3129 374.111 20.6249C367.068 12.4335 359.943 5.14795 349.463 5.14795C337.975 5.14795 324.479 20.406 324.338 20.558L323.17 21.8313C315.729 29.9329 308.701 37.5893 296.186 37.5893C283.639 37.5893 268.213 21.3123 267.557 20.6243C260.514 12.4329 253.389 5.14734 242.909 5.14734C231.421 5.14734 217.925 20.4053 217.784 20.5573L216.683 21.7175C208.186 30.5847 201.48 37.5885 189.636 37.5885C177.085 37.5885 161.656 21.3115 161.007 20.6235C153.96 12.4321 146.831 5.14655 136.359 5.14655C124.871 5.14655 111.375 20.4045 111.234 20.5565L110.054 21.8417C102.62 29.9394 95.5889 37.5837 83.0769 37.5837C70.5259 37.5837 55.0969 21.3067 54.4479 20.6187C47.401 12.4273 40.2719 5.14175 29.7999 5.14175C19.3699 5.14175 9.86587 10.8722 4.98787 20.0987C4.3824 21.2549 2.94488 21.6964 1.78478 21.087C0.628579 20.4698 0.187069 19.0401 0.800389 17.8839C6.50349 7.10691 17.6124 0.403931 29.7964 0.403931C42.2694 0.403931 50.5504 8.82583 57.9644 17.4469C61.941 21.6774 74.3554 32.8419 83.0734 32.8419C93.5074 32.8419 99.2644 26.5724 106.557 18.6349L107.702 17.3888C108.268 16.7404 122.733 0.404816 136.35 0.404816C148.823 0.404816 157.104 8.82671 164.518 17.4478C168.494 21.6783 180.909 32.8428 189.627 32.8428C199.447 32.8428 204.943 27.1123 213.256 18.4368L214.295 17.3509C214.83 16.7337 229.295 0.401917 242.908 0.401917C255.388 0.401917 263.67 8.82382 271.076 17.4449C275.053 21.6676 287.467 32.8359 296.185 32.8359C306.623 32.8359 312.388 26.5625 319.685 18.6129L320.822 17.3785C321.388 16.7301 335.853 0.394531 349.463 0.394531C361.943 0.394531 370.225 8.81643 377.631 17.4375C381.607 21.6602 394.022 32.8285 402.74 32.8285C412.744 32.8285 422.06 27.4379 427.064 18.7625C427.716 17.6258 429.161 17.2313 430.302 17.8914C431.435 18.5438 431.822 19.993 431.173 21.1258C425.321 31.2898 414.427 37.5908 402.739 37.5908L402.74 37.5899Z"
          fill="currentColor"
        ></path>
      </svg>
      
      {/* Seção de Contato Atualizada */}
      <div>
        Para contato profissional ou acadêmico:
        <a
          className="link text-black dark:text-white/95 mx-1 underline underline-offset-auto"
          href="mailto:pedro.cas@usp.br"
        >
          email
        </a>
        ou
        <a
          className="link text-black dark:text-white/95 ml-1 underline-offset-auto underline"
          href="https://lattes.cnpq.br/1970471858793746"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lattes
        </a>
        .
      </div>
    </section>
  );
};