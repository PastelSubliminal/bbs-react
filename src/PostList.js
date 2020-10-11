import React from 'react'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'

export default function PostList(props) {
  var [posts, loading] = useFetch('/api/posts')

  if (loading) {
    return <div>loading...</div>
  } else {
    return (
      <div>
        {
          posts.map(post => (
            <div key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
          ))
        }
      </div>
    )
  }

}
