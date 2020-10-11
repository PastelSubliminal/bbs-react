import React, { useRef } from 'react'
import Axios from './api.js'
import { useHistory } from 'react-router-dom'

export default function Login(props) {
  var usernameRef = useRef()
  var passwordRef = useRef()
  var captchaRef = useRef()
  var history = useHistory()

  async function submit(e) {
    debugger
    e.preventDefault()

    var res = await Axios.post('/login', {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
      captcha: captchaRef.current.value,
    })

    if (res.data.code == 0) {
      props.onLogin && props.onLogin(res.data)
      history.push('/')
    } else {
      alert(res.data.msg)
    }

  }

  return (
    <div>
      <form onSubmit={submit}>
        Username: <input ref={usernameRef} type="text" /><br/>
        Password: <input ref={passwordRef} type="password" /><br/>
        <img src="/captcha" /><br/>
        Captcha: <input ref={captchaRef} type="text" /><br/>
        <button>登陆</button>
      </form>
    </div>
  )
}
