import { Link } from "react-router-dom";
import Instagram from "../assets/images/icons/instagram.svg";
import Twitter from "../assets/images/icons/twitter.svg";

export default function Footer () {
    return (
    <div className="footer">
        <ul className="socials">
            <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram"><img className="social-media-logo" src={Instagram} title="Instagram" alt="instagram icon in brown color"/></a>
            </li>
            <li>
                <a href="https://www.twitter.com" target="_blank" rel="noreferrer" title="Twitter"><img className="social-media-logo" src={Twitter} title="Twitter" alt="twitter icon in brown color"/></a>
            </li>
        </ul>
        <ul className="socials">
            <li>
                <Link to="/about">
                    <p>About</p>
                </Link>
            </li>
            <li>     
            <Link to="/guidelines">
            <p>Community Guidelines</p>
            </Link>
            </li>
            <li>
            <Link to="/contact">
                    <p>Contact us</p>
            </Link>
            </li>
        </ul>
    </div>
    )
}