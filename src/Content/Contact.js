import Col from "react-bootstrap/Col";

function Contact() {
  const size = 35;
  return (
    <>
      <Col>
        <div className="contact_icon_box">
          <div data-aos="fade-right" data-aos-once="true">
            <a
              href="https://github.com/poyrison"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* noopener: 이 속성을 사용하면,
              새로 열린 탭은 원본 페이지와 window.opener를 통한 스크립트 액세스를
              허용하지 않습니다. 즉, window.opener의 값이 null로 설정됩니다.
              이는 탭나핑(tabnapping) 공격을 방지하는 데 유용합니다.

              noreferrer: 이 속성은 브라우저가 새 탭을 열 때
              'Referer' 헤더를 전송하지 않도록 합니다.
              이를 통해 참조자 정보의 수집을 방지하게 됩니다. */}
              <img
                loading="lazy"
                title="Github"
                alt="Github"
                className={`contact_icon github_icon `}
                src={process.env.PUBLIC_URL + `/images/contact/github.png`}
                width={`${size}`}
                height={`${size}`}
              />
              <p>Github</p>
            </a>
          </div>
        </div>
        <div className="contact_icon_box">
          <div data-aos="fade-left" data-aos-once="true">
            <a href="mailto:junsik8879@gmail.com">
              <img
                loading="lazy"
                title="email"
                alt="email"
                className={`contact_icon email_icon `}
                src={process.env.PUBLIC_URL + `/images/contact/email.png`}
                width={`${size}`}
                height={`${size}`}
              />
              <p>junsik8879@gmail.com</p>
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Contact;
