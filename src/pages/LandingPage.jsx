import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!website || !service) {
      setError("Please enter a website and select a service");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    // Simulating API call
    setTimeout(() => {
      setLoading(false);
      navigate("/checker", { state: { website, service } });
    }, 2000);
  };

  return (
    <div className="flex h-screen">
      {/* Left half with image */}
      <div className="w-1/2 bg-gray-200 flex justify-center items-center">
        <img src="https://via.placeholder.com/400" alt="Accessibility" />
      </div>

      {/* Right half with form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Our free <span className="text-purple-800">ADA</span> and{" "}
          <span className="text-purple-800">WCAG compliance</span> checker
          identifies web accessibility issues{" "}
        </h1>

        <div className="flex flex-row w-[90%]">
          <div class="relative w-1/2 flex-[7]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-3 top-[40%] transform -translate-y-1/2 h-5 w-5 text-gray-500 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L10 12v4.07c-.61-.55-1.15-1.17-1.61-1.9v-1.74l-.57-1.15A6.949 6.949 0 0012 4c3.87 0 7 3.13 7 7s-3.13 7-7 7zm3.39-2.56l-1.4-1.4A8.014 8.014 0 0112 20c.57 0 1.12-.09 1.64-.26l.75-1.61zM13.53 8h2.69a6.994 6.994 0 00-5.19-5.19V8h2.5v2.68h1V8zm-5.9-.94c.52-.31 1.06-.55 1.61-.7L10 8h.78l1 2.06v3.82c.42.09.86.16 1.31.16.71 0 1.4-.12 2.05-.35l.77-1.61H10V8.11zm-3.32 1.81L7.62 12v3.09l-2.64-.67a8.056 8.056 0 01-1.03-2.9 6.91 6.91 0 00.04-1.56v.03z"
              />
            </svg>

            <input
              type="text"
              placeholder="Enter Website URL"
              class="pl-10 p-3 border border-gray-300 rounded-l-lg

 w-full"
            />
          </div>

          <select
            className="mb-4 p-3 border border-purple-700  text-purple-700 font-bold rounded-r-lg

 w-full flex-[3]"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option className="font-bold" value="">
              Select Accessibility Service
            </option>
            <option className="font-bold" value="service1">
              Service 1
            </option>
            <option className="font-bold" value="service2">
              Service 2
            </option>
            <option className="font-bold" value="service3">
              Service 3
            </option>
          </select>
        </div>

        <button
          className="bg-purple-700 text-white py-3 px-6 rounded"
          onClick={handleScan}
        >
          {loading ? "Scanning..." : "Start Scan"}
        </button>

        {/* Error message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LandingPage;
