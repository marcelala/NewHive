import { Link } from "react-router-dom";

export default function Header () {
    return (
    <div className="main-header">
        <Link to="/">
            <h3>Home</h3>
        </Link>
    </div>
    )
}