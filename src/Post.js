import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'
import useInput from './useInput'
import Axios from './api.js'

function sendComment(e, postId, commentText) {
  e.preventDefault()

  Axios.post('/api/comment', {
    postId,
    content: commentText,
  })
}

export default function Post(props) {
  var { id } = useParams()

  var [data, loading] = useFetch('/api/post/' + id)
  var ref = useRef()


  if (loading) {
    return null
  } else {
    return <div>
      <h2>{data.post.title}</h2>
      <section>
        {data.post.content}
      </section>
      <h4>看看评论：</h4>

      <ul>
        {
          data.comments.map(comment => (
            <li>
              <span>{comment.content}</span> BY <Link to={`/user/${comment.userId}`}>{comment.name}</Link>
            </li>
          ))
        }
      </ul>
      <h4>留下一条评论吧：</h4>
      <form onSubmit={(e) => sendComment(e, id, ref.current.value)}>
        <textarea ref={ref}></textarea>
        <button>发布评论</button>
      </form>
    </div>
  }
}
