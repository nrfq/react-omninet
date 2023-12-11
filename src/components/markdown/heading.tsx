import React from "react";
import { ExtraProps } from "react-markdown";

type headingProps = React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & ExtraProps;

function Heading(props:headingProps) {
  const { children, ...rest } = props;
  const HeadingTag = props.node?.tagName || "h2";
  // TODO: Figure out the proper TS way to do this, not just ts-ignore
  // @ts-ignore
  return <HeadingTag {...rest} className={"heading"} >{children}</HeadingTag>;
}

export default Heading;
