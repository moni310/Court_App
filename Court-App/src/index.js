import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Case from './components/Case';
import Normel from './components/Normel';
import Henious from './components/Henious';
import Form from './components/Form';
import Search from './components/Search';

ReactDOM.render(
  <BrowserRouter>
  <App/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Case" element={<Case/>}></Route>
      <Route path="/Normel" element={<Normel/>}></Route>
      <Route path="/Henious" element={<Henious/>}></Route>
      <Route path="/Form" element={<Form/>}></Route>
      <Route path="/search" element={<Search/>}></Route>

    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
