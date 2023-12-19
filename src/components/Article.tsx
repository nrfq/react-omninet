import React from "react";
import Markdown from "react-markdown";
import Blockquote from "./markdown/blockquote";
import Heading from "./markdown/heading";
import ArticleLink from "./markdown/ArticleLink";

function Article({ text }: { text:(string|undefined) }) {

  return (
    <div style={{ border: "1px dashed #991e2a", color: "black", textAlign: "left", margin: 10 }}>
      <Markdown
        components={{
          blockquote: Blockquote,
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          a: ArticleLink,
        }}
      >
        {text}
      </Markdown>
    </div>
  )
}

export default Article;
