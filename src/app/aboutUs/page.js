"use client";

import Image from "next/image";
import catImage from "../../../public/image/cat.jpg";



const AboutUsPage = () => {
  const serviceData = [
    {
      id: 1,
      title: "facebook marketing",
      name: "James Bond 007",
    },
    {
      id: 2,
      title: "Twitter Marketing",
      name: "James Bond 007",
    },
    {
      id: 3,
      title: "Instagram Marketing",
      name: "James Bond 007",
    },
    {
      id: 4,
      title: "Google+ Marketing",
      name: "James Bond 007",
    },
    {
      id: 5,
      title: "Digital marketing",
      name: "James Bond 007",
    },
    {
      id: 6,
      title: "WhatsApp Marketing",
      name: "James Bond 007",
    },
    {
      id: 7,
      title: "Instagram Marketing",
      name: "James Bond 007",
    },
    {
      id: 8,
      title: "Google+ Marketing",
      name: "James Bond 007",
    },
  ];

  return (
    <div className="bg-slate-700 min-h-screen py-24">
      <div className="text-3xl text-center text-white p-5 italic ">Our Team</div>
      <section className="grid md:grid-cols-4 gap-4">
        {serviceData.map((data) => (
          <ServiceCard key={data.id} data={data}></ServiceCard>
        ))}
      </section>
    </div>
  );
};

const ServiceCard = ({ data }) => {
  const { id, title, name } = data;
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flip-card w-80 h-96">
        <div className="flip-card-inner">
          <div className="flip-card-front bg-white text-2xl py-12 justify-center text-black text-xl font-semibold rounded-lg">
            <div className="avatar">
              <div className="w-48 rounded-full">
                <Image src={catImage} alt="cat image" />
              </div>
            </div>
            <div>
              <h1 className="py-6">{name}</h1>
            </div>
          </div>
          <div className="flip-card-back bg-red-500 flex items-center justify-center text-white text-xl font-semibold rounded-lg">
            {id} ## {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
