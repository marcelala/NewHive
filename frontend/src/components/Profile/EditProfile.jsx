import React from "react";

export default function EditProfile ({onSubmit, profileInfo}) {
   const [name, setName] = React.useState(profileInfo.name);
    const [surname, setSurname] = React.useState(profileInfo.surname);
    const [countryFrom, setCounrtyFrom] = React.useState(profileInfo.countryFrom);
    const [liveIn, setLiveIn] = React.useState(profileInfo.liveIn);
    const [bio, setBio] = React.useState(profileInfo.bio);
    //const [mentor, setMentor] = React.useState(false);
    const [mentorArea, setMentorArea] = React.useState(profileInfo.mentorArea);

    //const handleChecked = ({ target }) => {
    //setMentor(target.true);
//}

    const handleSubmit = () => {
        onSubmit({
            name: name,
            surname: surname,
            countryFrom: countryFrom,
            liveIn: liveIn,
            bio: bio,
            mentor: true,
            mentorArea: mentorArea,
        });
    };

    return (
        <form>
            <div>
            <div>
                <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <input placeholder="Your surname" textarea value={surname} onChange={(e) => setSurname(e.target.value)} type="text" />
                <input placeholder="Country from" textarea value={countryFrom} onChange={(e) => setCounrtyFrom(e.target.value)} type="text" />
                <input placeholder="Live in" value={liveIn} onChange={(e) => setLiveIn(e.target.value)} type="text" />
                <input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} type="text" />
                {/*<input type="checkbox" onChange={handleChecked} mentor={mentor} />*/}
                <input placeholder="Can mentor in" value={mentorArea} onChange={(e) => setMentorArea(e.target.value)} type="text" />
            </div>
            <div>
                <button className="btn" type="submit" onClick={handleSubmit}>Update</button>
            </div>
            </div>
        </form>
    )
}