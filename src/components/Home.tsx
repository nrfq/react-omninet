import React from "react";
import { Link } from "react-router-dom";
import { TOC } from "../utils/naviagationUtils";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {Object.values(TOC).map((article) => <Link to={`/article/${article.name}`}>{article.name}</Link>)}
    </div>
  );
};

export default Home;
