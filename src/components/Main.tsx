import React, {useEffect, useState} from "react";
import CautionTape from "./CautionTape";
import Article from "./Article";
import { useMatches } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const WIP_MODE = false;

type ArticleError = "NOT_FOUND";

function Main(){

  const matches = useMatches();
  const [markdown, setMarkdown] = useState<string|undefined>();
  const [error, setError] = useState<ArticleError|undefined>();

  useEffect(() => {
    if (!WIP_MODE) {
      const fileName = matches[0].params.article?.replaceAll("+", " ");
      fetch(`/markdown/${fileName}.md`, {headers: {'Content-Type': 'text/markdown', 'Accept': 'text/markdown'}})
        .then((res) => {
          if (res.ok || res.status == 304) {
            return res.text();
          }
          throw new Error();
        })
        .then((text) => {
          setError(undefined)
          setMarkdown(text)
        })
        .catch(() => {
          setError("NOT_FOUND")
          setMarkdown(undefined);
        })
    }
  }, [matches]);

  return (
    <main>
      {WIP_MODE && <CautionTape text={"Under Construction"}/>}
      {!WIP_MODE && (error != undefined
        ? <ErrorPage/>
        : <Article text={markdown}/>
      )}
    </main>
  )
}

export default Main;
