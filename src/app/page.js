
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import SomeServices from "./components/SomeServicesLANDING/SomeServices";
import ProjectLanding from "./components/projectLanding/ProjectLanding";
export default function Home() {
  return (
    <div  >
      <Navbar />
      <Landing />
      <SomeServices />
      <ProjectLanding/>
    </div>
  );
}
