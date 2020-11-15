import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import MainPage from './pages/main'
import LoginPage from './pages/login'
import MyinfoPage from './pages/my-info'
import SearchPage from './pages/search'
import ErrprPage from './pages/error;'

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
`

function App() {
  return (
    <container>
      <Router>
        <Switch>
          <Route exact path="/" component="{MainPage}" />
          <Route path="/login" component="{LoginPage}" />
          <Route path="/myinfo" component="{MyinfoPage}" />
          <Route path="/search" component="{SearchPage}" />
          <Route component="{ErrorPage}" />
        </Switch>
      </Router>
    </container>
  )
}

export default App
