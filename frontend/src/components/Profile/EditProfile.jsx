import Select from "react-select";
import { useState } from "react";
import { useFormFields } from "../../services/useFormFields";
import MentorAreas from "../../data/mentorAreas";

export default function EditProfile({ onSubmit, profileInfo }) {

  const [fields, handleFieldChange] = useFormFields({ ...profileInfo });
  const [mentorArea, setMentorArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fields.mentor) setMentorArea('');
    onSubmit({ ...profileInfo, ...fields, mentorArea });
  };

  const handleMentorArea = ({value}) => setMentorArea(value);


<<<<<<< HEAD
    return (
      <form onSubmit={handleSubmit} className="profile-page">
        <div className="profile-form">
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
=======
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            placeholder="Your name"
            id="name"
            value={fields.name || ""}
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
          Open for mentoring others:
          <input
            id="mentor"
            checked={fields.mentor || false}
            onChange={handleFieldChange}
            type="checkbox"
          />
          <Select
            isDisabled={!fields.mentor}
            placeholder="Choose area"
            id="mentorArea"
            options={MentorAreas}
            onChange={handleMentorArea}
          />
>>>>>>> f256a91579df38f8df960f1c698e120ef5685be2
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
