import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quer criar um site? | Fala com o manu dev!",
  description: "Desenvolvimento de sites e aplicativos web e mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-main w-screen min-h-screen h-full flex ${[
          raleway.className,
          inter.className,
        ]}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
