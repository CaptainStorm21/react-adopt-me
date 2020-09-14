import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//your code is going here
const App = () => {
//   return React.createElement(
//     "div",
//     //attributes {}
//     {
//       id: "internal-div",
//     },
//     [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {
//         key: 1,
//         name: "Lune",
//         animal: "Dog",
//         breed: "Labrador",
//       }),
//       React.createElement(Pet, {
//         key: 2,
//         name: "Alice",
//         animal: "Fox",
//         breed: "Lisao",
//       }),
//       React.createElement(Pet, {
//         key: 3,
//         name: "Max",
//         animal: "Dog",
//         breed: "English settler",
//       }),
//     ]
//   );

return (
    <div>
        <Pet name = "Luna" animal="Dog" breed="Poodle"/>
        <Pet name = "Alie" animal="Cat" breed="Seamese"/>
        <Pet name = "Alpha" animal="Eagle" breed="Bald Eagle"/>

    </div>
)


};

render(React.createElement(App), document.getElementById("root"));
