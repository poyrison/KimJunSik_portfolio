import Col from "react-bootstrap/Col";

function Contact() {
  const size = 35;
  return (
    <>
      <Col>
        <div className="contact_icon_box">
          <div
            onClick={() => {
              window.open("https://github.com/poyrison");
            }}
            data-aos="fade-right"
          >
            <img
              title="Github"
              alt="Github"
              className={`contact_icon github_icon `}
              src="img/github.png"
              width={`${size}`}
              height={`${size}`}
            />
            <p>Github</p>
          </div>
        </div>
        <div className="contact_icon_box">
          <div
            onClick={() => {
              window.open("https://www.instagram.com/jun._.sik/");
            }}
            data-aos="zoom-in"
          >
            <img
              title="instagram"
              alt="instagram"
              className={`contact_icon instagram_icon `}
              src="img/instagram.png"
              width={`${size}`}
              height={`${size}`}
            />
            <p>instagram</p>
          </div>
        </div>
        <div className="contact_icon_box">
          <div data-aos="fade-left">
            <a href="mailto:junsik8879@gmail.com">
              <img
                title="email"
                alt="email"
                className={`contact_icon email_icon `}
                src="img/email.png"
                width={`${size}`}
                height={`${size}`}
              />
              {/* <p>email</p> */}
              <p>junsik8879@gmail.com</p>
            </a>
          </div>
        </div>
      </Col>
    </>
  );
}

export default Contact;
