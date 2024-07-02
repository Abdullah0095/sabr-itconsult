import React from "react";

const page = () => {
  const serviceData = [
    {
      id: "1",
      title: "Organic Market growth",
    },
    {
      id: "2",
      title: "Market growth",
    },
    {
        id: "1",
        title: "Organic Market growth",
      },
      {
        id: "2",
        title: "Market growth",
      },
      {
        id: "1",
        title: "Organic Market growth",
      },
      {
        id: "2",
        title: "Market growth",
      },
  ];

  return (
    <div className="bg-gray-200 py-16">
      <h1 className="text-center text-4xl py-5 text-black">
        services That we Provide
      </h1>
      <section className="grid justify-items-center grid-cols-1 md:grid-cols-4 mx-2">
        {serviceData.map((service) => (
          <ServiceDetail key={service.id} service={service}></ServiceDetail>
        ))}
      </section>
    </div>
  );
};

const ServiceDetail = ({ service }) => {
  const { id, title } = service;
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl m-2 h-96 service-background">
        <div className="card-body">
          {/* <h2 className="card-title">{id}</h2> */}
          <p className="text-center text-3xl font-bold py-20">{id}. {title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">read more..</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
