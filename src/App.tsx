import React, { useEffect, useState } from 'react';
import './App.css';
import Article from "./components/Article";
import CautionTape from "./components/CautionTape";
import Grid from "./assets/background-grid.png";

const page = "subfile";

function App() {

  const [markdown, setMarkdown] = useState("");

  // useEffect(() => {
  //   fetch(`${page}.md`, { headers: { 'Content-Type': 'text/markdown', 'Accept': 'text/markdown' } })
  //     .then((res) => res.text())
  //     .then((text) => { console.log("text", text); setMarkdown(text) });
  // }, [page]);

  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        background: `url(${Grid}`,
        "animation": "scroll 600s linear infinite",
        top: 0,
        left: 0,
      }}
    >
      <header className="App-header">
        <CautionTape text={"Under Construction"}/>
      </header>
    </div>
  );
}

export default App;
