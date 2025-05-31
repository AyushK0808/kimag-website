import Image from "next/image";
import Navbar from "./components/Navbar";
import { OurServices } from "./components/Services";
import { projects } from "./components/text/Services";
import AboutUs from "./components/AboutUs";



export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <AboutUs/>
      <OurServices items={projects}/>

    </div>
  );
}
