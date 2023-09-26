import { useEffect, useState } from "react";

function Nav() {
  const collapse = "collapse d-flex justify-content-end";
  const navbarCollapse = "collapse navbar-collapse";
  const scroll = document.documentElement.scrollTop;
  const clientWidth = document.documentElement.clientWidth;

  const [navVisibility, setNavVisibility] = useState("invisible");

  useEffect(() => {
    scroll >= 200 && setNavVisibility("visible");
    if (scroll <= 200) {
      setNavVisibility("invisible");
    }
  }, [scroll]);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${navVisibility}`}
        id={`${scroll <= 200 ? "navbar" : "navbarBlur"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            KJS's Portfolio
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
          <div
            className={`${clientWidth <= 992 ? navbarCollapse : collapse}`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about-section">
                  {`< About />`}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills-section">
                  {`< Skills />`}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project-section">
                  {`< Projects />`}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">
                  {`< Contact />`}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
