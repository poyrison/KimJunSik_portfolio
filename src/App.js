import "./css/App.css";

import { useEffect, useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Nav from "./Nav";
import Aos from "aos";

function App() {
  const [scroll] = useState(0); // scroll-bar
  const [navScroll] = useState(false);
  const [navVisibility, setNavVisibility] = useState("invisible");
  const [homeTitle, setHomeTitle] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const [count, setCount] = useState(0);
  const completionWord = "WELCOME TO MY PORTFOLIO :)";

  // AOS
  useEffect(() => {
    window.innerWidth <= 768
      ? Aos.init({
          disable: false,
          once: true,
        })
      : Aos.init({
          duration: 1500, // .. 초에 걸쳐서 실행
        });
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
    console.log(windowWidth);
  }, []);

  // 메인화면 타이핑 효과
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= completionWord.length) {
        clearInterval(intervalId);
      } else {
        setHomeTitle((prevTitleValue) => {
          const result = prevTitleValue
            ? prevTitleValue + completionWord[count]
            : completionWord[0];
          setCount(count + 1);
          return result;
        });
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [count]);

  // 첫 화면으로 다시 돌아오면 타이핑 효과 초기화
  useEffect(() => {
    const typingEffect = document.getElementById("home");

    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            setCount(0);
            setHomeTitle("");
          }
        });
      },
      {
        threshold: 0.9,
      }
    );

    observer.observe(typingEffect);
  }, []);

  // top_button opacity 설정
  useEffect(() => {
    const topBtnEffectLine = document.querySelector("#home");
    const topBtn = document.querySelectorAll(".top_button");

    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            // 각 topBtn을 순회하며 클래스를 조작
            topBtn.forEach((btn) => {
              btn.classList.add("invisible");
              btn.classList.remove("visible");
            });
          } else {
            topBtn.forEach((btn) => {
              btn.classList.remove("invisible");
              btn.classList.add("visible");
            });
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(topBtnEffectLine);
  }, []);

  // scroll값에 의한 navbar opacity값 설정
  useEffect(() => {
    const scroll = document.documentElement.scrollTop;

    const navVisibleTimer = () => {
      setNavVisibility("visible");
    };
    setTimeout(navVisibleTimer, 3100);
    clearTimeout(navVisibleTimer);

    scroll >= 200 ? setNavVisibility("visible") : setNavVisibility("invisible");
  }, []);

  return (
    <div className="App">
      <div className="background fixed">
        {/* 배경의 별 이펙트 */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <Nav navVisibility={navVisibility} navScroll={navScroll} />
      <Content
        homeTitle={homeTitle}
        scroll={scroll}
        windowWidth={windowWidth}
      />
      <div className={`top_button fixed `}>
        <a href="#home">
          <i className="fi fi-br-chevron-double-up"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
