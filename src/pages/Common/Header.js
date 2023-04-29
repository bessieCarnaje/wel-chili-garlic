import React from "react";

export default function Header() {
  return (
    <div className="header-style">
      <div className="header-style-1">
        <label className="header-welicious">Welicious</label>
        <label className="header-chili">Chili Garlic</label>
      </div>
      <div
        className="header-style-2"
        onclick="window.location.href='https://google.com'"
      ></div>
    </div>
  );
}
