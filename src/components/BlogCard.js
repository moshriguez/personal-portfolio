import React from "react";

const BlogCard = ({ blog }) => {
    const { name, brief, time, image, url, tags } = blog

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
        <a href={url} target="_blank"><h3>{name}</h3></a>
        <div className="blog-card-data">
            <p>{time} minute read</p>
            <div className="tags">
                {renderTags()}
            </div>
        </div>
        <p>{brief}</p>
    </div>

    )
}

export default BlogCard