import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Tokyo",
    },
    {
      id: 1,
      title: "London",
    },
    {
      id: 1,
      title: "Sydney",
    },
    {
      id: 1,
      title: "Buenos Aires",
    },
    {
      id: 1,
      title: "Paris",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
