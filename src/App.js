import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from './PostList'
import Post from './Post.js'
import Login from './Login.js'
import api from './api.js'

import {
  Router,
  HashRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useHistory,
  useRouteMatch
} from "react-router-dom"

function App() {
  var [isLogin, setIsLogin] = useState(false)

  // useEffect(() => {
  //   api.get('/api/userinfo').then(res => {
  //     if (res.data.code == 0) {
  //       setIsLogin(true)
  //     }
  //   })
  // }, [])

  function loginSuccess(userInfo) {
    setIsLogin(true)
  }

  return (
    <HashRouter>
      <div className="App">
        <nav>
          <Link to="/">首页</Link>
          |
          {isLogin
            ? <Link to="/add-post">发贴</Link>
            : <Link to="/login">登陆</Link>
          }


          <Switch>
            <Route path="/" exact>
              <PostList/>
            </Route>
            <Route path="/login">
              <Login onLogin={loginSuccess}/>
            </Route>
            <Route path="/post/:id" exact>
              <Post/>
            </Route>
          </Switch>
        </nav>
      </div>
    </HashRouter>
  );
}

export default App;
