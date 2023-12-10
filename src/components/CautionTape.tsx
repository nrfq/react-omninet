import React from "react";

function CautionTape({ text }:{ text:string }) {
  return (
    <div
      style={{
        backgroundColor: "#991e2a",
        "clipPath": "polygon(100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,0 100%,0 0)",
        WebkitClipPath: "polygon(100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,0 100%,0 0)",
        fontSize: 60,
        padding: 30,
        fontWeight: 600,
        textTransform: "uppercase",
      }}
    >
      {text}
    </div>
  );
}

export default CautionTape;
