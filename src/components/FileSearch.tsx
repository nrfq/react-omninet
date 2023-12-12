import React, {useState, useEffect, useRef} from "react";
import Fuse from "fuse.js";
import Keybind from "./icons/Keybind";
import TableOfContents from "../toc.json";
import { classNames } from "../utils/cssUtils";
import KeyboardKey from "./icons/KeyboardKey";

interface TOCEntry {
  name: string;
}

const TOCList:TOCEntry[] = Object.values(TableOfContents);
const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "name",
  ]
};

// TODO: Create a Fuse index to speed this up
const fuse = new Fuse(TOCList , fuseOptions)

function FileSearch() {

  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<TOCEntry[]>();
  const [focused, setFocused] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const onSearch = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      if (focused) {
        searchInputRef.current?.blur();
      } else {
        searchInputRef.current?.focus();
      }
    }
  };

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchResults(fuse.search(inputValue).map((result) => result.item));
    }, 250);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return (() => {
      document.removeEventListener('keydown', handleKeyPress);
    })
  }, [handleKeyPress]);

  const containerClassnames = classNames(
    "search-container",
    focused ? "search-container-focused" : null,
  );

  const keybindClassnames = classNames(
    "search-keybind-wrapper",
    focused ? "search-keybind-wrapper-focus" : null,
  )

  return (
    <div className={containerClassnames} >
      <div className={"search-input-wrapper"}>
        <input
          className={"search-input"}
          type="text"
          ref={searchInputRef}
          placeholder="initiate query protocol..."
          onChange={onSearch}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className={keybindClassnames}>
          <Keybind keys={["CMD", "K"]}/>
        </div>
      </div>
      {searchResults?.map((result) => <div>{result.name}</div>)}
    </div>
  );
}

export default FileSearch;
