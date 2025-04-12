import { useEffect, useState } from "react";
import BlogList from "../../components/BlogList/BlogList";

const Home = () => {

    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(()=>{
      setIsLoading(true);  
      fetch('http://localhost:8000/blogs').then(res=>{
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
        <section className="home">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && <BlogList data={data}/>  }
        </section>
     );
}
 
export default Home;