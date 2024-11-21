import React, { memo } from "react";
import StepForm from "./components/StepForm";

const App = memo(() => {
  return <div className="flex justify-center items-center h-screen bg-light-blue">
    <StepForm />
    <div className="attribution fixed bottom-0">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Rugee</a>.
    </div>
  </div>;
});

export default App;
