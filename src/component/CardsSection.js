import "./cardsSection.css";
const CardsSection = () => {
  return (
    <div class="container" style={{ padding: "25px 25px 10px 25px" }}>
      <div class="card-deck row">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/isys.jpg")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2  rst_main_content_top h3">
              <h3>Integrated Systems</h3>

              <a href="strategic-sys.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/missionimg-1.png")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2 rst_main_content_top h3">
              <h3>Mission Equipments</h3>

              <a href="mission-equipments-detail.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/sfire.png")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2 rst_main_content_top h3">
              <h3>Simulators and Firing Trainers</h3>

              <a href="simulators-and-firing-trainers.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/rf1.jpg")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2 rst_main_content_top h3">
              <h3>ATE’s AND Test Equipments</h3>

              <a href="ates-and-test-equipments.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/roleequipment.png")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2 rst_main_content_top h3">
              <h3>Role Equipments</h3>

              <a href="role-equipment.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="card mb-5" style={{ borderRadius: "none !important" }}>
            <div class="view overlay">
              <img
                class="card-img-top"
                style={{ borderRadius: "none !important" }}
                src={require("../assets/homepage.png")}
                alt="Card image cap"
              />
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>

            <div class="card-body pb-2 rst_main_content_top h3">
              <h3>Drone Detection and Elimination</h3>
              <a href="drone-detection-and-elimination.html">
                <div class="rst_main_content_bot">Read More</div>
              </a>
            </div>
          </div>
        </div>
        <div
          class="clear"
          //   style={{ position: "absolute", left: "0px; top: 847px" }}
        ></div>
      </div>
    </div>
  );
};

export default CardsSection;
