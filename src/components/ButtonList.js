import React from "react";
import Button from "./Button";

const listOfButtons = [
  "All",
  "News",
  "Live",
  "Music",
  "Tamil Cinema",
  "Marathi Cinema",
  "Mixes",
  "Arijit Singh",
  "History",
  "Recently Uploaded",
  "Watched",
];

const ButtonList = () => {
  return (
    // <div className="flex ml-5 mt-2 sticky">
    <div className="flex mt-2 sticky top-16 z-40 w-full z-50 bg-white">
      {listOfButtons.map((buttonLabel, index) => (
        <Button key={index} name={buttonLabel} />
      ))}
    </div>
  );
};

export default ButtonList;
