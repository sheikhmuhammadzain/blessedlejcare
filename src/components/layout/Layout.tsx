import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollOptimizer } from "@/components/animations/ScrollOptimizer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ScrollOptimizer>
      <div className="min-h-screen flex flex-col w-full">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ScrollOptimizer>
  );
};

export default Layout;