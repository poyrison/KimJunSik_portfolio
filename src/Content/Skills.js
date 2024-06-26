import Col from "react-bootstrap/Col";

function Skills({ gridStyle, windowWidth }) {
  const skills = [
    {
      title: "HTML5",
      content: `웹표준을 지키려 노력합니다.
      media query를 사용해 반응형 웹페이지를
      작성할 수 있습니다.`,
      aos: "fade-down-right",
    },
    {
      title: "CSS3",
      content: `이미지 스타일링, 반응형 레이아웃, keyframe을 활용한 애니메이션 기법 등을 사용할 수 있습니다.`,
      aos: "fade-down",
    },
    // {
    //   title: "Sass",
    //   content: `반복문과 변수사용 및 코드 중복 방지를 위해 사용`,
    //   aos: "fade-down-left",
    // },
    {
      title: "JavaScript",
      content: `ES6 이후 자바스크립트를 활용하여
      동적인 웹페이지를 작성할 수 있습니다.
      가독성 좋은 코드와 최적화에 관심을 가지고있습니다.`,
      aos: "fade-down-left",
    },
    {
      title: "TypeScript",
      content: `엄격한 타입 적용, 컴파일 단계에서
       에러를 잡을 때 사용하기위해
       현재 학습중입니다.`,
      aos: "fade-right",
    },
    {
      title: "React",
      content: `함수형 Components, Hooks, 라이프 사이클 등을
      이용하여 SPA를 작성할 수 있습니다.`,
      aos: "zoom-in",
    },
    {
      title: "Redux",
      content: `props가 사용되는 범위가 넓어질 때
       redux로 전역 상태 관리를 할 수 있습니다.`,
      aos: "fade-left",
    },
    {
      title: "Git",
      content: `프로젝트 버전 및 코드 관리를 할 수 있습니다. 
      커밋을 깔끔하게 작성할 수 있도록 노력하고있습니다.`,
      aos: "fade-up-right",
    },
    {
      title: "node.js",
      content: `express를 활용해 간단한 서버를 만들고
      프론트엔드와 연결한 경험이 있습니다.`,
      aos: "fade-up",
    },
    {
      title: "AWS",
      content: `AWS 클라우드 환경에서 프로젝트를
      배포해 본 경험이 있습니다.`,
      aos: "fade-up-left",
    },
    // {
    //   title: "Bootstrap",
    //   content: `템플릿 및 테마를 활용하여 빠르고 효율적으로
    //     스타일을 구성할 수 있습니다.`,
    //   aos: "fade-up-left",
    // },
  ];
  return (
    <>
      {skills.map((skill, i) => {
        // 조건에 따라 다른 속성 객체를 준비
        const colProps =
          windowWidth < 768
            ? {}
            : { "data-aos": skill.aos, "data-aos-once": "true" };

        return (
          <Col
            key={i}
            className={`skill_item ${gridStyle}`}
            {...colProps} // 준비된 속성 객체를 여기에 펼칩니다.
          >
            <img
              loading="lazy"
              src={`${process.env.PUBLIC_URL}/images/skills/${skill.title}.png`}
              alt={`${skill.title}-logo`}
              className="skill_img"
            />
            <h5 className="skill_title">{skill.title}</h5>
            <p className="skill_description">{skill.content}</p>
          </Col>
        );
      })}
    </>
  );
}

export default Skills;
