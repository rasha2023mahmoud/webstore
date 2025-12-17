import Image from "next/image";
export default function FeatureWorks() {
  return (
    <>
      <section id="feature" className="feature-contianer">
        <div className="square-container">
          <div className="square1"></div>
          <div className="square2"></div>
          <div className="intro-feature">
            <h1>Featured Work</h1>
            <img
              className="feature-img"
              src="./images/work-01.jpg"
              alt="works"
            />
          </div>
          <div className="square3"></div>
          <div className="square4"></div>
        </div>
      </section>
    </>
  );
}
