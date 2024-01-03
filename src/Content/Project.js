import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Project() {
  const projectImage = [
    {
      title: "board",
      script: "게시판 프로젝트",
      github: "https://github.com/poyrison/board",
      url: "https://todo-app-387113.du.r.appspot.com/",
      githubIcon: "github",
      urlIcon: "projectLink",
    },
    {
      title: "shop",
      script: "쇼핑몰 프로젝트",
      github: "https://github.com/poyrison/react_shop",
      url: "https://reactshop-portfolio.netlify.app/",
      githubIcon: "github",
      urlIcon: "projectLink",
    },
    {
      title: "simpleWeather",
      script: "날씨웹",
      github: "https://github.com/poyrison/Simple-Weather",
      url: "https://simple-weather-kjs.netlify.app",
      githubIcon: "github",
      urlIcon: "projectLink",
    },
    {
      title: "portfolio_main",
      script: "포트폴리오",
      github: "https://github.com/poyrison/KimJunSik_portfolio",
      url: "https://kimjunsik-portfolio.netlify.app/",
      githubIcon: "github",
      urlIcon: "projectLink",
    },
  ];

  const handleDragStart = (e) => e.preventDefault();

  const itemWidth = "1160px";
  const itemHeigh = "500px";

  const items = projectImage.map((image, i) => (
    <img
      src={process.env.PUBLIC_URL + `/images/projects/${image.title}.png`}
      alt={image.title}
      onDragStart={handleDragStart}
      role="presentation"
      minWidth={itemWidth}
      width={itemWidth}
      height={itemHeigh}
    />
  ));

  return <AliceCarousel mouseTracking items={items} autoWidth autoHeight />;
}

export default Project;
