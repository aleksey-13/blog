import React from 'react';

import Post from '../post';
import ErrorBoundary from '../error-boundary';
import Loader from '../loader/loader';

import classes from './post-group.module.css';

const postGroup = (props) => {

    const post = props.data.map((postData) => {
        return (
            <ErrorBoundary key={postData.id}>
                <Post 
                    postData={postData}
                    onClick={props.onClick}
                />
            </ErrorBoundary>
        );
    });

    return (
        <ul className={classes.post_group}>
            {props.loading ? <Loader /> : post}
        </ul>
    );
};

export default postGroup;
