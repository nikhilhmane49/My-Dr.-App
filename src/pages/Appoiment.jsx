import React, { useContext, useState, useEffect } from "react";
import { Appcontext } from "../Context/Context";
import { useParams } from "react-router-dom";

import verified_icon from "../assets/assets_frontend/verified_icon.svg";
import info_icon from "../assets/assets_frontend/info_icon.svg";

function Appoiment() {
  const { doctors } = useContext(Appcontext);
  const { DocId } = useParams();
  const [docInfo, setDocInfo] = useState(null);

  const fetchInfo = () => {
    const doctor = doctors.find((doc) => doc._id === DocId);
    setDocInfo(doctor);
  };

  useEffect(() => {
    fetchInfo();
  }, [DocId, doctors]);

  return (
    docInfo && (
      <>
        <div className="mx-auto my-10 max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-md rounded-lg p-8">
            {/* Doctor's Image */}
            <div className="flex-shrink-0">
              <img
                className="bg-primary rounded-md w-full lg:w-[350px] object-cover"
                src={docInfo.image}
                alt={docInfo.name}
              />
            </div>

            {/* Doctor's Info */}
            <div className="flex-grow border-2 border-gray-200 p-6 rounded-lg space-y-4">
              {/* Name and Verified Icon */}
              <div className="flex flex-row items-center gap-2 text-3xl font-bold">
                {docInfo.name}
                <img src={verified_icon} alt="Verified" className="w-6 h-6" />
              </div>

              {/* Degree and Speciality */}
              <p className="text-lg font-semibold flex flex-wrap gap-2">
                {docInfo.degree} - {docInfo.speciality}
                <button className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">
                  {docInfo.experience} years experience
                </button>
              </p>

              {/* About Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  About <img src={info_icon} alt="Info" className="w-5 h-5" />
                </div>
                <p className="text-gray-600 text-base">{docInfo.about}</p>
              </div>

              {/* Fee Section */}
              <div className="mt-8 text-lg font-semibold text-gray-900">
                <span className="bg-green-100 text-green-600 py-2 px-4 rounded-lg">
                  Appointment fee: $ {docInfo.fees}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Appoiment;
