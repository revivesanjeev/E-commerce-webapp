import React from "react";
import "./Footer.css";
import youtubeIcon from "./img/youtube.png";
import spotifyIcon from "./img/Spotify Logo.png";
import facebookIcon from "./img/Facebook Logo.png";

function Footer() {
  return (
    <div className="customcontainer">
      <h4 className="footertitle">The Generics</h4> {/* Corrected class name */}
      <div className="social-icons">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" className="icon" />
        </a>
        <a
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={spotifyIcon} alt="Spotify" className="icon" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
