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
        <h1 className="text-3xl font-bold mb-6">Accessibility Scanner</h1>

        <div className="flex flex-row w-[80%]">
          <input
            type="text"
            placeholder="Enter Website URL"
            className="mb-4 p-3 border border-gray-300 rounded w-full"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <select
            className="mb-4 p-3 border border-gray-300 rounded w-full"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Accessibility Service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white py-3 px-6 rounded"
          onClick={handleScan}
        >
          {loading ? "Scanning..." : "Scan"}
        </button>

        {/* Error message */}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default LandingPage;
