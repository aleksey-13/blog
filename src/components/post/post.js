import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './post.module.css';

const post = (props) => {
    const {title, description, img, id, author, date} = props.postData;

    const dateTime = date.replace(/T/, ' at ').replace(/Z/, '');

    console.log(dateTime)
    return (
        <li className={classes.post}>
            <div className={classes.image_wrap}>
                <NavLink to={`/post/${id}`} onClick={() => props.onClick(id)}>
                    <img src={img} alt={title}/>
                </NavLink>
            </div>
            
            <div className={classes.post_desc}>
                <p>
                    <span>{author}</span>
                    <span>{dateTime}</span> 
                </p>
                <h2>
                    <NavLink 
                        to={`/post/${id}`}
                        onClick={() => props.onClick(id)}
                    >
                        {title}
                    </NavLink>
                </h2>
                <p>{description}</p>
            </div>
        </li>
    );
};

export default post;
