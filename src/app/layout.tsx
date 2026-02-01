import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Additools | Recursos para Desarrolladores",
  description:
    "Explora el mejor directorio de herramientas, librerías y frameworks para el desarrollo web. Additools reúne recursos gratuitos y open-source en un solo lugar, mantenido íntegramente por la comunidad.",
  keywords: [
    "developer tools",
    "open source",
    "recursos web",
    "frontend",
    "backend",
    "github repository",
  ],
  authors: [{ name: "addiveloper" }],
  creator: "addiveloper",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.variable} ${geistMono.variable} ${bricolageGrotesque.className} antialiased dark:bg-neutral-900 bg-neutral-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
