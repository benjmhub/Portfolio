import React, { useRef } from "react";
import { useBioReveal } from "../Hooks/gsap";
const Bio = () => {

  const boiRef=useRef(null)
  useBioReveal(boiRef,2)
  return (
    <div className="boi mt-20 container mx-auto overflow-hidden ">
      <p ref={boiRef}>
      Hi! I am a software engineer specializing in developing responsive and interactive web applications. I leverage a wide range of tools and technologies, including React, JavaScript, HTML, CSS, and various frontend libraries, to create engaging user experiences and deliver high-quality web solutions.
      </p>
    </div>
  );
};

export default Bio;
