export default function MentorCard( {mentorInfo} ) {
    const photoObject = require ("../../assets/images/profile/mentor-photo.jpg");
    const photoURL = photoObject.default;

    return (
        <div className="mentor">
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
                </div>
            </div>
        </div>
    )
}