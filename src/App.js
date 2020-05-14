import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import VideoLibrary from './video-library/videoLibrary'
import "./App.css";
import Header from "./components/header/header";

const Error = ()=><div className="error-page"><h5>Page Not Found!</h5></div>

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={VideoLibrary}/>
            <Route path="/buy-plan" component={Error}/>
            <Route path="/view-plans" component={Error}/>
            <Route path="/login" component={Error}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
