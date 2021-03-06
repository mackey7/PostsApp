import React from 'react';
import { store } from './Store/store'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HomePage } from './Pages/HomePage'
import { UserDetailsPage } from './Pages/UserDetailsPage'
import { PostDetailsPage } from './Pages/PostDetailsPage'
import { NotFound404 } from './Components/ErrorPageComponent/404'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/user/:id">
            <UserDetailsPage />
          </Route>
          <Route exact path="/user/:id/:type">
            <PostDetailsPage />
          </Route>
          <Route component={NotFound404} />
        </Switch>
      </Router >
    </Provider>
  )
}

export default App;
