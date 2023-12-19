import React from "react";
import TopNav from "./TopNav";

function ErrorPage() {
  return (
    <>
      <div
        style={{ justifyContent: "center", alignItems: "center", display: "flex", flexGrow: 1, height: "100%", backgroundColor: "transparent" }}
      >
        404. You're not supposed to be here.
      </div>
    </>
  )
}

export default ErrorPage;
