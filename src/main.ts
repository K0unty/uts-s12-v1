import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1> Testing Imports  </h1>
   <h2> Lodash </h2>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
