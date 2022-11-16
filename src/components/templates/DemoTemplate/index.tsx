import React from "react";
import Image from "next/image";
import Ninja from "./../../../../src/assets/img/ninja.png";
import Shuriken from "./../../../../src/assets/img/shuriken.png";
import SectionArea from "../../atoms/Section";
import { ImageWrapper, ImageWrapperMarvel } from "../HomeTemplate/styles";
import IronMan from "./../../../../src/assets/img/iron-man.png";
import Captain from "./../../../../src/assets/img/captain-america.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function DemoTemplate() {
  return (
    <>
      <SectionArea className="bg-blue-100">
        <h2>Section 1</h2>
      </SectionArea>

      <SectionArea id="section-ninja" className="bg-green-200">
        <ImageWrapper id="image-wrapper">
          <Image id="ninja" src={Ninja} alt="ninja" height={300} />
          <Image id="shuriken" src={Shuriken} alt="shuriken" height={50} />
        </ImageWrapper>
      </SectionArea>

      <SectionArea className="bg-yellow-100">
        <h2>Section 3</h2>
      </SectionArea>
    </>
  );
}

export default DemoTemplate;
