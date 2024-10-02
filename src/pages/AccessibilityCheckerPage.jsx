import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import checker_data from "../assets/checker_data.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AccessibilityCheckerPage = () => {
  const location = useLocation();
  const { website, service, complianceData } = location.state || {};

  const groupData = complianceData?.group_data;

  if (!website || !service || !complianceData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-red-600">
          Error: Missing website, service, or compliance data.
        </h1>
        {/* Skeletons for loading placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border rounded-xl shadow p-4 bg-gray-200 animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="p-8">
        <div className="flex flex-row justify-between mb-4">
          <p className="text-md font-bold">
            Accessibility Checker Results for {website}
          </p>
          <a href="checker" className="text-md underline cursor-pointer">
            Download free accessibility report
          </a>
        </div>

        <img
          src={checker_data}
          alt="checker_data"
          className="w-full h-auto mb-4"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {groupData &&
            Object.keys(groupData).map((groupName) => {
              const totalSuccess = groupData[groupName].reduce(
                (sum, item) => sum + item.total_success,
                0
              );
              const totalError = groupData[groupName].reduce(
                (sum, item) => sum + item.total_error,
                0
              );

              return (
                <div
                  key={groupName}
                  className="rounded-xl shadow cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  <h2 className="font-bold text-lg bg-purple-300 rounded-t-lg p-2">
                    {groupName}
                  </h2>
                  <div className="flex flex-row justify-around p-2">
                    <div className="flex flex-row justify-around p-2 gap-2">
                      <FaCheck
                        className="rounded-full bg-green-300 p-1"
                        size={20}
                      />
                      <p>Total Passed: {totalSuccess}</p>
                    </div>
                    <div className="flex flex-row justify-around p-2 gap-2">
                      <ImCross
                        className="rounded-full bg-red-300 p-1"
                        size={20}
                      />
                      <p>Total Failed: {totalError}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessibilityCheckerPage;
