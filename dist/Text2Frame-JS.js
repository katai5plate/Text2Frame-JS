"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ev = (...arr) => arr.join("\n");
const WINDOW_BACKGROUND = {
  WINDOW: "Window",
  DIM: "Dim",
  TRANSPARENT: "Transparent"
};
const WINDOW_POSITION_HORIZONTAL = {
  LEFT: "Left",
  MIDDLE: "Middle",
  RIGHT: "Right"
};
const CHOICES_INIT = {
  NONE: "None",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
};
const CHOICES_CANCEL = {
  BRANCH: "Branch",
  DISALLOW: "Disallow",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
};
const ITEM_TYPE = {
  REGULAR: "Regular Item",
  KEY: "Key Item",
  HIDDEN_A: "Hidden Item A",
  HIDDEN_B: "Hidden Item B"
};
const VARIABLE_OPERATOR = {
  SET: "Set",
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  MOD: "Mod"
};
const EVENT = {
  THIS_EVENT: "ThisEvent"
};
const CHARACTER = {
  PLAYER: "Player",
  ...EVENT
};
const TIMER_MODE = {
  START: "Start",
  END: "End"
};
const ACTOR_MEMBER = {
  ALL: "Entire Party"
};
const ACTER_PARAMETER = {
  MAX_HP: "MaxHP",
  MAX_MP: "MaxMP",
  ATTACK: "Attack",
  DEFENSE: "Defense",
  M_ATTACK: "M.Attack",
  M_DEFENSE: "M.Defense",
  AGILITY: "Agility",
  LUCK: "Luck"
};
const ENEMY_MEMBER = {
  ENTIRE_TROOP: "Entire Troop"
};
const ACTION_TARGET = {
  LAST_TARGET: "Last Target",
  RANDOM: "Random"
};
const DIRECTION = {
  DOWN: "Down",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Up"
};
const DIRECTION_RETAIN = {
  RETAIN: "Retain",
  ...DIRECTION
};
const DIRECTION_ROUTE8 = {
  ...DIRECTION,
  DOWN_LEFT: "LowerLeft",
  DOWN_RIGHT: "LowerRight",
  UP_LEFT: "UpperLeft",
  UP_RIGHT: "UpperRight"
};
const DIRECTION_METHOD = {
  RANDOM: "AtRandom",
  TOWARD_PLAYER: "TowardPlayer",
  AWAY_PLAYER: "AwayFromPlayer"
};
const DIRECTION_TURN_METHOD = {
  LEFT_90: "90Left",
  RIGHT_90: "90Right",
  RANDOM_90: "90RightorLeft",
  TURN_180: "180"
};
const DIRECTION_CAR = {
  FRONT: "Forward",
  BACK: "Backward"
};
const FADE = {
  BLACK: "Black",
  WHITE: "White",
  NONE: "None"
};
const VEHICLE = {
  BOAT: "Boat",
  SHIP: "Ship",
  AIR_SHIP: "AirShip"
};
const CHARACTER_SPEED = {
  X8_SLOW: "x8 Slower",
  X4_SLOW: "x4 Slower",
  X2_SLOW: "x2 Slower",
  NORMAL: "Normal",
  X2_FAST: "x2 Faster",
  X4_FAST: "x4 Faster"
};
const CHARACTER_FREQ = {
  LOWEST: "Lowest",
  LOW: "Lower",
  NORMAL: "Normal",
  HIGH: "Higher",
  HIGHEST: "Highest"
};
const BLEND_MODE = {
  NORMAL: "Normal",
  ADD: "Additive",
  MUL: "Multiply",
  SCREEN: "Screen"
};
const BALLOON = {
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
const PICTURE_ORIGIN = {
  CORNER: "Upper Left",
  CENTER: "Center"
};
const EASING = {
  LINEAR: "Linear",
  IN: "Ease-in",
  OUT: "Ease-out",
  IN_OUT: "Ease-in-out"
};
const COLOR_TONE = {
  NORMAL: "Normal",
  DARK: "Dark",
  SEPIA: "Sepia",
  SUNSET: "Sunset",
  NIGHT: "Night"
};
const WEATHER = {
  NONE: "None",
  RAIN: "Rain",
  STORM: "Storm",
  SNOW: "Snow"
};
const BATTLE_TROOP = {
  RANDOM: "Random"
};
const SHOP_ITEM = {
  ITEM: "Item",
  WEAPON: "Weapon",
  ARMOR: "Armor"
};
const LOCATION = {
  TERRAIN_TAG: "Terrain Tag",
  EVENT_ID: "Event ID",
  LAYER_1: "Layer 1",
  REGION_ID: "Region ID"
};
const joinKeep = (delim, arr) => arr.join(delim ?? ", ");
const joinSkip = (delim, arr) => arr.filter((x) => x !== void 0).join(delim ?? ", ");
const tag = (name, arg, textChildren) => {
  const args = joinKeep(null, arg ?? []);
  return joinSkip("\n", [
    args !== "" ? `<${name}: ${args}>` : `<${name}>`,
    ...textChildren ? [textChildren, `</${name}>`] : []
  ]);
};
const typeCase = (v, cases) => {
  const e = () => new Error("サポートされていない型です");
  if (typeof v === "number" && cases.number)
    return cases.number(v, e);
  if (typeof v === "string" && cases.string)
    return cases.string(v, e);
  if (typeof v === "object") {
    if (cases.object)
      return cases.object(v, e);
    if ("variableId" in v && cases.variableId)
      return cases.variableId(v, e);
    if ("switchId" in v && cases.switchId)
      return cases.switchId(v, e);
    if ("from" in v && "to" in v && cases.fromTo)
      return cases.fromTo(v, e);
    if ("id" in v && "x" in v && "y" in v && cases.mapPosition)
      return cases.mapPosition(v, e);
    if ("name" in v && "volume" in v && "pitch" in v && "pan" in v && cases.sound)
      return cases.sound(v, e);
    if ("r" in v && "g" in v && "b" in v && cases.color)
      return cases.color(v, e);
  }
  throw e();
};
const argInt = (v) => {
  if (v % 1 !== 0) {
    throw new Error(`値は整数である必要があります。`);
  }
  return v;
};
const argRange = (v, range) => {
  argInt(v);
  if (!(range.from <= v && v <= range.to)) {
    throw new Error(
      `値は ${range.from} ～ ${range.to} の間の値である必要があります。`
    );
  }
  return v;
};
const argId = (v) => argRange(v, { from: 1, to: Infinity });
const argEnemyIndex = (v) => argRange(v, { from: 1, to: 8 });
const argPreset = (v, preset) => preset[v];
const argSwitchId = (value) => `SW[${value.switchId}]`;
const argVariableId = (value) => `V[${value.variableId}]`;
const argFromTo = (value) => `${value.from}-${value.to}`;
const argsColor = (color) => `ColorTone[${color.r}][${color.g}][${color.b}]${(color == null ? void 0 : color.x) ? `[${color.x}]` : ""}`;
const argsSound = (sound) => joinKeep(null, [sound.name ?? "None", sound.volume, sound.pitch, sound.pan]);
const argMapPosition = (mapos, mode) => `${mode === "DIRECT" ? "Direct" : "WithVariables"}[${mapos.id}][${mapos.x}][${mapos.y}]`;
const argColorTone = (value) => typeof value === "object" ? `ColorTone[${value.r}][${value.g}][${value.b}][${value.x}]` : argPreset(value, COLOR_TONE);
const argIntOrVariableId = (v) => typeCase(v, {
  variableId: argVariableId,
  number: (x) => x
});
const createPresetArg = (preset) => {
  return (v) => typeof v === "string" ? argPreset(v, preset) : argId(v);
};
const createPresetArgWithVariableId = (preset, range) => (v) => typeCase(v, {
  string: (x) => argPreset(x, preset),
  variableId: argVariableId,
  number: (x) => range ? argRange(x, range) : argId(x)
});
const argActorIdWithPreset = createPresetArgWithVariableId(ACTOR_MEMBER);
const ChangeHp = (id, op, value, allowKnockout) => tag("ChangeHp", [
  argActorIdWithPreset(id),
  op,
  argIntOrVariableId(value),
  allowKnockout
]);
const commonChange$4 = (name) => {
  const component = (id, op, value) => tag(name, [argActorIdWithPreset(id), op, argIntOrVariableId(value)]);
  return component;
};
const ChangeMp = commonChange$4("ChangeMp");
const ChangeTp = commonChange$4("ChangeTp");
const ChangeState = commonChange$4("ChangeState");
const ChangeSkill = commonChange$4("ChangeSkill");
const RecoverAll = (id) => tag("RecoverAll", [argActorIdWithPreset(id)]);
const commonLevelUp = (name) => {
  const component = (id, op, value, allowLevelUp) => tag(name, [
    argActorIdWithPreset(id),
    op,
    argIntOrVariableId(value),
    allowLevelUp
  ]);
  return component;
};
const ChangeExp = commonLevelUp("ChangeExp");
const ChangeLevel = commonLevelUp("ChangeLevel");
const ChangeParameter = (id, parameter, op, value) => tag("ChangeParameter", [
  argActorIdWithPreset(id),
  argPreset(parameter, ACTER_PARAMETER),
  op,
  argIntOrVariableId(value)
]);
const ChangeEquipment = (id, equipType, equipId) => tag("ChangeEquipment", [
  argId(id),
  argId(equipType),
  equipId && argId(equipId)
]);
const ChangeName = (id, name) => tag("ChangeName", [argId(id), name]);
const ChangeClass = (id, classId, saveLevelAndExp) => tag("ChangeClass", [argId(id), argId(classId), saveLevelAndExp]);
const ChangeNickname = (id, name) => tag("ChangeNickname", [argId(id), name]);
const ChangeProfile = (id, profile) => tag("ChangeProfile", [argId(id), profile[0], profile[1]]);
const actor = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeClass,
  ChangeEquipment,
  ChangeExp,
  ChangeHp,
  ChangeLevel,
  ChangeMp,
  ChangeName,
  ChangeNickname,
  ChangeParameter,
  ChangeProfile,
  ChangeSkill,
  ChangeState,
  ChangeTp,
  RecoverAll
}, Symbol.toStringTag, { value: "Module" }));
const argEnemyIndexWithPreset = createPresetArgWithVariableId(ENEMY_MEMBER);
const argEnemyIndexWithPresetAndVariableId = createPresetArgWithVariableId(
  ENEMY_MEMBER,
  { from: 1, to: 8 }
);
const ChangeEnemyHp = (index, op, value, allowKnockout) => tag("ChangeEnemyHp", [
  argEnemyIndexWithPresetAndVariableId(index),
  op,
  argIntOrVariableId(value),
  allowKnockout
]);
const commonChange$3 = (name) => {
  const component = (index, op, value) => tag(name, [
    argEnemyIndexWithPresetAndVariableId(index),
    op,
    argIntOrVariableId(value)
  ]);
  return component;
};
const ChangeEnemyMp = commonChange$3("ChangeEnemyMp");
const ChangeEnemyTp = commonChange$3("ChangeEnemyTp");
const ChangeEnemyState = commonChange$3("ChangeEnemyState");
const EnemyRecoverAll = (index) => tag("EnemyRecoverAll", [argEnemyIndexWithPresetAndVariableId(index)]);
const EnemyAppear = (index) => tag("EnemyAppear", [argEnemyIndexWithPreset(index)]);
const commonIndexAndEnemyId = (name) => {
  const component = (index, id) => tag(name, [argEnemyIndex(index), argId(id)]);
  return component;
};
const EnemyTransform = commonIndexAndEnemyId("EnemyTransform");
const ShowBattleAnimation = commonIndexAndEnemyId("ShowBattleAnimation");
const ForceAction = (mode, index, id, target) => tag("ForceAction", [
  typeCase(index, {
    number: (x) => mode === "ACTOR" ? `Actor[${argId(x)}]` : argEnemyIndex(x)
  }),
  argId(id),
  typeCase(target, {
    string: (x) => argPreset(x, ACTION_TARGET),
    number: (x) => `Index ${argRange(x, { from: 1, to: 8 })}`
  })
]);
const battle = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeEnemyHp,
  ChangeEnemyMp,
  ChangeEnemyState,
  ChangeEnemyTp,
  EnemyAppear,
  EnemyRecoverAll,
  EnemyTransform,
  ForceAction,
  ShowBattleAnimation
}, Symbol.toStringTag, { value: "Module" }));
const argNumberPreset = (v, preset) => typeCase(v, {
  string: (x) => argPreset(x, preset),
  number: argId
});
const commonChange$2 = (name) => {
  const component = (active) => tag(name, [active]);
  return component;
};
const ChangeTransparency = commonChange$2("ChangeTransparency");
const ChangePlayerFollowers = commonChange$2("ChangePlayerFollowers");
const GatherFollowers = () => tag("GatherFollowers");
const ShowAnimation = (id, animationId, wait) => tag("ShowAnimation", [
  argNumberPreset(id, CHARACTER),
  argId(animationId),
  wait
]);
const ShowBalloonIcon = (id, balloon, wait) => tag("ShowBalloonIcon", [
  argNumberPreset(id, CHARACTER),
  argPreset(balloon, BALLOON),
  wait
]);
const EraseEvent = () => tag("EraseEvent");
const character = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangePlayerFollowers,
  ChangeTransparency,
  EraseEvent,
  GatherFollowers,
  ShowAnimation,
  ShowBalloonIcon
}, Symbol.toStringTag, { value: "Module" }));
const Check = (condition, then, otherwise) => joinSkip("\n", [
  tag("If", ["Script", condition]),
  then,
  ...otherwise ? joinSkip("\n", [tag("Else"), otherwise]) : [],
  tag("End")
]);
const Loop = (content) => joinSkip("\n", [tag("Loop"), content, tag("RepeatAbove")]);
const LoopBreak = () => tag("BreakLoop");
const ExitEventProcessing = () => tag("ExitEventProcessing");
const CommonEvent = (id) => tag("CommonEvent", [argId(id)]);
const Label = (name) => tag("Label", [name]);
const Goto = (name) => tag("JumpToLabel", [name]);
const Comment = (text) => tag("Comment", void 0, text);
const flow = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Check,
  Comment,
  CommonEvent,
  ExitEventProcessing,
  Goto,
  Label,
  Loop,
  LoopBreak
}, Symbol.toStringTag, { value: "Module" }));
const Wait = (time) => tag("Wait", [argInt(time)]);
const Script = (code) => {
  const match = code.toString().match(/\{([\s\S]*)\}/);
  return tag("Script", void 0, match ? match[1].trim() : "");
};
const PluginCommandMV = (command) => tag("PluginCommand", [command]);
const PluginCommandMZ = (name, method, command, args) => tag("PluginCommandMZ", [
  name,
  method,
  command,
  ...args.map((x) => `${x.name}[${x.value}]`)
]);
const interpreter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PluginCommandMV,
  PluginCommandMZ,
  Script,
  Wait
}, Symbol.toStringTag, { value: "Module" }));
const ChangeMapNameDisplay = (allow) => tag("ChangeMapNameDisplay", [allow]);
const ChangeTileset = (id) => tag("ChangeTileset", [argId(id)]);
const ChangeBattleBackGround = (images) => tag("ChangeBattleBackGround", [images[0] ?? "None", images[1] ?? "None"]);
const ChangeParallax = (name, scroll) => tag("ChangeParallax", [
  name,
  scroll.x && `LoopHorizontally[${argRange(scroll.x, { from: -32, to: 32 })}]`,
  scroll.y && `LoopVertically[${argRange(scroll.y, { from: -32, to: 32 })}]`
]);
const GetLocationInfo = (variableId, layer, position) => tag("GetLocationInfo", [
  argId(variableId),
  argPreset(layer, LOCATION),
  typeCase(position, {
    object: (value, e) => {
      const v = value;
      if ("x" in v && "y" in v) {
        if (typeof v.x === "number")
          return `Direct[${v.x}][${v.y}]`;
        if (v.x.variableId)
          return `WithVariables[${v.x}][${v.y}]`;
      }
      throw e();
    }
  })
]);
const map = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeBattleBackGround,
  ChangeMapNameDisplay,
  ChangeParallax,
  ChangeTileset,
  GetLocationInfo
}, Symbol.toStringTag, { value: "Module" }));
const commonSound = (name) => {
  const component = (sound) => tag(name, [argsSound(sound)]);
  return component;
};
const PlayBGM = commonSound("PlayBGM");
const PlayBGS = commonSound("PlayBGS");
const PlayME = commonSound("PlayME");
const PlaySE = commonSound("PlaySE");
const ChangeBattleBGM = commonSound("ChangeBattleBGM");
const ChangeVictoryMe = commonSound("ChangeVictoryMe");
const ChangeDefeatMe = commonSound("ChangeDefeatMe");
const commonFadeout = (name) => {
  const component = (time) => tag(name, [argInt(time)]);
  return component;
};
const FadeoutBGM = commonFadeout("FadeoutBGM");
const FadeoutBGS = commonFadeout("FadeoutBGS");
const SaveBGM = () => tag("SaveBGM");
const StopBGM = () => tag("StopBGM");
const ReplayBGM = () => tag("ReplayBGM");
const StopBGS = () => tag("StopBGS");
const StopME = () => tag("StopME");
const StopSE = () => tag("StopSE");
const PlayMovie = (name) => tag("PlayMovie", [name]);
const media = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeBattleBGM,
  ChangeDefeatMe,
  ChangeVictoryMe,
  FadeoutBGM,
  FadeoutBGS,
  PlayBGM,
  PlayBGS,
  PlayME,
  PlayMovie,
  PlaySE,
  ReplayBGM,
  SaveBGM,
  StopBGM,
  StopBGS,
  StopME,
  StopSE
}, Symbol.toStringTag, { value: "Module" }));
const argChoices = (value, preset) => typeof value === "number" ? argRange(value, { from: 1, to: 6 }) : argPreset(value, preset);
const Window = ({
  face,
  position,
  background,
  name
}) => joinSkip("\n", [
  background && tag("Background", [background]),
  position && tag("WindowPosition", [position]),
  face && tag("Face", [
    `${face.name}(${argRange(face.index, { from: 0, to: 15 })})`
  ]),
  name && tag("Name", [name])
]);
const ShowChoices = (cases, {
  background,
  position,
  init,
  cancel
}) => {
  if (cases.filter((caseItem) => caseItem.name === null).length >= 2)
    throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return joinSkip("\n", [
    tag("ShowChoices", [
      background && argPreset(background, WINDOW_BACKGROUND),
      position && argPreset(position, WINDOW_POSITION_HORIZONTAL),
      init && argChoices(init, CHOICES_INIT),
      cancel && argChoices(cancel, CHOICES_CANCEL)
    ]),
    joinSkip(
      "\n",
      cases.map(
        ({ name, then }) => joinSkip("\n", [
          joinSkip("\n", [
            name ? tag("When", [name]) : tag("WhenCancel"),
            joinSkip("\n", [then])
          ])
        ])
      )
    ),
    tag("End")
  ]);
};
const InputNumber = (variableId, digit) => tag("InputNumber", [argId(variableId), argRange(digit, { from: 1, to: 8 })]);
const SelectItem = (variableId, itemType) => tag("SelectItem", [argId(variableId), argPreset(itemType, ITEM_TYPE)]);
const ScrollingText = (text, { speed = 2, noSkip }) => tag("ScrollingText", [speed, noSkip], text);
const message = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumber,
  ScrollingText,
  SelectItem,
  ShowChoices,
  Window
}, Symbol.toStringTag, { value: "Module" }));
const argIdOrPreset = (value, preset) => typeof value === "number" ? argId(value) : argPreset(value, preset);
const TransferPlayer = (mode, position, direction, fade) => tag("TransferPlayer", [
  argMapPosition(position, mode),
  argPreset(direction, DIRECTION_RETAIN),
  argPreset(fade, FADE)
]);
const SetVehicleLocation = (mode, vehicle, position) => tag("SetVehicleLocation", [
  argPreset(vehicle, VEHICLE),
  argMapPosition(position, mode)
]);
const SetEventLocation = (mode, id, position, direction) => tag("SetEventLocation", [
  argIdOrPreset(id, EVENT),
  mode === "EXCHANGE" ? typeCase(position, {
    string: (x) => `Exchange[${argPreset(x, EVENT)}]`,
    number: (x) => `Exchange[${argId(x)}]`
  }) : typeCase(position, {
    mapPosition: (x) => argMapPosition(x, mode)
  }),
  argPreset(direction, DIRECTION_RETAIN)
]);
const ScrollMap = (direction, step, speed, wait) => tag("SetVehicleLocation", [
  argPreset(direction, DIRECTION),
  argInt(step),
  argPreset(speed, CHARACTER_SPEED),
  wait
]);
const SetMovementRoute = (id, routes, { repeat = false, skip = false, wait = true } = {}) => joinSkip("\n", [
  tag("SetMovementRoute", [argIdOrPreset(id, CHARACTER), repeat, skip, wait]),
  ...routes({
    jump: (x, y) => {
      return { name: "Jump", args: [argInt(x), argInt(y)] };
    },
    wait: (v) => {
      return { name: "McWait", args: [argInt(v)] };
    },
    changeSwitch: (switchId, to) => {
      return {
        name: `Switch${to ? "On" : "Off"}`,
        args: [argId(switchId)]
      };
    },
    changeSpeed: (speed) => {
      return {
        name: "ChangeSpeed",
        args: [argPreset(speed, CHARACTER_SPEED)]
      };
    },
    changeFreq: (freq) => {
      return {
        name: "ChangeFrequency",
        args: [argPreset(freq, CHARACTER_FREQ)]
      };
    },
    changeImage: (name, index) => {
      return {
        name: "ChangeImage",
        args: [name, argRange(index, { from: 0, to: 7 })]
      };
    },
    changeOpacity: (v) => {
      return {
        name: "ChangeOpacity",
        args: [argRange(v, { from: 0, to: 255 })]
      };
    },
    changeBlendMode: (v) => {
      return { name: "ChangeBlendMode", args: [argPreset(v, BLEND_MODE)] };
    },
    playSe: (sound) => {
      return {
        name: "McPlaySe",
        args: [argsSound(sound)]
      };
    },
    script: (code) => {
      return { name: "McScript", args: [code] };
    },
    //
    move: (dir) => {
      const preset = { ...DIRECTION_ROUTE8, ...DIRECTION_METHOD };
      return { name: `Move${argPreset(dir, preset)}`, args: [] };
    },
    turn: (dir) => {
      const preset = {
        ...DIRECTION,
        ...DIRECTION_METHOD,
        ...DIRECTION_TURN_METHOD
      };
      return { name: `Turn${argPreset(dir, preset)}`, args: [] };
    },
    step: (dir) => {
      return { name: `OneStep${argPreset(dir, DIRECTION_CAR)}`, args: [] };
    },
    //
    changeWalkAnimation: (active) => {
      return { name: `WalkingAnimation${active ? "On" : "Off"}`, args: [] };
    },
    changeStepAnimation: (active) => {
      return { name: `SteppingAnimation${active ? "On" : "Off"}`, args: [] };
    },
    changeDirectionFix: (active) => {
      return { name: `DirectionFix${active ? "On" : "Off"}`, args: [] };
    },
    changeNoClip: (active) => {
      return { name: `Through${active ? "On" : "Off"}`, args: [] };
    },
    changeTransparent: (active) => {
      return { name: `Transparent${active ? "On" : "Off"}`, args: [] };
    }
  }).map(({ name, args }) => tag(name, args))
]);
const GetOnOffVehicle = () => tag("GetOnOffVehicle");
const movement = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetOnOffVehicle,
  ScrollMap,
  SetEventLocation,
  SetMovementRoute,
  SetVehicleLocation,
  TransferPlayer
}, Symbol.toStringTag, { value: "Module" }));
const ChangeGold = (op, value) => tag("ChangeGold", [op, argIntOrVariableId(value)]);
const ChangeItems = (id, op, value) => tag("ChangeItems", [argId(id), op, argIntOrVariableId(value)]);
const commonChange$1 = (name) => {
  const component = (id, op, value, includeEquipment) => tag(name, [argId(id), op, argIntOrVariableId(value), includeEquipment]);
  return component;
};
const ChangeWeapons = commonChange$1("ChangeWeapons");
const ChangeArmors = commonChange$1("ChangeArmors");
const ChangePartyMember = (id, op, value, initialize) => tag("ChangeItems", [argId(id), op, argIntOrVariableId(value), initialize]);
const party = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeArmors,
  ChangeGold,
  ChangeItems,
  ChangePartyMember,
  ChangeWeapons
}, Symbol.toStringTag, { value: "Module" }));
const argPicturePosition = (position) => {
  const parse = position.mode === "DIRECT" ? argInt : (variableId) => argVariableId({ variableId });
  return `Position[${argPreset(position.origin, PICTURE_ORIGIN)}][${parse(
    position.x
  )}][${parse(position.y)}]`;
};
const argPictureScale = (size) => `Scale[${argInt(size.width)}][${argInt(size.height)}]`;
const argPictureBlend = (blend) => `Blend[${argRange(blend.opacity, { from: 0, to: 255 })}][${argPreset(
  blend.mode,
  BLEND_MODE
)}]`;
const argPictureDuration = (duration) => `Duration[${argInt(duration.time)}][${duration.wait ? "Wait" : ""}]`;
const ShowPicture = (id, name, {
  position,
  scale,
  blend
}) => tag("ShowPicture", [
  argRange(id, { from: 1, to: 100 }),
  name,
  joinSkip(null, [
    position && argPicturePosition(position),
    scale && argPictureScale(scale),
    blend && argPictureBlend(blend)
  ])
]);
const MovePicture = (id, {
  position,
  scale,
  blend,
  duration,
  easing
}) => tag("MovePicture", [
  argRange(id, { from: 1, to: 100 }),
  joinSkip(null, [
    position && argPicturePosition(position),
    scale && argPictureScale(scale),
    blend && argPictureBlend(blend),
    duration && argPictureDuration(duration),
    easing && argPreset(easing, EASING)
  ])
]);
const RotatePicture = (id, speed) => tag("RotatePicture", [
  argRange(id, { from: 1, to: 100 }),
  argRange(speed, { from: -90, to: 90 })
]);
const TintPicture = (id, color, time) => tag("TintPicture", [
  argRange(id, { from: 1, to: 100 }),
  joinSkip(null, [color && argColorTone(color), time])
]);
const ErasePicture = (id) => tag("ErasePicture", [argRange(id, { from: 1, to: 100 })]);
const picture = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErasePicture,
  MovePicture,
  RotatePicture,
  ShowPicture,
  TintPicture
}, Symbol.toStringTag, { value: "Module" }));
const argCharacterIdWithPreset = createPresetArg(CHARACTER);
const Switch = (id, toBe) => tag("Switch", [
  typeCase(id, {
    switchId: argSwitchId,
    fromTo: argFromTo
  }),
  toBe
]);
const Variable = (id, calc) => {
  const list = calc(
    {
      set: (value) => ({
        op: "SET",
        value
      }),
      add: (value) => ({
        op: "ADD",
        value
      }),
      sub: (value) => ({
        op: "SUB",
        value
      }),
      mul: (value) => ({
        op: "MUL",
        value
      }),
      div: (value) => ({
        op: "DIV",
        value
      }),
      mod: (value) => ({
        op: "MOD",
        value
      })
    },
    {
      variable: (id2) => `V[${argId(id2)}]`,
      random: ({ from, to }) => `Random[${argInt(from)}][${argInt(to)}]`,
      script: (js) => `Script[${js}]`,
      game: {
        item: {
          itemCount: (id2) => `GameData[Item][${argId(id2)}]`,
          weaponCount: (id2) => `GameData[Weapon][${argId(id2)}]`,
          armorCount: (id2) => `GameData[Armor][${argId(id2)}]`
        },
        actor: {
          level: (id2) => `GameData[Actor][Level][${argId(id2)}]`,
          exp: (id2) => `GameData[Actor][Exp][${argId(id2)}]`,
          HP: (id2) => `GameData[Actor][HP][${argId(id2)}]`,
          MP: (id2) => `GameData[Actor][MP][${argId(id2)}]`,
          maxHP: (id2) => `GameData[Actor][MaxHp][${argId(id2)}]`,
          MaxMP: (id2) => `GameData[Actor][MaxMP][${argId(id2)}]`,
          attack: (id2) => `GameData[Actor][Attack][${argId(id2)}]`,
          defense: (id2) => `GameData[Actor][Defense][${argId(id2)}]`,
          mAttack: (id2) => `GameData[Actor][M.Attack][${argId(id2)}]`,
          mDefense: (id2) => `GameData[Actor][M.Defense][${argId(id2)}]`,
          agility: (id2) => `GameData[Actor][Agility][${argId(id2)}]`,
          luck: (id2) => `GameData[Actor][Luck][${argId(id2)}]`,
          TP: (id2) => `GameData[Actor][TP][${argId(id2)}]`
        },
        enemy: {
          HP: (index) => `GameData[Enemy][HP][${argEnemyIndex(index)}]`,
          MP: (index) => `GameData[Enemy][MP][${argEnemyIndex(index)}]`,
          maxHP: (index) => `GameData[Enemy][MaxHp][${argEnemyIndex(index)}]`,
          MaxMP: (index) => `GameData[Enemy][MaxMP][${argEnemyIndex(index)}]`,
          attack: (index) => `GameData[Enemy][Attack][${argEnemyIndex(index)}]`,
          defense: (index) => `GameData[Enemy][Defense][${argEnemyIndex(index)}]`,
          mAttack: (index) => `GameData[Enemy][M.Attack][${argEnemyIndex(index)}]`,
          mDefense: (index) => `GameData[Enemy][M.Defense][${argEnemyIndex(index)}]`,
          agility: (index) => `GameData[Enemy][Agility][${argEnemyIndex(index)}]`,
          luck: (index) => `GameData[Enemy][Luck][${argEnemyIndex(index)}]`,
          TP: (index) => `GameData[Enemy][TP][${argEnemyIndex(index)}]`
        },
        character: {
          mapX: (characterId) => `GameData[Character][${argCharacterIdWithPreset(
            characterId
          )}][MapX]`,
          mapY: (characterId) => `GameData[Character][${argCharacterIdWithPreset(
            characterId
          )}][MapY]`,
          direction: (characterId) => `GameData[Character][${argCharacterIdWithPreset(
            characterId
          )}][Direction]`,
          screenX: (characterId) => `GameData[Character][${argCharacterIdWithPreset(
            characterId
          )}][ScreenX]`,
          screenY: (characterId) => `GameData[Character][${argCharacterIdWithPreset(
            characterId
          )}][ScreenY]`
        },
        last: {
          usedSkillId: () => `GameData[Last][Used Skill ID]`,
          usedItemId: () => `GameData[Last][Used Item ID]`,
          actionActorId: () => `GameData[Last][Actor ID to Act]`,
          actionEnemyIndex: () => `GameData[Last][Enemy Index to Act]`,
          targetActorId: () => `GameData[Last][Target Actor ID]`,
          targetEnemyIndex: () => `GameData[Last][Target Enemy Index]`
        },
        etc: {
          memberActorId: (index) => `GameData[Party][${argId(index)}]`,
          memberCount: () => `GameData[PartyMembers]`,
          gold: () => `GameData[Gold]`,
          steps: () => `GameData[Steps]`,
          playTime: () => `GameData[PlayTime]`,
          timer: () => `GameData[Timer]`,
          saveCount: () => `GameData[SaveCount]`,
          battleCount: () => `GameData[BattleCount]`,
          winCount: () => `GameData[WinCount]`,
          escapeCount: () => `GameData[EscapeCount]`
        }
      }
    }
  );
  return list.map(
    ({ op, value }) => tag(VARIABLE_OPERATOR[op], [
      typeCase(id, {
        fromTo: argFromTo,
        number: argId
      }),
      value
    ])
  ).join("\n");
};
const SelfSwitch = (id, toBe) => tag("SelfSwitch", [id, toBe]);
const Timer = (mode, time) => {
  if (typeof time === "string") {
    const [isValid, min2, sec2] = time.match(/^(\d{1,}):(\d{1,})$/) ?? [];
    if (isValid) {
      return tag("Timer", [TIMER_MODE[mode], min2, sec2]);
    } else {
      throw new Error(
        "文字列でタイマー設定する場合は 00:00 形式で入力してください"
      );
    }
  }
  const { min, sec } = time;
  return tag("Timer", [TIMER_MODE[mode], min, sec]);
};
const progress = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelfSwitch,
  Switch,
  Timer,
  Variable
}, Symbol.toStringTag, { value: "Module" }));
const BattleProcessing = (id, {
  ifWin,
  ifEscape,
  ifLose
}) => {
  return joinSkip("\n", [
    tag("BattleProcessing", [
      typeCase(id, {
        string: (x) => argPreset(x, BATTLE_TROOP),
        variableId: argVariableId,
        number: argId
      })
    ]),
    ifWin ? joinSkip("\n", [tag("IfWin"), ifWin]) : void 0,
    ifEscape ? joinSkip("\n", [tag("IfEscape"), ifEscape]) : void 0,
    ifLose ? joinSkip("\n", [tag("IfLose"), ifLose]) : void 0,
    tag("End")
  ]);
};
const ShopProcessing = (items, purchaseOnly) => joinSkip("\n", [
  tag("ShopProcessing", [purchaseOnly]),
  ...items.map(
    ({ type, id, price }) => tag("Merchandise", [argPreset(type, SHOP_ITEM), argId(id), argInt(price)])
  )
]);
const NameInputProcessing = (id, length) => tag("NameInputProcessing", [argId(id), argRange(length, { from: 1, to: 8 })]);
const OpenMenuScreen = () => tag("OpenMenuScreen");
const OpenSaveScreen = () => tag("OpenSaveScreen");
const GameOver = () => tag("GameOver");
const ReturnToTitleScreen = () => tag("ReturnToTitleScreen");
const scene = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BattleProcessing,
  GameOver,
  NameInputProcessing,
  OpenMenuScreen,
  OpenSaveScreen,
  ReturnToTitleScreen,
  ShopProcessing
}, Symbol.toStringTag, { value: "Module" }));
const FadeOut = () => tag("FadeOut");
const FadeIn = () => tag("FadeIn");
const TintScreen = (color, time) => tag("TintScreen", [joinSkip(null, [color && argColorTone(color), time])]);
const FlashScreen = (color, time, wait) => tag("FlashScreen", [argsColor(color), time, wait]);
const ShakeScreen = (velocity, speed, time, wait) => tag("ShakeScreen", [argInt(velocity), argInt(speed), argInt(time), wait]);
const SetWeatherEffect = (weather, velocity, time, wait) => tag("SetWeatherEffect", [
  argPreset(weather, WEATHER),
  argInt(velocity),
  argInt(time),
  wait
]);
const screen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FadeIn,
  FadeOut,
  FlashScreen,
  SetWeatherEffect,
  ShakeScreen,
  TintScreen
}, Symbol.toStringTag, { value: "Module" }));
const ChangeVehicleBgm = (vehicle, sound) => tag("ChangeVehicleBgm", [argPreset(vehicle, VEHICLE), argsSound(sound)]);
const commonChange = (name) => {
  const component = (allow) => tag(name, [allow]);
  return component;
};
const ChangeSaveAccess = commonChange("ChangeSaveAccess");
const ChangeMenuAccess = commonChange("ChangeMenuAccess");
const ChangeEncounter = commonChange("ChangeEncounter");
const ChangeFormationAccess = commonChange("ChangeFormationAccess");
const ChangeWindowColor = (color) => tag("ChangeWindowColor", [argsColor(color)]);
const ChangeActorImages = (id, face, character2, battler) => tag("ChangeActorImages", [
  argId(id),
  face.name,
  argRange(face.index, { from: 0, to: 15 }),
  character2.name,
  argRange(character2.index, { from: 0, to: 7 }),
  battler
]);
const ChangeVehicleImage = (vehicle, image) => tag("ChangeActorImages", [
  argPreset(vehicle, VEHICLE),
  image.name,
  argRange(image.index, { from: 0, to: 7 })
]);
const system = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeActorImages,
  ChangeEncounter,
  ChangeFormationAccess,
  ChangeMenuAccess,
  ChangeSaveAccess,
  ChangeVehicleBgm,
  ChangeVehicleImage,
  ChangeWindowColor
}, Symbol.toStringTag, { value: "Module" }));
const events = {
  message,
  progress,
  flow,
  party,
  actor,
  movement,
  character,
  picture,
  screen,
  media,
  scene,
  system,
  map,
  battle,
  interpreter
};
exports.events = events;
exports.parse = ev;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dDJGcmFtZS1KUy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL3BhcnNlLnRzIiwiLi4vc3JjL2NvbnN0YW50cy50cyIsIi4uL3NyYy92YWxpZGF0ZS50cyIsIi4uL3NyYy9ldmVudHMvYWN0b3IudHMiLCIuLi9zcmMvZXZlbnRzL2JhdHRsZS50cyIsIi4uL3NyYy9ldmVudHMvY2hhcmFjdGVyLnRzIiwiLi4vc3JjL2V2ZW50cy9mbG93LnRzIiwiLi4vc3JjL2V2ZW50cy9pbnRlcnByZXRlci50cyIsIi4uL3NyYy9ldmVudHMvbWFwLnRzIiwiLi4vc3JjL2V2ZW50cy9tZWRpYS50cyIsIi4uL3NyYy9ldmVudHMvbWVzc2FnZS50cyIsIi4uL3NyYy9ldmVudHMvbW92ZW1lbnQudHMiLCIuLi9zcmMvZXZlbnRzL3BhcnR5LnRzIiwiLi4vc3JjL2V2ZW50cy9waWN0dXJlLnRzIiwiLi4vc3JjL2V2ZW50cy9wcm9ncmVzcy50cyIsIi4uL3NyYy9ldmVudHMvc2NlbmUudHMiLCIuLi9zcmMvZXZlbnRzL3NjcmVlbi50cyIsIi4uL3NyYy9ldmVudHMvc3lzdGVtLnRzIiwiLi4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBldiA9ICguLi5hcnI6IHN0cmluZ1tdKSA9PiBhcnIuam9pbihcIlxcblwiKTtcbiIsImV4cG9ydCBjb25zdCBXSU5ET1dfQkFDS0dST1VORCA9IHtcclxuICBXSU5ET1c6IFwiV2luZG93XCIsXHJcbiAgRElNOiBcIkRpbVwiLFxyXG4gIFRSQU5TUEFSRU5UOiBcIlRyYW5zcGFyZW50XCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfUE9TSVRJT05fSE9SSVpPTlRBTCA9IHtcclxuICBMRUZUOiBcIkxlZnRcIixcclxuICBNSURETEU6IFwiTWlkZGxlXCIsXHJcbiAgUklHSFQ6IFwiUmlnaHRcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IFdJTkRPV19QT1NJVElPTl9WRVJUSUNBTCA9IHtcclxuICBUT1A6IFwiVG9wXCIsXHJcbiAgTUlERExFOiBcIk1pZGRsZVwiLFxyXG4gIEJPVFRPTTogXCJCb3R0b21cIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDSE9JQ0VTX0lOSVQgPSB7XHJcbiAgTk9ORTogXCJOb25lXCIsXHJcbiAgQ0FTRV8xOiBcIjFcIixcclxuICBDQVNFXzI6IFwiMlwiLFxyXG4gIENBU0VfMzogXCIzXCIsXHJcbiAgQ0FTRV80OiBcIjRcIixcclxuICBDQVNFXzU6IFwiNVwiLFxyXG4gIENBU0VfNjogXCI2XCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDSE9JQ0VTX0NBTkNFTCA9IHtcclxuICBCUkFOQ0g6IFwiQnJhbmNoXCIsXHJcbiAgRElTQUxMT1c6IFwiRGlzYWxsb3dcIixcclxuICBDQVNFXzE6IFwiMVwiLFxyXG4gIENBU0VfMjogXCIyXCIsXHJcbiAgQ0FTRV8zOiBcIjNcIixcclxuICBDQVNFXzQ6IFwiNFwiLFxyXG4gIENBU0VfNTogXCI1XCIsXHJcbiAgQ0FTRV82OiBcIjZcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJVEVNX1RZUEUgPSB7XHJcbiAgUkVHVUxBUjogXCJSZWd1bGFyIEl0ZW1cIixcclxuICBLRVk6IFwiS2V5IEl0ZW1cIixcclxuICBISURERU5fQTogXCJIaWRkZW4gSXRlbSBBXCIsXHJcbiAgSElEREVOX0I6IFwiSGlkZGVuIEl0ZW0gQlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZBUklBQkxFX09QRVJBVE9SID0ge1xyXG4gIFNFVDogXCJTZXRcIixcclxuICBBREQ6IFwiQWRkXCIsXHJcbiAgU1VCOiBcIlN1YlwiLFxyXG4gIE1VTDogXCJNdWxcIixcclxuICBESVY6IFwiRGl2XCIsXHJcbiAgTU9EOiBcIk1vZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVWRU5UID0ge1xyXG4gIFRISVNfRVZFTlQ6IFwiVGhpc0V2ZW50XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBUkFDVEVSID0ge1xyXG4gIFBMQVlFUjogXCJQbGF5ZXJcIixcclxuICAuLi5FVkVOVCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUSU1FUl9NT0RFID0ge1xyXG4gIFNUQVJUOiBcIlN0YXJ0XCIsXHJcbiAgRU5EOiBcIkVuZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVE9SX01FTUJFUiA9IHtcclxuICBBTEw6IFwiRW50aXJlIFBhcnR5XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUNURVJfUEFSQU1FVEVSID0ge1xyXG4gIE1BWF9IUDogXCJNYXhIUFwiLFxyXG4gIE1BWF9NUDogXCJNYXhNUFwiLFxyXG4gIEFUVEFDSzogXCJBdHRhY2tcIixcclxuICBERUZFTlNFOiBcIkRlZmVuc2VcIixcclxuICBNX0FUVEFDSzogXCJNLkF0dGFja1wiLFxyXG4gIE1fREVGRU5TRTogXCJNLkRlZmVuc2VcIixcclxuICBBR0lMSVRZOiBcIkFnaWxpdHlcIixcclxuICBMVUNLOiBcIkx1Y2tcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFUVVJUF9TVEFURSA9IHtcclxuICBOT05FOiBcIk5vbmVcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFTkVNWV9NRU1CRVIgPSB7XHJcbiAgRU5USVJFX1RST09QOiBcIkVudGlyZSBUcm9vcFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVElPTl9UQVJHRVQgPSB7XHJcbiAgTEFTVF9UQVJHRVQ6IFwiTGFzdCBUYXJnZXRcIixcclxuICBSQU5ET006IFwiUmFuZG9tXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRElSRUNUSU9OID0ge1xyXG4gIERPV046IFwiRG93blwiLFxyXG4gIExFRlQ6IFwiTGVmdFwiLFxyXG4gIFJJR0hUOiBcIlJpZ2h0XCIsXHJcbiAgVVA6IFwiVXBcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IERJUkVDVElPTl9SRVRBSU4gPSB7XHJcbiAgUkVUQUlOOiBcIlJldGFpblwiLFxyXG4gIC4uLkRJUkVDVElPTixcclxufTtcclxuZXhwb3J0IGNvbnN0IERJUkVDVElPTl9ST1VURTggPSB7XHJcbiAgLi4uRElSRUNUSU9OLFxyXG4gIERPV05fTEVGVDogXCJMb3dlckxlZnRcIixcclxuICBET1dOX1JJR0hUOiBcIkxvd2VyUmlnaHRcIixcclxuICBVUF9MRUZUOiBcIlVwcGVyTGVmdFwiLFxyXG4gIFVQX1JJR0hUOiBcIlVwcGVyUmlnaHRcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IERJUkVDVElPTl9NRVRIT0QgPSB7XHJcbiAgUkFORE9NOiBcIkF0UmFuZG9tXCIsXHJcbiAgVE9XQVJEX1BMQVlFUjogXCJUb3dhcmRQbGF5ZXJcIixcclxuICBBV0FZX1BMQVlFUjogXCJBd2F5RnJvbVBsYXllclwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRElSRUNUSU9OX1RVUk5fTUVUSE9EID0ge1xyXG4gIExFRlRfOTA6IFwiOTBMZWZ0XCIsXHJcbiAgUklHSFRfOTA6IFwiOTBSaWdodFwiLFxyXG4gIFJBTkRPTV85MDogXCI5MFJpZ2h0b3JMZWZ0XCIsXHJcbiAgVFVSTl8xODA6IFwiMTgwXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBESVJFQ1RJT05fQ0FSID0ge1xyXG4gIEZST05UOiBcIkZvcndhcmRcIixcclxuICBCQUNLOiBcIkJhY2t3YXJkXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRkFERSA9IHtcclxuICBCTEFDSzogXCJCbGFja1wiLFxyXG4gIFdISVRFOiBcIldoaXRlXCIsXHJcbiAgTk9ORTogXCJOb25lXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVkVISUNMRSA9IHtcclxuICBCT0FUOiBcIkJvYXRcIixcclxuICBTSElQOiBcIlNoaXBcIixcclxuICBBSVJfU0hJUDogXCJBaXJTaGlwXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBUkFDVEVSX1NQRUVEID0ge1xyXG4gIFg4X1NMT1c6IFwieDggU2xvd2VyXCIsXHJcbiAgWDRfU0xPVzogXCJ4NCBTbG93ZXJcIixcclxuICBYMl9TTE9XOiBcIngyIFNsb3dlclwiLFxyXG4gIE5PUk1BTDogXCJOb3JtYWxcIixcclxuICBYMl9GQVNUOiBcIngyIEZhc3RlclwiLFxyXG4gIFg0X0ZBU1Q6IFwieDQgRmFzdGVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBUkFDVEVSX0ZSRVEgPSB7XHJcbiAgTE9XRVNUOiBcIkxvd2VzdFwiLFxyXG4gIExPVzogXCJMb3dlclwiLFxyXG4gIE5PUk1BTDogXCJOb3JtYWxcIixcclxuICBISUdIOiBcIkhpZ2hlclwiLFxyXG4gIEhJR0hFU1Q6IFwiSGlnaGVzdFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgQkxFTkRfTU9ERSA9IHtcclxuICBOT1JNQUw6IFwiTm9ybWFsXCIsXHJcbiAgQUREOiBcIkFkZGl0aXZlXCIsXHJcbiAgTVVMOiBcIk11bHRpcGx5XCIsXHJcbiAgU0NSRUVOOiBcIlNjcmVlblwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgQkFMTE9PTiA9IHtcclxuICBFWENMQU1BVElPTjogXCJFeGNsYW1hdGlvblwiLFxyXG4gIFFVRVNUSU9OOiBcIlF1ZXN0aW9uXCIsXHJcbiAgTVVTSUM6IFwiTXVzaWMgTm90ZVwiLFxyXG4gIEhFQVJUOiBcIkhlYXJ0XCIsXHJcbiAgQU5HRVI6IFwiQW5nZXJcIixcclxuICBTV0VBVDogXCJTd2VhdFwiLFxyXG4gIEZMVVNUUkFUSU9OOiBcIkZsdXN0cmF0aW9uXCIsXHJcbiAgU0lMRU5DRTogXCJTaWxlbmNlXCIsXHJcbiAgTElHSFQ6IFwiTGlnaHQgQnVsYlwiLFxyXG4gIFpaWjogXCJ6enpcIixcclxuICBVU0VSXzE6IFwidXNlci1kZWZpbmVkMVwiLFxyXG4gIFVTRVJfMjogXCJ1c2VyLWRlZmluZWQyXCIsXHJcbiAgVVNFUl8zOiBcInVzZXItZGVmaW5lZDNcIixcclxuICBVU0VSXzQ6IFwidXNlci1kZWZpbmVkNFwiLFxyXG4gIFVTRVJfNTogXCJ1c2VyLWRlZmluZWQ1XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUElDVFVSRV9PUklHSU4gPSB7XHJcbiAgQ09STkVSOiBcIlVwcGVyIExlZnRcIixcclxuICBDRU5URVI6IFwiQ2VudGVyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRUFTSU5HID0ge1xyXG4gIExJTkVBUjogXCJMaW5lYXJcIixcclxuICBJTjogXCJFYXNlLWluXCIsXHJcbiAgT1VUOiBcIkVhc2Utb3V0XCIsXHJcbiAgSU5fT1VUOiBcIkVhc2UtaW4tb3V0XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ09MT1JfVE9ORSA9IHtcclxuICBOT1JNQUw6IFwiTm9ybWFsXCIsXHJcbiAgREFSSzogXCJEYXJrXCIsXHJcbiAgU0VQSUE6IFwiU2VwaWFcIixcclxuICBTVU5TRVQ6IFwiU3Vuc2V0XCIsXHJcbiAgTklHSFQ6IFwiTmlnaHRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXRUFUSEVSID0ge1xyXG4gIE5PTkU6IFwiTm9uZVwiLFxyXG4gIFJBSU46IFwiUmFpblwiLFxyXG4gIFNUT1JNOiBcIlN0b3JtXCIsXHJcbiAgU05PVzogXCJTbm93XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQkFUVExFX1RST09QID0ge1xyXG4gIFJBTkRPTTogXCJSYW5kb21cIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QX0lURU0gPSB7XHJcbiAgSVRFTTogXCJJdGVtXCIsXHJcbiAgV0VBUE9OOiBcIldlYXBvblwiLFxyXG4gIEFSTU9SOiBcIkFybW9yXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9DQVRJT04gPSB7XHJcbiAgVEVSUkFJTl9UQUc6IFwiVGVycmFpbiBUYWdcIixcclxuICBFVkVOVF9JRDogXCJFdmVudCBJRFwiLFxyXG4gIExBWUVSXzE6IFwiTGF5ZXIgMVwiLFxyXG4gIFJFR0lPTl9JRDogXCJSZWdpb24gSURcIixcclxufTtcclxuIiwiaW1wb3J0IHsgQ09MT1JfVE9ORSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIEFyZ1ZhbHVlLFxyXG4gIENvbG9yMyxcclxuICBDb2xvcjQsXHJcbiAgRGlyZWN0T3JWYXJpYWJsZXMsXHJcbiAgRnJvbVRvLFxyXG4gIE1hcFBvc2l0aW9uLFxyXG4gIFNvdW5kLFxyXG4gIFN3aXRjaElkLFxyXG4gIFRleHQsXHJcbiAgVmFyaWFibGVJZCxcclxufSBmcm9tIFwiLi90eXBlXCI7XHJcblxyXG5jb25zdCBqb2luS2VlcCA9IChkZWxpbTogc3RyaW5nIHwgbnVsbCwgYXJyOiAoVGV4dCB8IHVuZGVmaW5lZClbXSkgPT5cclxuICBhcnIuam9pbihkZWxpbSA/PyBcIiwgXCIpO1xyXG5leHBvcnQgY29uc3Qgam9pblNraXAgPSAoZGVsaW06IHN0cmluZyB8IG51bGwsIGFycjogKFRleHQgfCB1bmRlZmluZWQpW10pID0+XHJcbiAgYXJyLmZpbHRlcigoeCkgPT4geCAhPT0gdW5kZWZpbmVkKS5qb2luKGRlbGltID8/IFwiLCBcIik7XHJcblxyXG5leHBvcnQgY29uc3QgdGFnID0gKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBhcmc/OiAoVGV4dCB8IHVuZGVmaW5lZClbXSxcclxuICB0ZXh0Q2hpbGRyZW4/OiBzdHJpbmdcclxuKSA9PiB7XHJcbiAgY29uc3QgYXJncyA9IGpvaW5LZWVwKG51bGwsIGFyZyA/PyBbXSk7XHJcbiAgcmV0dXJuIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgIGFyZ3MgIT09IFwiXCIgPyBgPCR7bmFtZX06ICR7YXJnc30+YCA6IGA8JHtuYW1lfT5gLFxyXG4gICAgLi4uKHRleHRDaGlsZHJlbiA/IFt0ZXh0Q2hpbGRyZW4sIGA8LyR7bmFtZX0+YF0gOiBbXSksXHJcbiAgXSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZUNhc2UgPSAoXHJcbiAgdjogQXJnVmFsdWUsXHJcbiAgY2FzZXM6IFBhcnRpYWw8e1xyXG4gICAgbnVtYmVyOiAodjogbnVtYmVyLCBlOiAoKSA9PiBFcnJvcikgPT4gbnVtYmVyIHwgc3RyaW5nO1xyXG4gICAgc3RyaW5nOiAodjogc3RyaW5nLCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgb2JqZWN0OiAodjogb2JqZWN0LCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgdmFyaWFibGVJZDogKHY6IFZhcmlhYmxlSWQsIGU6ICgpID0+IEVycm9yKSA9PiBzdHJpbmc7XHJcbiAgICBzd2l0Y2hJZDogKHY6IFN3aXRjaElkLCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgZnJvbVRvOiAodjogRnJvbVRvLCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgbWFwUG9zaXRpb246ICh2OiBNYXBQb3NpdGlvbiwgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICAgIHNvdW5kOiAodjogU291bmQsIGU6ICgpID0+IEVycm9yKSA9PiBzdHJpbmc7XHJcbiAgICBjb2xvcjogKHY6IENvbG9yMyB8IENvbG9yNCwgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICB9PlxyXG4pID0+IHtcclxuICBjb25zdCBlID0gKCkgPT4gbmV3IEVycm9yKFwi44K144Od44O844OI44GV44KM44Gm44GE44Gq44GE5Z6L44Gn44GZXCIpO1xyXG4gIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiAmJiBjYXNlcy5udW1iZXIpIHJldHVybiBjYXNlcy5udW1iZXIodiwgZSk7XHJcbiAgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiICYmIGNhc2VzLnN0cmluZykgcmV0dXJuIGNhc2VzLnN0cmluZyh2LCBlKTtcclxuICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIpIHtcclxuICAgIGlmIChjYXNlcy5vYmplY3QpIHJldHVybiBjYXNlcy5vYmplY3QodiwgZSk7XHJcbiAgICBpZiAoXCJ2YXJpYWJsZUlkXCIgaW4gdiAmJiBjYXNlcy52YXJpYWJsZUlkKSByZXR1cm4gY2FzZXMudmFyaWFibGVJZCh2LCBlKTtcclxuICAgIGlmIChcInN3aXRjaElkXCIgaW4gdiAmJiBjYXNlcy5zd2l0Y2hJZCkgcmV0dXJuIGNhc2VzLnN3aXRjaElkKHYsIGUpO1xyXG4gICAgaWYgKFwiZnJvbVwiIGluIHYgJiYgXCJ0b1wiIGluIHYgJiYgY2FzZXMuZnJvbVRvKSByZXR1cm4gY2FzZXMuZnJvbVRvKHYsIGUpO1xyXG4gICAgaWYgKFwiaWRcIiBpbiB2ICYmIFwieFwiIGluIHYgJiYgXCJ5XCIgaW4gdiAmJiBjYXNlcy5tYXBQb3NpdGlvbilcclxuICAgICAgcmV0dXJuIGNhc2VzLm1hcFBvc2l0aW9uKHYsIGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICBcIm5hbWVcIiBpbiB2ICYmXHJcbiAgICAgIFwidm9sdW1lXCIgaW4gdiAmJlxyXG4gICAgICBcInBpdGNoXCIgaW4gdiAmJlxyXG4gICAgICBcInBhblwiIGluIHYgJiZcclxuICAgICAgY2FzZXMuc291bmRcclxuICAgIClcclxuICAgICAgcmV0dXJuIGNhc2VzLnNvdW5kKHYsIGUpO1xyXG4gICAgaWYgKFwiclwiIGluIHYgJiYgXCJnXCIgaW4gdiAmJiBcImJcIiBpbiB2ICYmIGNhc2VzLmNvbG9yKVxyXG4gICAgICByZXR1cm4gY2FzZXMuY29sb3IodiwgZSk7XHJcbiAgfVxyXG4gIHRocm93IGUoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmdJbnQgPSAodjogbnVtYmVyKSA9PiB7XHJcbiAgaWYgKHYgJSAxICE9PSAwKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYOWApOOBr+aVtOaVsOOBp+OBguOCi+W/heimgeOBjOOBguOCiuOBvuOBmeOAgmApO1xyXG4gIH1cclxuICByZXR1cm4gdjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFyZ1JhbmdlID0gKHY6IG51bWJlciwgcmFuZ2U6IEZyb21UbykgPT4ge1xyXG4gIGFyZ0ludCh2KTtcclxuICBpZiAoIShyYW5nZS5mcm9tIDw9IHYgJiYgdiA8PSByYW5nZS50bykpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYOWApOOBryAke3JhbmdlLmZyb219IO+9niAke3JhbmdlLnRvfSDjga7plpPjga7lgKTjgafjgYLjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJgXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gdjtcclxufTtcclxuZXhwb3J0IGNvbnN0IGFyZ0lkID0gKHY6IG51bWJlcikgPT4gYXJnUmFuZ2UodiwgeyBmcm9tOiAxLCB0bzogSW5maW5pdHkgfSk7XHJcbmV4cG9ydCBjb25zdCBhcmdFbmVteUluZGV4ID0gKHY6IG51bWJlcikgPT4gYXJnUmFuZ2UodiwgeyBmcm9tOiAxLCB0bzogOCB9KTtcclxuZXhwb3J0IGNvbnN0IGFyZ1ByZXNldCA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXHJcbiAgdjogc3RyaW5nLFxyXG4gIHByZXNldDogUFxyXG4pID0+IHByZXNldFt2XTtcclxuZXhwb3J0IGNvbnN0IGFyZ1N3aXRjaElkID0gKHZhbHVlOiBTd2l0Y2hJZCkgPT4gYFNXWyR7dmFsdWUuc3dpdGNoSWR9XWA7XHJcbmV4cG9ydCBjb25zdCBhcmdWYXJpYWJsZUlkID0gKHZhbHVlOiBWYXJpYWJsZUlkKSA9PiBgVlske3ZhbHVlLnZhcmlhYmxlSWR9XWA7XHJcbmV4cG9ydCBjb25zdCBhcmdGcm9tVG8gPSAodmFsdWU6IEZyb21UbykgPT4gYCR7dmFsdWUuZnJvbX0tJHt2YWx1ZS50b31gO1xyXG5leHBvcnQgY29uc3QgYXJnc0NvbG9yID0gKGNvbG9yOiBDb2xvcjMgfCBDb2xvcjQpID0+XHJcbiAgYENvbG9yVG9uZVske2NvbG9yLnJ9XVske2NvbG9yLmd9XVske2NvbG9yLmJ9XSR7XHJcbiAgICAoY29sb3IgYXMgQ29sb3I0KT8ueCA/IGBbJHsoY29sb3IgYXMgQ29sb3I0KS54fV1gIDogXCJcIlxyXG4gIH1gO1xyXG5leHBvcnQgY29uc3QgYXJnc1NvdW5kID0gKHNvdW5kOiBTb3VuZCkgPT5cclxuICBqb2luS2VlcChudWxsLCBbc291bmQubmFtZSA/PyBcIk5vbmVcIiwgc291bmQudm9sdW1lLCBzb3VuZC5waXRjaCwgc291bmQucGFuXSk7XHJcbmV4cG9ydCBjb25zdCBhcmdNYXBQb3NpdGlvbiA9IChtYXBvczogTWFwUG9zaXRpb24sIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzKSA9PlxyXG4gIGAke21vZGUgPT09IFwiRElSRUNUXCIgPyBcIkRpcmVjdFwiIDogXCJXaXRoVmFyaWFibGVzXCJ9WyR7bWFwb3MuaWR9XVske21hcG9zLnh9XVske1xyXG4gICAgbWFwb3MueVxyXG4gIH1dYDtcclxuZXhwb3J0IGNvbnN0IGFyZ0NvbG9yVG9uZSA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXHJcbiAgdmFsdWU6IGtleW9mIFAgfCBDb2xvcjRcclxuKSA9PlxyXG4gIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIlxyXG4gICAgPyBgQ29sb3JUb25lWyR7dmFsdWUucn1dWyR7dmFsdWUuZ31dWyR7dmFsdWUuYn1dWyR7dmFsdWUueH1dYFxyXG4gICAgOiBhcmdQcmVzZXQodmFsdWUgYXMgc3RyaW5nLCBDT0xPUl9UT05FKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcmdJbnRPclZhcmlhYmxlSWQgPSAodjogbnVtYmVyIHwgVmFyaWFibGVJZCkgPT5cclxuICB0eXBlQ2FzZSh2LCB7XHJcbiAgICB2YXJpYWJsZUlkOiBhcmdWYXJpYWJsZUlkLFxyXG4gICAgbnVtYmVyOiAoeCkgPT4geCxcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcmVzZXRBcmcgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHByZXNldDogUFxyXG4pID0+IHtcclxuICByZXR1cm4gKHY6IEFyZ1ZhbHVlKSA9PlxyXG4gICAgdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgPyBhcmdQcmVzZXQodiwgcHJlc2V0KSA6IGFyZ0lkKHYgYXMgbnVtYmVyKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByZXNldEFyZ1dpdGhWYXJpYWJsZUlkID1cclxuICA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KHByZXNldDogUCwgcmFuZ2U/OiBGcm9tVG8pID0+XHJcbiAgKHY6IEFyZ1ZhbHVlKSA9PlxyXG4gICAgdHlwZUNhc2Uodiwge1xyXG4gICAgICBzdHJpbmc6ICh4KSA9PiBhcmdQcmVzZXQoeCwgcHJlc2V0KSxcclxuICAgICAgdmFyaWFibGVJZDogYXJnVmFyaWFibGVJZCxcclxuICAgICAgbnVtYmVyOiAoeCkgPT4gKHJhbmdlID8gYXJnUmFuZ2UoeCwgcmFuZ2UpIDogYXJnSWQoeCkpLFxyXG4gICAgfSk7XHJcbiIsImltcG9ydCB7IEFDVEVSX1BBUkFNRVRFUiwgQUNUT1JfTUVNQkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDcmVhc2VPcGVyYXRvciwgVmFyaWFibGVJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnSWQsXHJcbiAgYXJnSW50T3JWYXJpYWJsZUlkLFxyXG4gIGFyZ1ByZXNldCxcclxuICBjcmVhdGVQcmVzZXRBcmdXaXRoVmFyaWFibGVJZCxcclxuICB0YWcsXHJcbn0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5jb25zdCBhcmdBY3RvcklkV2l0aFByZXNldCA9IGNyZWF0ZVByZXNldEFyZ1dpdGhWYXJpYWJsZUlkKEFDVE9SX01FTUJFUik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlSHAgPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBBQ1RPUl9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gIG9wOiBDcmVhc2VPcGVyYXRvcixcclxuICB2YWx1ZTogbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICBhbGxvd0tub2Nrb3V0PzogYm9vbGVhblxyXG4pID0+XHJcbiAgdGFnKFwiQ2hhbmdlSHBcIiwgW1xyXG4gICAgYXJnQWN0b3JJZFdpdGhQcmVzZXQoaWQpLFxyXG4gICAgb3AsXHJcbiAgICBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLFxyXG4gICAgYWxsb3dLbm9ja291dCxcclxuICBdKTtcclxuXHJcbmNvbnN0IGNvbW1vbkNoYW5nZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBjb21wb25lbnQgPSAoXHJcbiAgICBpZDoga2V5b2YgdHlwZW9mIEFDVE9SX01FTUJFUiB8IG51bWJlciB8IFZhcmlhYmxlSWQsXHJcbiAgICBvcDogQ3JlYXNlT3BlcmF0b3IsXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgVmFyaWFibGVJZFxyXG4gICkgPT4gdGFnKG5hbWUsIFthcmdBY3RvcklkV2l0aFByZXNldChpZCksIG9wLCBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZU1wID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlTXBcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VUcCA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZVRwXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlU3RhdGUgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VTdGF0ZVwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVNraWxsID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlU2tpbGxcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUmVjb3ZlckFsbCA9IChcclxuICBpZDoga2V5b2YgdHlwZW9mIEFDVE9SX01FTUJFUiB8IG51bWJlciB8IFZhcmlhYmxlSWRcclxuKSA9PiB0YWcoXCJSZWNvdmVyQWxsXCIsIFthcmdBY3RvcklkV2l0aFByZXNldChpZCldKTtcclxuXHJcbmNvbnN0IGNvbW1vbkxldmVsVXAgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKFxyXG4gICAgaWQ6IGtleW9mIHR5cGVvZiBBQ1RPUl9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gICAgb3A6IENyZWFzZU9wZXJhdG9yLFxyXG4gICAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWQsXHJcbiAgICBhbGxvd0xldmVsVXA/OiBib29sZWFuXHJcbiAgKSA9PlxyXG4gICAgdGFnKG5hbWUsIFtcclxuICAgICAgYXJnQWN0b3JJZFdpdGhQcmVzZXQoaWQpLFxyXG4gICAgICBvcCxcclxuICAgICAgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKSxcclxuICAgICAgYWxsb3dMZXZlbFVwLFxyXG4gICAgXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZUV4cCA9IGNvbW1vbkxldmVsVXAoXCJDaGFuZ2VFeHBcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VMZXZlbCA9IGNvbW1vbkxldmVsVXAoXCJDaGFuZ2VMZXZlbFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXJhbWV0ZXIgPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBBQ1RPUl9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gIHBhcmFtZXRlcjoga2V5b2YgdHlwZW9mIEFDVEVSX1BBUkFNRVRFUixcclxuICBvcDogQ3JlYXNlT3BlcmF0b3IsXHJcbiAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWRcclxuKSA9PlxyXG4gIHRhZyhcIkNoYW5nZVBhcmFtZXRlclwiLCBbXHJcbiAgICBhcmdBY3RvcklkV2l0aFByZXNldChpZCksXHJcbiAgICBhcmdQcmVzZXQocGFyYW1ldGVyLCBBQ1RFUl9QQVJBTUVURVIpLFxyXG4gICAgb3AsXHJcbiAgICBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUVxdWlwbWVudCA9IChcclxuICBpZDogbnVtYmVyLFxyXG4gIGVxdWlwVHlwZTogbnVtYmVyLFxyXG4gIGVxdWlwSWQ/OiBudW1iZXJcclxuKSA9PlxyXG4gIHRhZyhcIkNoYW5nZUVxdWlwbWVudFwiLCBbXHJcbiAgICBhcmdJZChpZCksXHJcbiAgICBhcmdJZChlcXVpcFR5cGUpLFxyXG4gICAgZXF1aXBJZCAmJiBhcmdJZChlcXVpcElkKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VOYW1lID0gKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT5cclxuICB0YWcoXCJDaGFuZ2VOYW1lXCIsIFthcmdJZChpZCksIG5hbWVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VDbGFzcyA9IChcclxuICBpZDogbnVtYmVyLFxyXG4gIGNsYXNzSWQ6IG51bWJlcixcclxuICBzYXZlTGV2ZWxBbmRFeHA/OiBib29sZWFuXHJcbikgPT4gdGFnKFwiQ2hhbmdlQ2xhc3NcIiwgW2FyZ0lkKGlkKSwgYXJnSWQoY2xhc3NJZCksIHNhdmVMZXZlbEFuZEV4cF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZU5pY2tuYW1lID0gKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT5cclxuICB0YWcoXCJDaGFuZ2VOaWNrbmFtZVwiLCBbYXJnSWQoaWQpLCBuYW1lXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlUHJvZmlsZSA9IChpZDogbnVtYmVyLCBwcm9maWxlOiBbc3RyaW5nLCBzdHJpbmddKSA9PlxyXG4gIHRhZyhcIkNoYW5nZVByb2ZpbGVcIiwgW2FyZ0lkKGlkKSwgcHJvZmlsZVswXSwgcHJvZmlsZVsxXV0pO1xyXG4iLCJpbXBvcnQgeyBBQ1RJT05fVEFSR0VULCBFTkVNWV9NRU1CRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENyZWFzZU9wZXJhdG9yLCBWYXJpYWJsZUlkIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdFbmVteUluZGV4LFxyXG4gIGFyZ0lkLFxyXG4gIGFyZ0ludE9yVmFyaWFibGVJZCxcclxuICBhcmdQcmVzZXQsXHJcbiAgYXJnUmFuZ2UsXHJcbiAgY3JlYXRlUHJlc2V0QXJnV2l0aFZhcmlhYmxlSWQsXHJcbiAgdGFnLFxyXG4gIHR5cGVDYXNlLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuY29uc3QgYXJnRW5lbXlJbmRleFdpdGhQcmVzZXQgPSBjcmVhdGVQcmVzZXRBcmdXaXRoVmFyaWFibGVJZChFTkVNWV9NRU1CRVIpO1xyXG5jb25zdCBhcmdFbmVteUluZGV4V2l0aFByZXNldEFuZFZhcmlhYmxlSWQgPSBjcmVhdGVQcmVzZXRBcmdXaXRoVmFyaWFibGVJZChcclxuICBFTkVNWV9NRU1CRVIsXHJcbiAgeyBmcm9tOiAxLCB0bzogOCB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlRW5lbXlIcCA9IChcclxuICBpbmRleDoga2V5b2YgdHlwZW9mIEVORU1ZX01FTUJFUiB8IG51bWJlciB8IFZhcmlhYmxlSWQsXHJcbiAgb3A6IENyZWFzZU9wZXJhdG9yLFxyXG4gIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gIGFsbG93S25vY2tvdXQ/OiBib29sZWFuXHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VFbmVteUhwXCIsIFtcclxuICAgIGFyZ0VuZW15SW5kZXhXaXRoUHJlc2V0QW5kVmFyaWFibGVJZChpbmRleCksXHJcbiAgICBvcCxcclxuICAgIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSksXHJcbiAgICBhbGxvd0tub2Nrb3V0LFxyXG4gIF0pO1xyXG5cclxuY29uc3QgY29tbW9uQ2hhbmdlID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChcclxuICAgIGluZGV4OiBrZXlvZiB0eXBlb2YgRU5FTVlfTUVNQkVSIHwgbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICAgIG9wOiBDcmVhc2VPcGVyYXRvcixcclxuICAgIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkXHJcbiAgKSA9PlxyXG4gICAgdGFnKG5hbWUsIFtcclxuICAgICAgYXJnRW5lbXlJbmRleFdpdGhQcmVzZXRBbmRWYXJpYWJsZUlkKGluZGV4KSxcclxuICAgICAgb3AsXHJcbiAgICAgIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSksXHJcbiAgICBdKTtcclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59O1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlRW5lbXlNcCA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZUVuZW15TXBcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VFbmVteVRwID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlRW5lbXlUcFwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZUVuZW15U3RhdGUgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VFbmVteVN0YXRlXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVuZW15UmVjb3ZlckFsbCA9IChcclxuICBpbmRleDoga2V5b2YgdHlwZW9mIEVORU1ZX01FTUJFUiB8IG51bWJlciB8IFZhcmlhYmxlSWRcclxuKSA9PiB0YWcoXCJFbmVteVJlY292ZXJBbGxcIiwgW2FyZ0VuZW15SW5kZXhXaXRoUHJlc2V0QW5kVmFyaWFibGVJZChpbmRleCldKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmVteUFwcGVhciA9IChpbmRleDoga2V5b2YgdHlwZW9mIEVORU1ZX01FTUJFUiB8IG51bWJlcikgPT5cclxuICB0YWcoXCJFbmVteUFwcGVhclwiLCBbYXJnRW5lbXlJbmRleFdpdGhQcmVzZXQoaW5kZXgpXSk7XHJcblxyXG5jb25zdCBjb21tb25JbmRleEFuZEVuZW15SWQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKGluZGV4OiBudW1iZXIsIGlkOiBudW1iZXIpID0+XHJcbiAgICB0YWcobmFtZSwgW2FyZ0VuZW15SW5kZXgoaW5kZXgpLCBhcmdJZChpZCldKTtcclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59O1xyXG5leHBvcnQgY29uc3QgRW5lbXlUcmFuc2Zvcm0gPSBjb21tb25JbmRleEFuZEVuZW15SWQoXCJFbmVteVRyYW5zZm9ybVwiKTtcclxuZXhwb3J0IGNvbnN0IFNob3dCYXR0bGVBbmltYXRpb24gPSBjb21tb25JbmRleEFuZEVuZW15SWQoXCJTaG93QmF0dGxlQW5pbWF0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcmNlQWN0aW9uID0gKFxyXG4gIG1vZGU6IFwiRU5FTVlcIiB8IFwiQUNUT1JcIixcclxuICBpbmRleDogbnVtYmVyLFxyXG4gIGlkOiBudW1iZXIsXHJcbiAgdGFyZ2V0OiBrZXlvZiB0eXBlb2YgQUNUSU9OX1RBUkdFVCB8IG51bWJlclxyXG4pID0+XHJcbiAgdGFnKFwiRm9yY2VBY3Rpb25cIiwgW1xyXG4gICAgdHlwZUNhc2UoaW5kZXgsIHtcclxuICAgICAgbnVtYmVyOiAoeCkgPT5cclxuICAgICAgICBtb2RlID09PSBcIkFDVE9SXCIgPyBgQWN0b3JbJHthcmdJZCh4KX1dYCA6IGFyZ0VuZW15SW5kZXgoeCksXHJcbiAgICB9KSxcclxuICAgIGFyZ0lkKGlkKSxcclxuICAgIHR5cGVDYXNlKHRhcmdldCwge1xyXG4gICAgICBzdHJpbmc6ICh4KSA9PiBhcmdQcmVzZXQoeCwgQUNUSU9OX1RBUkdFVCksXHJcbiAgICAgIG51bWJlcjogKHgpID0+IGBJbmRleCAke2FyZ1JhbmdlKHgsIHsgZnJvbTogMSwgdG86IDggfSl9YCxcclxuICAgIH0pLFxyXG4gIF0pO1xyXG4iLCJpbXBvcnQgeyBCQUxMT09OLCBDSEFSQUNURVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGFyZ0lkLCBhcmdQcmVzZXQsIHRhZywgdHlwZUNhc2UgfSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ051bWJlclByZXNldCA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXHJcbiAgdjogbnVtYmVyIHwgc3RyaW5nLFxyXG4gIHByZXNldDogUFxyXG4pID0+XHJcbiAgdHlwZUNhc2Uodiwge1xyXG4gICAgc3RyaW5nOiAoeCkgPT4gYXJnUHJlc2V0KHgsIHByZXNldCksXHJcbiAgICBudW1iZXI6IGFyZ0lkLFxyXG4gIH0pO1xyXG5cclxuY29uc3QgY29tbW9uQ2hhbmdlID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChhY3RpdmU6IGJvb2xlYW4pID0+IHRhZyhuYW1lLCBbYWN0aXZlXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVRyYW5zcGFyZW5jeSA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZVRyYW5zcGFyZW5jeVwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVBsYXllckZvbGxvd2VycyA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZVBsYXllckZvbGxvd2Vyc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHYXRoZXJGb2xsb3dlcnMgPSAoKSA9PiB0YWcoXCJHYXRoZXJGb2xsb3dlcnNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0FuaW1hdGlvbiA9IChcclxuICBpZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcixcclxuICBhbmltYXRpb25JZDogbnVtYmVyLFxyXG4gIHdhaXQ/OiBib29sZWFuXHJcbikgPT5cclxuICB0YWcoXCJTaG93QW5pbWF0aW9uXCIsIFtcclxuICAgIGFyZ051bWJlclByZXNldChpZCwgQ0hBUkFDVEVSKSxcclxuICAgIGFyZ0lkKGFuaW1hdGlvbklkKSxcclxuICAgIHdhaXQsXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0JhbGxvb25JY29uID0gKFxyXG4gIGlkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyLFxyXG4gIGJhbGxvb246IGtleW9mIHR5cGVvZiBCQUxMT09OLFxyXG4gIHdhaXQ/OiBib29sZWFuXHJcbikgPT5cclxuICB0YWcoXCJTaG93QmFsbG9vbkljb25cIiwgW1xyXG4gICAgYXJnTnVtYmVyUHJlc2V0KGlkLCBDSEFSQUNURVIpLFxyXG4gICAgYXJnUHJlc2V0KGJhbGxvb24sIEJBTExPT04pLFxyXG4gICAgd2FpdCxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFcmFzZUV2ZW50ID0gKCkgPT4gdGFnKFwiRXJhc2VFdmVudFwiKTtcclxuIiwiaW1wb3J0IHsgYXJnSWQsIGpvaW5Ta2lwLCB0YWcgfSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVjayA9IChjb25kaXRpb246IHN0cmluZywgdGhlbjogc3RyaW5nLCBvdGhlcndpc2U/OiBzdHJpbmcpID0+XHJcbiAgam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgdGFnKFwiSWZcIiwgW1wiU2NyaXB0XCIsIGNvbmRpdGlvbl0pLFxyXG4gICAgdGhlbixcclxuICAgIC4uLihvdGhlcndpc2UgPyBqb2luU2tpcChcIlxcblwiLCBbdGFnKFwiRWxzZVwiKSwgb3RoZXJ3aXNlXSkgOiBbXSksXHJcbiAgICB0YWcoXCJFbmRcIiksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgTG9vcCA9IChjb250ZW50OiBzdHJpbmcpID0+XHJcbiAgam9pblNraXAoXCJcXG5cIiwgW3RhZyhcIkxvb3BcIiksIGNvbnRlbnQsIHRhZyhcIlJlcGVhdEFib3ZlXCIpXSk7XHJcbmV4cG9ydCBjb25zdCBMb29wQnJlYWsgPSAoKSA9PiB0YWcoXCJCcmVha0xvb3BcIik7XHJcblxyXG5leHBvcnQgY29uc3QgRXhpdEV2ZW50UHJvY2Vzc2luZyA9ICgpID0+IHRhZyhcIkV4aXRFdmVudFByb2Nlc3NpbmdcIik7XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbW9uRXZlbnQgPSAoaWQ6IG51bWJlcikgPT4gdGFnKFwiQ29tbW9uRXZlbnRcIiwgW2FyZ0lkKGlkKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsID0gKG5hbWU6IHN0cmluZykgPT4gdGFnKFwiTGFiZWxcIiwgW25hbWVdKTtcclxuZXhwb3J0IGNvbnN0IEdvdG8gPSAobmFtZTogc3RyaW5nKSA9PiB0YWcoXCJKdW1wVG9MYWJlbFwiLCBbbmFtZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnQgPSAodGV4dDogc3RyaW5nKSA9PiB0YWcoXCJDb21tZW50XCIsIHVuZGVmaW5lZCwgdGV4dCk7XHJcbiIsImltcG9ydCB7IGFyZ0ludCwgdGFnIH0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcbmltcG9ydCAqIGFzIHJtbXpHbG9iYWwgZnJvbSBcIi4uL2dsb2JhbFRoaXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBXYWl0ID0gKHRpbWU6IG51bWJlcikgPT4gdGFnKFwiV2FpdFwiLCBbYXJnSW50KHRpbWUpXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2NyaXB0ID0gKGNvZGU6IChnbG9iYWxUaGlzOiB0eXBlb2Ygcm1tekdsb2JhbCkgPT4gdW5rbm93bikgPT4ge1xyXG4gIGNvbnN0IG1hdGNoID0gY29kZS50b1N0cmluZygpLm1hdGNoKC9cXHsoW1xcc1xcU10qKVxcfS8pO1xyXG4gIHJldHVybiB0YWcoXCJTY3JpcHRcIiwgdW5kZWZpbmVkLCBtYXRjaCA/IG1hdGNoWzFdLnRyaW0oKSA6IFwiXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdWdpbkNvbW1hbmRNViA9IChjb21tYW5kOiBzdHJpbmcpID0+XHJcbiAgdGFnKFwiUGx1Z2luQ29tbWFuZFwiLCBbY29tbWFuZF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsdWdpbkNvbW1hbmRNWiA9IChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgbWV0aG9kOiBzdHJpbmcsXHJcbiAgY29tbWFuZDogc3RyaW5nLFxyXG4gIGFyZ3M6IHsgbmFtZTogc3RyaW5nOyB2YWx1ZTogYW55IH1bXVxyXG4pID0+XHJcbiAgdGFnKFwiUGx1Z2luQ29tbWFuZE1aXCIsIFtcclxuICAgIG5hbWUsXHJcbiAgICBtZXRob2QsXHJcbiAgICBjb21tYW5kLFxyXG4gICAgLi4uYXJncy5tYXAoKHgpID0+IGAke3gubmFtZX1bJHt4LnZhbHVlfV1gKSxcclxuICBdKTtcclxuIiwiaW1wb3J0IHsgQ0hBUkFDVEVSLCBMT0NBVElPTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVmFyaWFibGVJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnSWQsXHJcbiAgYXJnUHJlc2V0LFxyXG4gIGFyZ1JhbmdlLFxyXG4gIGFyZ1ZhcmlhYmxlSWQsXHJcbiAgdGFnLFxyXG4gIHR5cGVDYXNlLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZU1hcE5hbWVEaXNwbGF5ID0gKGFsbG93OiBib29sZWFuKSA9PlxyXG4gIHRhZyhcIkNoYW5nZU1hcE5hbWVEaXNwbGF5XCIsIFthbGxvd10pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZVRpbGVzZXQgPSAoaWQ6IG51bWJlcikgPT4gdGFnKFwiQ2hhbmdlVGlsZXNldFwiLCBbYXJnSWQoaWQpXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQmF0dGxlQmFja0dyb3VuZCA9IChpbWFnZXM6IFtzdHJpbmc/LCBzdHJpbmc/XSkgPT5cclxuICB0YWcoXCJDaGFuZ2VCYXR0bGVCYWNrR3JvdW5kXCIsIFtpbWFnZXNbMF0gPz8gXCJOb25lXCIsIGltYWdlc1sxXSA/PyBcIk5vbmVcIl0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZVBhcmFsbGF4ID0gKFxyXG4gIG5hbWU6IHN0cmluZyxcclxuICBzY3JvbGw6IHsgeD86IG51bWJlcjsgeT86IG51bWJlciB9XHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VQYXJhbGxheFwiLCBbXHJcbiAgICBuYW1lLFxyXG4gICAgc2Nyb2xsLnggJiZcclxuICAgICAgYExvb3BIb3Jpem9udGFsbHlbJHthcmdSYW5nZShzY3JvbGwueCwgeyBmcm9tOiAtMzIsIHRvOiAzMiB9KX1dYCxcclxuICAgIHNjcm9sbC55ICYmIGBMb29wVmVydGljYWxseVske2FyZ1JhbmdlKHNjcm9sbC55LCB7IGZyb206IC0zMiwgdG86IDMyIH0pfV1gLFxyXG4gIF0pO1xyXG5cclxudHlwZSBQb3NpdGlvblR5cGUgPSB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB7IHg6IFZhcmlhYmxlSWQ7IHk6IFZhcmlhYmxlSWQgfTtcclxuZXhwb3J0IGNvbnN0IEdldExvY2F0aW9uSW5mbyA9IChcclxuICB2YXJpYWJsZUlkOiBudW1iZXIsXHJcbiAgbGF5ZXI6IGtleW9mIHR5cGVvZiBMT0NBVElPTixcclxuICBwb3NpdGlvbjogUG9zaXRpb25UeXBlIHwga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlclxyXG4pID0+XHJcbiAgdGFnKFwiR2V0TG9jYXRpb25JbmZvXCIsIFtcclxuICAgIGFyZ0lkKHZhcmlhYmxlSWQpLFxyXG4gICAgYXJnUHJlc2V0KGxheWVyLCBMT0NBVElPTiksXHJcbiAgICB0eXBlQ2FzZShwb3NpdGlvbiwge1xyXG4gICAgICBvYmplY3Q6ICh2YWx1ZSwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZSBhcyBQb3NpdGlvblR5cGU7XHJcbiAgICAgICAgaWYgKFwieFwiIGluIHYgJiYgXCJ5XCIgaW4gdikge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2LnggPT09IFwibnVtYmVyXCIpIHJldHVybiBgRGlyZWN0WyR7di54fV1bJHt2Lnl9XWA7XHJcbiAgICAgICAgICBpZiAodi54LnZhcmlhYmxlSWQpIHJldHVybiBgV2l0aFZhcmlhYmxlc1ske3YueH1dWyR7di55fV1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdKTtcclxuIiwiaW1wb3J0IHsgU291bmQgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQgeyBhcmdJbnQsIGFyZ3NTb3VuZCwgdGFnIH0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5jb25zdCBjb21tb25Tb3VuZCA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBjb21wb25lbnQgPSAoc291bmQ6IFNvdW5kKSA9PiB0YWcobmFtZSwgW2FyZ3NTb3VuZChzb3VuZCldKTtcclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59O1xyXG5leHBvcnQgY29uc3QgUGxheUJHTSA9IGNvbW1vblNvdW5kKFwiUGxheUJHTVwiKTtcclxuZXhwb3J0IGNvbnN0IFBsYXlCR1MgPSBjb21tb25Tb3VuZChcIlBsYXlCR1NcIik7XHJcbmV4cG9ydCBjb25zdCBQbGF5TUUgPSBjb21tb25Tb3VuZChcIlBsYXlNRVwiKTtcclxuZXhwb3J0IGNvbnN0IFBsYXlTRSA9IGNvbW1vblNvdW5kKFwiUGxheVNFXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlQmF0dGxlQkdNID0gY29tbW9uU291bmQoXCJDaGFuZ2VCYXR0bGVCR01cIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VWaWN0b3J5TWUgPSBjb21tb25Tb3VuZChcIkNoYW5nZVZpY3RvcnlNZVwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZURlZmVhdE1lID0gY29tbW9uU291bmQoXCJDaGFuZ2VEZWZlYXRNZVwiKTtcclxuXHJcbmNvbnN0IGNvbW1vbkZhZGVvdXQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKHRpbWU6IG51bWJlcikgPT4gdGFnKG5hbWUsIFthcmdJbnQodGltZSldKTtcclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59O1xyXG5leHBvcnQgY29uc3QgRmFkZW91dEJHTSA9IGNvbW1vbkZhZGVvdXQoXCJGYWRlb3V0QkdNXCIpO1xyXG5leHBvcnQgY29uc3QgRmFkZW91dEJHUyA9IGNvbW1vbkZhZGVvdXQoXCJGYWRlb3V0QkdTXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNhdmVCR00gPSAoKSA9PiB0YWcoXCJTYXZlQkdNXCIpO1xyXG5leHBvcnQgY29uc3QgU3RvcEJHTSA9ICgpID0+IHRhZyhcIlN0b3BCR01cIik7XHJcbmV4cG9ydCBjb25zdCBSZXBsYXlCR00gPSAoKSA9PiB0YWcoXCJSZXBsYXlCR01cIik7XHJcbmV4cG9ydCBjb25zdCBTdG9wQkdTID0gKCkgPT4gdGFnKFwiU3RvcEJHU1wiKTtcclxuZXhwb3J0IGNvbnN0IFN0b3BNRSA9ICgpID0+IHRhZyhcIlN0b3BNRVwiKTtcclxuZXhwb3J0IGNvbnN0IFN0b3BTRSA9ICgpID0+IHRhZyhcIlN0b3BTRVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbGF5TW92aWUgPSAobmFtZTogc3RyaW5nKSA9PiB0YWcoXCJQbGF5TW92aWVcIiwgW25hbWVdKTtcclxuIiwiaW1wb3J0IHtcclxuICBDSE9JQ0VTX0NBTkNFTCxcclxuICBDSE9JQ0VTX0lOSVQsXHJcbiAgSVRFTV9UWVBFLFxyXG4gIFdJTkRPV19CQUNLR1JPVU5ELFxyXG4gIFdJTkRPV19QT1NJVElPTl9IT1JJWk9OVEFMLFxyXG4gIFdJTkRPV19QT1NJVElPTl9WRVJUSUNBTCxcclxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnSWQsXHJcbiAgYXJnUHJlc2V0LFxyXG4gIGFyZ1JhbmdlLFxyXG4gIGFyZ1ZhcmlhYmxlSWQsXHJcbiAgam9pblNraXAsXHJcbiAgdGFnLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuY29uc3QgYXJnQ2hvaWNlcyA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXHJcbiAgdmFsdWU6IGtleW9mIFAgfCBudW1iZXIsXHJcbiAgcHJlc2V0OiBQXHJcbikgPT5cclxuICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCJcclxuICAgID8gYXJnUmFuZ2UodmFsdWUsIHsgZnJvbTogMSwgdG86IDYgfSlcclxuICAgIDogYXJnUHJlc2V0KHZhbHVlIGFzIHN0cmluZywgcHJlc2V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaW5kb3cgPSAoe1xyXG4gIGZhY2UsXHJcbiAgcG9zaXRpb24sXHJcbiAgYmFja2dyb3VuZCxcclxuICBuYW1lLFxyXG59OiB7XHJcbiAgYmFja2dyb3VuZD86IGtleW9mIHR5cGVvZiBXSU5ET1dfQkFDS0dST1VORDtcclxuICBwb3NpdGlvbj86IGtleW9mIHR5cGVvZiBXSU5ET1dfUE9TSVRJT05fVkVSVElDQUw7XHJcbiAgZmFjZT86IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH07XHJcbiAgbmFtZT86IHN0cmluZztcclxufSkgPT5cclxuICBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICBiYWNrZ3JvdW5kICYmIHRhZyhcIkJhY2tncm91bmRcIiwgW2JhY2tncm91bmRdKSxcclxuICAgIHBvc2l0aW9uICYmIHRhZyhcIldpbmRvd1Bvc2l0aW9uXCIsIFtwb3NpdGlvbl0pLFxyXG4gICAgZmFjZSAmJlxyXG4gICAgICB0YWcoXCJGYWNlXCIsIFtcclxuICAgICAgICBgJHtmYWNlLm5hbWV9KCR7YXJnUmFuZ2UoZmFjZS5pbmRleCwgeyBmcm9tOiAwLCB0bzogMTUgfSl9KWAsXHJcbiAgICAgIF0pLFxyXG4gICAgbmFtZSAmJiB0YWcoXCJOYW1lXCIsIFtuYW1lXSksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd0Nob2ljZXMgPSAoXHJcbiAgY2FzZXM6IHtcclxuICAgIG5hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgICB0aGVuOiBzdHJpbmc7XHJcbiAgfVtdLFxyXG4gIHtcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBwb3NpdGlvbixcclxuICAgIGluaXQsXHJcbiAgICBjYW5jZWwsXHJcbiAgfToge1xyXG4gICAgYmFja2dyb3VuZD86IGtleW9mIHR5cGVvZiBXSU5ET1dfQkFDS0dST1VORDtcclxuICAgIHBvc2l0aW9uPzoga2V5b2YgdHlwZW9mIFdJTkRPV19QT1NJVElPTl9IT1JJWk9OVEFMO1xyXG4gICAgaW5pdD86IGtleW9mIHR5cGVvZiBDSE9JQ0VTX0lOSVQgfCBudW1iZXI7XHJcbiAgICBjYW5jZWw/OiBrZXlvZiB0eXBlb2YgQ0hPSUNFU19DQU5DRUwgfCBudW1iZXI7XHJcbiAgfVxyXG4pID0+IHtcclxuICBpZiAoY2FzZXMuZmlsdGVyKChjYXNlSXRlbSkgPT4gY2FzZUl0ZW0ubmFtZSA9PT0gbnVsbCkubGVuZ3RoID49IDIpXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCLjgq3jg6Pjg7Pjgrvjg6vmibHjgYTjgajjgarjgosgbmFtZT1udWxsIOOBr+ikh+aVsOioreWumuOBp+OBjeOBvuOBm+OCk1wiKTtcclxuICByZXR1cm4gam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgdGFnKFwiU2hvd0Nob2ljZXNcIiwgW1xyXG4gICAgICBiYWNrZ3JvdW5kICYmIGFyZ1ByZXNldChiYWNrZ3JvdW5kLCBXSU5ET1dfQkFDS0dST1VORCksXHJcbiAgICAgIHBvc2l0aW9uICYmIGFyZ1ByZXNldChwb3NpdGlvbiwgV0lORE9XX1BPU0lUSU9OX0hPUklaT05UQUwpLFxyXG4gICAgICBpbml0ICYmIGFyZ0Nob2ljZXMoaW5pdCwgQ0hPSUNFU19JTklUKSxcclxuICAgICAgY2FuY2VsICYmIGFyZ0Nob2ljZXMoY2FuY2VsLCBDSE9JQ0VTX0NBTkNFTCksXHJcbiAgICBdKSxcclxuICAgIGpvaW5Ta2lwKFxyXG4gICAgICBcIlxcblwiLFxyXG4gICAgICBjYXNlcy5tYXAoKHsgbmFtZSwgdGhlbiB9KSA9PlxyXG4gICAgICAgIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgICAgICAgIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgICAgICAgICAgbmFtZSA/IHRhZyhcIldoZW5cIiwgW25hbWVdKSA6IHRhZyhcIldoZW5DYW5jZWxcIiksXHJcbiAgICAgICAgICAgIGpvaW5Ta2lwKFwiXFxuXCIsIFt0aGVuXSksXHJcbiAgICAgICAgICBdKSxcclxuICAgICAgICBdKVxyXG4gICAgICApXHJcbiAgICApLFxyXG4gICAgdGFnKFwiRW5kXCIpLFxyXG4gIF0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0TnVtYmVyID0gKHZhcmlhYmxlSWQ6IG51bWJlciwgZGlnaXQ6IG51bWJlcikgPT5cclxuICB0YWcoXCJJbnB1dE51bWJlclwiLCBbYXJnSWQodmFyaWFibGVJZCksIGFyZ1JhbmdlKGRpZ2l0LCB7IGZyb206IDEsIHRvOiA4IH0pXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0SXRlbSA9IChcclxuICB2YXJpYWJsZUlkOiBudW1iZXIsXHJcbiAgaXRlbVR5cGU6IGtleW9mIHR5cGVvZiBJVEVNX1RZUEVcclxuKSA9PiB0YWcoXCJTZWxlY3RJdGVtXCIsIFthcmdJZCh2YXJpYWJsZUlkKSwgYXJnUHJlc2V0KGl0ZW1UeXBlLCBJVEVNX1RZUEUpXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsaW5nVGV4dCA9IChcclxuICB0ZXh0OiBzdHJpbmcsXHJcbiAgeyBzcGVlZCA9IDIsIG5vU2tpcCB9OiB7IHNwZWVkPzogbnVtYmVyOyBub1NraXA/OiBib29sZWFuIH1cclxuKSA9PiB0YWcoXCJTY3JvbGxpbmdUZXh0XCIsIFtzcGVlZCwgbm9Ta2lwXSwgdGV4dCk7XHJcbiIsImltcG9ydCB7XHJcbiAgQkxFTkRfTU9ERSxcclxuICBDSEFSQUNURVIsXHJcbiAgQ0hBUkFDVEVSX0ZSRVEsXHJcbiAgQ0hBUkFDVEVSX1NQRUVELFxyXG4gIERJUkVDVElPTixcclxuICBESVJFQ1RJT05fQ0FSLFxyXG4gIERJUkVDVElPTl9NRVRIT0QsXHJcbiAgRElSRUNUSU9OX1JFVEFJTixcclxuICBESVJFQ1RJT05fUk9VVEU4LFxyXG4gIERJUkVDVElPTl9UVVJOX01FVEhPRCxcclxuICBFVkVOVCxcclxuICBGQURFLFxyXG4gIFZFSElDTEUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBNYXBQb3NpdGlvbiwgRGlyZWN0T3JWYXJpYWJsZXMsIFNvdW5kLCBTd2l0Y2hJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnSWQsXHJcbiAgYXJnSW50LFxyXG4gIGFyZ01hcFBvc2l0aW9uLFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdTd2l0Y2hJZCxcclxuICBhcmdzU291bmQsXHJcbiAgam9pblNraXAsXHJcbiAgdGFnLFxyXG4gIHR5cGVDYXNlLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuY29uc3QgYXJnSWRPclByZXNldCA9IDxQIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4oXHJcbiAgdmFsdWU6IGtleW9mIFAgfCBudW1iZXIsXHJcbiAgcHJlc2V0OiBQXHJcbikgPT5cclxuICB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgPyBhcmdJZCh2YWx1ZSkgOiBhcmdQcmVzZXQodmFsdWUgYXMgc3RyaW5nLCBwcmVzZXQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYW5zZmVyUGxheWVyID0gKFxyXG4gIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzLFxyXG4gIHBvc2l0aW9uOiBNYXBQb3NpdGlvbixcclxuICBkaXJlY3Rpb246IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fUkVUQUlOLFxyXG4gIGZhZGU6IGtleW9mIHR5cGVvZiBGQURFXHJcbikgPT5cclxuICB0YWcoXCJUcmFuc2ZlclBsYXllclwiLCBbXHJcbiAgICBhcmdNYXBQb3NpdGlvbihwb3NpdGlvbiwgbW9kZSksXHJcbiAgICBhcmdQcmVzZXQoZGlyZWN0aW9uLCBESVJFQ1RJT05fUkVUQUlOKSxcclxuICAgIGFyZ1ByZXNldChmYWRlLCBGQURFKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRWZWhpY2xlTG9jYXRpb24gPSAoXHJcbiAgbW9kZTogRGlyZWN0T3JWYXJpYWJsZXMsXHJcbiAgdmVoaWNsZToga2V5b2YgdHlwZW9mIFZFSElDTEUsXHJcbiAgcG9zaXRpb246IE1hcFBvc2l0aW9uXHJcbikgPT5cclxuICB0YWcoXCJTZXRWZWhpY2xlTG9jYXRpb25cIiwgW1xyXG4gICAgYXJnUHJlc2V0KHZlaGljbGUsIFZFSElDTEUpLFxyXG4gICAgYXJnTWFwUG9zaXRpb24ocG9zaXRpb24sIG1vZGUpLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldEV2ZW50TG9jYXRpb24gPSAoXHJcbiAgbW9kZTogRGlyZWN0T3JWYXJpYWJsZXMgfCBcIkVYQ0hBTkdFXCIsXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBFVkVOVCB8IG51bWJlcixcclxuICBwb3NpdGlvbjogTWFwUG9zaXRpb24gfCBrZXlvZiB0eXBlb2YgRVZFTlQgfCBudW1iZXIsXHJcbiAgZGlyZWN0aW9uOiBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX1JFVEFJTlxyXG4pID0+XHJcbiAgdGFnKFwiU2V0RXZlbnRMb2NhdGlvblwiLCBbXHJcbiAgICBhcmdJZE9yUHJlc2V0KGlkLCBFVkVOVCksXHJcbiAgICBtb2RlID09PSBcIkVYQ0hBTkdFXCJcclxuICAgICAgPyB0eXBlQ2FzZShwb3NpdGlvbiwge1xyXG4gICAgICAgICAgc3RyaW5nOiAoeCkgPT4gYEV4Y2hhbmdlWyR7YXJnUHJlc2V0KHgsIEVWRU5UKX1dYCxcclxuICAgICAgICAgIG51bWJlcjogKHgpID0+IGBFeGNoYW5nZVske2FyZ0lkKHgpfV1gLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIDogdHlwZUNhc2UocG9zaXRpb24sIHtcclxuICAgICAgICAgIG1hcFBvc2l0aW9uOiAoeCkgPT4gYXJnTWFwUG9zaXRpb24oeCwgbW9kZSksXHJcbiAgICAgICAgfSksXHJcbiAgICBhcmdQcmVzZXQoZGlyZWN0aW9uLCBESVJFQ1RJT05fUkVUQUlOKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTY3JvbGxNYXAgPSAoXHJcbiAgZGlyZWN0aW9uOiBrZXlvZiB0eXBlb2YgRElSRUNUSU9OLFxyXG4gIHN0ZXA6IG51bWJlcixcclxuICBzcGVlZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUl9TUEVFRCxcclxuICB3YWl0PzogYm9vbGVhblxyXG4pID0+XHJcbiAgdGFnKFwiU2V0VmVoaWNsZUxvY2F0aW9uXCIsIFtcclxuICAgIGFyZ1ByZXNldChkaXJlY3Rpb24sIERJUkVDVElPTiksXHJcbiAgICBhcmdJbnQoc3RlcCksXHJcbiAgICBhcmdQcmVzZXQoc3BlZWQsIENIQVJBQ1RFUl9TUEVFRCksXHJcbiAgICB3YWl0LFxyXG4gIF0pO1xyXG5cclxudHlwZSBSb3V0ZUNvZGUgPSB7IG5hbWU6IHN0cmluZzsgYXJnczogKG51bWJlciB8IHN0cmluZylbXSB9O1xyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gIGp1bXA6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gUm91dGVDb2RlO1xyXG4gIHdhaXQ6ICh2OiBudW1iZXIpID0+IFJvdXRlQ29kZTtcclxuICBjaGFuZ2VTd2l0Y2g6IChzd2l0Y2hJZDogbnVtYmVyLCB0bzogYm9vbGVhbikgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZVNwZWVkOiAoc3BlZWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVJfU1BFRUQpID0+IFJvdXRlQ29kZTtcclxuICBjaGFuZ2VGcmVxOiAoZnJlcToga2V5b2YgdHlwZW9mIENIQVJBQ1RFUl9GUkVRKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlSW1hZ2U6IChuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IFJvdXRlQ29kZTtcclxuICBjaGFuZ2VPcGFjaXR5OiAodjogbnVtYmVyKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlQmxlbmRNb2RlOiAodjoga2V5b2YgdHlwZW9mIEJMRU5EX01PREUpID0+IFJvdXRlQ29kZTtcclxuICBwbGF5U2U6IChzb3VuZDogU291bmQpID0+IFJvdXRlQ29kZTtcclxuICBzY3JpcHQ6IChjb2RlOiBzdHJpbmcpID0+IFJvdXRlQ29kZTtcclxuICAvL1xyXG4gIG1vdmU6IChcclxuICAgIGRpcjoga2V5b2YgdHlwZW9mIERJUkVDVElPTl9ST1VURTggfCBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX01FVEhPRFxyXG4gICkgPT4gUm91dGVDb2RlO1xyXG4gIHR1cm46IChcclxuICAgIGRpcjpcclxuICAgICAgfCBrZXlvZiB0eXBlb2YgRElSRUNUSU9OXHJcbiAgICAgIHwga2V5b2YgdHlwZW9mIERJUkVDVElPTl9NRVRIT0RcclxuICAgICAgfCBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX1RVUk5fTUVUSE9EXHJcbiAgKSA9PiBSb3V0ZUNvZGU7XHJcbiAgc3RlcDogKGRpcjoga2V5b2YgdHlwZW9mIERJUkVDVElPTl9DQVIpID0+IFJvdXRlQ29kZTtcclxuICAvL1xyXG4gIGNoYW5nZVdhbGtBbmltYXRpb246IChhY3RpdmU6IGJvb2xlYW4pID0+IFJvdXRlQ29kZTtcclxuICBjaGFuZ2VTdGVwQW5pbWF0aW9uOiAoYWN0aXZlOiBib29sZWFuKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlRGlyZWN0aW9uRml4OiAoYWN0aXZlOiBib29sZWFuKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlTm9DbGlwOiAoYWN0aXZlOiBib29sZWFuKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlVHJhbnNwYXJlbnQ6IChhY3RpdmU6IGJvb2xlYW4pID0+IFJvdXRlQ29kZTtcclxufVxyXG5leHBvcnQgY29uc3QgU2V0TW92ZW1lbnRSb3V0ZSA9IChcclxuICBpZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcixcclxuICByb3V0ZXM6IChyb3V0ZTogUm91dGUpID0+IFJvdXRlQ29kZVtdLFxyXG4gIHsgcmVwZWF0ID0gZmFsc2UsIHNraXAgPSBmYWxzZSwgd2FpdCA9IHRydWUgfSA9IHt9XHJcbikgPT5cclxuICBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICB0YWcoXCJTZXRNb3ZlbWVudFJvdXRlXCIsIFthcmdJZE9yUHJlc2V0KGlkLCBDSEFSQUNURVIpLCByZXBlYXQsIHNraXAsIHdhaXRdKSxcclxuICAgIC4uLnJvdXRlcyh7XHJcbiAgICAgIGp1bXA6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IFwiSnVtcFwiLCBhcmdzOiBbYXJnSW50KHgpLCBhcmdJbnQoeSldIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhaXQ6ICh2OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBcIk1jV2FpdFwiLCBhcmdzOiBbYXJnSW50KHYpXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VTd2l0Y2g6IChzd2l0Y2hJZDogbnVtYmVyLCB0bzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBgU3dpdGNoJHt0byA/IFwiT25cIiA6IFwiT2ZmXCJ9YCxcclxuICAgICAgICAgIGFyZ3M6IFthcmdJZChzd2l0Y2hJZCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVNwZWVkOiAoc3BlZWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVJfU1BFRUQpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogXCJDaGFuZ2VTcGVlZFwiLFxyXG4gICAgICAgICAgYXJnczogW2FyZ1ByZXNldChzcGVlZCwgQ0hBUkFDVEVSX1NQRUVEKV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlRnJlcTogKGZyZXE6IGtleW9mIHR5cGVvZiBDSEFSQUNURVJfRlJFUSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNoYW5nZUZyZXF1ZW5jeVwiLFxyXG4gICAgICAgICAgYXJnczogW2FyZ1ByZXNldChmcmVxLCBDSEFSQUNURVJfRlJFUSldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZUltYWdlOiAobmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2hhbmdlSW1hZ2VcIixcclxuICAgICAgICAgIGFyZ3M6IFtuYW1lLCBhcmdSYW5nZShpbmRleCwgeyBmcm9tOiAwLCB0bzogNyB9KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlT3BhY2l0eTogKHY6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNoYW5nZU9wYWNpdHlcIixcclxuICAgICAgICAgIGFyZ3M6IFthcmdSYW5nZSh2LCB7IGZyb206IDAsIHRvOiAyNTUgfSldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZUJsZW5kTW9kZTogKHY6IGtleW9mIHR5cGVvZiBCTEVORF9NT0RFKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJDaGFuZ2VCbGVuZE1vZGVcIiwgYXJnczogW2FyZ1ByZXNldCh2LCBCTEVORF9NT0RFKV0gfTtcclxuICAgICAgfSxcclxuICAgICAgcGxheVNlOiAoc291bmQ6IFNvdW5kKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWNQbGF5U2VcIixcclxuICAgICAgICAgIGFyZ3M6IFthcmdzU291bmQoc291bmQpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICBzY3JpcHQ6IChjb2RlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBcIk1jU2NyaXB0XCIsIGFyZ3M6IFtjb2RlXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICAvL1xyXG4gICAgICBtb3ZlOiAoXHJcbiAgICAgICAgZGlyOiBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX1JPVVRFOCB8IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fTUVUSE9EXHJcbiAgICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByZXNldCA9IHsgLi4uRElSRUNUSU9OX1JPVVRFOCwgLi4uRElSRUNUSU9OX01FVEhPRCB9O1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGBNb3ZlJHthcmdQcmVzZXQoZGlyLCBwcmVzZXQpfWAsIGFyZ3M6IFtdIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIHR1cm46IChcclxuICAgICAgICBkaXI6XHJcbiAgICAgICAgICB8IGtleW9mIHR5cGVvZiBESVJFQ1RJT05cclxuICAgICAgICAgIHwga2V5b2YgdHlwZW9mIERJUkVDVElPTl9NRVRIT0RcclxuICAgICAgICAgIHwga2V5b2YgdHlwZW9mIERJUkVDVElPTl9UVVJOX01FVEhPRFxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBwcmVzZXQgPSB7XHJcbiAgICAgICAgICAuLi5ESVJFQ1RJT04sXHJcbiAgICAgICAgICAuLi5ESVJFQ1RJT05fTUVUSE9ELFxyXG4gICAgICAgICAgLi4uRElSRUNUSU9OX1RVUk5fTUVUSE9ELFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogYFR1cm4ke2FyZ1ByZXNldChkaXIsIHByZXNldCl9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgICAgc3RlcDogKGRpcjoga2V5b2YgdHlwZW9mIERJUkVDVElPTl9DQVIpID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgT25lU3RlcCR7YXJnUHJlc2V0KGRpciwgRElSRUNUSU9OX0NBUil9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgICAgLy9cclxuICAgICAgY2hhbmdlV2Fsa0FuaW1hdGlvbjogKGFjdGl2ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGBXYWxraW5nQW5pbWF0aW9uJHthY3RpdmUgPyBcIk9uXCIgOiBcIk9mZlwifWAsIGFyZ3M6IFtdIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZVN0ZXBBbmltYXRpb246IChhY3RpdmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgU3RlcHBpbmdBbmltYXRpb24ke2FjdGl2ZSA/IFwiT25cIiA6IFwiT2ZmXCJ9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlRGlyZWN0aW9uRml4OiAoYWN0aXZlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogYERpcmVjdGlvbkZpeCR7YWN0aXZlID8gXCJPblwiIDogXCJPZmZcIn1gLCBhcmdzOiBbXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VOb0NsaXA6IChhY3RpdmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgVGhyb3VnaCR7YWN0aXZlID8gXCJPblwiIDogXCJPZmZcIn1gLCBhcmdzOiBbXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VUcmFuc3BhcmVudDogKGFjdGl2ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGBUcmFuc3BhcmVudCR7YWN0aXZlID8gXCJPblwiIDogXCJPZmZcIn1gLCBhcmdzOiBbXSB9O1xyXG4gICAgICB9LFxyXG4gICAgfSkubWFwKCh7IG5hbWUsIGFyZ3MgfSkgPT4gdGFnKG5hbWUsIGFyZ3MpKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHZXRPbk9mZlZlaGljbGUgPSAoKSA9PiB0YWcoXCJHZXRPbk9mZlZlaGljbGVcIik7XHJcbiIsImltcG9ydCB7IENyZWFzZU9wZXJhdG9yLCBWYXJpYWJsZUlkIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGFyZ0lkLCBhcmdJbnRPclZhcmlhYmxlSWQsIHRhZyB9IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xuXG5leHBvcnQgY29uc3QgQ2hhbmdlR29sZCA9IChvcDogQ3JlYXNlT3BlcmF0b3IsIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkKSA9PlxuICB0YWcoXCJDaGFuZ2VHb2xkXCIsIFtvcCwgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKV0pO1xuXG5leHBvcnQgY29uc3QgQ2hhbmdlSXRlbXMgPSAoXG4gIGlkOiBudW1iZXIsXG4gIG9wOiBDcmVhc2VPcGVyYXRvcixcbiAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWRcbikgPT4gdGFnKFwiQ2hhbmdlSXRlbXNcIiwgW2FyZ0lkKGlkKSwgb3AsIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSldKTtcblxuY29uc3QgY29tbW9uQ2hhbmdlID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBjb21wb25lbnQgPSAoXG4gICAgaWQ6IG51bWJlcixcbiAgICBvcDogQ3JlYXNlT3BlcmF0b3IsXG4gICAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWQsXG4gICAgaW5jbHVkZUVxdWlwbWVudD86IGJvb2xlYW5cbiAgKSA9PiB0YWcobmFtZSwgW2FyZ0lkKGlkKSwgb3AsIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSksIGluY2x1ZGVFcXVpcG1lbnRdKTtcbiAgcmV0dXJuIGNvbXBvbmVudDtcbn07XG5leHBvcnQgY29uc3QgQ2hhbmdlV2VhcG9ucyA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZVdlYXBvbnNcIik7XG5leHBvcnQgY29uc3QgQ2hhbmdlQXJtb3JzID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlQXJtb3JzXCIpO1xuXG5leHBvcnQgY29uc3QgQ2hhbmdlUGFydHlNZW1iZXIgPSAoXG4gIGlkOiBudW1iZXIsXG4gIG9wOiBDcmVhc2VPcGVyYXRvcixcbiAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWQsXG4gIGluaXRpYWxpemU/OiBib29sZWFuXG4pID0+IHRhZyhcIkNoYW5nZUl0ZW1zXCIsIFthcmdJZChpZCksIG9wLCBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLCBpbml0aWFsaXplXSk7XG4iLCJpbXBvcnQgeyBCTEVORF9NT0RFLCBDT0xPUl9UT05FLCBFQVNJTkcsIFBJQ1RVUkVfT1JJR0lOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDb2xvcjQsIERpcmVjdE9yVmFyaWFibGVzIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdDb2xvclRvbmUsXHJcbiAgYXJnSW50LFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdWYXJpYWJsZUlkLFxyXG4gIGpvaW5Ta2lwLFxyXG4gIHRhZyxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ1BpY3R1cmVQb3NpdGlvbiA9IChwb3NpdGlvbjoge1xyXG4gIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzO1xyXG4gIG9yaWdpbjoga2V5b2YgdHlwZW9mIFBJQ1RVUkVfT1JJR0lOO1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn0pID0+IHtcclxuICBjb25zdCBwYXJzZSA9XHJcbiAgICBwb3NpdGlvbi5tb2RlID09PSBcIkRJUkVDVFwiXHJcbiAgICAgID8gYXJnSW50XHJcbiAgICAgIDogKHZhcmlhYmxlSWQ6IG51bWJlcikgPT4gYXJnVmFyaWFibGVJZCh7IHZhcmlhYmxlSWQgfSk7XHJcbiAgcmV0dXJuIGBQb3NpdGlvblske2FyZ1ByZXNldChwb3NpdGlvbi5vcmlnaW4sIFBJQ1RVUkVfT1JJR0lOKX1dWyR7cGFyc2UoXHJcbiAgICBwb3NpdGlvbi54XHJcbiAgKX1dWyR7cGFyc2UocG9zaXRpb24ueSl9XWA7XHJcbn07XHJcbmNvbnN0IGFyZ1BpY3R1cmVTY2FsZSA9IChzaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+XHJcbiAgYFNjYWxlWyR7YXJnSW50KHNpemUud2lkdGgpfV1bJHthcmdJbnQoc2l6ZS5oZWlnaHQpfV1gO1xyXG5jb25zdCBhcmdQaWN0dXJlQmxlbmQgPSAoYmxlbmQ6IHtcclxuICBvcGFjaXR5OiBudW1iZXI7XHJcbiAgbW9kZToga2V5b2YgdHlwZW9mIEJMRU5EX01PREU7XHJcbn0pID0+XHJcbiAgYEJsZW5kWyR7YXJnUmFuZ2UoYmxlbmQub3BhY2l0eSwgeyBmcm9tOiAwLCB0bzogMjU1IH0pfV1bJHthcmdQcmVzZXQoXHJcbiAgICBibGVuZC5tb2RlLFxyXG4gICAgQkxFTkRfTU9ERVxyXG4gICl9XWA7XHJcbmNvbnN0IGFyZ1BpY3R1cmVEdXJhdGlvbiA9IChkdXJhdGlvbjogeyB0aW1lOiBudW1iZXI7IHdhaXQ6IGJvb2xlYW4gfSkgPT5cclxuICBgRHVyYXRpb25bJHthcmdJbnQoZHVyYXRpb24udGltZSl9XVske2R1cmF0aW9uLndhaXQgPyBcIldhaXRcIiA6IFwiXCJ9XWA7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvd1BpY3R1cmUgPSAoXHJcbiAgaWQ6IG51bWJlcixcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAge1xyXG4gICAgcG9zaXRpb24sXHJcbiAgICBzY2FsZSxcclxuICAgIGJsZW5kLFxyXG4gIH06IHtcclxuICAgIHBvc2l0aW9uPzoge1xyXG4gICAgICBtb2RlOiBEaXJlY3RPclZhcmlhYmxlcztcclxuICAgICAgb3JpZ2luOiBrZXlvZiB0eXBlb2YgUElDVFVSRV9PUklHSU47XHJcbiAgICAgIHg6IG51bWJlcjtcclxuICAgICAgeTogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIHNjYWxlPzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xyXG4gICAgYmxlbmQ/OiB7IG1vZGU6IGtleW9mIHR5cGVvZiBCTEVORF9NT0RFOyBvcGFjaXR5OiBudW1iZXIgfTtcclxuICB9XHJcbikgPT5cclxuICB0YWcoXCJTaG93UGljdHVyZVwiLCBbXHJcbiAgICBhcmdSYW5nZShpZCwgeyBmcm9tOiAxLCB0bzogMTAwIH0pLFxyXG4gICAgbmFtZSxcclxuICAgIGpvaW5Ta2lwKG51bGwsIFtcclxuICAgICAgcG9zaXRpb24gJiYgYXJnUGljdHVyZVBvc2l0aW9uKHBvc2l0aW9uKSxcclxuICAgICAgc2NhbGUgJiYgYXJnUGljdHVyZVNjYWxlKHNjYWxlKSxcclxuICAgICAgYmxlbmQgJiYgYXJnUGljdHVyZUJsZW5kKGJsZW5kKSxcclxuICAgIF0pLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdmVQaWN0dXJlID0gKFxyXG4gIGlkOiBudW1iZXIsXHJcbiAge1xyXG4gICAgcG9zaXRpb24sXHJcbiAgICBzY2FsZSxcclxuICAgIGJsZW5kLFxyXG4gICAgZHVyYXRpb24sXHJcbiAgICBlYXNpbmcsXHJcbiAgfToge1xyXG4gICAgcG9zaXRpb24/OiB7XHJcbiAgICAgIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzO1xyXG4gICAgICBvcmlnaW46IGtleW9mIHR5cGVvZiBQSUNUVVJFX09SSUdJTjtcclxuICAgICAgeDogbnVtYmVyO1xyXG4gICAgICB5OiBudW1iZXI7XHJcbiAgICB9O1xyXG4gICAgc2NhbGU/OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH07XHJcbiAgICBibGVuZD86IHsgbW9kZToga2V5b2YgdHlwZW9mIEJMRU5EX01PREU7IG9wYWNpdHk6IG51bWJlciB9O1xyXG4gICAgZHVyYXRpb24/OiB7IHRpbWU6IG51bWJlcjsgd2FpdDogYm9vbGVhbiB9O1xyXG4gICAgZWFzaW5nPzoga2V5b2YgdHlwZW9mIEVBU0lORztcclxuICB9XHJcbikgPT5cclxuICB0YWcoXCJNb3ZlUGljdHVyZVwiLCBbXHJcbiAgICBhcmdSYW5nZShpZCwgeyBmcm9tOiAxLCB0bzogMTAwIH0pLFxyXG4gICAgam9pblNraXAobnVsbCwgW1xyXG4gICAgICBwb3NpdGlvbiAmJiBhcmdQaWN0dXJlUG9zaXRpb24ocG9zaXRpb24pLFxyXG4gICAgICBzY2FsZSAmJiBhcmdQaWN0dXJlU2NhbGUoc2NhbGUpLFxyXG4gICAgICBibGVuZCAmJiBhcmdQaWN0dXJlQmxlbmQoYmxlbmQpLFxyXG4gICAgICBkdXJhdGlvbiAmJiBhcmdQaWN0dXJlRHVyYXRpb24oZHVyYXRpb24pLFxyXG4gICAgICBlYXNpbmcgJiYgYXJnUHJlc2V0KGVhc2luZywgRUFTSU5HKSxcclxuICAgIF0pLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdGF0ZVBpY3R1cmUgPSAoaWQ6IG51bWJlciwgc3BlZWQ6IG51bWJlcikgPT5cclxuICB0YWcoXCJSb3RhdGVQaWN0dXJlXCIsIFtcclxuICAgIGFyZ1JhbmdlKGlkLCB7IGZyb206IDEsIHRvOiAxMDAgfSksXHJcbiAgICBhcmdSYW5nZShzcGVlZCwgeyBmcm9tOiAtOTAsIHRvOiA5MCB9KSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW50UGljdHVyZSA9IChcclxuICBpZDogbnVtYmVyLFxyXG4gIGNvbG9yPzoga2V5b2YgdHlwZW9mIENPTE9SX1RPTkUgfCBDb2xvcjQsXHJcbiAgdGltZT86IG51bWJlclxyXG4pID0+XHJcbiAgdGFnKFwiVGludFBpY3R1cmVcIiwgW1xyXG4gICAgYXJnUmFuZ2UoaWQsIHsgZnJvbTogMSwgdG86IDEwMCB9KSxcclxuICAgIGpvaW5Ta2lwKG51bGwsIFtjb2xvciAmJiBhcmdDb2xvclRvbmUoY29sb3IpLCB0aW1lXSksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgRXJhc2VQaWN0dXJlID0gKGlkOiBudW1iZXIpID0+XHJcbiAgdGFnKFwiRXJhc2VQaWN0dXJlXCIsIFthcmdSYW5nZShpZCwgeyBmcm9tOiAxLCB0bzogMTAwIH0pXSk7XHJcbiIsImltcG9ydCB7IENIQVJBQ1RFUiwgVElNRVJfTU9ERSwgVkFSSUFCTEVfT1BFUkFUT1IgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEZyb21UbywgU2VsZlN3aXRjaE5hbWUsIFN3aXRjaElkIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdFbmVteUluZGV4LFxyXG4gIGFyZ0Zyb21UbyxcclxuICBhcmdJZCxcclxuICBhcmdJbnQsXHJcbiAgYXJnU3dpdGNoSWQsXHJcbiAgY3JlYXRlUHJlc2V0QXJnLFxyXG4gIHRhZyxcclxuICB0eXBlQ2FzZSxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ0NoYXJhY3RlcklkV2l0aFByZXNldCA9IGNyZWF0ZVByZXNldEFyZyhDSEFSQUNURVIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN3aXRjaCA9IChpZDogU3dpdGNoSWQgfCBGcm9tVG8sIHRvQmU6IGJvb2xlYW4pID0+XHJcbiAgdGFnKFwiU3dpdGNoXCIsIFtcclxuICAgIHR5cGVDYXNlKGlkLCB7XHJcbiAgICAgIHN3aXRjaElkOiBhcmdTd2l0Y2hJZCxcclxuICAgICAgZnJvbVRvOiBhcmdGcm9tVG8sXHJcbiAgICB9KSxcclxuICAgIHRvQmUsXHJcbiAgXSk7XHJcblxyXG5pbnRlcmZhY2UgT3BlcmF0aW9ucyB7XHJcbiAgc2V0OiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbiAgYWRkOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbiAgc3ViOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbiAgbXVsOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbiAgZGl2OiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbiAgbW9kOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH07XHJcbn1cclxuaW50ZXJmYWNlIERhdGEge1xyXG4gIHZhcmlhYmxlOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIHJhbmRvbTogKHJhbmdlOiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9KSA9PiBzdHJpbmc7XHJcbiAgc2NyaXB0OiAoanM6IHN0cmluZykgPT4gc3RyaW5nO1xyXG4gIGdhbWU6IHtcclxuICAgIGl0ZW06IHtcclxuICAgICAgaXRlbUNvdW50OiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICB3ZWFwb25Db3VudDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgYXJtb3JDb3VudDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgIH07XHJcbiAgICBhY3Rvcjoge1xyXG4gICAgICBsZXZlbDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgZXhwOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBIUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgTVA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIG1heEhQOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBNYXhNUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgYXR0YWNrOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBkZWZlbnNlOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBtQXR0YWNrOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBtRGVmZW5zZTogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgYWdpbGl0eTogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbHVjazogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgVFA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgZW5lbXk6IHtcclxuICAgICAgSFA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIE1QOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBtYXhIUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgTWF4TVA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGF0dGFjazogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgZGVmZW5zZTogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbUF0dGFjazogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbURlZmVuc2U6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGFnaWxpdHk6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGx1Y2s6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIFRQOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGNoYXJhY3Rlcjoge1xyXG4gICAgICBtYXBYOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbWFwWTogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGRpcmVjdGlvbjogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIHNjcmVlblg6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBzY3JlZW5ZOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+IHN0cmluZztcclxuICAgIH07XHJcbiAgICBsYXN0OiB7XHJcbiAgICAgIHVzZWRTa2lsbElkOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHVzZWRJdGVtSWQ6ICgpID0+IHN0cmluZztcclxuICAgICAgYWN0aW9uQWN0b3JJZDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBhY3Rpb25FbmVteUluZGV4OiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHRhcmdldEFjdG9ySWQ6ICgpID0+IHN0cmluZztcclxuICAgICAgdGFyZ2V0RW5lbXlJbmRleDogKCkgPT4gc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGV0Yzoge1xyXG4gICAgICBtZW1iZXJBY3RvcklkOiAoaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBtZW1iZXJDb3VudDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBnb2xkOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHN0ZXBzOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHBsYXlUaW1lOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHRpbWVyOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHNhdmVDb3VudDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBiYXR0bGVDb3VudDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICB3aW5Db3VudDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBlc2NhcGVDb3VudDogKCkgPT4gc3RyaW5nO1xyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbmV4cG9ydCBjb25zdCBWYXJpYWJsZSA9IChcclxuICBpZDogbnVtYmVyIHwgRnJvbVRvLFxyXG4gIGNhbGM6IChvcDogT3BlcmF0aW9ucywgZGF0YTogRGF0YSkgPT4geyBvcDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIH1bXVxyXG4pID0+IHtcclxuICBjb25zdCBsaXN0ID0gY2FsYyhcclxuICAgIHtcclxuICAgICAgc2V0OiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gKHtcclxuICAgICAgICBvcDogXCJTRVRcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBhZGQ6ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIG9wOiBcIkFERFwiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIHN1YjogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgb3A6IFwiU1VCXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB9KSxcclxuICAgICAgbXVsOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gKHtcclxuICAgICAgICBvcDogXCJNVUxcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBkaXY6ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIG9wOiBcIkRJVlwiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIG1vZDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgb3A6IFwiTU9EXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlOiAoaWQ6IG51bWJlcikgPT4gYFZbJHthcmdJZChpZCl9XWAsXHJcbiAgICAgIHJhbmRvbTogKHsgZnJvbSwgdG8gfTogRnJvbVRvKSA9PlxyXG4gICAgICAgIGBSYW5kb21bJHthcmdJbnQoZnJvbSl9XVske2FyZ0ludCh0byl9XWAsXHJcbiAgICAgIHNjcmlwdDogKGpzOiBzdHJpbmcpID0+IGBTY3JpcHRbJHtqc31dYCxcclxuICAgICAgZ2FtZToge1xyXG4gICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgIGl0ZW1Db3VudDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtJdGVtXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIHdlYXBvbkNvdW50OiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW1dlYXBvbl1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBhcm1vckNvdW50OiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FybW9yXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdG9yOiB7XHJcbiAgICAgICAgICBsZXZlbDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bTGV2ZWxdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgZXhwOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtFeHBdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgSFA6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW0hQXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIE1QOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtNUF1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBtYXhIUDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bTWF4SHBdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgTWF4TVA6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW01heE1QXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIGF0dGFjazogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bQXR0YWNrXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIGRlZmVuc2U6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW0RlZmVuc2VdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgbUF0dGFjazogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bTS5BdHRhY2tdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgbURlZmVuc2U6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW00uRGVmZW5zZV1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBhZ2lsaXR5OiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtBZ2lsaXR5XVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIGx1Y2s6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW0x1Y2tdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgVFA6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW1RQXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZW15OiB7XHJcbiAgICAgICAgICBIUDogKGluZGV4OiBudW1iZXIpID0+IGBHYW1lRGF0YVtFbmVteV1bSFBdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBNUDogKGluZGV4OiBudW1iZXIpID0+IGBHYW1lRGF0YVtFbmVteV1bTVBdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBtYXhIUDogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bTWF4SHBdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBNYXhNUDogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bTWF4TVBdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBhdHRhY2s6IChpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbRW5lbXldW0F0dGFja11bJHthcmdFbmVteUluZGV4KGluZGV4KX1dYCxcclxuICAgICAgICAgIGRlZmVuc2U6IChpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbRW5lbXldW0RlZmVuc2VdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBtQXR0YWNrOiAoaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0VuZW15XVtNLkF0dGFja11bJHthcmdFbmVteUluZGV4KGluZGV4KX1dYCxcclxuICAgICAgICAgIG1EZWZlbnNlOiAoaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0VuZW15XVtNLkRlZmVuc2VdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBhZ2lsaXR5OiAoaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0VuZW15XVtBZ2lsaXR5XVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgbHVjazogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bTHVja11bJHthcmdFbmVteUluZGV4KGluZGV4KX1dYCxcclxuICAgICAgICAgIFRQOiAoaW5kZXg6IG51bWJlcikgPT4gYEdhbWVEYXRhW0VuZW15XVtUUF1bJHthcmdFbmVteUluZGV4KGluZGV4KX1dYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYXJhY3Rlcjoge1xyXG4gICAgICAgICAgbWFwWDogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbQ2hhcmFjdGVyXVske2FyZ0NoYXJhY3RlcklkV2l0aFByZXNldChcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJJZFxyXG4gICAgICAgICAgICApfV1bTWFwWF1gLFxyXG4gICAgICAgICAgbWFwWTogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbQ2hhcmFjdGVyXVske2FyZ0NoYXJhY3RlcklkV2l0aFByZXNldChcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJJZFxyXG4gICAgICAgICAgICApfV1bTWFwWV1gLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtDaGFyYWN0ZXJdWyR7YXJnQ2hhcmFjdGVySWRXaXRoUHJlc2V0KFxyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcklkXHJcbiAgICAgICAgICAgICl9XVtEaXJlY3Rpb25dYCxcclxuICAgICAgICAgIHNjcmVlblg6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0NoYXJhY3Rlcl1bJHthcmdDaGFyYWN0ZXJJZFdpdGhQcmVzZXQoXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVySWRcclxuICAgICAgICAgICAgKX1dW1NjcmVlblhdYCxcclxuICAgICAgICAgIHNjcmVlblk6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0NoYXJhY3Rlcl1bJHthcmdDaGFyYWN0ZXJJZFdpdGhQcmVzZXQoXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVySWRcclxuICAgICAgICAgICAgKX1dW1NjcmVlblldYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3Q6IHtcclxuICAgICAgICAgIHVzZWRTa2lsbElkOiAoKSA9PiBgR2FtZURhdGFbTGFzdF1bVXNlZCBTa2lsbCBJRF1gLFxyXG4gICAgICAgICAgdXNlZEl0ZW1JZDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW1VzZWQgSXRlbSBJRF1gLFxyXG4gICAgICAgICAgYWN0aW9uQWN0b3JJZDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW0FjdG9yIElEIHRvIEFjdF1gLFxyXG4gICAgICAgICAgYWN0aW9uRW5lbXlJbmRleDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW0VuZW15IEluZGV4IHRvIEFjdF1gLFxyXG4gICAgICAgICAgdGFyZ2V0QWN0b3JJZDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW1RhcmdldCBBY3RvciBJRF1gLFxyXG4gICAgICAgICAgdGFyZ2V0RW5lbXlJbmRleDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW1RhcmdldCBFbmVteSBJbmRleF1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXRjOiB7XHJcbiAgICAgICAgICBtZW1iZXJBY3RvcklkOiAoaW5kZXg6IG51bWJlcikgPT4gYEdhbWVEYXRhW1BhcnR5XVske2FyZ0lkKGluZGV4KX1dYCxcclxuICAgICAgICAgIG1lbWJlckNvdW50OiAoKSA9PiBgR2FtZURhdGFbUGFydHlNZW1iZXJzXWAsXHJcbiAgICAgICAgICBnb2xkOiAoKSA9PiBgR2FtZURhdGFbR29sZF1gLFxyXG4gICAgICAgICAgc3RlcHM6ICgpID0+IGBHYW1lRGF0YVtTdGVwc11gLFxyXG4gICAgICAgICAgcGxheVRpbWU6ICgpID0+IGBHYW1lRGF0YVtQbGF5VGltZV1gLFxyXG4gICAgICAgICAgdGltZXI6ICgpID0+IGBHYW1lRGF0YVtUaW1lcl1gLFxyXG4gICAgICAgICAgc2F2ZUNvdW50OiAoKSA9PiBgR2FtZURhdGFbU2F2ZUNvdW50XWAsXHJcbiAgICAgICAgICBiYXR0bGVDb3VudDogKCkgPT4gYEdhbWVEYXRhW0JhdHRsZUNvdW50XWAsXHJcbiAgICAgICAgICB3aW5Db3VudDogKCkgPT4gYEdhbWVEYXRhW1dpbkNvdW50XWAsXHJcbiAgICAgICAgICBlc2NhcGVDb3VudDogKCkgPT4gYEdhbWVEYXRhW0VzY2FwZUNvdW50XWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiBsaXN0XHJcbiAgICAubWFwKCh7IG9wLCB2YWx1ZSB9KSA9PlxyXG4gICAgICB0YWcoVkFSSUFCTEVfT1BFUkFUT1Jbb3AgYXMga2V5b2YgdHlwZW9mIFZBUklBQkxFX09QRVJBVE9SXSwgW1xyXG4gICAgICAgIHR5cGVDYXNlKGlkLCB7XHJcbiAgICAgICAgICBmcm9tVG86IGFyZ0Zyb21UbyxcclxuICAgICAgICAgIG51bWJlcjogYXJnSWQsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgICAuam9pbihcIlxcblwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWxmU3dpdGNoID0gKGlkOiBTZWxmU3dpdGNoTmFtZSwgdG9CZTogYm9vbGVhbikgPT5cclxuICB0YWcoXCJTZWxmU3dpdGNoXCIsIFtpZCwgdG9CZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbWVyID0gKFxyXG4gIG1vZGU6IGtleW9mIHR5cGVvZiBUSU1FUl9NT0RFLFxyXG4gIHRpbWU6IHsgbWluOiBudW1iZXI7IHNlYzogbnVtYmVyIH0gfCBgJHtudW1iZXJ9OiR7bnVtYmVyfWBcclxuKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zdCBbaXNWYWxpZCwgbWluLCBzZWNdID0gdGltZS5tYXRjaCgvXihcXGR7MSx9KTooXFxkezEsfSkkLykgPz8gW107XHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICByZXR1cm4gdGFnKFwiVGltZXJcIiwgW1RJTUVSX01PREVbbW9kZV0sIG1pbiwgc2VjXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgXCLmloflrZfliJfjgafjgr/jgqTjg57jg7zoqK3lrprjgZnjgovloLTlkIjjga8gMDA6MDAg5b2i5byP44Gn5YWl5Yqb44GX44Gm44GP44Gg44GV44GEXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgeyBtaW4sIHNlYyB9ID0gdGltZTtcclxuICByZXR1cm4gdGFnKFwiVGltZXJcIiwgW1RJTUVSX01PREVbbW9kZV0sIG1pbiwgc2VjXSk7XHJcbn07XHJcbiIsImltcG9ydCB7IEJBVFRMRV9UUk9PUCwgU0hPUF9JVEVNIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBWYXJpYWJsZUlkIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdJZCxcclxuICBhcmdJbnQsXHJcbiAgYXJnUHJlc2V0LFxyXG4gIGFyZ1JhbmdlLFxyXG4gIGFyZ1ZhcmlhYmxlSWQsXHJcbiAgam9pblNraXAsXHJcbiAgdGFnLFxyXG4gIHR5cGVDYXNlLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhdHRsZVByb2Nlc3NpbmcgPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBCQVRUTEVfVFJPT1AgfCBWYXJpYWJsZUlkIHwgbnVtYmVyLFxyXG4gIHtcclxuICAgIGlmV2luLFxyXG4gICAgaWZFc2NhcGUsXHJcbiAgICBpZkxvc2UsXHJcbiAgfToge1xyXG4gICAgaWZXaW4/OiBzdHJpbmc7XHJcbiAgICBpZkVzY2FwZT86IHN0cmluZztcclxuICAgIGlmTG9zZT86IHN0cmluZztcclxuICB9XHJcbikgPT4ge1xyXG4gIHJldHVybiBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICB0YWcoXCJCYXR0bGVQcm9jZXNzaW5nXCIsIFtcclxuICAgICAgdHlwZUNhc2UoaWQsIHtcclxuICAgICAgICBzdHJpbmc6ICh4KSA9PiBhcmdQcmVzZXQoeCwgQkFUVExFX1RST09QKSxcclxuICAgICAgICB2YXJpYWJsZUlkOiBhcmdWYXJpYWJsZUlkLFxyXG4gICAgICAgIG51bWJlcjogYXJnSWQsXHJcbiAgICAgIH0pLFxyXG4gICAgXSksXHJcbiAgICBpZldpbiA/IGpvaW5Ta2lwKFwiXFxuXCIsIFt0YWcoXCJJZldpblwiKSwgaWZXaW5dKSA6IHVuZGVmaW5lZCxcclxuICAgIGlmRXNjYXBlID8gam9pblNraXAoXCJcXG5cIiwgW3RhZyhcIklmRXNjYXBlXCIpLCBpZkVzY2FwZV0pIDogdW5kZWZpbmVkLFxyXG4gICAgaWZMb3NlID8gam9pblNraXAoXCJcXG5cIiwgW3RhZyhcIklmTG9zZVwiKSwgaWZMb3NlXSkgOiB1bmRlZmluZWQsXHJcbiAgICB0YWcoXCJFbmRcIiksXHJcbiAgXSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2hvcFByb2Nlc3NpbmcgPSAoXHJcbiAgaXRlbXM6IHtcclxuICAgIHR5cGU6IGtleW9mIHR5cGVvZiBTSE9QX0lURU07XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgcHJpY2U6IG51bWJlcjtcclxuICB9W10sXHJcbiAgcHVyY2hhc2VPbmx5PzogYm9vbGVhblxyXG4pID0+XHJcbiAgam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgdGFnKFwiU2hvcFByb2Nlc3NpbmdcIiwgW3B1cmNoYXNlT25seV0pLFxyXG4gICAgLi4uaXRlbXMubWFwKCh7IHR5cGUsIGlkLCBwcmljZSB9KSA9PlxyXG4gICAgICB0YWcoXCJNZXJjaGFuZGlzZVwiLCBbYXJnUHJlc2V0KHR5cGUsIFNIT1BfSVRFTSksIGFyZ0lkKGlkKSwgYXJnSW50KHByaWNlKV0pXHJcbiAgICApLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hbWVJbnB1dFByb2Nlc3NpbmcgPSAoaWQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIpID0+XHJcbiAgdGFnKFwiTmFtZUlucHV0UHJvY2Vzc2luZ1wiLCBbYXJnSWQoaWQpLCBhcmdSYW5nZShsZW5ndGgsIHsgZnJvbTogMSwgdG86IDggfSldKTtcclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuTWVudVNjcmVlbiA9ICgpID0+IHRhZyhcIk9wZW5NZW51U2NyZWVuXCIpO1xyXG5leHBvcnQgY29uc3QgT3BlblNhdmVTY3JlZW4gPSAoKSA9PiB0YWcoXCJPcGVuU2F2ZVNjcmVlblwiKTtcclxuZXhwb3J0IGNvbnN0IEdhbWVPdmVyID0gKCkgPT4gdGFnKFwiR2FtZU92ZXJcIik7XHJcbmV4cG9ydCBjb25zdCBSZXR1cm5Ub1RpdGxlU2NyZWVuID0gKCkgPT4gdGFnKFwiUmV0dXJuVG9UaXRsZVNjcmVlblwiKTtcclxuIiwiaW1wb3J0IHsgQ09MT1JfVE9ORSwgV0VBVEhFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ29sb3I0IH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdDb2xvclRvbmUsXHJcbiAgYXJnSW50LFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdzQ29sb3IsXHJcbiAgam9pblNraXAsXHJcbiAgdGFnLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhZGVPdXQgPSAoKSA9PiB0YWcoXCJGYWRlT3V0XCIpO1xyXG5leHBvcnQgY29uc3QgRmFkZUluID0gKCkgPT4gdGFnKFwiRmFkZUluXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbnRTY3JlZW4gPSAoXHJcbiAgY29sb3I/OiBrZXlvZiB0eXBlb2YgQ09MT1JfVE9ORSB8IENvbG9yNCxcclxuICB0aW1lPzogbnVtYmVyXHJcbikgPT4gdGFnKFwiVGludFNjcmVlblwiLCBbam9pblNraXAobnVsbCwgW2NvbG9yICYmIGFyZ0NvbG9yVG9uZShjb2xvciksIHRpbWVdKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZsYXNoU2NyZWVuID0gKGNvbG9yOiBDb2xvcjQsIHRpbWU6IG51bWJlciwgd2FpdD86IGJvb2xlYW4pID0+XHJcbiAgdGFnKFwiRmxhc2hTY3JlZW5cIiwgW2FyZ3NDb2xvcihjb2xvciksIHRpbWUsIHdhaXRdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaGFrZVNjcmVlbiA9IChcclxuICB2ZWxvY2l0eTogbnVtYmVyLFxyXG4gIHNwZWVkOiBudW1iZXIsXHJcbiAgdGltZTogbnVtYmVyLFxyXG4gIHdhaXQ/OiBib29sZWFuXHJcbikgPT4gdGFnKFwiU2hha2VTY3JlZW5cIiwgW2FyZ0ludCh2ZWxvY2l0eSksIGFyZ0ludChzcGVlZCksIGFyZ0ludCh0aW1lKSwgd2FpdF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNldFdlYXRoZXJFZmZlY3QgPSAoXHJcbiAgd2VhdGhlcjoga2V5b2YgdHlwZW9mIFdFQVRIRVIsXHJcbiAgdmVsb2NpdHk6IG51bWJlcixcclxuICB0aW1lOiBudW1iZXIsXHJcbiAgd2FpdD86IGJvb2xlYW5cclxuKSA9PlxyXG4gIHRhZyhcIlNldFdlYXRoZXJFZmZlY3RcIiwgW1xyXG4gICAgYXJnUHJlc2V0KHdlYXRoZXIsIFdFQVRIRVIpLFxyXG4gICAgYXJnSW50KHZlbG9jaXR5KSxcclxuICAgIGFyZ0ludCh0aW1lKSxcclxuICAgIHdhaXQsXHJcbiAgXSk7XHJcbiIsImltcG9ydCB7IFZFSElDTEUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENvbG9yMywgU291bmQgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFyZ0lkLFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdzQ29sb3IsXHJcbiAgYXJnc1NvdW5kLFxyXG4gIHRhZyxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VWZWhpY2xlQmdtID0gKHZlaGljbGU6IGtleW9mIHR5cGVvZiBWRUhJQ0xFLCBzb3VuZDogU291bmQpID0+XHJcbiAgdGFnKFwiQ2hhbmdlVmVoaWNsZUJnbVwiLCBbYXJnUHJlc2V0KHZlaGljbGUsIFZFSElDTEUpLCBhcmdzU291bmQoc291bmQpXSk7XHJcblxyXG5jb25zdCBjb21tb25DaGFuZ2UgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKGFsbG93OiBib29sZWFuKSA9PiB0YWcobmFtZSwgW2FsbG93XSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVNhdmVBY2Nlc3MgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VTYXZlQWNjZXNzXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlTWVudUFjY2VzcyA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZU1lbnVBY2Nlc3NcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VFbmNvdW50ZXIgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VFbmNvdW50ZXJcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VGb3JtYXRpb25BY2Nlc3MgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VGb3JtYXRpb25BY2Nlc3NcIik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlV2luZG93Q29sb3IgPSAoY29sb3I6IENvbG9yMykgPT5cclxuICB0YWcoXCJDaGFuZ2VXaW5kb3dDb2xvclwiLCBbYXJnc0NvbG9yKGNvbG9yKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUFjdG9ySW1hZ2VzID0gKFxyXG4gIGlkOiBudW1iZXIsXHJcbiAgZmFjZTogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfSxcclxuICBjaGFyYWN0ZXI6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0sXHJcbiAgYmF0dGxlcjogc3RyaW5nXHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VBY3RvckltYWdlc1wiLCBbXHJcbiAgICBhcmdJZChpZCksXHJcbiAgICBmYWNlLm5hbWUsXHJcbiAgICBhcmdSYW5nZShmYWNlLmluZGV4LCB7IGZyb206IDAsIHRvOiAxNSB9KSxcclxuICAgIGNoYXJhY3Rlci5uYW1lLFxyXG4gICAgYXJnUmFuZ2UoY2hhcmFjdGVyLmluZGV4LCB7IGZyb206IDAsIHRvOiA3IH0pLFxyXG4gICAgYmF0dGxlcixcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VWZWhpY2xlSW1hZ2UgPSAoXHJcbiAgdmVoaWNsZToga2V5b2YgdHlwZW9mIFZFSElDTEUsXHJcbiAgaW1hZ2U6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH1cclxuKSA9PlxyXG4gIHRhZyhcIkNoYW5nZUFjdG9ySW1hZ2VzXCIsIFtcclxuICAgIGFyZ1ByZXNldCh2ZWhpY2xlLCBWRUhJQ0xFKSxcclxuICAgIGltYWdlLm5hbWUsXHJcbiAgICBhcmdSYW5nZShpbWFnZS5pbmRleCwgeyBmcm9tOiAwLCB0bzogNyB9KSxcclxuICBdKTtcclxuIiwiZXhwb3J0IHsgZXYgYXMgcGFyc2UgfSBmcm9tIFwiLi9wYXJzZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgYWN0b3IgZnJvbSBcIi4vZXZlbnRzL2FjdG9yXCI7XHJcbmltcG9ydCAqIGFzIGJhdHRsZSBmcm9tIFwiLi9ldmVudHMvYmF0dGxlXCI7XHJcbmltcG9ydCAqIGFzIGNoYXJhY3RlciBmcm9tIFwiLi9ldmVudHMvY2hhcmFjdGVyXCI7XHJcbmltcG9ydCAqIGFzIGZsb3cgZnJvbSBcIi4vZXZlbnRzL2Zsb3dcIjtcclxuaW1wb3J0ICogYXMgaW50ZXJwcmV0ZXIgZnJvbSBcIi4vZXZlbnRzL2ludGVycHJldGVyXCI7XHJcbmltcG9ydCAqIGFzIG1hcCBmcm9tIFwiLi9ldmVudHMvbWFwXCI7XHJcbmltcG9ydCAqIGFzIG1lZGlhIGZyb20gXCIuL2V2ZW50cy9tZWRpYVwiO1xyXG5pbXBvcnQgKiBhcyBtZXNzYWdlIGZyb20gXCIuL2V2ZW50cy9tZXNzYWdlXCI7XHJcbmltcG9ydCAqIGFzIG1vdmVtZW50IGZyb20gXCIuL2V2ZW50cy9tb3ZlbWVudFwiO1xyXG5pbXBvcnQgKiBhcyBwYXJ0eSBmcm9tIFwiLi9ldmVudHMvcGFydHlcIjtcclxuaW1wb3J0ICogYXMgcGljdHVyZSBmcm9tIFwiLi9ldmVudHMvcGljdHVyZVwiO1xyXG5pbXBvcnQgKiBhcyBwcm9ncmVzcyBmcm9tIFwiLi9ldmVudHMvcHJvZ3Jlc3NcIjtcclxuaW1wb3J0ICogYXMgc2NlbmUgZnJvbSBcIi4vZXZlbnRzL3NjZW5lXCI7XHJcbmltcG9ydCAqIGFzIHNjcmVlbiBmcm9tIFwiLi9ldmVudHMvc2NyZWVuXCI7XHJcbmltcG9ydCAqIGFzIHN5c3RlbSBmcm9tIFwiLi9ldmVudHMvc3lzdGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gIG1lc3NhZ2UsXHJcbiAgcHJvZ3Jlc3MsXHJcbiAgZmxvdyxcclxuICBwYXJ0eSxcclxuICBhY3RvcixcclxuICBtb3ZlbWVudCxcclxuICBjaGFyYWN0ZXIsXHJcbiAgcGljdHVyZSxcclxuICBzY3JlZW4sXHJcbiAgbWVkaWEsXHJcbiAgc2NlbmUsXHJcbiAgc3lzdGVtLFxyXG4gIG1hcCxcclxuICBiYXR0bGUsXHJcbiAgaW50ZXJwcmV0ZXIsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjb21tb25DaGFuZ2UiLCJpZCIsIm1pbiIsInNlYyIsImNoYXJhY3RlciJdLCJtYXBwaW5ncyI6Ijs7QUFBTyxNQUFNLEtBQUssSUFBSSxRQUFrQixJQUFJLEtBQUssSUFBSTtBQ0E5QyxNQUFNLG9CQUFvQjtBQUFBLEVBQy9CLFFBQVE7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLGFBQWE7QUFDZjtBQUNPLE1BQU0sNkJBQTZCO0FBQUEsRUFDeEMsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsT0FBTztBQUNUO0FBT08sTUFBTSxlQUFlO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUNWO0FBQ08sTUFBTSxpQkFBaUI7QUFBQSxFQUM1QixRQUFRO0FBQUEsRUFDUixVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQ1Y7QUFFTyxNQUFNLFlBQVk7QUFBQSxFQUN2QixTQUFTO0FBQUEsRUFDVCxLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixVQUFVO0FBQ1o7QUFFTyxNQUFNLG9CQUFvQjtBQUFBLEVBQy9CLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFBQSxFQUNMLEtBQUs7QUFDUDtBQUVPLE1BQU0sUUFBUTtBQUFBLEVBQ25CLFlBQVk7QUFDZDtBQUVPLE1BQU0sWUFBWTtBQUFBLEVBQ3ZCLFFBQVE7QUFBQSxFQUNSLEdBQUc7QUFDTDtBQUVPLE1BQU0sYUFBYTtBQUFBLEVBQ3hCLE9BQU87QUFBQSxFQUNQLEtBQUs7QUFDUDtBQUVPLE1BQU0sZUFBZTtBQUFBLEVBQzFCLEtBQUs7QUFDUDtBQUVPLE1BQU0sa0JBQWtCO0FBQUEsRUFDN0IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLEVBQ1YsV0FBVztBQUFBLEVBQ1gsU0FBUztBQUFBLEVBQ1QsTUFBTTtBQUNSO0FBTU8sTUFBTSxlQUFlO0FBQUEsRUFDMUIsY0FBYztBQUNoQjtBQUVPLE1BQU0sZ0JBQWdCO0FBQUEsRUFDM0IsYUFBYTtBQUFBLEVBQ2IsUUFBUTtBQUNWO0FBRU8sTUFBTSxZQUFZO0FBQUEsRUFDdkIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsSUFBSTtBQUNOO0FBQ08sTUFBTSxtQkFBbUI7QUFBQSxFQUM5QixRQUFRO0FBQUEsRUFDUixHQUFHO0FBQ0w7QUFDTyxNQUFNLG1CQUFtQjtBQUFBLEVBQzlCLEdBQUc7QUFBQSxFQUNILFdBQVc7QUFBQSxFQUNYLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFDWjtBQUNPLE1BQU0sbUJBQW1CO0FBQUEsRUFDOUIsUUFBUTtBQUFBLEVBQ1IsZUFBZTtBQUFBLEVBQ2YsYUFBYTtBQUNmO0FBQ08sTUFBTSx3QkFBd0I7QUFBQSxFQUNuQyxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixXQUFXO0FBQUEsRUFDWCxVQUFVO0FBQ1o7QUFDTyxNQUFNLGdCQUFnQjtBQUFBLEVBQzNCLE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVPLE1BQU0sT0FBTztBQUFBLEVBQ2xCLE9BQU87QUFBQSxFQUNQLE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVPLE1BQU0sVUFBVTtBQUFBLEVBQ3JCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFDWjtBQUVPLE1BQU0sa0JBQWtCO0FBQUEsRUFDN0IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUFBLEVBQ1QsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLEVBQ1QsU0FBUztBQUNYO0FBRU8sTUFBTSxpQkFBaUI7QUFBQSxFQUM1QixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxRQUFRO0FBQUEsRUFDUixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQ1g7QUFDTyxNQUFNLGFBQWE7QUFBQSxFQUN4QixRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxLQUFLO0FBQUEsRUFDTCxRQUFRO0FBQ1Y7QUFDTyxNQUFNLFVBQVU7QUFBQSxFQUNyQixhQUFhO0FBQUEsRUFDYixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxLQUFLO0FBQUEsRUFDTCxRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQ1Y7QUFFTyxNQUFNLGlCQUFpQjtBQUFBLEVBQzVCLFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFDVjtBQUVPLE1BQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxFQUNSLElBQUk7QUFBQSxFQUNKLEtBQUs7QUFBQSxFQUNMLFFBQVE7QUFDVjtBQUVPLE1BQU0sYUFBYTtBQUFBLEVBQ3hCLFFBQVE7QUFBQSxFQUNSLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFDVDtBQUVPLE1BQU0sVUFBVTtBQUFBLEVBQ3JCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLE1BQU07QUFDUjtBQUVPLE1BQU0sZUFBZTtBQUFBLEVBQzFCLFFBQVE7QUFDVjtBQUVPLE1BQU0sWUFBWTtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLE9BQU87QUFDVDtBQUVPLE1BQU0sV0FBVztBQUFBLEVBQ3RCLGFBQWE7QUFBQSxFQUNiLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxFQUNULFdBQVc7QUFDYjtBQy9NQSxNQUFNLFdBQVcsQ0FBQyxPQUFzQixRQUN0QyxJQUFJLEtBQUssU0FBUyxJQUFJO0FBQ2pCLE1BQU0sV0FBVyxDQUFDLE9BQXNCLFFBQzdDLElBQUksT0FBTyxDQUFDLE1BQU0sTUFBTSxNQUFTLEVBQUUsS0FBSyxTQUFTLElBQUk7QUFFaEQsTUFBTSxNQUFNLENBQ2pCLE1BQ0EsS0FDQSxpQkFDRztBQUNILFFBQU0sT0FBTyxTQUFTLE1BQU0sT0FBTyxDQUFFLENBQUE7QUFDckMsU0FBTyxTQUFTLE1BQU07QUFBQSxJQUNwQixTQUFTLEtBQUssSUFBSSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSTtBQUFBLElBQzdDLEdBQUksZUFBZSxDQUFDLGNBQWMsS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUEsRUFBQSxDQUNwRDtBQUNIO0FBRWEsTUFBQSxXQUFXLENBQ3RCLEdBQ0EsVUFXRztBQUNILFFBQU0sSUFBSSxNQUFNLElBQUksTUFBTSxlQUFlO0FBQ3JDLE1BQUEsT0FBTyxNQUFNLFlBQVksTUFBTTtBQUFlLFdBQUEsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUMvRCxNQUFBLE9BQU8sTUFBTSxZQUFZLE1BQU07QUFBZSxXQUFBLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDL0QsTUFBQSxPQUFPLE1BQU0sVUFBVTtBQUN6QixRQUFJLE1BQU07QUFBZSxhQUFBLE1BQU0sT0FBTyxHQUFHLENBQUM7QUFDdEMsUUFBQSxnQkFBZ0IsS0FBSyxNQUFNO0FBQW1CLGFBQUEsTUFBTSxXQUFXLEdBQUcsQ0FBQztBQUNuRSxRQUFBLGNBQWMsS0FBSyxNQUFNO0FBQWlCLGFBQUEsTUFBTSxTQUFTLEdBQUcsQ0FBQztBQUNqRSxRQUFJLFVBQVUsS0FBSyxRQUFRLEtBQUssTUFBTTtBQUFlLGFBQUEsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUN0RSxRQUFJLFFBQVEsS0FBSyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU07QUFDdEMsYUFBQSxNQUFNLFlBQVksR0FBRyxDQUFDO0FBRTdCLFFBQUEsVUFBVSxLQUNWLFlBQVksS0FDWixXQUFXLEtBQ1gsU0FBUyxLQUNULE1BQU07QUFFQyxhQUFBLE1BQU0sTUFBTSxHQUFHLENBQUM7QUFDekIsUUFBSSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNO0FBQ3JDLGFBQUEsTUFBTSxNQUFNLEdBQUcsQ0FBQztBQUFBLEVBQzNCO0FBQ0EsUUFBTSxFQUFFO0FBQ1Y7QUFFYSxNQUFBLFNBQVMsQ0FBQyxNQUFjO0FBQy9CLE1BQUEsSUFBSSxNQUFNLEdBQUc7QUFDVCxVQUFBLElBQUksTUFBTSxpQkFBaUI7QUFBQSxFQUNuQztBQUNPLFNBQUE7QUFDVDtBQUNhLE1BQUEsV0FBVyxDQUFDLEdBQVcsVUFBa0I7QUFDcEQsU0FBTyxDQUFDO0FBQ1IsTUFBSSxFQUFFLE1BQU0sUUFBUSxLQUFLLEtBQUssTUFBTSxLQUFLO0FBQ3ZDLFVBQU0sSUFBSTtBQUFBLE1BQ1IsTUFBTSxNQUFNLElBQUksTUFBTSxNQUFNLEVBQUU7QUFBQSxJQUFBO0FBQUEsRUFFbEM7QUFDTyxTQUFBO0FBQ1Q7QUFDYSxNQUFBLFFBQVEsQ0FBQyxNQUFjLFNBQVMsR0FBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLFNBQUEsQ0FBVTtBQUM1RCxNQUFBLGdCQUFnQixDQUFDLE1BQWMsU0FBUyxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBQSxDQUFHO0FBQ25FLE1BQU0sWUFBWSxDQUN2QixHQUNBLFdBQ0csT0FBTyxDQUFDO0FBQ04sTUFBTSxjQUFjLENBQUMsVUFBb0IsTUFBTSxNQUFNLFFBQVE7QUFDN0QsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFzQixLQUFLLE1BQU0sVUFBVTtBQUM1RCxNQUFBLFlBQVksQ0FBQyxVQUFrQixHQUFHLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRTtBQUM5RCxNQUFNLFlBQVksQ0FBQyxVQUN4QixhQUFhLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUN6QywrQkFBa0IsS0FBSSxJQUFLLE1BQWlCLENBQUMsTUFBTSxFQUN0RDtBQUNLLE1BQU0sWUFBWSxDQUFDLFVBQ3hCLFNBQVMsTUFBTSxDQUFDLE1BQU0sUUFBUSxRQUFRLE1BQU0sUUFBUSxNQUFNLE9BQU8sTUFBTSxHQUFHLENBQUM7QUFDdEUsTUFBTSxpQkFBaUIsQ0FBQyxPQUFvQixTQUNqRCxHQUFHLFNBQVMsV0FBVyxXQUFXLGVBQWUsSUFBSSxNQUFNLEVBQUUsS0FBSyxNQUFNLENBQUMsS0FDdkUsTUFBTSxDQUNSO0FBQ1csTUFBQSxlQUFlLENBQzFCLFVBRUEsT0FBTyxVQUFVLFdBQ2IsYUFBYSxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsTUFDeEQsVUFBVSxPQUFpQixVQUFVO0FBRXBDLE1BQU0scUJBQXFCLENBQUMsTUFDakMsU0FBUyxHQUFHO0FBQUEsRUFDVixZQUFZO0FBQUEsRUFDWixRQUFRLENBQUMsTUFBTTtBQUNqQixDQUFDO0FBRVUsTUFBQSxrQkFBa0IsQ0FDN0IsV0FDRztBQUNJLFNBQUEsQ0FBQyxNQUNOLE9BQU8sTUFBTSxXQUFXLFVBQVUsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFXO0FBQ3BFO0FBQ08sTUFBTSxnQ0FDWCxDQUFtQyxRQUFXLFVBQzlDLENBQUMsTUFDQyxTQUFTLEdBQUc7QUFBQSxFQUNWLFFBQVEsQ0FBQyxNQUFNLFVBQVUsR0FBRyxNQUFNO0FBQUEsRUFDbEMsWUFBWTtBQUFBLEVBQ1osUUFBUSxDQUFDLE1BQU8sUUFBUSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQztBQUN0RCxDQUFDO0FDdkhMLE1BQU0sdUJBQXVCLDhCQUE4QixZQUFZO0FBRWhFLE1BQU0sV0FBVyxDQUN0QixJQUNBLElBQ0EsT0FDQSxrQkFFQSxJQUFJLFlBQVk7QUFBQSxFQUNkLHFCQUFxQixFQUFFO0FBQUEsRUFDdkI7QUFBQSxFQUNBLG1CQUFtQixLQUFLO0FBQUEsRUFDeEI7QUFDRixDQUFDO0FBRUgsTUFBTUEsaUJBQWUsQ0FBQyxTQUFpQjtBQUNyQyxRQUFNLFlBQVksQ0FDaEIsSUFDQSxJQUNBLFVBQ0csSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUUsR0FBRyxJQUFJLG1CQUFtQixLQUFLLENBQUMsQ0FBQztBQUNqRSxTQUFBO0FBQ1Q7QUFDYSxNQUFBLFdBQVdBLGVBQWEsVUFBVTtBQUNsQyxNQUFBLFdBQVdBLGVBQWEsVUFBVTtBQUNsQyxNQUFBLGNBQWNBLGVBQWEsYUFBYTtBQUN4QyxNQUFBLGNBQWNBLGVBQWEsYUFBYTtBQUV4QyxNQUFBLGFBQWEsQ0FDeEIsT0FDRyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFFakQsTUFBTSxnQkFBZ0IsQ0FBQyxTQUFpQjtBQUN0QyxRQUFNLFlBQVksQ0FDaEIsSUFDQSxJQUNBLE9BQ0EsaUJBRUEsSUFBSSxNQUFNO0FBQUEsSUFDUixxQkFBcUIsRUFBRTtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxtQkFBbUIsS0FBSztBQUFBLElBQ3hCO0FBQUEsRUFBQSxDQUNEO0FBQ0ksU0FBQTtBQUNUO0FBQ2EsTUFBQSxZQUFZLGNBQWMsV0FBVztBQUNyQyxNQUFBLGNBQWMsY0FBYyxhQUFhO0FBRS9DLE1BQU0sa0JBQWtCLENBQzdCLElBQ0EsV0FDQSxJQUNBLFVBRUEsSUFBSSxtQkFBbUI7QUFBQSxFQUNyQixxQkFBcUIsRUFBRTtBQUFBLEVBQ3ZCLFVBQVUsV0FBVyxlQUFlO0FBQUEsRUFDcEM7QUFBQSxFQUNBLG1CQUFtQixLQUFLO0FBQzFCLENBQUM7QUFFSSxNQUFNLGtCQUFrQixDQUM3QixJQUNBLFdBQ0EsWUFFQSxJQUFJLG1CQUFtQjtBQUFBLEVBQ3JCLE1BQU0sRUFBRTtBQUFBLEVBQ1IsTUFBTSxTQUFTO0FBQUEsRUFDZixXQUFXLE1BQU0sT0FBTztBQUMxQixDQUFDO0FBRVUsTUFBQSxhQUFhLENBQUMsSUFBWSxTQUNyQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFFOUIsTUFBTSxjQUFjLENBQ3pCLElBQ0EsU0FDQSxvQkFDRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFFdkQsTUFBQSxpQkFBaUIsQ0FBQyxJQUFZLFNBQ3pDLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBRWxDLE1BQU0sZ0JBQWdCLENBQUMsSUFBWSxZQUN4QyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGMUQsTUFBTSwwQkFBMEIsOEJBQThCLFlBQVk7QUFDMUUsTUFBTSx1Q0FBdUM7QUFBQSxFQUMzQztBQUFBLEVBQ0EsRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFO0FBQ25CO0FBRU8sTUFBTSxnQkFBZ0IsQ0FDM0IsT0FDQSxJQUNBLE9BQ0Esa0JBRUEsSUFBSSxpQkFBaUI7QUFBQSxFQUNuQixxQ0FBcUMsS0FBSztBQUFBLEVBQzFDO0FBQUEsRUFDQSxtQkFBbUIsS0FBSztBQUFBLEVBQ3hCO0FBQ0YsQ0FBQztBQUVILE1BQU1BLGlCQUFlLENBQUMsU0FBaUI7QUFDckMsUUFBTSxZQUFZLENBQ2hCLE9BQ0EsSUFDQSxVQUVBLElBQUksTUFBTTtBQUFBLElBQ1IscUNBQXFDLEtBQUs7QUFBQSxJQUMxQztBQUFBLElBQ0EsbUJBQW1CLEtBQUs7QUFBQSxFQUFBLENBQ3pCO0FBQ0ksU0FBQTtBQUNUO0FBQ2EsTUFBQSxnQkFBZ0JBLGVBQWEsZUFBZTtBQUM1QyxNQUFBLGdCQUFnQkEsZUFBYSxlQUFlO0FBQzVDLE1BQUEsbUJBQW1CQSxlQUFhLGtCQUFrQjtBQUVsRCxNQUFBLGtCQUFrQixDQUM3QixVQUNHLElBQUksbUJBQW1CLENBQUMscUNBQXFDLEtBQUssQ0FBQyxDQUFDO0FBRTVELE1BQUEsY0FBYyxDQUFDLFVBQzFCLElBQUksZUFBZSxDQUFDLHdCQUF3QixLQUFLLENBQUMsQ0FBQztBQUVyRCxNQUFNLHdCQUF3QixDQUFDLFNBQWlCO0FBQzlDLFFBQU0sWUFBWSxDQUFDLE9BQWUsT0FDaEMsSUFBSSxNQUFNLENBQUMsY0FBYyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN0QyxTQUFBO0FBQ1Q7QUFDYSxNQUFBLGlCQUFpQixzQkFBc0IsZ0JBQWdCO0FBQ3ZELE1BQUEsc0JBQXNCLHNCQUFzQixxQkFBcUI7QUFFdkUsTUFBTSxjQUFjLENBQ3pCLE1BQ0EsT0FDQSxJQUNBLFdBRUEsSUFBSSxlQUFlO0FBQUEsRUFDakIsU0FBUyxPQUFPO0FBQUEsSUFDZCxRQUFRLENBQUMsTUFDUCxTQUFTLFVBQVUsU0FBUyxNQUFNLENBQUMsQ0FBQyxNQUFNLGNBQWMsQ0FBQztBQUFBLEVBQUEsQ0FDNUQ7QUFBQSxFQUNELE1BQU0sRUFBRTtBQUFBLEVBQ1IsU0FBUyxRQUFRO0FBQUEsSUFDZixRQUFRLENBQUMsTUFBTSxVQUFVLEdBQUcsYUFBYTtBQUFBLElBQ3pDLFFBQVEsQ0FBQyxNQUFNLFNBQVMsU0FBUyxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7QUFBQSxFQUFBLENBQ3hEO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdFSCxNQUFNLGtCQUFrQixDQUN0QixHQUNBLFdBRUEsU0FBUyxHQUFHO0FBQUEsRUFDVixRQUFRLENBQUMsTUFBTSxVQUFVLEdBQUcsTUFBTTtBQUFBLEVBQ2xDLFFBQVE7QUFDVixDQUFDO0FBRUgsTUFBTUEsaUJBQWUsQ0FBQyxTQUFpQjtBQUNyQyxRQUFNLFlBQVksQ0FBQyxXQUFvQixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEQsU0FBQTtBQUNUO0FBQ2EsTUFBQSxxQkFBcUJBLGVBQWEsb0JBQW9CO0FBQ3RELE1BQUEsd0JBQXdCQSxlQUFhLHVCQUF1QjtBQUU1RCxNQUFBLGtCQUFrQixNQUFNLElBQUksaUJBQWlCO0FBRW5ELE1BQU0sZ0JBQWdCLENBQzNCLElBQ0EsYUFDQSxTQUVBLElBQUksaUJBQWlCO0FBQUEsRUFDbkIsZ0JBQWdCLElBQUksU0FBUztBQUFBLEVBQzdCLE1BQU0sV0FBVztBQUFBLEVBQ2pCO0FBQ0YsQ0FBQztBQUVJLE1BQU0sa0JBQWtCLENBQzdCLElBQ0EsU0FDQSxTQUVBLElBQUksbUJBQW1CO0FBQUEsRUFDckIsZ0JBQWdCLElBQUksU0FBUztBQUFBLEVBQzdCLFVBQVUsU0FBUyxPQUFPO0FBQUEsRUFDMUI7QUFDRixDQUFDO0FBRVUsTUFBQSxhQUFhLE1BQU0sSUFBSSxZQUFZOzs7Ozs7Ozs7O0FDekN6QyxNQUFNLFFBQVEsQ0FBQyxXQUFtQixNQUFjLGNBQ3JELFNBQVMsTUFBTTtBQUFBLEVBQ2IsSUFBSSxNQUFNLENBQUMsVUFBVSxTQUFTLENBQUM7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsR0FBSSxZQUFZLFNBQVMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUM1RCxJQUFJLEtBQUs7QUFDWCxDQUFDO0FBRUksTUFBTSxPQUFPLENBQUMsWUFDbkIsU0FBUyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsU0FBUyxJQUFJLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLE1BQUEsWUFBWSxNQUFNLElBQUksV0FBVztBQUVqQyxNQUFBLHNCQUFzQixNQUFNLElBQUkscUJBQXFCO0FBRXJELE1BQUEsY0FBYyxDQUFDLE9BQWUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUVsRSxNQUFNLFFBQVEsQ0FBQyxTQUFpQixJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDbkQsTUFBTSxPQUFPLENBQUMsU0FBaUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDO0FBRXhELE1BQU0sVUFBVSxDQUFDLFNBQWlCLElBQUksV0FBVyxRQUFXLElBQUk7Ozs7Ozs7Ozs7OztBQ2xCMUQsTUFBQSxPQUFPLENBQUMsU0FBaUIsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUVuRCxNQUFBLFNBQVMsQ0FBQyxTQUFxRDtBQUMxRSxRQUFNLFFBQVEsS0FBSyxTQUFTLEVBQUUsTUFBTSxlQUFlO0FBQzVDLFNBQUEsSUFBSSxVQUFVLFFBQVcsUUFBUSxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDOUQ7QUFFTyxNQUFNLGtCQUFrQixDQUFDLFlBQzlCLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDO0FBRXpCLE1BQU0sa0JBQWtCLENBQzdCLE1BQ0EsUUFDQSxTQUNBLFNBRUEsSUFBSSxtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQSxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLElBQUksSUFBSSxFQUFFLEtBQUssR0FBRztBQUM1QyxDQUFDOzs7Ozs7OztBQ2JJLE1BQU0sdUJBQXVCLENBQUMsVUFDbkMsSUFBSSx3QkFBd0IsQ0FBQyxLQUFLLENBQUM7QUFFeEIsTUFBQSxnQkFBZ0IsQ0FBQyxPQUFlLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUV0RSxNQUFNLHlCQUF5QixDQUFDLFdBQ3JDLElBQUksMEJBQTBCLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUM7QUFFbkUsTUFBTSxpQkFBaUIsQ0FDNUIsTUFDQSxXQUVBLElBQUksa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLE9BQU8sS0FDTCxvQkFBb0IsU0FBUyxPQUFPLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxHQUFJLENBQUEsQ0FBQztBQUFBLEVBQy9ELE9BQU8sS0FBSyxrQkFBa0IsU0FBUyxPQUFPLEdBQUcsRUFBRSxNQUFNLEtBQUssSUFBSSxHQUFJLENBQUEsQ0FBQztBQUN6RSxDQUFDO0FBR0ksTUFBTSxrQkFBa0IsQ0FDN0IsWUFDQSxPQUNBLGFBRUEsSUFBSSxtQkFBbUI7QUFBQSxFQUNyQixNQUFNLFVBQVU7QUFBQSxFQUNoQixVQUFVLE9BQU8sUUFBUTtBQUFBLEVBQ3pCLFNBQVMsVUFBVTtBQUFBLElBQ2pCLFFBQVEsQ0FBQyxPQUFPLE1BQU07QUFDcEIsWUFBTSxJQUFJO0FBQ04sVUFBQSxPQUFPLEtBQUssT0FBTyxHQUFHO0FBQ3BCLFlBQUEsT0FBTyxFQUFFLE1BQU07QUFBVSxpQkFBTyxVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN6RCxZQUFJLEVBQUUsRUFBRTtBQUFZLGlCQUFPLGlCQUFpQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFBQSxNQUN6RDtBQUNBLFlBQU0sRUFBRTtBQUFBLElBQ1Y7QUFBQSxFQUFBLENBQ0Q7QUFDSCxDQUFDOzs7Ozs7Ozs7QUM5Q0gsTUFBTSxjQUFjLENBQUMsU0FBaUI7QUFDOUIsUUFBQSxZQUFZLENBQUMsVUFBaUIsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztBQUN6RCxTQUFBO0FBQ1Q7QUFDYSxNQUFBLFVBQVUsWUFBWSxTQUFTO0FBQy9CLE1BQUEsVUFBVSxZQUFZLFNBQVM7QUFDL0IsTUFBQSxTQUFTLFlBQVksUUFBUTtBQUM3QixNQUFBLFNBQVMsWUFBWSxRQUFRO0FBQzdCLE1BQUEsa0JBQWtCLFlBQVksaUJBQWlCO0FBQy9DLE1BQUEsa0JBQWtCLFlBQVksaUJBQWlCO0FBQy9DLE1BQUEsaUJBQWlCLFlBQVksZ0JBQWdCO0FBRTFELE1BQU0sZ0JBQWdCLENBQUMsU0FBaUI7QUFDaEMsUUFBQSxZQUFZLENBQUMsU0FBaUIsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztBQUNyRCxTQUFBO0FBQ1Q7QUFDYSxNQUFBLGFBQWEsY0FBYyxZQUFZO0FBQ3ZDLE1BQUEsYUFBYSxjQUFjLFlBQVk7QUFFdkMsTUFBQSxVQUFVLE1BQU0sSUFBSSxTQUFTO0FBQzdCLE1BQUEsVUFBVSxNQUFNLElBQUksU0FBUztBQUM3QixNQUFBLFlBQVksTUFBTSxJQUFJLFdBQVc7QUFDakMsTUFBQSxVQUFVLE1BQU0sSUFBSSxTQUFTO0FBQzdCLE1BQUEsU0FBUyxNQUFNLElBQUksUUFBUTtBQUMzQixNQUFBLFNBQVMsTUFBTSxJQUFJLFFBQVE7QUFFakMsTUFBTSxZQUFZLENBQUMsU0FBaUIsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1psRSxNQUFNLGFBQWEsQ0FDakIsT0FDQSxXQUVBLE9BQU8sVUFBVSxXQUNiLFNBQVMsT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUEsQ0FBRyxJQUNsQyxVQUFVLE9BQWlCLE1BQU07QUFFaEMsTUFBTSxTQUFTLENBQUM7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BTUUsU0FBUyxNQUFNO0FBQUEsRUFDYixjQUFjLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQzVDLFlBQVksSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7QUFBQSxFQUM1QyxRQUNFLElBQUksUUFBUTtBQUFBLElBQ1YsR0FBRyxLQUFLLElBQUksSUFBSSxTQUFTLEtBQUssT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJLEdBQUksQ0FBQSxDQUFDO0FBQUEsRUFBQSxDQUMxRDtBQUFBLEVBQ0gsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDNUIsQ0FBQztBQUVVLE1BQUEsY0FBYyxDQUN6QixPQUlBO0FBQUEsRUFDRTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BTUc7QUFDQyxNQUFBLE1BQU0sT0FBTyxDQUFDLGFBQWEsU0FBUyxTQUFTLElBQUksRUFBRSxVQUFVO0FBQ3pELFVBQUEsSUFBSSxNQUFNLGlDQUFpQztBQUNuRCxTQUFPLFNBQVMsTUFBTTtBQUFBLElBQ3BCLElBQUksZUFBZTtBQUFBLE1BQ2pCLGNBQWMsVUFBVSxZQUFZLGlCQUFpQjtBQUFBLE1BQ3JELFlBQVksVUFBVSxVQUFVLDBCQUEwQjtBQUFBLE1BQzFELFFBQVEsV0FBVyxNQUFNLFlBQVk7QUFBQSxNQUNyQyxVQUFVLFdBQVcsUUFBUSxjQUFjO0FBQUEsSUFBQSxDQUM1QztBQUFBLElBQ0Q7QUFBQSxNQUNFO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFBSSxDQUFDLEVBQUUsTUFBTSxXQUNqQixTQUFTLE1BQU07QUFBQSxVQUNiLFNBQVMsTUFBTTtBQUFBLFlBQ2IsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVk7QUFBQSxZQUM3QyxTQUFTLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFBQSxVQUFBLENBQ3RCO0FBQUEsUUFBQSxDQUNGO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFBQSxJQUNBLElBQUksS0FBSztBQUFBLEVBQUEsQ0FDVjtBQUNIO0FBRU8sTUFBTSxjQUFjLENBQUMsWUFBb0IsVUFDOUMsSUFBSSxlQUFlLENBQUMsTUFBTSxVQUFVLEdBQUcsU0FBUyxPQUFPLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV0RSxNQUFNLGFBQWEsQ0FDeEIsWUFDQSxhQUNHLElBQUksY0FBYyxDQUFDLE1BQU0sVUFBVSxHQUFHLFVBQVUsVUFBVSxTQUFTLENBQUMsQ0FBQztBQUVuRSxNQUFNLGdCQUFnQixDQUMzQixNQUNBLEVBQUUsUUFBUSxHQUFHLE9BQUEsTUFDVixJQUFJLGlCQUFpQixDQUFDLE9BQU8sTUFBTSxHQUFHLElBQUk7Ozs7Ozs7OztBQ3JFL0MsTUFBTSxnQkFBZ0IsQ0FDcEIsT0FDQSxXQUVBLE9BQU8sVUFBVSxXQUFXLE1BQU0sS0FBSyxJQUFJLFVBQVUsT0FBaUIsTUFBTTtBQUV2RSxNQUFNLGlCQUFpQixDQUM1QixNQUNBLFVBQ0EsV0FDQSxTQUVBLElBQUksa0JBQWtCO0FBQUEsRUFDcEIsZUFBZSxVQUFVLElBQUk7QUFBQSxFQUM3QixVQUFVLFdBQVcsZ0JBQWdCO0FBQUEsRUFDckMsVUFBVSxNQUFNLElBQUk7QUFDdEIsQ0FBQztBQUVJLE1BQU0scUJBQXFCLENBQ2hDLE1BQ0EsU0FDQSxhQUVBLElBQUksc0JBQXNCO0FBQUEsRUFDeEIsVUFBVSxTQUFTLE9BQU87QUFBQSxFQUMxQixlQUFlLFVBQVUsSUFBSTtBQUMvQixDQUFDO0FBRUksTUFBTSxtQkFBbUIsQ0FDOUIsTUFDQSxJQUNBLFVBQ0EsY0FFQSxJQUFJLG9CQUFvQjtBQUFBLEVBQ3RCLGNBQWMsSUFBSSxLQUFLO0FBQUEsRUFDdkIsU0FBUyxhQUNMLFNBQVMsVUFBVTtBQUFBLElBQ2pCLFFBQVEsQ0FBQyxNQUFNLFlBQVksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUFBLElBQzlDLFFBQVEsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDLENBQUM7QUFBQSxFQUFBLENBQ3BDLElBQ0QsU0FBUyxVQUFVO0FBQUEsSUFDakIsYUFBYSxDQUFDLE1BQU0sZUFBZSxHQUFHLElBQUk7QUFBQSxFQUFBLENBQzNDO0FBQUEsRUFDTCxVQUFVLFdBQVcsZ0JBQWdCO0FBQ3ZDLENBQUM7QUFFSSxNQUFNLFlBQVksQ0FDdkIsV0FDQSxNQUNBLE9BQ0EsU0FFQSxJQUFJLHNCQUFzQjtBQUFBLEVBQ3hCLFVBQVUsV0FBVyxTQUFTO0FBQUEsRUFDOUIsT0FBTyxJQUFJO0FBQUEsRUFDWCxVQUFVLE9BQU8sZUFBZTtBQUFBLEVBQ2hDO0FBQ0YsQ0FBQztBQWdDSSxNQUFNLG1CQUFtQixDQUM5QixJQUNBLFFBQ0EsRUFBRSxTQUFTLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUEsTUFFaEQsU0FBUyxNQUFNO0FBQUEsRUFDYixJQUFJLG9CQUFvQixDQUFDLGNBQWMsSUFBSSxTQUFTLEdBQUcsUUFBUSxNQUFNLElBQUksQ0FBQztBQUFBLEVBQzFFLEdBQUcsT0FBTztBQUFBLElBQ1IsTUFBTSxDQUFDLEdBQVcsTUFBYztBQUN2QixhQUFBLEVBQUUsTUFBTSxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQztJQUNwRDtBQUFBLElBQ0EsTUFBTSxDQUFDLE1BQWM7QUFDWixhQUFBLEVBQUUsTUFBTSxVQUFVLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQztBQUFBLElBQ0EsY0FBYyxDQUFDLFVBQWtCLE9BQWdCO0FBQ3hDLGFBQUE7QUFBQSxRQUNMLE1BQU0sU0FBUyxLQUFLLE9BQU8sS0FBSztBQUFBLFFBQ2hDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUFBLE1BQUE7QUFBQSxJQUUxQjtBQUFBLElBQ0EsYUFBYSxDQUFDLFVBQXdDO0FBQzdDLGFBQUE7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sQ0FBQyxVQUFVLE9BQU8sZUFBZSxDQUFDO0FBQUEsTUFBQTtBQUFBLElBRTVDO0FBQUEsSUFDQSxZQUFZLENBQUMsU0FBc0M7QUFDMUMsYUFBQTtBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTSxDQUFDLFVBQVUsTUFBTSxjQUFjLENBQUM7QUFBQSxNQUFBO0FBQUEsSUFFMUM7QUFBQSxJQUNBLGFBQWEsQ0FBQyxNQUFjLFVBQWtCO0FBQ3JDLGFBQUE7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sQ0FBQyxNQUFNLFNBQVMsT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQTtBQUFBLElBRXBEO0FBQUEsSUFDQSxlQUFlLENBQUMsTUFBYztBQUNyQixhQUFBO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxNQUFBO0FBQUEsSUFFNUM7QUFBQSxJQUNBLGlCQUFpQixDQUFDLE1BQStCO0FBQ3hDLGFBQUEsRUFBRSxNQUFNLG1CQUFtQixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNuRTtBQUFBLElBQ0EsUUFBUSxDQUFDLFVBQWlCO0FBQ2pCLGFBQUE7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU0sQ0FBQyxVQUFVLEtBQUssQ0FBQztBQUFBLE1BQUE7QUFBQSxJQUUzQjtBQUFBLElBQ0EsUUFBUSxDQUFDLFNBQWlCO0FBQ3hCLGFBQU8sRUFBRSxNQUFNLFlBQVksTUFBTSxDQUFDLElBQUksRUFBRTtBQUFBLElBQzFDO0FBQUE7QUFBQSxJQUVBLE1BQU0sQ0FDSixRQUNHO0FBQ0gsWUFBTSxTQUFTLEVBQUUsR0FBRyxrQkFBa0IsR0FBRyxpQkFBaUI7QUFDbkQsYUFBQSxFQUFFLE1BQU0sT0FBTyxVQUFVLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFBO0lBQ3hEO0FBQUEsSUFDQSxNQUFNLENBQ0osUUFJRztBQUNILFlBQU0sU0FBUztBQUFBLFFBQ2IsR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLFFBQ0gsR0FBRztBQUFBLE1BQUE7QUFFRSxhQUFBLEVBQUUsTUFBTSxPQUFPLFVBQVUsS0FBSyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUE7SUFDeEQ7QUFBQSxJQUNBLE1BQU0sQ0FBQyxRQUFvQztBQUNsQyxhQUFBLEVBQUUsTUFBTSxVQUFVLFVBQVUsS0FBSyxhQUFhLENBQUMsSUFBSSxNQUFNLENBQUE7SUFDbEU7QUFBQTtBQUFBLElBRUEscUJBQXFCLENBQUMsV0FBb0I7QUFDakMsYUFBQSxFQUFFLE1BQU0sbUJBQW1CLFNBQVMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFBO0lBQ25FO0FBQUEsSUFDQSxxQkFBcUIsQ0FBQyxXQUFvQjtBQUNqQyxhQUFBLEVBQUUsTUFBTSxvQkFBb0IsU0FBUyxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUE7SUFDcEU7QUFBQSxJQUNBLG9CQUFvQixDQUFDLFdBQW9CO0FBQ2hDLGFBQUEsRUFBRSxNQUFNLGVBQWUsU0FBUyxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUE7SUFDL0Q7QUFBQSxJQUNBLGNBQWMsQ0FBQyxXQUFvQjtBQUMxQixhQUFBLEVBQUUsTUFBTSxVQUFVLFNBQVMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFBO0lBQzFEO0FBQUEsSUFDQSxtQkFBbUIsQ0FBQyxXQUFvQjtBQUMvQixhQUFBLEVBQUUsTUFBTSxjQUFjLFNBQVMsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFBO0lBQzlEO0FBQUEsRUFBQSxDQUNELEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxLQUFBLE1BQVcsSUFBSSxNQUFNLElBQUksQ0FBQztBQUM1QyxDQUFDO0FBRVUsTUFBQSxrQkFBa0IsTUFBTSxJQUFJLGlCQUFpQjs7Ozs7Ozs7OztBQ3RON0MsTUFBQSxhQUFhLENBQUMsSUFBb0IsVUFDN0MsSUFBSSxjQUFjLENBQUMsSUFBSSxtQkFBbUIsS0FBSyxDQUFDLENBQUM7QUFFNUMsTUFBTSxjQUFjLENBQ3pCLElBQ0EsSUFDQSxVQUNHLElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksbUJBQW1CLEtBQUssQ0FBQyxDQUFDO0FBRWxFLE1BQU1BLGlCQUFlLENBQUMsU0FBaUI7QUFDckMsUUFBTSxZQUFZLENBQ2hCLElBQ0EsSUFDQSxPQUNBLHFCQUNHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksbUJBQW1CLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztBQUNwRSxTQUFBO0FBQ1Q7QUFDYSxNQUFBLGdCQUFnQkEsZUFBYSxlQUFlO0FBQzVDLE1BQUEsZUFBZUEsZUFBYSxjQUFjO0FBRWhELE1BQU0sb0JBQW9CLENBQy9CLElBQ0EsSUFDQSxPQUNBLGVBQ0csSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxtQkFBbUIsS0FBSyxHQUFHLFVBQVUsQ0FBQzs7Ozs7Ozs7O0FDakI5RSxNQUFNLHFCQUFxQixDQUFDLGFBS3RCO0FBQ0UsUUFBQSxRQUNKLFNBQVMsU0FBUyxXQUNkLFNBQ0EsQ0FBQyxlQUF1QixjQUFjLEVBQUUsV0FBQSxDQUFZO0FBQzFELFNBQU8sWUFBWSxVQUFVLFNBQVMsUUFBUSxjQUFjLENBQUMsS0FBSztBQUFBLElBQ2hFLFNBQVM7QUFBQSxFQUFBLENBQ1YsS0FBSyxNQUFNLFNBQVMsQ0FBQyxDQUFDO0FBQ3pCO0FBQ0EsTUFBTSxrQkFBa0IsQ0FBQyxTQUN2QixTQUFTLE9BQU8sS0FBSyxLQUFLLENBQUMsS0FBSyxPQUFPLEtBQUssTUFBTSxDQUFDO0FBQ3JELE1BQU0sa0JBQWtCLENBQUMsVUFJdkIsU0FBUyxTQUFTLE1BQU0sU0FBUyxFQUFFLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUs7QUFBQSxFQUN6RCxNQUFNO0FBQUEsRUFDTjtBQUNGLENBQUM7QUFDSCxNQUFNLHFCQUFxQixDQUFDLGFBQzFCLFlBQVksT0FBTyxTQUFTLElBQUksQ0FBQyxLQUFLLFNBQVMsT0FBTyxTQUFTLEVBQUU7QUFFdEQsTUFBQSxjQUFjLENBQ3pCLElBQ0EsTUFDQTtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BV0EsSUFBSSxlQUFlO0FBQUEsRUFDakIsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBSztBQUFBLEVBQ2pDO0FBQUEsRUFDQSxTQUFTLE1BQU07QUFBQSxJQUNiLFlBQVksbUJBQW1CLFFBQVE7QUFBQSxJQUN2QyxTQUFTLGdCQUFnQixLQUFLO0FBQUEsSUFDOUIsU0FBUyxnQkFBZ0IsS0FBSztBQUFBLEVBQUEsQ0FDL0I7QUFDSCxDQUFDO0FBRVUsTUFBQSxjQUFjLENBQ3pCLElBQ0E7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGLE1BYUEsSUFBSSxlQUFlO0FBQUEsRUFDakIsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBSztBQUFBLEVBQ2pDLFNBQVMsTUFBTTtBQUFBLElBQ2IsWUFBWSxtQkFBbUIsUUFBUTtBQUFBLElBQ3ZDLFNBQVMsZ0JBQWdCLEtBQUs7QUFBQSxJQUM5QixTQUFTLGdCQUFnQixLQUFLO0FBQUEsSUFDOUIsWUFBWSxtQkFBbUIsUUFBUTtBQUFBLElBQ3ZDLFVBQVUsVUFBVSxRQUFRLE1BQU07QUFBQSxFQUFBLENBQ25DO0FBQ0gsQ0FBQztBQUVJLE1BQU0sZ0JBQWdCLENBQUMsSUFBWSxVQUN4QyxJQUFJLGlCQUFpQjtBQUFBLEVBQ25CLFNBQVMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLEtBQUs7QUFBQSxFQUNqQyxTQUFTLE9BQU8sRUFBRSxNQUFNLEtBQUssSUFBSSxJQUFJO0FBQ3ZDLENBQUM7QUFFSSxNQUFNLGNBQWMsQ0FDekIsSUFDQSxPQUNBLFNBRUEsSUFBSSxlQUFlO0FBQUEsRUFDakIsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksS0FBSztBQUFBLEVBQ2pDLFNBQVMsTUFBTSxDQUFDLFNBQVMsYUFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3JELENBQUM7QUFFSSxNQUFNLGVBQWUsQ0FBQyxPQUMzQixJQUFJLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztBQ3ZHMUQsTUFBTSwyQkFBMkIsZ0JBQWdCLFNBQVM7QUFFbkQsTUFBTSxTQUFTLENBQUMsSUFBdUIsU0FDNUMsSUFBSSxVQUFVO0FBQUEsRUFDWixTQUFTLElBQUk7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxFQUFBLENBQ1Q7QUFBQSxFQUNEO0FBQ0YsQ0FBQztBQTZFVSxNQUFBLFdBQVcsQ0FDdEIsSUFDQSxTQUNHO0FBQ0gsUUFBTSxPQUFPO0FBQUEsSUFDWDtBQUFBLE1BQ0UsS0FBSyxDQUFDLFdBQTRCO0FBQUEsUUFDaEMsSUFBSTtBQUFBLFFBQ0o7QUFBQSxNQUFBO0FBQUEsTUFFRixLQUFLLENBQUMsV0FBNEI7QUFBQSxRQUNoQyxJQUFJO0FBQUEsUUFDSjtBQUFBLE1BQUE7QUFBQSxNQUVGLEtBQUssQ0FBQyxXQUE0QjtBQUFBLFFBQ2hDLElBQUk7QUFBQSxRQUNKO0FBQUEsTUFBQTtBQUFBLE1BRUYsS0FBSyxDQUFDLFdBQTRCO0FBQUEsUUFDaEMsSUFBSTtBQUFBLFFBQ0o7QUFBQSxNQUFBO0FBQUEsTUFFRixLQUFLLENBQUMsV0FBNEI7QUFBQSxRQUNoQyxJQUFJO0FBQUEsUUFDSjtBQUFBLE1BQUE7QUFBQSxNQUVGLEtBQUssQ0FBQyxXQUE0QjtBQUFBLFFBQ2hDLElBQUk7QUFBQSxRQUNKO0FBQUEsTUFBQTtBQUFBLElBRUo7QUFBQSxJQUNBO0FBQUEsTUFDRSxVQUFVLENBQUNDLFFBQWUsS0FBSyxNQUFNQSxHQUFFLENBQUM7QUFBQSxNQUN4QyxRQUFRLENBQUMsRUFBRSxNQUFNLEdBQUcsTUFDbEIsVUFBVSxPQUFPLElBQUksQ0FBQyxLQUFLLE9BQU8sRUFBRSxDQUFDO0FBQUEsTUFDdkMsUUFBUSxDQUFDLE9BQWUsVUFBVSxFQUFFO0FBQUEsTUFDcEMsTUFBTTtBQUFBLFFBQ0osTUFBTTtBQUFBLFVBQ0osV0FBVyxDQUFDQSxRQUFlLGtCQUFrQixNQUFNQSxHQUFFLENBQUM7QUFBQSxVQUN0RCxhQUFhLENBQUNBLFFBQWUsb0JBQW9CLE1BQU1BLEdBQUUsQ0FBQztBQUFBLFVBQzFELFlBQVksQ0FBQ0EsUUFBZSxtQkFBbUIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsUUFDMUQ7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLE9BQU8sQ0FBQ0EsUUFBZSwwQkFBMEIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsVUFDMUQsS0FBSyxDQUFDQSxRQUFlLHdCQUF3QixNQUFNQSxHQUFFLENBQUM7QUFBQSxVQUN0RCxJQUFJLENBQUNBLFFBQWUsdUJBQXVCLE1BQU1BLEdBQUUsQ0FBQztBQUFBLFVBQ3BELElBQUksQ0FBQ0EsUUFBZSx1QkFBdUIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsVUFDcEQsT0FBTyxDQUFDQSxRQUFlLDBCQUEwQixNQUFNQSxHQUFFLENBQUM7QUFBQSxVQUMxRCxPQUFPLENBQUNBLFFBQWUsMEJBQTBCLE1BQU1BLEdBQUUsQ0FBQztBQUFBLFVBQzFELFFBQVEsQ0FBQ0EsUUFBZSwyQkFBMkIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsVUFDNUQsU0FBUyxDQUFDQSxRQUFlLDRCQUE0QixNQUFNQSxHQUFFLENBQUM7QUFBQSxVQUM5RCxTQUFTLENBQUNBLFFBQWUsNkJBQTZCLE1BQU1BLEdBQUUsQ0FBQztBQUFBLFVBQy9ELFVBQVUsQ0FBQ0EsUUFBZSw4QkFBOEIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsVUFDakUsU0FBUyxDQUFDQSxRQUFlLDRCQUE0QixNQUFNQSxHQUFFLENBQUM7QUFBQSxVQUM5RCxNQUFNLENBQUNBLFFBQWUseUJBQXlCLE1BQU1BLEdBQUUsQ0FBQztBQUFBLFVBQ3hELElBQUksQ0FBQ0EsUUFBZSx1QkFBdUIsTUFBTUEsR0FBRSxDQUFDO0FBQUEsUUFDdEQ7QUFBQSxRQUNBLE9BQU87QUFBQSxVQUNMLElBQUksQ0FBQyxVQUFrQix1QkFBdUIsY0FBYyxLQUFLLENBQUM7QUFBQSxVQUNsRSxJQUFJLENBQUMsVUFBa0IsdUJBQXVCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDbEUsT0FBTyxDQUFDLFVBQ04sMEJBQTBCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDaEQsT0FBTyxDQUFDLFVBQ04sMEJBQTBCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDaEQsUUFBUSxDQUFDLFVBQ1AsMkJBQTJCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDakQsU0FBUyxDQUFDLFVBQ1IsNEJBQTRCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDbEQsU0FBUyxDQUFDLFVBQ1IsNkJBQTZCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDbkQsVUFBVSxDQUFDLFVBQ1QsOEJBQThCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDcEQsU0FBUyxDQUFDLFVBQ1IsNEJBQTRCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDbEQsTUFBTSxDQUFDLFVBQ0wseUJBQXlCLGNBQWMsS0FBSyxDQUFDO0FBQUEsVUFDL0MsSUFBSSxDQUFDLFVBQWtCLHVCQUF1QixjQUFjLEtBQUssQ0FBQztBQUFBLFFBQ3BFO0FBQUEsUUFDQSxXQUFXO0FBQUEsVUFDVCxNQUFNLENBQUMsZ0JBQ0wsdUJBQXVCO0FBQUEsWUFDckI7QUFBQSxVQUNELENBQUE7QUFBQSxVQUNILE1BQU0sQ0FBQyxnQkFDTCx1QkFBdUI7QUFBQSxZQUNyQjtBQUFBLFVBQ0QsQ0FBQTtBQUFBLFVBQ0gsV0FBVyxDQUFDLGdCQUNWLHVCQUF1QjtBQUFBLFlBQ3JCO0FBQUEsVUFDRCxDQUFBO0FBQUEsVUFDSCxTQUFTLENBQUMsZ0JBQ1IsdUJBQXVCO0FBQUEsWUFDckI7QUFBQSxVQUNELENBQUE7QUFBQSxVQUNILFNBQVMsQ0FBQyxnQkFDUix1QkFBdUI7QUFBQSxZQUNyQjtBQUFBLFVBQ0QsQ0FBQTtBQUFBLFFBQ0w7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKLGFBQWEsTUFBTTtBQUFBLFVBQ25CLFlBQVksTUFBTTtBQUFBLFVBQ2xCLGVBQWUsTUFBTTtBQUFBLFVBQ3JCLGtCQUFrQixNQUFNO0FBQUEsVUFDeEIsZUFBZSxNQUFNO0FBQUEsVUFDckIsa0JBQWtCLE1BQU07QUFBQSxRQUMxQjtBQUFBLFFBQ0EsS0FBSztBQUFBLFVBQ0gsZUFBZSxDQUFDLFVBQWtCLG1CQUFtQixNQUFNLEtBQUssQ0FBQztBQUFBLFVBQ2pFLGFBQWEsTUFBTTtBQUFBLFVBQ25CLE1BQU0sTUFBTTtBQUFBLFVBQ1osT0FBTyxNQUFNO0FBQUEsVUFDYixVQUFVLE1BQU07QUFBQSxVQUNoQixPQUFPLE1BQU07QUFBQSxVQUNiLFdBQVcsTUFBTTtBQUFBLFVBQ2pCLGFBQWEsTUFBTTtBQUFBLFVBQ25CLFVBQVUsTUFBTTtBQUFBLFVBQ2hCLGFBQWEsTUFBTTtBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUFBO0FBRUYsU0FBTyxLQUNKO0FBQUEsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLE1BQ1YsSUFBSSxrQkFBa0IsRUFBb0MsR0FBRztBQUFBLE1BQzNELFNBQVMsSUFBSTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQUEsQ0FDVDtBQUFBLE1BQ0Q7QUFBQSxJQUFBLENBQ0Q7QUFBQSxFQUFBLEVBRUYsS0FBSyxJQUFJO0FBQ2Q7QUFFYSxNQUFBLGFBQWEsQ0FBQyxJQUFvQixTQUM3QyxJQUFJLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUVqQixNQUFBLFFBQVEsQ0FDbkIsTUFDQSxTQUNHO0FBQ0MsTUFBQSxPQUFPLFNBQVMsVUFBVTtBQUN0QixVQUFBLENBQUMsU0FBU0MsTUFBS0MsSUFBRyxJQUFJLEtBQUssTUFBTSxxQkFBcUIsS0FBSztBQUNqRSxRQUFJLFNBQVM7QUFDSixhQUFBLElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxHQUFHRCxNQUFLQyxJQUFHLENBQUM7QUFBQSxJQUFBLE9BQzNDO0FBQ0wsWUFBTSxJQUFJO0FBQUEsUUFDUjtBQUFBLE1BQUE7QUFBQSxJQUVKO0FBQUEsRUFDRjtBQUNNLFFBQUEsRUFBRSxLQUFLLElBQVEsSUFBQTtBQUNkLFNBQUEsSUFBSSxTQUFTLENBQUMsV0FBVyxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUM7QUFDbEQ7Ozs7Ozs7O0FDalBhLE1BQUEsbUJBQW1CLENBQzlCLElBQ0E7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixNQUtHO0FBQ0gsU0FBTyxTQUFTLE1BQU07QUFBQSxJQUNwQixJQUFJLG9CQUFvQjtBQUFBLE1BQ3RCLFNBQVMsSUFBSTtBQUFBLFFBQ1gsUUFBUSxDQUFDLE1BQU0sVUFBVSxHQUFHLFlBQVk7QUFBQSxRQUN4QyxZQUFZO0FBQUEsUUFDWixRQUFRO0FBQUEsTUFBQSxDQUNUO0FBQUEsSUFBQSxDQUNGO0FBQUEsSUFDRCxRQUFRLFNBQVMsTUFBTSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJO0FBQUEsSUFDaEQsV0FBVyxTQUFTLE1BQU0sQ0FBQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSTtBQUFBLElBQ3pELFNBQVMsU0FBUyxNQUFNLENBQUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUk7QUFBQSxJQUNuRCxJQUFJLEtBQUs7QUFBQSxFQUFBLENBQ1Y7QUFDSDtBQUVPLE1BQU0saUJBQWlCLENBQzVCLE9BS0EsaUJBRUEsU0FBUyxNQUFNO0FBQUEsRUFDYixJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQztBQUFBLEVBQ3BDLEdBQUcsTUFBTTtBQUFBLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxNQUFNLE1BQzlCLElBQUksZUFBZSxDQUFDLFVBQVUsTUFBTSxTQUFTLEdBQUcsTUFBTSxFQUFFLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQzNFO0FBQ0YsQ0FBQztBQUVJLE1BQU0sc0JBQXNCLENBQUMsSUFBWSxXQUM5QyxJQUFJLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFakUsTUFBQSxpQkFBaUIsTUFBTSxJQUFJLGdCQUFnQjtBQUMzQyxNQUFBLGlCQUFpQixNQUFNLElBQUksZ0JBQWdCO0FBQzNDLE1BQUEsV0FBVyxNQUFNLElBQUksVUFBVTtBQUMvQixNQUFBLHNCQUFzQixNQUFNLElBQUkscUJBQXFCOzs7Ozs7Ozs7OztBQ2xEckQsTUFBQSxVQUFVLE1BQU0sSUFBSSxTQUFTO0FBQzdCLE1BQUEsU0FBUyxNQUFNLElBQUksUUFBUTtBQUVqQyxNQUFNLGFBQWEsQ0FDeEIsT0FDQSxTQUNHLElBQUksY0FBYyxDQUFDLFNBQVMsTUFBTSxDQUFDLFNBQVMsYUFBYSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUV0RSxNQUFNLGNBQWMsQ0FBQyxPQUFlLE1BQWMsU0FDdkQsSUFBSSxlQUFlLENBQUMsVUFBVSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUM7QUFFNUMsTUFBTSxjQUFjLENBQ3pCLFVBQ0EsT0FDQSxNQUNBLFNBQ0csSUFBSSxlQUFlLENBQUMsT0FBTyxRQUFRLEdBQUcsT0FBTyxLQUFLLEdBQUcsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRXRFLE1BQU0sbUJBQW1CLENBQzlCLFNBQ0EsVUFDQSxNQUNBLFNBRUEsSUFBSSxvQkFBb0I7QUFBQSxFQUN0QixVQUFVLFNBQVMsT0FBTztBQUFBLEVBQzFCLE9BQU8sUUFBUTtBQUFBLEVBQ2YsT0FBTyxJQUFJO0FBQUEsRUFDWDtBQUNGLENBQUM7Ozs7Ozs7Ozs7QUM3QkksTUFBTSxtQkFBbUIsQ0FBQyxTQUErQixVQUM5RCxJQUFJLG9CQUFvQixDQUFDLFVBQVUsU0FBUyxPQUFPLEdBQUcsVUFBVSxLQUFLLENBQUMsQ0FBQztBQUV6RSxNQUFNLGVBQWUsQ0FBQyxTQUFpQjtBQUNyQyxRQUFNLFlBQVksQ0FBQyxVQUFtQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDaEQsU0FBQTtBQUNUO0FBQ2EsTUFBQSxtQkFBbUIsYUFBYSxrQkFBa0I7QUFDbEQsTUFBQSxtQkFBbUIsYUFBYSxrQkFBa0I7QUFDbEQsTUFBQSxrQkFBa0IsYUFBYSxpQkFBaUI7QUFDaEQsTUFBQSx3QkFBd0IsYUFBYSx1QkFBdUI7QUFFNUQsTUFBQSxvQkFBb0IsQ0FBQyxVQUNoQyxJQUFJLHFCQUFxQixDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUM7QUFFdEMsTUFBTSxvQkFBb0IsQ0FDL0IsSUFDQSxNQUNBQyxZQUNBLFlBRUEsSUFBSSxxQkFBcUI7QUFBQSxFQUN2QixNQUFNLEVBQUU7QUFBQSxFQUNSLEtBQUs7QUFBQSxFQUNMLFNBQVMsS0FBSyxPQUFPLEVBQUUsTUFBTSxHQUFHLElBQUksSUFBSTtBQUFBLEVBQ3hDQSxXQUFVO0FBQUEsRUFDVixTQUFTQSxXQUFVLE9BQU8sRUFBRSxNQUFNLEdBQUcsSUFBSSxHQUFHO0FBQUEsRUFDNUM7QUFDRixDQUFDO0FBRUksTUFBTSxxQkFBcUIsQ0FDaEMsU0FDQSxVQUVBLElBQUkscUJBQXFCO0FBQUEsRUFDdkIsVUFBVSxTQUFTLE9BQU87QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTLE1BQU0sT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJLEdBQUc7QUFDMUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0JJLE1BQU0sU0FBUztBQUFBLEVBQ3BCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjs7OyJ9
