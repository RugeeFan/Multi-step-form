import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAddOn } from "../store/planSlice";

const PickAddOns = () => {
  const dispatch = useDispatch();
  const { addOns, selectedAddOns, billingCycle } = useSelector(
    (state) => state.plan
  );
  const navigate = useNavigate();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md ">
      <h1 className="text-2xl font-bold text-marine-blue">Pick add-ons</h1>
      <p className="text-cool-gray mt-2">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-16 space-y-4">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            onClick={() => dispatch(toggleAddOn(addOn.id))}
            className={`flex items-center p-4 border rounded-md cursor-pointer ${selectedAddOns.includes(addOn.id)
              ? "bg-light-blue border-purple-500"
              : "border-gray-300"
              }`}
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-purple-500"
              checked={selectedAddOns.includes(addOn.id)}
              readOnly
            />
            <div className="ml-4">
              <div className="text-marine-blue font-bold">{addOn.title}</div>
              <div className="text-cool-gray text-sm">{addOn.description}</div>
            </div>
            <div className="ml-auto text-marine-blue font-bold">
              +${addOn.price[billingCycle]}/{billingCycle === "monthly" ? "mo" : "yr"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[10rem] flex justify-between">
        <button
          className="text-marine-blue
          absolute bottom-40"
          onClick={() => navigate("/selectplan")}
        >
          Go Back
        </button>
        <button
          className="px-4 py-2 text-white bg-marine-blue rounded-md hover:bg-purple-500
          absolute bottom-40 right-[27rem]"
          onClick={() => navigate("/summary")}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PickAddOns;
