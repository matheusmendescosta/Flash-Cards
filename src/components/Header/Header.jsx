import React from "react";

function Header({ Description }) {
  return (
    <div className="border p-6 bg-purple-600 flex flex-row justify-center">
      <h1 className="text-xl font-mono text-white font-bold">{Description}</h1>
    </div>
  );
}

export default Header;
