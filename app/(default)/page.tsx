export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Schedule from "@/components/ui/schedule";
import Newsletter from "@/components/newsletter";
import Events from "@/components/events";
import Announce from "@/components/announce";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Announce/>
      <Schedule />
      <Events />

      <Newsletter />
    </>
  );
}
