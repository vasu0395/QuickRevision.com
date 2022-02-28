import "./style.css";
import Header from "../../component/header";
import { Link, useHistory } from "react-router-dom";
const About = () => {
  // useHistory hook to store history and rerender to home
  const history = useHistory();
  const handleSubmit = () => {
    alert("Thanks for Feedback.");
    // history.push() helps in rerender to "/home" page.
    history.push("home");
  };

  return (
    <>
      <Header />
      <div className="contact3 py-3" style={{ marginTop: "4px" }}>
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img
                    src="https://www.teahub.io/photos/full/48-486428_about-contact-us-wallpaper-hd.jpg"
                    className="img-fluid"
                    height={"900px"}
                    style={{ borderRadius: "0 20px" }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="glow" style={{ fontSize: "30px" }}>
                    Quick Contact
                  </h1>
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="email"
                            placeholder="email address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="phone"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12 py-3">
                <div className="card mt-4 border-0 mb-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Address</h6>
                          <p className="">
                            Chitkara University
                            <br /> Rajpura , Punjab
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Phone</h6>
                          <p className="">
                            123 456 7890
                            <br /> 987 654 3210
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Email</h6>
                          <p className="">
                            vasuchauhan9897@gmail.com
                            <br /> vasu0395.cse19@chitkara.edu.in
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
