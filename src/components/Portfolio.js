/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      const data = await res.json();
      setData(data?.user);
    }
    fetchData();
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  // useEffect(() => {
  //   setTimeout(() => {
  //     isotope.current = new Isotope(".gallery_zoom", {
  //       itemSelector: ".grid-item",
  //       //    layoutMode: "fitRows",
  //       percentPosition: true,
  //       masonry: {
  //         columnWidth: ".grid-item",
  //       },
  //       animationOptions: {
  //         duration: 750,
  //         easing: "linear",
  //         queue: false,
  //       },
  //     });
  //   }, 500);
  //   return () => isotope.current.destroy();
  // }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);
  if (!data.about) {
    return <p>loading</p>;
  }
  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div
            className="dizme_tm_main_title"
            data-align="center"
            style={{ marginBottom: "40px" }}
          >
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>

          <div className="dizme_tm_portfolio_titles visible" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {data?.projects ? (
                data?.projects?.map((project, index) => (
                  <li key={index} className="grid-item">
                    <div className="inner">
                      <div
                        className="entry dizme_tm_portfolio_animation_wrap"
                        data-title={project?.title}
                        data-category={project?.techStack[0]}
                      >
                        <a className="popup-youtube" href={project?.image?.url}>
                          <img src={project?.image?.url} alt="image" />
                          <div
                            className="main"
                            data-img-url={project?.image?.url}
                          />
                        </a>
                      </div>
                      <div className="mobile_title">
                        <h3>{project?.title}</h3>
                        <span>
                          {project?.techStack?.map((x) => (
                            <span key={x}>{x}</span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <div>loading</div>
              )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
