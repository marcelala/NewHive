import React from "react";

export default function EditProfile () {
    const frameObject = require (`../../assets/images/profile/Photo.jpg`);
    const frameURL = frameObject.default;

    return (
        <div>
            <img src={frameURL} alt="an illustration frame"/>
            <div>
                <h2>Personal Information</h2>
                <p>I am from:</p>
                <textarea />
                <p>I live in:</p>
                <textarea />
                <p>Bio:</p>
                <textarea />
            </div>
            <div>
                <p>Open for mentoring others:</p>
                <input type="checkbox"/>
                <textarea />
            </div>
            <div>
                <button>Change Photo</button>
                <button>Save Changes</button>
            </div>
        </div>
    )
}