import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
    return (  
        <header>
            <h1>My Simple Blog</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">New</Link>
            </nav>
        </header> 
    );
}
 
export default Header;