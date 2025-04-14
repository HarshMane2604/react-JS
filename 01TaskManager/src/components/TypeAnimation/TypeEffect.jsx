import React from "react";
import { TypeAnimation } from "react-type-animation";
const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Welcome to Your Task Manager Web APP 💼✨", // Types 'One'
        1000, // Waits 1s
        "Welcome to Your Task Manager Web APP 💼✨", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Welcome to Your Task Manager Web APP 💼✨", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2.5em", display: "inline-block", color: "white", fontWeight: "bold", textAlign: "left" }}
    />
  );
};

export default TypeEffect;
