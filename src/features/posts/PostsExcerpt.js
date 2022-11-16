import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import React from 'react'

const PostsExcerpt = ({post}) => {
  return (
    <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0,100)}</p>
                {/* burası post.content idi fetch işlemi ile post.body oldu */}
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
                <ReactionButtons post={post}/>
            </p>
        </article>
  )
}

export default PostsExcerpt