import { Link, useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {
    const navigate = useNavigate();
    return (  
        <header>
            <h1 onClick={()=>{navigate('/')}}>My Simple Blog</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">New</Link>
            </nav>
        </header> 
    );
}
 
export default Header;