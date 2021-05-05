import React from "react";

export default function AboutUs() {
    //Properties
    const aboutPictureObject = require (`../assets/images/about/about-picture.jpg`);
    const about2PictureObject = require (`../assets/images/about/about2-picture.jpg`);
    const aboutPictureURL = aboutPictureObject.default;
    const about2PictureURL = about2PictureObject.default;

    return (
        <div className="about">
            <h1>Community Name</h1>
            <h2>(Pitch) Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <span>
                <img src={aboutPictureURL} alt="Three ladies are talking and looking happy"/>
                <h1>History</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                </p>
            </span>
            <span>
                <h1>Purpose</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ultricies nisi, euismod volutpat mauris elementum eget. In quis arcu nec ante tempor consectetur.
                </p>
                <img src={about2PictureURL} alt="2 hands fist-bumping"/>
            </span>
            <div>
            <button>Sign Up</button>
            </div>
        </div>
    )
}