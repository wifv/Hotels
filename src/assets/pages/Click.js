"use strict";

var clickHandler = function clickHandler(setTheme, theme) {
  return function (event) {
    setTheme(!theme);
    event.preventDefault();
  };
};