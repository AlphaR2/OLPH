export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Events from "@/components/events";
import News from "@/components/news";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Events />
      <News />
      <Newsletter />
    </>
  );
}
