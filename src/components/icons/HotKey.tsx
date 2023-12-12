import React from "react";
import KeyboardKey from "./KeyboardKey";

function Keybind({ keys }: { keys:string[] }) {
  return (
    <div style={{ gap: 4, display: "flex", alignItems: "center", height: "fit-content" }}>
      {keys.map(( key ) => <KeyboardKey key={key} keyInput={key}/>)}
    </div>
  );
}

export default Keybind;
