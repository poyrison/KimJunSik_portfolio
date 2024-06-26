import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

import About from "./Content/About.js";
import Skills from "./Content/Skills.js";
import Project from "./Content/Project.js";
import Contact from "./Content/Contact.js";

function Content({ homeTitle, scroll, windowWidth }) {
  const [iconVisibility, setIconVisibility] = useState("invisible");

  useEffect(() => {
    scroll >= 0.1 && setIconVisibility("invisible");
    if (scroll <= 0) {
      setIconVisibility("visible");
    }
  }, [scroll]);

  // grid 클래스
  const gridStyle = "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4";
  const clientWidth = document.documentElement.clientWidth;

  return (
    <div>
      <div>
        <div className="item" id="home" data-aos="fade-up">
          <h2 className="home_title">{homeTitle}</h2>
          <hr />
          <p className="home_word">
            안녕하세요, 프론트엔드 개발자 김준식입니다.
          </p>
          {clientWidth >= 768 && (
            <div className={`icon_box ${iconVisibility}`}>
              <p
                className="mouse"
                data-aos="fade-up"
                data-aos-delay="3000"
                data-aos-once="true"
              ></p>
              <i data-aos="fade-up" data-aos-delay="3000" data-aos-once="true">
                Scroll Down
              </i>
            </div>
          )}
        </div>
      </div>
      <Container fluid className="container">
        <div className="item_wrapper" id="about">
          <Row className="about_box">
            <div className="section-heightBox" id="about-section"></div>
            <h3
              className="content_title"
              data-aos="fade-down-left"
              data-aos-once="true"
            >
              About me
            </h3>
            <About />
          </Row>
        </div>
        <div className="item_wrapper">
          <Row className="skill_box" id="skills">
            <div className="section-heightBox" id="skills-section"></div>
            <h3
              className="content_title"
              data-aos="fade-down-left"
              data-aos-once="true"
            >
              Skills
            </h3>
            <Skills gridStyle={gridStyle} windowWidth={windowWidth} />
          </Row>
        </div>
        <div className="item_wrapper" id="project">
          <Row className="project_box">
            <div className="section-heightBox" id="project-section"></div>
            <h3
              className="content_title"
              data-aos="fade-down-left"
              data-aos-once="true"
            >
              Projects
            </h3>
            <Project />
          </Row>
        </div>
        <div className="item_wrapper" id="contact">
          <Row className="contact_box">
            <div className="section-heightBox" id="contact-section"></div>
            <h3
              className="content_title"
              data-aos="fade-down-left"
              data-aos-once="true"
            >
              Contact
            </h3>
            <Contact />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Content;
