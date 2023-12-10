import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const page = "subfile";

function App() {

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    console.log("this runs at all")
    fetch(`${page}.md`, { headers: { 'Content-Type': 'text/markdown', 'Accept': 'text/markdown' } })
      .then((res) => res.text())
      .then((text) => { console.log("text", text); setMarkdown(text) });
  }, [page]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{markdown}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
