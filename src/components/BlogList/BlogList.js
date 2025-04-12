import { useNavigate } from 'react-router-dom';
import './blogList.css';

const BlogList = ({data}) => { 
    const navigate = useNavigate();

    return ( 
        <div className="blog-list">
            {
                data && data.map(blog=>(
                    <article key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p className="post-date">{blog.date}</p>
                        <p>{blog.excerpt}</p>
                        <button onClick={()=>navigate(`/blogs/${blog.id}`)}>Read more →</button>
                    </article>  
                ))
            }  
            
        </div>
     );
}
 
export default BlogList;