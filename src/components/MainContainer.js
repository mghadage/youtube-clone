import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 flex flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
