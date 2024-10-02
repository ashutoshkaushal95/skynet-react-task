import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import checker_data from "../assets/checker_data.png";

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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Results for {website} using {service}
      </h1>

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
              <div key={groupName} className="border  rounded-xl shadow">
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
  );
};

export default AccessibilityCheckerPage;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import { FaCheck } from "react-icons/fa";
// import { ImCross } from "react-icons/im";

// const AccessibilityCheckerPage = () => {
//   const location = useLocation();
//   const { website, service ,complianceData } = location.state;

//   // const complianceData = {
//   //   msg: "Page compliance has been completed",
//   //   group_data: {
//   //     Graphics: [
//   //       {
//   //         id: 36,
//   //         message_readable: "All img tags must have alt attributes.",
//   //         requirement:
//   //           "All images must have alternate text to convey their purpose and meaning to screen reader users.",
//   //         language_key: "all_img_tags_must_have_alt_attributes_checker",
//   //         group_id: 5,
//   //         visually_impaired: 1,
//   //         cognitive_disabilities: 1,
//   //         motor_impaired: 0,
//   //         blind: 1,
//   //         color_blind: 0,
//   //         dyslexia: 0,
//   //         seizure_epileptic: 0,
//   //         adhd: 0,
//   //         elderly: 0,
//   //         level_a: 1,
//   //         level_aa: 0,
//   //         level_aaa: 0,
//   //         level_messages_a: ["1.1.1 Non-Text Content"],
//   //         level_messages_aa: [],
//   //         level_messages_aaa: [],
//   //         user_impact: 3,
//   //         created_at: null,
//   //         updated_at: null,
//   //         deleted_at: null,
//   //         status: 0,
//   //         group_name: "Graphics",
//   //         total_error: 2,
//   //         error_details: [
//   //           {
//   //             id: 2239475,
//   //             context:
//   //               '<a href="https://theprint.in/subscribe/" target="_blank"><img src="https://static.thepri...</a>',
//   //             TotalFails: 2,
//   //           },
//   //           {
//   //             id: 2239493,
//   //             context:
//   //               '<a href="https://hindi.theprint.in/opinion/a-new-weapon-to-divert-attention-from-issues-the-idea-of-one-nation-one-election-arose-from-the-mandate-received-in-2024/734375/">\n\n<img src="https://statichindi...</a>',
//   //             TotalFails: 2,
//   //           },
//   //         ],
//   //         is_fixed_by_widget: 1,
//   //         total_success: 3,
//   //         success_details: [
//   //           {
//   //             id: 2241343,
//   //             context:
//   //               '<img class="tdb-logo-img td-retina-data gm-loaded gm-observing gm-observing-cb" data-retina="https://static.theprint.in/wp-content/uploads/2022/01/Support-our-Journalism-2.png" src="https://static.theprint.in/wp-content/uploads/2022/01/Support-our-Journalism-2.png?compress=true&amp;quality=80&amp;w=200&amp;dpr=1" alt="Logo" title="" width="187" height="24">',
//   //             TotalFails: "0",
//   //           },
//   //           {
//   //             id: 2241362,
//   //             context:
//   //               '<img src="https://img.youtube.com/vi/-q-I9M3LMI0/maxresdefault.jpg" alt="Video Preview Image" class="gm-observing gm-observing-cb">',
//   //             TotalFails: "0",
//   //           },
//   //           {
//   //             id: 2241366,
//   //             context:
//   //               '<img src="https://img.youtube.com/vi/HlgT2EgZTn8/maxresdefault.jpg" alt="Video Preview Image" class="gm-observing gm-observing-cb">',
//   //             TotalFails: "0",
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         id: 37,
//   //         message_readable:
//   //           "Img element with empty alt text must have absent or empty title attribute.",
//   //         requirement:
//   //           "Some screen readers will read title attributes when alt text is empty. It is recommended not to use title attributes for decorative images.",
//   //         language_key:
//   //           "img_element_with_empty_alt_text_must_have_absent_or_empty_title_attribute_checker",
//   //         group_id: 5,
//   //         visually_impaired: 1,
//   //         cognitive_disabilities: 1,
//   //         motor_impaired: 0,
//   //         blind: 1,
//   //         color_blind: 0,
//   //         dyslexia: 0,
//   //         seizure_epileptic: 0,
//   //         adhd: 0,
//   //         elderly: 0,
//   //         level_a: 1,
//   //         level_aa: 0,
//   //         level_aaa: 0,
//   //         level_messages_a: ["1.1.1 Non-Text Content"],
//   //         level_messages_aa: [],
//   //         level_messages_aaa: [],
//   //         user_impact: 1,
//   //         created_at: null,
//   //         updated_at: null,
//   //         deleted_at: null,
//   //         status: 0,
//   //         group_name: "Graphics",
//   //         total_error: 0,
//   //         error_details: [],
//   //         is_fixed_by_widget: 0,
//   //         total_success: 0,
//   //         success_details: [],
//   //       },
//   //       {
//   //         id: 82,
//   //         message_readable:
//   //           "Non-functional icons/spacers should be excluded from assistive technology",
//   //         requirement:
//   //           'Font icons, SVG or images that are being used as spacers, decorations or their purpose is already described by the content should include a "role" attribute that equals to "presentation" or "none".',
//   //         language_key:
//   //           "non_functional_icons_spacers_should_be_excluded_from_assistive_technology_checker",
//   //         group_id: 5,
//   //         visually_impaired: 1,
//   //         cognitive_disabilities: 1,
//   //         motor_impaired: 0,
//   //         blind: 1,
//   //         color_blind: 0,
//   //         dyslexia: 0,
//   //         seizure_epileptic: 0,
//   //         adhd: 0,
//   //         elderly: 0,
//   //         level_a: 1,
//   //         level_aa: 0,
//   //         level_aaa: 0,
//   //         level_messages_a: ["1.1.1 Non-Text Content"],
//   //         level_messages_aa: [],
//   //         level_messages_aaa: [],
//   //         user_impact: 1,
//   //         created_at: null,
//   //         updated_at: null,
//   //         deleted_at: null,
//   //         status: 0,
//   //         group_name: "Graphics",
//   //         total_error: 0,
//   //         error_details: [],
//   //         is_fixed_by_widget: 0,
//   //         total_success: 0,
//   //         success_details: [],
//   //       },
//   //     ],

//   //     Content: [
//   //       {
//   //         id: 93,
//   //         message_readable:
//   //           "Web pages must avoid content that flashes or blinks more than three times per second.",
//   //         requirement:
//   //           "Flashing content can trigger seizures in individuals with photosensitive epilepsy. Limiting the flash frequency reduces the risk of seizures and ensures that the page is safe for all users.",
//   //         language_key:
//   //           "web_pages_must_avoid_content_that_flashes_or_blinks_more_than_three_times_per_second",
//   //         group_id: 11,
//   //         visually_impaired: 0,
//   //         cognitive_disabilities: 1,
//   //         motor_impaired: 0,
//   //         blind: 0,
//   //         color_blind: 0,
//   //         dyslexia: 0,
//   //         seizure_epileptic: 1,
//   //         adhd: 0,
//   //         elderly: 0,
//   //         level_a: 1,
//   //         level_aa: 0,
//   //         level_aaa: 1,
//   //         level_messages_a: ["2.3.1 Three Flashes or Below Threshold"],
//   //         level_messages_aa: [],
//   //         level_messages_aaa: ["2.3.1 Three Flashes"],
//   //         user_impact: 2,
//   //         created_at: null,
//   //         updated_at: null,
//   //         deleted_at: null,
//   //         status: 0,
//   //         group_name: "Content",
//   //         total_error: 0,
//   //         error_details: [],
//   //         is_fixed_by_widget: 0,
//   //         total_success: 0,
//   //         success_details: [],
//   //       },
//   //       {
//   //         id: 94,
//   //         message_readable:
//   //           "If a webpage includes flashing content, a clear warning should be provided beforehand, giving users the option to skip or avoid it.",
//   //         requirement:
//   //           "Providing a warning allows users, particularly those with photosensitive epilepsy, to make an informed decision to avoid content that could potentially trigger seizures. This enhances user safety and accessibility.",
//   //         language_key: "if_a_webpage_includes_flashing_content_warning",
//   //         group_id: 11,
//   //         visually_impaired: 0,
//   //         cognitive_disabilities: 1,
//   //         motor_impaired: 0,
//   //         blind: 0,
//   //         color_blind: 0,
//   //         dyslexia: 0,
//   //         seizure_epileptic: 1,
//   //         adhd: 0,
//   //         elderly: 0,
//   //         level_a: 1,
//   //         level_aa: 0,
//   //         level_aaa: 1,
//   //         level_messages_a: ["2.3.1 Three Flashes or Below Threshold"],
//   //         level_messages_aa: [],
//   //         level_messages_aaa: ["2.3.1 Three Flashes"],
//   //         user_impact: 2,
//   //         created_at: null,
//   //         updated_at: null,
//   //         deleted_at: null,
//   //         status: 0,
//   //         group_name: "Content",
//   //         total_error: 0,
//   //         error_details: [],
//   //         is_fixed_by_widget: 0,
//   //         total_success: 0,
//   //         success_details: [],
//   //       },
//   //     ],
//   //   },
//   //   status: 0,
//   //   completed_percentage: 100,
//   //   page_image: null,
//   //   total_fail: 406,
//   //   total_fail_fixed_by_widget: 244,
//   //   total_success: 207,
//   //   widget_purchased: false,
//   //   is_paid_free: 0,
//   //   url: "http://theprint.in",
//   //   request_data: {
//   //     id: 1143,
//   //     url: "http://theprint.in",
//   //     status: 1,
//   //     process: 25,
//   //     time_out: 0,
//   //     accessibility_system: null,
//   //     in_process: 1,
//   //     screen_image_path:
//   //       "/page_compliance_images/screen-capture_httptheprintin.png",
//   //     ip_address: "103.21.160.77",
//   //     is_unauthorized: 0,
//   //     is_paid_free: 0,
//   //   },
//   //   accessibility_system_detected: null,
//   //   level_fail_counts: {
//   //     A: 213,
//   //     AA: 200,
//   //     AAA: 212,
//   //   },
//   //   level_fail_counts_fixed_by_widget: {
//   //     A: 51,
//   //     AA: 194,
//   //     AAA: 206,
//   //   },
//   // };

//   const groupData = complianceData?.group_data;

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-6">
//         Results for {website} using {service}
//       </h1>
//       <h1 className="text-2xl font-bold mb-6">
//         Results for website using service
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {groupData &&
//           Object.keys(groupData).map((groupName) => {
//             // Aggregating total success and total error for each group
//             const totalSuccess = groupData[groupName].reduce(
//               (sum, item) => sum + item.total_success,
//               0
//             );
//             const totalError = groupData[groupName].reduce(
//               (sum, item) => sum + item.total_error,
//               0
//             );

//             return (
//               <div key={groupName} className="border  rounded-xl shadow">
//                 <h2 className="font-bold text-lg bg-purple-300 p-2">
//                   {groupName}
//                 </h2>
//                 <div className="flex flex-row justify-around p-2">
//                   <div className="flex flex-row justify-around p-2 gap-2 ">
//                     <FaCheck
//                       className="rounded-full bg-green-300 p-1"
//                       size={20}
//                     />
//                     <p>Total Passed: {totalSuccess}</p>
//                   </div>
//                   <div className="flex flex-row justify-around p-2 gap-2">
//                     <ImCross
//                       className="rounded-full bg-red-300 p-1"
//                       size={20}
//                     />
//                     <p>Total Failed: {totalError}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default AccessibilityCheckerPage;
