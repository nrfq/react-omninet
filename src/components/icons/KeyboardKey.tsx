import React from "react";

function KeyboardKey({ keyInput }: { keyInput:string }){
  return (
    <div className={"keyboard-key"}>
      {keyInput}
    </div>
  );
}

export default KeyboardKey;
