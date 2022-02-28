import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Account = () => {
  // intialize history
  let history = useHistory();
  // intialize by empty strings.
  const [creditnal, setCreditnal] = useState({ username: "", password: "" });
  // The preventDefault() method cancels the event if it is cancelable
  const handleSubmit = async (e) => {
    e.preventDefault();
    // destructure creditnal
    const { username, password } = creditnal;
    // making an fetch api call which return promise.
    const response = await fetch("http://localhost:8000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // stringify convert json into string which is required by web browser.
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await response.json();

    if (json.success) {
      // adding value of json.jwtData to token in local storage.
      localStorage.setItem("token", json.jwtData);
      history.push("/");
    } else {
      alert("Invalid Values");
    }
  };

  // conditional rendering and seting of data
  const onChange = (e) => {
    setCreditnal({ ...creditnal, [e.target.name]: e.target.value });
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
                          Create New Account
                        </h5>
                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            id="username"
                            name="username"
                            //value={creditnal.username}
                            className="form-control form-control-lg"
                            placeholder="vasuchauhan"
                            onChange={onChange}
                            required
                            minLength={5}
                            // type="name"
                            // id="name"
                            // // value={creditnal.name}
                            // className="form-control form-control-lg"
                            // placeholder="vasu chauhan"
                            // onChange={onChange}
                            // required
                            // minLength={5}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                            style={{ color: "#FFC0CB" }}
                          >
                            User Name
                          </label>
                        </div>

                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            id="password"
                            name="password"
                            // value={creditnal.password}
                            className="form-control form-control-lg"
                            placeholder="**********"
                            onChange={onChange}
                            required
                            minLength={5}
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                            style={{ color: "#FFC0CB" }}
                          >
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                            style={{ color: "#FFC0CB" }}
                          >
                            Create
                          </button>
                        </div>

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

export default Account;
