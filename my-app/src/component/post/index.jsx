import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div
        data-aos="zoom-in"
        className="card"
        style={{
          maxHeight: "300px",
          maxWidth: "400px",
          minHeight: "300px",
          minWidth: "200px",
          margin: "10px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <img
          className="card-img-top"
          src={
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          }
          alt="Card cap"
          style={{
            height: "140px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body">
          <p style={{ color: "red", textDecoration: "black" }}>{post.title}</p>
          <p style={{ textDecoration: "black" }}>{post.description}</p>
          <p style={{ textDecoration: "black" }}>
            {new Date(post.currentdata).toDateString()}
          </p>
        </div>
      </div>
    </>
  );
};
export default Post;
