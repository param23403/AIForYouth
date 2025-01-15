import React from "react";
import Image from "next/image";
import ProfileVector from "../../public/assets/profilevector.jpg";
const PeopleBlock = ({ person }) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md border-4 border-blue-500">
      <div className="relative w-40 h-40 mx-auto">
        <Image
          src={person.image ? person.image.url : ProfileVector}
          alt={person.name}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="text-xl font-bold mt-4 text-center">{person.name}</h2>
      <p className="text-md font-semibold text-center">
        {capitalizeFirstLetter(person.title)}
      </p>
      <p className="text-sm mt-2 text-center">{person.description}</p>
    </div>
  );
};

export default PeopleBlock;
