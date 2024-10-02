import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import landing_page from "../assets/landing_page.png";
import checker_loader from "../assets/checker_loader.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BsGlobe } from "react-icons/bs";

const LandingPage = () => {
  const [website, setWebsite] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleScan = async () => {
    if (!website) {
      setError("Please enter a website");
      return;
    }
    if (!service) {
      setError("Please select a service");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    // Prepare form data for API call
    const formData = new FormData();
    formData.append("url", website);
    formData.append("is_first", "1"); // hardcoded value
    formData.append("langcode", "en"); // hardcoded value

    try {
      // Make the API request
      const response = await fetch(
        "https://ada.skynettechnologies.us/api/check-page-compliance-new",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch compliance data");
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Assuming you want to navigate with the API response data
      navigate("/checker", {
        state: { website, service, complianceData: data },
      });
    } catch (err) {
      setError("Error scanning the website. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="object-fill h-screen overflow-clip">
          {" "}
          <img src={checker_loader} alt="checker_loader" />
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Left half with image */}
          <div className="w-1/2 bg-gray-200 flex justify-center items-center h-screen">
            <img src={landing_page} alt="Accessibility" />
          </div>

          {/* Right half with form */}
          <div className="w-1/2 bg-white flex flex-col justify-between items-center h-auto ">
            <Navbar />
            <div className="flex flex-col h-auto items-center justify-between">
              <h1 className="text-3xl font-bold mb-6 text-center">
                Our free <span className="text-purple-800">ADA</span> and{" "}
                <span className="text-purple-800">WCAG compliance</span> checker
                identifies web accessibility issues{" "}
              </h1>

              <div className="flex flex-row w-[90%]">
                <div className="relative w-1/2 flex-[7]">
                  <BsGlobe className="absolute left-3 top-[40%] transform -translate-y-1/2 h-5 w-5 text-gray-500 " />

                  <input
                    type="text"
                    placeholder="Enter Website URL"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="pl-10 p-3 border border-gray-300 rounded-l-lg w-full"
                  />
                </div>

                <select
                  className="mb-4 p-3 border border-purple-700 text-purple-700 font-bold rounded-r-lg w-full flex-[3]"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option className="font-bold" value="">
                    Select Accessibility Service
                  </option>
                  <option className="font-bold" value="1">
                    Service 1
                  </option>
                  <option className="font-bold" value="2">
                    Service 2
                  </option>
                  <option className="font-bold" value="2">
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
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
