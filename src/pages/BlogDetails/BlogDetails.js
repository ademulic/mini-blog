import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import './blogDetails.css';
const BlogDetails = () => {

    const {id} = useParams();

    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(()=>{
      setIsLoading(true);  
      fetch(`http://localhost:8000/blogs/${id}`).then(res=>{
        if(!res.ok){
            throw Error('Could not fetch data'); 
        }else{
            return res.json();
        }
      }).then(
        (data)=>{
            setError(null);
            setIsLoading(false);
            setData(data);
        }
      ).catch(err=>{
        setError(err.message);
        setIsLoading(false);
      });  
    },[]);

    return ( 
        <section className="blog-details">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data
            &&
            <div>
                <h1>{data.title}</h1>
                <p>{data.date}</p>
                <p>{data.excerpt}</p>    
            </div>}
        </section>
    );
}
 
export default BlogDetails;