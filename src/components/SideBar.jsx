import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const SideBar = memo(() => {
  const label = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const location = useLocation(); // 获取当前的路由信息

  // 根据路由路径判断当前步骤
  const getStepFromPath = (pathname) => {
    switch (pathname) {
      case "/personalinfo":
        return 1;
      case "/selectplan":
        return 2;
      case "/addon":
        return 3;
      case "/summary":
        return 4;
      case "/thankyou":
        return 4;
      default:
        return 1; // 默认到第一个步骤
    }
  };

  const selectedStep = getStepFromPath(location.pathname); // 动态获取当前步骤

  return (
    <div className="w-1/3 p-4 h-full bg-sidebar-desktop bg-cover bg-bottom rounded-3xl">
      <div>
        {label.map((item, index) => {
          const stepNumber = index + 1;
          const isSelected = selectedStep === stepNumber;

          return (
            <div
              key={stepNumber}
              className="flex items-center w-full p-3"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 border rounded-full ${isSelected
                  ? "bg-light-blue text-black border-light-blue"
                  : "text-white border-white"
                  }`}
              >
                {stepNumber}
              </div>
              <div className="ml-3">
                <div className="text-cool-gray">{`STEP ${stepNumber}`}</div>
                <div className="text-white">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SideBar;
