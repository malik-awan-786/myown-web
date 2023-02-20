import React from "react";
import "./Small.css";
import { Link } from "react-router-dom";
import Group from "../images/Group.png";
import Elipse from "../images/Elipse.png";
import Groups from "../images/Groups.png";
import fmablog from "../images/fmablog.png";
import firstphoto from "../images/firstphoto.png";
import play from "../images/play.png";
import iphone from "../images/iphone.png";
function Small() {
  return (
    <div className="main">
      <div className="mdiv">
        <div className="container1">
          <div className="text">
            {" "}
            A Wound Neglected Is A Wound Infected
            <div className="line"></div>
          </div>
          <div className="h2">
            WoundMend offers instant assessment of acute and chronic wounds. The
            state-of-the-art mobile application operates on Artificial
            Intelligence technology and helps you scan all sorts of rashes,
            wounds or pigments. With the data obtained from your skin analysis,
            WoundMend suggests possible predictions and outcomes.
            <div>
              <Link to="/Sigin" className="btn1">
                {" "}
                Sign in
              </Link>
              <Link to="/Sign up" className="btn1">
                {" "}
                Sign up
              </Link>
            </div>
          </div>
        </div>
        <h1>
          <img className="Group" src={Group} />
        </h1>
      </div>
      <div className="container2">
        <div className="tx">Our Doctor</div>
        <div className="tx1">WoundMend Service</div>
        <div className="tx2">
          WoundMend helps you scan and detect all sorts of wounds for possible
          predictions
        </div>
        <div className="line1"></div>
      </div>
      <div className="texts">
        <div className="texts1">
          <div className="texts2">
            <div>
              <h1>
                <img src={Elipse} />
              </h1>
              Step 1
            </div>
            <div>
              <p className="texts3">
                Download the WoundMend mobile app, available both for Android
                and ioS platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="texts1">
          <div className="texts2">
            <h1>
              <img src={Groups} />
            </h1>
            Step 2
          </div>
          <div>
            <p className="texts3">
              Point your phone camera towards the concerned part of the skin.
              Our app will investigate your injury through the use of our
              qualified database and high-tech machine learning along with
              clinically validated algorithm
            </p>
          </div>
        </div>
        <div className="texts1">
          <div className="texts2">
            <div>
              <h1>
                <img src={Groups} />
              </h1>
              Step 3
            </div>
            <div>
              <p className="texts3">
                Wait for WoundMend to determine the type and nature of your
                wound for a whole list of predictions in no time.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="textss">
        <h1>
          {" "}
          <img src={fmablog} />
        </h1>
        <div className="texts2">
          <div className="tx1">Why WoundMend?</div>
          <div className="text3">
            Wounds are a breach on your skin; that is the largest organ on human
            body. Popular statistics reveal that almost 1 to 2 % of the
            population will experience a chronic wound during their lifetime in
            developed countries. If not properly cared for, wounds have a
            susceptibility to get infected. WoundMend offers timely assessment
            of your wound, that can assist in your treatment decisions.
            <br />
            If not properly cared for, wounds have a susceptibility to get
            infected. WoundMend offers timely assessment of your wound, that can
            assist in your treatment decisions.
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom1">
          433,000 Australians are estimated to suffer from a chronic wound at
          any time, costing the healthcare system more than $2.85 billion
          annually
        </div>
        <div className="texts1">
          <div className="milion">
            <div className="texts2">
              <div className="green">6.5 million</div>
              <div>
                <p className="texts3">Affected by chronic wounds</p>
              </div>
            </div>
            <div className="texts2">
              <div className="green">$28.1 billion to $96.8 billion</div>
              <div>
                <p className="texts3">
                  Medicare cost estimates for acute and chronic wound treatments
                </p>
              </div>
            </div>
            <div className="texts2">
              <div className="green">$15–22 billion</div>
              <div>
                <p className="texts3">Annual Wound Care Products Market.</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="container2">
        <div className="tx">FAQ</div>
        <div className="tx1">Frequently asked questions about DermPro</div>
        <div className="line1"></div>
      </div>
      <div className="firstphoto">
        <div className="texts2">
          <div className="firstpic">
            Ready to take the first photo?
            <h1>
              {" "}
              <div className="line3"></div>{" "}
            </h1>
          </div>
          <div className="picstyle">
            Download woundMend from the app store or goggle play now and start
            checking your wounds..
            <div className="downloadapp">
              <p className="buttonstyle"> Download WounnMend</p>
            </div>
            <div className="icons">
              <h1>
                {" "}
                <img src={play} />
              </h1>
              <h1>
                {" "}
                <img src={iphone} />
              </h1>
            </div>
          </div>
        </div>
        <h1>
          {" "}
          <img src={firstphoto} />
        </h1>
      </div>
    </div>
  );
}
export default Small;
