import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/myPhoto.jpeg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Swarna Kuntumalla </span> and I am
                from{" "}
                <span className="different"> Kadapa, Andhra Pradesh (India)</span>.
                I have completed my graduation in BTech (Computer Science Engineering) from{" "}
                <span className="different">
                 IIIT RGUKT Rk Valley, Andhra Pradesh (India)
                </span>
                . Then I have done intership at IB Hubs. Now working as Software Engineer at{" "}
                <span className="different">Neviton Softech.</span>
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Quick Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
