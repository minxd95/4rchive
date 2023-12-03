import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/assets/fonts";
import { Header, Providers } from "@/components";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "4rchive - Minseok's tech blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${pretendard.className} relative min-w-screen min-h-screen text-slate-600 dark:text-slate-200 bg-slate-50 dark:bg-slate-800`}
      >
        <Providers>
          <Header />
          <main className="min-w-screen min-h-screen pt-[3.75rem] sm:pt-[4.5rem] pb-[7.25rem] z-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
