import React from "react";

import * as HomePage from "../HomePageComponents";

const Index = () => {
  const viewPort = [window.innerWidth, window.innerHeight];
  console.log(viewPort);
  return (
    <>
      <HomePage.Banner />
      <HomePage.Skills />
      <HomePage.Cutomers />
      <HomePage.Projects />
      <HomePage.Team />
      <HomePage.Contact />
    </>
  );
};

export default Index;
