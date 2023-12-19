(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTER_PARAMETER: () => (/* binding */ ACTER_PARAMETER),
/* harmony export */   ACTION_TARGET: () => (/* binding */ ACTION_TARGET),
/* harmony export */   ACTOR_MEMBER: () => (/* binding */ ACTOR_MEMBER),
/* harmony export */   BALLOON: () => (/* binding */ BALLOON),
/* harmony export */   BATTLE_TROOP: () => (/* binding */ BATTLE_TROOP),
/* harmony export */   BLEND_MODE: () => (/* binding */ BLEND_MODE),
/* harmony export */   CHARACTER: () => (/* binding */ CHARACTER),
/* harmony export */   CHARACTER_FREQ: () => (/* binding */ CHARACTER_FREQ),
/* harmony export */   CHARACTER_SPEED: () => (/* binding */ CHARACTER_SPEED),
/* harmony export */   CHOICES_CANCEL: () => (/* binding */ CHOICES_CANCEL),
/* harmony export */   CHOICES_INIT: () => (/* binding */ CHOICES_INIT),
/* harmony export */   COLOR_TONE: () => (/* binding */ COLOR_TONE),
/* harmony export */   DIRECTION: () => (/* binding */ DIRECTION),
/* harmony export */   DIRECTION_CAR: () => (/* binding */ DIRECTION_CAR),
/* harmony export */   DIRECTION_METHOD: () => (/* binding */ DIRECTION_METHOD),
/* harmony export */   DIRECTION_RETAIN: () => (/* binding */ DIRECTION_RETAIN),
/* harmony export */   DIRECTION_ROUTE8: () => (/* binding */ DIRECTION_ROUTE8),
/* harmony export */   DIRECTION_TURN_METHOD: () => (/* binding */ DIRECTION_TURN_METHOD),
/* harmony export */   EASING: () => (/* binding */ EASING),
/* harmony export */   ENEMY_MEMBER: () => (/* binding */ ENEMY_MEMBER),
/* harmony export */   EQUIP_STATE: () => (/* binding */ EQUIP_STATE),
/* harmony export */   EVENT: () => (/* binding */ EVENT),
/* harmony export */   FADE: () => (/* binding */ FADE),
/* harmony export */   ITEM_TYPE: () => (/* binding */ ITEM_TYPE),
/* harmony export */   LOCATION: () => (/* binding */ LOCATION),
/* harmony export */   PICTURE_ORIGIN: () => (/* binding */ PICTURE_ORIGIN),
/* harmony export */   SHOP_ITEM: () => (/* binding */ SHOP_ITEM),
/* harmony export */   TIMER_MODE: () => (/* binding */ TIMER_MODE),
/* harmony export */   VARIABLE_OPERATOR: () => (/* binding */ VARIABLE_OPERATOR),
/* harmony export */   VEHICLE: () => (/* binding */ VEHICLE),
/* harmony export */   WEATHER: () => (/* binding */ WEATHER),
/* harmony export */   WINDOW_BACKGROUND: () => (/* binding */ WINDOW_BACKGROUND),
/* harmony export */   WINDOW_POSITION_HORIZONTAL: () => (/* binding */ WINDOW_POSITION_HORIZONTAL),
/* harmony export */   WINDOW_POSITION_VERTICAL: () => (/* binding */ WINDOW_POSITION_VERTICAL)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var WINDOW_BACKGROUND = {
  WINDOW: "Window",
  DIM: "Dim",
  TRANSPARENT: "Transparent"
};
var WINDOW_POSITION_HORIZONTAL = {
  LEFT: "Left",
  MIDDLE: "Middle",
  RIGHT: "Right"
};
var WINDOW_POSITION_VERTICAL = {
  TOP: "Top",
  MIDDLE: "Middle",
  BOTTOM: "Bottom"
};
var CHOICES_INIT = {
  NONE: "None",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
};
var CHOICES_CANCEL = {
  BRANCH: "Branch",
  DISALLOW: "Disallow",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
};
var ITEM_TYPE = {
  REGULAR: "Regular Item",
  KEY: "Key Item",
  HIDDEN_A: "Hidden Item A",
  HIDDEN_B: "Hidden Item B"
};
var VARIABLE_OPERATOR = {
  SET: "Set",
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  MOD: "Mod"
};
var EVENT = {
  THIS_EVENT: "ThisEvent"
};
var CHARACTER = _objectSpread({
  PLAYER: "Player"
}, EVENT);
var TIMER_MODE = {
  START: "Start",
  END: "End"
};
var ACTOR_MEMBER = {
  ALL: "Entire Party"
};
var ACTER_PARAMETER = {
  MAX_HP: "MaxHP",
  MAX_MP: "MaxMP",
  ATTACK: "Attack",
  DEFENSE: "Defense",
  M_ATTACK: "M.Attack",
  M_DEFENSE: "M.Defense",
  AGILITY: "Agility",
  LUCK: "Luck"
};
var EQUIP_STATE = {
  NONE: "None"
};
var ENEMY_MEMBER = {
  ENTIRE_TROOP: "Entire Troop"
};
var ACTION_TARGET = {
  LAST_TARGET: "Last Target",
  RANDOM: "Random"
};
var DIRECTION = {
  DOWN: "Down",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Up"
};
var DIRECTION_RETAIN = _objectSpread({
  RETAIN: "Retain"
}, DIRECTION);
var DIRECTION_ROUTE8 = _objectSpread(_objectSpread({}, DIRECTION), {}, {
  DOWN_LEFT: "LowerLeft",
  DOWN_RIGHT: "LowerRight",
  UP_LEFT: "UpperLeft",
  UP_RIGHT: "UpperRight"
});
var DIRECTION_METHOD = {
  RANDOM: "AtRandom",
  TOWARD_PLAYER: "TowardPlayer",
  AWAY_PLAYER: "AwayFromPlayer"
};
var DIRECTION_TURN_METHOD = {
  LEFT_90: "90Left",
  RIGHT_90: "90Right",
  RANDOM_90: "90RightorLeft",
  TURN_180: "180"
};
var DIRECTION_CAR = {
  FRONT: "Forward",
  BACK: "Backward"
};
var FADE = {
  BLACK: "Black",
  WHITE: "White",
  NONE: "None"
};
var VEHICLE = {
  BOAT: "Boat",
  SHIP: "Ship",
  AIR_SHIP: "AirShip"
};
var CHARACTER_SPEED = {
  X8_SLOW: "x8 Slower",
  X4_SLOW: "x4 Slower",
  X2_SLOW: "x2 Slower",
  NORMAL: "Normal",
  X2_FAST: "x2 Faster",
  X4_FAST: "x4 Faster"
};
var CHARACTER_FREQ = {
  LOWEST: "Lowest",
  LOW: "Lower",
  NORMAL: "Normal",
  HIGH: "Higher",
  HIGHEST: "Highest"
};
var BLEND_MODE = {
  NORMAL: "Normal",
  ADD: "Additive",
  MUL: "Multiply",
  SCREEN: "Screen"
};
var BALLOON = {
  EXCLAMATION: "Exclamation",
  QUESTION: "Question",
  MUSIC: "Music Note",
  HEART: "Heart",
  ANGER: "Anger",
  SWEAT: "Sweat",
  FLUSTRATION: "Flustration",
  SILENCE: "Silence",
  LIGHT: "Light Bulb",
  ZZZ: "zzz",
  USER_1: "user-defined1",
  USER_2: "user-defined2",
  USER_3: "user-defined3",
  USER_4: "user-defined4",
  USER_5: "user-defined5"
};
var PICTURE_ORIGIN = {
  CORNER: "Upper Left",
  CENTER: "Center"
};
var EASING = {
  LINEAR: "Linear",
  IN: "Ease-in",
  OUT: "Ease-out",
  IN_OUT: "Ease-in-out"
};
var COLOR_TONE = {
  NORMAL: "Normal",
  DARK: "Dark",
  SEPIA: "Sepia",
  SUNSET: "Sunset",
  NIGHT: "Night"
};
var WEATHER = {
  NONE: "None",
  RAIN: "Rain",
  STORM: "Storm",
  SNOW: "Snow"
};
var BATTLE_TROOP = {
  RANDOM: "Random"
};
var SHOP_ITEM = {
  ITEM: "Item",
  WEAPON: "Weapon",
  ARMOR: "Armor"
};
var LOCATION = {
  TERRAIN_TAG: "Terrain Tag",
  EVENT_ID: "Event ID",
  LAYER_1: "Layer 1",
  REGION_ID: "Region ID"
};

/***/ }),

/***/ "./src/events/actor.ts":
/*!*****************************!*\
  !*** ./src/events/actor.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeClass: () => (/* binding */ ChangeClass),
/* harmony export */   ChangeEquipment: () => (/* binding */ ChangeEquipment),
/* harmony export */   ChangeExp: () => (/* binding */ ChangeExp),
/* harmony export */   ChangeHp: () => (/* binding */ ChangeHp),
/* harmony export */   ChangeLevel: () => (/* binding */ ChangeLevel),
/* harmony export */   ChangeMp: () => (/* binding */ ChangeMp),
/* harmony export */   ChangeName: () => (/* binding */ ChangeName),
/* harmony export */   ChangeNickname: () => (/* binding */ ChangeNickname),
/* harmony export */   ChangeParameter: () => (/* binding */ ChangeParameter),
/* harmony export */   ChangeProfile: () => (/* binding */ ChangeProfile),
/* harmony export */   ChangeSkill: () => (/* binding */ ChangeSkill),
/* harmony export */   ChangeState: () => (/* binding */ ChangeState),
/* harmony export */   ChangeTp: () => (/* binding */ ChangeTp),
/* harmony export */   RecoverAll: () => (/* binding */ RecoverAll)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var ChangeHp = function ChangeHp(_ref) {
  var id = _ref.id,
    op = _ref.op,
    value = _ref.value,
    allowKnockout = _ref.allowKnockout;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeHp", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argActorIdWithPreset)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowKnockout]);
};
var commonChange = function commonChange(name) {
  var component = function component(_ref2) {
    var id = _ref2.id,
      op = _ref2.op,
      value = _ref2.value;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argActorIdWithPreset)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
  };
  return component;
};
var ChangeMp = commonChange("ChangeMp");
var ChangeTp = commonChange("ChangeTp");
var ChangeState = commonChange("ChangeState");
var ChangeSkill = commonChange("ChangeSkill");
var RecoverAll = function RecoverAll(_ref3) {
  var id = _ref3.id;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("RecoverAll", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argActorIdWithPreset)(id)]);
};
var commonLevelUp = function commonLevelUp(name) {
  var component = function component(_ref4) {
    var id = _ref4.id,
      op = _ref4.op,
      value = _ref4.value,
      allowLevelUp = _ref4.allowLevelUp;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argActorIdWithPreset)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowLevelUp]);
  };
  return component;
};
var ChangeExp = commonLevelUp("ChangeExp");
var ChangeLevel = commonLevelUp("ChangeLevel");
var ChangeParameter = function ChangeParameter(_ref5) {
  var id = _ref5.id,
    parameter = _ref5.parameter,
    op = _ref5.op,
    value = _ref5.value;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeParameter", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argActorIdWithPreset)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(parameter, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.ACTER_PARAMETER);
  }), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
};
var ChangeEquipment = function ChangeEquipment(_ref6) {
  var id = _ref6.id,
    equipType = _ref6.equipType,
    equipId = _ref6.equipId;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeEquipment", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(equipType), equipId && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(equipId)]);
};
var ChangeName = function ChangeName(_ref7) {
  var id = _ref7.id,
    name = _ref7.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeName", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), name]);
};
var ChangeClass = function ChangeClass(_ref8) {
  var id = _ref8.id,
    classId = _ref8.classId,
    saveLevelAndExp = _ref8.saveLevelAndExp;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeClass", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(classId), saveLevelAndExp]);
};
var ChangeNickname = function ChangeNickname(_ref9) {
  var id = _ref9.id,
    name = _ref9.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeNickname", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), name]);
};
var ChangeProfile = function ChangeProfile(_ref10) {
  var id = _ref10.id,
    _ref10$profile = _slicedToArray(_ref10.profile, 2),
    l1 = _ref10$profile[0],
    l2 = _ref10$profile[1];
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeProfile", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), l1, l2]);
};

/***/ }),

/***/ "./src/events/battle.ts":
/*!******************************!*\
  !*** ./src/events/battle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeEnemyHp: () => (/* binding */ ChangeEnemyHp),
/* harmony export */   ChangeEnemyMp: () => (/* binding */ ChangeEnemyMp),
/* harmony export */   ChangeEnemyState: () => (/* binding */ ChangeEnemyState),
/* harmony export */   ChangeEnemyTp: () => (/* binding */ ChangeEnemyTp),
/* harmony export */   EnemyAppear: () => (/* binding */ EnemyAppear),
/* harmony export */   EnemyRecoverAll: () => (/* binding */ EnemyRecoverAll),
/* harmony export */   EnemyTransform: () => (/* binding */ EnemyTransform),
/* harmony export */   ForceAction: () => (/* binding */ ForceAction),
/* harmony export */   ShowBattleAnimation: () => (/* binding */ ShowBattleAnimation)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var ChangeEnemyHp = function ChangeEnemyHp(_ref) {
  var index = _ref.index,
    op = _ref.op,
    value = _ref.value,
    allowKnockout = _ref.allowKnockout;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeEnemyHp", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndexWithPresetAndVariableId)(index), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowKnockout]);
};
var commonChange = function commonChange(name) {
  var component = function component(_ref2) {
    var index = _ref2.index,
      op = _ref2.op,
      value = _ref2.value;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndexWithPresetAndVariableId)(index), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
  };
  return component;
};
var ChangeEnemyMp = commonChange("ChangeEnemyMp");
var ChangeEnemyTp = commonChange("ChangeEnemyTp");
var ChangeEnemyState = commonChange("ChangeEnemyState");
var EnemyRecoverAll = function EnemyRecoverAll(_ref3) {
  var index = _ref3.index;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("EnemyRecoverAll", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndexWithPresetAndVariableId)(index)]);
};
var EnemyAppear = function EnemyAppear(_ref4) {
  var index = _ref4.index;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("EnemyAppear", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndexWithPreset)(index)]);
};
var commonIndexAndEnemyId = function commonIndexAndEnemyId(name) {
  var component = function component(_ref5) {
    var index = _ref5.index,
      id = _ref5.id;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id)]);
  };
  return component;
};
var EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
var ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");
var ForceAction = function ForceAction(_ref6) {
  var mode = _ref6.mode,
    index = _ref6.index,
    id = _ref6.id,
    target = _ref6.target;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ForceAction", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(index, function (v, t) {
    if (mode === "ACTOR") return "Actor[".concat(t.validId(v), "]");
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(v);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(target, function (v, t) {
    if (typeof v === "string") return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TARGET);
    return "Index ".concat(t.validRange(v, 1, 8));
  })]);
};

/***/ }),

/***/ "./src/events/character.ts":
/*!*********************************!*\
  !*** ./src/events/character.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePlayerFollowers: () => (/* binding */ ChangePlayerFollowers),
/* harmony export */   ChangeTransparency: () => (/* binding */ ChangeTransparency),
/* harmony export */   EraseEvent: () => (/* binding */ EraseEvent),
/* harmony export */   GatherFollowers: () => (/* binding */ GatherFollowers),
/* harmony export */   ShowAnimation: () => (/* binding */ ShowAnimation),
/* harmony export */   ShowBalloonIcon: () => (/* binding */ ShowBalloonIcon)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var commonChange = function commonChange(name) {
  var component = function component(_ref) {
    var active = _ref.active;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [active]);
  };
  return component;
};
var ChangeTransparency = commonChange("ChangeTransparency");
var ChangePlayerFollowers = commonChange("ChangePlayerFollowers");
var GatherFollowers = function GatherFollowers() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GatherFollowers");
};
var ShowAnimation = function ShowAnimation(_ref2) {
  var id = _ref2.id,
    animationId = _ref2.animationId,
    wait = _ref2.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowAnimation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argNumberPreset)(id, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER, true), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(animationId), wait]);
};
var ShowBalloonIcon = function ShowBalloonIcon(_ref3) {
  var id = _ref3.id,
    balloon = _ref3.balloon,
    wait = _ref3.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowBalloonIcon", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argNumberPreset)(id, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER, true), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(balloon, _constants__WEBPACK_IMPORTED_MODULE_0__.BALLOON), wait]);
};
var EraseEvent = function EraseEvent() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("EraseEvent");
};

/***/ }),

/***/ "./src/events/flow.ts":
/*!****************************!*\
  !*** ./src/events/flow.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakLoop: () => (/* binding */ BreakLoop),
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   CommonEvent: () => (/* binding */ CommonEvent),
/* harmony export */   ExitEventProcessing: () => (/* binding */ ExitEventProcessing),
/* harmony export */   Goto: () => (/* binding */ Goto),
/* harmony export */   JumpToLabel: () => (/* binding */ JumpToLabel),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Loop: () => (/* binding */ Loop),
/* harmony export */   LoopBreak: () => (/* binding */ LoopBreak)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var Check = function Check(_ref) {
  var condition = _ref.condition,
    then = _ref.then,
    otherwise = _ref.otherwise;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("If", ["Script", condition]), then].concat(_toConsumableArray(otherwise ? (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Else"), otherwise]) : []), [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("End")]));
};
var Loop = function Loop(_ref2) {
  var content = _ref2.content;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Loop"), content, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("RepeatAbove")]);
};
var LoopBreak = function LoopBreak() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("BreakLoop");
};
var BreakLoop = LoopBreak;
var ExitEventProcessing = function ExitEventProcessing() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ExitEventProcessing");
};
var CommonEvent = function CommonEvent(_ref3) {
  var id = _ref3.id;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("CommonEvent", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id)]);
};
var Label = function Label(_ref4) {
  var name = _ref4.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Label", [name]);
};
var Goto = function Goto(_ref5) {
  var name = _ref5.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("JumpToLabel", [name]);
};
var JumpToLabel = Goto;
var Comment = function Comment(_ref6) {
  var text = _ref6.text;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Comment", undefined, text);
};

/***/ }),

/***/ "./src/events/interpreter.ts":
/*!***********************************!*\
  !*** ./src/events/interpreter.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginCommandMV: () => (/* binding */ PluginCommandMV),
/* harmony export */   PluginCommandMZ: () => (/* binding */ PluginCommandMZ),
/* harmony export */   Script: () => (/* binding */ Script),
/* harmony export */   Wait: () => (/* binding */ Wait)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var Wait = function Wait(_ref) {
  var time = _ref.time;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Wait", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argInt)(time)]);
};
var Script = function Script(_ref2) {
  var code = _ref2.code;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Script", undefined, code);
};
var PluginCommandMV = function PluginCommandMV(_ref3) {
  var command = _ref3.command;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("PluginCommand", [command]);
};
var PluginCommandMZ = function PluginCommandMZ(_ref4) {
  var name = _ref4.name,
    method = _ref4.method,
    command = _ref4.command,
    args = _ref4.args;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("PluginCommandMZ", [name, method, command].concat(_toConsumableArray(args.map(function (x) {
    return "".concat(x.name, "[").concat(x.value, "]");
  }))));
};

/***/ }),

/***/ "./src/events/map.ts":
/*!***************************!*\
  !*** ./src/events/map.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeBattleBackGround: () => (/* binding */ ChangeBattleBackGround),
/* harmony export */   ChangeMapNameDisplay: () => (/* binding */ ChangeMapNameDisplay),
/* harmony export */   ChangeParallax: () => (/* binding */ ChangeParallax),
/* harmony export */   ChangeTileset: () => (/* binding */ ChangeTileset),
/* harmony export */   GetLocationInfo: () => (/* binding */ GetLocationInfo)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


var ChangeMapNameDisplay = function ChangeMapNameDisplay(_ref) {
  var allow = _ref.allow;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeMapNameDisplay", [allow]);
};
var ChangeTileset = function ChangeTileset(_ref2) {
  var id = _ref2.id;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeTileset", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id)]);
};
var ChangeBattleBackGround = function ChangeBattleBackGround(_ref3) {
  var _images$, _images$2;
  var images = _ref3.images;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeBattleBackGround", [(_images$ = images[0]) !== null && _images$ !== void 0 ? _images$ : "None", (_images$2 = images[1]) !== null && _images$2 !== void 0 ? _images$2 : "None"]);
};
var ChangeParallax = function ChangeParallax(_ref4) {
  var name = _ref4.name,
    scroll = _ref4.scroll;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeParallax", [name, scroll.x && "LoopHorizontally[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(scroll.x, {
    from: -32,
    to: 32
  }), "]"), scroll.y && "LoopVertically[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(scroll.y, {
    from: -32,
    to: 32
  }), "]")]);
};
var GetLocationInfo = function GetLocationInfo(_ref5) {
  var id = _ref5.id,
    layer = _ref5.layer,
    position = _ref5.position;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GetLocationInfo", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return t.isVariableId(v);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(layer, _constants__WEBPACK_IMPORTED_MODULE_0__.LOCATION), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    if (_typeof(v) === "object") return "".concat(t.isVariableId(v.x) ? "WithVariables" : "Direct", "[").concat(v.x, "][").concat(v.y, "]");
    if (typeof v === "string") return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER);
    return v;
  })]);
};

/***/ }),

/***/ "./src/events/media.ts":
/*!*****************************!*\
  !*** ./src/events/media.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeBattleBGM: () => (/* binding */ ChangeBattleBGM),
/* harmony export */   ChangeDefeatMe: () => (/* binding */ ChangeDefeatMe),
/* harmony export */   ChangeVictoryMe: () => (/* binding */ ChangeVictoryMe),
/* harmony export */   FadeoutBGM: () => (/* binding */ FadeoutBGM),
/* harmony export */   FadeoutBGS: () => (/* binding */ FadeoutBGS),
/* harmony export */   PlayBGM: () => (/* binding */ PlayBGM),
/* harmony export */   PlayBGS: () => (/* binding */ PlayBGS),
/* harmony export */   PlayME: () => (/* binding */ PlayME),
/* harmony export */   PlayMovie: () => (/* binding */ PlayMovie),
/* harmony export */   PlaySE: () => (/* binding */ PlaySE),
/* harmony export */   ReplayBGM: () => (/* binding */ ReplayBGM),
/* harmony export */   SaveBGM: () => (/* binding */ SaveBGM),
/* harmony export */   StopBGM: () => (/* binding */ StopBGM),
/* harmony export */   StopBGS: () => (/* binding */ StopBGS),
/* harmony export */   StopME: () => (/* binding */ StopME),
/* harmony export */   StopSE: () => (/* binding */ StopSE)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");

var commonSound = function commonSound(name) {
  var component = function component(_ref) {
    var sound = _ref.sound;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.arg)(sound, function (v, t) {
      return t.markSoundArgs(v);
    })]);
  };
  return component;
};
var PlayBGM = commonSound("PlayBGM");
var PlayBGS = commonSound("PlayBGS");
var PlayME = commonSound("PlayME");
var PlaySE = commonSound("PlaySE");
var ChangeBattleBGM = commonSound("ChangeBattleBGM");
var ChangeVictoryMe = commonSound("ChangeVictoryMe");
var ChangeDefeatMe = commonSound("ChangeDefeatMe");
var commonFadeout = function commonFadeout(name) {
  var component = function component(_ref2) {
    var time = _ref2.time;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argInt)(time)]);
  };
  return component;
};
var FadeoutBGM = commonFadeout("FadeoutBGM");
var FadeoutBGS = commonFadeout("FadeoutBGS");
var SaveBGM = function SaveBGM() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("SaveBGM");
};
var StopBGM = function StopBGM() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("StopBGM");
};
var ReplayBGM = function ReplayBGM() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ReplayBGM");
};
var StopBGS = function StopBGS() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("StopBGS");
};
var StopME = function StopME() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("StopME");
};
var StopSE = function StopSE() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("StopSE");
};
var PlayMovie = function PlayMovie(_ref3) {
  var name = _ref3.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("PlayMovie", [name]);
};

/***/ }),

/***/ "./src/events/message.ts":
/*!*******************************!*\
  !*** ./src/events/message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputNumber: () => (/* binding */ InputNumber),
/* harmony export */   ScrollingText: () => (/* binding */ ScrollingText),
/* harmony export */   SelectItem: () => (/* binding */ SelectItem),
/* harmony export */   ShowChoices: () => (/* binding */ ShowChoices),
/* harmony export */   Window: () => (/* binding */ Window)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var Window = function Window(_ref) {
  var face = _ref.face,
    position = _ref.position,
    background = _ref.background,
    name = _ref.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [background && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Background", [background]), position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("WindowPosition", [position]), face && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Face", ["".concat(face.name, "(").concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(face.index, function (v, t) {
    return t.validRange(v, 0, 15);
  }), ")")]), name && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Name", [name])]);
};
var ShowChoices = function ShowChoices(_ref2) {
  var background = _ref2.background,
    position = _ref2.position,
    init = _ref2.init,
    cancel = _ref2.cancel,
    cases = _ref2.cases;
  if (cases.filter(function (caseItem) {
    return caseItem.name === null;
  }).length >= 2) throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowChoices", [background && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(background, _constants__WEBPACK_IMPORTED_MODULE_0__.WINDOW_BACKGROUND), position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(position, _constants__WEBPACK_IMPORTED_MODULE_0__.WINDOW_POSITION_HORIZONTAL), init && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(init, function (v, t) {
    return typeof v === "number" ? t.validRange(v, 1, 6) : t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.CHOICES_INIT);
  }), cancel && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(cancel, function (v, t) {
    return typeof v === "number" ? t.validRange(v, 1, 6) : t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.CHOICES_CANCEL);
  })]), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", cases.map(function (_ref3) {
    var name = _ref3.name,
      then = _ref3.then;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [name ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("When", [name]) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("WhenCancel"), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [then])])]);
  })), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("End")]);
};
var InputNumber = function InputNumber(_ref4) {
  var id = _ref4.id,
    digit = _ref4.digit;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("InputNumber", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return t.markVariableId(v);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(digit, function (v, t) {
    return t.validRange(digit, 1, 8);
  })]);
};
var SelectItem = function SelectItem(_ref5) {
  var id = _ref5.id,
    itemType = _ref5.itemType;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SelectItem", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return t.markVariableId(v);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(itemType, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_TYPE);
  })]);
};
var ScrollingText = function ScrollingText(_ref6) {
  var _ref6$speed = _ref6.speed,
    speed = _ref6$speed === void 0 ? 2 : _ref6$speed,
    noSkip = _ref6.noSkip,
    text = _ref6.text;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ScrollingText", [speed, noSkip], text);
};

/***/ }),

/***/ "./src/events/movement.ts":
/*!********************************!*\
  !*** ./src/events/movement.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetOnOffVehicle: () => (/* binding */ GetOnOffVehicle),
/* harmony export */   ScrollMap: () => (/* binding */ ScrollMap),
/* harmony export */   SetEventLocation: () => (/* binding */ SetEventLocation),
/* harmony export */   SetMovementRoute: () => (/* binding */ SetMovementRoute),
/* harmony export */   SetVehicleLocation: () => (/* binding */ SetVehicleLocation),
/* harmony export */   TransferPlayer: () => (/* binding */ TransferPlayer)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var TransferPlayer = function TransferPlayer(_ref) {
  var mode = _ref.mode,
    position = _ref.position,
    direction = _ref.direction,
    fade = _ref.fade;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TransferPlayer", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    return t.markMapPosition(v, mode);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(direction, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_RETAIN);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(fade, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.FADE);
  })]);
};
var SetVehicleLocation = function SetVehicleLocation(_ref2) {
  var mode = _ref2.mode,
    vehicle = _ref2.vehicle,
    position = _ref2.position;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetVehicleLocation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(vehicle, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.VEHICLE);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    return t.markMapPosition(v, mode);
  })]);
};
var SetEventLocation = function SetEventLocation(_ref3) {
  var mode = _ref3.mode,
    id = _ref3.id,
    position = _ref3.position,
    direction = _ref3.direction;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetEventLocation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return typeof v === "number" ? t.validId(v) : t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT);
  }), mode === "EXCHANGE" ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    var exchange = function exchange(x) {
      return "Exchange[".concat(x, "]");
    };
    if (typeof v === "string") return exchange(t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT));
    if (typeof v === "number") return exchange(t.validId(v));
    throw new Error("不正なマップ位置指定です");
  }) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    if (t.isMapPosition(v)) return t.markMapPosition(v, mode);
    throw new Error("不正なマップ位置指定です");
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(direction, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_RETAIN);
  })]);
};
var ScrollMap = function ScrollMap(_ref4) {
  var direction = _ref4.direction,
    step = _ref4.step,
    speed = _ref4.speed,
    wait = _ref4.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetVehicleLocation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(direction, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION);
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(step), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(speed, function (v, t) {
    return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER_SPEED);
  }), wait]);
};
var SetMovementRoute = function SetMovementRoute(_ref5) {
  var id = _ref5.id,
    repeat = _ref5.repeat,
    skip = _ref5.skip,
    wait = _ref5.wait,
    routes = _ref5.routes;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetMovementRoute", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return typeof v === "number" ? t.validId(v) : t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER);
  }), repeat, skip, wait])].concat(_toConsumableArray(routes({
    jump: function jump(x, y) {
      return {
        name: "Jump",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(x), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(y)]
      };
    },
    wait: function wait(v) {
      return {
        name: "McWait",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(v)]
      };
    },
    changeSwitch: function changeSwitch(id, to) {
      return {
        name: "Switch".concat(to ? "On" : "Off"),
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
          return t.markSwitchId(v);
        })]
      };
    },
    changeSpeed: function changeSpeed(speed) {
      return {
        name: "ChangeSpeed",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(speed, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER_SPEED)]
      };
    },
    changeFreq: function changeFreq(freq) {
      return {
        name: "ChangeFrequency",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(freq, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER_FREQ)]
      };
    },
    changeImage: function changeImage(name, index) {
      return {
        name: "ChangeImage",
        args: [name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(index, {
          from: 0,
          to: 7
        })]
      };
    },
    changeOpacity: function changeOpacity(v) {
      return {
        name: "ChangeOpacity",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(v, {
          from: 0,
          to: 255
        })]
      };
    },
    changeBlendMode: function changeBlendMode(v) {
      return {
        name: "ChangeBlendMode",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(v, _constants__WEBPACK_IMPORTED_MODULE_0__.BLEND_MODE)]
      };
    },
    playSe: function playSe(sound) {
      return {
        name: "McPlaySe",
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(sound, function (v, t) {
          return t.markSoundArgs(v);
        })]
      };
    },
    script: function script(code) {
      return {
        name: "McScript",
        args: [code]
      };
    },
    //
    move: function move(dir) {
      var preset = _objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_ROUTE8), _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_METHOD);
      return {
        name: "Move".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(dir, preset)),
        args: []
      };
    },
    turn: function turn(dir) {
      var preset = _objectSpread(_objectSpread(_objectSpread({}, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION), _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_METHOD), _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_TURN_METHOD);
      return {
        name: "Turn".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(dir, preset)),
        args: []
      };
    },
    step: function step(dir) {
      return {
        name: "OneStep".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(dir, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_CAR)),
        args: []
      };
    },
    //
    changeWalkAnimation: function changeWalkAnimation(active) {
      return {
        name: "WalkingAnimation".concat(active ? "On" : "Off"),
        args: []
      };
    },
    changeStepAnimation: function changeStepAnimation(active) {
      return {
        name: "SteppingAnimation".concat(active ? "On" : "Off"),
        args: []
      };
    },
    changeDirectionFix: function changeDirectionFix(active) {
      return {
        name: "DirectionFix".concat(active ? "On" : "Off"),
        args: []
      };
    },
    changeNoClip: function changeNoClip(active) {
      return {
        name: "Through".concat(active ? "On" : "Off"),
        args: []
      };
    },
    changeTransparent: function changeTransparent(active) {
      return {
        name: "Transparent".concat(active ? "On" : "Off"),
        args: []
      };
    }
  }).map(function (_ref6) {
    var name = _ref6.name,
      args = _ref6.args;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, args);
  }))));
};
var GetOnOffVehicle = function GetOnOffVehicle() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GetOnOffVehicle");
};

/***/ }),

/***/ "./src/events/party.ts":
/*!*****************************!*\
  !*** ./src/events/party.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeArmors: () => (/* binding */ ChangeArmors),
/* harmony export */   ChangeGold: () => (/* binding */ ChangeGold),
/* harmony export */   ChangeItems: () => (/* binding */ ChangeItems),
/* harmony export */   ChangePartyMember: () => (/* binding */ ChangePartyMember),
/* harmony export */   ChangeWeapons: () => (/* binding */ ChangeWeapons)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");

var ChangeGold = function ChangeGold(_ref) {
  var op = _ref.op,
    value = _ref.value;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeGold", [op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value)]);
};
var ChangeItems = function ChangeItems(_ref2) {
  var id = _ref2.id,
    op = _ref2.op,
    value = _ref2.value;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeItems", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value)]);
};
var ChangeWeapons = function ChangeWeapons(_ref3) {
  var id = _ref3.id,
    op = _ref3.op,
    value = _ref3.value,
    includeEquipment = _ref3.includeEquipment;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeWeapons", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value), includeEquipment]);
};
var ChangeArmors = function ChangeArmors(_ref4) {
  var id = _ref4.id,
    op = _ref4.op,
    value = _ref4.value,
    includeEquipment = _ref4.includeEquipment;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeArmors", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value), includeEquipment]);
};
var ChangePartyMember = function ChangePartyMember(_ref5) {
  var id = _ref5.id,
    op = _ref5.op,
    value = _ref5.value,
    initialize = _ref5.initialize;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeItems", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value), initialize]);
};

/***/ }),

/***/ "./src/events/picture.ts":
/*!*******************************!*\
  !*** ./src/events/picture.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErasePicture: () => (/* binding */ ErasePicture),
/* harmony export */   MovePicture: () => (/* binding */ MovePicture),
/* harmony export */   RotatePicture: () => (/* binding */ RotatePicture),
/* harmony export */   ShowPicture: () => (/* binding */ ShowPicture),
/* harmony export */   TintPicture: () => (/* binding */ TintPicture)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var ShowPicture = function ShowPicture(_ref) {
  var id = _ref.id,
    name = _ref.name,
    position = _ref.position,
    scale = _ref.scale,
    blend = _ref.blend;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowPicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    var parse = v.mode === "DIRECT" ? t.validInt : function (x) {
      return t.markVariableId({
        variableId: x
      });
    };
    return "Position[".concat(t.markPreset(v.origin, _constants__WEBPACK_IMPORTED_MODULE_0__.PICTURE_ORIGIN), "][").concat(parse(position.x), "][").concat(parse(position.y), "]");
  }), scale && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(scale, function (v, t) {
    return "Scale[".concat(t.validInt(v.width), "][").concat(t.validInt(v.height), "]");
  }), blend && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(blend, function (v, t) {
    return "Blend[".concat(t.validRange(v.opacity, 0, 255), "][").concat(t.markPreset(v.mode, _constants__WEBPACK_IMPORTED_MODULE_0__.BLEND_MODE), "]");
  })])]);
};
var MovePicture = function MovePicture(_ref2) {
  var id = _ref2.id,
    position = _ref2.position,
    scale = _ref2.scale,
    blend = _ref2.blend,
    duration = _ref2.duration,
    easing = _ref2.easing;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("MovePicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(position, function (v, t) {
    var parse = v.mode === "DIRECT" ? t.validInt : function (x) {
      return t.markVariableId({
        variableId: x
      });
    };
    return "Position[".concat(t.markPreset(v.origin, _constants__WEBPACK_IMPORTED_MODULE_0__.PICTURE_ORIGIN), "][").concat(parse(position.x), "][").concat(parse(position.y), "]");
  }), scale && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(scale, function (v, t) {
    return "Scale[".concat(t.validInt(v.width), "][").concat(t.validInt(v.height), "]");
  }), blend && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(blend, function (v, t) {
    return "Blend[".concat(t.validRange(v.opacity, 0, 255), "][").concat(t.markPreset(v.mode, _constants__WEBPACK_IMPORTED_MODULE_0__.BLEND_MODE), "]");
  }), duration && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(duration, function (v, t) {
    return "Duration[".concat(t.validInt(v.time), "][").concat(v.wait ? "Wait" : "", "]");
  }), easing && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(easing, _constants__WEBPACK_IMPORTED_MODULE_0__.EASING)])]);
};
var RotatePicture = function RotatePicture(_ref3) {
  var id = _ref3.id,
    speed = _ref3.speed;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("RotatePicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(speed, {
    from: -90,
    to: 90
  })]);
};
var TintPicture = function TintPicture(_ref4) {
  var id = _ref4.id,
    color = _ref4.color,
    time = _ref4.time;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TintPicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [color && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(color, function (v, t) {
    if (typeof v === "string") return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.COLOR_TONE);
    return t.markColorTone(v);
  }), time])]);
};
var ErasePicture = function ErasePicture(_ref5) {
  var id = _ref5.id;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ErasePicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  })]);
};

/***/ }),

/***/ "./src/events/progress.ts":
/*!********************************!*\
  !*** ./src/events/progress.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelfSwitch: () => (/* binding */ SelfSwitch),
/* harmony export */   Switch: () => (/* binding */ Switch),
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   Variable: () => (/* binding */ Variable)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Switch = function Switch(_ref) {
  var id = _ref.id,
    toBe = _ref.toBe;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Switch", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    return t.isSwitchId(v) ? t.markSwitchId(v) : t.markFromTo(v);
  }), toBe]);
};
var Variable = function Variable(_ref2) {
  var id = _ref2.id,
    calc = _ref2.calc;
  var list = calc({
    set: function set(value) {
      return {
        op: "SET",
        value: value
      };
    },
    add: function add(value) {
      return {
        op: "ADD",
        value: value
      };
    },
    sub: function sub(value) {
      return {
        op: "SUB",
        value: value
      };
    },
    mul: function mul(value) {
      return {
        op: "MUL",
        value: value
      };
    },
    div: function div(value) {
      return {
        op: "DIV",
        value: value
      };
    },
    mod: function mod(value) {
      return {
        op: "MOD",
        value: value
      };
    }
  }, {
    variable: function variable(id) {
      return "V[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
    },
    random: function random(_ref3) {
      var from = _ref3.from,
        to = _ref3.to;
      return "Random[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(from), "][").concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(to), "]");
    },
    script: function script(js) {
      return "Script[".concat(js, "]");
    },
    game: {
      item: {
        itemCount: function itemCount(id) {
          return "GameData[Item][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        weaponCount: function weaponCount(id) {
          return "GameData[Weapon][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        armorCount: function armorCount(id) {
          return "GameData[Armor][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        }
      },
      actor: {
        level: function level(id) {
          return "GameData[Actor][Level][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        exp: function exp(id) {
          return "GameData[Actor][Exp][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        HP: function HP(id) {
          return "GameData[Actor][HP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        MP: function MP(id) {
          return "GameData[Actor][MP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        maxHP: function maxHP(id) {
          return "GameData[Actor][MaxHp][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        MaxMP: function MaxMP(id) {
          return "GameData[Actor][MaxMP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        attack: function attack(id) {
          return "GameData[Actor][Attack][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        defense: function defense(id) {
          return "GameData[Actor][Defense][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        mAttack: function mAttack(id) {
          return "GameData[Actor][M.Attack][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        mDefense: function mDefense(id) {
          return "GameData[Actor][M.Defense][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        agility: function agility(id) {
          return "GameData[Actor][Agility][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        luck: function luck(id) {
          return "GameData[Actor][Luck][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        },
        TP: function TP(id) {
          return "GameData[Actor][TP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), "]");
        }
      },
      enemy: {
        HP: function HP(index) {
          return "GameData[Enemy][HP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        MP: function MP(index) {
          return "GameData[Enemy][MP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        maxHP: function maxHP(index) {
          return "GameData[Enemy][MaxHp][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        MaxMP: function MaxMP(index) {
          return "GameData[Enemy][MaxMP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        attack: function attack(index) {
          return "GameData[Enemy][Attack][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        defense: function defense(index) {
          return "GameData[Enemy][Defense][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        mAttack: function mAttack(index) {
          return "GameData[Enemy][M.Attack][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        mDefense: function mDefense(index) {
          return "GameData[Enemy][M.Defense][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        agility: function agility(index) {
          return "GameData[Enemy][Agility][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        luck: function luck(index) {
          return "GameData[Enemy][Luck][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        },
        TP: function TP(index) {
          return "GameData[Enemy][TP][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), "]");
        }
      },
      character: {
        mapX: function mapX(characterId) {
          return "GameData[Character][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argCharacterIdWithPreset)(characterId), "][MapX]");
        },
        mapY: function mapY(characterId) {
          return "GameData[Character][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argCharacterIdWithPreset)(characterId), "][MapY]");
        },
        direction: function direction(characterId) {
          return "GameData[Character][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argCharacterIdWithPreset)(characterId), "][Direction]");
        },
        screenX: function screenX(characterId) {
          return "GameData[Character][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argCharacterIdWithPreset)(characterId), "][ScreenX]");
        },
        screenY: function screenY(characterId) {
          return "GameData[Character][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argCharacterIdWithPreset)(characterId), "][ScreenY]");
        }
      },
      last: {
        usedSkillId: function usedSkillId() {
          return "GameData[Last][Used Skill ID]";
        },
        usedItemId: function usedItemId() {
          return "GameData[Last][Used Item ID]";
        },
        actionActorId: function actionActorId() {
          return "GameData[Last][Actor ID to Act]";
        },
        actionEnemyIndex: function actionEnemyIndex() {
          return "GameData[Last][Enemy Index to Act]";
        },
        targetActorId: function targetActorId() {
          return "GameData[Last][Target Actor ID]";
        },
        targetEnemyIndex: function targetEnemyIndex() {
          return "GameData[Last][Target Enemy Index]";
        }
      },
      etc: {
        memberActorId: function memberActorId(index) {
          return "GameData[Party][".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(index), "]");
        },
        memberCount: function memberCount() {
          return "GameData[PartyMembers]";
        },
        gold: function gold() {
          return "GameData[Gold]";
        },
        steps: function steps() {
          return "GameData[Steps]";
        },
        playTime: function playTime() {
          return "GameData[PlayTime]";
        },
        timer: function timer() {
          return "GameData[Timer]";
        },
        saveCount: function saveCount() {
          return "GameData[SaveCount]";
        },
        battleCount: function battleCount() {
          return "GameData[BattleCount]";
        },
        winCount: function winCount() {
          return "GameData[WinCount]";
        },
        escapeCount: function escapeCount() {
          return "GameData[EscapeCount]";
        }
      }
    }
  });
  return list.map(function (_ref4) {
    var op = _ref4.op,
      value = _ref4.value;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_OPERATOR[op], [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
      return t.isFromTo(v) ? t.markFromTo(v) : v;
    }), value]);
  }).join("\n");
};
var SelfSwitch = function SelfSwitch(_ref5) {
  var id = _ref5.id,
    toBe = _ref5.toBe;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SelfSwitch", [id, toBe]);
};
var Timer = function Timer(_ref6) {
  var mode = _ref6.mode,
    time = _ref6.time;
  if (typeof time === "string") {
    var _time$match;
    var _ref7 = (_time$match = time.match(/^(\d{1,}):(\d{1,})$/)) !== null && _time$match !== void 0 ? _time$match : [],
      _ref8 = _slicedToArray(_ref7, 3),
      isValid = _ref8[0],
      _min = _ref8[1],
      _sec = _ref8[2];
    if (isValid) {
      return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Timer", [_constants__WEBPACK_IMPORTED_MODULE_0__.TIMER_MODE[mode], _min, _sec]);
    } else {
      throw new Error("文字列でタイマー設定する場合は 00:00 形式で入力してください");
    }
  }
  var min = time.min,
    sec = time.sec;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Timer", [_constants__WEBPACK_IMPORTED_MODULE_0__.TIMER_MODE[mode], min, sec]);
};

/***/ }),

/***/ "./src/events/scene.ts":
/*!*****************************!*\
  !*** ./src/events/scene.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BattleProcessing: () => (/* binding */ BattleProcessing),
/* harmony export */   GameOver: () => (/* binding */ GameOver),
/* harmony export */   NameInputProcessing: () => (/* binding */ NameInputProcessing),
/* harmony export */   OpenMenuScreen: () => (/* binding */ OpenMenuScreen),
/* harmony export */   OpenSaveScreen: () => (/* binding */ OpenSaveScreen),
/* harmony export */   ReturnToTitleScreen: () => (/* binding */ ReturnToTitleScreen),
/* harmony export */   ShopProcessing: () => (/* binding */ ShopProcessing)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var BattleProcessing = function BattleProcessing(_ref) {
  var id = _ref.id,
    ifWin = _ref.ifWin,
    ifEscape = _ref.ifEscape,
    ifLose = _ref.ifLose;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("BattleProcessing", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(id, function (v, t) {
    if (typeof v === "string") return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.BATTLE_TROOP);
    if (t.isVariableId(v)) return t.markVariableId(v);
    return t.validId(v);
  })]), ifWin ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfWin"), ifWin]) : undefined, ifEscape ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfEscape"), ifEscape]) : undefined, ifLose ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfLose"), ifLose]) : undefined, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("End")]);
};
var ShopProcessing = function ShopProcessing(_ref2) {
  var items = _ref2.items,
    purchaseOnly = _ref2.purchaseOnly;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShopProcessing", [purchaseOnly])].concat(_toConsumableArray(items.map(function (_ref3) {
    var type = _ref3.type,
      id = _ref3.id,
      price = _ref3.price;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Merchandise", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(type, _constants__WEBPACK_IMPORTED_MODULE_0__.SHOP_ITEM), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(price)]);
  }))));
};
var NameInputProcessing = function NameInputProcessing(_ref4) {
  var id = _ref4.id,
    length = _ref4.length;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("NameInputProcessing", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(length, {
    from: 1,
    to: 8
  })]);
};
var OpenMenuScreen = function OpenMenuScreen() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("OpenMenuScreen");
};
var OpenSaveScreen = function OpenSaveScreen() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("OpenSaveScreen");
};
var GameOver = function GameOver() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GameOver");
};
var ReturnToTitleScreen = function ReturnToTitleScreen() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ReturnToTitleScreen");
};

/***/ }),

/***/ "./src/events/screen.ts":
/*!******************************!*\
  !*** ./src/events/screen.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeIn: () => (/* binding */ FadeIn),
/* harmony export */   FadeOut: () => (/* binding */ FadeOut),
/* harmony export */   FlashScreen: () => (/* binding */ FlashScreen),
/* harmony export */   SetWeatherEffect: () => (/* binding */ SetWeatherEffect),
/* harmony export */   ShakeScreen: () => (/* binding */ ShakeScreen),
/* harmony export */   TintScreen: () => (/* binding */ TintScreen)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var FadeOut = function FadeOut() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("FadeOut");
};
var FadeIn = function FadeIn() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("FadeIn");
};
var TintScreen = function TintScreen(_ref) {
  var color = _ref.color,
    time = _ref.time;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TintScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [color && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(color, function (v, t) {
    if (typeof v === "string") return t.markPreset(v, _constants__WEBPACK_IMPORTED_MODULE_0__.COLOR_TONE);
    return t.markColorTone(v);
  }), time])]);
};
var FlashScreen = function FlashScreen(_ref2) {
  var color = _ref2.color,
    time = _ref2.time,
    wait = _ref2.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("FlashScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(color, function (v, t) {
    return t.markColorArgs(v);
  }), time, wait]);
};
var ShakeScreen = function ShakeScreen(_ref3) {
  var velocity = _ref3.velocity,
    speed = _ref3.speed,
    time = _ref3.time,
    wait = _ref3.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShakeScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(velocity), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(speed), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(time), wait]);
};
var SetWeatherEffect = function SetWeatherEffect(_ref4) {
  var weather = _ref4.weather,
    velocity = _ref4.velocity,
    time = _ref4.time,
    wait = _ref4.wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetWeatherEffect", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(weather, _constants__WEBPACK_IMPORTED_MODULE_0__.WEATHER), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(velocity), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(time), wait]);
};

/***/ }),

/***/ "./src/events/system.ts":
/*!******************************!*\
  !*** ./src/events/system.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeActorImages: () => (/* binding */ ChangeActorImages),
/* harmony export */   ChangeEncounter: () => (/* binding */ ChangeEncounter),
/* harmony export */   ChangeFormationAccess: () => (/* binding */ ChangeFormationAccess),
/* harmony export */   ChangeMenuAccess: () => (/* binding */ ChangeMenuAccess),
/* harmony export */   ChangeSaveAccess: () => (/* binding */ ChangeSaveAccess),
/* harmony export */   ChangeVehicleBgm: () => (/* binding */ ChangeVehicleBgm),
/* harmony export */   ChangeVehicleImage: () => (/* binding */ ChangeVehicleImage),
/* harmony export */   ChangeWindowColor: () => (/* binding */ ChangeWindowColor)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.ts");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate */ "./src/validate.ts");


var ChangeVehicleBgm = function ChangeVehicleBgm(_ref) {
  var vehicle = _ref.vehicle,
    sound = _ref.sound;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeVehicleBgm", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(vehicle, _constants__WEBPACK_IMPORTED_MODULE_0__.VEHICLE), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(sound, function (v, t) {
    return t.markSoundArgs(v);
  })]);
};
var commonChange = function commonChange(name) {
  var component = function component(_ref2) {
    var allow = _ref2.allow;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [allow]);
  };
  return component;
};
var ChangeSaveAccess = commonChange("ChangeSaveAccess");
var ChangeMenuAccess = commonChange("ChangeMenuAccess");
var ChangeEncounter = commonChange("ChangeEncounter");
var ChangeFormationAccess = commonChange("ChangeFormationAccess");
var ChangeWindowColor = function ChangeWindowColor(_ref3) {
  var color = _ref3.color;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeWindowColor", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.arg)(color, function (v, t) {
    return t.markColorArgs(v);
  })]);
};
var ChangeActorImages = function ChangeActorImages(_ref4) {
  var id = _ref4.id,
    face = _ref4.face,
    character = _ref4.character,
    battler = _ref4.battler;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeActorImages", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), face.name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(face.index, {
    from: 0,
    to: 15
  }), character.name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(character.index, {
    from: 0,
    to: 7
  }), battler]);
};
var ChangeVehicleImage = function ChangeVehicleImage(_ref5) {
  var vehicle = _ref5.vehicle,
    image = _ref5.image;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeActorImages", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(vehicle, _constants__WEBPACK_IMPORTED_MODULE_0__.VEHICLE), image.name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(image.index, {
    from: 0,
    to: 7
  })]);
};

/***/ }),

/***/ "./src/parse.ts":
/*!**********************!*\
  !*** ./src/parse.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ev: () => (/* binding */ ev)
/* harmony export */ });
var ev = function ev() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }
  return arr.join("\n");
};

/***/ }),

/***/ "./src/validate.ts":
/*!*************************!*\
  !*** ./src/validate.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arg: () => (/* binding */ arg),
/* harmony export */   argActorIdWithPreset: () => (/* binding */ argActorIdWithPreset),
/* harmony export */   argCharacterIdWithPreset: () => (/* binding */ argCharacterIdWithPreset),
/* harmony export */   argEnemyIndex: () => (/* binding */ argEnemyIndex),
/* harmony export */   argEnemyIndexWithPreset: () => (/* binding */ argEnemyIndexWithPreset),
/* harmony export */   argEnemyIndexWithPresetAndVariableId: () => (/* binding */ argEnemyIndexWithPresetAndVariableId),
/* harmony export */   argId: () => (/* binding */ argId),
/* harmony export */   argInt: () => (/* binding */ argInt),
/* harmony export */   argIntOrVariableId: () => (/* binding */ argIntOrVariableId),
/* harmony export */   argNumberPreset: () => (/* binding */ argNumberPreset),
/* harmony export */   argPreset: () => (/* binding */ argPreset),
/* harmony export */   argRange: () => (/* binding */ argRange),
/* harmony export */   createPresetArg: () => (/* binding */ createPresetArg),
/* harmony export */   createPresetArgWithVariableId: () => (/* binding */ createPresetArgWithVariableId),
/* harmony export */   joinKeep: () => (/* binding */ joinKeep),
/* harmony export */   joinSkip: () => (/* binding */ joinSkip),
/* harmony export */   tag: () => (/* binding */ tag)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var arg = function arg(value, converter) {
  var validInt = function validInt(v) {
    if (v % 1 !== 0) {
      throw new Error("\u5024\u306F\u6574\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002");
    }
    return v;
  };
  var range = function range(v, min, max) {
    if (!(min <= v && v <= max)) {
      throw new Error("\u5024\u306F ".concat(min, " \uFF5E ").concat(max, " \u306E\u9593\u306E\u5024\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"));
    }
    return v;
  };
  var validOne = function validOne(v) {
    return range(validInt(v), 1, Infinity);
  };
  return "".concat(converter(value, {
    markVariableId: function markVariableId(v) {
      return "V[".concat(v.variableId, "]");
    },
    markSwitchId: function markSwitchId(v) {
      return "SW[".concat(v.switchId, "]");
    },
    markFromTo: function markFromTo(v) {
      return "".concat(v.from, "-").concat(v.to);
    },
    markPreset: function markPreset(v, p) {
      return p[v];
    },
    markMapPosition: function markMapPosition(v, mode) {
      return "".concat(mode === "DIRECT" ? "Direct" : "WithVariables", "[").concat(v.id, "][").concat(v.x, "][").concat(v.y, "]");
    },
    markSoundArgs: function markSoundArgs(v) {
      var _v$name;
      return joinKeep(null, [(_v$name = v.name) !== null && _v$name !== void 0 ? _v$name : "None", v.volume, v.pitch, v.pan]);
    },
    markColorTone: function markColorTone(v) {
      return "ColorTone[".concat(v.r, "][").concat(v.g, "][").concat(v.b, "]").concat(v !== null && v !== void 0 && v.x ? "[".concat(v.x, "]") : "");
    },
    markColorArgs: function markColorArgs(v) {
      return joinSkip(null, [v.r, v.g, v.b, v === null || v === void 0 ? void 0 : v.x]);
    },
    //
    validInt: validInt,
    validRange: function validRange(v, min, max) {
      return range(validInt(v), min, max);
    },
    validOne: validOne,
    validId: validOne,
    //
    isVariableId: function isVariableId(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.variableId);
    },
    isSwitchId: function isSwitchId(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.switchId);
    },
    isFromTo: function isFromTo(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.from) && !!(v !== null && v !== void 0 && v.to);
    },
    isMapPosition: function isMapPosition(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.id) && !!(v !== null && v !== void 0 && v.x) && !!(v !== null && v !== void 0 && v.y);
    },
    isSound: function isSound(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.name) && !!(v !== null && v !== void 0 && v.volume) && !!(v !== null && v !== void 0 && v.pitch) && !!(v !== null && v !== void 0 && v.pan);
    },
    isColor: function isColor(v) {
      if (typeof v === "number") return false;
      return !!(v !== null && v !== void 0 && v.r) && !!(v !== null && v !== void 0 && v.g) && !!(v !== null && v !== void 0 && v.b);
    }
  }));
};
var joinKeep = function joinKeep(delim, arr) {
  return arr.join(delim !== null && delim !== void 0 ? delim : ", ");
};
var joinSkip = function joinSkip(delim, arr) {
  return arr.filter(function (x) {
    return x !== undefined;
  }).join(delim !== null && delim !== void 0 ? delim : ", ");
};
var tag = function tag(name, arg, textChildren) {
  var args = joinKeep(null, arg !== null && arg !== void 0 ? arg : []);
  return joinSkip("\n", [args !== "" ? "<".concat(name, ": ").concat(args, ">") : "<".concat(name, ">")].concat(_toConsumableArray(textChildren ? [textChildren, "</".concat(name, ">")] : [])));
};
var argInt = function argInt(v) {
  return arg(v, function (v, t) {
    return t.validInt(v);
  });
};
var argId = function argId(v) {
  return arg(v, function (v, t) {
    return t.validOne(v);
  });
};
var argEnemyIndex = function argEnemyIndex(v) {
  return arg(v, function (v, t) {
    return t.validRange(v, 1, 8);
  });
};
var argPreset = function argPreset(v, preset) {
  return arg(v, function (v, t) {
    return t.markPreset(v, preset);
  });
};
var argNumberPreset = function argNumberPreset(v, preset, isId) {
  return arg(v, function (v, t) {
    return typeof v === "number" ? isId ? t.validId(v) : t.validInt(v) : t.markPreset(v, preset);
  });
};
var argRange = function argRange(v, range) {
  return arg(v, function (v, t) {
    return t.validRange(v, range.from, range.to);
  });
};
var createPresetArg = function createPresetArg(preset) {
  return function (v) {
    return arg(v, function (v, t) {
      return typeof v === "number" ? t.validId(v) : t.markPreset(v, preset);
    });
  };
};
var createPresetArgWithVariableId = function createPresetArgWithVariableId(preset, range) {
  return function (v) {
    return arg(v, function (v, t) {
      if (typeof v === "string") return t.markPreset(v, preset);
      if (t.isVariableId(v)) return t.markVariableId(v);
      if (typeof v === "number") {
        if (range) t.validRange(v, range.from, range.to);
        return t.validId(v);
      }
      throw new Error("対応していない型が指定されました");
    });
  };
};
var argCharacterIdWithPreset = createPresetArg(_constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER);
var argIntOrVariableId = function argIntOrVariableId(v) {
  return arg(v, function (v, t) {
    return t.isVariableId(v) ? t.markVariableId(v) : v;
  });
};
var argActorIdWithPreset = createPresetArgWithVariableId(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTOR_MEMBER);
var argEnemyIndexWithPreset = createPresetArgWithVariableId(_constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MEMBER);
var argEnemyIndexWithPresetAndVariableId = createPresetArgWithVariableId(_constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MEMBER, {
  from: 1,
  to: 8
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   events: () => (/* binding */ events),
/* harmony export */   parse: () => (/* reexport safe */ _parse__WEBPACK_IMPORTED_MODULE_0__.ev)
/* harmony export */ });
/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ "./src/parse.ts");
/* harmony import */ var _events_actor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events/actor */ "./src/events/actor.ts");
/* harmony import */ var _events_battle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/battle */ "./src/events/battle.ts");
/* harmony import */ var _events_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/character */ "./src/events/character.ts");
/* harmony import */ var _events_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/flow */ "./src/events/flow.ts");
/* harmony import */ var _events_interpreter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/interpreter */ "./src/events/interpreter.ts");
/* harmony import */ var _events_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/map */ "./src/events/map.ts");
/* harmony import */ var _events_media__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/media */ "./src/events/media.ts");
/* harmony import */ var _events_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/message */ "./src/events/message.ts");
/* harmony import */ var _events_movement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/movement */ "./src/events/movement.ts");
/* harmony import */ var _events_party__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/party */ "./src/events/party.ts");
/* harmony import */ var _events_picture__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/picture */ "./src/events/picture.ts");
/* harmony import */ var _events_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/progress */ "./src/events/progress.ts");
/* harmony import */ var _events_scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/scene */ "./src/events/scene.ts");
/* harmony import */ var _events_screen__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/screen */ "./src/events/screen.ts");
/* harmony import */ var _events_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/system */ "./src/events/system.ts");
















var events = {
  message: _events_message__WEBPACK_IMPORTED_MODULE_8__,
  progress: _events_progress__WEBPACK_IMPORTED_MODULE_12__,
  flow: _events_flow__WEBPACK_IMPORTED_MODULE_4__,
  party: _events_party__WEBPACK_IMPORTED_MODULE_10__,
  actor: _events_actor__WEBPACK_IMPORTED_MODULE_1__,
  movement: _events_movement__WEBPACK_IMPORTED_MODULE_9__,
  character: _events_character__WEBPACK_IMPORTED_MODULE_3__,
  picture: _events_picture__WEBPACK_IMPORTED_MODULE_11__,
  screen: _events_screen__WEBPACK_IMPORTED_MODULE_14__,
  media: _events_media__WEBPACK_IMPORTED_MODULE_7__,
  scene: _events_scene__WEBPACK_IMPORTED_MODULE_13__,
  system: _events_system__WEBPACK_IMPORTED_MODULE_15__,
  map: _events_map__WEBPACK_IMPORTED_MODULE_6__,
  battle: _events_battle__WEBPACK_IMPORTED_MODULE_2__,
  interpreter: _events_interpreter__WEBPACK_IMPORTED_MODULE_5__
};
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map