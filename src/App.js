import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="/">
          <h2>J U N S I K</h2>
        </a>
        <ul id="navbar_btn_box">
          <li className="navbar_btn">
            <a href="#about">
              <p>ABOUT</p>
            </a>
          </li>
          <li className="navbar_btn">
            <a href="#skills">
              <p>SKILLS</p>
            </a>
          </li>
          <li className="navbar_btn">
            <a href="#works">
              <p>WORKS</p>
            </a>
          </li>
          <li className="navbar_btn">
            <a href="#contact">
              <p>CONTACT</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="item_box_area">
        <div className="item_box" id="top">
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
          <h3 className="item" id="works">
            works
          </h3>
        </div>
        <div className="item_box">
          <h3 className="item" id="contact">
            contact
          </h3>
        </div>
      </div>
      <div className="btn_bottom_to_top">
        <a href="#top">
          <i className="fi fi-br-chevron-double-up"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}
export default App;
