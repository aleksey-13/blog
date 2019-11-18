import React from 'react';

import classes from './full-post.module.css';

const fullPost = (props) => {

    const { title, img, content, date, author } = props.data;

    const dateTime = date.replace(/T/, ' at ').replace(/Z/, '');

    return (
        <div className={classes.full_post}>
            <div className={classes.wrap}>
                <div className={classes.title_wrap}>
                    <h1>{title}</h1>
                    <p>
                        <span>{author}</span>
                        &nbsp;
                        <span>{dateTime}</span> 
                    </p>
                </div>
                <div className={classes.img_wrap}>
                    <img src={img} alt={title}/>
                </div>

                <div className={classes.description_wrap}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default fullPost;
