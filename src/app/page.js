"use client";

import Lottie from "lottie-react";
import MarketingAnimation from "../Lotties/marketing.json";

const page = () => {
  return (
    <div className="bg-black py-16">
      <div className="grid  md:grid-cols-2 place-items-center min-h-screen">
        <div className="animate-charcter hidden md:block text-lg  md:text-5xl font-bold">
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
