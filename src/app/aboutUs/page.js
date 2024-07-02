"use client";

import Image from "next/image";
import imageMy from '../../../public/image/cat.jpg'

// import Lottie from "lottie-react";
// import facebookAnimation from "../../facebook.json";

const AboutUsPage = () => {
  const serviceData = [
    {
      id: 1,
      title: "facebook marketing",
    },
    {
      id: 2,
      title: "Twitter Marketing",
    },
    {
      id: 3,
      title: "Instagram Marketing",
    },
    {
      id: 4,
      title: "Google+ Marketing",
    },
    {
      id: 5,
      title: "Digital marketing",
    },
    {
      id: 6,
      title: "WhatsApp Marketing",
    },
    {
      id: 7,
      title: "Instagram Marketing",
    },
    {
      id: 8,
      title: "Google+ Marketing",
    },
  ];

  return (
    <>
      <div className="text-5xl text-center text-white p-5 italic">
        Our Team
      </div>
      <section className="grid md:grid-cols-4 gap-4">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} data={data} image={imageMy}></ServiceCard>
        ))}
      </section>
    </>
  );
};

const ServiceCard = ({ data }) => {
  const { id, title, image} = data;
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flip-card w-80 h-96">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-white text-2xl flex items-center justify-center text-black text-xl font-semibold rounded-lg">
            <h1>##{id}</h1>
            {/* <Image src={image} alt="image of miraz" width={500} height={300} /> */}
          </div>
          <div className="flip-card-back bg-red-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
