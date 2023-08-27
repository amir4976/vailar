import Landing from "./components/Landing/Landing";
import Navbar from "./components/Navbar/Navbar";
import SomeServices from "./components/SomeServicesLANDING/SomeServices";
import localFont from 'next/font/local'


const myFont = localFont({ src: '../public/Yekan.ttf' })
export default function Home() {
  return (
    <div >
      <Navbar />
      <Landing />
      <SomeServices />
      
   
    </div>
  );
}
