import { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
