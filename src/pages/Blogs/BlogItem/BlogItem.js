import React from 'react';
import './BlogItem.css'

const BlogItem = ({blog}) => {
    const {title, description} = blog;
    return (
        <div className='blog-item'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default BlogItem;