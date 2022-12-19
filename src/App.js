import React  from 'react'
import {  BrowserRouter  , Route,  } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import './index.css';
import Contact from './routes/Contact';
import Project from './routes/Project';

function App() {
  return (
  <BrowserRouter>
  <Route exact path="/" component={Home} />
  <Route path="/About" component={About} />
  <Route path="/Contact" component={Contact} />
  <Route path="/Project" component={Project} />
 
  
  </BrowserRouter>
  );
}
export default App;
