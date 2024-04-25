import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownRenderer from './components/markdownRenderer/markdownRenderer'


function App() {
  const toast_md = require("./markdownFiles/toast.md")
  return (
    <div className="App">
      <MarkdownRenderer markdownFile={toast_md} header='Toast'></MarkdownRenderer>
    </div>
  );
}

export default App;
