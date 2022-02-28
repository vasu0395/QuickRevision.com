import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Carrd = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <div data-aos="zoom-in" style={{ marginLeft: "10%" }}>
        <div
          class="card1 text-dark bg-Secondary mb-5"
          style={{
            width: "45",
            height: "400px",
            marginLeft: "10px",
            borderRadius: "10px",
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url("https://www.freevector.com/uploads/vector/preview/30273/Geometric-Pastel-Background.jpg")`,
            // backgroundImage: `url("https://www.freevector.com/uploads/vector/preview/30273/Geometric-Pastel-Background.jpg")`,
          }}
        >
          <img
            className="card-img"
            src={props.url}
            //src={"https://cdn.wallpapersafari.com/39/10/jLNArM.png"}
            alt="Card cap"
            style={{
              width: "300px",
              height: "200px",
              objectFit: "contain",
              borderRadius: "30px",
            }}
          />
          <div class="card-header">
            <h4 style={{ color: "#4B0082" }}>{props.heading}</h4>
          </div>
          <div class="card-body">
            <h5 style={{ color: "#4B0082" }} class="card-title">
              " {props.text} "
            </h5>
            <i style={{ color: "#4B0082" }}>{props.author}</i>
            <p class="card-text">
              <button onClick={props.getData}>{props.buttontype}</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carrd;
