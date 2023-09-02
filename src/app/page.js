
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import SomeServices from "./components/SomeServicesLANDING/SomeServices";
import Project from "./components/projectsWarper/Project";

export default function Home() {
  return (
    <div  >
      <Navbar />
      <Landing />
      <SomeServices />
      <Project/>
   
    </div>
  );
}
