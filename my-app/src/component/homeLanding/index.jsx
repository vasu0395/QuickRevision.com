import Header from "../header";
import Banner from "../banner";
import Category from "../catergory";
import Posts from "../posts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div>
        <div className="row">
          <div className="col col-md-3 col-sm-4 col-12">
            <Category />
          </div>
          <div className="d-flex flex-wrap col col-md-9 col-sm-8 col-12">
            {<Posts />}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
