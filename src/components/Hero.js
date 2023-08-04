import React, { useRef } from "react";
import { useHoverEffect } from "../Hooks/useHoverEffect";
import {useImageReveal,useHeadLineReveal} from "../Hooks/gsap"
const Hero = () => {
  const data = {
    img1: "https://i.ibb.co/Zc79VWb/office-background-video-conferencing-52683-45493.jpg",
    img2: "https://i.ibb.co/MBdhrgY/20230721-115157.jpg",
  };

  const heroImageRef = useRef(null);

  const heroHeadLine1Ref = useRef(null);
  const heroHeadLine2Ref = useRef(null);
const headlines=[heroHeadLine1Ref,heroHeadLine2Ref]
  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef,0.5)
  useHeadLineReveal(headlines,1.5)
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left">
        <h1 ref={heroHeadLine1Ref}>Software</h1>
      </div>
      <div className="shutter shutter-right">
        <h1 ref={heroHeadLine2Ref}>Engineer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
