// src/App.jsx
import React, { useEffect } from "react";

export default function ARview() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js/three.js/build/ar-threex.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1 style={{ position: "absolute", zIndex: 2, color: "white" }}>AR.js + React Demo</h1>
      <iframe
        title="AR Scene"
        src="/ar-scene.html"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
}
