import polyu from "../data/polyu.json";
import ive from "../data/ive.json";
import { EducationTimeline } from "./EducationTimeline";
// index.css

export const Education = () => {
  return (
    <div className="flex w-full flex-col">
      {/* <div className="divider badge-primary ">Education</div> */}
      <div className="divider text-3xl before:bg-primary after:bg-secondary">
        Education Highlight
      </div>

      <EducationTimeline />

      <br />

      <div>
        <div className="collapse collapse-plus my-3 bg-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title flex justify-between text-xs font-medium sm:text-sm md:text-xl">
            <span>PolyU - BSc (Hons) in Computing - CGPA : 3.36/4</span>
            <span>2022-2024</span>
          </div>
          <div className="collapse-content">
            <table className="table table-zebra overflow-scroll">
              {/* head */}
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {polyu.course.map((item) => (
                  <tr key={item.courseCode}>
                    <td>{item.courseCode}</td>
                    <td>{item.courseName}</td>
                    <td>{item.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="collapse collapse-plus mb-3 bg-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title flex justify-between text-xs font-medium sm:text-sm md:text-xl">
            <span>
              IVE - Higher Diploma in Softare Engineering - CGPA : 3.82/4
            </span>
            <span>2020-2022</span>
          </div>
          <div className="collapse-content">
            <table className="table table-zebra overflow-scroll">
              {/* head */}
              <thead>
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {ive.course.map((item) => (
                  <tr key={item.courseCode}>
                    <td>{item.courseCode}</td>
                    <td>{item.courseName}</td>
                    <td>{item.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div className="divider divider-neutral">Neutral</div>
      <div className="divider divider-primary">Primary</div>
      <div className="divider divider-secondary">Secondary</div>
      <div className="divider divider-accent">Accent</div>
      <div className="divider divider-success">Success</div>
      <div className="divider divider-warning">Warning</div>
      <div className="divider divider-info">Info</div>
      <div className="divider divider-error">Error</div> */}
    </div>
  );
};
