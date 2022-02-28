import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
const Login = () => {
  let history = useHistory();
  const [creditnal, setCreditnal] = useState({ username: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: creditnal.username,
        password: creditnal.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("token", json.jwtData);
      console.log("vasuuu");
      getUserData(json.jwtData);
    } else {
      alert("Invalid crediential");
    }
  };

  const onChange = (e) => {
    setCreditnal({ ...creditnal, [e.target.name]: e.target.value });
  };

  const getUserData = async (token) => {
    const response = await fetch("http://localhost:8000/user/getuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const json = await response.json();
    console.log(json.sucess);
    if (json.success) {
      localStorage.setItem("userData", JSON.stringify(json));
      localStorage.setItem("isAuthenticated", true);
      history.push("home");
    } else {
      alert("Invalid credientiallll");
    }
  };

  return (
    <>
      <section
        className="vh-100"
        style={{
          backgroundImage: `url("https://cdn.wallpapersafari.com/65/20/bZuraw.jpg")`,
        }}
      >
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card text-body"
                style={{
                  borderRadius: "1rem 2rem 2rem 1rem",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://i.pinimg.com/originals/6c/af/86/6caf86877380cef0eb7b24bd884d817b.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-5 col-lg-5 col-xl-5 offset-xl-1">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        {/* onSubmit={handleSubmit} */}
                        <div className="d-flex align-items-center mb-3 pb-1 text-responsive">
                          <img
                            src="https://img.icons8.com/color/48/000000/address-book.png"
                            alt="im"
                          />
                          <span
                            className="fw-bold glow text-responsive"
                            style={{
                              color: "#9A616D",
                              textAlign: "left",
                              letterSpacing: "4px",
                            }}
                          >
                            QuickRevision.com
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px", color: "#FFC0CB" }}
                        >
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            value={creditnal.username}
                            className="form-control form-control-lg"
                            placeholder="abcdef"
                            onChange={onChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="username"
                            style={{ color: "#FFC0CB" }}
                          >
                            Username
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            value={creditnal.password}
                            name="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="*****"
                            onChange={onChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="password"
                            style={{ color: "#FFC0CB" }}
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          {/* <Link to="/home"> */}
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                            style={{ color: "#FFC0CB" }}
                          >
                            Login
                          </button>
                          {/* </Link> */}
                        </div>

                        <a
                          className="small text-muted"
                          href="#!"
                          style={{ color: "#FFC0CB" }}
                        >
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#FFC0CB" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/create" style={{ color: "#FFC0CB" }}>
                            Register here
                          </Link>
                        </p>
                        <a
                          href="#!"
                          className="small text-muted"
                          style={{ color: "#FFC0CB" }}
                        >
                          Terms of use.
                        </a>
                        <a
                          href="#!"
                          className="small text-muted"
                          style={{ color: "#FFC0CB" }}
                        >
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
