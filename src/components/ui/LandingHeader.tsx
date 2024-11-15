"use client";
import Link from "next/link";
import { useState } from "react";

const LandingHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    // <>
    //     <div className="header_top_menu flex items-center landing_header">
    //         <div className="container mx-auto">
    //             <div className="flex items-center">
    //                 <div className="lg:w-2/3 sm:w-2/3">
    //                     <div className="header_top_menu_address">
    //                         <div className="header_top_menu_text">
    //                             <p>Welcome! to Consen Finance Consultant.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="lg:w-1/3 sm:w-1/3 pr-0 flex justify-end items-center">
    //                     <div className="header_top_menu_icon text-right">
    //                         <div className="menu-title">
    //                             <h6>FOLLOW US</h6>
    //                         </div>
    //                         <div className="header_top_menu_icon_inner">
    //                             <ul className="flex space-x-4 justify-end">
    //                                 <li>
    //                                     <a href="#">
    //                                         <i className="bi bi-facebook" />
    //                                     </a>
    //                                 </li>
    //                                 <li>
    //                                     <a href="#">
    //                                         <i className="bi bi-dribbble" />
    //                                     </a>
    //                                 </li>
    //                                 <li>
    //                                     <a href="#">
    //                                         <i className="bi bi-twitter" />
    //                                     </a>
    //                                 </li>
    //                                 <li>
    //                                     <a href="#">
    //                                         <i className="bi bi-instagram" />
    //                                     </a>
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div id="sticky-header" className="consen_nav_manu style-two header____">
    //         <div className="container mx-auto">
    //             <div className="flex items-center header-bg">
    //                 <div className="lg:w-1/4">
    //                     <div className="logo">
    //                         <Link legacyBehavior href="/">
    //                             <a className="logo_img" title="consen">
    //                                 <img src="assets/images/logo2.png" alt="logo" />
    //                             </a>
    //                         </Link>
    //                         <Link legacyBehavior href="/">
    //                             <a className="main_sticky" title="consen">
    //                                 <img src="assets/images/logo2.png" alt="logo" />
    //                             </a>
    //                         </Link>
    //                     </div>
    //                 </div>
    //                 <div className="lg:w-3/4 flex items-center justify-between space-x-4 px-0">
    //                     <nav className="consen_menu flex items-center">
    //                         <ul className="nav_scroll flex space-x-6">
    //                             <li><a href="#home">Home</a></li>
    //                             <li><a href="#about">About</a></li>
    //                             <li><a href="#service">Services</a></li>
    //                             <li><a href="#portfolio">Portfolio</a></li>
    //                             <li><a href="#team">Team</a></li>
    //                             <li><a href="#blog">Blog</a></li>
    //                             <li><a href="#contact">Contact</a></li>
    //                         </ul>
    //                         <div className="flex items-center space-x-4">
    //                             <div className="search-box-btn search-box-outer">
    //                                 <div className="nav-btn navSidebar-button">
    //                                     <a className="cursor-pointer" onClick={() => setToggle(true)}>
    //                                         <i className="fas fa-align-left" />
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                             <div className="header-button">
    //                                 <Link legacyBehavior href="contact">Request a Quote</Link>
    //                             </div>
    //                         </div>
    //                     </nav>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}>
    //         <div className="xs-overlay bg-black opacity-75" onClick={() => setToggle(false)} />
    //         <div className="xs-sidebar-widget">
    //             <div className="sidebar-widget-container p-6 bg-white shadow-lg">
    //                 <div className="widget-heading">
    //                     <a href="#" className="close-side-widget" onClick={() => setToggle(false)}>
    //                         <i className="far fa-times-circle" />
    //                     </a>
    //                 </div>
    //                 <div className="sidebar-textwidget">
    //                     <div className="sidebar-info-contents">
    //                         <div className="content-inner">
    //                             <div className="nav-logo mb-4">
    //                                 <a href="index.html">
    //                                     <img src="assets/images/logo.png" alt="logo" />
    //                                 </a>
    //                             </div>
    //                             <div className="content-box mb-6">
    //                                 <h2 className="text-2xl font-bold">About Us</h2>
    //                                 <p className="text-sm text-gray-600 mt-2">
    //                                     The argument in favor of using filler text goes something like this: If
    //                                     you use real content in the Consulting Process, anytime you reach a review
    //                                     point you’ll end up reviewing and negotiating the content itself and not
    //                                     the design.
    //                                 </p>
    //                                 <a href="index" className="theme-btn btn-style-two mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded">
    //                                     <span>Consultation</span> <i className="fas fa-heart ml-2" />
    //                                 </a>
    //                             </div>
    //                             <div className="contact-info mb-6">
    //                                 <h2 className="text-xl font-bold mb-3">Contact Info</h2>
    //                                 <ul className="list-style-one space-y-2 text-gray-700">
    //                                     <li className="flex items-center">
    //                                         <span className="icon flaticon-email mr-2" /> Chicago 12, Melborne City, USA
    //                                     </li>
    //                                     <li className="flex items-center">
    //                                         <i className="bi bi-telephone-inbound mr-2" /> (+001) 123-456-7890
    //                                     </li>
    //                                     <li className="flex items-center">
    //                                         <i className="bi bi-geo-alt mr-2" /> Example @gmail.com
    //                                     </li>
    //                                     <li className="flex items-center">
    //                                         <i className="bi bi-clock mr-2" /> Week Days: 09.00 to 18.00 Sunday: Closed
    //                                     </li>
    //                                 </ul>
    //                             </div>
    //                             <ul className="social-box flex space-x-3 text-lg">
    //                                 <li className="facebook">
    //                                     <a href="#" className="fab fa-facebook-f text-blue-600" />
    //                                 </li>
    //                                 <li className="twitter">
    //                                     <a href="#" className="fab fa-instagram text-pink-600" />
    //                                 </li>
    //                                 <li className="linkedin">
    //                                     <a href="#" className="fab fa-twitter text-blue-400" />
    //                                 </li>
    //                                 <li className="instagram">
    //                                     <a href="#" className="fab fa-pinterest-p text-red-500" />
    //                                 </li>
    //                                 <li className="youtube">
    //                                     <a href="#" className="fab fa-linkedin-in text-blue-800" />
    //                                 </li>
    //                             </ul>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </>
    <>
      <div className="header_top_menu flex items-center justify-between landing_header ">
        <div className="container mx-auto">
          <div className="row flex items-center">
            <div className="col-lg-8 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p>Welcome! to Consen Finance Consultant.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 pr-0">
              <div className="header_top_menu_icon text-right">
                <div className="menu-title">
                  <h6>FOLLOW US</h6>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="bi bi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="sticky-header"
        className="consen_nav_manu style-two header____">
        <div className="container mx-auto">
          <div className="row header-bg flex justify-between items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link
                  legacyBehavior
                  href="/">
                  <a
                    className="logo_img"
                    title="consen">
                    <img
                      src="assets/images/logo2.png"
                      alt="logo"
                    />
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="/">
                  <a
                    className="main_sticky"
                    title="consen">
                    <img
                      src="assets/images/logo2.png"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0 flex items-center justify-around">
              <nav className="consen_menu">
                <ul className="nav_scroll">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#service">Services </a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>

                <div className="search-box-btn search-box-outer">
                  <div className="nav-btn navSidebar-button">
                    <a
                      className="c-pointer"
                      onClick={() => setToggle(true)}>
                      <i className="fas fa-align-left" />
                    </a>
                  </div>
                </div>
                <div className="header-button">
                  <Link
                    legacyBehavior
                    href="contact">
                    Request a Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className={`xs-sidebar-group info-group ${toggle ? "isActive" : ""}`}>
        <div
          className="xs-overlay xs-bg-black"
          onClick={() => setToggle(false)}
        />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a
                href="#"
                className="close-side-widget"
                onClick={() => setToggle(false)}>
                <i className="far fa-times-circle" />
              </a>
            </div>
            <div className="sidebar-textwidget">
              {/* Sidebar Info Content */}
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="nav-logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="content-box">
                    <h2>About Us</h2>
                    <p className="text">
                      The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process, anytime
                      you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
                    </p>
                    <a
                      href="index"
                      className="theme-btn btn-style-two">
                      <span>Consultation</span> <i className="fas fa-heart" />
                    </a>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <span className="icon flaticon-email" />
                        Chicago 12, Melborne City, USA
                      </li>
                      <li>
                        <span>
                          {" "}
                          <i className="bi bi-telephone-inbound" />{" "}
                        </span>
                        (+001) 123-456-7890
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-geo-alt" />
                        </span>
                        Example @gmail.com
                      </li>
                      <li>
                        <span>
                          <i className="bi bi-clock" />
                        </span>
                        Week Days: 09.00 to 18.00 Sunday: Closed
                      </li>
                    </ul>
                  </div>
                  {/* Social Box */}
                  <ul className="social-box">
                    <li className="facebook">
                      <a
                        href="#"
                        className="fab fa-facebook-f"
                      />
                    </li>
                    <li className="twitter">
                      <a
                        href="#"
                        className="fab fa-instagram"
                      />
                    </li>
                    <li className="linkedin">
                      <a
                        href="#"
                        className="fab fa-twitter"
                      />
                    </li>
                    <li className="instagram">
                      <a
                        href="#"
                        className="fab fa-pinterest-p"
                      />
                    </li>
                    <li className="youtube">
                      <a
                        href="#"
                        className="fab fa-linkedin-in"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingHeader;
