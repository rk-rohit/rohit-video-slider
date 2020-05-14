import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VideoLibrary from './video-library/videoLibrary'
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route to="/" component={VideoLibrary}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
