import React from "react";
import Footer from "../components/Footer";

export default function AboutUs() {
    //Properties
    const aboutPictureObject = require (`../assets/images/about/about3-picture1.jpg`);
    const about2PictureObject = require (`../assets/images/about/about2-picture1.jpg`);
    const aboutPictureURL = aboutPictureObject.default;
    const about2PictureURL = about2PictureObject.default;

    return (
        <div class="about">
            <h1>Community Name</h1>
            <h2>(Pitch) Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="about-grid">
            <div className="about-section">
                <div className="about-photo">
                    <img src={aboutPictureURL} alt="Three ladies are talking and looking happy"/>
                </div>
                <div className="about-content">
                    <h3>History</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                    </p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-content">
                    <h3>Purpose</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                    </p>
                </div>
                <div className="about-photo">
                    <img src={about2PictureURL} alt="2 hands fist-bumping"/>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}