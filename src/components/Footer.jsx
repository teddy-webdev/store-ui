import React, { useState } from "react";
import { db } from "../firebase-config";
import { Link } from "react-router-dom";
import Logo from "../images/ALEMDAR_TEKNIK_LOGO.png";
import { collection, addDoc } from "firebase/firestore";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillAmazonSquare,
} from "react-icons/ai";

const Footer = () => {
  const dataCollectionRef = collection(db, "news-subscriptions");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const newzSubscriptioin = async (event) => {
    event.preventDefault();

    // Email validation
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    // Send data to Firebase
    try {
      await addDoc(dataCollectionRef, {
        email_address: email,
      });

      setSuccessMessage("Subscription received.");
      setIsSubmitted(true);

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      setSuccessMessage("Error, try again or reload !");
      console.error("Error submitting form:", error);
    }
  };
  return (
    <footer className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <div className="social-links mt-5">
                <ul className="d-flex list-unstyled gap-2">
                  <li>
                    <a href="faceboook.com" className="btn btn-outline-light">
                      <AiFillFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="x.com" className="btn btn-outline-light">
                      <AiFillTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="instagram.com" className="btn btn-outline-light">
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="amazon.com" className="btn btn-outline-light">
                      <AiFillAmazonSquare />
                    </a>
                  </li>
                  {/* Add more social links here */}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Related</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <Link to="httpd" className="nav-link">
                    Careers
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="httpd" className="nav-link">
                    Affiliate Programme
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="httpd" className="nav-link">
                    Ultras Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-md-2 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Customer Service</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                    <Link to="httpd" className="nav-link">About us</a>
                  </li>
                  <li classLinkame="menu-item">
                    <Link to="httpd" className="nav-link">Conditions </a>
                  </li>
                  <li classLinkame="menu-item">
                    <Link to="httpd" className="nav-link">Our Journals</a>
                  </li>
                  <li classLinkame="menu-item">
                    <Link to="httpd" className="nav-link">Careers</a>
                  </li>
                  <li classLinkame="menu-item">
                    <Link to="httpd" className="nav-link">Affiliate Programme</a>
                  </li>
                  <li classLinkame="menu-item">
                    <Link to="httpd" className="nav-link">Ultras Press</a>
                  </li>
              </uLink>
            </div>
          </div> */}

          <div className="col-md-2 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Customer Service</h5>
              <ul className="menu-list list-unstyled">
                <li className="menu-item">
                  <Link to="/about" className="nav-link">
                    About us
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="conditions" className="nav-link">
                    Conditions{" "}
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact" className="nav-link">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-menu">
              <h5 className="widget-title">Subscribe Us</h5>
              <p>
                Subscribe to our newsletter to get updates about our grand
                offers.
              </p>
              <form className="d-flex mt-3 gap-0">
                <input
                  className="form-control rounded-start rounded-0 bg-light"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <button
                  className="btn btn-dark rounded-end rounded-0"
                  type="submit"
                  onClick={newzSubscriptioin}
                >
                  Subscribe
                </button>
              </form>
              {isSubmitted && (
                <div
                  className={`alert alert-success`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterBottom = () => {
  return (
    <div id="footer-bottom">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md copyright">
            <p>
              © 2023 alemdar teknik ltd. All rights reserved. made by{" "}
              <a href="https://teddywebdev.click/">teddy-webdev</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer, FooterBottom };
