import React from "react";
import { Link } from "react-router-dom";
import { ExtraProps } from "react-markdown";

type ArticleLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
  & React.ClassAttributes<HTMLAnchorElement>
  & ExtraProps

function ArticleLink(props:ArticleLinkProps) {
  const { children, href, className } = props;
  return <Link className={className} to={`/article/${href}`}>{children}</Link>;
}

export default ArticleLink;
