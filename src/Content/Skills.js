import Col from "react-bootstrap/Col";

function Skills({ gridStyle }) {
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
      content: "ES6+ 문법을 사용하여 동적 UI 구현",
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
  return (
    <>
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
    </>
  );
}

export default Skills;
