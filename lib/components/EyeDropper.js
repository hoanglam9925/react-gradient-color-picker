"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Portal = _interopRequireDefault(require("./Portal"));

var _html2canvas = _interopRequireDefault(require("html2canvas"));

var _Controls = require("./Controls");

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

var tc = require('tinycolor2');

var DropperIcon = function DropperIcon(_ref) {
  var color = _ref.color;
  var col = color || '#323136';
  var style1 = {
    fill: 'none',
    stroke: col,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.4px'
  };
  var style2 = {
    fill: col,
    stroke: col,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.4px'
  };
  return /*#__PURE__*/_react["default"].createElement("svg", {
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    style: {
      width: 16
    }
  }, /*#__PURE__*/_react["default"].createElement("path", {
    style: style1,
    d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    style: style2,
    points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    style: style2,
    d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
  }));
};

var Dropper = function Dropper(_ref2) {
  var onSelect = _ref2.onSelect,
      buttonStyle = _ref2.buttonStyle;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      pickerCanvas = _useState2[0],
      setPickerCanvas = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      coverUp = _useState4[0],
      setCoverUp = _useState4[1];

  var takePick = function takePick() {
    var root = document.getElementById('root');
    setCoverUp(true);
    (0, _html2canvas["default"])(root).then(function (canvas) {
      var blankCanvas = document.createElement('canvas');
      var ctx = blankCanvas.getContext('2d', {
        willReadFrequently: true
      });
      blankCanvas.width = root.offsetWidth * 2;
      blankCanvas.height = root.offsetHeight * 2;
      ctx.drawImage(canvas, 0, 0);
      setPickerCanvas(ctx);
    });
  };

  var getColorLegacy = function getColorLegacy(e) {
    e.stopPropagation();
    var pageX = e.pageX,
        pageY = e.pageY;
    var x1 = pageX * 2;
    var y1 = pageY * 2;

    var _pickerCanvas$getImag = _slicedToArray(pickerCanvas.getImageData(x1, y1, 1, 1).data, 3),
        r = _pickerCanvas$getImag[0],
        g = _pickerCanvas$getImag[1],
        b = _pickerCanvas$getImag[2];

    onSelect("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 1)"));
    setCoverUp(false);
  };

  var getEyeDrop = function getEyeDrop() {
    if (!window.EyeDropper) {
      takePick();
    } else {
      var eyeDropper = new window.EyeDropper();
      var abortController = new window.AbortController();
      eyeDropper.open({
        signal: abortController.signal
      }).then(function (result) {
        var tinyHex = tc(result.sRGBHex);

        var _tinyHex$toRgb = tinyHex.toRgb(),
            r = _tinyHex$toRgb.r,
            g = _tinyHex$toRgb.g,
            b = _tinyHex$toRgb.b;

        onSelect("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 1)"));
      })["catch"](function (e) {
        console.log(e);
      });
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread(_objectSpread({}, buttonStyle), (0, _Controls.controlBtnStyles)(coverUp)),
    onClick: getEyeDrop
  }, /*#__PURE__*/_react["default"].createElement(DropperIcon, {
    color: coverUp ? 'rgb(86, 140, 245)' : ''
  })), coverUp && /*#__PURE__*/_react["default"].createElement(_Portal["default"], {
    id: "eyeDropCover"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 100000000,
      width: window.innerWidth,
      height: window.innerHeight,
      cursor: 'copy'
    },
    onClick: function onClick(e) {
      return getColorLegacy(e);
    }
  })));
};

var _default = Dropper;
exports["default"] = _default;