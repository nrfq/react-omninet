import React from "react";
import Markdown from "react-markdown";

function Article({ text }: { text:string }) {

  return (
    <Markdown children={text}/>
  )
}

export default Article;
