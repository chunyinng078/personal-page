import React from "react";
import polyu from "../data/polyu.json";
// index.css

export const WorkExp = () => {
  return (
    <div className="flex w-full flex-col">
      {/* <div className="divider badge-primary ">Education</div> */}
      <div className="divider before:bg-primary after:bg-secondary text-3xl">
        Work Experience
      </div>

      {/* short text to show past experiences: company, position, job description  stylyed with tailwind*/}
      <div className="card bg-base-100 w-full shadow-xl my-2">
        <div className="card-body">
          <div className="text-xl flex flex-col sm:flex-row justify-between">
            <span className="font-bold md:font-normal">
              WEDRAGON Technology Limited
            </span>
            <span className="font-medium md:font-normal">
              19 Jan 2024 – 24 Feb 2024
            </span>
          </div>
          <p className="">Software Engineer</p>
          <ul className="list-disc list-inside">
            <li>
              Develop e-commerce platform prototype with PHP, JS, Bootstrap and
              Stripe payment gateway
            </li>
            <li>Develop Ionic app prototype with React JS</li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl my-2">
        <div className="card-body">
          <div className=" text-xl flex justify-between">
            <span className="font-bold">GNS Technology Limited</span>
            <span className="font-medium">01 Dec 2023 – 06 Jan 2024</span>
          </div>
          <p className="">Part-time Programmer</p>
          <ul className="list-disc list-inside">
            <li>Setup Linux computers/hardware</li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-xl my-2">
        <div className="card-body">
          <div className=" text-xl flex justify-between">
            <span className="font-bold">YAKOO Technology Limited</span>
            <span className="font-medium">05 Jun 2023 – 02 Aug 2023</span>
          </div>
          <p className="">Web Developer Intern (Stem)</p>
          <ul className="list-disc list-inside">
            <li>
              Follow Figma UI design wireframe to modify template to complete a
              responsive website layout with HTML, JavaScript, Tailwind CSS, and
              framer motion:{" "}
              <a
                href="https://www.luisortet.com"
                className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline "
              >
                https://www.luisortet.com
              </a>
            </li>

            <li>Involved in projects that use Git, Joomla, and PHP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
