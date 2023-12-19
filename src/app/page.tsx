import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center font-raleway text-white font-medium">
      <section
        id="hero"
        className="flex flex-col lg:flex-row bg-hero-mobile bg-no-repeat bg-cover bg-right min-h-screen px-[10%] sm:bg-hero-tablet w-full lg:items-center lg:justify-center"
      >
        <aside className="lg:flex hidden w-1/2 h-full min-h-screen items-center justify-center bg-hero-desktop bg-cover bg-center">
          <div className="flex flex-col h-fit items-center justify-center bg-main-300 rounded-sm">
            <Image
              alt="Foto do Manu o dev"
              src={"/images/manu-profile.png"}
              width={388}
              height={403}
            />

            <p className="my-6"># Emmanuel Rodrigues</p>
          </div>
        </aside>

        <div className="flex flex-col items-start justify-center pt-[124px] lg:pt-0 gap-8 lg:w-1/2 h-full lg:h-fit w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:justify-between w-full sm:w-4/5">
            <div className="flex flex-row items-center gap-2 font-semibold">
              <span className="flex rounded-lg bg-main-100 p-3 items-center text-main">
                +4
              </span>
              <p className="text-main-100">Anos no mercado tech</p>
            </div>

            <p>Front | Design</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl lg:w-4/5">
            Engenheiro <span className="text-main-100">Front-end</span> e{" "}
            <span className="text-main-100">webdesigner</span>
          </h1>

          <a href="#" className="underline text-main-100 sm:text-lg">
            {`Ver projetos online ->`}
          </a>

          <a
            href="#"
            className="rounded-xl items-center flex w-[180px] py-3 bg-main-300 justify-center font-medium hover:opacity-75 ease-in duration-300"
          >
            Saber mais
          </a>
        </div>
      </section>

      <div className="flex w-full justify-center -mt-28">
        <ArrowDown2 size="32" color="#FFF" className="animate-bounce" />
      </div>
    </main>
  );
}
