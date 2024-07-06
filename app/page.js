import CodingAcheivements from "@/ui/page-sections/CodingAcheivements";
import Customization from "@/ui/page-sections/Customization";
import Experiences from "@/ui/page-sections/Experiences";
import HeroSection from "@/ui/page-sections/HeroSection";
import PushBoundaries from "@/ui/page-sections/PushBoundaries";
import SomeTemplates from "@/ui/page-sections/SomeTemplates";
import Guider from "@/ui/specials/Guider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PushBoundaries />
      <Experiences />
      <Guider />
      <SomeTemplates />
      <Customization />
      <CodingAcheivements/>
    </main>
  );
}
