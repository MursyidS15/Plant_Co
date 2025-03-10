import React from "react";
import team from "./page";

const DataPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Team</h1>
      <ul>
        {team.map((member) => (
          <li key={member.id} className="mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h2 className="font-semibold">{member.name}</h2>
            <p>{member.title}</p>
            <p className="text-gray-600">{member.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataPage;
