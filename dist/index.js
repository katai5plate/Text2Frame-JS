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


var argActorIdWithPreset = (0,_validate__WEBPACK_IMPORTED_MODULE_1__.createPresetArgWithVariableId)(_constants__WEBPACK_IMPORTED_MODULE_0__.ACTOR_MEMBER);
var ChangeHp = function ChangeHp(id, op, value, allowKnockout) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeHp", [argActorIdWithPreset(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowKnockout]);
};
var commonChange = function commonChange(name) {
  var component = function component(id, op, value) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [argActorIdWithPreset(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
  };
  return component;
};
var ChangeMp = commonChange("ChangeMp");
var ChangeTp = commonChange("ChangeTp");
var ChangeState = commonChange("ChangeState");
var ChangeSkill = commonChange("ChangeSkill");
var RecoverAll = function RecoverAll(id) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("RecoverAll", [argActorIdWithPreset(id)]);
};
var commonLevelUp = function commonLevelUp(name) {
  var component = function component(id, op, value, allowLevelUp) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [argActorIdWithPreset(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowLevelUp]);
  };
  return component;
};
var ChangeExp = commonLevelUp("ChangeExp");
var ChangeLevel = commonLevelUp("ChangeLevel");
var ChangeParameter = function ChangeParameter(id, parameter, op, value) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeParameter", [argActorIdWithPreset(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(parameter, _constants__WEBPACK_IMPORTED_MODULE_0__.ACTER_PARAMETER), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
};
var ChangeEquipment = function ChangeEquipment(id, equipType, equipId) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeEquipment", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(equipType), equipId && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(equipId)]);
};
var ChangeName = function ChangeName(id, name) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeName", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), name]);
};
var ChangeClass = function ChangeClass(id, classId, saveLevelAndExp) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeClass", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(classId), saveLevelAndExp]);
};
var ChangeNickname = function ChangeNickname(id, name) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeNickname", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), name]);
};
var ChangeProfile = function ChangeProfile(id, profile) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeProfile", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), profile[0], profile[1]]);
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


var argEnemyIndexWithPreset = (0,_validate__WEBPACK_IMPORTED_MODULE_1__.createPresetArgWithVariableId)(_constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MEMBER);
var argEnemyIndexWithPresetAndVariableId = (0,_validate__WEBPACK_IMPORTED_MODULE_1__.createPresetArgWithVariableId)(_constants__WEBPACK_IMPORTED_MODULE_0__.ENEMY_MEMBER, {
  from: 1,
  to: 8
});
var ChangeEnemyHp = function ChangeEnemyHp(index, op, value, allowKnockout) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeEnemyHp", [argEnemyIndexWithPresetAndVariableId(index), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value), allowKnockout]);
};
var commonChange = function commonChange(name) {
  var component = function component(index, op, value) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [argEnemyIndexWithPresetAndVariableId(index), op, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argIntOrVariableId)(value)]);
  };
  return component;
};
var ChangeEnemyMp = commonChange("ChangeEnemyMp");
var ChangeEnemyTp = commonChange("ChangeEnemyTp");
var ChangeEnemyState = commonChange("ChangeEnemyState");
var EnemyRecoverAll = function EnemyRecoverAll(index) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("EnemyRecoverAll", [argEnemyIndexWithPresetAndVariableId(index)]);
};
var EnemyAppear = function EnemyAppear(index) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("EnemyAppear", [argEnemyIndexWithPreset(index)]);
};
var commonIndexAndEnemyId = function commonIndexAndEnemyId(name) {
  var component = function component(index, id) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(index), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id)]);
  };
  return component;
};
var EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
var ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");
var ForceAction = function ForceAction(mode, index, id, target) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ForceAction", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(index, {
    number: function number(x) {
      return mode === "ACTOR" ? "Actor[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(x), "]") : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argEnemyIndex)(x);
    }
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(target, {
    string: function string(x) {
      return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(x, _constants__WEBPACK_IMPORTED_MODULE_0__.ACTION_TARGET);
    },
    number: function number(x) {
      return "Index ".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(x, {
        from: 1,
        to: 8
      }));
    }
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


var argNumberPreset = function argNumberPreset(v, preset) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(v, {
    string: function string(x) {
      return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(x, preset);
    },
    number: _validate__WEBPACK_IMPORTED_MODULE_1__.argId
  });
};
var commonChange = function commonChange(name) {
  var component = function component(active) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [active]);
  };
  return component;
};
var ChangeTransparency = commonChange("ChangeTransparency");
var ChangePlayerFollowers = commonChange("ChangePlayerFollowers");
var GatherFollowers = function GatherFollowers() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GatherFollowers");
};
var ShowAnimation = function ShowAnimation(id, animationId, wait) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowAnimation", [argNumberPreset(id, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(animationId), wait]);
};
var ShowBalloonIcon = function ShowBalloonIcon(id, balloon, wait) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowBalloonIcon", [argNumberPreset(id, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(balloon, _constants__WEBPACK_IMPORTED_MODULE_0__.BALLOON), wait]);
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
/* harmony export */   Check: () => (/* binding */ Check),
/* harmony export */   Comment: () => (/* binding */ Comment),
/* harmony export */   CommonEvent: () => (/* binding */ CommonEvent),
/* harmony export */   ExitEventProcessing: () => (/* binding */ ExitEventProcessing),
/* harmony export */   Goto: () => (/* binding */ Goto),
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

var Check = function Check(condition, then, otherwise) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("If", ["Script", condition]), then].concat(_toConsumableArray(otherwise ? (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Else"), otherwise]) : []), [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("End")]));
};
var Loop = function Loop(content) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Loop"), content, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("RepeatAbove")]);
};
var LoopBreak = function LoopBreak() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("BreakLoop");
};
var ExitEventProcessing = function ExitEventProcessing() {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ExitEventProcessing");
};
var CommonEvent = function CommonEvent(id) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("CommonEvent", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id)]);
};
var Label = function Label(name) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Label", [name]);
};
var Goto = function Goto(name) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("JumpToLabel", [name]);
};
var Comment = function Comment(text) {
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

var Wait = function Wait(time) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Wait", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argInt)(time)]);
};
var Script = function Script(code) {
  var match = code.toString().match(/\{([\s\S]*)\}/);
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("Script", undefined, match ? match[1].trim() : "");
};
var PluginCommandMV = function PluginCommandMV(command) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("PluginCommand", [command]);
};
var PluginCommandMZ = function PluginCommandMZ(name, method, command, args) {
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


var ChangeMapNameDisplay = function ChangeMapNameDisplay(allow) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeMapNameDisplay", [allow]);
};
var ChangeTileset = function ChangeTileset(id) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeTileset", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id)]);
};
var ChangeBattleBackGround = function ChangeBattleBackGround(images) {
  var _images$, _images$2;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeBattleBackGround", [(_images$ = images[0]) !== null && _images$ !== void 0 ? _images$ : "None", (_images$2 = images[1]) !== null && _images$2 !== void 0 ? _images$2 : "None"]);
};
var ChangeParallax = function ChangeParallax(name, scroll) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeParallax", [name, scroll.x && "LoopHorizontally[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(scroll.x, {
    from: -32,
    to: 32
  }), "]"), scroll.y && "LoopVertically[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(scroll.y, {
    from: -32,
    to: 32
  }), "]")]);
};
var GetLocationInfo = function GetLocationInfo(variableId, layer, position) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("GetLocationInfo", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(variableId), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(layer, _constants__WEBPACK_IMPORTED_MODULE_0__.LOCATION), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(position, {
    object: function object(value, e) {
      var v = value;
      if ("x" in v && "y" in v) {
        if (typeof v.x === "number") return "Direct[".concat(v.x, "][").concat(v.y, "]");
        if (v.x.variableId) return "WithVariables[".concat(v.x, "][").concat(v.y, "]");
      }
      throw e();
    }
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
  var component = function component(sound) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argsSound)(sound)]);
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
  var component = function component(time) {
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
var PlayMovie = function PlayMovie(name) {
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


var argChoices = function argChoices(value, preset) {
  return typeof value === "number" ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(value, {
    from: 1,
    to: 6
  }) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(value, preset);
};
var Window = function Window(_ref) {
  var face = _ref.face,
    position = _ref.position,
    background = _ref.background,
    name = _ref.name;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [background && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Background", [background]), position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("WindowPosition", [position]), face && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Face", ["".concat(face.name, "(").concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(face.index, {
    from: 0,
    to: 15
  }), ")")]), name && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Name", [name])]);
};
var ShowChoices = function ShowChoices(cases, _ref2) {
  var background = _ref2.background,
    position = _ref2.position,
    init = _ref2.init,
    cancel = _ref2.cancel;
  if (cases.filter(function (caseItem) {
    return caseItem.name === null;
  }).length >= 2) throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowChoices", [background && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(background, _constants__WEBPACK_IMPORTED_MODULE_0__.WINDOW_BACKGROUND), position && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(position, _constants__WEBPACK_IMPORTED_MODULE_0__.WINDOW_POSITION_HORIZONTAL), init && argChoices(init, _constants__WEBPACK_IMPORTED_MODULE_0__.CHOICES_INIT), cancel && argChoices(cancel, _constants__WEBPACK_IMPORTED_MODULE_0__.CHOICES_CANCEL)]), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", cases.map(function (_ref3) {
    var name = _ref3.name,
      then = _ref3.then;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [name ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("When", [name]) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("WhenCancel"), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [then])])]);
  })), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("End")]);
};
var InputNumber = function InputNumber(variableId, digit) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("InputNumber", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(variableId), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(digit, {
    from: 1,
    to: 8
  })]);
};
var SelectItem = function SelectItem(variableId, itemType) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SelectItem", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(variableId), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(itemType, _constants__WEBPACK_IMPORTED_MODULE_0__.ITEM_TYPE)]);
};
var ScrollingText = function ScrollingText(text, _ref4) {
  var _ref4$speed = _ref4.speed,
    speed = _ref4$speed === void 0 ? 2 : _ref4$speed,
    noSkip = _ref4.noSkip;
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


var argIdOrPreset = function argIdOrPreset(value, preset) {
  return typeof value === "number" ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(value) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(value, preset);
};
var TransferPlayer = function TransferPlayer(mode, position, direction, fade) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TransferPlayer", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argMapPosition)(position, mode), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(direction, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_RETAIN), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(fade, _constants__WEBPACK_IMPORTED_MODULE_0__.FADE)]);
};
var SetVehicleLocation = function SetVehicleLocation(mode, vehicle, position) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetVehicleLocation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(vehicle, _constants__WEBPACK_IMPORTED_MODULE_0__.VEHICLE), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argMapPosition)(position, mode)]);
};
var SetEventLocation = function SetEventLocation(mode, id, position, direction) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetEventLocation", [argIdOrPreset(id, _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT), mode === "EXCHANGE" ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(position, {
    string: function string(x) {
      return "Exchange[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(x, _constants__WEBPACK_IMPORTED_MODULE_0__.EVENT), "]");
    },
    number: function number(x) {
      return "Exchange[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(x), "]");
    }
  }) : (0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(position, {
    mapPosition: function mapPosition(x) {
      return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argMapPosition)(x, mode);
    }
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(direction, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_RETAIN)]);
};
var ScrollMap = function ScrollMap(direction, step, speed, wait) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetVehicleLocation", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(direction, _constants__WEBPACK_IMPORTED_MODULE_0__.DIRECTION), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(step), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(speed, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER_SPEED), wait]);
};
var SetMovementRoute = function SetMovementRoute(id, routes) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$repeat = _ref.repeat,
    repeat = _ref$repeat === void 0 ? false : _ref$repeat,
    _ref$skip = _ref.skip,
    skip = _ref$skip === void 0 ? false : _ref$skip,
    _ref$wait = _ref.wait,
    wait = _ref$wait === void 0 ? true : _ref$wait;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SetMovementRoute", [argIdOrPreset(id, _constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER), repeat, skip, wait])].concat(_toConsumableArray(routes({
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
    changeSwitch: function changeSwitch(switchId, to) {
      return {
        name: "Switch".concat(to ? "On" : "Off"),
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(switchId)]
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
        args: [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argsSound)(sound)]
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
  }).map(function (_ref2) {
    var name = _ref2.name,
      args = _ref2.args;
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

var ChangeGold = function ChangeGold(op, value) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeGold", [op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value)]);
};
var ChangeItems = function ChangeItems(id, op, value) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)("ChangeItems", [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value)]);
};
var commonChange = function commonChange(name) {
  var component = function component(id, op, value, includeEquipment) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_0__.tag)(name, [(0,_validate__WEBPACK_IMPORTED_MODULE_0__.argId)(id), op, (0,_validate__WEBPACK_IMPORTED_MODULE_0__.argIntOrVariableId)(value), includeEquipment]);
  };
  return component;
};
var ChangeWeapons = commonChange("ChangeWeapons");
var ChangeArmors = commonChange("ChangeArmors");
var ChangePartyMember = function ChangePartyMember(id, op, value, initialize) {
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


var argPicturePosition = function argPicturePosition(position) {
  var parse = position.mode === "DIRECT" ? _validate__WEBPACK_IMPORTED_MODULE_1__.argInt : function (variableId) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argVariableId)({
      variableId: variableId
    });
  };
  return "Position[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(position.origin, _constants__WEBPACK_IMPORTED_MODULE_0__.PICTURE_ORIGIN), "][").concat(parse(position.x), "][").concat(parse(position.y), "]");
};
var argPictureScale = function argPictureScale(size) {
  return "Scale[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(size.width), "][").concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(size.height), "]");
};
var argPictureBlend = function argPictureBlend(blend) {
  return "Blend[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(blend.opacity, {
    from: 0,
    to: 255
  }), "][").concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(blend.mode, _constants__WEBPACK_IMPORTED_MODULE_0__.BLEND_MODE), "]");
};
var argPictureDuration = function argPictureDuration(duration) {
  return "Duration[".concat((0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(duration.time), "][").concat(duration.wait ? "Wait" : "", "]");
};
var ShowPicture = function ShowPicture(id, name, _ref) {
  var position = _ref.position,
    scale = _ref.scale,
    blend = _ref.blend;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShowPicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [position && argPicturePosition(position), scale && argPictureScale(scale), blend && argPictureBlend(blend)])]);
};
var MovePicture = function MovePicture(id, _ref2) {
  var position = _ref2.position,
    scale = _ref2.scale,
    blend = _ref2.blend,
    duration = _ref2.duration,
    easing = _ref2.easing;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("MovePicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [position && argPicturePosition(position), scale && argPictureScale(scale), blend && argPictureBlend(blend), duration && argPictureDuration(duration), easing && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(easing, _constants__WEBPACK_IMPORTED_MODULE_0__.EASING)])]);
};
var RotatePicture = function RotatePicture(id, speed) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("RotatePicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(speed, {
    from: -90,
    to: 90
  })]);
};
var TintPicture = function TintPicture(id, color, time) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TintPicture", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(id, {
    from: 1,
    to: 100
  }), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [color && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argColorTone)(color), time])]);
};
var ErasePicture = function ErasePicture(id) {
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


var argCharacterIdWithPreset = (0,_validate__WEBPACK_IMPORTED_MODULE_1__.createPresetArg)(_constants__WEBPACK_IMPORTED_MODULE_0__.CHARACTER);
var Switch = function Switch(id, toBe) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Switch", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(id, {
    switchId: _validate__WEBPACK_IMPORTED_MODULE_1__.argSwitchId,
    fromTo: _validate__WEBPACK_IMPORTED_MODULE_1__.argFromTo
  }), toBe]);
};
var Variable = function Variable(id, calc) {
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
    random: function random(_ref) {
      var from = _ref.from,
        to = _ref.to;
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
          return "GameData[Character][".concat(argCharacterIdWithPreset(characterId), "][MapX]");
        },
        mapY: function mapY(characterId) {
          return "GameData[Character][".concat(argCharacterIdWithPreset(characterId), "][MapY]");
        },
        direction: function direction(characterId) {
          return "GameData[Character][".concat(argCharacterIdWithPreset(characterId), "][Direction]");
        },
        screenX: function screenX(characterId) {
          return "GameData[Character][".concat(argCharacterIdWithPreset(characterId), "][ScreenX]");
        },
        screenY: function screenY(characterId) {
          return "GameData[Character][".concat(argCharacterIdWithPreset(characterId), "][ScreenY]");
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
  return list.map(function (_ref2) {
    var op = _ref2.op,
      value = _ref2.value;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_OPERATOR[op], [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(id, {
      fromTo: _validate__WEBPACK_IMPORTED_MODULE_1__.argFromTo,
      number: _validate__WEBPACK_IMPORTED_MODULE_1__.argId
    }), value]);
  }).join("\n");
};
var SelfSwitch = function SelfSwitch(id, toBe) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("SelfSwitch", [id, toBe]);
};
var Timer = function Timer(mode, time) {
  if (typeof time === "string") {
    var _time$match;
    var _ref3 = (_time$match = time.match(/^(\d{1,}):(\d{1,})$/)) !== null && _time$match !== void 0 ? _time$match : [],
      _ref4 = _slicedToArray(_ref3, 3),
      isValid = _ref4[0],
      _min = _ref4[1],
      _sec = _ref4[2];
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


var BattleProcessing = function BattleProcessing(id, _ref) {
  var ifWin = _ref.ifWin,
    ifEscape = _ref.ifEscape,
    ifLose = _ref.ifLose;
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("BattleProcessing", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.typeCase)(id, {
    string: function string(x) {
      return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(x, _constants__WEBPACK_IMPORTED_MODULE_0__.BATTLE_TROOP);
    },
    variableId: _validate__WEBPACK_IMPORTED_MODULE_1__.argVariableId,
    number: _validate__WEBPACK_IMPORTED_MODULE_1__.argId
  })]), ifWin ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfWin"), ifWin]) : undefined, ifEscape ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfEscape"), ifEscape]) : undefined, ifLose ? (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("IfLose"), ifLose]) : undefined, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("End")]);
};
var ShopProcessing = function ShopProcessing(items, purchaseOnly) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)("\n", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShopProcessing", [purchaseOnly])].concat(_toConsumableArray(items.map(function (_ref2) {
    var type = _ref2.type,
      id = _ref2.id,
      price = _ref2.price;
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("Merchandise", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(type, _constants__WEBPACK_IMPORTED_MODULE_0__.SHOP_ITEM), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(price)]);
  }))));
};
var NameInputProcessing = function NameInputProcessing(id, length) {
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
var TintScreen = function TintScreen(color, time) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("TintScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.joinSkip)(null, [color && (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argColorTone)(color), time])]);
};
var FlashScreen = function FlashScreen(color, time, wait) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("FlashScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argsColor)(color), time, wait]);
};
var ShakeScreen = function ShakeScreen(velocity, speed, time, wait) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ShakeScreen", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(velocity), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(speed), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argInt)(time), wait]);
};
var SetWeatherEffect = function SetWeatherEffect(weather, velocity, time, wait) {
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


var ChangeVehicleBgm = function ChangeVehicleBgm(vehicle, sound) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeVehicleBgm", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argPreset)(vehicle, _constants__WEBPACK_IMPORTED_MODULE_0__.VEHICLE), (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argsSound)(sound)]);
};
var commonChange = function commonChange(name) {
  var component = function component(allow) {
    return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)(name, [allow]);
  };
  return component;
};
var ChangeSaveAccess = commonChange("ChangeSaveAccess");
var ChangeMenuAccess = commonChange("ChangeMenuAccess");
var ChangeEncounter = commonChange("ChangeEncounter");
var ChangeFormationAccess = commonChange("ChangeFormationAccess");
var ChangeWindowColor = function ChangeWindowColor(color) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeWindowColor", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argsColor)(color)]);
};
var ChangeActorImages = function ChangeActorImages(id, face, character, battler) {
  return (0,_validate__WEBPACK_IMPORTED_MODULE_1__.tag)("ChangeActorImages", [(0,_validate__WEBPACK_IMPORTED_MODULE_1__.argId)(id), face.name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(face.index, {
    from: 0,
    to: 15
  }), character.name, (0,_validate__WEBPACK_IMPORTED_MODULE_1__.argRange)(character.index, {
    from: 0,
    to: 7
  }), battler]);
};
var ChangeVehicleImage = function ChangeVehicleImage(vehicle, image) {
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
/* harmony export */   argColorTone: () => (/* binding */ argColorTone),
/* harmony export */   argEnemyIndex: () => (/* binding */ argEnemyIndex),
/* harmony export */   argFromTo: () => (/* binding */ argFromTo),
/* harmony export */   argId: () => (/* binding */ argId),
/* harmony export */   argInt: () => (/* binding */ argInt),
/* harmony export */   argIntOrVariableId: () => (/* binding */ argIntOrVariableId),
/* harmony export */   argMapPosition: () => (/* binding */ argMapPosition),
/* harmony export */   argPreset: () => (/* binding */ argPreset),
/* harmony export */   argRange: () => (/* binding */ argRange),
/* harmony export */   argSwitchId: () => (/* binding */ argSwitchId),
/* harmony export */   argVariableId: () => (/* binding */ argVariableId),
/* harmony export */   argsColor: () => (/* binding */ argsColor),
/* harmony export */   argsSound: () => (/* binding */ argsSound),
/* harmony export */   createPresetArg: () => (/* binding */ createPresetArg),
/* harmony export */   createPresetArgWithVariableId: () => (/* binding */ createPresetArgWithVariableId),
/* harmony export */   joinSkip: () => (/* binding */ joinSkip),
/* harmony export */   tag: () => (/* binding */ tag),
/* harmony export */   typeCase: () => (/* binding */ typeCase)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

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
var typeCase = function typeCase(v, cases) {
  var e = function e() {
    return new Error("サポートされていない型です");
  };
  if (typeof v === "number" && cases.number) return cases.number(v, e);
  if (typeof v === "string" && cases.string) return cases.string(v, e);
  if (_typeof(v) === "object") {
    if (cases.object) return cases.object(v, e);
    if ("variableId" in v && cases.variableId) return cases.variableId(v, e);
    if ("switchId" in v && cases.switchId) return cases.switchId(v, e);
    if ("from" in v && "to" in v && cases.fromTo) return cases.fromTo(v, e);
    if ("id" in v && "x" in v && "y" in v && cases.mapPosition) return cases.mapPosition(v, e);
    if ("name" in v && "volume" in v && "pitch" in v && "pan" in v && cases.sound) return cases.sound(v, e);
    if ("r" in v && "g" in v && "b" in v && cases.color) return cases.color(v, e);
  }
  throw e();
};
var argInt = function argInt(v) {
  if (v % 1 !== 0) {
    throw new Error("\u5024\u306F\u6574\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002");
  }
  return v;
};
var argRange = function argRange(v, range) {
  argInt(v);
  if (!(range.from <= v && v <= range.to)) {
    throw new Error("\u5024\u306F ".concat(range.from, " \uFF5E ").concat(range.to, " \u306E\u9593\u306E\u5024\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"));
  }
  return v;
};
var argId = function argId(v) {
  return argRange(v, {
    from: 1,
    to: Infinity
  });
};
var argEnemyIndex = function argEnemyIndex(v) {
  return argRange(v, {
    from: 1,
    to: 8
  });
};
var argPreset = function argPreset(v, preset) {
  return preset[v];
};
var argSwitchId = function argSwitchId(value) {
  return "SW[".concat(value.switchId, "]");
};
var argVariableId = function argVariableId(value) {
  return "V[".concat(value.variableId, "]");
};
var argFromTo = function argFromTo(value) {
  return "".concat(value.from, "-").concat(value.to);
};
var argsColor = function argsColor(color) {
  return "ColorTone[".concat(color.r, "][").concat(color.g, "][").concat(color.b, "]").concat(color !== null && color !== void 0 && color.x ? "[".concat(color.x, "]") : "");
};
var argsSound = function argsSound(sound) {
  var _sound$name;
  return joinKeep(null, [(_sound$name = sound.name) !== null && _sound$name !== void 0 ? _sound$name : "None", sound.volume, sound.pitch, sound.pan]);
};
var argMapPosition = function argMapPosition(mapos, mode) {
  return "".concat(mode === "DIRECT" ? "Direct" : "WithVariables", "[").concat(mapos.id, "][").concat(mapos.x, "][").concat(mapos.y, "]");
};
var argColorTone = function argColorTone(value) {
  return _typeof(value) === "object" ? "ColorTone[".concat(value.r, "][").concat(value.g, "][").concat(value.b, "][").concat(value.x, "]") : argPreset(value, _constants__WEBPACK_IMPORTED_MODULE_0__.COLOR_TONE);
};
var argIntOrVariableId = function argIntOrVariableId(v) {
  return typeCase(v, {
    variableId: argVariableId,
    number: function number(x) {
      return x;
    }
  });
};
var createPresetArg = function createPresetArg(preset) {
  return function (v) {
    return typeof v === "string" ? argPreset(v, preset) : argId(v);
  };
};
var createPresetArgWithVariableId = function createPresetArgWithVariableId(preset, range) {
  return function (v) {
    return typeCase(v, {
      string: function string(x) {
        return argPreset(x, preset);
      },
      variableId: argVariableId,
      number: function number(x) {
        return range ? argRange(x, range) : argId(x);
      }
    });
  };
};

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