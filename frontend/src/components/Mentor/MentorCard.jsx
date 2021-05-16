export default function MentorCard( {mentorInfo} ) {

    return (
        <div>
            <p>Name:</p>
            <p>{mentorInfo.name}</p>
            <p>Surname: </p>
            <p>{mentorInfo.surname}</p>
            <p>I am from: </p>
            <p>{mentorInfo.countryFrom}</p>
            <p>I live in: </p>
            <p>{mentorInfo.liveIn}</p>
            <p>Bio: </p>
            <p>{mentorInfo.bio}</p>
            <p> Can mentor in: </p> 
            <p>{mentorInfo.mentorArea}</p>
        </div>
    )
}