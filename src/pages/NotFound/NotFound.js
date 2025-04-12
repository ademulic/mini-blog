import { useNavigate } from "react-router-dom";
import './notFound.css';
const NotFound = () => {
    const navigate = useNavigate();
    return ( 
        <section className="not-found">
            <h1>404 Not Found</h1>
            <p>Ooops, the page you are trying to access doesn't exist</p>
            <button onClick={()=>{navigate('/')}}>GO to Home Page</button>
        </section>
     );
}
 
export default NotFound;