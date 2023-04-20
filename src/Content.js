import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Content({ homeTitle }) {
  const logo = ["HTML5", "CSS3", "JavaScript", "ReactJS", "Git", "Bootstrap"];
  const word = [
    "마크업, 페이지 컨텐츠 구조화, 폼요소, 테이플 등 사용",
    "배경, 텍스트, 이미지 스타일링, 반응형 레이아웃 등",
    "네비게이션, 탭메뉴 구현 등",
    "Component, Redux로 전역 상태관리, 데이터 파싱 등",
    "프로젝트 코드 관리, add, commit, pull, branch, merge 등",
    "레이아웃, 버튼, 입력창 등의 디자인에 사용",
  ];

  // grid 클래스
  const gridStyle = "col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4";

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
          <h3 className="content_title" data-aos="fade-up">
            about
          </h3>
          <Row data-aos="fade-up"></Row>
        </div>
        <div className="item_box" id="skills">
          <h3 data-aos="fade-up" className="content_title">
            skills
          </h3>
          <Row data-aos="fade-up">
            {logo.map((e, i) => {
              return (
                <Col sm key={i} className={`${gridStyle}`}>
                  <img
                    src={process.env.PUBLIC_URL + `/img/${logo[i]}.png`}
                    alt={`${logo[i]}-logo`}
                    className="skill_img"
                  />
                  <h5
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      margin: "25px",
                    }}
                  >{`${logo[i]}`}</h5>
                  <p style={{ marginBottom: "100px" }}>{`${word[i]}`}</p>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="item_box" id="project">
          <h3 className="content_title" data-aos="fade-up">
            project
          </h3>
          <Col data-aos="fade-up"></Col>
        </div>
        <div className="item_box" id="contact">
          <h3 className="content_title" data-aos="fade-up">
            contact
          </h3>
          <Col data-aos="fade-up"></Col>
        </div>
      </Container>
    </div>
  );
}

export default Content;
