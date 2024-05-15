import {useState} from "react";
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

    return (
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs !" handleDelete = {handleDelete}/>

        </div>
    );
}

export default Home;