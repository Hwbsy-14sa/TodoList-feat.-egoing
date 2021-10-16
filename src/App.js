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
      selected_content_id: 2,
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
    let _title, _desc = null;

    if(this.state.mode === "Welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read") {
      for(let i = 0; i < this.state.contents.length; i++) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        } 
      }
    }
    return (
      <div className="App">

        <Subject 
          title = {this.state.subject.title} 
          sub = {this.state.subject.sub}
          onChangePage = {() =>{
            this.setState({
              mode:'Welcome',
              selected_content_id : 0
            });
          }}>
        </Subject>

        <Toc 
        onChangePage={(id) => {
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          }) 
        }} 
        data = {this.state.contents}>
        </Toc>

        <Content 
          title = {_title} 
          desc = {_desc}>
        </Content>
        
      </div>
    );
  }
}

//TODO: create 기능구현 목차 수강 필요 (10/17)
export default App;
