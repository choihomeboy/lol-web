import React from 'react'
import {NewsPost} from '.'

export default function PostNews ({posts,columns, tagsOnTop}) {
    return (
        <section className="news" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            { posts.map((post,index) =>
                <NewsPost {...{post, index, tagsOnTop, key: index}}/>
            )}
            
        </section>
    )
}