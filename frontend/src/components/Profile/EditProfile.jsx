//import { useState } from "react";
import {useFormFields} from '../../services/useFormFields';

export default function EditProfile ({onSubmit, profileInfo}) {
//    const [name, setName] = useState(profileInfo.name);
//     const [surname, setSurname] = useState(profileInfo.surname);
//     const [countryFrom, setCounrtyFrom] = useState(profileInfo.countryFrom);
//     const [liveIn, setLiveIn] = useState(profileInfo.liveIn);
//     const [bio, setBio] = useState(profileInfo.bio);

    //const [mentor, setMentor] = React.useState(false);

    // const [mentorArea, setMentorArea] = useState(profileInfo.mentorArea);
    const [fields, handleFieldChange] = useFormFields({...profileInfo});

    //const handleChecked = ({ target }) => {
    //setMentor(target.true);
//}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("updated", { ...profileInfo, ...fields });
        onSubmit({ ...profileInfo, ...fields });
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input
              placeholder="Your name"
              id="name"
              value={fields.name || ""}
              //   onChange={(e) => setUser(() => e.target.value)}
              onChange={handleFieldChange}
              type="text"
            />
            <input
              placeholder="Your surname"
              id="surname"
              value={fields.surname || ""}
              onChange={handleFieldChange}
              type="text"
            />
            <input
              placeholder="Country from"
              id="countryFrom"
              value={fields.countryFrom || ""}
              onChange={handleFieldChange}
              type="text"
            />
            <input
              placeholder="Live in"
              id="liveIn"
              value={fields.liveIn || ""}
              onChange={handleFieldChange}
              type="text"
            />
            <input
              placeholder="Bio"
              id="bio"
              value={fields.bio || ""}
              onChange={handleFieldChange}
              type="text"
            />
            {/*<input type="checkbox" onChange={handleChecked} mentor={mentor} />*/}
            {/* <input placeholder="Can mentor in" value={mentorArea} onChange={(e) => setMentorArea(e.target.value)} type="text" /> */}
          </div>
          <div>
            <button className="btn" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    );
}