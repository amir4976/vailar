"use client";

import Image from "next/image";
import styles from "./Lanidng.module.css";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";

function Landing() {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Autoplay],
      autoplay: {
        delay: 5000,
      },
    });
  }, []);
  return (
    <div className="Landing">
      <div className={styles.sliderContianer}>
        <div className={"swiper"}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image">
                <Image fill={true} src="/slider-1.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <Image fill={true} src={"/slider-2.jpg"} />
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
