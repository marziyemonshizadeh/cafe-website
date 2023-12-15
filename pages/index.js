import Navbar from "@/components/modules/navbar/navbar";
import AboutUs from "@/components/template/index/AboutUs/AboutUs";
import OurServices from "@/components/template/index/OurServices/OurServices";
import OurVision from "@/components/template/index/OurVision/OurVision";
import Discount from "@/components/template/index/discount/discount";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Header /> */}
      <AboutUs />
      <OurVision />
      <OurServices />
      <Discount />
      main page
    </main>
  );
}
