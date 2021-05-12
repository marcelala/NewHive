import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { LoginForm } from "./auth/LoginForm";


export const Home = () => {

    return(
<section className="home">
<Banner/>

<div className="home__join">
    <h2>Click here and join our community now!</h2>

    <h3>Already a user? Login here</h3>
</div>
<div className="home__features">
        <div className="home__features-meet">
        <FontAwesomeIcon
                className="home__post"
                icon={["far", "edit"]}
                />
        <h3>Meet</h3>
        <h4>Explore topics and write posts to get to know others</h4>
        </div>
        <div className="home__features-mentorship">
        <h3>Mentorship</h3>
        <h4>Find someone who can help you</h4>
        <FontAwesomeIcon
                className="home__mentor"
                icon={["fa", "people-carry"]}
                />
        </div>
        <div className="home__features-connect">
        <FontAwesomeIcon
                className="home__connect"
                icon={["fab", "connectdevelop"]}
                />
        <h3>Connect</h3>
        <h4> Add connections to you new network </h4>
        </div>

</div>
<div className="login">
{/* <LoginForm/> */}
</div>

<Footer/>
</section>

    )
}


<div>Home Page</div>