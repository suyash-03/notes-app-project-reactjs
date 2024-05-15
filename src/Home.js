import {useState,useEffect} from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs,setBlogs] =  useState([
        {title: 'My New Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'luigi', id: 2},
        {title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState('mario');

    /*
    useEffect hook runs Every Time there's a new render
    If you use useState inside useEffect you can get inside an infinite loop

    Passing an empty dependency array makes sure the useEffect hooks runs only once at startup
    */


    useEffect(() => {
        console.log('useEffect Ran');
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs !" handleDelete = {handleDelete}/>
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;