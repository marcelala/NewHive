export default function AboutUs() {
    //Properties
    const aboutPictureObject = require (`../assets/images/about/about3-picture1.jpg`);
    const about2PictureObject = require (`../assets/images/about/about2-picture1.jpg`);
    const storyPictureObject = require (`../assets/images/about/story.jpg`);
    const matchPictureObject = require (`../assets/images/about/match.jpg`);
    const aboutPictureURL = aboutPictureObject.default;
    const about2PictureURL = about2PictureObject.default;
    const storyPictureURL = storyPictureObject.default;
    const matchPictureURL = matchPictureObject.default;

    return (
        <div class="about">
            <h1>Welcome to NewHive!</h1>
            <h2>A space for immigrant women and non-binary with the feminist vision to find each other and come together</h2>
            <div className="about-grid">
            <div className="about-section">
                <div className="about-photo">
                    <img src={storyPictureURL} alt="Three ladies are talking and looking happy"/>
                </div>
                <div className="about-content">
                    <h3>Story</h3>
                    <p>
                    NewHive community was founded in Stockholm in 2021 with an ambitious mission to transform the world into a place where migrant, refugee and ethnic minority women do not only act as recepients of help but decision-makers and leaders, fully in charge of their own lives. We have created a space for immigrant women and non-binary with the feminist vision to find each other, come together and find ground for collaborative work across our differences. Our members create safe spaces for the most discriminated against persons in our societies - migrant and refugee women. Where they come to heal, exchange, learn and co-create their own lives and stories.
                    </p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-content">
                    <h3>Purpose</h3>
                    <p>
                    NewHive is a community for women and non-binary people who immigrated to Sweden. At NewHive, we provide a safe place for discussions and networking: you can share your thoughts or ask questions, connect with people who have been through the same things you are going through. We know that moving to a new country can be tough, so that’s why we are here for you! We share information on organisations in Sweden that help newcomers, as well as hand picked content about Swedish life and culture. We also create mentorship opportunities.
                    </p>
                </div>
                <div className="about-photo">
                    <img src={about2PictureURL} alt="2 hands fist-bumping"/>
                </div>
            </div>
            <div className="about-section">
                <div className="about-photo">
                    <img src={aboutPictureURL} alt="Three ladies are talking and looking happy"/>
                </div>
                <div className="about-content">
                    <h3>NewHive Mentors</h3>
                    <p>
                    In spite of high qualifications and very good Swedish language skills, immigrant women find it extremely difficult to find adequate work in Sweden. In many business branches, mentoring programmes have proved to be a good door opener, a basis on which contacts can be built up and positions opened up. NewHive’s Mentorship page is created to connect you with other immigrant women and non-binary people to develop communication skills, expand your viewpoints, and consider new ways of approaching situations.. Both mentors and mentees can advance their careers in the process.</p>
                </div>
            </div>
            <div className="about-section">
                <div className="about-content">
                    <h3>What is Mentoring?</h3>
                    <p>
                    Mentoring is a relationship between two people with the goal of professional and personal development. The "mentor" is usually an experienced individual who shares knowledge, experience, and advice with a less experienced person, or "mentee". Mentors become trusted advisers and role models – people who have "been there" and "done that." They support and encourage their mentees by offering suggestions and knowledge, both general and specific. The goal is to help mentees improve their skills and, hopefully, advance their careers.</p>
                </div>
                <div className="about-photo">
                    <img src={matchPictureURL} alt="2 hands fist-bumping"/>
                </div>
            </div>
            </div>
        </div>
    )
}