import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "../../component/header";
import "./index.css";
import Carrd from "./posss";

const Motivation = () => {
  // Usestate hook to state variable of functional component.
  // helps in asign state of variable.
  const [author, setAuthor] = useState("Yogi Berra");
  const [text, setText] = useState(
    "Life is a learning experience, only if you learn."
  );
  const [index, setIndex] = useState(0);
  const [arrindex, setArrindex] = useState(0);
  const getData = () => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAuthor(data[index].author);
        setText(data[index].text);
        setIndex(index + 1);
        setArrindex((arrindex + 1) % 5);
      });
  };
  const arr = [
    "https://wallpaperaccess.com/full/1183839.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSn9mx7CwvYBrI-ttfqiQcdHCbO2UaFPoow&usqp=CAU",
    "https://c4.wallpaperflare.com/wallpaper/7/81/258/typography-quote-motivational-wallpaper-preview.jpg",
    "https://i.pinimg.com/originals/3f/01/10/3f0110b747154f72606b119e9e0864bc.jpg",
    "http://quotationwalls.com/img/motivational/be-prepared-wallpaper.jpg",
  ];

  const t1 = "For more motivation";
  return (
    <>
      <Header />
      <section style={{ height: "100px", width: "100%" }}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Carousel.Caption style={{ marginBottom: "1px" }}>
                <h1>Winner Always Try.</h1>
                <Carrd
                  text={text}
                  author={author}
                  url={arr[arrindex]}
                  getData={getData}
                  buttontype={t1}
                />
              </Carousel.Caption>
              <img
                src="https://i.pinimg.com/736x/4b/51/72/4b51729ce74a66c53e1be23511b1a46b.jpg"
                className="d-block w-100"
                style={{ height: "650px" }}
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Motivation;
