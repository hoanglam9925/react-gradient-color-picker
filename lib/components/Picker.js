"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Hue = _interopRequireDefault(require("./Hue"));

var _Inputs = _interopRequireDefault(require("./Inputs"));

var _Square = _interopRequireDefault(require("./Square"));

var _Opacity = _interopRequireDefault(require("./Opacity"));

var _Presets = _interopRequireDefault(require("./Presets"));

var _Controls = _interopRequireDefault(require("./Controls"));

var _GradientBar = _interopRequireDefault(require("./GradientBar"));

var _context = require("../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Picker = function Picker(_ref) {
  var hideControls = _ref.hideControls,
      hideInputs = _ref.hideInputs,
      hidePresets = _ref.hidePresets,
      hideOpacity = _ref.hideOpacity,
      hideHue = _ref.hideHue,
      presets = _ref.presets,
      hideEyeDrop = _ref.hideEyeDrop,
      hideAdvancedSliders = _ref.hideAdvancedSliders,
      hideColorGuide = _ref.hideColorGuide,
      hideInputType = _ref.hideInputType;

  var _usePicker = (0, _context.usePicker)(),
      isGradient = _usePicker.isGradient;

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      userSelect: 'none'
    },
    id: "rbgcp-wrapper"
  }, /*#__PURE__*/_react["default"].createElement(_Square["default"], null), !hideControls && /*#__PURE__*/_react["default"].createElement(_Controls["default"], {
    hideEyeDrop: hideEyeDrop,
    hideAdvancedSliders: hideAdvancedSliders,
    hideColorGuide: hideColorGuide,
    hideInputType: hideInputType
  }), isGradient && /*#__PURE__*/_react["default"].createElement(_GradientBar["default"], null), !hideHue && /*#__PURE__*/_react["default"].createElement(_Hue["default"], null), !hideOpacity && /*#__PURE__*/_react["default"].createElement(_Opacity["default"], null), !hideInputs && /*#__PURE__*/_react["default"].createElement(_Inputs["default"], null), !hidePresets && /*#__PURE__*/_react["default"].createElement(_Presets["default"], {
    presets: presets
  }));
};

var _default = Picker;
exports["default"] = _default;