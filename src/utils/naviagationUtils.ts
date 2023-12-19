import toc from "../toc.json";

interface ArticleEntry {
  name:string;
}

interface TableOfContents {
  [key: string]: ArticleEntry;
}

const TOC:TableOfContents = toc;


export { TOC };
export type { ArticleEntry };
