import React,{Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import './Thank.css';

function Thank() {
  return (
    <div className="Thank">
   
        <div className="Font">
          Thank you for your feedback!
        </div>

        <img src="https://i.loli.net/2019/12/06/jIGE2MBVnNwaFD5.jpg" />

    </div>
  );
}

export default Thank;
