import React, { memo } from "react";
import SideBar from "./SideBar";
import { useRoutes } from "react-router-dom";
import routes from '../router/index.js'

const StepForm = memo(() => {
  return <div className="w-2/3 h-3/4 bg-white rounded-3xl p-6 flex justify-center">
    <SideBar />
    <div className="flex-1">
      {
        useRoutes(routes)
      }
    </div>
  </div>
});

export default StepForm;
