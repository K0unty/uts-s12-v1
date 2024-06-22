import "./style.css";
import canvasConfetti from "canvas-confetti";
import _ from "lodash";
import { Products } from "./product.model";

// Using the class transformer
import "reflect-metadata";
import { plainToClass, plainToInstance } from "class-transformer";

// Create the banner function
const LOG_STYLE =
  "background: linear-gradient(to right, rgba(38, 2, 33, 0.906) 47%, rgba(22, 0, 103, 1) 89%); color:#FFD933; font-size: 15px; padding: 10px; font-style:italic";

function logMessage(message: string): void {
  console.log(`%c${message}`, LOG_STYLE);
}

////

// This section displays pussies
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
   <h1> Testing Imports  </h1>
   <h2> Lodash </h2>
  </div>
  <button id="confetti-button">Panty</button>
`;

////////////////////////
const confettiButton = document.getElementById("confetti-button");
if (confettiButton) {
  confettiButton.addEventListener("click", () => {
    canvasConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
}

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

// 164

logMessage(`Declare and Last Resort`);

// declare -

// 165
logMessage(`NoTypes Needed - Class Transformer`);

const products = [
  { title: "ACarpet", price: 20.0 },
  { title: "Abook", price: 10.0 },
];
// const p1 = new Products("A book", 12.99);

// Manually converting the products array received , from an API Response
// const loadedProducts = products.map((prod) => {
//   return new Products(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Products, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
// Class- Transformer to
