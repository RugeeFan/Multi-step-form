import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedPlan, setBillingCycle } from "../store/planSlice";

const plans = [
  {
    id: "arcade",
    name: "Arcade",
    price: { monthly: 9, yearly: 90 },
    icon: "./assets/images/icon-arcade.svg",
  },
  {
    id: "advanced",
    name: "Advanced",
    price: { monthly: 12, yearly: 120 },
    icon: "./assets/images/icon-advanced.svg",
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 15, yearly: 150 },
    icon: "./assets/images/icon-pro.svg",
  },
];

const SelectPlan = () => {
  const dispatch = useDispatch();
  const { billingCycle, selectedPlan } = useSelector((state) => state.plan);
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md h-full pt-20">
      <h1 className="text-2xl font-bold text-marine-blue">Select your plan</h1>
      <p className="text-cool-gray mt-2">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-12 flex space-x-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => dispatch(setSelectedPlan(plan))}
            className={`flex flex-col items-center justify-center w-32 h-40 border rounded-md cursor-pointer ${selectedPlan.id === plan.id
              ? "border-purple-500 bg-light-blue"
              : "border-gray-300"
              }`}
          >
            <img src={plan.icon} alt={plan.id} />
            <div className="text-lg font-bold">{plan.name}</div>
            <div className="text-sm text-cool-gray">
              ${plan.price[billingCycle]}/{billingCycle === "monthly" ? "mo" : "yr"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center bg-gray-100 p-4 rounded-md">
        <span
          className={`text-sm font-medium ${billingCycle === "monthly" ? "text-marine-blue" : "text-cool-gray"
            }`}
        >
          Monthly
        </span>
        <div
          className="relative mx-4 w-12 h-6 bg-light-blue rounded-full cursor-pointer"
          onClick={() =>
            dispatch(setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly"))
          }
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 bg-marine-blue rounded-full transition-transform ${billingCycle === "yearly" ? "translate-x-6" : ""
              }`}
          ></div>
        </div>
        <span
          className={`text-sm font-medium ${billingCycle === "yearly" ? "text-marine-blue" : "text-cool-gray"
            }`}
        >
          Yearly
        </span>
      </div>

      <div className="mt-36 flex justify-between">
        <button
          className="text-marine-blue
          absolute bottom-40"
          onClick={() => navigate("/personalinfo")}
        >
          Go Back
        </button>
        <button
          className="px-4 py-2 text-white bg-marine-blue rounded-md hover:bg-purple-500
          absolute bottom-40 right-[27rem]"
          onClick={() => navigate("/addon")}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
