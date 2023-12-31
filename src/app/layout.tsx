import { RootProvider } from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solar Info - Potencial Solar",
  description:
    "Sistema desenvolvido como requisito para Desenvolvedor Full Stack na SolarApp",
  keywords:
    "energia, sol, painel, solar, planejamento, gestão, empresarial, fotovoltaico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <RootProvider>
          {children}
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}
