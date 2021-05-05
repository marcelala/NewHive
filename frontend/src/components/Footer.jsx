import { Link } from "react-router-dom";
import Instagram from "../assets/images/icons/instagram.svg";
import Twitter from "../assets/images/icons/twitter.svg";

export default function Footer () {
    return (
    <div className="footer">
        <Link to="/about">
            <h3>About us</h3>
        </Link>
        <a href="mailto:info@community.com" target="_blank" rel="noreferrer" title="Email">
            <h3>Contact us</h3>
        </a>
        <h3>Follow us:</h3>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram"><img class="social-media-logo" src={Instagram} title="Instagram" alt="instagram icon in brown color"/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" title="Twitter"><img class="social-media-logo" src={Twitter} title="Twitter" alt="twitter icon in brown color"/></a>
    </div>
    )
}