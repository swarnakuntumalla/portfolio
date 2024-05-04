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
import NxtTrendz from "../../assets/NxtTrendz.png";
import LT from "../../assets/LT.png";
import ipldashboard from "../../assets/ipldashboard.png";
import speedTyping from "../../assets/speedTyping.png"

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
                    src={NxtTrendz}
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
              <div className="project_videocontainer">
                <div>
                  <img
                    src={LT}
                    alt="LT"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>LT Learning Platform</h2>
                <p>
                  Developed to enhance the technical skills of RGUKT students
                </p>
                <div>
                  <SiNodedotjs />
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
                    src={ipldashboard}
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
                    href="https://github.com/swarnakuntumalla/iplDashboardApp"
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
                    src={speedTyping}
                    alt="speed Typing Test"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Speed Typing Test</h2>
                <p>
                  Developed an application which measuring time he took to complete given paragraph
                  Maintained timer by using APIs setTimeInterval, clearTimeInterval and Updated timer in the
                  UI dynamically using JavaScript DOM operations for every 1 second.
                </p>
                <div>
                  <IoLogoJavascript />
                  <FaReact />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://swarnatyping.ccbp.tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
