/** @format */

import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <Header />

            <div className='app__body'>
              <SideBar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>

                <Route path='/'>
                  <h1 style={{ color: 'red' }}>Welcome to Chat room</h1>
                  <h2>
                    You can create or select the existing channels to communicate with the people.
                  </h2>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
