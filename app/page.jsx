import Image from "next/image";
import HeroSection from "./components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import Leading from "./components/LeadingCompanies/Leading";
import Members from "./components/Members/Members";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Software from "./components/Software/Software";
import Develop from "./components/Development/Develop";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import Works from "./components/Works/Works";
import Services from "./components/Services/Services";
import Customers from "./components/Customers/Customers";
import Featured from "./components/FeaturedResources/Featured";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <Leading />
      <Members />
      <Customers />
      <CaseStudy />
      <Software />
      <Develop />
      <TechStack />
      <Works />
      <Featured />
      <Footer />
    </>
  );
}
