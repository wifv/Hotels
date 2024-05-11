"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./assets/css/app.css");
require("./assets/css/global.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var App = function App() {
  var url = 'https://free-football-soccer-videos.p.rapidapi.com/';
  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66472582c6msh2b7ad70ff469f03p1d2212jsn8e4164df4bc6',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    lx = _useState2[0],
    setLx = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    n = _useState4[0],
    setN = _useState4[1];
  (0, _react.useEffect)(function () {
    fetch(url, options).then(function (res) {
      if (!res.ok) {
        throw new Error("Too Many Requests");
      }
      return res.json();
    }).then(function (data) {
      var htmlString = '';
      var a = lx;
      for (var i = n - 10; i < n; i++) {
        htmlString += data[i].embed;
      }
      setLx(a + htmlString);
    });
  }, [n]); // fetchInfo will be called whenever 'n' changes

  if (lx !== '') {
    return /*#__PURE__*/React.createElement("main", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: lx
      },
      className: "video"
    }), /*#__PURE__*/React.createElement("div", {
      className: "button",
      onClick: function onClick() {
        return setN(n + 10);
      }
    }, "See More"));
  }
};
var _default = App;
exports.default = _default;