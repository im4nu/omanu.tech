import Footer from "@/components/Footer";
import LinkDemo from "@/components/ui/Link";
import { ArrowLeft2, ArrowRight2, Link } from "iconsax-react";
import Image from "next/image";

export default function Prototype() {
  return (
    <main className="flex relative min-h-screen w-screen items-start justify-center overflow-hidden font-raleway">
      <div className="flex flex-col items-center justify-start w-4/5 md:w-[70%] text-white mt-8">
        <div className="flex flex-col items-start gap-3 justify-center w-full">
          <LinkDemo variant="outlined" link={"/"}>
            <ArrowLeft2 size={24} color="#fff" />
          </LinkDemo>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold w-4/5">
            Oops...
          </h2>
          {/* <p className="text-gray-300 text-xs md:text-lg lg:text-xl">
            {`Clique em "Visitar" para ver cada projeto em funcionamento`}
          </p> */}
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap md:w-4/5 items-center justify-center gap-12 mt-6 w-full">
          <Image
            src={"/icons/oops.svg"}
            alt="Ilustração de erro"
            width={240}
            height={240}
          />
          <p className="text-center">
            Página ainda em desenvolvimento, clique no botão abaixo e confira
            alguns dos projetos que já tive a oportunidade de participar do
            desenvolvimento
          </p>

          <LinkDemo variant="contained" link={"/projects"}>
            <p> Ver projetos online</p>
            <ArrowRight2
              size="32"
              variant="TwoTone"
              className="group-hover:ml-2 ease-in duration-300"
            />
          </LinkDemo>
        </div>
        <Footer />
      </div>
    </main>
  );
}
