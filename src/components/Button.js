import React from "react";

export const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1.5 mr-2 rounded-lg bg-gray-200 hover:bg-gray-400">
        {name}
      </button>
    </div>
  );
};

export default Button;
