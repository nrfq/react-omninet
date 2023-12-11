import React from "react";
import { ExtraProps } from "react-markdown";

type blockquoteProps = React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement> & ExtraProps

function Blockquote(props:blockquoteProps){

  const { children} = props;
  return (
    <blockquote className={"md-blockquote"} >
      {children}
    </blockquote>
  );
}

export default Blockquote;
