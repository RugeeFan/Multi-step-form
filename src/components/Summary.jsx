import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { selectedPlan, selectedAddOns, billingCycle, addOns } = useSelector(
    (state) => state.plan
  );
  const navigate = useNavigate();

  // Calculate Add-ons total
  const addOnTotal = selectedAddOns.reduce((total, id) => {
    const addOn = addOns.find((addOn) => addOn.id === id);
    return total + addOn.price[billingCycle];
  }, 0);

  // Calculate Total
  const total =
    selectedPlan.price[billingCycle] + addOnTotal;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md">
      <h1 className="text-2xl font-bold text-marine-blue mt-12">Finishing up</h1>
      <p className="text-cool-gray mt-2">
        Double-check everything looks OK before confirming.
      </p>

      <div className="mt-24 bg-light-blue p-4 rounded-md space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-marine-blue font-bold">
              {selectedPlan.name} ({billingCycle})
            </div>
            <button
              className="text-purple-500 underline text-sm"
              onClick={() => navigate("/selectplan")}
            >
              Change
            </button>
          </div>
          <div className="text-marine-blue font-bold">
            ${selectedPlan.price[billingCycle]}/{billingCycle === "monthly" ? "mo" : "yr"}
          </div>
        </div>

        <hr className="border-gray-300" />

        {selectedAddOns.map((id) => {
          const addOn = addOns.find((addOn) => addOn.id === id);
          return (
            <div key={id} className="flex justify-between items-center">
              <div className="text-cool-gray">{addOn.title}</div>
              <div className="text-marine-blue">
                +${addOn.price[billingCycle]}/{billingCycle === "monthly" ? "mo" : "yr"}
              </div>
            </div>
          );
        })}

        <div className="flex justify-between items-center pt-4">
          <div className="text-cool-gray font-bold">
            Total ({billingCycle === "monthly" ? "per month" : "per year"})
          </div>
          <div className="text-purple-500 font-bold text-lg">
            ${total}/{billingCycle === "monthly" ? "mo" : "yr"}
          </div>
        </div>
      </div>

      <div className=" flex justify-between">
        <button
          className="text-marine-blue
          absolute bottom-40"
          onClick={() => navigate("/addon")}
        >
          Go Back
        </button>
        <button className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-700
        absolute bottom-40 right-[27rem]"
          onClick={() => navigate("/thankyou")}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Summary;
