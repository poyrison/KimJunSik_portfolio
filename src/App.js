import "./css/App.css";

import { useEffect, useState } from "react";

import Content from "./Content";
import Footer from "./Footer";
import Aos from "aos";

function App() {
  const [scroll, setScroll] = useState(0); // scroll-bar
  const [scrollBtnOpacity, setScrollBtnOpacity] = useState("invisible"); // top_button opacity 설정
  const [homeTitle, setHomeTitle] = useState("");

  const [count, setCount] = useState(0);
  const completionWord = "WELCOME TO MY PORTFOLIO :)";

  // AOS
  useEffect(() => {
    window.innerWidth <= 768
      ? Aos.init({
          disable: false,
        })
      : Aos.init({
          duration: 1500, // .. 초에 걸쳐서 실행
        });
  });

  // 메인화면 타이핑 효과
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setHomeTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          return completionWord;
        } else {
          return result;
        }
      });
    }, 100);

    return () => clearInterval(typingInterval);
  });

  // scroll 값이 0이 되면 타이핑 효과 재시작
  useEffect(() => {
    if (scroll <= 0) {
      setCount(0);
      setHomeTitle("");
    }
  }, [scroll]);

  // 상단 스크롤 이벤트
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

  // top_button opacity 설정
  useEffect(() => {
    scroll >= 0.08
      ? setScrollBtnOpacity("visible")
      : setScrollBtnOpacity("invisible");
  }, [scroll]);

  return (
    <div className="App">
      <div className="background fixed">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <progress className="progress fixed" value={`${scroll}`}></progress>
      <Content homeTitle={homeTitle} scroll={scroll} />
      <div className={`top_button fixed ${scrollBtnOpacity}`}>
        <a href="#home">
          <i className="fi fi-br-chevron-double-up"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
