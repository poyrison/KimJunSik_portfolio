import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [scroll, setScroll] = useState(0);

  // 스크롤 커스텀
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#myPage">
            J U N S I K
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  PROJECT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <progress className="progress" value={`${scroll}`}></progress>
      <div className="item_box_area">
        <div className="item_box" id="myPage">
          <h3 className="item" id="about">
            about
          </h3>
        </div>
        <div className="item_box">
          <h3 className="item" id="skills">
            skills
          </h3>
        </div>
        <div className="item_box">
          <h3 className="item" id="project">
            project
          </h3>
        </div>
        <div className="item_box">
          <h3 className="item" id="contact">
            contact
          </h3>
        </div>
      </div>
      <div className="btn_bottom_to_top">
        <a href="#myPage">
          <i className="fi fi-br-chevron-double-up"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

<script>{document.querySelectorAll(".progress")}</script>;
export default App;
