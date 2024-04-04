import { useState } from "react";
import "./header.css";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      class="headerContainer"
      style={{
        ...(toggle && window.screen.width <= 767 && { height: "auto" }),
      }}
    >
      <div class="rst_logo">
        <a href="index.html">
          <img alt="" src={require("../assets/logo.png")} />
        </a>
      </div>
      <div
        class="rst_drop_menu"
        style={{ float: "right", marginLeft: "auto", paddingTop: 0 }}
      >
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Company Info</a>
            <ul>
              <li>
                <a href="about.html">About Defsys</a>
              </li>
              <li>
                <a href="quality-systems-and-certifications.html">
                  {" "}
                  Quality Systems &amp; Certifications
                </a>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Products</a>
            <ul>
              <li>
                <a href="integratedsys.html">Integrated Systems</a>
              </li>
              <li>
                <a href="mission-equipments-detail.html">Mission Equipments</a>
              </li>
              <li>
                <a href="simulators-and-firing-trainers.html">
                  Simulators and Firing Trainers
                </a>
              </li>
              <li>
                <a href="ates-and-test-equipments.html">
                  ATE’s AND Test Equipments
                </a>
              </li>
              <li>
                <a href="role-equipment.html">Role Equipments</a>
              </li>
              <li>
                <a href="drone-detection-and-elimination.html">
                  Drone Detection and Elimination
                </a>
              </li>
            </ul>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Capabilities</a>
            <ul>
              <li>
                <a href="engcapabilities.html">Engineering Capabilities</a>
              </li>
              <li>
                <a href="infrastructure.html">Manufacturing Capabilities</a>
              </li>
              <li>
                <a href="digital-manufacturing-capabilities.html">
                  Digital Manufacturing Capabilities
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="http://careers.defsys.co.in/">Careers</a>
          </li>
        </ul>
      </div>

      <div
        class="navbar-header mobile-display"
        style={{
          position: "absolute",
          top: 77,
          width: "90%",
          marginLeft: "20px",
          height: "35px",
        }}
      >
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div
        id="navbar"
        class="navbar-collapse collapse in"
        aria-expanded="true"
        style={{ display: toggle ? "block" : "none" }}
      >
        <ul class="nav navbar-nav SourceSansPro">
          <li class="active">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About Defsys</a>
          </li>
          <li>
            <a href="quality-systems-and-certifications.html">
              {" "}
              Quality Systems &amp; Certifications
            </a>
          </li>
          <li class="menu-item-has-children">
            <a href="#">Products</a>
            <ul>
              <li>
                <a href="integratedsys.html">Integrated Systems</a>
              </li>
              <li>
                <a href="mission-equipments-detail.html">Mission Equipments</a>
              </li>
              <li>
                <a href="simulators-and-firing-trainers.html">
                  Simulators and Firing Trainers
                </a>
              </li>
              <li>
                <a href="ates-and-test-equipments.html">
                  ATE’s AND Test Equipments
                </a>
              </li>
              <li>
                <a href="role-equipment.html">Role Equipments</a>
              </li>
              <li>
                <a href="drone-detection-and-elimination.html">
                  Drone Detection and Elimination
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-item-has-children">
            <a href="#">Capabilities</a>
            <ul>
              <li>
                <a href="engcapabilities.html">Engineering Capabilities</a>
              </li>
              <li>
                <a href="infrastructure.html">Manufacturing Capabilities</a>
              </li>
              <li>
                <a href="digital-manufacturing-capabilities.html">
                  Digital Manufacturing Capabilities
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="http://careers.defsys.co.in/">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
