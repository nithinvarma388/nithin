import React from "react";
import PRAVALLOGO from './assets/PRAVALLOGO.png'
import search from './assets/search.png'
import editor from './assets/editor.png'
import play from './assets/play.png'
import  './Page1.css'
export const Page1=()=>{
    return(
        <div>
        <div className="a">
            <div className="b">
              <img src={PRAVALLOGO} alt="" />
              <p>why praval</p>
              <p>life at praval</p>
              <div className="d">
                <img src={search} alt="" />
                <p>sign in</p>
              </div>
            </div>


        </div>
        <div className="r">
           <a href="https://www.w3schools.com/html/html_links.asp">Home</a>
           <p>  Training</p>
        </div>
        <div className="e">
            <div className="f">
              <img src={editor} alt="" />
            </div>
            <h1>Getting started with praval Training</h1>
            <div className="h"><p>Learn How to code here and learn programing fundamentals that can be helpful for any langauge you learn.get started today with resources,tips,and tricks from praval trainer</p></div>
            <div className="g">
              <img src={play} alt="" />
              <p>start now</p>
            </div>
        </div>
        </div>
    )
}; 