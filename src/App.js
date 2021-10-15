import React, { Component } from 'react';
import './App.css';

import Toc from './components/Toc';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Toc/>
        <Content title="HTML" desc="HTML is HyperText Markup Languague."></Content>
      </div>
    );
  }
}

//TODO: Component 강의 완료 => state 강의 학습 예정 (2021.10.16)
export default App;
