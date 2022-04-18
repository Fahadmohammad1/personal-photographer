import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div id="services" className="row row-cols-3 w-100">
      {packages.map((singlePackage) => (
        <Service key={singlePackage.id} singlePackage={singlePackage}></Service>
      ))}
    </div>
  );
};

export default Services;
