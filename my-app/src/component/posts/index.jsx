import Post from "../post";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getAllPost } from "../../service/api.js";
import { Link, useLocation } from "react-router-dom";
const Posts = () => {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchData = async () => {
      let data = await getAllPost(search ? search : "");
      console.log(data);
      setPost(data);
    };
    fetchData();
  }, [search]);
  //let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return posts.map((post) => (
    <div className="col-md-4 col-sm-6 col-12">
      <Link
        to={`/edit/${post._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Post post={post} />
      </Link>
    </div>
  ));
};
export default Posts;
