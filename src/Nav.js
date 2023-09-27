function Nav({ navVisibility }) {
  const wideNavbar = "collapse d-flex justify-content-end";
  const narrowNavbar = "collapse navbar-collapse";
  const scroll = document.documentElement.scrollTop;
  const clientWidth = document.documentElement.clientWidth;

  const navItems = [
    {
      id: 0,
      href: "#about-section",
      name: "< About />",
    },
    {
      id: 1,
      href: "#skills-section",
      name: "< Skills />",
    },
    {
      id: 2,
      href: "#project-section",
      name: "< Projects />",
    },
    {
      id: 3,
      href: "#contact-section",
      name: "< Contact />",
    },
  ];

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
            className={`${clientWidth <= 992 ? narrowNavbar : wideNavbar}`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((navItem, i) => {
                return (
                  <>
                    <li className="nav-item" key={navItem.id}>
                      <a className="nav-link" href={`${navItem.href}`}>
                        {`${navItem.name}`}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
