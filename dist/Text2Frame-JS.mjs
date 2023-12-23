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
export {
  events,
  ev as parse
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dDJGcmFtZS1KUy5tanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZS50cyIsIi4uL3NyYy9jb25zdGFudHMudHMiLCIuLi9zcmMvdmFsaWRhdGUudHMiLCIuLi9zcmMvZXZlbnRzL2FjdG9yLnRzIiwiLi4vc3JjL2V2ZW50cy9iYXR0bGUudHMiLCIuLi9zcmMvZXZlbnRzL2NoYXJhY3Rlci50cyIsIi4uL3NyYy9ldmVudHMvZmxvdy50cyIsIi4uL3NyYy9ldmVudHMvaW50ZXJwcmV0ZXIudHMiLCIuLi9zcmMvZXZlbnRzL21hcC50cyIsIi4uL3NyYy9ldmVudHMvbWVkaWEudHMiLCIuLi9zcmMvZXZlbnRzL21lc3NhZ2UudHMiLCIuLi9zcmMvZXZlbnRzL21vdmVtZW50LnRzIiwiLi4vc3JjL2V2ZW50cy9wYXJ0eS50cyIsIi4uL3NyYy9ldmVudHMvcGljdHVyZS50cyIsIi4uL3NyYy9ldmVudHMvcHJvZ3Jlc3MudHMiLCIuLi9zcmMvZXZlbnRzL3NjZW5lLnRzIiwiLi4vc3JjL2V2ZW50cy9zY3JlZW4udHMiLCIuLi9zcmMvZXZlbnRzL3N5c3RlbS50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZXYgPSAoLi4uYXJyOiBzdHJpbmdbXSkgPT4gYXJyLmpvaW4oXCJcXG5cIik7XG4iLCJleHBvcnQgY29uc3QgV0lORE9XX0JBQ0tHUk9VTkQgPSB7XHJcbiAgV0lORE9XOiBcIldpbmRvd1wiLFxyXG4gIERJTTogXCJEaW1cIixcclxuICBUUkFOU1BBUkVOVDogXCJUcmFuc3BhcmVudFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgV0lORE9XX1BPU0lUSU9OX0hPUklaT05UQUwgPSB7XHJcbiAgTEVGVDogXCJMZWZ0XCIsXHJcbiAgTUlERExFOiBcIk1pZGRsZVwiLFxyXG4gIFJJR0hUOiBcIlJpZ2h0XCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBXSU5ET1dfUE9TSVRJT05fVkVSVElDQUwgPSB7XHJcbiAgVE9QOiBcIlRvcFwiLFxyXG4gIE1JRERMRTogXCJNaWRkbGVcIixcclxuICBCT1RUT006IFwiQm90dG9tXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0hPSUNFU19JTklUID0ge1xyXG4gIE5PTkU6IFwiTm9uZVwiLFxyXG4gIENBU0VfMTogXCIxXCIsXHJcbiAgQ0FTRV8yOiBcIjJcIixcclxuICBDQVNFXzM6IFwiM1wiLFxyXG4gIENBU0VfNDogXCI0XCIsXHJcbiAgQ0FTRV81OiBcIjVcIixcclxuICBDQVNFXzY6IFwiNlwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgQ0hPSUNFU19DQU5DRUwgPSB7XHJcbiAgQlJBTkNIOiBcIkJyYW5jaFwiLFxyXG4gIERJU0FMTE9XOiBcIkRpc2FsbG93XCIsXHJcbiAgQ0FTRV8xOiBcIjFcIixcclxuICBDQVNFXzI6IFwiMlwiLFxyXG4gIENBU0VfMzogXCIzXCIsXHJcbiAgQ0FTRV80OiBcIjRcIixcclxuICBDQVNFXzU6IFwiNVwiLFxyXG4gIENBU0VfNjogXCI2XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSVRFTV9UWVBFID0ge1xyXG4gIFJFR1VMQVI6IFwiUmVndWxhciBJdGVtXCIsXHJcbiAgS0VZOiBcIktleSBJdGVtXCIsXHJcbiAgSElEREVOX0E6IFwiSGlkZGVuIEl0ZW0gQVwiLFxyXG4gIEhJRERFTl9COiBcIkhpZGRlbiBJdGVtIEJcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWQVJJQUJMRV9PUEVSQVRPUiA9IHtcclxuICBTRVQ6IFwiU2V0XCIsXHJcbiAgQUREOiBcIkFkZFwiLFxyXG4gIFNVQjogXCJTdWJcIixcclxuICBNVUw6IFwiTXVsXCIsXHJcbiAgRElWOiBcIkRpdlwiLFxyXG4gIE1PRDogXCJNb2RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBFVkVOVCA9IHtcclxuICBUSElTX0VWRU5UOiBcIlRoaXNFdmVudFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQVJBQ1RFUiA9IHtcclxuICBQTEFZRVI6IFwiUGxheWVyXCIsXHJcbiAgLi4uRVZFTlQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVElNRVJfTU9ERSA9IHtcclxuICBTVEFSVDogXCJTdGFydFwiLFxyXG4gIEVORDogXCJFbmRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RPUl9NRU1CRVIgPSB7XHJcbiAgQUxMOiBcIkVudGlyZSBQYXJ0eVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFDVEVSX1BBUkFNRVRFUiA9IHtcclxuICBNQVhfSFA6IFwiTWF4SFBcIixcclxuICBNQVhfTVA6IFwiTWF4TVBcIixcclxuICBBVFRBQ0s6IFwiQXR0YWNrXCIsXHJcbiAgREVGRU5TRTogXCJEZWZlbnNlXCIsXHJcbiAgTV9BVFRBQ0s6IFwiTS5BdHRhY2tcIixcclxuICBNX0RFRkVOU0U6IFwiTS5EZWZlbnNlXCIsXHJcbiAgQUdJTElUWTogXCJBZ2lsaXR5XCIsXHJcbiAgTFVDSzogXCJMdWNrXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRVFVSVBfU1RBVEUgPSB7XHJcbiAgTk9ORTogXCJOb25lXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRU5FTVlfTUVNQkVSID0ge1xyXG4gIEVOVElSRV9UUk9PUDogXCJFbnRpcmUgVHJvb3BcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBQ1RJT05fVEFSR0VUID0ge1xyXG4gIExBU1RfVEFSR0VUOiBcIkxhc3QgVGFyZ2V0XCIsXHJcbiAgUkFORE9NOiBcIlJhbmRvbVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERJUkVDVElPTiA9IHtcclxuICBET1dOOiBcIkRvd25cIixcclxuICBMRUZUOiBcIkxlZnRcIixcclxuICBSSUdIVDogXCJSaWdodFwiLFxyXG4gIFVQOiBcIlVwXCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBESVJFQ1RJT05fUkVUQUlOID0ge1xyXG4gIFJFVEFJTjogXCJSZXRhaW5cIixcclxuICAuLi5ESVJFQ1RJT04sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBESVJFQ1RJT05fUk9VVEU4ID0ge1xyXG4gIC4uLkRJUkVDVElPTixcclxuICBET1dOX0xFRlQ6IFwiTG93ZXJMZWZ0XCIsXHJcbiAgRE9XTl9SSUdIVDogXCJMb3dlclJpZ2h0XCIsXHJcbiAgVVBfTEVGVDogXCJVcHBlckxlZnRcIixcclxuICBVUF9SSUdIVDogXCJVcHBlclJpZ2h0XCIsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBESVJFQ1RJT05fTUVUSE9EID0ge1xyXG4gIFJBTkRPTTogXCJBdFJhbmRvbVwiLFxyXG4gIFRPV0FSRF9QTEFZRVI6IFwiVG93YXJkUGxheWVyXCIsXHJcbiAgQVdBWV9QTEFZRVI6IFwiQXdheUZyb21QbGF5ZXJcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IERJUkVDVElPTl9UVVJOX01FVEhPRCA9IHtcclxuICBMRUZUXzkwOiBcIjkwTGVmdFwiLFxyXG4gIFJJR0hUXzkwOiBcIjkwUmlnaHRcIixcclxuICBSQU5ET01fOTA6IFwiOTBSaWdodG9yTGVmdFwiLFxyXG4gIFRVUk5fMTgwOiBcIjE4MFwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRElSRUNUSU9OX0NBUiA9IHtcclxuICBGUk9OVDogXCJGb3J3YXJkXCIsXHJcbiAgQkFDSzogXCJCYWNrd2FyZFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBREUgPSB7XHJcbiAgQkxBQ0s6IFwiQmxhY2tcIixcclxuICBXSElURTogXCJXaGl0ZVwiLFxyXG4gIE5PTkU6IFwiTm9uZVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZFSElDTEUgPSB7XHJcbiAgQk9BVDogXCJCb2F0XCIsXHJcbiAgU0hJUDogXCJTaGlwXCIsXHJcbiAgQUlSX1NISVA6IFwiQWlyU2hpcFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQVJBQ1RFUl9TUEVFRCA9IHtcclxuICBYOF9TTE9XOiBcIng4IFNsb3dlclwiLFxyXG4gIFg0X1NMT1c6IFwieDQgU2xvd2VyXCIsXHJcbiAgWDJfU0xPVzogXCJ4MiBTbG93ZXJcIixcclxuICBOT1JNQUw6IFwiTm9ybWFsXCIsXHJcbiAgWDJfRkFTVDogXCJ4MiBGYXN0ZXJcIixcclxuICBYNF9GQVNUOiBcIng0IEZhc3RlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQVJBQ1RFUl9GUkVRID0ge1xyXG4gIExPV0VTVDogXCJMb3dlc3RcIixcclxuICBMT1c6IFwiTG93ZXJcIixcclxuICBOT1JNQUw6IFwiTm9ybWFsXCIsXHJcbiAgSElHSDogXCJIaWdoZXJcIixcclxuICBISUdIRVNUOiBcIkhpZ2hlc3RcIixcclxufTtcclxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREUgPSB7XHJcbiAgTk9STUFMOiBcIk5vcm1hbFwiLFxyXG4gIEFERDogXCJBZGRpdGl2ZVwiLFxyXG4gIE1VTDogXCJNdWx0aXBseVwiLFxyXG4gIFNDUkVFTjogXCJTY3JlZW5cIixcclxufTtcclxuZXhwb3J0IGNvbnN0IEJBTExPT04gPSB7XHJcbiAgRVhDTEFNQVRJT046IFwiRXhjbGFtYXRpb25cIixcclxuICBRVUVTVElPTjogXCJRdWVzdGlvblwiLFxyXG4gIE1VU0lDOiBcIk11c2ljIE5vdGVcIixcclxuICBIRUFSVDogXCJIZWFydFwiLFxyXG4gIEFOR0VSOiBcIkFuZ2VyXCIsXHJcbiAgU1dFQVQ6IFwiU3dlYXRcIixcclxuICBGTFVTVFJBVElPTjogXCJGbHVzdHJhdGlvblwiLFxyXG4gIFNJTEVOQ0U6IFwiU2lsZW5jZVwiLFxyXG4gIExJR0hUOiBcIkxpZ2h0IEJ1bGJcIixcclxuICBaWlo6IFwienp6XCIsXHJcbiAgVVNFUl8xOiBcInVzZXItZGVmaW5lZDFcIixcclxuICBVU0VSXzI6IFwidXNlci1kZWZpbmVkMlwiLFxyXG4gIFVTRVJfMzogXCJ1c2VyLWRlZmluZWQzXCIsXHJcbiAgVVNFUl80OiBcInVzZXItZGVmaW5lZDRcIixcclxuICBVU0VSXzU6IFwidXNlci1kZWZpbmVkNVwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBJQ1RVUkVfT1JJR0lOID0ge1xyXG4gIENPUk5FUjogXCJVcHBlciBMZWZ0XCIsXHJcbiAgQ0VOVEVSOiBcIkNlbnRlclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVBU0lORyA9IHtcclxuICBMSU5FQVI6IFwiTGluZWFyXCIsXHJcbiAgSU46IFwiRWFzZS1pblwiLFxyXG4gIE9VVDogXCJFYXNlLW91dFwiLFxyXG4gIElOX09VVDogXCJFYXNlLWluLW91dFwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SX1RPTkUgPSB7XHJcbiAgTk9STUFMOiBcIk5vcm1hbFwiLFxyXG4gIERBUks6IFwiRGFya1wiLFxyXG4gIFNFUElBOiBcIlNlcGlhXCIsXHJcbiAgU1VOU0VUOiBcIlN1bnNldFwiLFxyXG4gIE5JR0hUOiBcIk5pZ2h0XCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV0VBVEhFUiA9IHtcclxuICBOT05FOiBcIk5vbmVcIixcclxuICBSQUlOOiBcIlJhaW5cIixcclxuICBTVE9STTogXCJTdG9ybVwiLFxyXG4gIFNOT1c6IFwiU25vd1wiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBVFRMRV9UUk9PUCA9IHtcclxuICBSQU5ET006IFwiUmFuZG9tXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0hPUF9JVEVNID0ge1xyXG4gIElURU06IFwiSXRlbVwiLFxyXG4gIFdFQVBPTjogXCJXZWFwb25cIixcclxuICBBUk1PUjogXCJBcm1vclwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQ0FUSU9OID0ge1xyXG4gIFRFUlJBSU5fVEFHOiBcIlRlcnJhaW4gVGFnXCIsXHJcbiAgRVZFTlRfSUQ6IFwiRXZlbnQgSURcIixcclxuICBMQVlFUl8xOiBcIkxheWVyIDFcIixcclxuICBSRUdJT05fSUQ6IFwiUmVnaW9uIElEXCIsXHJcbn07XHJcbiIsImltcG9ydCB7IENPTE9SX1RPTkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHtcclxuICBBcmdWYWx1ZSxcclxuICBDb2xvcjMsXHJcbiAgQ29sb3I0LFxyXG4gIERpcmVjdE9yVmFyaWFibGVzLFxyXG4gIEZyb21UbyxcclxuICBNYXBQb3NpdGlvbixcclxuICBTb3VuZCxcclxuICBTd2l0Y2hJZCxcclxuICBUZXh0LFxyXG4gIFZhcmlhYmxlSWQsXHJcbn0gZnJvbSBcIi4vdHlwZVwiO1xyXG5cclxuY29uc3Qgam9pbktlZXAgPSAoZGVsaW06IHN0cmluZyB8IG51bGwsIGFycjogKFRleHQgfCB1bmRlZmluZWQpW10pID0+XHJcbiAgYXJyLmpvaW4oZGVsaW0gPz8gXCIsIFwiKTtcclxuZXhwb3J0IGNvbnN0IGpvaW5Ta2lwID0gKGRlbGltOiBzdHJpbmcgfCBudWxsLCBhcnI6IChUZXh0IHwgdW5kZWZpbmVkKVtdKSA9PlxyXG4gIGFyci5maWx0ZXIoKHgpID0+IHggIT09IHVuZGVmaW5lZCkuam9pbihkZWxpbSA/PyBcIiwgXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhZyA9IChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgYXJnPzogKFRleHQgfCB1bmRlZmluZWQpW10sXHJcbiAgdGV4dENoaWxkcmVuPzogc3RyaW5nXHJcbikgPT4ge1xyXG4gIGNvbnN0IGFyZ3MgPSBqb2luS2VlcChudWxsLCBhcmcgPz8gW10pO1xyXG4gIHJldHVybiBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICBhcmdzICE9PSBcIlwiID8gYDwke25hbWV9OiAke2FyZ3N9PmAgOiBgPCR7bmFtZX0+YCxcclxuICAgIC4uLih0ZXh0Q2hpbGRyZW4gPyBbdGV4dENoaWxkcmVuLCBgPC8ke25hbWV9PmBdIDogW10pLFxyXG4gIF0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVDYXNlID0gKFxyXG4gIHY6IEFyZ1ZhbHVlLFxyXG4gIGNhc2VzOiBQYXJ0aWFsPHtcclxuICAgIG51bWJlcjogKHY6IG51bWJlciwgZTogKCkgPT4gRXJyb3IpID0+IG51bWJlciB8IHN0cmluZztcclxuICAgIHN0cmluZzogKHY6IHN0cmluZywgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICAgIG9iamVjdDogKHY6IG9iamVjdCwgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICAgIHZhcmlhYmxlSWQ6ICh2OiBWYXJpYWJsZUlkLCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgc3dpdGNoSWQ6ICh2OiBTd2l0Y2hJZCwgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICAgIGZyb21UbzogKHY6IEZyb21UbywgZTogKCkgPT4gRXJyb3IpID0+IHN0cmluZztcclxuICAgIG1hcFBvc2l0aW9uOiAodjogTWFwUG9zaXRpb24sIGU6ICgpID0+IEVycm9yKSA9PiBzdHJpbmc7XHJcbiAgICBzb3VuZDogKHY6IFNvdW5kLCBlOiAoKSA9PiBFcnJvcikgPT4gc3RyaW5nO1xyXG4gICAgY29sb3I6ICh2OiBDb2xvcjMgfCBDb2xvcjQsIGU6ICgpID0+IEVycm9yKSA9PiBzdHJpbmc7XHJcbiAgfT5cclxuKSA9PiB7XHJcbiAgY29uc3QgZSA9ICgpID0+IG5ldyBFcnJvcihcIuOCteODneODvOODiOOBleOCjOOBpuOBhOOBquOBhOWei+OBp+OBmVwiKTtcclxuICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIgJiYgY2FzZXMubnVtYmVyKSByZXR1cm4gY2FzZXMubnVtYmVyKHYsIGUpO1xyXG4gIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiAmJiBjYXNlcy5zdHJpbmcpIHJldHVybiBjYXNlcy5zdHJpbmcodiwgZSk7XHJcbiAgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICBpZiAoY2FzZXMub2JqZWN0KSByZXR1cm4gY2FzZXMub2JqZWN0KHYsIGUpO1xyXG4gICAgaWYgKFwidmFyaWFibGVJZFwiIGluIHYgJiYgY2FzZXMudmFyaWFibGVJZCkgcmV0dXJuIGNhc2VzLnZhcmlhYmxlSWQodiwgZSk7XHJcbiAgICBpZiAoXCJzd2l0Y2hJZFwiIGluIHYgJiYgY2FzZXMuc3dpdGNoSWQpIHJldHVybiBjYXNlcy5zd2l0Y2hJZCh2LCBlKTtcclxuICAgIGlmIChcImZyb21cIiBpbiB2ICYmIFwidG9cIiBpbiB2ICYmIGNhc2VzLmZyb21UbykgcmV0dXJuIGNhc2VzLmZyb21Ubyh2LCBlKTtcclxuICAgIGlmIChcImlkXCIgaW4gdiAmJiBcInhcIiBpbiB2ICYmIFwieVwiIGluIHYgJiYgY2FzZXMubWFwUG9zaXRpb24pXHJcbiAgICAgIHJldHVybiBjYXNlcy5tYXBQb3NpdGlvbih2LCBlKTtcclxuICAgIGlmIChcclxuICAgICAgXCJuYW1lXCIgaW4gdiAmJlxyXG4gICAgICBcInZvbHVtZVwiIGluIHYgJiZcclxuICAgICAgXCJwaXRjaFwiIGluIHYgJiZcclxuICAgICAgXCJwYW5cIiBpbiB2ICYmXHJcbiAgICAgIGNhc2VzLnNvdW5kXHJcbiAgICApXHJcbiAgICAgIHJldHVybiBjYXNlcy5zb3VuZCh2LCBlKTtcclxuICAgIGlmIChcInJcIiBpbiB2ICYmIFwiZ1wiIGluIHYgJiYgXCJiXCIgaW4gdiAmJiBjYXNlcy5jb2xvcilcclxuICAgICAgcmV0dXJuIGNhc2VzLmNvbG9yKHYsIGUpO1xyXG4gIH1cclxuICB0aHJvdyBlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXJnSW50ID0gKHY6IG51bWJlcikgPT4ge1xyXG4gIGlmICh2ICUgMSAhPT0gMCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGDlgKTjga/mlbTmlbDjgafjgYLjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJgKTtcclxuICB9XHJcbiAgcmV0dXJuIHY7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhcmdSYW5nZSA9ICh2OiBudW1iZXIsIHJhbmdlOiBGcm9tVG8pID0+IHtcclxuICBhcmdJbnQodik7XHJcbiAgaWYgKCEocmFuZ2UuZnJvbSA8PSB2ICYmIHYgPD0gcmFuZ2UudG8pKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGDlgKTjga8gJHtyYW5nZS5mcm9tfSDvvZ4gJHtyYW5nZS50b30g44Gu6ZaT44Gu5YCk44Gn44GC44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCYFxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIHY7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhcmdJZCA9ICh2OiBudW1iZXIpID0+IGFyZ1JhbmdlKHYsIHsgZnJvbTogMSwgdG86IEluZmluaXR5IH0pO1xyXG5leHBvcnQgY29uc3QgYXJnRW5lbXlJbmRleCA9ICh2OiBudW1iZXIpID0+IGFyZ1JhbmdlKHYsIHsgZnJvbTogMSwgdG86IDggfSk7XHJcbmV4cG9ydCBjb25zdCBhcmdQcmVzZXQgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHY6IHN0cmluZyxcclxuICBwcmVzZXQ6IFBcclxuKSA9PiBwcmVzZXRbdl07XHJcbmV4cG9ydCBjb25zdCBhcmdTd2l0Y2hJZCA9ICh2YWx1ZTogU3dpdGNoSWQpID0+IGBTV1ske3ZhbHVlLnN3aXRjaElkfV1gO1xyXG5leHBvcnQgY29uc3QgYXJnVmFyaWFibGVJZCA9ICh2YWx1ZTogVmFyaWFibGVJZCkgPT4gYFZbJHt2YWx1ZS52YXJpYWJsZUlkfV1gO1xyXG5leHBvcnQgY29uc3QgYXJnRnJvbVRvID0gKHZhbHVlOiBGcm9tVG8pID0+IGAke3ZhbHVlLmZyb219LSR7dmFsdWUudG99YDtcclxuZXhwb3J0IGNvbnN0IGFyZ3NDb2xvciA9IChjb2xvcjogQ29sb3IzIHwgQ29sb3I0KSA9PlxyXG4gIGBDb2xvclRvbmVbJHtjb2xvci5yfV1bJHtjb2xvci5nfV1bJHtjb2xvci5ifV0ke1xyXG4gICAgKGNvbG9yIGFzIENvbG9yNCk/LnggPyBgWyR7KGNvbG9yIGFzIENvbG9yNCkueH1dYCA6IFwiXCJcclxuICB9YDtcclxuZXhwb3J0IGNvbnN0IGFyZ3NTb3VuZCA9IChzb3VuZDogU291bmQpID0+XHJcbiAgam9pbktlZXAobnVsbCwgW3NvdW5kLm5hbWUgPz8gXCJOb25lXCIsIHNvdW5kLnZvbHVtZSwgc291bmQucGl0Y2gsIHNvdW5kLnBhbl0pO1xyXG5leHBvcnQgY29uc3QgYXJnTWFwUG9zaXRpb24gPSAobWFwb3M6IE1hcFBvc2l0aW9uLCBtb2RlOiBEaXJlY3RPclZhcmlhYmxlcykgPT5cclxuICBgJHttb2RlID09PSBcIkRJUkVDVFwiID8gXCJEaXJlY3RcIiA6IFwiV2l0aFZhcmlhYmxlc1wifVske21hcG9zLmlkfV1bJHttYXBvcy54fV1bJHtcclxuICAgIG1hcG9zLnlcclxuICB9XWA7XHJcbmV4cG9ydCBjb25zdCBhcmdDb2xvclRvbmUgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHZhbHVlOiBrZXlvZiBQIHwgQ29sb3I0XHJcbikgPT5cclxuICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCJcclxuICAgID8gYENvbG9yVG9uZVske3ZhbHVlLnJ9XVske3ZhbHVlLmd9XVske3ZhbHVlLmJ9XVske3ZhbHVlLnh9XWBcclxuICAgIDogYXJnUHJlc2V0KHZhbHVlIGFzIHN0cmluZywgQ09MT1JfVE9ORSk7XHJcblxyXG5leHBvcnQgY29uc3QgYXJnSW50T3JWYXJpYWJsZUlkID0gKHY6IG51bWJlciB8IFZhcmlhYmxlSWQpID0+XHJcbiAgdHlwZUNhc2Uodiwge1xyXG4gICAgdmFyaWFibGVJZDogYXJnVmFyaWFibGVJZCxcclxuICAgIG51bWJlcjogKHgpID0+IHgsXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJlc2V0QXJnID0gPFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihcclxuICBwcmVzZXQ6IFBcclxuKSA9PiB7XHJcbiAgcmV0dXJuICh2OiBBcmdWYWx1ZSkgPT5cclxuICAgIHR5cGVvZiB2ID09PSBcInN0cmluZ1wiID8gYXJnUHJlc2V0KHYsIHByZXNldCkgOiBhcmdJZCh2IGFzIG51bWJlcik7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQcmVzZXRBcmdXaXRoVmFyaWFibGVJZCA9XHJcbiAgPFAgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PihwcmVzZXQ6IFAsIHJhbmdlPzogRnJvbVRvKSA9PlxyXG4gICh2OiBBcmdWYWx1ZSkgPT5cclxuICAgIHR5cGVDYXNlKHYsIHtcclxuICAgICAgc3RyaW5nOiAoeCkgPT4gYXJnUHJlc2V0KHgsIHByZXNldCksXHJcbiAgICAgIHZhcmlhYmxlSWQ6IGFyZ1ZhcmlhYmxlSWQsXHJcbiAgICAgIG51bWJlcjogKHgpID0+IChyYW5nZSA/IGFyZ1JhbmdlKHgsIHJhbmdlKSA6IGFyZ0lkKHgpKSxcclxuICAgIH0pO1xyXG4iLCJpbXBvcnQgeyBBQ1RFUl9QQVJBTUVURVIsIEFDVE9SX01FTUJFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ3JlYXNlT3BlcmF0b3IsIFZhcmlhYmxlSWQgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFyZ0lkLFxyXG4gIGFyZ0ludE9yVmFyaWFibGVJZCxcclxuICBhcmdQcmVzZXQsXHJcbiAgY3JlYXRlUHJlc2V0QXJnV2l0aFZhcmlhYmxlSWQsXHJcbiAgdGFnLFxyXG59IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuY29uc3QgYXJnQWN0b3JJZFdpdGhQcmVzZXQgPSBjcmVhdGVQcmVzZXRBcmdXaXRoVmFyaWFibGVJZChBQ1RPUl9NRU1CRVIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUhwID0gKFxyXG4gIGlkOiBrZXlvZiB0eXBlb2YgQUNUT1JfTUVNQkVSIHwgbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICBvcDogQ3JlYXNlT3BlcmF0b3IsXHJcbiAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWQsXHJcbiAgYWxsb3dLbm9ja291dD86IGJvb2xlYW5cclxuKSA9PlxyXG4gIHRhZyhcIkNoYW5nZUhwXCIsIFtcclxuICAgIGFyZ0FjdG9ySWRXaXRoUHJlc2V0KGlkKSxcclxuICAgIG9wLFxyXG4gICAgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKSxcclxuICAgIGFsbG93S25vY2tvdXQsXHJcbiAgXSk7XHJcblxyXG5jb25zdCBjb21tb25DaGFuZ2UgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKFxyXG4gICAgaWQ6IGtleW9mIHR5cGVvZiBBQ1RPUl9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gICAgb3A6IENyZWFzZU9wZXJhdG9yLFxyXG4gICAgdmFsdWU6IG51bWJlciB8IFZhcmlhYmxlSWRcclxuICApID0+IHRhZyhuYW1lLCBbYXJnQWN0b3JJZFdpdGhQcmVzZXQoaWQpLCBvcCwgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKV0pO1xyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VNcCA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZU1wXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlVHAgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VUcFwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZVN0YXRlID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlU3RhdGVcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VTa2lsbCA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZVNraWxsXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlY292ZXJBbGwgPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBBQ1RPUl9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkXHJcbikgPT4gdGFnKFwiUmVjb3ZlckFsbFwiLCBbYXJnQWN0b3JJZFdpdGhQcmVzZXQoaWQpXSk7XHJcblxyXG5jb25zdCBjb21tb25MZXZlbFVwID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChcclxuICAgIGlkOiBrZXlvZiB0eXBlb2YgQUNUT1JfTUVNQkVSIHwgbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICAgIG9wOiBDcmVhc2VPcGVyYXRvcixcclxuICAgIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gICAgYWxsb3dMZXZlbFVwPzogYm9vbGVhblxyXG4gICkgPT5cclxuICAgIHRhZyhuYW1lLCBbXHJcbiAgICAgIGFyZ0FjdG9ySWRXaXRoUHJlc2V0KGlkKSxcclxuICAgICAgb3AsXHJcbiAgICAgIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSksXHJcbiAgICAgIGFsbG93TGV2ZWxVcCxcclxuICAgIF0pO1xyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VFeHAgPSBjb21tb25MZXZlbFVwKFwiQ2hhbmdlRXhwXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlTGV2ZWwgPSBjb21tb25MZXZlbFVwKFwiQ2hhbmdlTGV2ZWxcIik7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlUGFyYW1ldGVyID0gKFxyXG4gIGlkOiBrZXlvZiB0eXBlb2YgQUNUT1JfTUVNQkVSIHwgbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICBwYXJhbWV0ZXI6IGtleW9mIHR5cGVvZiBBQ1RFUl9QQVJBTUVURVIsXHJcbiAgb3A6IENyZWFzZU9wZXJhdG9yLFxyXG4gIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkXHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VQYXJhbWV0ZXJcIiwgW1xyXG4gICAgYXJnQWN0b3JJZFdpdGhQcmVzZXQoaWQpLFxyXG4gICAgYXJnUHJlc2V0KHBhcmFtZXRlciwgQUNURVJfUEFSQU1FVEVSKSxcclxuICAgIG9wLFxyXG4gICAgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VFcXVpcG1lbnQgPSAoXHJcbiAgaWQ6IG51bWJlcixcclxuICBlcXVpcFR5cGU6IG51bWJlcixcclxuICBlcXVpcElkPzogbnVtYmVyXHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VFcXVpcG1lbnRcIiwgW1xyXG4gICAgYXJnSWQoaWQpLFxyXG4gICAgYXJnSWQoZXF1aXBUeXBlKSxcclxuICAgIGVxdWlwSWQgJiYgYXJnSWQoZXF1aXBJZCksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlTmFtZSA9IChpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpID0+XHJcbiAgdGFnKFwiQ2hhbmdlTmFtZVwiLCBbYXJnSWQoaWQpLCBuYW1lXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlQ2xhc3MgPSAoXHJcbiAgaWQ6IG51bWJlcixcclxuICBjbGFzc0lkOiBudW1iZXIsXHJcbiAgc2F2ZUxldmVsQW5kRXhwPzogYm9vbGVhblxyXG4pID0+IHRhZyhcIkNoYW5nZUNsYXNzXCIsIFthcmdJZChpZCksIGFyZ0lkKGNsYXNzSWQpLCBzYXZlTGV2ZWxBbmRFeHBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VOaWNrbmFtZSA9IChpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpID0+XHJcbiAgdGFnKFwiQ2hhbmdlTmlja25hbWVcIiwgW2FyZ0lkKGlkKSwgbmFtZV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZVByb2ZpbGUgPSAoaWQ6IG51bWJlciwgcHJvZmlsZTogW3N0cmluZywgc3RyaW5nXSkgPT5cclxuICB0YWcoXCJDaGFuZ2VQcm9maWxlXCIsIFthcmdJZChpZCksIHByb2ZpbGVbMF0sIHByb2ZpbGVbMV1dKTtcclxuIiwiaW1wb3J0IHsgQUNUSU9OX1RBUkdFVCwgRU5FTVlfTUVNQkVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDcmVhc2VPcGVyYXRvciwgVmFyaWFibGVJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnRW5lbXlJbmRleCxcclxuICBhcmdJZCxcclxuICBhcmdJbnRPclZhcmlhYmxlSWQsXHJcbiAgYXJnUHJlc2V0LFxyXG4gIGFyZ1JhbmdlLFxyXG4gIGNyZWF0ZVByZXNldEFyZ1dpdGhWYXJpYWJsZUlkLFxyXG4gIHRhZyxcclxuICB0eXBlQ2FzZSxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ0VuZW15SW5kZXhXaXRoUHJlc2V0ID0gY3JlYXRlUHJlc2V0QXJnV2l0aFZhcmlhYmxlSWQoRU5FTVlfTUVNQkVSKTtcclxuY29uc3QgYXJnRW5lbXlJbmRleFdpdGhQcmVzZXRBbmRWYXJpYWJsZUlkID0gY3JlYXRlUHJlc2V0QXJnV2l0aFZhcmlhYmxlSWQoXHJcbiAgRU5FTVlfTUVNQkVSLFxyXG4gIHsgZnJvbTogMSwgdG86IDggfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUVuZW15SHAgPSAoXHJcbiAgaW5kZXg6IGtleW9mIHR5cGVvZiBFTkVNWV9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkLFxyXG4gIG9wOiBDcmVhc2VPcGVyYXRvcixcclxuICB2YWx1ZTogbnVtYmVyIHwgVmFyaWFibGVJZCxcclxuICBhbGxvd0tub2Nrb3V0PzogYm9vbGVhblxyXG4pID0+XHJcbiAgdGFnKFwiQ2hhbmdlRW5lbXlIcFwiLCBbXHJcbiAgICBhcmdFbmVteUluZGV4V2l0aFByZXNldEFuZFZhcmlhYmxlSWQoaW5kZXgpLFxyXG4gICAgb3AsXHJcbiAgICBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLFxyXG4gICAgYWxsb3dLbm9ja291dCxcclxuICBdKTtcclxuXHJcbmNvbnN0IGNvbW1vbkNoYW5nZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBjb21wb25lbnQgPSAoXHJcbiAgICBpbmRleDoga2V5b2YgdHlwZW9mIEVORU1ZX01FTUJFUiB8IG51bWJlciB8IFZhcmlhYmxlSWQsXHJcbiAgICBvcDogQ3JlYXNlT3BlcmF0b3IsXHJcbiAgICB2YWx1ZTogbnVtYmVyIHwgVmFyaWFibGVJZFxyXG4gICkgPT5cclxuICAgIHRhZyhuYW1lLCBbXHJcbiAgICAgIGFyZ0VuZW15SW5kZXhXaXRoUHJlc2V0QW5kVmFyaWFibGVJZChpbmRleCksXHJcbiAgICAgIG9wLFxyXG4gICAgICBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLFxyXG4gICAgXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZUVuZW15TXAgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VFbmVteU1wXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlRW5lbXlUcCA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZUVuZW15VHBcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VFbmVteVN0YXRlID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlRW5lbXlTdGF0ZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBFbmVteVJlY292ZXJBbGwgPSAoXHJcbiAgaW5kZXg6IGtleW9mIHR5cGVvZiBFTkVNWV9NRU1CRVIgfCBudW1iZXIgfCBWYXJpYWJsZUlkXHJcbikgPT4gdGFnKFwiRW5lbXlSZWNvdmVyQWxsXCIsIFthcmdFbmVteUluZGV4V2l0aFByZXNldEFuZFZhcmlhYmxlSWQoaW5kZXgpXSk7XHJcblxyXG5leHBvcnQgY29uc3QgRW5lbXlBcHBlYXIgPSAoaW5kZXg6IGtleW9mIHR5cGVvZiBFTkVNWV9NRU1CRVIgfCBudW1iZXIpID0+XHJcbiAgdGFnKFwiRW5lbXlBcHBlYXJcIiwgW2FyZ0VuZW15SW5kZXhXaXRoUHJlc2V0KGluZGV4KV0pO1xyXG5cclxuY29uc3QgY29tbW9uSW5kZXhBbmRFbmVteUlkID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChpbmRleDogbnVtYmVyLCBpZDogbnVtYmVyKSA9PlxyXG4gICAgdGFnKG5hbWUsIFthcmdFbmVteUluZGV4KGluZGV4KSwgYXJnSWQoaWQpXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IEVuZW15VHJhbnNmb3JtID0gY29tbW9uSW5kZXhBbmRFbmVteUlkKFwiRW5lbXlUcmFuc2Zvcm1cIik7XHJcbmV4cG9ydCBjb25zdCBTaG93QmF0dGxlQW5pbWF0aW9uID0gY29tbW9uSW5kZXhBbmRFbmVteUlkKFwiU2hvd0JhdHRsZUFuaW1hdGlvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JjZUFjdGlvbiA9IChcclxuICBtb2RlOiBcIkVORU1ZXCIgfCBcIkFDVE9SXCIsXHJcbiAgaW5kZXg6IG51bWJlcixcclxuICBpZDogbnVtYmVyLFxyXG4gIHRhcmdldDoga2V5b2YgdHlwZW9mIEFDVElPTl9UQVJHRVQgfCBudW1iZXJcclxuKSA9PlxyXG4gIHRhZyhcIkZvcmNlQWN0aW9uXCIsIFtcclxuICAgIHR5cGVDYXNlKGluZGV4LCB7XHJcbiAgICAgIG51bWJlcjogKHgpID0+XHJcbiAgICAgICAgbW9kZSA9PT0gXCJBQ1RPUlwiID8gYEFjdG9yWyR7YXJnSWQoeCl9XWAgOiBhcmdFbmVteUluZGV4KHgpLFxyXG4gICAgfSksXHJcbiAgICBhcmdJZChpZCksXHJcbiAgICB0eXBlQ2FzZSh0YXJnZXQsIHtcclxuICAgICAgc3RyaW5nOiAoeCkgPT4gYXJnUHJlc2V0KHgsIEFDVElPTl9UQVJHRVQpLFxyXG4gICAgICBudW1iZXI6ICh4KSA9PiBgSW5kZXggJHthcmdSYW5nZSh4LCB7IGZyb206IDEsIHRvOiA4IH0pfWAsXHJcbiAgICB9KSxcclxuICBdKTtcclxuIiwiaW1wb3J0IHsgQkFMTE9PTiwgQ0hBUkFDVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBhcmdJZCwgYXJnUHJlc2V0LCB0YWcsIHR5cGVDYXNlIH0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5jb25zdCBhcmdOdW1iZXJQcmVzZXQgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHY6IG51bWJlciB8IHN0cmluZyxcclxuICBwcmVzZXQ6IFBcclxuKSA9PlxyXG4gIHR5cGVDYXNlKHYsIHtcclxuICAgIHN0cmluZzogKHgpID0+IGFyZ1ByZXNldCh4LCBwcmVzZXQpLFxyXG4gICAgbnVtYmVyOiBhcmdJZCxcclxuICB9KTtcclxuXHJcbmNvbnN0IGNvbW1vbkNoYW5nZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBjb21wb25lbnQgPSAoYWN0aXZlOiBib29sZWFuKSA9PiB0YWcobmFtZSwgW2FjdGl2ZV0pO1xyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VUcmFuc3BhcmVuY3kgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VUcmFuc3BhcmVuY3lcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VQbGF5ZXJGb2xsb3dlcnMgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VQbGF5ZXJGb2xsb3dlcnNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgR2F0aGVyRm9sbG93ZXJzID0gKCkgPT4gdGFnKFwiR2F0aGVyRm9sbG93ZXJzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dBbmltYXRpb24gPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIsXHJcbiAgYW5pbWF0aW9uSWQ6IG51bWJlcixcclxuICB3YWl0PzogYm9vbGVhblxyXG4pID0+XHJcbiAgdGFnKFwiU2hvd0FuaW1hdGlvblwiLCBbXHJcbiAgICBhcmdOdW1iZXJQcmVzZXQoaWQsIENIQVJBQ1RFUiksXHJcbiAgICBhcmdJZChhbmltYXRpb25JZCksXHJcbiAgICB3YWl0LFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dCYWxsb29uSWNvbiA9IChcclxuICBpZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcixcclxuICBiYWxsb29uOiBrZXlvZiB0eXBlb2YgQkFMTE9PTixcclxuICB3YWl0PzogYm9vbGVhblxyXG4pID0+XHJcbiAgdGFnKFwiU2hvd0JhbGxvb25JY29uXCIsIFtcclxuICAgIGFyZ051bWJlclByZXNldChpZCwgQ0hBUkFDVEVSKSxcclxuICAgIGFyZ1ByZXNldChiYWxsb29uLCBCQUxMT09OKSxcclxuICAgIHdhaXQsXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgRXJhc2VFdmVudCA9ICgpID0+IHRhZyhcIkVyYXNlRXZlbnRcIik7XHJcbiIsImltcG9ydCB7IGFyZ0lkLCBqb2luU2tpcCwgdGFnIH0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2sgPSAoY29uZGl0aW9uOiBzdHJpbmcsIHRoZW46IHN0cmluZywgb3RoZXJ3aXNlPzogc3RyaW5nKSA9PlxyXG4gIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgIHRhZyhcIklmXCIsIFtcIlNjcmlwdFwiLCBjb25kaXRpb25dKSxcclxuICAgIHRoZW4sXHJcbiAgICAuLi4ob3RoZXJ3aXNlID8gam9pblNraXAoXCJcXG5cIiwgW3RhZyhcIkVsc2VcIiksIG90aGVyd2lzZV0pIDogW10pLFxyXG4gICAgdGFnKFwiRW5kXCIpLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvb3AgPSAoY29udGVudDogc3RyaW5nKSA9PlxyXG4gIGpvaW5Ta2lwKFwiXFxuXCIsIFt0YWcoXCJMb29wXCIpLCBjb250ZW50LCB0YWcoXCJSZXBlYXRBYm92ZVwiKV0pO1xyXG5leHBvcnQgY29uc3QgTG9vcEJyZWFrID0gKCkgPT4gdGFnKFwiQnJlYWtMb29wXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4aXRFdmVudFByb2Nlc3NpbmcgPSAoKSA9PiB0YWcoXCJFeGl0RXZlbnRQcm9jZXNzaW5nXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1vbkV2ZW50ID0gKGlkOiBudW1iZXIpID0+IHRhZyhcIkNvbW1vbkV2ZW50XCIsIFthcmdJZChpZCldKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYWJlbCA9IChuYW1lOiBzdHJpbmcpID0+IHRhZyhcIkxhYmVsXCIsIFtuYW1lXSk7XHJcbmV4cG9ydCBjb25zdCBHb3RvID0gKG5hbWU6IHN0cmluZykgPT4gdGFnKFwiSnVtcFRvTGFiZWxcIiwgW25hbWVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50ID0gKHRleHQ6IHN0cmluZykgPT4gdGFnKFwiQ29tbWVudFwiLCB1bmRlZmluZWQsIHRleHQpO1xyXG4iLCJpbXBvcnQgeyBhcmdJbnQsIHRhZyB9IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5pbXBvcnQgKiBhcyBybW16R2xvYmFsIGZyb20gXCIuLi9nbG9iYWxUaGlzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgV2FpdCA9ICh0aW1lOiBudW1iZXIpID0+IHRhZyhcIldhaXRcIiwgW2FyZ0ludCh0aW1lKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcmlwdCA9IChjb2RlOiAoZ2xvYmFsVGhpczogdHlwZW9mIHJtbXpHbG9iYWwpID0+IHVua25vd24pID0+IHtcclxuICBjb25zdCBtYXRjaCA9IGNvZGUudG9TdHJpbmcoKS5tYXRjaCgvXFx7KFtcXHNcXFNdKilcXH0vKTtcclxuICByZXR1cm4gdGFnKFwiU2NyaXB0XCIsIHVuZGVmaW5lZCwgbWF0Y2ggPyBtYXRjaFsxXS50cmltKCkgOiBcIlwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbHVnaW5Db21tYW5kTVYgPSAoY29tbWFuZDogc3RyaW5nKSA9PlxyXG4gIHRhZyhcIlBsdWdpbkNvbW1hbmRcIiwgW2NvbW1hbmRdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQbHVnaW5Db21tYW5kTVogPSAoXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIG1ldGhvZDogc3RyaW5nLFxyXG4gIGNvbW1hbmQ6IHN0cmluZyxcclxuICBhcmdzOiB7IG5hbWU6IHN0cmluZzsgdmFsdWU6IGFueSB9W11cclxuKSA9PlxyXG4gIHRhZyhcIlBsdWdpbkNvbW1hbmRNWlwiLCBbXHJcbiAgICBuYW1lLFxyXG4gICAgbWV0aG9kLFxyXG4gICAgY29tbWFuZCxcclxuICAgIC4uLmFyZ3MubWFwKCh4KSA9PiBgJHt4Lm5hbWV9WyR7eC52YWx1ZX1dYCksXHJcbiAgXSk7XHJcbiIsImltcG9ydCB7IENIQVJBQ1RFUiwgTE9DQVRJT04gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFZhcmlhYmxlSWQgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFyZ0lkLFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdWYXJpYWJsZUlkLFxyXG4gIHRhZyxcclxuICB0eXBlQ2FzZSxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VNYXBOYW1lRGlzcGxheSA9IChhbGxvdzogYm9vbGVhbikgPT5cclxuICB0YWcoXCJDaGFuZ2VNYXBOYW1lRGlzcGxheVwiLCBbYWxsb3ddKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VUaWxlc2V0ID0gKGlkOiBudW1iZXIpID0+IHRhZyhcIkNoYW5nZVRpbGVzZXRcIiwgW2FyZ0lkKGlkKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZUJhdHRsZUJhY2tHcm91bmQgPSAoaW1hZ2VzOiBbc3RyaW5nPywgc3RyaW5nP10pID0+XHJcbiAgdGFnKFwiQ2hhbmdlQmF0dGxlQmFja0dyb3VuZFwiLCBbaW1hZ2VzWzBdID8/IFwiTm9uZVwiLCBpbWFnZXNbMV0gPz8gXCJOb25lXCJdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VQYXJhbGxheCA9IChcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgc2Nyb2xsOiB7IHg/OiBudW1iZXI7IHk/OiBudW1iZXIgfVxyXG4pID0+XHJcbiAgdGFnKFwiQ2hhbmdlUGFyYWxsYXhcIiwgW1xyXG4gICAgbmFtZSxcclxuICAgIHNjcm9sbC54ICYmXHJcbiAgICAgIGBMb29wSG9yaXpvbnRhbGx5WyR7YXJnUmFuZ2Uoc2Nyb2xsLngsIHsgZnJvbTogLTMyLCB0bzogMzIgfSl9XWAsXHJcbiAgICBzY3JvbGwueSAmJiBgTG9vcFZlcnRpY2FsbHlbJHthcmdSYW5nZShzY3JvbGwueSwgeyBmcm9tOiAtMzIsIHRvOiAzMiB9KX1dYCxcclxuICBdKTtcclxuXHJcbnR5cGUgUG9zaXRpb25UeXBlID0geyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgeyB4OiBWYXJpYWJsZUlkOyB5OiBWYXJpYWJsZUlkIH07XHJcbmV4cG9ydCBjb25zdCBHZXRMb2NhdGlvbkluZm8gPSAoXHJcbiAgdmFyaWFibGVJZDogbnVtYmVyLFxyXG4gIGxheWVyOiBrZXlvZiB0eXBlb2YgTE9DQVRJT04sXHJcbiAgcG9zaXRpb246IFBvc2l0aW9uVHlwZSB8IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXJcclxuKSA9PlxyXG4gIHRhZyhcIkdldExvY2F0aW9uSW5mb1wiLCBbXHJcbiAgICBhcmdJZCh2YXJpYWJsZUlkKSxcclxuICAgIGFyZ1ByZXNldChsYXllciwgTE9DQVRJT04pLFxyXG4gICAgdHlwZUNhc2UocG9zaXRpb24sIHtcclxuICAgICAgb2JqZWN0OiAodmFsdWUsIGUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUgYXMgUG9zaXRpb25UeXBlO1xyXG4gICAgICAgIGlmIChcInhcIiBpbiB2ICYmIFwieVwiIGluIHYpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygdi54ID09PSBcIm51bWJlclwiKSByZXR1cm4gYERpcmVjdFske3YueH1dWyR7di55fV1gO1xyXG4gICAgICAgICAgaWYgKHYueC52YXJpYWJsZUlkKSByZXR1cm4gYFdpdGhWYXJpYWJsZXNbJHt2Lnh9XVske3YueX1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZSgpO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSk7XHJcbiIsImltcG9ydCB7IFNvdW5kIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHsgYXJnSW50LCBhcmdzU291bmQsIHRhZyB9IGZyb20gXCIuLi92YWxpZGF0ZVwiO1xyXG5cclxuY29uc3QgY29tbW9uU291bmQgPSAobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gKHNvdW5kOiBTb3VuZCkgPT4gdGFnKG5hbWUsIFthcmdzU291bmQoc291bmQpXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IFBsYXlCR00gPSBjb21tb25Tb3VuZChcIlBsYXlCR01cIik7XHJcbmV4cG9ydCBjb25zdCBQbGF5QkdTID0gY29tbW9uU291bmQoXCJQbGF5QkdTXCIpO1xyXG5leHBvcnQgY29uc3QgUGxheU1FID0gY29tbW9uU291bmQoXCJQbGF5TUVcIik7XHJcbmV4cG9ydCBjb25zdCBQbGF5U0UgPSBjb21tb25Tb3VuZChcIlBsYXlTRVwiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZUJhdHRsZUJHTSA9IGNvbW1vblNvdW5kKFwiQ2hhbmdlQmF0dGxlQkdNXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlVmljdG9yeU1lID0gY29tbW9uU291bmQoXCJDaGFuZ2VWaWN0b3J5TWVcIik7XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VEZWZlYXRNZSA9IGNvbW1vblNvdW5kKFwiQ2hhbmdlRGVmZWF0TWVcIik7XHJcblxyXG5jb25zdCBjb21tb25GYWRlb3V0ID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9ICh0aW1lOiBudW1iZXIpID0+IHRhZyhuYW1lLCBbYXJnSW50KHRpbWUpXSk7XHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufTtcclxuZXhwb3J0IGNvbnN0IEZhZGVvdXRCR00gPSBjb21tb25GYWRlb3V0KFwiRmFkZW91dEJHTVwiKTtcclxuZXhwb3J0IGNvbnN0IEZhZGVvdXRCR1MgPSBjb21tb25GYWRlb3V0KFwiRmFkZW91dEJHU1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTYXZlQkdNID0gKCkgPT4gdGFnKFwiU2F2ZUJHTVwiKTtcclxuZXhwb3J0IGNvbnN0IFN0b3BCR00gPSAoKSA9PiB0YWcoXCJTdG9wQkdNXCIpO1xyXG5leHBvcnQgY29uc3QgUmVwbGF5QkdNID0gKCkgPT4gdGFnKFwiUmVwbGF5QkdNXCIpO1xyXG5leHBvcnQgY29uc3QgU3RvcEJHUyA9ICgpID0+IHRhZyhcIlN0b3BCR1NcIik7XHJcbmV4cG9ydCBjb25zdCBTdG9wTUUgPSAoKSA9PiB0YWcoXCJTdG9wTUVcIik7XHJcbmV4cG9ydCBjb25zdCBTdG9wU0UgPSAoKSA9PiB0YWcoXCJTdG9wU0VcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUGxheU1vdmllID0gKG5hbWU6IHN0cmluZykgPT4gdGFnKFwiUGxheU1vdmllXCIsIFtuYW1lXSk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ0hPSUNFU19DQU5DRUwsXHJcbiAgQ0hPSUNFU19JTklULFxyXG4gIElURU1fVFlQRSxcclxuICBXSU5ET1dfQkFDS0dST1VORCxcclxuICBXSU5ET1dfUE9TSVRJT05fSE9SSVpPTlRBTCxcclxuICBXSU5ET1dfUE9TSVRJT05fVkVSVElDQUwsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFyZ0lkLFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdWYXJpYWJsZUlkLFxyXG4gIGpvaW5Ta2lwLFxyXG4gIHRhZyxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ0Nob2ljZXMgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHZhbHVlOiBrZXlvZiBQIHwgbnVtYmVyLFxyXG4gIHByZXNldDogUFxyXG4pID0+XHJcbiAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiXHJcbiAgICA/IGFyZ1JhbmdlKHZhbHVlLCB7IGZyb206IDEsIHRvOiA2IH0pXHJcbiAgICA6IGFyZ1ByZXNldCh2YWx1ZSBhcyBzdHJpbmcsIHByZXNldCk7XHJcblxyXG5leHBvcnQgY29uc3QgV2luZG93ID0gKHtcclxuICBmYWNlLFxyXG4gIHBvc2l0aW9uLFxyXG4gIGJhY2tncm91bmQsXHJcbiAgbmFtZSxcclxufToge1xyXG4gIGJhY2tncm91bmQ/OiBrZXlvZiB0eXBlb2YgV0lORE9XX0JBQ0tHUk9VTkQ7XHJcbiAgcG9zaXRpb24/OiBrZXlvZiB0eXBlb2YgV0lORE9XX1BPU0lUSU9OX1ZFUlRJQ0FMO1xyXG4gIGZhY2U/OiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9O1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbn0pID0+XHJcbiAgam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgYmFja2dyb3VuZCAmJiB0YWcoXCJCYWNrZ3JvdW5kXCIsIFtiYWNrZ3JvdW5kXSksXHJcbiAgICBwb3NpdGlvbiAmJiB0YWcoXCJXaW5kb3dQb3NpdGlvblwiLCBbcG9zaXRpb25dKSxcclxuICAgIGZhY2UgJiZcclxuICAgICAgdGFnKFwiRmFjZVwiLCBbXHJcbiAgICAgICAgYCR7ZmFjZS5uYW1lfSgke2FyZ1JhbmdlKGZhY2UuaW5kZXgsIHsgZnJvbTogMCwgdG86IDE1IH0pfSlgLFxyXG4gICAgICBdKSxcclxuICAgIG5hbWUgJiYgdGFnKFwiTmFtZVwiLCBbbmFtZV0pLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dDaG9pY2VzID0gKFxyXG4gIGNhc2VzOiB7XHJcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgdGhlbjogc3RyaW5nO1xyXG4gIH1bXSxcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgcG9zaXRpb24sXHJcbiAgICBpbml0LFxyXG4gICAgY2FuY2VsLFxyXG4gIH06IHtcclxuICAgIGJhY2tncm91bmQ/OiBrZXlvZiB0eXBlb2YgV0lORE9XX0JBQ0tHUk9VTkQ7XHJcbiAgICBwb3NpdGlvbj86IGtleW9mIHR5cGVvZiBXSU5ET1dfUE9TSVRJT05fSE9SSVpPTlRBTDtcclxuICAgIGluaXQ/OiBrZXlvZiB0eXBlb2YgQ0hPSUNFU19JTklUIHwgbnVtYmVyO1xyXG4gICAgY2FuY2VsPzoga2V5b2YgdHlwZW9mIENIT0lDRVNfQ0FOQ0VMIHwgbnVtYmVyO1xyXG4gIH1cclxuKSA9PiB7XHJcbiAgaWYgKGNhc2VzLmZpbHRlcigoY2FzZUl0ZW0pID0+IGNhc2VJdGVtLm5hbWUgPT09IG51bGwpLmxlbmd0aCA+PSAyKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwi44Kt44Oj44Oz44K744Or5omx44GE44Go44Gq44KLIG5hbWU9bnVsbCDjga/opIfmlbDoqK3lrprjgafjgY3jgb7jgZvjgpNcIik7XHJcbiAgcmV0dXJuIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgIHRhZyhcIlNob3dDaG9pY2VzXCIsIFtcclxuICAgICAgYmFja2dyb3VuZCAmJiBhcmdQcmVzZXQoYmFja2dyb3VuZCwgV0lORE9XX0JBQ0tHUk9VTkQpLFxyXG4gICAgICBwb3NpdGlvbiAmJiBhcmdQcmVzZXQocG9zaXRpb24sIFdJTkRPV19QT1NJVElPTl9IT1JJWk9OVEFMKSxcclxuICAgICAgaW5pdCAmJiBhcmdDaG9pY2VzKGluaXQsIENIT0lDRVNfSU5JVCksXHJcbiAgICAgIGNhbmNlbCAmJiBhcmdDaG9pY2VzKGNhbmNlbCwgQ0hPSUNFU19DQU5DRUwpLFxyXG4gICAgXSksXHJcbiAgICBqb2luU2tpcChcclxuICAgICAgXCJcXG5cIixcclxuICAgICAgY2FzZXMubWFwKCh7IG5hbWUsIHRoZW4gfSkgPT5cclxuICAgICAgICBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICAgICAgICBqb2luU2tpcChcIlxcblwiLCBbXHJcbiAgICAgICAgICAgIG5hbWUgPyB0YWcoXCJXaGVuXCIsIFtuYW1lXSkgOiB0YWcoXCJXaGVuQ2FuY2VsXCIpLFxyXG4gICAgICAgICAgICBqb2luU2tpcChcIlxcblwiLCBbdGhlbl0pLFxyXG4gICAgICAgICAgXSksXHJcbiAgICAgICAgXSlcclxuICAgICAgKVxyXG4gICAgKSxcclxuICAgIHRhZyhcIkVuZFwiKSxcclxuICBdKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dE51bWJlciA9ICh2YXJpYWJsZUlkOiBudW1iZXIsIGRpZ2l0OiBudW1iZXIpID0+XHJcbiAgdGFnKFwiSW5wdXROdW1iZXJcIiwgW2FyZ0lkKHZhcmlhYmxlSWQpLCBhcmdSYW5nZShkaWdpdCwgeyBmcm9tOiAxLCB0bzogOCB9KV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdEl0ZW0gPSAoXHJcbiAgdmFyaWFibGVJZDogbnVtYmVyLFxyXG4gIGl0ZW1UeXBlOiBrZXlvZiB0eXBlb2YgSVRFTV9UWVBFXHJcbikgPT4gdGFnKFwiU2VsZWN0SXRlbVwiLCBbYXJnSWQodmFyaWFibGVJZCksIGFyZ1ByZXNldChpdGVtVHlwZSwgSVRFTV9UWVBFKV0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNjcm9sbGluZ1RleHQgPSAoXHJcbiAgdGV4dDogc3RyaW5nLFxyXG4gIHsgc3BlZWQgPSAyLCBub1NraXAgfTogeyBzcGVlZD86IG51bWJlcjsgbm9Ta2lwPzogYm9vbGVhbiB9XHJcbikgPT4gdGFnKFwiU2Nyb2xsaW5nVGV4dFwiLCBbc3BlZWQsIG5vU2tpcF0sIHRleHQpO1xyXG4iLCJpbXBvcnQge1xyXG4gIEJMRU5EX01PREUsXHJcbiAgQ0hBUkFDVEVSLFxyXG4gIENIQVJBQ1RFUl9GUkVRLFxyXG4gIENIQVJBQ1RFUl9TUEVFRCxcclxuICBESVJFQ1RJT04sXHJcbiAgRElSRUNUSU9OX0NBUixcclxuICBESVJFQ1RJT05fTUVUSE9ELFxyXG4gIERJUkVDVElPTl9SRVRBSU4sXHJcbiAgRElSRUNUSU9OX1JPVVRFOCxcclxuICBESVJFQ1RJT05fVFVSTl9NRVRIT0QsXHJcbiAgRVZFTlQsXHJcbiAgRkFERSxcclxuICBWRUhJQ0xFLFxyXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgTWFwUG9zaXRpb24sIERpcmVjdE9yVmFyaWFibGVzLCBTb3VuZCwgU3dpdGNoSWQgfSBmcm9tIFwiLi4vdHlwZVwiO1xyXG5pbXBvcnQge1xyXG4gIGFyZ0lkLFxyXG4gIGFyZ0ludCxcclxuICBhcmdNYXBQb3NpdGlvbixcclxuICBhcmdQcmVzZXQsXHJcbiAgYXJnUmFuZ2UsXHJcbiAgYXJnU3dpdGNoSWQsXHJcbiAgYXJnc1NvdW5kLFxyXG4gIGpvaW5Ta2lwLFxyXG4gIHRhZyxcclxuICB0eXBlQ2FzZSxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmNvbnN0IGFyZ0lkT3JQcmVzZXQgPSA8UCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KFxyXG4gIHZhbHVlOiBrZXlvZiBQIHwgbnVtYmVyLFxyXG4gIHByZXNldDogUFxyXG4pID0+XHJcbiAgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiID8gYXJnSWQodmFsdWUpIDogYXJnUHJlc2V0KHZhbHVlIGFzIHN0cmluZywgcHJlc2V0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBUcmFuc2ZlclBsYXllciA9IChcclxuICBtb2RlOiBEaXJlY3RPclZhcmlhYmxlcyxcclxuICBwb3NpdGlvbjogTWFwUG9zaXRpb24sXHJcbiAgZGlyZWN0aW9uOiBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX1JFVEFJTixcclxuICBmYWRlOiBrZXlvZiB0eXBlb2YgRkFERVxyXG4pID0+XHJcbiAgdGFnKFwiVHJhbnNmZXJQbGF5ZXJcIiwgW1xyXG4gICAgYXJnTWFwUG9zaXRpb24ocG9zaXRpb24sIG1vZGUpLFxyXG4gICAgYXJnUHJlc2V0KGRpcmVjdGlvbiwgRElSRUNUSU9OX1JFVEFJTiksXHJcbiAgICBhcmdQcmVzZXQoZmFkZSwgRkFERSksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2V0VmVoaWNsZUxvY2F0aW9uID0gKFxyXG4gIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzLFxyXG4gIHZlaGljbGU6IGtleW9mIHR5cGVvZiBWRUhJQ0xFLFxyXG4gIHBvc2l0aW9uOiBNYXBQb3NpdGlvblxyXG4pID0+XHJcbiAgdGFnKFwiU2V0VmVoaWNsZUxvY2F0aW9uXCIsIFtcclxuICAgIGFyZ1ByZXNldCh2ZWhpY2xlLCBWRUhJQ0xFKSxcclxuICAgIGFyZ01hcFBvc2l0aW9uKHBvc2l0aW9uLCBtb2RlKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRFdmVudExvY2F0aW9uID0gKFxyXG4gIG1vZGU6IERpcmVjdE9yVmFyaWFibGVzIHwgXCJFWENIQU5HRVwiLFxyXG4gIGlkOiBrZXlvZiB0eXBlb2YgRVZFTlQgfCBudW1iZXIsXHJcbiAgcG9zaXRpb246IE1hcFBvc2l0aW9uIHwga2V5b2YgdHlwZW9mIEVWRU5UIHwgbnVtYmVyLFxyXG4gIGRpcmVjdGlvbjoga2V5b2YgdHlwZW9mIERJUkVDVElPTl9SRVRBSU5cclxuKSA9PlxyXG4gIHRhZyhcIlNldEV2ZW50TG9jYXRpb25cIiwgW1xyXG4gICAgYXJnSWRPclByZXNldChpZCwgRVZFTlQpLFxyXG4gICAgbW9kZSA9PT0gXCJFWENIQU5HRVwiXHJcbiAgICAgID8gdHlwZUNhc2UocG9zaXRpb24sIHtcclxuICAgICAgICAgIHN0cmluZzogKHgpID0+IGBFeGNoYW5nZVske2FyZ1ByZXNldCh4LCBFVkVOVCl9XWAsXHJcbiAgICAgICAgICBudW1iZXI6ICh4KSA9PiBgRXhjaGFuZ2VbJHthcmdJZCh4KX1dYCxcclxuICAgICAgICB9KVxyXG4gICAgICA6IHR5cGVDYXNlKHBvc2l0aW9uLCB7XHJcbiAgICAgICAgICBtYXBQb3NpdGlvbjogKHgpID0+IGFyZ01hcFBvc2l0aW9uKHgsIG1vZGUpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgYXJnUHJlc2V0KGRpcmVjdGlvbiwgRElSRUNUSU9OX1JFVEFJTiksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2Nyb2xsTWFwID0gKFxyXG4gIGRpcmVjdGlvbjoga2V5b2YgdHlwZW9mIERJUkVDVElPTixcclxuICBzdGVwOiBudW1iZXIsXHJcbiAgc3BlZWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVJfU1BFRUQsXHJcbiAgd2FpdD86IGJvb2xlYW5cclxuKSA9PlxyXG4gIHRhZyhcIlNldFZlaGljbGVMb2NhdGlvblwiLCBbXHJcbiAgICBhcmdQcmVzZXQoZGlyZWN0aW9uLCBESVJFQ1RJT04pLFxyXG4gICAgYXJnSW50KHN0ZXApLFxyXG4gICAgYXJnUHJlc2V0KHNwZWVkLCBDSEFSQUNURVJfU1BFRUQpLFxyXG4gICAgd2FpdCxcclxuICBdKTtcclxuXHJcbnR5cGUgUm91dGVDb2RlID0geyBuYW1lOiBzdHJpbmc7IGFyZ3M6IChudW1iZXIgfCBzdHJpbmcpW10gfTtcclxuaW50ZXJmYWNlIFJvdXRlIHtcclxuICBqdW1wOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IFJvdXRlQ29kZTtcclxuICB3YWl0OiAodjogbnVtYmVyKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlU3dpdGNoOiAoc3dpdGNoSWQ6IG51bWJlciwgdG86IGJvb2xlYW4pID0+IFJvdXRlQ29kZTtcclxuICBjaGFuZ2VTcGVlZDogKHNwZWVkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSX1NQRUVEKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlRnJlcTogKGZyZXE6IGtleW9mIHR5cGVvZiBDSEFSQUNURVJfRlJFUSkgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZUltYWdlOiAobmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlT3BhY2l0eTogKHY6IG51bWJlcikgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZUJsZW5kTW9kZTogKHY6IGtleW9mIHR5cGVvZiBCTEVORF9NT0RFKSA9PiBSb3V0ZUNvZGU7XHJcbiAgcGxheVNlOiAoc291bmQ6IFNvdW5kKSA9PiBSb3V0ZUNvZGU7XHJcbiAgc2NyaXB0OiAoY29kZTogc3RyaW5nKSA9PiBSb3V0ZUNvZGU7XHJcbiAgLy9cclxuICBtb3ZlOiAoXHJcbiAgICBkaXI6IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fUk9VVEU4IHwga2V5b2YgdHlwZW9mIERJUkVDVElPTl9NRVRIT0RcclxuICApID0+IFJvdXRlQ29kZTtcclxuICB0dXJuOiAoXHJcbiAgICBkaXI6XHJcbiAgICAgIHwga2V5b2YgdHlwZW9mIERJUkVDVElPTlxyXG4gICAgICB8IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fTUVUSE9EXHJcbiAgICAgIHwga2V5b2YgdHlwZW9mIERJUkVDVElPTl9UVVJOX01FVEhPRFxyXG4gICkgPT4gUm91dGVDb2RlO1xyXG4gIHN0ZXA6IChkaXI6IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fQ0FSKSA9PiBSb3V0ZUNvZGU7XHJcbiAgLy9cclxuICBjaGFuZ2VXYWxrQW5pbWF0aW9uOiAoYWN0aXZlOiBib29sZWFuKSA9PiBSb3V0ZUNvZGU7XHJcbiAgY2hhbmdlU3RlcEFuaW1hdGlvbjogKGFjdGl2ZTogYm9vbGVhbikgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZURpcmVjdGlvbkZpeDogKGFjdGl2ZTogYm9vbGVhbikgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZU5vQ2xpcDogKGFjdGl2ZTogYm9vbGVhbikgPT4gUm91dGVDb2RlO1xyXG4gIGNoYW5nZVRyYW5zcGFyZW50OiAoYWN0aXZlOiBib29sZWFuKSA9PiBSb3V0ZUNvZGU7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFNldE1vdmVtZW50Um91dGUgPSAoXHJcbiAgaWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIsXHJcbiAgcm91dGVzOiAocm91dGU6IFJvdXRlKSA9PiBSb3V0ZUNvZGVbXSxcclxuICB7IHJlcGVhdCA9IGZhbHNlLCBza2lwID0gZmFsc2UsIHdhaXQgPSB0cnVlIH0gPSB7fVxyXG4pID0+XHJcbiAgam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgdGFnKFwiU2V0TW92ZW1lbnRSb3V0ZVwiLCBbYXJnSWRPclByZXNldChpZCwgQ0hBUkFDVEVSKSwgcmVwZWF0LCBza2lwLCB3YWl0XSksXHJcbiAgICAuLi5yb3V0ZXMoe1xyXG4gICAgICBqdW1wOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBcIkp1bXBcIiwgYXJnczogW2FyZ0ludCh4KSwgYXJnSW50KHkpXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICB3YWl0OiAodjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJNY1dhaXRcIiwgYXJnczogW2FyZ0ludCh2KV0gfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlU3dpdGNoOiAoc3dpdGNoSWQ6IG51bWJlciwgdG86IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogYFN3aXRjaCR7dG8gPyBcIk9uXCIgOiBcIk9mZlwifWAsXHJcbiAgICAgICAgICBhcmdzOiBbYXJnSWQoc3dpdGNoSWQpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VTcGVlZDogKHNwZWVkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSX1NQRUVEKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2hhbmdlU3BlZWRcIixcclxuICAgICAgICAgIGFyZ3M6IFthcmdQcmVzZXQoc3BlZWQsIENIQVJBQ1RFUl9TUEVFRCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZUZyZXE6IChmcmVxOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSX0ZSRVEpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogXCJDaGFuZ2VGcmVxdWVuY3lcIixcclxuICAgICAgICAgIGFyZ3M6IFthcmdQcmVzZXQoZnJlcSwgQ0hBUkFDVEVSX0ZSRVEpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VJbWFnZTogKG5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNoYW5nZUltYWdlXCIsXHJcbiAgICAgICAgICBhcmdzOiBbbmFtZSwgYXJnUmFuZ2UoaW5kZXgsIHsgZnJvbTogMCwgdG86IDcgfSldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZU9wYWNpdHk6ICh2OiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbmFtZTogXCJDaGFuZ2VPcGFjaXR5XCIsXHJcbiAgICAgICAgICBhcmdzOiBbYXJnUmFuZ2UodiwgeyBmcm9tOiAwLCB0bzogMjU1IH0pXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VCbGVuZE1vZGU6ICh2OiBrZXlvZiB0eXBlb2YgQkxFTkRfTU9ERSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IFwiQ2hhbmdlQmxlbmRNb2RlXCIsIGFyZ3M6IFthcmdQcmVzZXQodiwgQkxFTkRfTU9ERSldIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIHBsYXlTZTogKHNvdW5kOiBTb3VuZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBcIk1jUGxheVNlXCIsXHJcbiAgICAgICAgICBhcmdzOiBbYXJnc1NvdW5kKHNvdW5kKV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgc2NyaXB0OiAoY29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogXCJNY1NjcmlwdFwiLCBhcmdzOiBbY29kZV0gfTtcclxuICAgICAgfSxcclxuICAgICAgLy9cclxuICAgICAgbW92ZTogKFxyXG4gICAgICAgIGRpcjoga2V5b2YgdHlwZW9mIERJUkVDVElPTl9ST1VURTggfCBrZXlvZiB0eXBlb2YgRElSRUNUSU9OX01FVEhPRFxyXG4gICAgICApID0+IHtcclxuICAgICAgICBjb25zdCBwcmVzZXQgPSB7IC4uLkRJUkVDVElPTl9ST1VURTgsIC4uLkRJUkVDVElPTl9NRVRIT0QgfTtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgTW92ZSR7YXJnUHJlc2V0KGRpciwgcHJlc2V0KX1gLCBhcmdzOiBbXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICB0dXJuOiAoXHJcbiAgICAgICAgZGlyOlxyXG4gICAgICAgICAgfCBrZXlvZiB0eXBlb2YgRElSRUNUSU9OXHJcbiAgICAgICAgICB8IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fTUVUSE9EXHJcbiAgICAgICAgICB8IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fVFVSTl9NRVRIT0RcclxuICAgICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJlc2V0ID0ge1xyXG4gICAgICAgICAgLi4uRElSRUNUSU9OLFxyXG4gICAgICAgICAgLi4uRElSRUNUSU9OX01FVEhPRCxcclxuICAgICAgICAgIC4uLkRJUkVDVElPTl9UVVJOX01FVEhPRCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGBUdXJuJHthcmdQcmVzZXQoZGlyLCBwcmVzZXQpfWAsIGFyZ3M6IFtdIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0ZXA6IChkaXI6IGtleW9mIHR5cGVvZiBESVJFQ1RJT05fQ0FSKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogYE9uZVN0ZXAke2FyZ1ByZXNldChkaXIsIERJUkVDVElPTl9DQVIpfWAsIGFyZ3M6IFtdIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vXHJcbiAgICAgIGNoYW5nZVdhbGtBbmltYXRpb246IChhY3RpdmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgV2Fsa2luZ0FuaW1hdGlvbiR7YWN0aXZlID8gXCJPblwiIDogXCJPZmZcIn1gLCBhcmdzOiBbXSB9O1xyXG4gICAgICB9LFxyXG4gICAgICBjaGFuZ2VTdGVwQW5pbWF0aW9uOiAoYWN0aXZlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogYFN0ZXBwaW5nQW5pbWF0aW9uJHthY3RpdmUgPyBcIk9uXCIgOiBcIk9mZlwifWAsIGFyZ3M6IFtdIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGNoYW5nZURpcmVjdGlvbkZpeDogKGFjdGl2ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IG5hbWU6IGBEaXJlY3Rpb25GaXgke2FjdGl2ZSA/IFwiT25cIiA6IFwiT2ZmXCJ9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlTm9DbGlwOiAoYWN0aXZlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZTogYFRocm91Z2gke2FjdGl2ZSA/IFwiT25cIiA6IFwiT2ZmXCJ9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlVHJhbnNwYXJlbnQ6IChhY3RpdmU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lOiBgVHJhbnNwYXJlbnQke2FjdGl2ZSA/IFwiT25cIiA6IFwiT2ZmXCJ9YCwgYXJnczogW10gfTtcclxuICAgICAgfSxcclxuICAgIH0pLm1hcCgoeyBuYW1lLCBhcmdzIH0pID0+IHRhZyhuYW1lLCBhcmdzKSksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgR2V0T25PZmZWZWhpY2xlID0gKCkgPT4gdGFnKFwiR2V0T25PZmZWZWhpY2xlXCIpO1xyXG4iLCJpbXBvcnQgeyBDcmVhc2VPcGVyYXRvciwgVmFyaWFibGVJZCB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBhcmdJZCwgYXJnSW50T3JWYXJpYWJsZUlkLCB0YWcgfSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcblxuZXhwb3J0IGNvbnN0IENoYW5nZUdvbGQgPSAob3A6IENyZWFzZU9wZXJhdG9yLCB2YWx1ZTogbnVtYmVyIHwgVmFyaWFibGVJZCkgPT5cbiAgdGFnKFwiQ2hhbmdlR29sZFwiLCBbb3AsIGFyZ0ludE9yVmFyaWFibGVJZCh2YWx1ZSldKTtcblxuZXhwb3J0IGNvbnN0IENoYW5nZUl0ZW1zID0gKFxuICBpZDogbnVtYmVyLFxuICBvcDogQ3JlYXNlT3BlcmF0b3IsXG4gIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkXG4pID0+IHRhZyhcIkNoYW5nZUl0ZW1zXCIsIFthcmdJZChpZCksIG9wLCBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpXSk7XG5cbmNvbnN0IGNvbW1vbkNoYW5nZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY29tcG9uZW50ID0gKFxuICAgIGlkOiBudW1iZXIsXG4gICAgb3A6IENyZWFzZU9wZXJhdG9yLFxuICAgIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkLFxuICAgIGluY2x1ZGVFcXVpcG1lbnQ/OiBib29sZWFuXG4gICkgPT4gdGFnKG5hbWUsIFthcmdJZChpZCksIG9wLCBhcmdJbnRPclZhcmlhYmxlSWQodmFsdWUpLCBpbmNsdWRlRXF1aXBtZW50XSk7XG4gIHJldHVybiBjb21wb25lbnQ7XG59O1xuZXhwb3J0IGNvbnN0IENoYW5nZVdlYXBvbnMgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VXZWFwb25zXCIpO1xuZXhwb3J0IGNvbnN0IENoYW5nZUFybW9ycyA9IGNvbW1vbkNoYW5nZShcIkNoYW5nZUFybW9yc1wiKTtcblxuZXhwb3J0IGNvbnN0IENoYW5nZVBhcnR5TWVtYmVyID0gKFxuICBpZDogbnVtYmVyLFxuICBvcDogQ3JlYXNlT3BlcmF0b3IsXG4gIHZhbHVlOiBudW1iZXIgfCBWYXJpYWJsZUlkLFxuICBpbml0aWFsaXplPzogYm9vbGVhblxuKSA9PiB0YWcoXCJDaGFuZ2VJdGVtc1wiLCBbYXJnSWQoaWQpLCBvcCwgYXJnSW50T3JWYXJpYWJsZUlkKHZhbHVlKSwgaW5pdGlhbGl6ZV0pO1xuIiwiaW1wb3J0IHsgQkxFTkRfTU9ERSwgQ09MT1JfVE9ORSwgRUFTSU5HLCBQSUNUVVJFX09SSUdJTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQ29sb3I0LCBEaXJlY3RPclZhcmlhYmxlcyB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnQ29sb3JUb25lLFxyXG4gIGFyZ0ludCxcclxuICBhcmdQcmVzZXQsXHJcbiAgYXJnUmFuZ2UsXHJcbiAgYXJnVmFyaWFibGVJZCxcclxuICBqb2luU2tpcCxcclxuICB0YWcsXHJcbn0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5jb25zdCBhcmdQaWN0dXJlUG9zaXRpb24gPSAocG9zaXRpb246IHtcclxuICBtb2RlOiBEaXJlY3RPclZhcmlhYmxlcztcclxuICBvcmlnaW46IGtleW9mIHR5cGVvZiBQSUNUVVJFX09SSUdJTjtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgcGFyc2UgPVxyXG4gICAgcG9zaXRpb24ubW9kZSA9PT0gXCJESVJFQ1RcIlxyXG4gICAgICA/IGFyZ0ludFxyXG4gICAgICA6ICh2YXJpYWJsZUlkOiBudW1iZXIpID0+IGFyZ1ZhcmlhYmxlSWQoeyB2YXJpYWJsZUlkIH0pO1xyXG4gIHJldHVybiBgUG9zaXRpb25bJHthcmdQcmVzZXQocG9zaXRpb24ub3JpZ2luLCBQSUNUVVJFX09SSUdJTil9XVske3BhcnNlKFxyXG4gICAgcG9zaXRpb24ueFxyXG4gICl9XVske3BhcnNlKHBvc2l0aW9uLnkpfV1gO1xyXG59O1xyXG5jb25zdCBhcmdQaWN0dXJlU2NhbGUgPSAoc2l6ZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSA9PlxyXG4gIGBTY2FsZVske2FyZ0ludChzaXplLndpZHRoKX1dWyR7YXJnSW50KHNpemUuaGVpZ2h0KX1dYDtcclxuY29uc3QgYXJnUGljdHVyZUJsZW5kID0gKGJsZW5kOiB7XHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG4gIG1vZGU6IGtleW9mIHR5cGVvZiBCTEVORF9NT0RFO1xyXG59KSA9PlxyXG4gIGBCbGVuZFske2FyZ1JhbmdlKGJsZW5kLm9wYWNpdHksIHsgZnJvbTogMCwgdG86IDI1NSB9KX1dWyR7YXJnUHJlc2V0KFxyXG4gICAgYmxlbmQubW9kZSxcclxuICAgIEJMRU5EX01PREVcclxuICApfV1gO1xyXG5jb25zdCBhcmdQaWN0dXJlRHVyYXRpb24gPSAoZHVyYXRpb246IHsgdGltZTogbnVtYmVyOyB3YWl0OiBib29sZWFuIH0pID0+XHJcbiAgYER1cmF0aW9uWyR7YXJnSW50KGR1cmF0aW9uLnRpbWUpfV1bJHtkdXJhdGlvbi53YWl0ID8gXCJXYWl0XCIgOiBcIlwifV1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3dQaWN0dXJlID0gKFxyXG4gIGlkOiBudW1iZXIsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHtcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgc2NhbGUsXHJcbiAgICBibGVuZCxcclxuICB9OiB7XHJcbiAgICBwb3NpdGlvbj86IHtcclxuICAgICAgbW9kZTogRGlyZWN0T3JWYXJpYWJsZXM7XHJcbiAgICAgIG9yaWdpbjoga2V5b2YgdHlwZW9mIFBJQ1RVUkVfT1JJR0lOO1xyXG4gICAgICB4OiBudW1iZXI7XHJcbiAgICAgIHk6IG51bWJlcjtcclxuICAgIH07XHJcbiAgICBzY2FsZT86IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfTtcclxuICAgIGJsZW5kPzogeyBtb2RlOiBrZXlvZiB0eXBlb2YgQkxFTkRfTU9ERTsgb3BhY2l0eTogbnVtYmVyIH07XHJcbiAgfVxyXG4pID0+XHJcbiAgdGFnKFwiU2hvd1BpY3R1cmVcIiwgW1xyXG4gICAgYXJnUmFuZ2UoaWQsIHsgZnJvbTogMSwgdG86IDEwMCB9KSxcclxuICAgIG5hbWUsXHJcbiAgICBqb2luU2tpcChudWxsLCBbXHJcbiAgICAgIHBvc2l0aW9uICYmIGFyZ1BpY3R1cmVQb3NpdGlvbihwb3NpdGlvbiksXHJcbiAgICAgIHNjYWxlICYmIGFyZ1BpY3R1cmVTY2FsZShzY2FsZSksXHJcbiAgICAgIGJsZW5kICYmIGFyZ1BpY3R1cmVCbGVuZChibGVuZCksXHJcbiAgICBdKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3ZlUGljdHVyZSA9IChcclxuICBpZDogbnVtYmVyLFxyXG4gIHtcclxuICAgIHBvc2l0aW9uLFxyXG4gICAgc2NhbGUsXHJcbiAgICBibGVuZCxcclxuICAgIGR1cmF0aW9uLFxyXG4gICAgZWFzaW5nLFxyXG4gIH06IHtcclxuICAgIHBvc2l0aW9uPzoge1xyXG4gICAgICBtb2RlOiBEaXJlY3RPclZhcmlhYmxlcztcclxuICAgICAgb3JpZ2luOiBrZXlvZiB0eXBlb2YgUElDVFVSRV9PUklHSU47XHJcbiAgICAgIHg6IG51bWJlcjtcclxuICAgICAgeTogbnVtYmVyO1xyXG4gICAgfTtcclxuICAgIHNjYWxlPzogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9O1xyXG4gICAgYmxlbmQ/OiB7IG1vZGU6IGtleW9mIHR5cGVvZiBCTEVORF9NT0RFOyBvcGFjaXR5OiBudW1iZXIgfTtcclxuICAgIGR1cmF0aW9uPzogeyB0aW1lOiBudW1iZXI7IHdhaXQ6IGJvb2xlYW4gfTtcclxuICAgIGVhc2luZz86IGtleW9mIHR5cGVvZiBFQVNJTkc7XHJcbiAgfVxyXG4pID0+XHJcbiAgdGFnKFwiTW92ZVBpY3R1cmVcIiwgW1xyXG4gICAgYXJnUmFuZ2UoaWQsIHsgZnJvbTogMSwgdG86IDEwMCB9KSxcclxuICAgIGpvaW5Ta2lwKG51bGwsIFtcclxuICAgICAgcG9zaXRpb24gJiYgYXJnUGljdHVyZVBvc2l0aW9uKHBvc2l0aW9uKSxcclxuICAgICAgc2NhbGUgJiYgYXJnUGljdHVyZVNjYWxlKHNjYWxlKSxcclxuICAgICAgYmxlbmQgJiYgYXJnUGljdHVyZUJsZW5kKGJsZW5kKSxcclxuICAgICAgZHVyYXRpb24gJiYgYXJnUGljdHVyZUR1cmF0aW9uKGR1cmF0aW9uKSxcclxuICAgICAgZWFzaW5nICYmIGFyZ1ByZXNldChlYXNpbmcsIEVBU0lORyksXHJcbiAgICBdKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBSb3RhdGVQaWN0dXJlID0gKGlkOiBudW1iZXIsIHNwZWVkOiBudW1iZXIpID0+XHJcbiAgdGFnKFwiUm90YXRlUGljdHVyZVwiLCBbXHJcbiAgICBhcmdSYW5nZShpZCwgeyBmcm9tOiAxLCB0bzogMTAwIH0pLFxyXG4gICAgYXJnUmFuZ2Uoc3BlZWQsIHsgZnJvbTogLTkwLCB0bzogOTAgfSksXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgVGludFBpY3R1cmUgPSAoXHJcbiAgaWQ6IG51bWJlcixcclxuICBjb2xvcj86IGtleW9mIHR5cGVvZiBDT0xPUl9UT05FIHwgQ29sb3I0LFxyXG4gIHRpbWU/OiBudW1iZXJcclxuKSA9PlxyXG4gIHRhZyhcIlRpbnRQaWN0dXJlXCIsIFtcclxuICAgIGFyZ1JhbmdlKGlkLCB7IGZyb206IDEsIHRvOiAxMDAgfSksXHJcbiAgICBqb2luU2tpcChudWxsLCBbY29sb3IgJiYgYXJnQ29sb3JUb25lKGNvbG9yKSwgdGltZV0pLFxyXG4gIF0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVyYXNlUGljdHVyZSA9IChpZDogbnVtYmVyKSA9PlxyXG4gIHRhZyhcIkVyYXNlUGljdHVyZVwiLCBbYXJnUmFuZ2UoaWQsIHsgZnJvbTogMSwgdG86IDEwMCB9KV0pO1xyXG4iLCJpbXBvcnQgeyBDSEFSQUNURVIsIFRJTUVSX01PREUsIFZBUklBQkxFX09QRVJBVE9SIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBGcm9tVG8sIFNlbGZTd2l0Y2hOYW1lLCBTd2l0Y2hJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnRW5lbXlJbmRleCxcclxuICBhcmdGcm9tVG8sXHJcbiAgYXJnSWQsXHJcbiAgYXJnSW50LFxyXG4gIGFyZ1N3aXRjaElkLFxyXG4gIGNyZWF0ZVByZXNldEFyZyxcclxuICB0YWcsXHJcbiAgdHlwZUNhc2UsXHJcbn0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5jb25zdCBhcmdDaGFyYWN0ZXJJZFdpdGhQcmVzZXQgPSBjcmVhdGVQcmVzZXRBcmcoQ0hBUkFDVEVSKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTd2l0Y2ggPSAoaWQ6IFN3aXRjaElkIHwgRnJvbVRvLCB0b0JlOiBib29sZWFuKSA9PlxyXG4gIHRhZyhcIlN3aXRjaFwiLCBbXHJcbiAgICB0eXBlQ2FzZShpZCwge1xyXG4gICAgICBzd2l0Y2hJZDogYXJnU3dpdGNoSWQsXHJcbiAgICAgIGZyb21UbzogYXJnRnJvbVRvLFxyXG4gICAgfSksXHJcbiAgICB0b0JlLFxyXG4gIF0pO1xyXG5cclxuaW50ZXJmYWNlIE9wZXJhdGlvbnMge1xyXG4gIHNldDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG4gIGFkZDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG4gIHN1YjogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG4gIG11bDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG4gIGRpdjogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG4gIG1vZDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9O1xyXG59XHJcbmludGVyZmFjZSBEYXRhIHtcclxuICB2YXJpYWJsZTogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICByYW5kb206IChyYW5nZTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSkgPT4gc3RyaW5nO1xyXG4gIHNjcmlwdDogKGpzOiBzdHJpbmcpID0+IHN0cmluZztcclxuICBnYW1lOiB7XHJcbiAgICBpdGVtOiB7XHJcbiAgICAgIGl0ZW1Db3VudDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgd2VhcG9uQ291bnQ6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGFybW9yQ291bnQ6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgYWN0b3I6IHtcclxuICAgICAgbGV2ZWw6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGV4cDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgSFA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIE1QOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBtYXhIUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgTWF4TVA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGF0dGFjazogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgZGVmZW5zZTogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbUF0dGFjazogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbURlZmVuc2U6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGFnaWxpdHk6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGx1Y2s6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIFRQOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGVuZW15OiB7XHJcbiAgICAgIEhQOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBNUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbWF4SFA6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIE1heE1QOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBhdHRhY2s6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIGRlZmVuc2U6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIG1BdHRhY2s6IChpZDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIG1EZWZlbnNlOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBhZ2lsaXR5OiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBsdWNrOiAoaWQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBUUDogKGlkOiBudW1iZXIpID0+IHN0cmluZztcclxuICAgIH07XHJcbiAgICBjaGFyYWN0ZXI6IHtcclxuICAgICAgbWFwWDogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICAgIG1hcFk6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBkaXJlY3Rpb246IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gICAgICBzY3JlZW5YOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgc2NyZWVuWTogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgbGFzdDoge1xyXG4gICAgICB1c2VkU2tpbGxJZDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICB1c2VkSXRlbUlkOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIGFjdGlvbkFjdG9ySWQ6ICgpID0+IHN0cmluZztcclxuICAgICAgYWN0aW9uRW5lbXlJbmRleDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICB0YXJnZXRBY3RvcklkOiAoKSA9PiBzdHJpbmc7XHJcbiAgICAgIHRhcmdldEVuZW15SW5kZXg6ICgpID0+IHN0cmluZztcclxuICAgIH07XHJcbiAgICBldGM6IHtcclxuICAgICAgbWVtYmVyQWN0b3JJZDogKGluZGV4OiBudW1iZXIpID0+IHN0cmluZztcclxuICAgICAgbWVtYmVyQ291bnQ6ICgpID0+IHN0cmluZztcclxuICAgICAgZ29sZDogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBzdGVwczogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBwbGF5VGltZTogKCkgPT4gc3RyaW5nO1xyXG4gICAgICB0aW1lcjogKCkgPT4gc3RyaW5nO1xyXG4gICAgICBzYXZlQ291bnQ6ICgpID0+IHN0cmluZztcclxuICAgICAgYmF0dGxlQ291bnQ6ICgpID0+IHN0cmluZztcclxuICAgICAgd2luQ291bnQ6ICgpID0+IHN0cmluZztcclxuICAgICAgZXNjYXBlQ291bnQ6ICgpID0+IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5leHBvcnQgY29uc3QgVmFyaWFibGUgPSAoXHJcbiAgaWQ6IG51bWJlciB8IEZyb21UbyxcclxuICBjYWxjOiAob3A6IE9wZXJhdGlvbnMsIGRhdGE6IERhdGEpID0+IHsgb3A6IHN0cmluZzsgdmFsdWU6IG51bWJlciB8IHN0cmluZyB9W11cclxuKSA9PiB7XHJcbiAgY29uc3QgbGlzdCA9IGNhbGMoXHJcbiAgICB7XHJcbiAgICAgIHNldDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgb3A6IFwiU0VUXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB9KSxcclxuICAgICAgYWRkOiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gKHtcclxuICAgICAgICBvcDogXCJBRERcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBzdWI6ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIG9wOiBcIlNVQlwiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICAgIG11bDogKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpID0+ICh7XHJcbiAgICAgICAgb3A6IFwiTVVMXCIsXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICB9KSxcclxuICAgICAgZGl2OiAodmFsdWU6IG51bWJlciB8IHN0cmluZykgPT4gKHtcclxuICAgICAgICBvcDogXCJESVZcIixcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICBtb2Q6ICh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSA9PiAoe1xyXG4gICAgICAgIG9wOiBcIk1PRFwiLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZTogKGlkOiBudW1iZXIpID0+IGBWWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICByYW5kb206ICh7IGZyb20sIHRvIH06IEZyb21UbykgPT5cclxuICAgICAgICBgUmFuZG9tWyR7YXJnSW50KGZyb20pfV1bJHthcmdJbnQodG8pfV1gLFxyXG4gICAgICBzY3JpcHQ6IChqczogc3RyaW5nKSA9PiBgU2NyaXB0WyR7anN9XWAsXHJcbiAgICAgIGdhbWU6IHtcclxuICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICBpdGVtQ291bnQ6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbSXRlbV1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICB3ZWFwb25Db3VudDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtXZWFwb25dWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgYXJtb3JDb3VudDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBcm1vcl1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rvcjoge1xyXG4gICAgICAgICAgbGV2ZWw6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW0xldmVsXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIGV4cDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bRXhwXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIEhQOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtIUF1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBNUDogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bTVBdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgbWF4SFA6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW01heEhwXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIE1heE1QOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtNYXhNUF1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBhdHRhY2s6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW0F0dGFja11bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBkZWZlbnNlOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtEZWZlbnNlXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIG1BdHRhY2s6IChpZDogbnVtYmVyKSA9PiBgR2FtZURhdGFbQWN0b3JdW00uQXR0YWNrXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIG1EZWZlbnNlOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtNLkRlZmVuc2VdWyR7YXJnSWQoaWQpfV1gLFxyXG4gICAgICAgICAgYWdpbGl0eTogKGlkOiBudW1iZXIpID0+IGBHYW1lRGF0YVtBY3Rvcl1bQWdpbGl0eV1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgICBsdWNrOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtMdWNrXVske2FyZ0lkKGlkKX1dYCxcclxuICAgICAgICAgIFRQOiAoaWQ6IG51bWJlcikgPT4gYEdhbWVEYXRhW0FjdG9yXVtUUF1bJHthcmdJZChpZCl9XWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmVteToge1xyXG4gICAgICAgICAgSFA6IChpbmRleDogbnVtYmVyKSA9PiBgR2FtZURhdGFbRW5lbXldW0hQXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgTVA6IChpbmRleDogbnVtYmVyKSA9PiBgR2FtZURhdGFbRW5lbXldW01QXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgbWF4SFA6IChpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbRW5lbXldW01heEhwXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgTWF4TVA6IChpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbRW5lbXldW01heE1QXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgYXR0YWNrOiAoaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0VuZW15XVtBdHRhY2tdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBkZWZlbnNlOiAoaW5kZXg6IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0VuZW15XVtEZWZlbnNlXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgbUF0dGFjazogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bTS5BdHRhY2tdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBtRGVmZW5zZTogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bTS5EZWZlbnNlXVske2FyZ0VuZW15SW5kZXgoaW5kZXgpfV1gLFxyXG4gICAgICAgICAgYWdpbGl0eTogKGluZGV4OiBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtFbmVteV1bQWdpbGl0eV1bJHthcmdFbmVteUluZGV4KGluZGV4KX1dYCxcclxuICAgICAgICAgIGx1Y2s6IChpbmRleDogbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbRW5lbXldW0x1Y2tdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgICBUUDogKGluZGV4OiBudW1iZXIpID0+IGBHYW1lRGF0YVtFbmVteV1bVFBdWyR7YXJnRW5lbXlJbmRleChpbmRleCl9XWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFyYWN0ZXI6IHtcclxuICAgICAgICAgIG1hcFg6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0NoYXJhY3Rlcl1bJHthcmdDaGFyYWN0ZXJJZFdpdGhQcmVzZXQoXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVySWRcclxuICAgICAgICAgICAgKX1dW01hcFhdYCxcclxuICAgICAgICAgIG1hcFk6IChjaGFyYWN0ZXJJZDoga2V5b2YgdHlwZW9mIENIQVJBQ1RFUiB8IG51bWJlcikgPT5cclxuICAgICAgICAgICAgYEdhbWVEYXRhW0NoYXJhY3Rlcl1bJHthcmdDaGFyYWN0ZXJJZFdpdGhQcmVzZXQoXHJcbiAgICAgICAgICAgICAgY2hhcmFjdGVySWRcclxuICAgICAgICAgICAgKX1dW01hcFldYCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogKGNoYXJhY3RlcklkOiBrZXlvZiB0eXBlb2YgQ0hBUkFDVEVSIHwgbnVtYmVyKSA9PlxyXG4gICAgICAgICAgICBgR2FtZURhdGFbQ2hhcmFjdGVyXVske2FyZ0NoYXJhY3RlcklkV2l0aFByZXNldChcclxuICAgICAgICAgICAgICBjaGFyYWN0ZXJJZFxyXG4gICAgICAgICAgICApfV1bRGlyZWN0aW9uXWAsXHJcbiAgICAgICAgICBzY3JlZW5YOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtDaGFyYWN0ZXJdWyR7YXJnQ2hhcmFjdGVySWRXaXRoUHJlc2V0KFxyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcklkXHJcbiAgICAgICAgICAgICl9XVtTY3JlZW5YXWAsXHJcbiAgICAgICAgICBzY3JlZW5ZOiAoY2hhcmFjdGVySWQ6IGtleW9mIHR5cGVvZiBDSEFSQUNURVIgfCBudW1iZXIpID0+XHJcbiAgICAgICAgICAgIGBHYW1lRGF0YVtDaGFyYWN0ZXJdWyR7YXJnQ2hhcmFjdGVySWRXaXRoUHJlc2V0KFxyXG4gICAgICAgICAgICAgIGNoYXJhY3RlcklkXHJcbiAgICAgICAgICAgICl9XVtTY3JlZW5ZXWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0OiB7XHJcbiAgICAgICAgICB1c2VkU2tpbGxJZDogKCkgPT4gYEdhbWVEYXRhW0xhc3RdW1VzZWQgU2tpbGwgSURdYCxcclxuICAgICAgICAgIHVzZWRJdGVtSWQ6ICgpID0+IGBHYW1lRGF0YVtMYXN0XVtVc2VkIEl0ZW0gSURdYCxcclxuICAgICAgICAgIGFjdGlvbkFjdG9ySWQ6ICgpID0+IGBHYW1lRGF0YVtMYXN0XVtBY3RvciBJRCB0byBBY3RdYCxcclxuICAgICAgICAgIGFjdGlvbkVuZW15SW5kZXg6ICgpID0+IGBHYW1lRGF0YVtMYXN0XVtFbmVteSBJbmRleCB0byBBY3RdYCxcclxuICAgICAgICAgIHRhcmdldEFjdG9ySWQ6ICgpID0+IGBHYW1lRGF0YVtMYXN0XVtUYXJnZXQgQWN0b3IgSURdYCxcclxuICAgICAgICAgIHRhcmdldEVuZW15SW5kZXg6ICgpID0+IGBHYW1lRGF0YVtMYXN0XVtUYXJnZXQgRW5lbXkgSW5kZXhdYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV0Yzoge1xyXG4gICAgICAgICAgbWVtYmVyQWN0b3JJZDogKGluZGV4OiBudW1iZXIpID0+IGBHYW1lRGF0YVtQYXJ0eV1bJHthcmdJZChpbmRleCl9XWAsXHJcbiAgICAgICAgICBtZW1iZXJDb3VudDogKCkgPT4gYEdhbWVEYXRhW1BhcnR5TWVtYmVyc11gLFxyXG4gICAgICAgICAgZ29sZDogKCkgPT4gYEdhbWVEYXRhW0dvbGRdYCxcclxuICAgICAgICAgIHN0ZXBzOiAoKSA9PiBgR2FtZURhdGFbU3RlcHNdYCxcclxuICAgICAgICAgIHBsYXlUaW1lOiAoKSA9PiBgR2FtZURhdGFbUGxheVRpbWVdYCxcclxuICAgICAgICAgIHRpbWVyOiAoKSA9PiBgR2FtZURhdGFbVGltZXJdYCxcclxuICAgICAgICAgIHNhdmVDb3VudDogKCkgPT4gYEdhbWVEYXRhW1NhdmVDb3VudF1gLFxyXG4gICAgICAgICAgYmF0dGxlQ291bnQ6ICgpID0+IGBHYW1lRGF0YVtCYXR0bGVDb3VudF1gLFxyXG4gICAgICAgICAgd2luQ291bnQ6ICgpID0+IGBHYW1lRGF0YVtXaW5Db3VudF1gLFxyXG4gICAgICAgICAgZXNjYXBlQ291bnQ6ICgpID0+IGBHYW1lRGF0YVtFc2NhcGVDb3VudF1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gbGlzdFxyXG4gICAgLm1hcCgoeyBvcCwgdmFsdWUgfSkgPT5cclxuICAgICAgdGFnKFZBUklBQkxFX09QRVJBVE9SW29wIGFzIGtleW9mIHR5cGVvZiBWQVJJQUJMRV9PUEVSQVRPUl0sIFtcclxuICAgICAgICB0eXBlQ2FzZShpZCwge1xyXG4gICAgICAgICAgZnJvbVRvOiBhcmdGcm9tVG8sXHJcbiAgICAgICAgICBudW1iZXI6IGFyZ0lkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gICAgLmpvaW4oXCJcXG5cIik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZlN3aXRjaCA9IChpZDogU2VsZlN3aXRjaE5hbWUsIHRvQmU6IGJvb2xlYW4pID0+XHJcbiAgdGFnKFwiU2VsZlN3aXRjaFwiLCBbaWQsIHRvQmVdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lciA9IChcclxuICBtb2RlOiBrZXlvZiB0eXBlb2YgVElNRVJfTU9ERSxcclxuICB0aW1lOiB7IG1pbjogbnVtYmVyOyBzZWM6IG51bWJlciB9IHwgYCR7bnVtYmVyfToke251bWJlcn1gXHJcbikgPT4ge1xyXG4gIGlmICh0eXBlb2YgdGltZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc3QgW2lzVmFsaWQsIG1pbiwgc2VjXSA9IHRpbWUubWF0Y2goL14oXFxkezEsfSk6KFxcZHsxLH0pJC8pID8/IFtdO1xyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHRhZyhcIlRpbWVyXCIsIFtUSU1FUl9NT0RFW21vZGVdLCBtaW4sIHNlY10pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwi5paH5a2X5YiX44Gn44K/44Kk44Oe44O86Kit5a6a44GZ44KL5aC05ZCI44GvIDAwOjAwIOW9ouW8j+OBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHsgbWluLCBzZWMgfSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRhZyhcIlRpbWVyXCIsIFtUSU1FUl9NT0RFW21vZGVdLCBtaW4sIHNlY10pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCQVRUTEVfVFJPT1AsIFNIT1BfSVRFTSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgVmFyaWFibGVJZCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnSWQsXHJcbiAgYXJnSW50LFxyXG4gIGFyZ1ByZXNldCxcclxuICBhcmdSYW5nZSxcclxuICBhcmdWYXJpYWJsZUlkLFxyXG4gIGpvaW5Ta2lwLFxyXG4gIHRhZyxcclxuICB0eXBlQ2FzZSxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCYXR0bGVQcm9jZXNzaW5nID0gKFxyXG4gIGlkOiBrZXlvZiB0eXBlb2YgQkFUVExFX1RST09QIHwgVmFyaWFibGVJZCB8IG51bWJlcixcclxuICB7XHJcbiAgICBpZldpbixcclxuICAgIGlmRXNjYXBlLFxyXG4gICAgaWZMb3NlLFxyXG4gIH06IHtcclxuICAgIGlmV2luPzogc3RyaW5nO1xyXG4gICAgaWZFc2NhcGU/OiBzdHJpbmc7XHJcbiAgICBpZkxvc2U/OiBzdHJpbmc7XHJcbiAgfVxyXG4pID0+IHtcclxuICByZXR1cm4gam9pblNraXAoXCJcXG5cIiwgW1xyXG4gICAgdGFnKFwiQmF0dGxlUHJvY2Vzc2luZ1wiLCBbXHJcbiAgICAgIHR5cGVDYXNlKGlkLCB7XHJcbiAgICAgICAgc3RyaW5nOiAoeCkgPT4gYXJnUHJlc2V0KHgsIEJBVFRMRV9UUk9PUCksXHJcbiAgICAgICAgdmFyaWFibGVJZDogYXJnVmFyaWFibGVJZCxcclxuICAgICAgICBudW1iZXI6IGFyZ0lkLFxyXG4gICAgICB9KSxcclxuICAgIF0pLFxyXG4gICAgaWZXaW4gPyBqb2luU2tpcChcIlxcblwiLCBbdGFnKFwiSWZXaW5cIiksIGlmV2luXSkgOiB1bmRlZmluZWQsXHJcbiAgICBpZkVzY2FwZSA/IGpvaW5Ta2lwKFwiXFxuXCIsIFt0YWcoXCJJZkVzY2FwZVwiKSwgaWZFc2NhcGVdKSA6IHVuZGVmaW5lZCxcclxuICAgIGlmTG9zZSA/IGpvaW5Ta2lwKFwiXFxuXCIsIFt0YWcoXCJJZkxvc2VcIiksIGlmTG9zZV0pIDogdW5kZWZpbmVkLFxyXG4gICAgdGFnKFwiRW5kXCIpLFxyXG4gIF0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNob3BQcm9jZXNzaW5nID0gKFxyXG4gIGl0ZW1zOiB7XHJcbiAgICB0eXBlOiBrZXlvZiB0eXBlb2YgU0hPUF9JVEVNO1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgfVtdLFxyXG4gIHB1cmNoYXNlT25seT86IGJvb2xlYW5cclxuKSA9PlxyXG4gIGpvaW5Ta2lwKFwiXFxuXCIsIFtcclxuICAgIHRhZyhcIlNob3BQcm9jZXNzaW5nXCIsIFtwdXJjaGFzZU9ubHldKSxcclxuICAgIC4uLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCwgcHJpY2UgfSkgPT5cclxuICAgICAgdGFnKFwiTWVyY2hhbmRpc2VcIiwgW2FyZ1ByZXNldCh0eXBlLCBTSE9QX0lURU0pLCBhcmdJZChpZCksIGFyZ0ludChwcmljZSldKVxyXG4gICAgKSxcclxuICBdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOYW1lSW5wdXRQcm9jZXNzaW5nID0gKGlkOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PlxyXG4gIHRhZyhcIk5hbWVJbnB1dFByb2Nlc3NpbmdcIiwgW2FyZ0lkKGlkKSwgYXJnUmFuZ2UobGVuZ3RoLCB7IGZyb206IDEsIHRvOiA4IH0pXSk7XHJcblxyXG5leHBvcnQgY29uc3QgT3Blbk1lbnVTY3JlZW4gPSAoKSA9PiB0YWcoXCJPcGVuTWVudVNjcmVlblwiKTtcclxuZXhwb3J0IGNvbnN0IE9wZW5TYXZlU2NyZWVuID0gKCkgPT4gdGFnKFwiT3BlblNhdmVTY3JlZW5cIik7XHJcbmV4cG9ydCBjb25zdCBHYW1lT3ZlciA9ICgpID0+IHRhZyhcIkdhbWVPdmVyXCIpO1xyXG5leHBvcnQgY29uc3QgUmV0dXJuVG9UaXRsZVNjcmVlbiA9ICgpID0+IHRhZyhcIlJldHVyblRvVGl0bGVTY3JlZW5cIik7XHJcbiIsImltcG9ydCB7IENPTE9SX1RPTkUsIFdFQVRIRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IENvbG9yNCB9IGZyb20gXCIuLi90eXBlXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJnQ29sb3JUb25lLFxyXG4gIGFyZ0ludCxcclxuICBhcmdQcmVzZXQsXHJcbiAgYXJnc0NvbG9yLFxyXG4gIGpvaW5Ta2lwLFxyXG4gIHRhZyxcclxufSBmcm9tIFwiLi4vdmFsaWRhdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGYWRlT3V0ID0gKCkgPT4gdGFnKFwiRmFkZU91dFwiKTtcclxuZXhwb3J0IGNvbnN0IEZhZGVJbiA9ICgpID0+IHRhZyhcIkZhZGVJblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW50U2NyZWVuID0gKFxyXG4gIGNvbG9yPzoga2V5b2YgdHlwZW9mIENPTE9SX1RPTkUgfCBDb2xvcjQsXHJcbiAgdGltZT86IG51bWJlclxyXG4pID0+IHRhZyhcIlRpbnRTY3JlZW5cIiwgW2pvaW5Ta2lwKG51bGwsIFtjb2xvciAmJiBhcmdDb2xvclRvbmUoY29sb3IpLCB0aW1lXSldKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGbGFzaFNjcmVlbiA9IChjb2xvcjogQ29sb3I0LCB0aW1lOiBudW1iZXIsIHdhaXQ/OiBib29sZWFuKSA9PlxyXG4gIHRhZyhcIkZsYXNoU2NyZWVuXCIsIFthcmdzQ29sb3IoY29sb3IpLCB0aW1lLCB3YWl0XSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2hha2VTY3JlZW4gPSAoXHJcbiAgdmVsb2NpdHk6IG51bWJlcixcclxuICBzcGVlZDogbnVtYmVyLFxyXG4gIHRpbWU6IG51bWJlcixcclxuICB3YWl0PzogYm9vbGVhblxyXG4pID0+IHRhZyhcIlNoYWtlU2NyZWVuXCIsIFthcmdJbnQodmVsb2NpdHkpLCBhcmdJbnQoc3BlZWQpLCBhcmdJbnQodGltZSksIHdhaXRdKTtcclxuXHJcbmV4cG9ydCBjb25zdCBTZXRXZWF0aGVyRWZmZWN0ID0gKFxyXG4gIHdlYXRoZXI6IGtleW9mIHR5cGVvZiBXRUFUSEVSLFxyXG4gIHZlbG9jaXR5OiBudW1iZXIsXHJcbiAgdGltZTogbnVtYmVyLFxyXG4gIHdhaXQ/OiBib29sZWFuXHJcbikgPT5cclxuICB0YWcoXCJTZXRXZWF0aGVyRWZmZWN0XCIsIFtcclxuICAgIGFyZ1ByZXNldCh3ZWF0aGVyLCBXRUFUSEVSKSxcclxuICAgIGFyZ0ludCh2ZWxvY2l0eSksXHJcbiAgICBhcmdJbnQodGltZSksXHJcbiAgICB3YWl0LFxyXG4gIF0pO1xyXG4iLCJpbXBvcnQgeyBWRUhJQ0xFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBDb2xvcjMsIFNvdW5kIH0gZnJvbSBcIi4uL3R5cGVcIjtcclxuaW1wb3J0IHtcclxuICBhcmdJZCxcclxuICBhcmdQcmVzZXQsXHJcbiAgYXJnUmFuZ2UsXHJcbiAgYXJnc0NvbG9yLFxyXG4gIGFyZ3NTb3VuZCxcclxuICB0YWcsXHJcbn0gZnJvbSBcIi4uL3ZhbGlkYXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlVmVoaWNsZUJnbSA9ICh2ZWhpY2xlOiBrZXlvZiB0eXBlb2YgVkVISUNMRSwgc291bmQ6IFNvdW5kKSA9PlxyXG4gIHRhZyhcIkNoYW5nZVZlaGljbGVCZ21cIiwgW2FyZ1ByZXNldCh2ZWhpY2xlLCBWRUhJQ0xFKSwgYXJnc1NvdW5kKHNvdW5kKV0pO1xyXG5cclxuY29uc3QgY29tbW9uQ2hhbmdlID0gKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IChhbGxvdzogYm9vbGVhbikgPT4gdGFnKG5hbWUsIFthbGxvd10pO1xyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VTYXZlQWNjZXNzID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlU2F2ZUFjY2Vzc1wiKTtcclxuZXhwb3J0IGNvbnN0IENoYW5nZU1lbnVBY2Nlc3MgPSBjb21tb25DaGFuZ2UoXCJDaGFuZ2VNZW51QWNjZXNzXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlRW5jb3VudGVyID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlRW5jb3VudGVyXCIpO1xyXG5leHBvcnQgY29uc3QgQ2hhbmdlRm9ybWF0aW9uQWNjZXNzID0gY29tbW9uQ2hhbmdlKFwiQ2hhbmdlRm9ybWF0aW9uQWNjZXNzXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYW5nZVdpbmRvd0NvbG9yID0gKGNvbG9yOiBDb2xvcjMpID0+XHJcbiAgdGFnKFwiQ2hhbmdlV2luZG93Q29sb3JcIiwgW2FyZ3NDb2xvcihjb2xvcildKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFuZ2VBY3RvckltYWdlcyA9IChcclxuICBpZDogbnVtYmVyLFxyXG4gIGZhY2U6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0sXHJcbiAgY2hhcmFjdGVyOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9LFxyXG4gIGJhdHRsZXI6IHN0cmluZ1xyXG4pID0+XHJcbiAgdGFnKFwiQ2hhbmdlQWN0b3JJbWFnZXNcIiwgW1xyXG4gICAgYXJnSWQoaWQpLFxyXG4gICAgZmFjZS5uYW1lLFxyXG4gICAgYXJnUmFuZ2UoZmFjZS5pbmRleCwgeyBmcm9tOiAwLCB0bzogMTUgfSksXHJcbiAgICBjaGFyYWN0ZXIubmFtZSxcclxuICAgIGFyZ1JhbmdlKGNoYXJhY3Rlci5pbmRleCwgeyBmcm9tOiAwLCB0bzogNyB9KSxcclxuICAgIGJhdHRsZXIsXHJcbiAgXSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbmdlVmVoaWNsZUltYWdlID0gKFxyXG4gIHZlaGljbGU6IGtleW9mIHR5cGVvZiBWRUhJQ0xFLFxyXG4gIGltYWdlOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9XHJcbikgPT5cclxuICB0YWcoXCJDaGFuZ2VBY3RvckltYWdlc1wiLCBbXHJcbiAgICBhcmdQcmVzZXQodmVoaWNsZSwgVkVISUNMRSksXHJcbiAgICBpbWFnZS5uYW1lLFxyXG4gICAgYXJnUmFuZ2UoaW1hZ2UuaW5kZXgsIHsgZnJvbTogMCwgdG86IDcgfSksXHJcbiAgXSk7XHJcbiIsImV4cG9ydCB7IGV2IGFzIHBhcnNlIH0gZnJvbSBcIi4vcGFyc2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFjdG9yIGZyb20gXCIuL2V2ZW50cy9hY3RvclwiO1xyXG5pbXBvcnQgKiBhcyBiYXR0bGUgZnJvbSBcIi4vZXZlbnRzL2JhdHRsZVwiO1xyXG5pbXBvcnQgKiBhcyBjaGFyYWN0ZXIgZnJvbSBcIi4vZXZlbnRzL2NoYXJhY3RlclwiO1xyXG5pbXBvcnQgKiBhcyBmbG93IGZyb20gXCIuL2V2ZW50cy9mbG93XCI7XHJcbmltcG9ydCAqIGFzIGludGVycHJldGVyIGZyb20gXCIuL2V2ZW50cy9pbnRlcnByZXRlclwiO1xyXG5pbXBvcnQgKiBhcyBtYXAgZnJvbSBcIi4vZXZlbnRzL21hcFwiO1xyXG5pbXBvcnQgKiBhcyBtZWRpYSBmcm9tIFwiLi9ldmVudHMvbWVkaWFcIjtcclxuaW1wb3J0ICogYXMgbWVzc2FnZSBmcm9tIFwiLi9ldmVudHMvbWVzc2FnZVwiO1xyXG5pbXBvcnQgKiBhcyBtb3ZlbWVudCBmcm9tIFwiLi9ldmVudHMvbW92ZW1lbnRcIjtcclxuaW1wb3J0ICogYXMgcGFydHkgZnJvbSBcIi4vZXZlbnRzL3BhcnR5XCI7XHJcbmltcG9ydCAqIGFzIHBpY3R1cmUgZnJvbSBcIi4vZXZlbnRzL3BpY3R1cmVcIjtcclxuaW1wb3J0ICogYXMgcHJvZ3Jlc3MgZnJvbSBcIi4vZXZlbnRzL3Byb2dyZXNzXCI7XHJcbmltcG9ydCAqIGFzIHNjZW5lIGZyb20gXCIuL2V2ZW50cy9zY2VuZVwiO1xyXG5pbXBvcnQgKiBhcyBzY3JlZW4gZnJvbSBcIi4vZXZlbnRzL3NjcmVlblwiO1xyXG5pbXBvcnQgKiBhcyBzeXN0ZW0gZnJvbSBcIi4vZXZlbnRzL3N5c3RlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcclxuICBtZXNzYWdlLFxyXG4gIHByb2dyZXNzLFxyXG4gIGZsb3csXHJcbiAgcGFydHksXHJcbiAgYWN0b3IsXHJcbiAgbW92ZW1lbnQsXHJcbiAgY2hhcmFjdGVyLFxyXG4gIHBpY3R1cmUsXHJcbiAgc2NyZWVuLFxyXG4gIG1lZGlhLFxyXG4gIHNjZW5lLFxyXG4gIHN5c3RlbSxcclxuICBtYXAsXHJcbiAgYmF0dGxlLFxyXG4gIGludGVycHJldGVyLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiY29tbW9uQ2hhbmdlIiwiaWQiLCJtaW4iLCJzZWMiLCJjaGFyYWN0ZXIiXSwibWFwcGluZ3MiOiJBQUFPLE1BQU0sS0FBSyxJQUFJLFFBQWtCLElBQUksS0FBSyxJQUFJO0FDQTlDLE1BQU0sb0JBQW9CO0FBQUEsRUFDL0IsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLEVBQ0wsYUFBYTtBQUNmO0FBQ08sTUFBTSw2QkFBNkI7QUFBQSxFQUN4QyxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQ1Q7QUFPTyxN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
