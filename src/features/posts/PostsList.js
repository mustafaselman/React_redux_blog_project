import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useEffect } from "react";

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts) //store kaydettıgını selector ıle cekıyorsun
    const postStatus = useSelector(getPostsStatus) //store kaydettıgını selector ıle cekıyorsun
    const error = useSelector(getPostsError) //store kaydettıgını selector ıle cekıyorsun

    useEffect(()=> {
        if(postStatus === 'idle'){
            dispatch(fetchPosts())
        }
    },[postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }
        

  return (
    <section>
        <h2>Posts</h2>
        {content}    
    </section>
  )
}

export default PostsList