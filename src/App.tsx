import React, { useEffect, useState } from 'react';
import './App.css';
import Article from "./components/Article";
import CautionTape from "./components/CautionTape";
import Grid from "./assets/background-grid.png";

const page = "subfile";

const WIP_MODE = false;

function App() {

  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (!WIP_MODE) {
      fetch(`markdown/${page}.md`, {headers: {'Content-Type': 'text/markdown', 'Accept': 'text/markdown'}})
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [page]);

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
        {WIP_MODE
          ? <CautionTape text={"Under Construction"}/>
          : <Article text={markdown}/>
        }
      </header>
    </div>
  );
}

export default App;
