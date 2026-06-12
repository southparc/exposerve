import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LegalPage = ({ title, updated, children }: { title: string; updated: string; children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-10">Laatst bijgewerkt: {updated}</p>
          <div className="space-y-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_li]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
