import { Plus_Jakarta_Sans } from "next/font/google";
import { HeaderLandingPage } from "@/components/landing-page/layouts/header";
import { FooterLandingPage } from "@/components/landing-page/layouts/footer";

const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderLandingPage />
      <main
        className={`${pjs.className} w-full flex flex-col mx-auto items-center`}
      >
        {children}
      </main>
      <FooterLandingPage />
    </>
  );
}
