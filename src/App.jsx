import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <div className="footer-main">
            <div className="footer-brand">
              <a href="/" className="logo">
                <span className="logo-mark">W</span>
                <span>
                  WeMake<span className="lime">Web</span>
                </span>
              </a>

              <p>
                We build websites
                <br />
                that build businesses.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <span>EXPLORE</span>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
              </div>

              <div>
                <span>CONNECT</span>
                <a href="/contact">Start a project</a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a href="mailto:hello@wemakeweb.com">
                  Email us
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 WeMake Web. All rights reserved.</span>
            <span>DESIGNED WITH INTENT.</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}