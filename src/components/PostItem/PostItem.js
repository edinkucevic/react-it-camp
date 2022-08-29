import React from "react";
import "./PostItem.css";

const PostItem = ({title , description }) => {
    return (
        <div className="post-item">
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    );

    };

    export default PostItem