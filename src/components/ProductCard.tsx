import Image from "next/image";
import Motion from "./motion/Motion";
import { ArrowRight2, ArrowUp2 } from "iconsax-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  tech: string;
  link: string;
  identifier: number;
  index?: number;
  development: boolean;
}

export default function ProductCard({
  description,
  image,
  tech,
  link,
  title,
  identifier,
  index,
  development,
}: ProductCardProps) {
  return (
    <main className="flex flex-col relative px-6 py-4 lg:text-start gap-4 lg:gap-0 h-fit text-center w-4/5 lg:w-[300px] lg:h-[400px] border border-gray-600 rounded-xl bg-main justify-between items-center lg:items-start font-raleway">
      <Motion direction="left" identifier={identifier}>
        <Image
          alt="Ilustração do produto"
          src={image}
          width={342}
          height={180}
          className={`z-20 h-[180px] object-contain rounded-xl ${
            index === 1 ? "bg-transparent" : "bg-white"
          }`}
        />
      </Motion>

      <h3 className="z-20 text-lg md:text-xl">{title}</h3>
      <p className="text-xs z-20 text-gray-300 capitalize">{description}</p>

      <div className="border border-gray-600 h-[1px] w-full z-20" />

      <div className="flex flex-col md:flex-row gap-2 lg:gap-6 md:gap-0 justify-between items-center z-20">
        <p className="text-xs text-gray-300">Tecnologias utilizadas: {tech}</p>
        {development ? (
          <p className="text-sm hover:cursor-not-allowed">Em Breve</p>
        ) : (
          <a
            target={!development ? "_blank" : "_self"}
            href={link}
            className="flex flex-row items-center gap-2"
          >
            <p className="text-sm">Visitar</p>{" "}
            <ArrowRight2 color="#FFF" size={24} />
          </a>
        )}
      </div>

      <a
        href="#"
        className="rounded-full fixed bottom-4 right-4 bg-main-100/10 p-3 items-center justify-center flex ease-in duration-300"
      >
        <ArrowUp2 size="24" color="#FFF" />
      </a>
    </main>
  );
}
