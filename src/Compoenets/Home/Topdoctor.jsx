import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Appcontext } from "../../Context/Context.jsx";

function Topdoctor() {
  const { doctors } = useContext(Appcontext);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Top Doctors to Book
      </h1>
      <p className="text-lg md:text-xl font-semibold text-gray-600 text-center mb-8">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((Element, index) => (
          <div
            key={index}
            onClick={() => navigate(`/Appoiment/${Element._id}`)}
            className="border-2 border-gray-200 p-6 rounded-lg cursor-pointer shadow-md hover:-translate-y-2 transition-all duration-500 "
          >
            <img
              className="w-full h-40 object-cover mb-4 rounded-lg bg-blue-100"
              src={Element.image}
              alt={Element.name}
            />

            <div className="text-center">
              <p className="font-semibold text-xl mb-2">{Element.name}</p>
              <p className="text-gray-500">{Element.speciality}</p>
              <p className="text-green-500 mt-2">Available</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/Doctor");
          scrollTo(0, 0);
        }}
        className="items-center justify-center border-2 border-gray-400 p-3 mt-9 text-xl font-semibold "
      >
        More
      </button>
    </div>
  );
}

export default Topdoctor;
