import React, { Component, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import {PostNews, NewsPost} from '../components/common'
import trending from '../assets/mocks/trending'
import featured from '../assets/mocks/featured'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3 '
    }
}

const featuredConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height:'300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}
// inline config is always higher poriority


const mergeStyles = function (posts,config) {
    posts.forEach((post,index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)
mergeStyles(featured, featuredConfig)
const lastFeatured = featured.pop() // 순서가 상관있다, mergestyles 후에 가져오기

function News() {

    return (
        <section className="container home">
            <div className="row">
                <h1>featurd Posts</h1>
                <section className="featured-posts-container">
                    <PostNews posts={featured} columns={2} tagsOnTop={true}/>
                    <NewsPost post={lastFeatured} tagsOnTop={true}/>
                </section>
                <h1>Trending Posts</h1>
                <PostNews posts={trending} columns={3}/>
            </div>
        </section>
    );
}


export default News;

