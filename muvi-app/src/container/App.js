import React from 'react';

import '../App.css';
import Main from './main'
import  {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {storeRoot} from '../store';
import jwtDecode from 'jwt-decode';
import Navbar from './navbar'
import {newUser,useToken} from '../store/action/user'



const store = storeRoot();

if(localStorage.jwtToken){
  useToken(localStorage.jwtToken);

  try{
      store.dispatch(newUser(jwtDecode(localStorage.jwtToken)))
  }catch(e){
      store.dispatch(newUser({}))
  }
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <Main />
    </div>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
