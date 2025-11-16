import Image from "next/image";
import Navbar from "./components/navbar";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import ReversedHeader from "./components/ReversedHeader";
import triheader from "./components/triHeader";
import Text from "./components/text";
import TriHeader from "./components/triHeader";
import GreenCTA from "./components/GreenCta";
import FeaturesGrid from "./components/FeaturesGrid";
import SelectedWork from "./components/selectedWorks";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import HelpGrid from "./components/HelpGrid";
import ScrollStack from "./components/ScrollStack";
import Steps from "./components/Steps";
import FAQ from "./components/Faq";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <Text />
      {/* Flex container for side-by-side components */}
      <div className="flex flex-col   lg:flex-row  px-6 bg-white py-12">
        <SubHeader />
        <ReversedHeader />
      </div>
      <TriHeader/>
      <SelectedWork/>
      <GreenCTA/>
      <FeaturesGrid/>
      {/* <HelpGrid/> */}
      <ScrollStack/>
      <Steps/>
      <FAQ/>
      <Cta/>

      <Footer/>
      
      <div>
      </div>
    </div>
  );
}