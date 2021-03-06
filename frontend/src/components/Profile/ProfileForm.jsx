import { useState } from "react";

export default function ProfileForm ({onSubmit}) {
   // const [id, setId] = React.useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [countryFrom, setCounrtyFrom] = useState("");
    const [liveIn, setLiveIn] = useState("");
    const [bio, setBio] = useState("");
    //const [mentor, setMentor] = React.useState(false);
    const [mentorArea, setMentorArea] = useState("");

    const handleSubmit = () => {
        onSubmit({
            name: name,
            surname: surname,
            countryFrom: countryFrom,
            liveIn: liveIn,
            bio: bio,
            //mentor: mentor,
            mentorArea: mentorArea,
        });

        setName("");
        setSurname("");
        setCounrtyFrom("");
        setLiveIn("");
        setBio("");
        //setMentor(Boolean);
        setMentorArea("");

    };

    return (
        <form>
            <div>
            <div>
                <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
                <input placeholder="Your surname" value={surname} onChange={(e) => setSurname(e.target.value)} type="text" />
                <input placeholder="Country from" value={countryFrom} onChange={(e) => setCounrtyFrom(e.target.value)} type="text" />
                <input placeholder="Live in" value={liveIn} onChange={(e) => setLiveIn(e.target.value)} type="text" />
                <input placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} type="text" />
               {/*<input type="checkbox" value={mentor} onChange={handleChecked} />*/}
                <input placeholder="Can mentor in" value={mentorArea} onChange={(e) => setMentorArea(e.target.value)} type="text" />
            </div>
            <div>
                <button className="btn" type="button" onClick={handleSubmit}>Save</button>
            </div>
            </div>
        </form>
    )
}
