import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

function Content({ homeTitle, scroll }) {
  const [icon, setIcon] = useState("invisible");

  useEffect(() => {
    scroll >= 0.13 && setIcon("invisible");
    if (scroll <= 0) {
      setIcon("visible");
    }
  }, [scroll]);

  const skills = [
    {
      title: "HTML5",
      content: "마크업, 페이지 컨텐츠 구조화, 폼 및 테이플 등",
      aos: "fade-down-right",
    },
    {
      title: "CSS3",
      content: "배경, 텍스트, 이미지 스타일링, 반응형 레이아웃 등",
      aos: "fade-down",
    },
    { title: "Sass", content: "현재 공부중 ...", aos: "fade-down-left" },
    {
      title: "JavaScript",
      content: "ES6 최신 문법을 사용하여 동적 UI 구현",
      aos: "fade-up-right",
    },
    {
      title: "React",
      content:
        "Redux로 전역 상태관리, Component, styled-components, 데이터 파싱 등",
      aos: "zoom-in",
    },
    { title: "TypeScript", content: "현재 공부중 ...", aos: "fade-up-left" },
    {
      title: "Git",
      content: "프로젝트 버전 및 코드 관리, 협업 등",
      aos: "fade-up-right",
    },
    {
      title: "Bootstrap",
      content: "레이아웃, 버튼, 입력창 등의 디자인에 사용",
      aos: "fade-up-left",
    },
  ];

  // grid 클래스
  const gridStyle = "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4";

  return (
    <div>
      <div>
        <div className="item" id="home" data-aos="fade-up">
          <h2 className="home_title">{homeTitle}</h2>
          <hr />
          <p className="home_word">
            안녕하세요, 프론트엔드 개발자 김준식입니다.
          </p>
          <div className={`icon_box ${icon}`}>
            <p className="mouse" data-aos="fade-up" data-aos-delay="2000"></p>
          </div>
        </div>
      </div>
      <Container fluid className="container">
        <div className="item_box" id="about">
          <Row className="about_box">
            <h3 className="content_title">about</h3>
            <Col></Col>
          </Row>
        </div>
        <div className="item_box">
          <Row className="skill_box" id="skills">
            <h3 className="content_title">skills</h3>
            {skills.map((e, i) => {
              return (
                <Col
                  key={i}
                  className={`skill_item ${gridStyle}`}
                  data-aos={`${skills[i].aos}`}
                >
                  <img
                    src={process.env.PUBLIC_URL + `/img/${skills[i].title}.png`}
                    alt={`${skills[i].title}-logo`}
                    className="skill_img"
                  />
                  <h5 className="skill_title">{`${skills[i].title}`}</h5>
                  <p className="skill_description">{`${skills[i].content}`}</p>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="item_box" id="project">
          <Row className="project_box">
            <h3 className="content_title">project</h3>
            <Col></Col>
          </Row>
        </div>
        <div className="item_box" id="contact">
          <Row className="contact_box">
            <h3 className="content_title">contact</h3>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Content;
