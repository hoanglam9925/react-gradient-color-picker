"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

var _usePaintHue = _interopRequireDefault(require("../hooks/usePaintHue"));

var _style = require("../style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Hue = function Hue() {
  var barRef = (0, _react.useRef)(null);

  var _usePicker = (0, _context.usePicker)(),
      handleHue = _usePicker.handleHue,
      internalHue = _usePicker.internalHue,
      squareSize = _usePicker.squareSize;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragging = _useState2[0],
      setDragging = _useState2[1];

  (0, _usePaintHue["default"])(barRef, squareSize);

  var _useState3 = (0, _react.useState)(2),
      _useState4 = _slicedToArray(_useState3, 2),
      handleTop = _useState4[0],
      setHandleTop = _useState4[1];

  (0, _react.useEffect)(function () {
    var _barRef$current;

    setHandleTop((barRef === null || barRef === void 0 ? void 0 : (_barRef$current = barRef.current) === null || _barRef$current === void 0 ? void 0 : _barRef$current.offsetTop) - 2);
  }, [barRef]);

  var stopDragging = function stopDragging() {
    setDragging(false);
  };

  var handleDown = function handleDown() {
    setDragging(true);
  };

  var handleMove = function handleMove(e) {
    if (dragging) {
      handleHue(e);
    }
  };

  var handleClick = function handleClick(e) {
    if (!dragging) {
      handleHue(e);
    }
  }; // const handleKeyboard = (e) => {
  //   if (inFocus === 'hueHandle') {
  //       if (e.keyCode === 37) {
  //         let _newValue = Math.round(internalHue / 3.6) - 1;
  //         let newValue = Math.max(_newValue, 0)
  //         handleHue({ type: 'picker-keyboard', value: newValue })
  //       } else if (e.keyCode === 39) {
  //         let _newValue = Math.round(internalHue / 3.6) + 1;
  //         let newValue = Math.min(_newValue, 100)
  //         handleHue({ type: 'picker-keyboard', value: newValue })
  //       }
  //   }
  // }
  //
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyboard);
  //
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyboard);
  //   };
  // }, [internalHue, inFocus, value]);


  return /*#__PURE__*/_react["default"].createElement("div", {
    onMouseEnter: stopDragging,
    onMouseLeave: stopDragging,
    style: _objectSpread(_objectSpread({}, _style.barWrap), {}, {
      width: squareSize + 36
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onMouseUp: stopDragging,
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.psRl), _style.barWrapInner), {}, {
      width: squareSize + 30
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread(_objectSpread({}, _style.psRl), _style.cResize), _style.borderBox),
    onMouseMove: function onMouseMove(e) {
      return handleMove(e);
    },
    className: "c-resize ps-rl"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, _style.handle), {}, {
      left: internalHue * ((squareSize - 18) / 360),
      top: handleTop
    }),
    onMouseDown: handleDown
  }), /*#__PURE__*/_react["default"].createElement("canvas", {
    ref: barRef,
    width: "".concat(squareSize, "px"),
    height: "14px",
    style: {
      position: 'relative',
      borderRadius: 14
    },
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }))));
};

var _default = Hue;
exports["default"] = _default;