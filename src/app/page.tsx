import Navbar from "./components/Navbar";
import { OurServices } from "./components/Services";
import { projects } from "./components/text/Services";
import AboutUs from "./components/AboutUs";
import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import { Footer } from "./components/Footer";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <AboutUs/>
      <OurServices items={projects}/>
      <CaseStudies/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
