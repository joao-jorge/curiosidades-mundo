import React from 'react'

const Post = ({posts, loading}) => {

  return (
    <ul className="list-group mb-4">
      <li key={posts.id} className="list-group-item">
        {posts.title}a
      </li>
    </ul>
  )
}

export default Post
