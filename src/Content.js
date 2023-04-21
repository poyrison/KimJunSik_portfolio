import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content({ homeTitle }) {
  const skills = [
    {
      title: "HTML5",
      content: "마크업, 페이지 컨텐츠 구조화, 폼 및 테이플 등",
    },
    {
      title: "CSS3",
      content: "배경, 텍스트, 이미지 스타일링, 반응형 레이아웃 등",
    },
    { title: "Sass", content: "현재 공부중 ..." },
    {
      title: "JavaScript",
      content: "ES6 최신 문법을 사용하여 동적 UI 구현",
    },
    {
      title: "React",
      content:
        "Redux로 전역 상태관리, Component, styled-components, 데이터 파싱 등",
    },
    { title: "TypeScript", content: "현재 공부중 ..." },
    { title: "Git", content: "프로젝트 버전 및 코드 관리, 협업 등" },
    {
      title: "Bootstrap",
      content: "레이아웃, 버튼, 입력창 등의 디자인에 사용",
    },
  ];

  // grid 클래스
  const gridStyle = "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4";

  return (
    <div>
      <div id="myPage">
        <div className="filterBox"></div>
        <div className="item" id="home" data-aos="fade-up">
          <h2 className="home_title">{homeTitle}</h2>
          <hr />
          <p className="home_word">
            안녕하세요, 프론트엔드 개발자 김준식입니다.
          </p>
          <></>
        </div>
      </div>
      <Container fluid style={{ padding: 0 }}>
        <div className="item_box" id="about">
          <h3 className="content_title">about</h3>
          <Row data-aos="fade-up"></Row>
        </div>
        <div className="item_box" id="skills">
          <h3 className="content_title">skills</h3>
          <Row data-aos="fade-up">
            {skills.map((e, i) => {
              return (
                <Col key={i} className={`skill_box ${gridStyle}`}>
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
          <h3 className="content_title">project</h3>
          <Col data-aos="fade-up"></Col>
        </div>
        <div className="item_box" id="contact">
          <h3 className="content_title">contact</h3>
          <Col data-aos="fade-up"></Col>
        </div>
      </Container>
    </div>
  );
}

export default Content;
