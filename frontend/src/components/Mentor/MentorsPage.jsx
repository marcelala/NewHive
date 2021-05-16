import { useEffect, useState } from "react";
import ProfileApi from "../../api/ProfileApi";
import MentorCard from "../Mentor/MentorCard";

export default function MentorsPage () {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        ProfileApi.getAllMentors()
        .then(({ data }) => setMentors(data))
        .catch((err) => console.error(err));
    }, [setMentors]);

    const MentorsArray = mentors.map((mentor) => (
        <MentorCard key={mentor.id} mentorInfo={mentor}/>
    ))

    return (
        <div>
            {MentorsArray}
        </div>
    )
}