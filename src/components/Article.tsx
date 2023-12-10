import React from "react";
import Markdown from "react-markdown";

function Article({ text }: { text:string }) {

  return (
    <div style={{ backgroundColor: "white", border: "1px dashed #991e2a", color: "black" }}>
      <Markdown children={text}/>
    </div>
  )
}

export default Article;
