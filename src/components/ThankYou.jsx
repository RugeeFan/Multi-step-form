import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-whites">
      {/* Thank You Icon */}
      <div className="w-16 h-16 mb-6">
        <img
          src="./assets/images/icon-thank-you.svg"
          alt="Thank You"
          className="w-full h-full"
        />
      </div>

      {/* Thank You Message */}
      <h1 className="text-2xl font-bold text-marine-blue">Thank you!</h1>
      <p className="text-center text-cool-gray mt-4 max-w-md">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <span className="font-bold text-marine-blue">
          support@loremgaming.com
        </span>
        .
      </p>
    </div>
  );
};

export default ThankYou;
