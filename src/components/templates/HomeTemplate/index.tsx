import React from "react";
import Image from "next/image";
import IronMan from "./../../../../src/assets/img/iron-man.png";
import Captain from "./../../../../src/assets/img/captain-america.png";
import Ninja from "./../../../../src/assets/img/ninja.png";
import Shuriken from "./../../../../src/assets/img/shuriken.png";
import SectionArea from "../../atoms/Section";
import { ImageWrapper, ImageWrapperMarvel } from "./styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function DemoTemplate() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = () => {
      gsap.fromTo(
        "#ninja",
        {
          opacity: 0,
          scale: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
        }
      );
      gsap.to("#shuriken", {
        x: 1000,
        rotate: 1000,
        duration: 3,
        delay: 2,
        scrollTrigger: {
          trigger: `#image-wrapper`,
          start: "top 70%",
          end: "bottom 20%",
          scrub: true,
          markers: false,
          id: "animation",
        },
      });
    };

    animation();
  }, []);

  React.useEffect(() => {
    const animation = () => {
      gsap.fromTo(
        "#iron-man",
        {
          y: -700,
          x: 1000,
        },
        {
          y: 0,
          x: 0,
          duration: 3,
          yoyo: true,
        }
      );
      gsap.fromTo(
        "#captain",
        {
          y: -700,
          x: -1000,
        },
        {
          y: 0,
          x: 0,
          duration: 3,
        }
      );
    };
    animation();
  }, [animate]);

  const handleClick = () => {
    setAnimate((current) => !current);
  };

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

      <SectionArea id="section-marvel" className="bg-green-200">
        <ImageWrapperMarvel id="image-marvel">
          <Image
            id="iron-man"
            src={IronMan}
            alt="iron man"
            height={300}
            onClick={handleClick}
          />
          <Image
            id="captain"
            src={Captain}
            alt="captain"
            height={300}
            onClick={handleClick}
          />
        </ImageWrapperMarvel>
      </SectionArea>

      <SectionArea className="bg-yellow-100">
        <h2>Section 5</h2>
      </SectionArea>
    </>
  );
}

export default DemoTemplate;
