import Header from "../component/header";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { CreatePost } from "../service/api";

const Create = () => {
  // create an initial value object.
  const initalValues = {
    title: "",
    description: "",
    picture: "",
    currentdata: new Date(),
    username: JSON.parse(localStorage.getItem("userData")).user.username,
  };

  // useState hook to have variable state of function component.
  const [post, setPost] = useState(initalValues);

  // With help of setPost setting values of Post.
  // ... is a conditional rendering which create new object and intialize it.
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // making an call to api since it an async function await is must otherwise.
  // next line executed without saving result of past.
  const savePost = async () => {
    await CreatePost(post);
  };

  // return CreatePost componenet.
  return (
    <>
      <Header />
      <div>
        <div style={{ display: "block", width: "100%", padding: "0 40px" }}>
          <Carousel>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src="https://writeresumes101.com/wp-content/uploads/2020/04/306cdebe-31af-4f82-9689-d4794266688c.jpg"
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
                src="https://miro.medium.com/max/2000/1*E7ELZyrme5bsu3m3QeiAzw.jpeg"
                alt="Image Two"
                style={{ height: "450px" }}
              />
              <Carousel.Caption>
                <h1>Winner Always Try.</h1>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div style={{ margin: "5px" }}>
            <form action="" style={{ display: "flex" }}>
              <img
                src="https://img.icons8.com/doodle/48/000000/plus--v1.png"
                alt="ix"
              />
              <input
                placeholder="Revision heading"
                // handle change event to store value
                onChange={(e) => handleChange(e)}
                type="text"
                name="title"
                style={{ flex: "1", margin: "0 30px", fontSize: "25px" }}
              />
              <Link to="/home">
                <button
                  // Savepost event on click to post.
                  onClick={() => savePost()}
                  style={{ border: "none", background: "none" }}
                >
                  <img src="https://img.icons8.com/ultraviolet/50/000000/enter-key.png" />
                </button>
              </Link>
            </form>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <textarea
                style={{
                  width: "100%",
                  marginLeft: "79px",
                  marginRight: "90px",
                }}
                onChange={(e) => handleChange(e)}
                name="description"
                rows="4"
                placeholder="Type your revision notes ....."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
