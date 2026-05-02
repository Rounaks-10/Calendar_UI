import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const steps = [
    "Open your Google Calendar on desktop 💻",
    "On the left side, find 'Other calendars'",
    "Click on '+' and select 'From URL'",
    "Copy the contest calendar URL from our app",
    "Paste the URL into Google Calendar",
    "Click 'Add calendar'",
    "Make sure you use the SAME email on your phone 📱",
    "Turn ON sync in your phone calendar settings",
    "All set 🎉 Your contests will now appear automatically!"
  ];

  const nextStep = () => {
    if (step === steps.length - 1) {
      navigate("/"); // redirect to home
    } else {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white flex items-center justify-center px-4">
      
      <div className="bg-[#161b22] border border-gray-700 rounded-lg w-full max-w-2xl shadow-lg">
        
        {/* Header like code editor */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-700">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="ml-4 text-gray-400 text-sm">setupSteps.md</span>
        </div>

        {/* Step Content */}
        <div className="p-6 font-mono text-green-400 text-sm">
          
          <p className="text-gray-500 mb-4">
            Step {step + 1} / {steps.length}
          </p>

          <p className="text-white text-lg mb-6">
            {steps[step]}
          </p>

          {/* Special Step (Copy URL) */}
          {step === 3 && (
            <div className="bg-black p-3 rounded border border-gray-600 mb-4 flex justify-between items-center">
              <span className="text-green-400 text-xs">
                https://your-backend.com/calendar.ics
              </span>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://your-backend.com/calendar.ics"
                  )
                }
                className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
              >
                Copy
              </button>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="px-4 py-2 bg-gray-700 rounded disabled:opacity-40"
            >
              Prev
            </button>

            <button
              onClick={nextStep}
              className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
            >
              {step === steps.length - 1 ? "Finish" : "Next"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;