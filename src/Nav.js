function Nav({ navVisibility, navScroll }) {
  const wideNavbar = "collapse d-flex justify-content-end";
  const narrowNavbar = "collapse navbar-collapse";
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
        id={`${navScroll == true ? "navbar" : "navbarBlur"}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            KJS's Portfolio
          </a>
          <button
            className="navbar-toggler navbar-dark"
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
            // 너비가 992px 이하 일 때 navbar item을 toggle-icon 클릭을 통해 확인
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((navItem) => (
                <li className="nav-item" key={navItem.id}>
                  <a className="nav-link" href={navItem.href}>
                    {navItem.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
