import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFastapi,
  SiFirebase,
  SiCss3,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*v2Uyy0xcj9UogsDJ-diU_A.png"
                    alt="Nxt Trendz"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>NXT Trendz</h2>
                <p>
                  Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..
                </p>
                <div>
                  {/* <SiNodedotjs /> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                  <SiHtml5 />
                  <DiCss3 />
                  <FaReact />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://swarnanxtrz.ccbp.tech/"
                    // href="https://abhi-music-app.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/swarnakuntumalla/Nxt-trendz-"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_information">
                <h2>LT Learning Platform</h2>
                <p>
                  Developed to enhance the technical skills of RGUKT students
                </p>
                <div>
                  <SiExpress />
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://cslt.rguktrkv.ac.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/swarnakuntumalla/LT-Club"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
            <div className="project_videocontainer">
                <div>
                  <img
                    src=" https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s2z0nOf_Ry4RV29beilv1A.png"
                    alt="IPL Dashboard"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>IPL Dashboard</h2>
                <p>
                  Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches information
                </p>
                <div>
                  <SiNodedotjs />
                  <FaReact />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="http://swarnaipldash.ccbp.tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/LinkedIn-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/66909138/164240744-5bc86679-e0b5-412b-9cae-1ee40e8aaf68.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Location based weather app. User can also search for their
                  cities and can see weather data of respective places. As it
                  Provides city weather details with inbuild Google-map - using
                  weather API
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://ab-weather.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
