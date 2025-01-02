import Category from "@/components/layout/Category";
import Hero from "@/components/layout/Hero";
import KitchenHero from "@/components/layout/KitchenHero";
import Inbox from "@/components/layout/Inbox";
import Social from "@/components/layout/Social";
import SpecialOffer2 from "@/components/layout/SpecialOffer2";
import SpecialOffer from "@/components/layout/SpecialOffer";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <SpecialOffer />
      <KitchenHero />
      <Social />
      <SpecialOffer2 />
      <Inbox />
    </>
  );
}
