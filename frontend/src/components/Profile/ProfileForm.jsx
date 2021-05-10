import React from "react";

export default function ProfileForm ({onSubmit}) {
   // const [id, setId] = React.useState("");
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [countryFrom, setCounrtyFrom] = React.useState("");
    const [liveIn, setLiveIn] = React.useState("");
    const [bio, setBio] = React.useState("");
   // const [mentor, setMentor] = React.useState("");
    const [mentorArea, setMentorArea] = React.useState("");

    const handleSubmit = () => {
        onSubmit({
            name: name,
            surname: surname,
            countryFrom: countryFrom,
            liveIn: liveIn,
            bio: bio,
            //mentor: mentor,
            //mentorArea: mentorArea,
        });

        setName("");
        setSurname("");
        setCounrtyFrom("");
        setLiveIn("");
        setBio("");
        //setMentor("");
        //setMentorArea("");

    };

    return (
        <form>
            <div className="profile-form">
            <div>
                <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <input placeholder="Your surname" value={surname} onChange={(e) => setSurname(e.target.value)} type="text" />
                <input placeholder="Country from" value={countryFrom} onChange={(e) => setCounrtyFrom(e.target.value)} type="text" />
                <input placeholder="Live in" value={liveIn} onChange={(e) => setLiveIn(e.target.value)} type="text" />
                <input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} type="text" />
            </div>
            <div>
                <button className="btn" type="button" onClick={handleSubmit}>Save</button>
            </div>
            </div>
        </form>
    )
}
