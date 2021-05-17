import { useEffect, useState } from "react";
import Select from "react-select";

//Project files
import ProfileApi from "../../api/ProfileApi";
import MentorCard from "../Mentor/MentorCard";
import mentorAreas from "../../data/mentorAreas";

export default function MentorsPage () {
    const [mentors, setMentors] = useState([]);

    //Topic selector state
    const [selectedArea, setSelectedArea] = useState(undefined);
    const handleChange = (chosenValue) => {
        if (chosenValue) {
        setSelectedArea(chosenValue.value);
        } else {
        setSelectedArea(undefined);
        }
    };

    useEffect(() => {
        ProfileApi.getAllMentors()
        .then(({ data }) => setMentors(data))
        .catch((err) => console.error(err));
    }, [setMentors]);

      // Components
    const mentorsToShow = mentors.filter((mentor) => {
    if (selectedArea) {
      return mentor.mentorArea === selectedArea;
    } else {
      return true;
    }
  });

    const MentorsArray = mentorsToShow.map((mentor) => (
        <MentorCard key={mentor.id} mentorInfo={mentor}/>
    ))

    return (
        <div className="mentors-page">
            <div className="mentors-header">
            </div>
            <div className="mentors-title-centered">
                <div className="mentors-page-title">
                    <h1 id="mentor-h1">NewHive Mentors</h1>
                    <h2 id="mentor-h2">Get mentorship help from others!</h2>
                    <p>A mentorship can be rewarding to both people, personally and professionally. It's an opportunity to develop communication skills, expand your viewpoints, and consider new ways of approaching situations. And both partners can advance their careers in the process.</p>
                </div>
                <div className="mentor-selector">
                    <div>
                <Select
                    isClearable
                    className="mentor-filter"
                    placeholder="Choose field"
                    labelKey="label"
                    valueKey="id"
                    options={mentorAreas}
                    onChange={handleChange}
                    />
                    </div>
                </div>
            </div>
            <div className="mentors-card">
            {MentorsArray}
            </div>
        </div>
    )
}