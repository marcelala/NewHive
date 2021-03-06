
export default function InformationCard({ profileInfo }) {
  const { name, surname, countryFrom, liveIn, bio, mentorArea } = profileInfo;
  const item = localStorage.getItem("avatarNum");
  const photoObject = require(`../../assets/images/avatars/avatar${item}.jpg`);
  const photoURL = photoObject.default;
  
  function getFullName() {
    return `${name} ${surname}`
  }
  
  return (
    <div className="profile">
      <div className="profile-section">
        <div className="profile-photo">
          <div>
            <img src={photoURL} alt="a girl with a cup of tea" />
          </div>
        </div>
        <div className="profile-info">
          <p className="bold-p user-name">{getFullName()}</p>
          <p className="bold-p">I am from: </p>
          <p>{countryFrom}</p>
          <p className="bold-p">I live in: </p>
          <p>{liveIn}</p>
          <p className="bold-p">Bio: </p>
          <p>{bio}</p>
          <p className="bold-p"> Can mentor in: </p> <p>{mentorArea}</p>
        </div>
      </div>
    </div>
  );
}
