import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopBar from './components/TopBar';
import AlbumsContainer from './components/AlbumsContainer';
import Login from './components/Login';
import Logout from './components/Logout';

import './styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Route path='/albums' component={AlbumsContainer}/>
      <Route path='/login' component={Login}/>
      <Route path='/logout' component={Logout}/>
      <Route exact path='/' render={() => (
        <Redirect
          to='/albums'
        />
      )} />
    </div>
  </div>
)

export default App;
