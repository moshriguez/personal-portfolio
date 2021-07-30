import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";
import { blogs } from "../helpers/blogs";
import BlogCard from "../components/BlogCard";

const Blogs = () => {

    const renderCard = () => {
        return blogs.map(blog => {
            return <BlogCard blog={blog}/>
        })
    }


    return (
        <motion.div className="watercolour-container" variants={risingDiv} initial="start" animate="end">
            <h2>Blogs</h2>
            <div className="blogs-container">
                {renderCard()}
            </div>

        </motion.div>
    )
}

export default Blogs