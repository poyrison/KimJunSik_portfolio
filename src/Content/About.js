import Col from "react-bootstrap/Col";

function About() {
  const aboutMeScript = `대학교 전공과정 중 간단한 웹사이트를 제작하며 코딩을 통한 창조의 즐거움을 처음으로 느끼게 되었고
   이후로 저는 Frontend 개발자의 꿈을 갖게 되었습니다. 
   주로 React를 활용하여 프로젝트를 구현하는 것을 선호하지만, 다른 SPA 프레임워크 및 라이브러리에도 관심을 가지고 이를 학습하고자 노력하고 있습니다.
   또한 Backend 영역에도 흥미를 느끼고 있으며, 현재의 분야에만 국한되지 않고 다양한 개발 분야에 열정을 품고 노력하고 있습니다.
   지속적으로 완성도 높은 코드와 UI를 위해 고민하는 개발자로 성장하고 싶습니다.`;

  return (
    <>
      <Col>
        <p className="about-text" data-aos="fade-up">
          {aboutMeScript}
        </p>
      </Col>
    </>
  );
}

export default About;
