import { Link } from "react-router-dom";

export default function MentorCard( {mentorInfo} ) {
    const item = localStorage.getItem("avatarNum");
    const photoObject = require (`../../assets/images/avatars/avatar${item}.jpg`);
    const photoURL = photoObject.default;

    return (
        <div className="mentor">
                <Link to={`/user-profile/${mentorInfo.owner}/`}>
                <div className="mentor-section">
                <div className="mentor-photo">
                    <div>
                    <img src={photoURL} alt="a girl with a cup of tea"/>
                    </div>
                </div>
                <div className="mentor-info">
                    <p className="mentor-name">{mentorInfo.name} {mentorInfo.surname}</p>
                    <p>Can mentor you in:</p>
                    <p className="bold-p">{mentorInfo.mentorArea}</p>
                    <p>From {mentorInfo.countryFrom}, lives in {mentorInfo.liveIn}</p>
                    <p className="bold-p">About:</p>
                    <p>{mentorInfo.bio}</p>
                    <p>{mentorInfo.email}</p>
                    <p className= "bold-p">  Contact:</p>
                    <p> {mentorInfo.owner} </p>
                </div>
            </div>
            </Link>
        </div>
    )
}