import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         这是第二页
         <Link to='/third-page'>点击跳转到第三页</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
