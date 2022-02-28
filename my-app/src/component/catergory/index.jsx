import Post from "../post";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { getAllPost } from "../../service/api.js";
import { Link, useLocation } from "react-router-dom";
const Category = () => {
  // json is used to exchange data from/to web.
  // During login we set userData by calling getItem we try to find it.
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <Link to="/postcreate">
        <button
          type="button"
          className="btn btn-primary"
          style={{ width: "95%", margin: "10px", marginLeft: "20px" }}
        >
          <img
            src="https://img.icons8.com/color/48/000000/create-new.png"
            alt="im"
          />
          Create Post
        </button>
      </Link>
      <table className="table">
        <tbody>
          <tr>
            <td>
              {/* userData contail all data of user except password here we access user name using .user (userSchema).username*/}
              <Link to={`/home?username=${userData.user.username}`}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%", margin: "10px", marginLeft: "10px" }}
                >
                  My Post
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Category;
