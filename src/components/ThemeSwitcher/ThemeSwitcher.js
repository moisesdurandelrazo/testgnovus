/** @format */
import React from "react";

import { useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };
  const themeClass = theme ? theme.toLowerCase() : "secondary";
  return (
    <>
      <div class="d-grid gap-2 d-md-block">
        <button class="btn btn-light btn-lg" type="button">
          Facebook
        </button>
        <button class="btn btn-light btn-lg" type="button">
          Google
        </button>
      </div>
    </>
  );
};
export default ThemeSwitcher;
