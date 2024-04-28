"use strict";

var _react = _interopRequireDefault(require("react"));
var _App = _interopRequireDefault(require("./App.tsx"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./assets/pages/Navbar.tsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_client.default.createRoot(document.getElementById('root')).render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
  path: "/",
  element: /*#__PURE__*/_react.default.createElement(_App.default, null)
})))));