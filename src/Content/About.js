import Col from "react-bootstrap/Col";

function About() {
  // const aboutMeScript = `대학교 전공과정 중 간단한 웹사이트를 제작하며 코딩에대한 즐거움을 처음으로 느끼게 되었고 이후로 저는 Frontend 개발자의 꿈을 갖게 되었습니다.
  //  저는 주로 React를 활용하여 프로젝트를 구현하는 것을 선호하지만, 다른 SPA 프레임워크 및 라이브러리에도 관심을 가지고 이를 학습하고자 노력하고 있습니다.
  //  또한 Backend 영역에도 흥미를 느끼고 있으며, 현재의 분야에만 국한되지 않고 다양한 개발 분야에 열정을 품고 노력하고 있습니다.
  //  지속적으로 완성도 높은 코드와 UI를 위해 고민하는 개발자로 성장하고 싶습니다.`;

  const aboutMeScript = `웹사이트를 제작하며 코딩에 대한 즐거움을 처음으로 느꼈고, 그로 인해 Frontend 개발자의 꿈을 품게 되었습니다.
  주로 React를 활용하여 프로젝트를 구현하는 것을 선호하지만, 다른 SPA 프레임워크 및 라이브러리에도 관심을 가지고 있습니다.
  또한, Backend 영역에도 흥미를 느끼고 있으며, 다양한 개발 분야에 열정을 품고 지속적으로 고민하며
  완성도 높은 코드와 UI를 위해 노력하는 개발자로 성장하고자 합니다.`;

  const aboutMeIcon = [
    { image: "user", title: "이름", content: "김준식", aos: "300" },
    { image: "calendar", title: "생년월일", content: "1998.06.22", aos: "600" },
    {
      image: "home",
      title: "주소지",
      content: "인천광역시 계양구",
      aos: "900",
    },
    {
      image: "pencil",
      title: "학교",
      content: "중원대학교(컴퓨터공학과)",
      aos: "1200",
    },
  ];

  return (
    <>
      <Col>
        <div className="aboutMe-wrapper">
          <img
            className="aboutMe-myImage"
            src={process.env.PUBLIC_URL + `images/about-me/mimoticon.png`}
            alt="myImage.png"
            data-aos="fade-right"
            data-aos-once="true"
          />
          <div className="aboutMe-icon_wrapper">
            {aboutMeIcon.map((skill, i) => {
              return (
                <div
                  className="aboutMe-icon-box"
                  key={i}
                  data-aos="fade-left"
                  data-aos-once="true"
                  data-aos-duration={`${skill.aos}`}
                >
                  <div>
                    <img
                      className="aboutMe-icon_img"
                      src={
                        process.env.PUBLIC_URL +
                        `/images/about-me/${skill.image}.png`
                      }
                      alt={`${skill.image}.png`}
                    />
                  </div>
                  <div className="aboutMe-icon_content">
                    <p>{`${skill.content}`}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="about-text"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
        >
          {aboutMeScript}
        </div>
      </Col>
    </>
  );
}

export default About;
