import React from "react";
import { useLocation } from "react-router-dom";

const AccessibilityCheckerPage = () => {
  const location = useLocation();
  const { website, service } = location.state;

  // Dummy API response data
  const data = [
    { id: 1, title: "Issue 1", description: "Description of Issue 1" },
    { id: 2, title: "Issue 2", description: "Description of Issue 2" },
    { id: 3, title: "Issue 3", description: "Description of Issue 3" },
    { id: 4, title: "Issue 4", description: "Description of Issue 4" },
    { id: 5, title: "Issue 5", description: "Description of Issue 5" },
    { id: 6, title: "Issue 6", description: "Description of Issue 6" },
    { id: 7, title: "Issue 7", description: "Description of Issue 7" },
    { id: 8, title: "Issue 8", description: "Description of Issue 8" },
    { id: 9, title: "Issue 9", description: "Description of Issue 9" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Results for {website} using {service}
      </h1>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessibilityCheckerPage;
