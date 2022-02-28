import Header from "../header";
import Banner from "../banner";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import { getPost, deletePost } from "../../service/api.js";
import { Link, useHistory } from "react-router-dom";
import Update from "../update_page";

const Edit = ({ match }) => {
  const history = useHistory();
  const [post, setPost] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let data = await getPost(match.params.id);
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, []);

  const deleteBlog1 = async () => {
    await deletePost(post._id);
    history.push("/home");
  };

  const loggedinUser = JSON.parse(localStorage.getItem("userData")).user
    .username;
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
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://11pt5z46nuudt9qxx2knwgff-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/GettyImages-1173258771-1024x684.jpg"
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
        {post.username === loggedinUser ? (
          <div style={{ float: "right", marginRight: "40px" }}>
            <Link to={`/update/${post._id}`}>
              <button style={{ background: "none", border: "none" }}>
                <img
                  src="https://img.icons8.com/color/48/000000/edit--v1.png"
                  style={{ height: "30px", margin: "5px" }}
                />
              </button>
            </Link>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => deleteBlog1()}
            >
              <img
                src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                style={{ height: "40px" }}
              />
            </button>
          </div>
        ) : (
          ``
        )}
        <h1 style={{ textAlign: "center", color: "red" }}>{post.title}</h1>
        <div style={{ marginTop: "10px", display: "flex" }}>
          {/* <textarea
            style={{
              width: "100%",
              marginLeft: "50px",
              marginRight: "10px",
            }}
            rows="4"
          >
            {post.description}
          </textarea> */}
          <h3 style={{ marginLeft: "50px" }}>{post.description}</h3>
        </div>
      </div>
    </>
  );
};

export default Edit;
