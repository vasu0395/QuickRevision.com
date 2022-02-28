import Header from "../header";
import Banner from "../banner";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { getPost, updatePost } from "../../service/api.js";
import { Link } from "react-router-dom";

const initalValues = {
  title: "",
  description: "",
  picture: "",
  currentdata: new Date(),
};

const Update = ({ match }) => {
  const [post, setPost] = useState(initalValues);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateBlog = async () => {
    await updatePost(match.params.id, post);
  };

  return (
    <>
      <Header />
      <div style={{ display: "block", width: "100%", padding: "0 50px" }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1586088209375-7c9f50ff8b5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80"
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
              src="https://images.unsplash.com/photo-1580920462192-3d40a3bb7bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Image Two"
              style={{ height: "450px" }}
            />
            <Carousel.Caption>
              <h1>Winner Always Try.</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ margin: "5px" }}>
        <div style={{ float: "right", marginRight: "40px" }}>
          <Link to="/home">
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => updateBlog()}
            >
              <img
                src="https://img.icons8.com/stickers/100/000000/approve-and-update.png"
                style={{ height: "40px" }}
              />
            </button>
          </Link>
        </div>
        <input
          value={post.title}
          onChange={(e) => handleChange(e)}
          type="text"
          name="title"
          style={{
            flex: "1",
            width: "55%",
            margin: "0 45px",
            fontSize: "25px",
          }}
        />
        <div style={{ marginTop: "10px", display: "flex" }}>
          <textarea
            onChange={(e) => handleChange(e)}
            style={{
              width: "90%",
              marginLeft: "45px",
              marginRight: "10px",
            }}
            name="description"
            value={post.description}
            rows="4"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Update;
