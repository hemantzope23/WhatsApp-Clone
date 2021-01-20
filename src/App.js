import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
// import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from './Login';
import { useStateValue } from './StateProvider';
// import firebase from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState(null);

  return (
    // BEM naming convention
    <div className="app">
        {!user ?(
          <Login />
        ) : (

          <div className="app__body">
          <Router>
          <Sidebar />
            <Switch>
    
              <Route path="/rooms/:roomId">    
                <Chat />
              </Route>

              <Route path="/">
                {/* <Chat /> */}
              </Route>
              
            </Switch>
          </Router>
        </div>
        )}
    </div>
  );
}

export default App;
