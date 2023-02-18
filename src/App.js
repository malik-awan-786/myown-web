import React  from 'react'
import {  BrowserRouter  , Route,  } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import './index.css';
import News from './routes/News';
import Support from './routes/Support';
import Login from './routes/Login';

function App() {
  return (
  <BrowserRouter>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/support" component={Support} />
  <Route path="/news" component={News} />
  <Route path="/login" component={Login} />
  </BrowserRouter>
  );
}
export default App;
