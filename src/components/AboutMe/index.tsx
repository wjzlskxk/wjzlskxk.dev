import React from "react";
import useAboutMe from "../../hooks/AboutMe/useAboutMe";
import { Divider } from "../common/Divider";
import "./style.scss";

const AboutMe = () => {
  const { displayText } = useAboutMe({ typingSpeed: 150, switchDelay: 800 });
  return (
    <section id="about" className="about-me-wrap">
      <div className="top">
        <h1 className="one-line typing">{displayText}</h1>
        <h1 className="dev-gradiant">Frontend Developer</h1>
      </div>
      <Divider />
      <div className="about-me-bottom">
        <span>안녕하세요👋 실제 사용자들의 변화를 만들어내는 과정을 즐기는</span>
        <span>프론트엔드 개발자 전민찬입니다.</span>
        <button
          onClick={() =>
            window.open("https://drive.google.com/file/d/1ivL-5EK2bIjPkUqPFegur4yMWGpmhazx/view?usp=sharing")
          }
        >
          제가 궁금하시다면?
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
