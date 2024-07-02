"use client";

import Lottie from "lottie-react";
import MarketingAnimation from "../marketing.json";

const page = () => {
  return (
    <div className="bg-black">
      <div className="grid  grid-cols-1 md:grid-cols-2 place-items-center h-screen">
        <div className="animate-charcter hidden md:block md:mx-16 text-lg  md:text-5xl font-bold">
          Unlock Your <br />
          Online Growth <br />
          potential
        </div>

        <div className="py-4">
          <Lottie
            animationData={MarketingAnimation}
            loop={true}
            autoplay={true}
            // style={{ width: 600, height: 600 }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
