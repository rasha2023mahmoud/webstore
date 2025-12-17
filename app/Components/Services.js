import Image from "next/image";
export default function Services() {
  return (
    <>
      <section id="services" className="service-contianer">
        <hr
          style={{ backgroundColor: "#ffffff", height: "2px", width: "80%" }}
        />
        <h1>Services</h1>
        <div className="service-one">
          <div className="service-data">
            <span>01</span>
            <h4 className="service1-title">Front End</h4>
            <p className="service-text">
              Our web developer is skilled in designing beautiful and
              user-friendly interfaces that enhance the user experience, making
              your website enjoyable and easy to navigate.
            </p>
          </div>
          <img
            className="sevice1-img"
            src="/images/service-01.png"
            alt="service-01"
          />
        </div>
        <hr
          style={{ backgroundColor: "#ffffff", height: "2px", width: "80%" }}
        />
        <div className="service-two">
          <div className="service-data">
            <span>02</span>
            <h4 className="service1-title">Mobile Application</h4>
            <p className="service-text">
              A mobile app built with React Native for a smooth and responsive
              experience.
            </p>
          </div>
          <img
            className="sevice2-img"
            src="/images/mobile-app.png"
            alt="service-02"
          />
        </div>
        <hr
          style={{ backgroundColor: "#ffffff", height: "2px", width: "80%" }}
        />
      </section>
    </>
  );
}
