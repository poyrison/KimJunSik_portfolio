function Content({ homeTitle }) {
  return (
    <div className="item_box_area">
      <div className="item_box" id="myPage">
        <div className="filterBox"></div>
        <div className="item" id="home" data-aos="fade-up">
          <h2 className="home_title">{homeTitle}</h2>
          <hr />
          <p className="home_word">프론트엔드 개발자 김준식입니다.</p>
        </div>
      </div>
      <div className="item_box" id="about">
        <h3 className="item" data-aos="fade-up">
          about
        </h3>
      </div>
      <div className="item_box" id="skills">
        <h3 className="item" data-aos="fade-up">
          skills
        </h3>
      </div>
      <div className="item_box" id="project">
        <h3 className="item" data-aos="fade-up">
          project
        </h3>
      </div>
      <div className="item_box" id="contact">
        <h3 className="item" data-aos="fade-up">
          contact
        </h3>
      </div>
    </div>
  );
}

export default Content;
