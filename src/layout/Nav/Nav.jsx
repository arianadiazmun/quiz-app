import { Link } from "react-router-dom";
export default function Nav () {
    return (
    <nav>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        
    </nav>
    )
}