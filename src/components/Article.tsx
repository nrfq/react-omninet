import React from "react";
import Markdown from "react-markdown";
import Blockquote from "./markdown/blockquote";
import Heading from "./markdown/heading";

function Article({ text }: { text:(string|undefined) }) {

  return (
    <div style={{ border: "1px dashed #991e2a", color: "black", textAlign: "left" }}>
      {text != null
        ? (
          <Markdown
            components={{
              blockquote: Blockquote,
              h1: Heading,
              h2: Heading,
              h3: Heading,
              h4: Heading,
            }}
          >
            {text}
          </Markdown>
        )
        : "Content could not be found."
      }
    </div>
  )
}

export default Article;
