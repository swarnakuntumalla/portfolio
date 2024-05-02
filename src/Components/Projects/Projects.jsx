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
                    src="https://camo.githubusercontent.com/a02884304f61a39cf3de0b716e9fd361b76161f070cdc09257932a697967a8be/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a354d52654579516a695f45537a5249775438775930772e706e67"
                    alt="Abhi music app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Abhi Music</h2>
                <p>
                  Play Your Favourite Songs, Find New Music, and See What
                  Friends Are Listening to. Listen to Your Favourite Artists,
                  Songs and Albums for Free. Listen on Several Devices. Listen
                  Songs with Lyrics.
                </p>
                <div>
                  {/* <SiNodedotjs /> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                  <SiHtml5 />
                  <DiCss3 />
                  <FaReact />
                  <SiFastapi />
                  <SiTailwindcss />
                </div>
                <div>
                  <a
                    href="https://abhi-music.netlify.app/"
                    // href="https://abhi-music-app.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/Abhi-music"
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
                    src="https://camo.githubusercontent.com/ab5524e63e8a3a98fe15f40ef6cc9ece3997f9a2a9812a71f36ac1781045c4cc/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a342d4748395669367a31576430496864725368694f772e706e67"
                    alt="Meesho Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Meesho Clone</h2>
                <p>
                  Meesho is a social commerce platform that undertakes retail
                  distribution, enabling small retail merchants to connect and
                  sell their products effectively via social media channels.
                </p>
                <div>
                  <SiNodedotjs />
                  {/* <SiExpress /> */}
                  <SiMongodb />
                  <FaReact />
                  <SiHtml5 />
                  <DiCss3 />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://meesho-web.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/meesho-web"
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
                    src="https://camo.githubusercontent.com/58edc9a8219609e45ec244ed5bf9c75729f013f704f77095b657e046797b20cb/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a3732302f666f726d61743a776562702f312a7377666a343031735039733869674b73703549794e672e706e67"
                    alt="LinkedIn Clone image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>LinkedIn Clone</h2>
                <p>
                  LinkedIn Clone is a professional networking platform that
                  replicates the features & functionality of LinkedIn, allowing
                  users to connect with professionals, showcase their work exp &
                  explore job opportunities within their industry.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiFirebase />
                  <FaReact />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://linkedin-web-app.netlify.app/"
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
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://cdn-images-1.medium.com/max/800/1*z8M1Ap-l4VNue2_Qu4DQUw.png"
                    alt="Pluralsight Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pluralsight Clone</h2>
                <p>
                  Pluralsight, Inc. is an American privately held online
                  education company that offers a variety of video training
                  courses for software developers, IT administrators, and
                  creative professionals through its website
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <IoLogoJavascript />
                  <SiMongodb />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://plurlsightclone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/Pluralsight_Clone"
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
                    src="https://cdn-images-1.medium.com/max/800/1*NMOLeAVdNPGOMBmYO0VzrQ.png"
                    alt="Freshly Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Freshly Clone</h2>
                <p>
                  Freshly is a New York-based prepared meal delivery company
                  that delivers throughout the United States. The Clone is build
                  using HTML, CSS, JavaScript.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://freshly-new.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/freshly-Clone"
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
                    src="https://cdn-images-1.medium.com/max/800/1*qU--eirYHvqb9BJB_lgHVA.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie App</h2>
                <p>
                  This is the Movie app build using api and shows all the movies
                  with the ratings and the short description of the movie which
                  is searched for This is a Sole Project and was build in a day.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://movies-reviewer-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Abhi-lab2/The-Movie-App"
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
