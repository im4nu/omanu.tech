import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import LinkDemo from "@/components/ui/Link";
import { prototypesData } from "@/utils/prototypes";
import { ArrowLeft2 } from "iconsax-react";

export default function Prototype() {
  return (
    <main className="flex relative min-h-screen w-screen items-start justify-center overflow-hidden font-raleway">
      <div className="flex flex-col items-center justify-start w-4/5 md:w-[70%] text-white mt-8">
        <div className="flex flex-col items-start gap-3 justify-center w-full">
          <LinkDemo variant="outlined" link={"/"}>
            <ArrowLeft2 size={24} color="#fff" />
          </LinkDemo>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold w-4/5">
            Confira alguns dos protótipos que desenvolvi!
          </h2>
          <p className="text-gray-300 text-xs md:text-lg lg:text-xl">
            {`Clique em "Visitar" para ver cada projeto em funcionamento`}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap md:w-4/5 items-center justify-center gap-12 mt-6 w-full">
          {prototypesData.map((item, index) => (
            <ProductCard
              description={item.description}
              image={item.image}
              tech={item.tech}
              link={item.link}
              title={item.title}
              key={item.id}
              identifier={item.id}
              index={index}
              development={item.development}
            />
          ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
