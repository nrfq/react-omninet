import React from "react";

function CautionTape({ text }:{ text:string }) {
  return (
    <div
      style={{
        backgroundColor: "#991e2a",
        clipPath: "var(--clip-bottom-right)",
        WebkitClipPath: "var(--clip-bottom-right)",
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
