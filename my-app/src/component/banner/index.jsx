import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <>
      <div style={{ display: "block", width: "100%", padding: "0 30px" }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/851/501/292/programming-code-minimalism-wallpaper-preview.jpg"
              alt="Image One"
              style={{ height: "450px" }}
            />
            <Carousel.Caption>
              <h1>Winner Always Try.</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/e0/3e/db/e03edbe588d3866d539e5bbb35d9080c.jpg"
              alt="Image Two"
              style={{ height: "450px" }}
            />
            <Carousel.Caption>
              <h1>Winner Always Try.</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Banner;
