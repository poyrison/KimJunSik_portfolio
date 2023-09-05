import Col from "react-bootstrap/Col";

function Project() {
  const projectImage = [
    { title: "board", script: "게시판 프로젝트" },
    { title: "shop", script: "쇼핑몰 프로젝트" },
    { title: "portfolio_main", script: "포트폴리오" },
  ];

  return (
    <>
      <Col>
        <div className="projects-wrapper flex">
          {projectImage.map((project, i) => {
            return (
              <div key={i} className="flex">
                <div>
                  <img
                    className="project-img_area flex"
                    src={
                      process.env.PUBLIC_URL +
                      `images/README/${project.title}.png`
                    }
                    alt={`${project.title}.png`}
                  />
                </div>
                <div>
                  <p className="project-img_script">{project.script}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Col>
    </>
  );
}

export default Project;
