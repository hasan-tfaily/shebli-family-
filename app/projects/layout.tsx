import { ReactNode } from "react";
import Header from "@/components/headers/Header1";  // ⬅️ adjust this path
import Footer from "@/components/footers/Footer1";  // ⬅️ adjust this path

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
