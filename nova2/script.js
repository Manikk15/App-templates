// function getQueryParam(parameterName) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(parameterName);
// }

 
// const profileId = getQueryParam("profile");

// if (profileId) {
//   const apiUrl = `https://api.resumebuild.in/api/candidate/web-profile/${profileId}`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((item) => {
//       let res = item?.data;
//       let mySocial = "";

//       res?.social_links?.forEach((element) => {
//         mySocial =
//           mySocial +
//           `
//                 <a
//                 class="px-2"
//                 href=${element?.link}
//                 key="1"
//                 >${element?.name}</a
//               >`;
//       });
//       let mySkills =
//         res?.skills?.length !== 0 &&
//         res?.skills
//           ?.map((item) => {
//             return ` <p
//               class="text-sm rounded-md  font-semibold p-2 w-fit"
//             >
//               ${item?.skill}
//             </p>`;
//           })
//           ?.join("");

//       let myExperience = "";

//       res?.experiences?.forEach((element) => {
//         myExperience =
//           myExperience +
//           `
//      <div class="mt-1 p-1.5 text-justify">
//       <h3 class="text-base text-black font-semibold">${
//         element?.company_name
//       }</h3>
//       <div class="flex justify-between">
//         <p class="text-base text-black">${element?.designation}</p>
//         <p class="text-base text-black">${element?.start_date}-${
//             element?.is_current ? "Present" : element?.end_date
//           }</p>
//       </div>
//       <p class="text-sm w-80% text-black font-medium">
//       ${element?.description}
        
//       </p>
//     </div> `;
//       });
//       let myProjects = "";

//       res?.projects?.forEach((element) => {
//         myProjects =
//           myProjects +
//           `
//           <div class="mt-1 p-1.5 text-justify">
//           <h3 class="text-base text-black font-semibold">${element?.title}</h3>
//           <div class="flex justify-between">
//             <p class="text-base text-black">${element?.link}</p>
//             <p class="text-base text-black">${element?.start_date}-${element?.end_date}</p>
//           </div>
//           <p class="text-sm w-80% text-black font-medium">
//             ${element?.description}
//           </p>
//         </div>`;
//       });
//       let myEducation = "";

//       res?.eductaions?.forEach((element) => {
//         myEducation =
//           myEducation +
//           `
//           <div class="mt-1 p-1.5 rounded">
//       <div></div>
//       <h3 class="text-lg font-medium">${element?.university}</h3>
//       <p class="text-base text-gray-600">
//       ${element?.course}
//       </p>
//       <p class="text-sm text-gray-600">${element?.start_date}-${
//             element?.is_current ? "Currently studying" : element?.end_date
//           }</p>
//     </div>`;
//       });
//       let myLanguage = "";

//       res?.languages?.forEach((element) => {
//         myLanguage =
//           myLanguage +
//           `
//           <div class="mt-1 flex gap-x-4 px-2">
//           <p class="text-base">${element?.language}</p>
//         </div>`;
//       });

//       let myInterests = "";

//       res?.interests?.forEach((element) => {
//         myInterests =
//           myInterests + ` <p class="text-sm px-2">${element?.interest}</p>`;
//       });

//       let myCertificate = res?.certification
//         ?.map((item) => {
//           return `
//         <li>${item?.certificate}</li>
        
//         `;
//         })
//         ?.join("");
//       const videoQuestions = res?.video_questions?.filter(
//         (question) => question?.video !== null
//       );

//       let myVideos = "";

//       videoQuestions?.forEach((element) => {
//         myVideos =
//           myVideos +
//           `
        
//           <div>
//           <h2 class="text-base">${element?.question?.question}</h2>
//           <a href=${element?.video} class="text-sm">Answer</a>
//         </div>
           
    
//             `;
//       });
//       if (videoQuestions.length !== 0) {
//         videoProfileHtml = `
        
//         <div class="px-4">
//         <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Video Profile</h1>
//         <div class="flex gap-x-3">
//           ${myVideos}
//         </div>
//       </div>
//         `;
//       }
//       const dynamicContent = document.getElementById("dynamic-content");
//       dynamicContent.innerHTML = `<div class="main-container bg-white">
//  <!-- header -->
//  <div class="px-2">
//    <header class="flex justify-start gap-x-6 items-center">
//      <div>
//        <h1 class="font-semibold text-2xl">${res?.full_name}</h1>
//        <h3 class="font-medium text-pink-400 text-lg">${res?.position}</h3>
//        <p class="font-medium text-base">
//        ${res?.summary}
//        </p>
//      </div>
//    </header>
//  </div>
//  <!-- contact -->
//  <div>
//    <section
//      class="flex bg-gray-700 rounded-md font-semibold text-14px mt-2.5 text-violet-100 justify-around items-center"
//    >
//      <div>
//      <h3>${res?.email}</h3>
//      <h3>${res?.mobile_no}</h3>
//      <h3>${res?.address}</h3>
//      </div>
//      <div>
//      ${mySocial}
//      </div>
//    </section>
//  </div>
//  <!-- skill -->
//  <div class="px-2 flex">
//    <span class="w-0.5 flex-grow-0 bg-gray-700 mr-2"></span>
//    <div>
//      <h1 class="font-semibold uppercase text-xl mt-3 text-gray-700">
//        Skills
//      </h1>
//      <div
//        class="flex flex-col justify-start gap-y-2 gap-x-10 items-start h-32 flex-wrap mt-2.5"
//      >
    
//      ${mySkills}
//      </div>
//    </div>
//  </div>
//  <!--line-->
//  <div class="flex my-1">
//    <p class="w-[90%] mx-auto bg-pink-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-gray-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-blue-700 h-1"></p>
//  </div>
//  <!-- workexp -->
//  <div class="px-2 flex">
//    <span class="w-0.5 flex-grow-0 bg-gray-700 mr-2"></span>
//    <div>
//      <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">
//        Work Experience
//      </h1>
//      <div>
//      ${myExperience} 
      
//      </div>
//    </div>
//  </div>
//  <!-- lines -->
//  <div class="flex my-1">
//    <p class="w-[90%] mx-auto bg-pink-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-gray-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-blue-700 h-1"></p>
//  </div>
//  <!-- Project -->
//  <div class="px-2 flex">
//    <span class="w-0.5 flex-grow-0 bg-gray-700 mr-2"></span>
//    <div>
//      <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">
//        Projects
//      </h1>
//      <div>
     
//       ${myProjects}
//      </div>
//    </div>
//  </div>
//  <!-- lines -->
//  <div class="flex my-1">
//    <p class="w-[90%] mx-auto bg-pink-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-gray-700 h-1"></p>
//    <p class="w-[90%] mx-auto bg-blue-700 h-1"></p>
//  </div>
//  <!-- education -->
//  <div class="px-2 flex">
//    <span class="w-0.5 flex-grow-0 bg-gray-700 mr-2"></span>
//    <div class="">
//      <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">
//        Education
//      </h1>
//      <div>
      
//     ${myEducation}
//      </div>
//    </div>
//  </div>
//  <!-- language -->
//  <div class="px-4">
//    <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">
//      Language
//    </h1>
//    <div class="flex gap-x-4">
//    ${myLanguage}
    
//    </div>
//  </div>
//  <!--  certificates-->
//  <div class="px-4">
//    <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Certifications</h1>
//    <div>
//      <ul class="list-disc flex gap-x-1 list-inside">
//       ${myCertificate}
//      </ul>
//    </div>
//  </div>
//  <!-- Interest-->
//  <div class="px-4">
//    <h1 class="font-semibold uppercase text-xl mt-4 text-gray-700">Interests</h1>
//    <div class="flex gap-x-3">
//      ${myInterests}
//    </div>
//  </div>
//   <!-- Video Profile -->

// ${videoProfileHtml}
 
// </div>`;
//     })
//     .catch((error) => {
//       console.log("API request error:", error);
//     });
// } else {
//   // Handle the case when 'profile' parameter is not present
//   console.error("Profile parameter is missing from the URL.");
// }
