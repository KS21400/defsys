import "./footer.css";

function Footer() {
  return (
    <footer>
      <div class="rst_bottom_bar">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-4 rst_align_left sm-p-2">
              <p>© 2015 Defsys Solutions Pvt. Ltd. All Rights Reserved.</p>
            </div>{" "}
            <div class="col-xs-12 col-sm-4 rst_align_center"></div>
            <div class="col-xs-12 col-sm-4 rst_align_right">
              <ul>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li class="followlink">
                  <span>Follow us:</span>{" "}
                  <a
                    href="https://www.linkedin.com/company/defsys-solutions-private-limited/"
                    target="_blank"
                  >
                    <i
                      class="fa fa-linkedin linkedincls"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
