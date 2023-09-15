import "../public/globals.css";

import React from "react";
import { Inter } from "next/font/google";
import Providers from "../store/providers";
import Layout from "../components/layout/MainLayout";
import LoadSpinner from "../components/LoadSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio",
  description: "Julian Arce portafolio hecho con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../julianarce.ico" sizes="any"></link>
      </head>
      <body className={inter.className}>
        <main className="bg-white text-white">
          <Providers>
            <Layout>
              {children}
              <LoadSpinner />
            </Layout>
          </Providers>
        </main>
      </body>
    </html>
  );
}
