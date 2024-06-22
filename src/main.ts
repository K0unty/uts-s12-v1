import "./style.css";
import _ from "lodash";

// This section displays pussies
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1> Testing Imports  </h1>
   <h2> Lodash </h2>
  </div>
`;

////////////////////////

// This Seciton is the actual work

console.log(
  `%cTesting Lodash `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 20px; padding: 10px;font-style:italic"
);

console.log(_.shuffle([1, 2, 3]));
