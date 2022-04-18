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
    <div className="row row-cols-lg-3 w-100 mx-auto">
      {packages.map((singlePackage) => (
        <Service key={singlePackage.id} singlePackage={singlePackage}></Service>
      ))}
    </div>
  );
};

export default Services;
