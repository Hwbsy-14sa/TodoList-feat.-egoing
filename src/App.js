import React, { Component } from 'react';
import './App.css';

import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : "Welcome",
      subject: {title: "WEB", sub: "World wide web!"},
      welcome : {title : "Welcome", desc : "Hello React!"},
      content : {title: "HTML", desc : "HTML is hyperText Markup Language"},
      contents : [
        {id: 1, title : "HTML", desc : "HTML is for information..."},
        {id: 2, title : "CSS", desc : "CSS is for information..."},
        {id: 3, title : "JavaScript", desc : "JavaScript is for information..."}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode === "Welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read") {
      _title = this.state.content[0].title
      _desc = this.state.content[0].desc
    }
    return (
      <div className="App">
        {/*<Subject 
          title= {this.state.subject.title} 
          sub= {this.state.subject.sub}>
        </Subject>*/}
        <header>
          <h1><a href="/">{this.state.subject.title}</a></h1>
          <p>{this.state.subject.sub}</p>
        </header>
        <Toc data = {this.state.contents}> </Toc>
        <Content 
          title={_title} 
          desc={_desc}>
        </Content>
      </div>
    );
  }
}

//TODO: 이벤트 설치 강의 수강 필요
export default App;
