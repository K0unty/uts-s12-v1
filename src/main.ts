import "./style.css";
import _ from "lodash";

// This section displays pussies
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1> Testing Imports  </h1>
   <h2> Lodash </h2>
  </div>
  <button>Panty</button>
`;

////////////////////////

// This Seciton is the actual work

console.log(
  `%cTesting Lodash `,
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 20px; padding: 10px;font-style:italic"
);

// Creating an array of random numbers for calling shuffle on

const arr: number[] = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.trunc(Math.random() * 6) + 1);
}
console.log(arr);

// Using Loops to write this to repear
for (let i = 0; i < 10; i++) {
  console.log(_.shuffle(arr));
}
