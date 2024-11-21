import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  billingCycle: "monthly", // monthly or yearly
  selectedPlan: {
    id: "arcade",
    name: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  selectedAddOns: [],
  addOns: [
    {
      id: "online_service",
      title: "Online service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    {
      id: "larger_storage",
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    {
      id: "customizable_profile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ],
};

const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setBillingCycle: (state, action) => {
      state.billingCycle = action.payload;
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    toggleAddOn: (state, action) => {
      const addOnId = action.payload;
      if (state.selectedAddOns.includes(addOnId)) {
        state.selectedAddOns = state.selectedAddOns.filter(
          (id) => id !== addOnId
        );
      } else {
        state.selectedAddOns.push(addOnId);
      }
    },
  },
});

export const { setBillingCycle, setSelectedPlan, toggleAddOn } =
  planSlice.actions;

export default planSlice.reducer;
