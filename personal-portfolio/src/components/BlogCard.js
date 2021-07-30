import React from "react";
import { motion } from "framer-motion";
import { risingDiv } from "../helpers/animation";

const BlogCard = ({ blog }) => {
    const { name, brief, time, image, tags } = blog

    const renderTags = () => {
        return (
            <>
            {tags.map((tag, i) => {
                return <span key={i} className="tag" >{tag}</span>
            })}
            </>
        )
    }

    return (
    <div className="blog-card">
        <div className="blog-img">
            <img src={image} alt="blog splash pic" />
        </div>
        <div className="blog-info" >
            <h3>{name}</h3>
            <div className="blog-card-data">
                <p>{time} minute read</p>
                <div className="tags">
                    {renderTags()}
                </div>
            </div>
            <p>{brief}</p>
        </div>
    </div>

    )
}

export default BlogCard