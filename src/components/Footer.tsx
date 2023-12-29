import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col my-12 text-center items-center justify-center gap-3">
      <Image
        src={"icons/logo.svg"}
        alt="Logomarca manu"
        width={100}
        height={120}
        className="animate-pulse"
      />

      <p className="-mt-4">Manu</p>
      <p>@2024 - Todos os direitos reservados.</p>

      <div className="flex flex-row items-center justify-center gap-6">
        <Image
          src={"icons/mail.svg"}
          alt="Ícone gmail"
          width={32}
          height={32}
        />
        <Image
          src={"icons/github.svg"}
          alt="Ícone github"
          width={32}
          height={32}
        />
        <Image
          src={"icons/linkedin.svg"}
          alt="Ícone linkedin"
          width={32}
          height={32}
        />
      </div>
    </footer>
  );
}