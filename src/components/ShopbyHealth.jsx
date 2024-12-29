import React from "react";

const Healthconcern = () => {
  return (
    <div className="py-7 my-8 w-full bg-white ">
      <h3 className="text-2xl mx-4 my-2 font-semibold">Shop By Category</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4  mt-4 font-bold w-full text-[--graytext]">
        <div className="grid ml-16 ">
          <p className="my-2">Respiratory</p>
          <p className="my-2">Infection</p>
          <p className="my-2">Neck Injury </p>
          <p className="my-2">Back Pain</p>
          <p className="my-2">Disabled</p>
        </div>
        <div className="grid ml-16 ">
          <p className="my-2">Knee Complications</p>
          <p className="my-2">Hip Fractures</p>
          <p className="my-2">Surgery </p>
          <p className="my-2">Post Surgery complicatons</p>
          <p className="my-2">Pregnancy Complications</p>
        </div>
        <div className="grid ml-16">
          <p className="my-2">Immobility</p>
          <p className="my-2">Diabetic </p>
          <p className="my-2">Bedridden</p>
          <p className="my-2">Cervical</p>
          <p className="my-2">Lifestyle Disorder</p>
        </div>
      </div>
    </div>
  );
};

export default Healthconcern;
