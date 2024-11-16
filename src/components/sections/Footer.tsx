"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-middle style-two">
      <div className="container mx-auto">
        <div className="footer-bg">
          <div className="row flex flex-wrap">
            <div className="col-lg-3 col-sm-6 w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0 px-4">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2 mb-4">
                  <h4 className="widget-title text-lg font-semibold mb-2">About Us</h4>
                  <p className="text-sm text-gray-600">
                    Business Consulting optimizes standing manufactured products and installation synergy. Professionally dominate why professional
                    business.
                  </p>
                </div>
                <div className="follow-company-icon flex space-x-4">
                  <a
                    className="social-icon-color text-blue-600 hover:text-blue-800"
                    href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    className="social-icon-color2 text-pink-600 hover:text-pink-800"
                    href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    className="social-icon-color1 text-blue-400 hover:text-blue-600"
                    href="#">
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    className="social-icon-color3 text-red-600 hover:text-red-800"
                    href="#">
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0 px-4">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title text-lg font-semibold mb-4">Company</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu space-y-2 text-sm text-gray-600">
                    <li>
                      <a
                        href="/"
                        className="hover:text-gray-800">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="about"
                        className="hover:text-gray-800">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact"
                        className="hover:text-gray-800">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="service"
                        className="hover:text-gray-800">
                        Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 w-full sm:w-1/2 lg:w-1/4 mb-8 lg:mb-0 px-4">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title text-lg font-semibold mb-4">Services</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu space-y-2 text-sm text-gray-600">
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-800">
                        Strategy &amp; Planning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-800">
                        Consumer Market
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-800">
                        Data Analysis
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-800">
                        Corporate Finance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-gray-800">
                        Market Research
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 w-full sm:w-1/2 lg:w-1/4 px-4 mt-4 sm:mt-0">
              <div
                id="em-recent-post-widget"
                className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title text-lg font-semibold pb-2">Popular Posts</h4>
                  <div className="contact-form-footer mt-4">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="flex space-x-2">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter E-Mail"
                        required
                      />
                      <button
                        type="submit"
                        className="btn p-2 bg-blue-500 text-white rounded-lg">
                        <i className="bi bi-send-check" />
                      </button>
                    </form>
                  </div>
                  <div className="recent-post-item mt-4 flex space-x-4">
                    <div className="recent-post-thumb1">
                      <a href="#">
                        <img
                          src="assets/images/resource/google-play.png"
                          alt=""
                          className="w-12"
                        />
                      </a>
                    </div>
                    <div className="recent-post-thumb">
                      <a href="#">
                        <img
                          src="assets/images/resource/app-store.png"
                          alt=""
                          className="w-12"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="foorer-shape">
            <div className="footer-thumb">
              <img
                src="assets/images/resource/red-dot.png"
                alt=""
              />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img
                src="assets/images/resource/all-shape.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area flex items-center">
        <div className="container mx-auto">
          <div className="row flex items-center justify-between">
            <div className="col-md-4">
              <div className="consen-logo">
                <Link
                  legacyBehavior
                  href="/">
                  <a
                    className="logo_thumb"
                    title="consen">
                    <img
                      src="assets/images/logo.png"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    © 2024 <span>Consen</span> all rights reserved. Design By Dream-IT.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
