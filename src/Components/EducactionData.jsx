import React from "react";

const EducactionData = ({ data }) => {
  return (
    <>
    <section id="education" className="py-10 bg-gray-100">
      <div className="px-10 bg-gray-100 py-10">
        {/* Centered Heading */}
        <h1 className="text-center text-3xl lg:text-4xl font-bold mb-3 text-gray-800">
          Education
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg bg-white p-6 flex flex-col items-start hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.school}</h2>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-700 font-medium">{item.degree}</p>
                <p className="text-gray-500">{item.grade}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default EducactionData;
