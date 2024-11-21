import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PersonalInfoForm = () => {
  const navigate = useNavigate();

  // State for form data and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("personalInfo");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Validation function
  const validateField = (field, value) => {
    let error = "";

    if (field === "name") {
      if (!value.trim()) {
        error = "Name is required.";
      }
    }

    if (field === "email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
      ) {
        error = "Please enter a valid email address.";
      }
    }

    if (field === "phone") {
      if (!value.trim()) {
        error = "Phone number is required.";
      } else if (!/^\+?\d{1,4}?\s?\d{1,10}(\s?\d{1,10})?$/.test(value)) {
        error = "Please enter a valid phone number.";
      }
    }

    return error;
  };

  // Handle input changes and validate in real-time
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Save data to localStorage
    localStorage.setItem(
      "personalInfo",
      JSON.stringify({
        ...formData,
        [id]: value,
      })
    );

    // Update error state in real-time
    const error = validateField(id, value);
    setErrors((prev) => ({
      ...prev,
      [id]: error,
    }));
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim()
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md">
      <h1 className="text-2xl font-bold text-marine-blue mt-10">Personal Info</h1>
      <p className="text-cool-gray mt-2">
        Please provide your name, email address, and phone number.
      </p>
      <form className="mt-16 space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.name ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            disabled={!isFormValid()} // Disable button if form is invalid
            className={`px-4 py-2 text-white rounded-md 
            absolute bottom-40 right-[27rem]
            ${isFormValid()
                ? "bg-marine-blue hover:bg-purplish-blue"
                : "bg-gray-300 cursor-not-allowed"
              }`}
            onClick={() => navigate("/selectplan")}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;
