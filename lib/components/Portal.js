"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _uuid = require("uuid");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Portal = function Portal(_ref) {
  var children = _ref.children;
  var id = (0, _uuid.v4)();
  var el = (0, _react.useRef)(document.getElementById(id) || document.createElement('div'));

  var _useState = (0, _react.useState)(!el.current.parentElement),
      _useState2 = _slicedToArray(_useState, 1),
      dynamic = _useState2[0];

  (0, _react.useEffect)(function () {
    var refValue = el.current;

    if (dynamic) {
      el.current.id = id;
      document.body.appendChild(el.current);
    }

    return function () {
      if (dynamic && refValue.parentElement) {
        refValue.parentElement.removeChild(refValue);
      }
    }; //eslint-disable-next-line
  }, [id]);
  return /*#__PURE__*/(0, _reactDom.createPortal)(children, el.current);
};

var _default = /*#__PURE__*/(0, _react.memo)(Portal);

exports["default"] = _default;