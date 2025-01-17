import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="h-[500px]">
      <div className=" h-full flex  flex-col justify-center items-center">
        <h2 className=" text-2xl font-bold">OOPS! PAGE NOT FOUND</h2>
        <p className="text-4xl font-bold my-8">404</p>
        <p className="text-lg mb-5 text-center">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </p>
        <p>
          <Link
            href="/"
            className="text-white px-5 py-2 font-bold bg-[#2563eb] rounded-lg"
          >
            Go back Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default index;
