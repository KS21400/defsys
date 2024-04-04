import "./slider.css";

const Slider = () => {
  return (
    <div class="bd-example">
      <div
        id="carouselExampleCaptions"
        class="carousel slide transform "
        data-ride="carousel"
        data-interval="4000"
        data-pause="false"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../assets/banner_slider_weopn.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider_missile.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/naval1_mob.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider_ground.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider_missile.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider_homelandsecurity.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/banner_slider_weopn.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../assets/airbourne_mob.jpg")}
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption">
              <div className="captionDiv">
                <h2>Weapon Control Systems</h2>
                <p>
                  State of the art electro-optical systems for artillery and
                  air-defence guns
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
