import React, { Component } from 'react'
import Context from "../context";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  //renders the header component including logo and header links
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
           <div>
             <div class="header">
             <div className="grid">
                <div className="img1">
                <img src={require("../images/1.png")}  height="200" width="250"/></div>
                <div className="img2">
                <img src={require("../images/logo2.png")}  height="70" width="250"/></div>

                <div className="img3">
                <img src={require("../images/logo3.png")}  height="200" width="250"/></div>
                </div> 
                </div> 
            <div id="he">
              <h1>أستمارة تسجيل منظمة أجنبية</h1>
              </div> 
              <div id="he1">
              <h2> نرجو التفضل بالموافقة على تسجیل فرع منظمتنا في العراق وفقا للمعلومات الاتیة</h2>
              </div> 
              </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default Header;

