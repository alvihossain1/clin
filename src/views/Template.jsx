import React from "react";
import Main from "./Home/Main";
import About from "./Home/About";
import Solutions from "./Home/Solutions";
import SolutionInAction from "./Home/SolutionInAction";
import OurTechnology from "./Home/OurTechnology";
import Benefits from "./Home/Benefits";
import CaseUse from "./Home/CaseUse";
import GetStarted from "./Home/GetStarted";

export default function Template() {
  return (
    <div>
      <Main />
      <About />
      <Solutions />
      <SolutionInAction />
      <OurTechnology />
      <Benefits />
      <CaseUse />
      <GetStarted />
    </div>
  );
}
