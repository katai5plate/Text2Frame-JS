(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Text2FrameJS = {}));
})(this, function(exports2) {
  "use strict";
  const parse = (...arr) => arr.join("\n");
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
  const PluginCommandMV = (command2) => tag("PluginCommand", [command2]);
  const PluginCommandMZ = (name, method, command2, args) => tag("PluginCommandMZ", [
    name,
    method,
    command2,
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
    const parse2 = position.mode === "DIRECT" ? argInt : (variableId) => argVariableId({ variableId });
    return `Position[${argPreset(position.origin, PICTURE_ORIGIN)}][${parse2(
      position.x
    )}][${parse2(position.y)}]`;
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
  const require$$1$1 = {};
  function getDefaultExportFromCjs$1(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var events$1 = { exports: {} };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events$1.exports = EventEmitter;
  events$1.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var eventsExports = events$1.exports;
  const require$$0 = /* @__PURE__ */ getDefaultExportFromCjs$1(eventsExports);
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var Text2Frame$1 = { exports: {} };
  var commander = { exports: {} };
  var argument = {};
  var error = {};
  var hasRequiredError;
  function requireError() {
    if (hasRequiredError)
      return error;
    hasRequiredError = 1;
    class CommanderError extends Error {
      /**
       * Constructs the CommanderError class
       * @param {number} exitCode suggested exit code which could be used with process.exit
       * @param {string} code an id string representing the error
       * @param {string} message human-readable description of the error
       * @constructor
       */
      constructor(exitCode, code, message2) {
        super(message2);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.code = code;
        this.exitCode = exitCode;
        this.nestedError = void 0;
      }
    }
    class InvalidArgumentError extends CommanderError {
      /**
       * Constructs the InvalidArgumentError class
       * @param {string} [message] explanation of why argument is invalid
       * @constructor
       */
      constructor(message2) {
        super(1, "commander.invalidArgument", message2);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
      }
    }
    error.CommanderError = CommanderError;
    error.InvalidArgumentError = InvalidArgumentError;
    return error;
  }
  var hasRequiredArgument;
  function requireArgument() {
    if (hasRequiredArgument)
      return argument;
    hasRequiredArgument = 1;
    const { InvalidArgumentError } = requireError();
    class Argument {
      /**
       * Initialize a new command argument with the given name and description.
       * The default is that the argument is required, and you can explicitly
       * indicate this with <> around the name. Put [] around the name for an optional argument.
       *
       * @param {string} name
       * @param {string} [description]
       */
      constructor(name, description) {
        this.description = description || "";
        this.variadic = false;
        this.parseArg = void 0;
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.argChoices = void 0;
        switch (name[0]) {
          case "<":
            this.required = true;
            this._name = name.slice(1, -1);
            break;
          case "[":
            this.required = false;
            this._name = name.slice(1, -1);
            break;
          default:
            this.required = true;
            this._name = name;
            break;
        }
        if (this._name.length > 3 && this._name.slice(-3) === "...") {
          this.variadic = true;
          this._name = this._name.slice(0, -3);
        }
      }
      /**
       * Return argument name.
       *
       * @return {string}
       */
      name() {
        return this._name;
      }
      /**
       * @api private
       */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [value];
        }
        return previous.concat(value);
      }
      /**
       * Set the default value, and optionally supply the description to be displayed in the help.
       *
       * @param {*} value
       * @param {string} [description]
       * @return {Argument}
       */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
       * Set the custom handler for processing CLI command arguments into argument values.
       *
       * @param {Function} [fn]
       * @return {Argument}
       */
      argParser(fn) {
        this.parseArg = fn;
        return this;
      }
      /**
       * Only allow argument value to be one of choices.
       *
       * @param {string[]} values
       * @return {Argument}
       */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
       * Make argument required.
       */
      argRequired() {
        this.required = true;
        return this;
      }
      /**
       * Make argument optional.
       */
      argOptional() {
        this.required = false;
        return this;
      }
    }
    function humanReadableArgName(arg) {
      const nameOutput = arg.name() + (arg.variadic === true ? "..." : "");
      return arg.required ? "<" + nameOutput + ">" : "[" + nameOutput + "]";
    }
    argument.Argument = Argument;
    argument.humanReadableArgName = humanReadableArgName;
    return argument;
  }
  var command = {};
  var help = {};
  var hasRequiredHelp;
  function requireHelp() {
    if (hasRequiredHelp)
      return help;
    hasRequiredHelp = 1;
    const { humanReadableArgName } = requireArgument();
    class Help {
      constructor() {
        this.helpWidth = void 0;
        this.sortSubcommands = false;
        this.sortOptions = false;
        this.showGlobalOptions = false;
      }
      /**
       * Get an array of the visible subcommands. Includes a placeholder for the implicit help command, if there is one.
       *
       * @param {Command} cmd
       * @returns {Command[]}
       */
      visibleCommands(cmd) {
        const visibleCommands = cmd.commands.filter((cmd2) => !cmd2._hidden);
        if (cmd._hasImplicitHelpCommand()) {
          const [, helpName, helpArgs] = cmd._helpCommandnameAndArgs.match(/([^ ]+) *(.*)/);
          const helpCommand = cmd.createCommand(helpName).helpOption(false);
          helpCommand.description(cmd._helpCommandDescription);
          if (helpArgs)
            helpCommand.arguments(helpArgs);
          visibleCommands.push(helpCommand);
        }
        if (this.sortSubcommands) {
          visibleCommands.sort((a, b) => {
            return a.name().localeCompare(b.name());
          });
        }
        return visibleCommands;
      }
      /**
       * Compare options for sort.
       *
       * @param {Option} a
       * @param {Option} b
       * @returns number
       */
      compareOptions(a, b) {
        const getSortKey = (option2) => {
          return option2.short ? option2.short.replace(/^-/, "") : option2.long.replace(/^--/, "");
        };
        return getSortKey(a).localeCompare(getSortKey(b));
      }
      /**
       * Get an array of the visible options. Includes a placeholder for the implicit help option, if there is one.
       *
       * @param {Command} cmd
       * @returns {Option[]}
       */
      visibleOptions(cmd) {
        const visibleOptions = cmd.options.filter((option2) => !option2.hidden);
        const showShortHelpFlag = cmd._hasHelpOption && cmd._helpShortFlag && !cmd._findOption(cmd._helpShortFlag);
        const showLongHelpFlag = cmd._hasHelpOption && !cmd._findOption(cmd._helpLongFlag);
        if (showShortHelpFlag || showLongHelpFlag) {
          let helpOption;
          if (!showShortHelpFlag) {
            helpOption = cmd.createOption(cmd._helpLongFlag, cmd._helpDescription);
          } else if (!showLongHelpFlag) {
            helpOption = cmd.createOption(cmd._helpShortFlag, cmd._helpDescription);
          } else {
            helpOption = cmd.createOption(cmd._helpFlags, cmd._helpDescription);
          }
          visibleOptions.push(helpOption);
        }
        if (this.sortOptions) {
          visibleOptions.sort(this.compareOptions);
        }
        return visibleOptions;
      }
      /**
       * Get an array of the visible global options. (Not including help.)
       *
       * @param {Command} cmd
       * @returns {Option[]}
       */
      visibleGlobalOptions(cmd) {
        if (!this.showGlobalOptions)
          return [];
        const globalOptions = [];
        for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
          const visibleOptions = ancestorCmd.options.filter((option2) => !option2.hidden);
          globalOptions.push(...visibleOptions);
        }
        if (this.sortOptions) {
          globalOptions.sort(this.compareOptions);
        }
        return globalOptions;
      }
      /**
       * Get an array of the arguments if any have a description.
       *
       * @param {Command} cmd
       * @returns {Argument[]}
       */
      visibleArguments(cmd) {
        if (cmd._argsDescription) {
          cmd.registeredArguments.forEach((argument2) => {
            argument2.description = argument2.description || cmd._argsDescription[argument2.name()] || "";
          });
        }
        if (cmd.registeredArguments.find((argument2) => argument2.description)) {
          return cmd.registeredArguments;
        }
        return [];
      }
      /**
       * Get the command term to show in the list of subcommands.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      subcommandTerm(cmd) {
        const args = cmd.registeredArguments.map((arg) => humanReadableArgName(arg)).join(" ");
        return cmd._name + (cmd._aliases[0] ? "|" + cmd._aliases[0] : "") + (cmd.options.length ? " [options]" : "") + // simplistic check for non-help option
        (args ? " " + args : "");
      }
      /**
       * Get the option term to show in the list of options.
       *
       * @param {Option} option
       * @returns {string}
       */
      optionTerm(option2) {
        return option2.flags;
      }
      /**
       * Get the argument term to show in the list of arguments.
       *
       * @param {Argument} argument
       * @returns {string}
       */
      argumentTerm(argument2) {
        return argument2.name();
      }
      /**
       * Get the longest command term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestSubcommandTermLength(cmd, helper) {
        return helper.visibleCommands(cmd).reduce((max, command2) => {
          return Math.max(max, helper.subcommandTerm(command2).length);
        }, 0);
      }
      /**
       * Get the longest option term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestOptionTermLength(cmd, helper) {
        return helper.visibleOptions(cmd).reduce((max, option2) => {
          return Math.max(max, helper.optionTerm(option2).length);
        }, 0);
      }
      /**
       * Get the longest global option term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestGlobalOptionTermLength(cmd, helper) {
        return helper.visibleGlobalOptions(cmd).reduce((max, option2) => {
          return Math.max(max, helper.optionTerm(option2).length);
        }, 0);
      }
      /**
       * Get the longest argument term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      longestArgumentTermLength(cmd, helper) {
        return helper.visibleArguments(cmd).reduce((max, argument2) => {
          return Math.max(max, helper.argumentTerm(argument2).length);
        }, 0);
      }
      /**
       * Get the command usage to be displayed at the top of the built-in help.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      commandUsage(cmd) {
        let cmdName = cmd._name;
        if (cmd._aliases[0]) {
          cmdName = cmdName + "|" + cmd._aliases[0];
        }
        let ancestorCmdNames = "";
        for (let ancestorCmd = cmd.parent; ancestorCmd; ancestorCmd = ancestorCmd.parent) {
          ancestorCmdNames = ancestorCmd.name() + " " + ancestorCmdNames;
        }
        return ancestorCmdNames + cmdName + " " + cmd.usage();
      }
      /**
       * Get the description for the command.
       *
       * @param {Command} cmd
       * @returns {string}
       */
      commandDescription(cmd) {
        return cmd.description();
      }
      /**
       * Get the subcommand summary to show in the list of subcommands.
       * (Fallback to description for backwards compatibility.)
       *
       * @param {Command} cmd
       * @returns {string}
       */
      subcommandDescription(cmd) {
        return cmd.summary() || cmd.description();
      }
      /**
       * Get the option description to show in the list of options.
       *
       * @param {Option} option
       * @return {string}
       */
      optionDescription(option2) {
        const extraInfo = [];
        if (option2.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${option2.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (option2.defaultValue !== void 0) {
          const showDefault = option2.required || option2.optional || option2.isBoolean() && typeof option2.defaultValue === "boolean";
          if (showDefault) {
            extraInfo.push(`default: ${option2.defaultValueDescription || JSON.stringify(option2.defaultValue)}`);
          }
        }
        if (option2.presetArg !== void 0 && option2.optional) {
          extraInfo.push(`preset: ${JSON.stringify(option2.presetArg)}`);
        }
        if (option2.envVar !== void 0) {
          extraInfo.push(`env: ${option2.envVar}`);
        }
        if (extraInfo.length > 0) {
          return `${option2.description} (${extraInfo.join(", ")})`;
        }
        return option2.description;
      }
      /**
       * Get the argument description to show in the list of arguments.
       *
       * @param {Argument} argument
       * @return {string}
       */
      argumentDescription(argument2) {
        const extraInfo = [];
        if (argument2.argChoices) {
          extraInfo.push(
            // use stringify to match the display of the default value
            `choices: ${argument2.argChoices.map((choice) => JSON.stringify(choice)).join(", ")}`
          );
        }
        if (argument2.defaultValue !== void 0) {
          extraInfo.push(`default: ${argument2.defaultValueDescription || JSON.stringify(argument2.defaultValue)}`);
        }
        if (extraInfo.length > 0) {
          const extraDescripton = `(${extraInfo.join(", ")})`;
          if (argument2.description) {
            return `${argument2.description} ${extraDescripton}`;
          }
          return extraDescripton;
        }
        return argument2.description;
      }
      /**
       * Generate the built-in help text.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {string}
       */
      formatHelp(cmd, helper) {
        const termWidth = helper.padWidth(cmd, helper);
        const helpWidth = helper.helpWidth || 80;
        const itemIndentWidth = 2;
        const itemSeparatorWidth = 2;
        function formatItem(term, description) {
          if (description) {
            const fullText = `${term.padEnd(termWidth + itemSeparatorWidth)}${description}`;
            return helper.wrap(fullText, helpWidth - itemIndentWidth, termWidth + itemSeparatorWidth);
          }
          return term;
        }
        function formatList(textArray) {
          return textArray.join("\n").replace(/^/gm, " ".repeat(itemIndentWidth));
        }
        let output = [`Usage: ${helper.commandUsage(cmd)}`, ""];
        const commandDescription = helper.commandDescription(cmd);
        if (commandDescription.length > 0) {
          output = output.concat([helper.wrap(commandDescription, helpWidth, 0), ""]);
        }
        const argumentList = helper.visibleArguments(cmd).map((argument2) => {
          return formatItem(helper.argumentTerm(argument2), helper.argumentDescription(argument2));
        });
        if (argumentList.length > 0) {
          output = output.concat(["Arguments:", formatList(argumentList), ""]);
        }
        const optionList = helper.visibleOptions(cmd).map((option2) => {
          return formatItem(helper.optionTerm(option2), helper.optionDescription(option2));
        });
        if (optionList.length > 0) {
          output = output.concat(["Options:", formatList(optionList), ""]);
        }
        if (this.showGlobalOptions) {
          const globalOptionList = helper.visibleGlobalOptions(cmd).map((option2) => {
            return formatItem(helper.optionTerm(option2), helper.optionDescription(option2));
          });
          if (globalOptionList.length > 0) {
            output = output.concat(["Global Options:", formatList(globalOptionList), ""]);
          }
        }
        const commandList = helper.visibleCommands(cmd).map((cmd2) => {
          return formatItem(helper.subcommandTerm(cmd2), helper.subcommandDescription(cmd2));
        });
        if (commandList.length > 0) {
          output = output.concat(["Commands:", formatList(commandList), ""]);
        }
        return output.join("\n");
      }
      /**
       * Calculate the pad width from the maximum term length.
       *
       * @param {Command} cmd
       * @param {Help} helper
       * @returns {number}
       */
      padWidth(cmd, helper) {
        return Math.max(
          helper.longestOptionTermLength(cmd, helper),
          helper.longestGlobalOptionTermLength(cmd, helper),
          helper.longestSubcommandTermLength(cmd, helper),
          helper.longestArgumentTermLength(cmd, helper)
        );
      }
      /**
       * Wrap the given string to width characters per line, with lines after the first indented.
       * Do not wrap if insufficient room for wrapping (minColumnWidth), or string is manually formatted.
       *
       * @param {string} str
       * @param {number} width
       * @param {number} indent
       * @param {number} [minColumnWidth=40]
       * @return {string}
       *
       */
      wrap(str, width, indent, minColumnWidth = 40) {
        const indents = " \\f\\t\\v   -   　\uFEFF";
        const manualIndent = new RegExp(`[\\n][${indents}]+`);
        if (str.match(manualIndent))
          return str;
        const columnWidth = width - indent;
        if (columnWidth < minColumnWidth)
          return str;
        const leadingStr = str.slice(0, indent);
        const columnText = str.slice(indent).replace("\r\n", "\n");
        const indentString = " ".repeat(indent);
        const zeroWidthSpace = "​";
        const breaks = `\\s${zeroWidthSpace}`;
        const regex = new RegExp(`
|.{1,${columnWidth - 1}}([${breaks}]|$)|[^${breaks}]+?([${breaks}]|$)`, "g");
        const lines = columnText.match(regex) || [];
        return leadingStr + lines.map((line, i) => {
          if (line === "\n")
            return "";
          return (i > 0 ? indentString : "") + line.trimEnd();
        }).join("\n");
      }
    }
    help.Help = Help;
    return help;
  }
  var option = {};
  var hasRequiredOption;
  function requireOption() {
    if (hasRequiredOption)
      return option;
    hasRequiredOption = 1;
    const { InvalidArgumentError } = requireError();
    class Option {
      /**
       * Initialize a new `Option` with the given `flags` and `description`.
       *
       * @param {string} flags
       * @param {string} [description]
       */
      constructor(flags, description) {
        this.flags = flags;
        this.description = description || "";
        this.required = flags.includes("<");
        this.optional = flags.includes("[");
        this.variadic = /\w\.\.\.[>\]]$/.test(flags);
        this.mandatory = false;
        const optionFlags = splitOptionFlags(flags);
        this.short = optionFlags.shortFlag;
        this.long = optionFlags.longFlag;
        this.negate = false;
        if (this.long) {
          this.negate = this.long.startsWith("--no-");
        }
        this.defaultValue = void 0;
        this.defaultValueDescription = void 0;
        this.presetArg = void 0;
        this.envVar = void 0;
        this.parseArg = void 0;
        this.hidden = false;
        this.argChoices = void 0;
        this.conflictsWith = [];
        this.implied = void 0;
      }
      /**
       * Set the default value, and optionally supply the description to be displayed in the help.
       *
       * @param {*} value
       * @param {string} [description]
       * @return {Option}
       */
      default(value, description) {
        this.defaultValue = value;
        this.defaultValueDescription = description;
        return this;
      }
      /**
       * Preset to use when option used without option-argument, especially optional but also boolean and negated.
       * The custom processing (parseArg) is called.
       *
       * @example
       * new Option('--color').default('GREYSCALE').preset('RGB');
       * new Option('--donate [amount]').preset('20').argParser(parseFloat);
       *
       * @param {*} arg
       * @return {Option}
       */
      preset(arg) {
        this.presetArg = arg;
        return this;
      }
      /**
       * Add option name(s) that conflict with this option.
       * An error will be displayed if conflicting options are found during parsing.
       *
       * @example
       * new Option('--rgb').conflicts('cmyk');
       * new Option('--js').conflicts(['ts', 'jsx']);
       *
       * @param {string | string[]} names
       * @return {Option}
       */
      conflicts(names) {
        this.conflictsWith = this.conflictsWith.concat(names);
        return this;
      }
      /**
       * Specify implied option values for when this option is set and the implied options are not.
       *
       * The custom processing (parseArg) is not called on the implied values.
       *
       * @example
       * program
       *   .addOption(new Option('--log', 'write logging information to file'))
       *   .addOption(new Option('--trace', 'log extra details').implies({ log: 'trace.txt' }));
       *
       * @param {Object} impliedOptionValues
       * @return {Option}
       */
      implies(impliedOptionValues) {
        let newImplied = impliedOptionValues;
        if (typeof impliedOptionValues === "string") {
          newImplied = { [impliedOptionValues]: true };
        }
        this.implied = Object.assign(this.implied || {}, newImplied);
        return this;
      }
      /**
       * Set environment variable to check for option value.
       *
       * An environment variable is only used if when processed the current option value is
       * undefined, or the source of the current value is 'default' or 'config' or 'env'.
       *
       * @param {string} name
       * @return {Option}
       */
      env(name) {
        this.envVar = name;
        return this;
      }
      /**
       * Set the custom handler for processing CLI option arguments into option values.
       *
       * @param {Function} [fn]
       * @return {Option}
       */
      argParser(fn) {
        this.parseArg = fn;
        return this;
      }
      /**
       * Whether the option is mandatory and must have a value after parsing.
       *
       * @param {boolean} [mandatory=true]
       * @return {Option}
       */
      makeOptionMandatory(mandatory = true) {
        this.mandatory = !!mandatory;
        return this;
      }
      /**
       * Hide option in help.
       *
       * @param {boolean} [hide=true]
       * @return {Option}
       */
      hideHelp(hide = true) {
        this.hidden = !!hide;
        return this;
      }
      /**
       * @api private
       */
      _concatValue(value, previous) {
        if (previous === this.defaultValue || !Array.isArray(previous)) {
          return [value];
        }
        return previous.concat(value);
      }
      /**
       * Only allow option value to be one of choices.
       *
       * @param {string[]} values
       * @return {Option}
       */
      choices(values) {
        this.argChoices = values.slice();
        this.parseArg = (arg, previous) => {
          if (!this.argChoices.includes(arg)) {
            throw new InvalidArgumentError(`Allowed choices are ${this.argChoices.join(", ")}.`);
          }
          if (this.variadic) {
            return this._concatValue(arg, previous);
          }
          return arg;
        };
        return this;
      }
      /**
       * Return option name.
       *
       * @return {string}
       */
      name() {
        if (this.long) {
          return this.long.replace(/^--/, "");
        }
        return this.short.replace(/^-/, "");
      }
      /**
       * Return option name, in a camelcase format that can be used
       * as a object attribute key.
       *
       * @return {string}
       * @api private
       */
      attributeName() {
        return camelcase(this.name().replace(/^no-/, ""));
      }
      /**
       * Check if `arg` matches the short or long flag.
       *
       * @param {string} arg
       * @return {boolean}
       * @api private
       */
      is(arg) {
        return this.short === arg || this.long === arg;
      }
      /**
       * Return whether a boolean option.
       *
       * Options are one of boolean, negated, required argument, or optional argument.
       *
       * @return {boolean}
       * @api private
       */
      isBoolean() {
        return !this.required && !this.optional && !this.negate;
      }
    }
    class DualOptions {
      /**
       * @param {Option[]} options
       */
      constructor(options) {
        this.positiveOptions = /* @__PURE__ */ new Map();
        this.negativeOptions = /* @__PURE__ */ new Map();
        this.dualOptions = /* @__PURE__ */ new Set();
        options.forEach((option2) => {
          if (option2.negate) {
            this.negativeOptions.set(option2.attributeName(), option2);
          } else {
            this.positiveOptions.set(option2.attributeName(), option2);
          }
        });
        this.negativeOptions.forEach((value, key) => {
          if (this.positiveOptions.has(key)) {
            this.dualOptions.add(key);
          }
        });
      }
      /**
       * Did the value come from the option, and not from possible matching dual option?
       *
       * @param {*} value
       * @param {Option} option
       * @returns {boolean}
       */
      valueFromOption(value, option2) {
        const optionKey = option2.attributeName();
        if (!this.dualOptions.has(optionKey))
          return true;
        const preset = this.negativeOptions.get(optionKey).presetArg;
        const negativeValue = preset !== void 0 ? preset : false;
        return option2.negate === (negativeValue === value);
      }
    }
    function camelcase(str) {
      return str.split("-").reduce((str2, word) => {
        return str2 + word[0].toUpperCase() + word.slice(1);
      });
    }
    function splitOptionFlags(flags) {
      let shortFlag;
      let longFlag;
      const flagParts = flags.split(/[ |,]+/);
      if (flagParts.length > 1 && !/^[[<]/.test(flagParts[1]))
        shortFlag = flagParts.shift();
      longFlag = flagParts.shift();
      if (!shortFlag && /^-[^-]$/.test(longFlag)) {
        shortFlag = longFlag;
        longFlag = void 0;
      }
      return { shortFlag, longFlag };
    }
    option.Option = Option;
    option.splitOptionFlags = splitOptionFlags;
    option.DualOptions = DualOptions;
    return option;
  }
  var suggestSimilar = {};
  var hasRequiredSuggestSimilar;
  function requireSuggestSimilar() {
    if (hasRequiredSuggestSimilar)
      return suggestSimilar;
    hasRequiredSuggestSimilar = 1;
    const maxDistance = 3;
    function editDistance(a, b) {
      if (Math.abs(a.length - b.length) > maxDistance)
        return Math.max(a.length, b.length);
      const d = [];
      for (let i = 0; i <= a.length; i++) {
        d[i] = [i];
      }
      for (let j = 0; j <= b.length; j++) {
        d[0][j] = j;
      }
      for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
          let cost = 1;
          if (a[i - 1] === b[j - 1]) {
            cost = 0;
          } else {
            cost = 1;
          }
          d[i][j] = Math.min(
            d[i - 1][j] + 1,
            // deletion
            d[i][j - 1] + 1,
            // insertion
            d[i - 1][j - 1] + cost
            // substitution
          );
          if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
            d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
          }
        }
      }
      return d[a.length][b.length];
    }
    function suggestSimilar$1(word, candidates) {
      if (!candidates || candidates.length === 0)
        return "";
      candidates = Array.from(new Set(candidates));
      const searchingOptions = word.startsWith("--");
      if (searchingOptions) {
        word = word.slice(2);
        candidates = candidates.map((candidate) => candidate.slice(2));
      }
      let similar = [];
      let bestDistance = maxDistance;
      const minSimilarity = 0.4;
      candidates.forEach((candidate) => {
        if (candidate.length <= 1)
          return;
        const distance = editDistance(word, candidate);
        const length = Math.max(word.length, candidate.length);
        const similarity = (length - distance) / length;
        if (similarity > minSimilarity) {
          if (distance < bestDistance) {
            bestDistance = distance;
            similar = [candidate];
          } else if (distance === bestDistance) {
            similar.push(candidate);
          }
        }
      });
      similar.sort((a, b) => a.localeCompare(b));
      if (searchingOptions) {
        similar = similar.map((candidate) => `--${candidate}`);
      }
      if (similar.length > 1) {
        return `
(Did you mean one of ${similar.join(", ")}?)`;
      }
      if (similar.length === 1) {
        return `
(Did you mean ${similar[0]}?)`;
      }
      return "";
    }
    suggestSimilar.suggestSimilar = suggestSimilar$1;
    return suggestSimilar;
  }
  var hasRequiredCommand;
  function requireCommand() {
    if (hasRequiredCommand)
      return command;
    hasRequiredCommand = 1;
    const EventEmitter2 = require$$0.EventEmitter;
    const childProcess = require$$1$1;
    const path = require$$1$1;
    const fs = require$$1$1;
    const process2 = require$$1$1;
    const { Argument, humanReadableArgName } = requireArgument();
    const { CommanderError } = requireError();
    const { Help } = requireHelp();
    const { Option, splitOptionFlags, DualOptions } = requireOption();
    const { suggestSimilar: suggestSimilar2 } = requireSuggestSimilar();
    class Command extends EventEmitter2 {
      /**
       * Initialize a new `Command`.
       *
       * @param {string} [name]
       */
      constructor(name) {
        super();
        this.commands = [];
        this.options = [];
        this.parent = null;
        this._allowUnknownOption = false;
        this._allowExcessArguments = true;
        this.registeredArguments = [];
        this._args = this.registeredArguments;
        this.args = [];
        this.rawArgs = [];
        this.processedArgs = [];
        this._scriptPath = null;
        this._name = name || "";
        this._optionValues = {};
        this._optionValueSources = {};
        this._storeOptionsAsProperties = false;
        this._actionHandler = null;
        this._executableHandler = false;
        this._executableFile = null;
        this._executableDir = null;
        this._defaultCommandName = null;
        this._exitCallback = null;
        this._aliases = [];
        this._combineFlagAndOptionalValue = true;
        this._description = "";
        this._summary = "";
        this._argsDescription = void 0;
        this._enablePositionalOptions = false;
        this._passThroughOptions = false;
        this._lifeCycleHooks = {};
        this._showHelpAfterError = false;
        this._showSuggestionAfterError = true;
        this._outputConfiguration = {
          writeOut: (str) => process2.stdout.write(str),
          writeErr: (str) => process2.stderr.write(str),
          getOutHelpWidth: () => process2.stdout.isTTY ? process2.stdout.columns : void 0,
          getErrHelpWidth: () => process2.stderr.isTTY ? process2.stderr.columns : void 0,
          outputError: (str, write) => write(str)
        };
        this._hidden = false;
        this._hasHelpOption = true;
        this._helpFlags = "-h, --help";
        this._helpDescription = "display help for command";
        this._helpShortFlag = "-h";
        this._helpLongFlag = "--help";
        this._addImplicitHelpCommand = void 0;
        this._helpCommandName = "help";
        this._helpCommandnameAndArgs = "help [command]";
        this._helpCommandDescription = "display help for command";
        this._helpConfiguration = {};
      }
      /**
       * Copy settings that are useful to have in common across root command and subcommands.
       *
       * (Used internally when adding a command using `.command()` so subcommands inherit parent settings.)
       *
       * @param {Command} sourceCommand
       * @return {Command} `this` command for chaining
       */
      copyInheritedSettings(sourceCommand) {
        this._outputConfiguration = sourceCommand._outputConfiguration;
        this._hasHelpOption = sourceCommand._hasHelpOption;
        this._helpFlags = sourceCommand._helpFlags;
        this._helpDescription = sourceCommand._helpDescription;
        this._helpShortFlag = sourceCommand._helpShortFlag;
        this._helpLongFlag = sourceCommand._helpLongFlag;
        this._helpCommandName = sourceCommand._helpCommandName;
        this._helpCommandnameAndArgs = sourceCommand._helpCommandnameAndArgs;
        this._helpCommandDescription = sourceCommand._helpCommandDescription;
        this._helpConfiguration = sourceCommand._helpConfiguration;
        this._exitCallback = sourceCommand._exitCallback;
        this._storeOptionsAsProperties = sourceCommand._storeOptionsAsProperties;
        this._combineFlagAndOptionalValue = sourceCommand._combineFlagAndOptionalValue;
        this._allowExcessArguments = sourceCommand._allowExcessArguments;
        this._enablePositionalOptions = sourceCommand._enablePositionalOptions;
        this._showHelpAfterError = sourceCommand._showHelpAfterError;
        this._showSuggestionAfterError = sourceCommand._showSuggestionAfterError;
        return this;
      }
      /**
       * @returns {Command[]}
       * @api private
       */
      _getCommandAndAncestors() {
        const result = [];
        for (let command2 = this; command2; command2 = command2.parent) {
          result.push(command2);
        }
        return result;
      }
      /**
       * Define a command.
       *
       * There are two styles of command: pay attention to where to put the description.
       *
       * @example
       * // Command implemented using action handler (description is supplied separately to `.command`)
       * program
       *   .command('clone <source> [destination]')
       *   .description('clone a repository into a newly created directory')
       *   .action((source, destination) => {
       *     console.log('clone command called');
       *   });
       *
       * // Command implemented using separate executable file (description is second parameter to `.command`)
       * program
       *   .command('start <service>', 'start named service')
       *   .command('stop [service]', 'stop named service, or all if no name supplied');
       *
       * @param {string} nameAndArgs - command name and arguments, args are `<required>` or `[optional]` and last may also be `variadic...`
       * @param {Object|string} [actionOptsOrExecDesc] - configuration options (for action), or description (for executable)
       * @param {Object} [execOpts] - configuration options (for executable)
       * @return {Command} returns new command for action handler, or `this` for executable command
       */
      command(nameAndArgs, actionOptsOrExecDesc, execOpts) {
        let desc = actionOptsOrExecDesc;
        let opts = execOpts;
        if (typeof desc === "object" && desc !== null) {
          opts = desc;
          desc = null;
        }
        opts = opts || {};
        const [, name, args] = nameAndArgs.match(/([^ ]+) *(.*)/);
        const cmd = this.createCommand(name);
        if (desc) {
          cmd.description(desc);
          cmd._executableHandler = true;
        }
        if (opts.isDefault)
          this._defaultCommandName = cmd._name;
        cmd._hidden = !!(opts.noHelp || opts.hidden);
        cmd._executableFile = opts.executableFile || null;
        if (args)
          cmd.arguments(args);
        this.commands.push(cmd);
        cmd.parent = this;
        cmd.copyInheritedSettings(this);
        if (desc)
          return this;
        return cmd;
      }
      /**
       * Factory routine to create a new unattached command.
       *
       * See .command() for creating an attached subcommand, which uses this routine to
       * create the command. You can override createCommand to customise subcommands.
       *
       * @param {string} [name]
       * @return {Command} new command
       */
      createCommand(name) {
        return new Command(name);
      }
      /**
       * You can customise the help with a subclass of Help by overriding createHelp,
       * or by overriding Help properties using configureHelp().
       *
       * @return {Help}
       */
      createHelp() {
        return Object.assign(new Help(), this.configureHelp());
      }
      /**
       * You can customise the help by overriding Help properties using configureHelp(),
       * or with a subclass of Help by overriding createHelp().
       *
       * @param {Object} [configuration] - configuration options
       * @return {Command|Object} `this` command for chaining, or stored configuration
       */
      configureHelp(configuration) {
        if (configuration === void 0)
          return this._helpConfiguration;
        this._helpConfiguration = configuration;
        return this;
      }
      /**
       * The default output goes to stdout and stderr. You can customise this for special
       * applications. You can also customise the display of errors by overriding outputError.
       *
       * The configuration properties are all functions:
       *
       *     // functions to change where being written, stdout and stderr
       *     writeOut(str)
       *     writeErr(str)
       *     // matching functions to specify width for wrapping help
       *     getOutHelpWidth()
       *     getErrHelpWidth()
       *     // functions based on what is being written out
       *     outputError(str, write) // used for displaying errors, and not used for displaying help
       *
       * @param {Object} [configuration] - configuration options
       * @return {Command|Object} `this` command for chaining, or stored configuration
       */
      configureOutput(configuration) {
        if (configuration === void 0)
          return this._outputConfiguration;
        Object.assign(this._outputConfiguration, configuration);
        return this;
      }
      /**
       * Display the help or a custom message after an error occurs.
       *
       * @param {boolean|string} [displayHelp]
       * @return {Command} `this` command for chaining
       */
      showHelpAfterError(displayHelp = true) {
        if (typeof displayHelp !== "string")
          displayHelp = !!displayHelp;
        this._showHelpAfterError = displayHelp;
        return this;
      }
      /**
       * Display suggestion of similar commands for unknown commands, or options for unknown options.
       *
       * @param {boolean} [displaySuggestion]
       * @return {Command} `this` command for chaining
       */
      showSuggestionAfterError(displaySuggestion = true) {
        this._showSuggestionAfterError = !!displaySuggestion;
        return this;
      }
      /**
       * Add a prepared subcommand.
       *
       * See .command() for creating an attached subcommand which inherits settings from its parent.
       *
       * @param {Command} cmd - new subcommand
       * @param {Object} [opts] - configuration options
       * @return {Command} `this` command for chaining
       */
      addCommand(cmd, opts) {
        if (!cmd._name) {
          throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);
        }
        opts = opts || {};
        if (opts.isDefault)
          this._defaultCommandName = cmd._name;
        if (opts.noHelp || opts.hidden)
          cmd._hidden = true;
        this.commands.push(cmd);
        cmd.parent = this;
        return this;
      }
      /**
       * Factory routine to create a new unattached argument.
       *
       * See .argument() for creating an attached argument, which uses this routine to
       * create the argument. You can override createArgument to return a custom argument.
       *
       * @param {string} name
       * @param {string} [description]
       * @return {Argument} new argument
       */
      createArgument(name, description) {
        return new Argument(name, description);
      }
      /**
       * Define argument syntax for command.
       *
       * The default is that the argument is required, and you can explicitly
       * indicate this with <> around the name. Put [] around the name for an optional argument.
       *
       * @example
       * program.argument('<input-file>');
       * program.argument('[output-file]');
       *
       * @param {string} name
       * @param {string} [description]
       * @param {Function|*} [fn] - custom argument processing function
       * @param {*} [defaultValue]
       * @return {Command} `this` command for chaining
       */
      argument(name, description, fn, defaultValue) {
        const argument2 = this.createArgument(name, description);
        if (typeof fn === "function") {
          argument2.default(defaultValue).argParser(fn);
        } else {
          argument2.default(fn);
        }
        this.addArgument(argument2);
        return this;
      }
      /**
       * Define argument syntax for command, adding multiple at once (without descriptions).
       *
       * See also .argument().
       *
       * @example
       * program.arguments('<cmd> [env]');
       *
       * @param {string} names
       * @return {Command} `this` command for chaining
       */
      arguments(names) {
        names.trim().split(/ +/).forEach((detail) => {
          this.argument(detail);
        });
        return this;
      }
      /**
       * Define argument syntax for command, adding a prepared argument.
       *
       * @param {Argument} argument
       * @return {Command} `this` command for chaining
       */
      addArgument(argument2) {
        const previousArgument = this.registeredArguments.slice(-1)[0];
        if (previousArgument && previousArgument.variadic) {
          throw new Error(`only the last argument can be variadic '${previousArgument.name()}'`);
        }
        if (argument2.required && argument2.defaultValue !== void 0 && argument2.parseArg === void 0) {
          throw new Error(`a default value for a required argument is never used: '${argument2.name()}'`);
        }
        this.registeredArguments.push(argument2);
        return this;
      }
      /**
       * Override default decision whether to add implicit help command.
       *
       *    addHelpCommand() // force on
       *    addHelpCommand(false); // force off
       *    addHelpCommand('help [cmd]', 'display help for [cmd]'); // force on with custom details
       *
       * @return {Command} `this` command for chaining
       */
      addHelpCommand(enableOrNameAndArgs, description) {
        if (enableOrNameAndArgs === false) {
          this._addImplicitHelpCommand = false;
        } else {
          this._addImplicitHelpCommand = true;
          if (typeof enableOrNameAndArgs === "string") {
            this._helpCommandName = enableOrNameAndArgs.split(" ")[0];
            this._helpCommandnameAndArgs = enableOrNameAndArgs;
          }
          this._helpCommandDescription = description || this._helpCommandDescription;
        }
        return this;
      }
      /**
       * @return {boolean}
       * @api private
       */
      _hasImplicitHelpCommand() {
        if (this._addImplicitHelpCommand === void 0) {
          return this.commands.length && !this._actionHandler && !this._findCommand("help");
        }
        return this._addImplicitHelpCommand;
      }
      /**
       * Add hook for life cycle event.
       *
       * @param {string} event
       * @param {Function} listener
       * @return {Command} `this` command for chaining
       */
      hook(event, listener) {
        const allowedValues = ["preSubcommand", "preAction", "postAction"];
        if (!allowedValues.includes(event)) {
          throw new Error(`Unexpected value for event passed to hook : '${event}'.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        if (this._lifeCycleHooks[event]) {
          this._lifeCycleHooks[event].push(listener);
        } else {
          this._lifeCycleHooks[event] = [listener];
        }
        return this;
      }
      /**
       * Register callback to use as replacement for calling process.exit.
       *
       * @param {Function} [fn] optional callback which will be passed a CommanderError, defaults to throwing
       * @return {Command} `this` command for chaining
       */
      exitOverride(fn) {
        if (fn) {
          this._exitCallback = fn;
        } else {
          this._exitCallback = (err) => {
            if (err.code !== "commander.executeSubCommandAsync") {
              throw err;
            }
          };
        }
        return this;
      }
      /**
       * Call process.exit, and _exitCallback if defined.
       *
       * @param {number} exitCode exit code for using with process.exit
       * @param {string} code an id string representing the error
       * @param {string} message human-readable description of the error
       * @return never
       * @api private
       */
      _exit(exitCode, code, message2) {
        if (this._exitCallback) {
          this._exitCallback(new CommanderError(exitCode, code, message2));
        }
        process2.exit(exitCode);
      }
      /**
       * Register callback `fn` for the command.
       *
       * @example
       * program
       *   .command('serve')
       *   .description('start service')
       *   .action(function() {
       *      // do work here
       *   });
       *
       * @param {Function} fn
       * @return {Command} `this` command for chaining
       */
      action(fn) {
        const listener = (args) => {
          const expectedArgsCount = this.registeredArguments.length;
          const actionArgs = args.slice(0, expectedArgsCount);
          if (this._storeOptionsAsProperties) {
            actionArgs[expectedArgsCount] = this;
          } else {
            actionArgs[expectedArgsCount] = this.opts();
          }
          actionArgs.push(this);
          return fn.apply(this, actionArgs);
        };
        this._actionHandler = listener;
        return this;
      }
      /**
       * Factory routine to create a new unattached option.
       *
       * See .option() for creating an attached option, which uses this routine to
       * create the option. You can override createOption to return a custom option.
       *
       * @param {string} flags
       * @param {string} [description]
       * @return {Option} new option
       */
      createOption(flags, description) {
        return new Option(flags, description);
      }
      /**
       * Wrap parseArgs to catch 'commander.invalidArgument'.
       *
       * @param {Option | Argument} target
       * @param {string} value
       * @param {*} previous
       * @param {string} invalidArgumentMessage
       * @api private
       */
      _callParseArg(target, value, previous, invalidArgumentMessage) {
        try {
          return target.parseArg(value, previous);
        } catch (err) {
          if (err.code === "commander.invalidArgument") {
            const message2 = `${invalidArgumentMessage} ${err.message}`;
            this.error(message2, { exitCode: err.exitCode, code: err.code });
          }
          throw err;
        }
      }
      /**
       * Add an option.
       *
       * @param {Option} option
       * @return {Command} `this` command for chaining
       */
      addOption(option2) {
        const oname = option2.name();
        const name = option2.attributeName();
        if (option2.negate) {
          const positiveLongFlag = option2.long.replace(/^--no-/, "--");
          if (!this._findOption(positiveLongFlag)) {
            this.setOptionValueWithSource(name, option2.defaultValue === void 0 ? true : option2.defaultValue, "default");
          }
        } else if (option2.defaultValue !== void 0) {
          this.setOptionValueWithSource(name, option2.defaultValue, "default");
        }
        this.options.push(option2);
        const handleOptionValue = (val, invalidValueMessage, valueSource) => {
          if (val == null && option2.presetArg !== void 0) {
            val = option2.presetArg;
          }
          const oldValue = this.getOptionValue(name);
          if (val !== null && option2.parseArg) {
            val = this._callParseArg(option2, val, oldValue, invalidValueMessage);
          } else if (val !== null && option2.variadic) {
            val = option2._concatValue(val, oldValue);
          }
          if (val == null) {
            if (option2.negate) {
              val = false;
            } else if (option2.isBoolean() || option2.optional) {
              val = true;
            } else {
              val = "";
            }
          }
          this.setOptionValueWithSource(name, val, valueSource);
        };
        this.on("option:" + oname, (val) => {
          const invalidValueMessage = `error: option '${option2.flags}' argument '${val}' is invalid.`;
          handleOptionValue(val, invalidValueMessage, "cli");
        });
        if (option2.envVar) {
          this.on("optionEnv:" + oname, (val) => {
            const invalidValueMessage = `error: option '${option2.flags}' value '${val}' from env '${option2.envVar}' is invalid.`;
            handleOptionValue(val, invalidValueMessage, "env");
          });
        }
        return this;
      }
      /**
       * Internal implementation shared by .option() and .requiredOption()
       *
       * @api private
       */
      _optionEx(config, flags, description, fn, defaultValue) {
        if (typeof flags === "object" && flags instanceof Option) {
          throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");
        }
        const option2 = this.createOption(flags, description);
        option2.makeOptionMandatory(!!config.mandatory);
        if (typeof fn === "function") {
          option2.default(defaultValue).argParser(fn);
        } else if (fn instanceof RegExp) {
          const regex = fn;
          fn = (val, def) => {
            const m = regex.exec(val);
            return m ? m[0] : def;
          };
          option2.default(defaultValue).argParser(fn);
        } else {
          option2.default(fn);
        }
        return this.addOption(option2);
      }
      /**
       * Define option with `flags`, `description`, and optional argument parsing function or `defaultValue` or both.
       *
       * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space. A required
       * option-argument is indicated by `<>` and an optional option-argument by `[]`.
       *
       * See the README for more details, and see also addOption() and requiredOption().
       *
       * @example
       * program
       *     .option('-p, --pepper', 'add pepper')
       *     .option('-p, --pizza-type <TYPE>', 'type of pizza') // required option-argument
       *     .option('-c, --cheese [CHEESE]', 'add extra cheese', 'mozzarella') // optional option-argument with default
       *     .option('-t, --tip <VALUE>', 'add tip to purchase cost', parseFloat) // custom parse function
       *
       * @param {string} flags
       * @param {string} [description]
       * @param {Function|*} [parseArg] - custom option processing function or default value
       * @param {*} [defaultValue]
       * @return {Command} `this` command for chaining
       */
      option(flags, description, parseArg, defaultValue) {
        return this._optionEx({}, flags, description, parseArg, defaultValue);
      }
      /**
      * Add a required option which must have a value after parsing. This usually means
      * the option must be specified on the command line. (Otherwise the same as .option().)
      *
      * The `flags` string contains the short and/or long flags, separated by comma, a pipe or space.
      *
      * @param {string} flags
      * @param {string} [description]
      * @param {Function|*} [parseArg] - custom option processing function or default value
      * @param {*} [defaultValue]
      * @return {Command} `this` command for chaining
      */
      requiredOption(flags, description, parseArg, defaultValue) {
        return this._optionEx({ mandatory: true }, flags, description, parseArg, defaultValue);
      }
      /**
       * Alter parsing of short flags with optional values.
       *
       * @example
       * // for `.option('-f,--flag [value]'):
       * program.combineFlagAndOptionalValue(true);  // `-f80` is treated like `--flag=80`, this is the default behaviour
       * program.combineFlagAndOptionalValue(false) // `-fb` is treated like `-f -b`
       *
       * @param {Boolean} [combine=true] - if `true` or omitted, an optional value can be specified directly after the flag.
       */
      combineFlagAndOptionalValue(combine = true) {
        this._combineFlagAndOptionalValue = !!combine;
        return this;
      }
      /**
       * Allow unknown options on the command line.
       *
       * @param {Boolean} [allowUnknown=true] - if `true` or omitted, no error will be thrown
       * for unknown options.
       */
      allowUnknownOption(allowUnknown = true) {
        this._allowUnknownOption = !!allowUnknown;
        return this;
      }
      /**
       * Allow excess command-arguments on the command line. Pass false to make excess arguments an error.
       *
       * @param {Boolean} [allowExcess=true] - if `true` or omitted, no error will be thrown
       * for excess arguments.
       */
      allowExcessArguments(allowExcess = true) {
        this._allowExcessArguments = !!allowExcess;
        return this;
      }
      /**
       * Enable positional options. Positional means global options are specified before subcommands which lets
       * subcommands reuse the same option names, and also enables subcommands to turn on passThroughOptions.
       * The default behaviour is non-positional and global options may appear anywhere on the command line.
       *
       * @param {Boolean} [positional=true]
       */
      enablePositionalOptions(positional = true) {
        this._enablePositionalOptions = !!positional;
        return this;
      }
      /**
       * Pass through options that come after command-arguments rather than treat them as command-options,
       * so actual command-options come before command-arguments. Turning this on for a subcommand requires
       * positional options to have been enabled on the program (parent commands).
       * The default behaviour is non-positional and options may appear before or after command-arguments.
       *
       * @param {Boolean} [passThrough=true]
       * for unknown options.
       */
      passThroughOptions(passThrough = true) {
        this._passThroughOptions = !!passThrough;
        if (!!this.parent && passThrough && !this.parent._enablePositionalOptions) {
          throw new Error("passThroughOptions can not be used without turning on enablePositionalOptions for parent command(s)");
        }
        return this;
      }
      /**
        * Whether to store option values as properties on command object,
        * or store separately (specify false). In both cases the option values can be accessed using .opts().
        *
        * @param {boolean} [storeAsProperties=true]
        * @return {Command} `this` command for chaining
        */
      storeOptionsAsProperties(storeAsProperties = true) {
        if (this.options.length) {
          throw new Error("call .storeOptionsAsProperties() before adding options");
        }
        this._storeOptionsAsProperties = !!storeAsProperties;
        return this;
      }
      /**
       * Retrieve option value.
       *
       * @param {string} key
       * @return {Object} value
       */
      getOptionValue(key) {
        if (this._storeOptionsAsProperties) {
          return this[key];
        }
        return this._optionValues[key];
      }
      /**
       * Store option value.
       *
       * @param {string} key
       * @param {Object} value
       * @return {Command} `this` command for chaining
       */
      setOptionValue(key, value) {
        return this.setOptionValueWithSource(key, value, void 0);
      }
      /**
        * Store option value and where the value came from.
        *
        * @param {string} key
        * @param {Object} value
        * @param {string} source - expected values are default/config/env/cli/implied
        * @return {Command} `this` command for chaining
        */
      setOptionValueWithSource(key, value, source) {
        if (this._storeOptionsAsProperties) {
          this[key] = value;
        } else {
          this._optionValues[key] = value;
        }
        this._optionValueSources[key] = source;
        return this;
      }
      /**
        * Get source of option value.
        * Expected values are default | config | env | cli | implied
        *
        * @param {string} key
        * @return {string}
        */
      getOptionValueSource(key) {
        return this._optionValueSources[key];
      }
      /**
        * Get source of option value. See also .optsWithGlobals().
        * Expected values are default | config | env | cli | implied
        *
        * @param {string} key
        * @return {string}
        */
      getOptionValueSourceWithGlobals(key) {
        let source;
        this._getCommandAndAncestors().forEach((cmd) => {
          if (cmd.getOptionValueSource(key) !== void 0) {
            source = cmd.getOptionValueSource(key);
          }
        });
        return source;
      }
      /**
       * Get user arguments from implied or explicit arguments.
       * Side-effects: set _scriptPath if args included script. Used for default program name, and subcommand searches.
       *
       * @api private
       */
      _prepareUserArgs(argv, parseOptions) {
        if (argv !== void 0 && !Array.isArray(argv)) {
          throw new Error("first parameter to parse must be array or undefined");
        }
        parseOptions = parseOptions || {};
        if (argv === void 0) {
          argv = process2.argv;
          if (process2.versions && process2.versions.electron) {
            parseOptions.from = "electron";
          }
        }
        this.rawArgs = argv.slice();
        let userArgs;
        switch (parseOptions.from) {
          case void 0:
          case "node":
            this._scriptPath = argv[1];
            userArgs = argv.slice(2);
            break;
          case "electron":
            if (process2.defaultApp) {
              this._scriptPath = argv[1];
              userArgs = argv.slice(2);
            } else {
              userArgs = argv.slice(1);
            }
            break;
          case "user":
            userArgs = argv.slice(0);
            break;
          default:
            throw new Error(`unexpected parse option { from: '${parseOptions.from}' }`);
        }
        if (!this._name && this._scriptPath)
          this.nameFromFilename(this._scriptPath);
        this._name = this._name || "program";
        return userArgs;
      }
      /**
       * Parse `argv`, setting options and invoking commands when defined.
       *
       * The default expectation is that the arguments are from node and have the application as argv[0]
       * and the script being run in argv[1], with user parameters after that.
       *
       * @example
       * program.parse(process.argv);
       * program.parse(); // implicitly use process.argv and auto-detect node vs electron conventions
       * program.parse(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
       *
       * @param {string[]} [argv] - optional, defaults to process.argv
       * @param {Object} [parseOptions] - optionally specify style of options with from: node/user/electron
       * @param {string} [parseOptions.from] - where the args are from: 'node', 'user', 'electron'
       * @return {Command} `this` command for chaining
       */
      parse(argv, parseOptions) {
        const userArgs = this._prepareUserArgs(argv, parseOptions);
        this._parseCommand([], userArgs);
        return this;
      }
      /**
       * Parse `argv`, setting options and invoking commands when defined.
       *
       * Use parseAsync instead of parse if any of your action handlers are async. Returns a Promise.
       *
       * The default expectation is that the arguments are from node and have the application as argv[0]
       * and the script being run in argv[1], with user parameters after that.
       *
       * @example
       * await program.parseAsync(process.argv);
       * await program.parseAsync(); // implicitly use process.argv and auto-detect node vs electron conventions
       * await program.parseAsync(my-args, { from: 'user' }); // just user supplied arguments, nothing special about argv[0]
       *
       * @param {string[]} [argv]
       * @param {Object} [parseOptions]
       * @param {string} parseOptions.from - where the args are from: 'node', 'user', 'electron'
       * @return {Promise}
       */
      async parseAsync(argv, parseOptions) {
        const userArgs = this._prepareUserArgs(argv, parseOptions);
        await this._parseCommand([], userArgs);
        return this;
      }
      /**
       * Execute a sub-command executable.
       *
       * @api private
       */
      _executeSubCommand(subcommand, args) {
        args = args.slice();
        let launchWithNode = false;
        const sourceExt = [".js", ".ts", ".tsx", ".mjs", ".cjs"];
        function findFile(baseDir, baseName) {
          const localBin = path.resolve(baseDir, baseName);
          if (fs.existsSync(localBin))
            return localBin;
          if (sourceExt.includes(path.extname(baseName)))
            return void 0;
          const foundExt = sourceExt.find((ext) => fs.existsSync(`${localBin}${ext}`));
          if (foundExt)
            return `${localBin}${foundExt}`;
          return void 0;
        }
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        let executableFile = subcommand._executableFile || `${this._name}-${subcommand._name}`;
        let executableDir = this._executableDir || "";
        if (this._scriptPath) {
          let resolvedScriptPath;
          try {
            resolvedScriptPath = fs.realpathSync(this._scriptPath);
          } catch (err) {
            resolvedScriptPath = this._scriptPath;
          }
          executableDir = path.resolve(path.dirname(resolvedScriptPath), executableDir);
        }
        if (executableDir) {
          let localFile = findFile(executableDir, executableFile);
          if (!localFile && !subcommand._executableFile && this._scriptPath) {
            const legacyName = path.basename(this._scriptPath, path.extname(this._scriptPath));
            if (legacyName !== this._name) {
              localFile = findFile(executableDir, `${legacyName}-${subcommand._name}`);
            }
          }
          executableFile = localFile || executableFile;
        }
        launchWithNode = sourceExt.includes(path.extname(executableFile));
        let proc;
        if (process2.platform !== "win32") {
          if (launchWithNode) {
            args.unshift(executableFile);
            args = incrementNodeInspectorPort(process2.execArgv).concat(args);
            proc = childProcess.spawn(process2.argv[0], args, { stdio: "inherit" });
          } else {
            proc = childProcess.spawn(executableFile, args, { stdio: "inherit" });
          }
        } else {
          args.unshift(executableFile);
          args = incrementNodeInspectorPort(process2.execArgv).concat(args);
          proc = childProcess.spawn(process2.execPath, args, { stdio: "inherit" });
        }
        if (!proc.killed) {
          const signals = ["SIGUSR1", "SIGUSR2", "SIGTERM", "SIGINT", "SIGHUP"];
          signals.forEach((signal) => {
            process2.on(signal, () => {
              if (proc.killed === false && proc.exitCode === null) {
                proc.kill(signal);
              }
            });
          });
        }
        const exitCallback = this._exitCallback;
        if (!exitCallback) {
          proc.on("close", process2.exit.bind(process2));
        } else {
          proc.on("close", () => {
            exitCallback(new CommanderError(process2.exitCode || 0, "commander.executeSubCommandAsync", "(close)"));
          });
        }
        proc.on("error", (err) => {
          if (err.code === "ENOENT") {
            const executableDirMessage = executableDir ? `searched for local subcommand relative to directory '${executableDir}'` : "no directory for search for local subcommand, use .executableDir() to supply a custom directory";
            const executableMissing = `'${executableFile}' does not exist
 - if '${subcommand._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${executableDirMessage}`;
            throw new Error(executableMissing);
          } else if (err.code === "EACCES") {
            throw new Error(`'${executableFile}' not executable`);
          }
          if (!exitCallback) {
            process2.exit(1);
          } else {
            const wrappedError = new CommanderError(1, "commander.executeSubCommandAsync", "(error)");
            wrappedError.nestedError = err;
            exitCallback(wrappedError);
          }
        });
        this.runningCommand = proc;
      }
      /**
       * @api private
       */
      _dispatchSubcommand(commandName, operands, unknown) {
        const subCommand = this._findCommand(commandName);
        if (!subCommand)
          this.help({ error: true });
        let promiseChain;
        promiseChain = this._chainOrCallSubCommandHook(promiseChain, subCommand, "preSubcommand");
        promiseChain = this._chainOrCall(promiseChain, () => {
          if (subCommand._executableHandler) {
            this._executeSubCommand(subCommand, operands.concat(unknown));
          } else {
            return subCommand._parseCommand(operands, unknown);
          }
        });
        return promiseChain;
      }
      /**
       * Invoke help directly if possible, or dispatch if necessary.
       * e.g. help foo
       *
       * @api private
       */
      _dispatchHelpCommand(subcommandName) {
        if (!subcommandName) {
          this.help();
        }
        const subCommand = this._findCommand(subcommandName);
        if (subCommand && !subCommand._executableHandler) {
          subCommand.help();
        }
        return this._dispatchSubcommand(subcommandName, [], [
          this._helpLongFlag || this._helpShortFlag
        ]);
      }
      /**
       * Check this.args against expected this.registeredArguments.
       *
       * @api private
       */
      _checkNumberOfArguments() {
        this.registeredArguments.forEach((arg, i) => {
          if (arg.required && this.args[i] == null) {
            this.missingArgument(arg.name());
          }
        });
        if (this.registeredArguments.length > 0 && this.registeredArguments[this.registeredArguments.length - 1].variadic) {
          return;
        }
        if (this.args.length > this.registeredArguments.length) {
          this._excessArguments(this.args);
        }
      }
      /**
       * Process this.args using this.registeredArguments and save as this.processedArgs!
       *
       * @api private
       */
      _processArguments() {
        const myParseArg = (argument2, value, previous) => {
          let parsedValue = value;
          if (value !== null && argument2.parseArg) {
            const invalidValueMessage = `error: command-argument value '${value}' is invalid for argument '${argument2.name()}'.`;
            parsedValue = this._callParseArg(argument2, value, previous, invalidValueMessage);
          }
          return parsedValue;
        };
        this._checkNumberOfArguments();
        const processedArgs = [];
        this.registeredArguments.forEach((declaredArg, index) => {
          let value = declaredArg.defaultValue;
          if (declaredArg.variadic) {
            if (index < this.args.length) {
              value = this.args.slice(index);
              if (declaredArg.parseArg) {
                value = value.reduce((processed, v) => {
                  return myParseArg(declaredArg, v, processed);
                }, declaredArg.defaultValue);
              }
            } else if (value === void 0) {
              value = [];
            }
          } else if (index < this.args.length) {
            value = this.args[index];
            if (declaredArg.parseArg) {
              value = myParseArg(declaredArg, value, declaredArg.defaultValue);
            }
          }
          processedArgs[index] = value;
        });
        this.processedArgs = processedArgs;
      }
      /**
       * Once we have a promise we chain, but call synchronously until then.
       *
       * @param {Promise|undefined} promise
       * @param {Function} fn
       * @return {Promise|undefined}
       * @api private
       */
      _chainOrCall(promise, fn) {
        if (promise && promise.then && typeof promise.then === "function") {
          return promise.then(() => fn());
        }
        return fn();
      }
      /**
       *
       * @param {Promise|undefined} promise
       * @param {string} event
       * @return {Promise|undefined}
       * @api private
       */
      _chainOrCallHooks(promise, event) {
        let result = promise;
        const hooks = [];
        this._getCommandAndAncestors().reverse().filter((cmd) => cmd._lifeCycleHooks[event] !== void 0).forEach((hookedCommand) => {
          hookedCommand._lifeCycleHooks[event].forEach((callback) => {
            hooks.push({ hookedCommand, callback });
          });
        });
        if (event === "postAction") {
          hooks.reverse();
        }
        hooks.forEach((hookDetail) => {
          result = this._chainOrCall(result, () => {
            return hookDetail.callback(hookDetail.hookedCommand, this);
          });
        });
        return result;
      }
      /**
       *
       * @param {Promise|undefined} promise
       * @param {Command} subCommand
       * @param {string} event
       * @return {Promise|undefined}
       * @api private
       */
      _chainOrCallSubCommandHook(promise, subCommand, event) {
        let result = promise;
        if (this._lifeCycleHooks[event] !== void 0) {
          this._lifeCycleHooks[event].forEach((hook) => {
            result = this._chainOrCall(result, () => {
              return hook(this, subCommand);
            });
          });
        }
        return result;
      }
      /**
       * Process arguments in context of this command.
       * Returns action result, in case it is a promise.
       *
       * @api private
       */
      _parseCommand(operands, unknown) {
        const parsed = this.parseOptions(unknown);
        this._parseOptionsEnv();
        this._parseOptionsImplied();
        operands = operands.concat(parsed.operands);
        unknown = parsed.unknown;
        this.args = operands.concat(unknown);
        if (operands && this._findCommand(operands[0])) {
          return this._dispatchSubcommand(operands[0], operands.slice(1), unknown);
        }
        if (this._hasImplicitHelpCommand() && operands[0] === this._helpCommandName) {
          return this._dispatchHelpCommand(operands[1]);
        }
        if (this._defaultCommandName) {
          outputHelpIfRequested(this, unknown);
          return this._dispatchSubcommand(this._defaultCommandName, operands, unknown);
        }
        if (this.commands.length && this.args.length === 0 && !this._actionHandler && !this._defaultCommandName) {
          this.help({ error: true });
        }
        outputHelpIfRequested(this, parsed.unknown);
        this._checkForMissingMandatoryOptions();
        this._checkForConflictingOptions();
        const checkForUnknownOptions = () => {
          if (parsed.unknown.length > 0) {
            this.unknownOption(parsed.unknown[0]);
          }
        };
        const commandEvent = `command:${this.name()}`;
        if (this._actionHandler) {
          checkForUnknownOptions();
          this._processArguments();
          let promiseChain;
          promiseChain = this._chainOrCallHooks(promiseChain, "preAction");
          promiseChain = this._chainOrCall(promiseChain, () => this._actionHandler(this.processedArgs));
          if (this.parent) {
            promiseChain = this._chainOrCall(promiseChain, () => {
              this.parent.emit(commandEvent, operands, unknown);
            });
          }
          promiseChain = this._chainOrCallHooks(promiseChain, "postAction");
          return promiseChain;
        }
        if (this.parent && this.parent.listenerCount(commandEvent)) {
          checkForUnknownOptions();
          this._processArguments();
          this.parent.emit(commandEvent, operands, unknown);
        } else if (operands.length) {
          if (this._findCommand("*")) {
            return this._dispatchSubcommand("*", operands, unknown);
          }
          if (this.listenerCount("command:*")) {
            this.emit("command:*", operands, unknown);
          } else if (this.commands.length) {
            this.unknownCommand();
          } else {
            checkForUnknownOptions();
            this._processArguments();
          }
        } else if (this.commands.length) {
          checkForUnknownOptions();
          this.help({ error: true });
        } else {
          checkForUnknownOptions();
          this._processArguments();
        }
      }
      /**
       * Find matching command.
       *
       * @api private
       */
      _findCommand(name) {
        if (!name)
          return void 0;
        return this.commands.find((cmd) => cmd._name === name || cmd._aliases.includes(name));
      }
      /**
       * Return an option matching `arg` if any.
       *
       * @param {string} arg
       * @return {Option}
       * @api private
       */
      _findOption(arg) {
        return this.options.find((option2) => option2.is(arg));
      }
      /**
       * Display an error message if a mandatory option does not have a value.
       * Called after checking for help flags in leaf subcommand.
       *
       * @api private
       */
      _checkForMissingMandatoryOptions() {
        this._getCommandAndAncestors().forEach((cmd) => {
          cmd.options.forEach((anOption) => {
            if (anOption.mandatory && cmd.getOptionValue(anOption.attributeName()) === void 0) {
              cmd.missingMandatoryOptionValue(anOption);
            }
          });
        });
      }
      /**
       * Display an error message if conflicting options are used together in this.
       *
       * @api private
       */
      _checkForConflictingLocalOptions() {
        const definedNonDefaultOptions = this.options.filter(
          (option2) => {
            const optionKey = option2.attributeName();
            if (this.getOptionValue(optionKey) === void 0) {
              return false;
            }
            return this.getOptionValueSource(optionKey) !== "default";
          }
        );
        const optionsWithConflicting = definedNonDefaultOptions.filter(
          (option2) => option2.conflictsWith.length > 0
        );
        optionsWithConflicting.forEach((option2) => {
          const conflictingAndDefined = definedNonDefaultOptions.find(
            (defined) => option2.conflictsWith.includes(defined.attributeName())
          );
          if (conflictingAndDefined) {
            this._conflictingOption(option2, conflictingAndDefined);
          }
        });
      }
      /**
       * Display an error message if conflicting options are used together.
       * Called after checking for help flags in leaf subcommand.
       *
       * @api private
       */
      _checkForConflictingOptions() {
        this._getCommandAndAncestors().forEach((cmd) => {
          cmd._checkForConflictingLocalOptions();
        });
      }
      /**
       * Parse options from `argv` removing known options,
       * and return argv split into operands and unknown arguments.
       *
       * Examples:
       *
       *     argv => operands, unknown
       *     --known kkk op => [op], []
       *     op --known kkk => [op], []
       *     sub --unknown uuu op => [sub], [--unknown uuu op]
       *     sub -- --unknown uuu op => [sub --unknown uuu op], []
       *
       * @param {String[]} argv
       * @return {{operands: String[], unknown: String[]}}
       */
      parseOptions(argv) {
        const operands = [];
        const unknown = [];
        let dest = operands;
        const args = argv.slice();
        function maybeOption(arg) {
          return arg.length > 1 && arg[0] === "-";
        }
        let activeVariadicOption = null;
        while (args.length) {
          const arg = args.shift();
          if (arg === "--") {
            if (dest === unknown)
              dest.push(arg);
            dest.push(...args);
            break;
          }
          if (activeVariadicOption && !maybeOption(arg)) {
            this.emit(`option:${activeVariadicOption.name()}`, arg);
            continue;
          }
          activeVariadicOption = null;
          if (maybeOption(arg)) {
            const option2 = this._findOption(arg);
            if (option2) {
              if (option2.required) {
                const value = args.shift();
                if (value === void 0)
                  this.optionMissingArgument(option2);
                this.emit(`option:${option2.name()}`, value);
              } else if (option2.optional) {
                let value = null;
                if (args.length > 0 && !maybeOption(args[0])) {
                  value = args.shift();
                }
                this.emit(`option:${option2.name()}`, value);
              } else {
                this.emit(`option:${option2.name()}`);
              }
              activeVariadicOption = option2.variadic ? option2 : null;
              continue;
            }
          }
          if (arg.length > 2 && arg[0] === "-" && arg[1] !== "-") {
            const option2 = this._findOption(`-${arg[1]}`);
            if (option2) {
              if (option2.required || option2.optional && this._combineFlagAndOptionalValue) {
                this.emit(`option:${option2.name()}`, arg.slice(2));
              } else {
                this.emit(`option:${option2.name()}`);
                args.unshift(`-${arg.slice(2)}`);
              }
              continue;
            }
          }
          if (/^--[^=]+=/.test(arg)) {
            const index = arg.indexOf("=");
            const option2 = this._findOption(arg.slice(0, index));
            if (option2 && (option2.required || option2.optional)) {
              this.emit(`option:${option2.name()}`, arg.slice(index + 1));
              continue;
            }
          }
          if (maybeOption(arg)) {
            dest = unknown;
          }
          if ((this._enablePositionalOptions || this._passThroughOptions) && operands.length === 0 && unknown.length === 0) {
            if (this._findCommand(arg)) {
              operands.push(arg);
              if (args.length > 0)
                unknown.push(...args);
              break;
            } else if (arg === this._helpCommandName && this._hasImplicitHelpCommand()) {
              operands.push(arg);
              if (args.length > 0)
                operands.push(...args);
              break;
            } else if (this._defaultCommandName) {
              unknown.push(arg);
              if (args.length > 0)
                unknown.push(...args);
              break;
            }
          }
          if (this._passThroughOptions) {
            dest.push(arg);
            if (args.length > 0)
              dest.push(...args);
            break;
          }
          dest.push(arg);
        }
        return { operands, unknown };
      }
      /**
       * Return an object containing local option values as key-value pairs.
       *
       * @return {Object}
       */
      opts() {
        if (this._storeOptionsAsProperties) {
          const result = {};
          const len = this.options.length;
          for (let i = 0; i < len; i++) {
            const key = this.options[i].attributeName();
            result[key] = key === this._versionOptionName ? this._version : this[key];
          }
          return result;
        }
        return this._optionValues;
      }
      /**
       * Return an object containing merged local and global option values as key-value pairs.
       *
       * @return {Object}
       */
      optsWithGlobals() {
        return this._getCommandAndAncestors().reduce(
          (combinedOptions, cmd) => Object.assign(combinedOptions, cmd.opts()),
          {}
        );
      }
      /**
       * Display error message and exit (or call exitOverride).
       *
       * @param {string} message
       * @param {Object} [errorOptions]
       * @param {string} [errorOptions.code] - an id string representing the error
       * @param {number} [errorOptions.exitCode] - used with process.exit
       */
      error(message2, errorOptions) {
        this._outputConfiguration.outputError(`${message2}
`, this._outputConfiguration.writeErr);
        if (typeof this._showHelpAfterError === "string") {
          this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`);
        } else if (this._showHelpAfterError) {
          this._outputConfiguration.writeErr("\n");
          this.outputHelp({ error: true });
        }
        const config = errorOptions || {};
        const exitCode = config.exitCode || 1;
        const code = config.code || "commander.error";
        this._exit(exitCode, code, message2);
      }
      /**
       * Apply any option related environment variables, if option does
       * not have a value from cli or client code.
       *
       * @api private
       */
      _parseOptionsEnv() {
        this.options.forEach((option2) => {
          if (option2.envVar && option2.envVar in process2.env) {
            const optionKey = option2.attributeName();
            if (this.getOptionValue(optionKey) === void 0 || ["default", "config", "env"].includes(this.getOptionValueSource(optionKey))) {
              if (option2.required || option2.optional) {
                this.emit(`optionEnv:${option2.name()}`, process2.env[option2.envVar]);
              } else {
                this.emit(`optionEnv:${option2.name()}`);
              }
            }
          }
        });
      }
      /**
       * Apply any implied option values, if option is undefined or default value.
       *
       * @api private
       */
      _parseOptionsImplied() {
        const dualHelper = new DualOptions(this.options);
        const hasCustomOptionValue = (optionKey) => {
          return this.getOptionValue(optionKey) !== void 0 && !["default", "implied"].includes(this.getOptionValueSource(optionKey));
        };
        this.options.filter((option2) => option2.implied !== void 0 && hasCustomOptionValue(option2.attributeName()) && dualHelper.valueFromOption(this.getOptionValue(option2.attributeName()), option2)).forEach((option2) => {
          Object.keys(option2.implied).filter((impliedKey) => !hasCustomOptionValue(impliedKey)).forEach((impliedKey) => {
            this.setOptionValueWithSource(impliedKey, option2.implied[impliedKey], "implied");
          });
        });
      }
      /**
       * Argument `name` is missing.
       *
       * @param {string} name
       * @api private
       */
      missingArgument(name) {
        const message2 = `error: missing required argument '${name}'`;
        this.error(message2, { code: "commander.missingArgument" });
      }
      /**
       * `Option` is missing an argument.
       *
       * @param {Option} option
       * @api private
       */
      optionMissingArgument(option2) {
        const message2 = `error: option '${option2.flags}' argument missing`;
        this.error(message2, { code: "commander.optionMissingArgument" });
      }
      /**
       * `Option` does not have a value, and is a mandatory option.
       *
       * @param {Option} option
       * @api private
       */
      missingMandatoryOptionValue(option2) {
        const message2 = `error: required option '${option2.flags}' not specified`;
        this.error(message2, { code: "commander.missingMandatoryOptionValue" });
      }
      /**
       * `Option` conflicts with another option.
       *
       * @param {Option} option
       * @param {Option} conflictingOption
       * @api private
       */
      _conflictingOption(option2, conflictingOption) {
        const findBestOptionFromValue = (option3) => {
          const optionKey = option3.attributeName();
          const optionValue = this.getOptionValue(optionKey);
          const negativeOption = this.options.find((target) => target.negate && optionKey === target.attributeName());
          const positiveOption = this.options.find((target) => !target.negate && optionKey === target.attributeName());
          if (negativeOption && (negativeOption.presetArg === void 0 && optionValue === false || negativeOption.presetArg !== void 0 && optionValue === negativeOption.presetArg)) {
            return negativeOption;
          }
          return positiveOption || option3;
        };
        const getErrorMessage = (option3) => {
          const bestOption = findBestOptionFromValue(option3);
          const optionKey = bestOption.attributeName();
          const source = this.getOptionValueSource(optionKey);
          if (source === "env") {
            return `environment variable '${bestOption.envVar}'`;
          }
          return `option '${bestOption.flags}'`;
        };
        const message2 = `error: ${getErrorMessage(option2)} cannot be used with ${getErrorMessage(conflictingOption)}`;
        this.error(message2, { code: "commander.conflictingOption" });
      }
      /**
       * Unknown option `flag`.
       *
       * @param {string} flag
       * @api private
       */
      unknownOption(flag) {
        if (this._allowUnknownOption)
          return;
        let suggestion = "";
        if (flag.startsWith("--") && this._showSuggestionAfterError) {
          let candidateFlags = [];
          let command2 = this;
          do {
            const moreFlags = command2.createHelp().visibleOptions(command2).filter((option2) => option2.long).map((option2) => option2.long);
            candidateFlags = candidateFlags.concat(moreFlags);
            command2 = command2.parent;
          } while (command2 && !command2._enablePositionalOptions);
          suggestion = suggestSimilar2(flag, candidateFlags);
        }
        const message2 = `error: unknown option '${flag}'${suggestion}`;
        this.error(message2, { code: "commander.unknownOption" });
      }
      /**
       * Excess arguments, more than expected.
       *
       * @param {string[]} receivedArgs
       * @api private
       */
      _excessArguments(receivedArgs) {
        if (this._allowExcessArguments)
          return;
        const expected = this.registeredArguments.length;
        const s = expected === 1 ? "" : "s";
        const forSubcommand = this.parent ? ` for '${this.name()}'` : "";
        const message2 = `error: too many arguments${forSubcommand}. Expected ${expected} argument${s} but got ${receivedArgs.length}.`;
        this.error(message2, { code: "commander.excessArguments" });
      }
      /**
       * Unknown command.
       *
       * @api private
       */
      unknownCommand() {
        const unknownName = this.args[0];
        let suggestion = "";
        if (this._showSuggestionAfterError) {
          const candidateNames = [];
          this.createHelp().visibleCommands(this).forEach((command2) => {
            candidateNames.push(command2.name());
            if (command2.alias())
              candidateNames.push(command2.alias());
          });
          suggestion = suggestSimilar2(unknownName, candidateNames);
        }
        const message2 = `error: unknown command '${unknownName}'${suggestion}`;
        this.error(message2, { code: "commander.unknownCommand" });
      }
      /**
       * Get or set the program version.
       *
       * This method auto-registers the "-V, --version" option which will print the version number.
       *
       * You can optionally supply the flags and description to override the defaults.
       *
       * @param {string} [str]
       * @param {string} [flags]
       * @param {string} [description]
       * @return {this | string | undefined} `this` command for chaining, or version string if no arguments
       */
      version(str, flags, description) {
        if (str === void 0)
          return this._version;
        this._version = str;
        flags = flags || "-V, --version";
        description = description || "output the version number";
        const versionOption = this.createOption(flags, description);
        this._versionOptionName = versionOption.attributeName();
        this.options.push(versionOption);
        this.on("option:" + versionOption.name(), () => {
          this._outputConfiguration.writeOut(`${str}
`);
          this._exit(0, "commander.version", str);
        });
        return this;
      }
      /**
       * Set the description.
       *
       * @param {string} [str]
       * @param {Object} [argsDescription]
       * @return {string|Command}
       */
      description(str, argsDescription) {
        if (str === void 0 && argsDescription === void 0)
          return this._description;
        this._description = str;
        if (argsDescription) {
          this._argsDescription = argsDescription;
        }
        return this;
      }
      /**
       * Set the summary. Used when listed as subcommand of parent.
       *
       * @param {string} [str]
       * @return {string|Command}
       */
      summary(str) {
        if (str === void 0)
          return this._summary;
        this._summary = str;
        return this;
      }
      /**
       * Set an alias for the command.
       *
       * You may call more than once to add multiple aliases. Only the first alias is shown in the auto-generated help.
       *
       * @param {string} [alias]
       * @return {string|Command}
       */
      alias(alias) {
        if (alias === void 0)
          return this._aliases[0];
        let command2 = this;
        if (this.commands.length !== 0 && this.commands[this.commands.length - 1]._executableHandler) {
          command2 = this.commands[this.commands.length - 1];
        }
        if (alias === command2._name)
          throw new Error("Command alias can't be the same as its name");
        command2._aliases.push(alias);
        return this;
      }
      /**
       * Set aliases for the command.
       *
       * Only the first alias is shown in the auto-generated help.
       *
       * @param {string[]} [aliases]
       * @return {string[]|Command}
       */
      aliases(aliases) {
        if (aliases === void 0)
          return this._aliases;
        aliases.forEach((alias) => this.alias(alias));
        return this;
      }
      /**
       * Set / get the command usage `str`.
       *
       * @param {string} [str]
       * @return {String|Command}
       */
      usage(str) {
        if (str === void 0) {
          if (this._usage)
            return this._usage;
          const args = this.registeredArguments.map((arg) => {
            return humanReadableArgName(arg);
          });
          return [].concat(
            this.options.length || this._hasHelpOption ? "[options]" : [],
            this.commands.length ? "[command]" : [],
            this.registeredArguments.length ? args : []
          ).join(" ");
        }
        this._usage = str;
        return this;
      }
      /**
       * Get or set the name of the command.
       *
       * @param {string} [str]
       * @return {string|Command}
       */
      name(str) {
        if (str === void 0)
          return this._name;
        this._name = str;
        return this;
      }
      /**
       * Set the name of the command from script filename, such as process.argv[1],
       * or undefined.filename, or __filename.
       *
       * (Used internally and public although not documented in README.)
       *
       * @example
       * program.nameFromFilename(undefined.filename);
       *
       * @param {string} filename
       * @return {Command}
       */
      nameFromFilename(filename) {
        this._name = path.basename(filename, path.extname(filename));
        return this;
      }
      /**
       * Get or set the directory for searching for executable subcommands of this command.
       *
       * @example
       * program.executableDir(__dirname);
       * // or
       * program.executableDir('subcommands');
       *
       * @param {string} [path]
       * @return {string|null|Command}
       */
      executableDir(path2) {
        if (path2 === void 0)
          return this._executableDir;
        this._executableDir = path2;
        return this;
      }
      /**
       * Return program help documentation.
       *
       * @param {{ error: boolean }} [contextOptions] - pass {error:true} to wrap for stderr instead of stdout
       * @return {string}
       */
      helpInformation(contextOptions) {
        const helper = this.createHelp();
        if (helper.helpWidth === void 0) {
          helper.helpWidth = contextOptions && contextOptions.error ? this._outputConfiguration.getErrHelpWidth() : this._outputConfiguration.getOutHelpWidth();
        }
        return helper.formatHelp(this, helper);
      }
      /**
       * @api private
       */
      _getHelpContext(contextOptions) {
        contextOptions = contextOptions || {};
        const context = { error: !!contextOptions.error };
        let write;
        if (context.error) {
          write = (arg) => this._outputConfiguration.writeErr(arg);
        } else {
          write = (arg) => this._outputConfiguration.writeOut(arg);
        }
        context.write = contextOptions.write || write;
        context.command = this;
        return context;
      }
      /**
       * Output help information for this command.
       *
       * Outputs built-in help, and custom text added using `.addHelpText()`.
       *
       * @param {{ error: boolean } | Function} [contextOptions] - pass {error:true} to write to stderr instead of stdout
       */
      outputHelp(contextOptions) {
        let deprecatedCallback;
        if (typeof contextOptions === "function") {
          deprecatedCallback = contextOptions;
          contextOptions = void 0;
        }
        const context = this._getHelpContext(contextOptions);
        this._getCommandAndAncestors().reverse().forEach((command2) => command2.emit("beforeAllHelp", context));
        this.emit("beforeHelp", context);
        let helpInformation = this.helpInformation(context);
        if (deprecatedCallback) {
          helpInformation = deprecatedCallback(helpInformation);
          if (typeof helpInformation !== "string" && !Buffer.isBuffer(helpInformation)) {
            throw new Error("outputHelp callback must return a string or a Buffer");
          }
        }
        context.write(helpInformation);
        if (this._helpLongFlag) {
          this.emit(this._helpLongFlag);
        }
        this.emit("afterHelp", context);
        this._getCommandAndAncestors().forEach((command2) => command2.emit("afterAllHelp", context));
      }
      /**
       * You can pass in flags and a description to override the help
       * flags and help description for your command. Pass in false to
       * disable the built-in help option.
       *
       * @param {string | boolean} [flags]
       * @param {string} [description]
       * @return {Command} `this` command for chaining
       */
      helpOption(flags, description) {
        if (typeof flags === "boolean") {
          this._hasHelpOption = flags;
          return this;
        }
        this._helpFlags = flags || this._helpFlags;
        this._helpDescription = description || this._helpDescription;
        const helpFlags = splitOptionFlags(this._helpFlags);
        this._helpShortFlag = helpFlags.shortFlag;
        this._helpLongFlag = helpFlags.longFlag;
        return this;
      }
      /**
       * Output help information and exit.
       *
       * Outputs built-in help, and custom text added using `.addHelpText()`.
       *
       * @param {{ error: boolean }} [contextOptions] - pass {error:true} to write to stderr instead of stdout
       */
      help(contextOptions) {
        this.outputHelp(contextOptions);
        let exitCode = process2.exitCode || 0;
        if (exitCode === 0 && contextOptions && typeof contextOptions !== "function" && contextOptions.error) {
          exitCode = 1;
        }
        this._exit(exitCode, "commander.help", "(outputHelp)");
      }
      /**
       * Add additional text to be displayed with the built-in help.
       *
       * Position is 'before' or 'after' to affect just this command,
       * and 'beforeAll' or 'afterAll' to affect this command and all its subcommands.
       *
       * @param {string} position - before or after built-in help
       * @param {string | Function} text - string to add, or a function returning a string
       * @return {Command} `this` command for chaining
       */
      addHelpText(position, text) {
        const allowedValues = ["beforeAll", "before", "after", "afterAll"];
        if (!allowedValues.includes(position)) {
          throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${allowedValues.join("', '")}'`);
        }
        const helpEvent = `${position}Help`;
        this.on(helpEvent, (context) => {
          let helpStr;
          if (typeof text === "function") {
            helpStr = text({ error: context.error, command: context.command });
          } else {
            helpStr = text;
          }
          if (helpStr) {
            context.write(`${helpStr}
`);
          }
        });
        return this;
      }
    }
    function outputHelpIfRequested(cmd, args) {
      const helpOption = cmd._hasHelpOption && args.find((arg) => arg === cmd._helpLongFlag || arg === cmd._helpShortFlag);
      if (helpOption) {
        cmd.outputHelp();
        cmd._exit(0, "commander.helpDisplayed", "(outputHelp)");
      }
    }
    function incrementNodeInspectorPort(args) {
      return args.map((arg) => {
        if (!arg.startsWith("--inspect")) {
          return arg;
        }
        let debugOption;
        let debugHost = "127.0.0.1";
        let debugPort = "9229";
        let match;
        if ((match = arg.match(/^(--inspect(-brk)?)$/)) !== null) {
          debugOption = match[1];
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+)$/)) !== null) {
          debugOption = match[1];
          if (/^\d+$/.test(match[3])) {
            debugPort = match[3];
          } else {
            debugHost = match[3];
          }
        } else if ((match = arg.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/)) !== null) {
          debugOption = match[1];
          debugHost = match[3];
          debugPort = match[4];
        }
        if (debugOption && debugPort !== "0") {
          return `${debugOption}=${debugHost}:${parseInt(debugPort) + 1}`;
        }
        return arg;
      });
    }
    command.Command = Command;
    return command;
  }
  var hasRequiredCommander;
  function requireCommander() {
    if (hasRequiredCommander)
      return commander.exports;
    hasRequiredCommander = 1;
    (function(module2, exports3) {
      const { Argument } = requireArgument();
      const { Command } = requireCommand();
      const { CommanderError, InvalidArgumentError } = requireError();
      const { Help } = requireHelp();
      const { Option } = requireOption();
      exports3 = module2.exports = new Command();
      exports3.program = exports3;
      exports3.Command = Command;
      exports3.Option = Option;
      exports3.Argument = Argument;
      exports3.Help = Help;
      exports3.CommanderError = CommanderError;
      exports3.InvalidArgumentError = InvalidArgumentError;
      exports3.InvalidOptionArgumentError = InvalidArgumentError;
    })(commander, commander.exports);
    return commander.exports;
  }
  Text2Frame$1.exports;
  (function(module2) {
    var Laurus = Laurus || {};
    Laurus.Text2Frame = {};
    (function() {
      if (typeof PluginManager === "undefined") {
        Laurus.Text2Frame.WindowPosition = "Bottom";
        Laurus.Text2Frame.Background = "Window";
        Laurus.Text2Frame.FileFolder = "test";
        Laurus.Text2Frame.FileName = "basic.txt";
        Laurus.Text2Frame.CommonEventID = "1";
        Laurus.Text2Frame.MapID = "1";
        Laurus.Text2Frame.EventID = "1";
        Laurus.Text2Frame.PageID = "1";
        Laurus.Text2Frame.IsOverwrite = true;
        Laurus.Text2Frame.CommentOutChar = "%";
        Laurus.Text2Frame.IsDebug = false;
        Laurus.Text2Frame.DisplayMsg = true;
        Laurus.Text2Frame.DisplayWarning = true;
        Laurus.Text2Frame.TextPath = "dummy";
        Laurus.Text2Frame.MapPath = "dummy";
        Laurus.Text2Frame.CommonEventPath = "dummy";
        globalThis.Game_Interpreter = {};
        Game_Interpreter.prototype = {};
        globalThis.$gameMessage = {};
        $gameMessage.add = function() {
        };
      } else {
        const path = require$$1$1;
        const PATH_SEP = path.sep;
        const BASE_PATH = path.dirname(process.mainModule.filename);
        Laurus.Text2Frame.Parameters = PluginManager.parameters("Text2Frame");
        Laurus.Text2Frame.WindowPosition = String(Laurus.Text2Frame.Parameters["Default Window Position"]);
        Laurus.Text2Frame.Background = String(Laurus.Text2Frame.Parameters["Default Background"]);
        Laurus.Text2Frame.FileFolder = String(Laurus.Text2Frame.Parameters["Default Scenario Folder"]);
        Laurus.Text2Frame.FileName = String(Laurus.Text2Frame.Parameters["Default Scenario File"]);
        Laurus.Text2Frame.CommonEventID = String(Laurus.Text2Frame.Parameters["Default Common Event ID"]);
        Laurus.Text2Frame.MapID = String(Laurus.Text2Frame.Parameters["Default MapID"]);
        Laurus.Text2Frame.EventID = String(Laurus.Text2Frame.Parameters["Default EventID"]);
        Laurus.Text2Frame.PageID = String(Laurus.Text2Frame.Parameters["Default PageID"]);
        Laurus.Text2Frame.IsOverwrite = String(Laurus.Text2Frame.Parameters.IsOverwrite) === "true";
        Laurus.Text2Frame.CommentOutChar = String(Laurus.Text2Frame.Parameters["Comment Out Char"]);
        Laurus.Text2Frame.IsDebug = String(Laurus.Text2Frame.Parameters.IsDebug) === "true";
        Laurus.Text2Frame.DisplayMsg = String(Laurus.Text2Frame.Parameters.DisplayMsg) === "true";
        Laurus.Text2Frame.DisplayWarning = String(Laurus.Text2Frame.Parameters.DisplayWarning) === "true";
        Laurus.Text2Frame.TextPath = `${BASE_PATH}${PATH_SEP}${Laurus.Text2Frame.FileFolder}${PATH_SEP}${Laurus.Text2Frame.FileName}`;
        Laurus.Text2Frame.MapPath = `${BASE_PATH}${PATH_SEP}data${PATH_SEP}Map${("000" + Laurus.Text2Frame.MapID).slice(-3)}.json`;
        Laurus.Text2Frame.CommonEventPath = `${BASE_PATH}${PATH_SEP}data${PATH_SEP}CommonEvents.json`;
      }
      if (typeof PluginManager !== "undefined" && PluginManager.registerCommand) {
        PluginManager.registerCommand("Text2Frame", "IMPORT_MESSAGE_TO_EVENT", function(args) {
          const file_folder = args.FileFolder;
          const file_name = args.FileName;
          const map_id = args.MapID;
          const event_id = args.EventID;
          const page_id = args.PageID;
          const is_overwrite = args.IsOverwrite;
          this.pluginCommand(
            "IMPORT_MESSAGE_TO_EVENT",
            [file_folder, file_name, map_id, event_id, page_id, is_overwrite]
          );
        });
        PluginManager.registerCommand("Text2Frame", "IMPORT_MESSAGE_TO_CE", function(args) {
          const file_folder = args.FileFolder;
          const file_name = args.FileName;
          const common_event_id = args.CommonEventID;
          const is_overwrite = args.IsOverwrite;
          this.pluginCommand(
            "IMPORT_MESSAGE_TO_CE",
            [file_folder, file_name, common_event_id, is_overwrite]
          );
        });
      }
      const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
      Game_Interpreter.prototype.pluginCommand = function(command2, args) {
        _Game_Interpreter_pluginCommand.apply(this, arguments);
        this.pluginCommandText2Frame(command2, args);
      };
      Game_Interpreter.prototype.pluginCommandText2Frame = function(command2, args) {
        const addMessage = function(text) {
          if (Laurus.Text2Frame.DisplayMsg) {
            $gameMessage.add(text);
          }
        };
        const addWarning = function(warning) {
          if (Laurus.Text2Frame.DisplayWarning) {
            $gameMessage.add(warning);
          }
        };
        const getDefaultPage = function() {
          return {
            conditions: {
              actorId: 1,
              actorValid: false,
              itemId: 1,
              itemValid: false,
              selfSwitchCh: "A",
              selfSwitchValid: false,
              switch1Id: 1,
              switch1Valid: false,
              switch2Id: 1,
              switch2Valid: false,
              variableId: 1,
              variableValid: false,
              variableValue: 0
            },
            directionFix: false,
            image: { characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 },
            list: [
              { code: 0, indent: 0, parameters: [] }
            ],
            moveFrequency: 3,
            moveRoute: {
              list: [{ code: 0, parameters: [] }],
              repeat: true,
              skippable: false,
              wait: false
            },
            moveSpeed: 3,
            moveType: 0,
            priorityType: 0,
            stepAnime: false,
            through: false,
            trigger: 0,
            walkAnime: true
          };
        };
        Laurus.Text2Frame.ExecMode = command2.toUpperCase();
        switch (Laurus.Text2Frame.ExecMode) {
          case "IMPORT_MESSAGE_TO_EVENT":
          case "メッセージをイベントにインポート":
            addMessage("import message to event. \n/ メッセージをイベントにインポートします。");
            if (args[0])
              Laurus.Text2Frame.FileFolder = args[0];
            if (args[1])
              Laurus.Text2Frame.FileName = args[1];
            if (args[2])
              Laurus.Text2Frame.MapID = args[2];
            if (args[3])
              Laurus.Text2Frame.EventID = args[3];
            if (args[4] && (args[4].toLowerCase() === "true" || args[4].toLowerCase() === "false")) {
              Laurus.Text2Frame.IsOverwrite = args[4].toLowerCase() === "true";
              addWarning("【警告】5番目の引数に上書き判定を設定することは非推奨に");
              addWarning("なりました。ページIDを設定してください。上書き判定は6番");
              addWarning("目に設定してください。(警告はオプションでOFFにできます)");
            } else if (args[4]) {
              Laurus.Text2Frame.PageID = args[4];
            }
            if (args[5] && args[5].toLowerCase() === "true")
              Laurus.Text2Frame.IsOverwrite = true;
            break;
          case "IMPORT_MESSAGE_TO_CE":
          case "メッセージをコモンイベントにインポート":
            if (args.length === 4) {
              addMessage("import message to common event. \n/ メッセージをコモンイベントにインポートします。");
              Laurus.Text2Frame.ExecMode = "IMPORT_MESSAGE_TO_CE";
              Laurus.Text2Frame.FileFolder = args[0];
              Laurus.Text2Frame.FileName = args[1];
              Laurus.Text2Frame.CommonEventID = args[2];
              Laurus.Text2Frame.IsOverwrite = args[3] === "true";
            }
            break;
          case "COMMAND_LINE":
          case "LIBRARY_EXPORT":
            break;
          default:
            return;
        }
        const logger = {};
        logger.log = function() {
          if (Laurus.Text2Frame.IsDebug) {
            console.debug.apply(console, arguments);
          }
        };
        logger.error = function() {
          console.error(Array.prototype.join.call(arguments));
        };
        const readText = function(filepath) {
          const fs = require$$1$1;
          try {
            return fs.readFileSync(filepath, { encoding: "utf8" });
          } catch (e) {
            throw new Error("File not found. / ファイルが見つかりません。\n" + filepath);
          }
        };
        const readJsonData = function(filepath) {
          try {
            const jsondata = JSON.parse(readText(filepath));
            if (typeof jsondata === "object") {
              return jsondata;
            } else {
              throw new Error(
                "Json syntax error. \nファイルが壊れています。RPG Makerでプロジェクトをセーブし直してください\n" + filepath
              );
            }
          } catch (e) {
            throw new Error(
              "Json syntax error. \nファイルが壊れています。RPG Makerでプロジェクトをセーブし直してください\n" + filepath
            );
          }
        };
        const writeData = function(filepath, jsonData) {
          const fs = require$$1$1;
          try {
            fs.writeFileSync(filepath, JSON.stringify(jsonData, null, "  "), { encoding: "utf8" });
          } catch (e) {
            throw new Error(
              "Save failed. / 保存に失敗しました。\nファイルが開いていないか確認してください。\n" + filepath
            );
          }
        };
        const uniformNewLineCode = function(text) {
          return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        };
        const eraseCommentOutLines = function(scenario_text2, commentOutChar) {
          const re = new RegExp("^ *" + commentOutChar);
          return scenario_text2.split("\n").filter((x) => !x.match(re)).join("\n");
        };
        const getValidNumberOrDefault = function(value, defaultValue = 0) {
          return isNaN(value) || value === "" ? defaultValue : Number(value);
        };
        const getBackground = function(background) {
          switch (background.toUpperCase()) {
            case "WINDOW":
            case "ウインドウ":
              return 0;
            case "DIM":
            case "暗くする":
            case "暗く":
              return 1;
            case "TRANSPARENT":
            case "透明":
              return 2;
            default:
              throw new Error("Syntax error. / 文法エラーです。");
          }
        };
        const getWindowPosition = function(windowPosition) {
          switch (windowPosition.toUpperCase()) {
            case "TOP":
            case "上":
              return 0;
            case "MIDDLE":
            case "中":
              return 1;
            case "BOTTOM":
            case "下":
              return 2;
            default:
              throw new Error("Syntax error. / 文法エラーです。");
          }
        };
        const getChoiceWindowPosition = function(windowPosition) {
          switch (windowPosition.toUpperCase()) {
            case "LEFT":
            case "左":
              return 0;
            case "MIDDLE":
            case "中":
              return 1;
            case "RIGHT":
            case "右":
              return 2;
            default:
              throw new Error("Syntax error. / 文法エラーです。");
          }
        };
        const getPretextEvent = function() {
          return {
            code: 101,
            indent: 0,
            parameters: [
              "",
              0,
              getBackground(Laurus.Text2Frame.Background),
              getWindowPosition(Laurus.Text2Frame.WindowPosition),
              ""
            ]
          };
        };
        const getTextFrameEvent = function(text) {
          return { code: 401, indent: 0, parameters: [text] };
        };
        const getCommandBottomEvent = function() {
          return { code: 0, indent: 0, parameters: [] };
        };
        const getScriptHeadEvent = function(text) {
          const script_head = { code: 355, indent: 0, parameters: [""] };
          script_head.parameters[0] = text;
          return script_head;
        };
        const getScriptBodyEvent = function(text) {
          const script_body = { code: 655, indent: 0, parameters: [""] };
          script_body.parameters[0] = text;
          return script_body;
        };
        const getPluginCommandEvent = function(text) {
          const plugin_command = { code: 356, indent: 0, parameters: [""] };
          plugin_command.parameters[0] = text;
          return plugin_command;
        };
        const getPluginCommandEventMZ = function(plugin_name, plugin_command, disp_plugin_command, args2) {
          const plugin_args = {};
          const plugin_command_mz = {
            code: 357,
            indent: 0,
            parameters: [
              plugin_name,
              plugin_command,
              disp_plugin_command,
              plugin_args
            ]
          };
          const arg_regexp = /([^[\]]+)(\[.*\])/i;
          for (let i = 0; i < args2.length; i++) {
            const matched = args2[i].match(arg_regexp);
            if (matched) {
              const arg_name = matched[1] || "";
              const values = matched[2].slice(1, -1).split("][") || [];
              plugin_args[arg_name] = values[0] || "";
            }
          }
          return plugin_command_mz;
        };
        const getPluginCommandMzParamsComment = function(plugin_command_mz_arg) {
          const arg_regexp = /([^[\]]+)(\[.*\])/i;
          const matched = plugin_command_mz_arg.match(arg_regexp);
          if (matched) {
            let arg_name = matched[1] || "";
            const values = matched[2].slice(1, -1).split("][") || [];
            const value = values[0] || "";
            if (values[1]) {
              arg_name = values[1];
            }
            return { code: 657, indent: 0, parameters: [arg_name + " = " + value] };
          } else {
            throw new Error("Syntax error. / 文法エラーです。" + plugin_command_mz_arg + " はプラグインコマンドMZの引数として不適切です。");
          }
        };
        const getCommonEventEvent = function(num) {
          const common_event = { code: 117, indent: 0, parameters: [""] };
          common_event.parameters[0] = num;
          return common_event;
        };
        const getCommentOutHeadEvent = function(text) {
          const comment_out = { code: 108, indent: 0, parameters: [""] };
          comment_out.parameters[0] = text;
          return comment_out;
        };
        const getCommentOutBodyEvent = function(text) {
          const comment_out = { code: 408, indent: 0, parameters: [""] };
          comment_out.parameters[0] = text;
          return comment_out;
        };
        const getScrollingTextHeadEvent = function(scrolling_speed, enable_auto_scroll) {
          const scrolling_text = { code: 105, indent: 0, parameters: [2, false] };
          if (scrolling_speed) {
            scrolling_text.parameters[0] = scrolling_speed;
          }
          if (enable_auto_scroll) {
            switch (enable_auto_scroll.toLowerCase()) {
              case "on":
              case "オン":
              case "true":
              case "no fast forward":
              case "1": {
                scrolling_text.parameters[1] = true;
                break;
              }
              case "off":
              case "オフ":
              case "false":
              case "0": {
                scrolling_text.parameters[1] = false;
                break;
              }
            }
          }
          return scrolling_text;
        };
        const getScrollingTextBodyEvent = function(text) {
          return { code: 405, indent: 0, parameters: [text] };
        };
        const getWaitEvent = function(num) {
          const wait = { code: 230, indent: 0, parameters: [""] };
          wait.parameters[0] = num;
          return wait;
        };
        const getFadeinEvent = function() {
          return { code: 222, indent: 0, parameters: [] };
        };
        const getFadeoutEvent = function() {
          return { code: 221, indent: 0, parameters: [] };
        };
        const getPlayBgmEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          return {
            code: 241,
            indent: 0,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }]
          };
        };
        const getStopBgmEvent = function(volume, pitch, pan) {
          return getPlayBgmEvent("", volume, pitch, pan);
        };
        const getFadeoutBgmEvent = function(duration) {
          let param_duration = 10;
          if (typeof duration === "number") {
            param_duration = duration;
          }
          return { code: 242, indent: 0, parameters: [param_duration] };
        };
        const getSaveBgmEvent = function() {
          return { code: 243, indent: 0, parameters: [] };
        };
        const getReplayBgmEvent = function() {
          return { code: 244, indent: 0, parameters: [] };
        };
        const getChangeBattleBgmEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          return {
            code: 132,
            indent: 0,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }]
          };
        };
        const getPlayBgsEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          return {
            code: 245,
            indent: 0,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }]
          };
        };
        const getStopBgsEvent = function(volume, pitch, pan) {
          return getPlayBgsEvent("", volume, pitch, pan);
        };
        const getFadeoutBgsEvent = function(duration) {
          let param_duration = 10;
          if (typeof duration === "number") {
            param_duration = duration;
          }
          return { code: 246, indent: 0, parameters: [param_duration] };
        };
        const getPlaySeEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          return {
            code: 250,
            indent: 0,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }]
          };
        };
        const getStopSeEvent = function() {
          return { code: 251, indent: 0, parameters: [] };
        };
        const getPlayMeEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          return {
            code: 249,
            indent: 0,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }]
          };
        };
        const getStopMeEvent = function(volume, pitch, pan) {
          return getPlayMeEvent("", volume, pitch, pan);
        };
        const getControlSwitch = function(start_pointer, end_pointer, value) {
          switch (value.toLowerCase()) {
            case "on":
            case "オン":
            case "1":
            case "true": {
              return { code: 121, indent: 0, parameters: [parseInt(start_pointer), parseInt(end_pointer), 0] };
            }
            case "off":
            case "オフ":
            case "0":
            case "false": {
              return { code: 121, indent: 0, parameters: [parseInt(start_pointer), parseInt(end_pointer), 1] };
            }
          }
        };
        const getControlValiable = function(operation, start_pointer, end_pointer, operand, operand_arg1 = 0, operand_arg2 = 0, operand_arg3 = 0) {
          const parameters = [start_pointer, end_pointer];
          switch (operation.toLowerCase()) {
            case "set":
              parameters.push(0);
              break;
            case "add":
              parameters.push(1);
              break;
            case "sub":
              parameters.push(2);
              break;
            case "mul":
              parameters.push(3);
              break;
            case "div":
              parameters.push(4);
              break;
            case "mod":
              parameters.push(5);
              break;
            default:
              parameters.push(0);
              break;
          }
          switch (operand.toLowerCase()) {
            case "constant":
              parameters.push(0);
              parameters.push(operand_arg1);
              break;
            case "variables":
              parameters.push(1);
              parameters.push(operand_arg1);
              break;
            case "random":
              parameters.push(2);
              parameters.push(parseInt(operand_arg1));
              parameters.push(parseInt(operand_arg2));
              break;
            case "gamedata": {
              parameters.push(3);
              operand_arg1 = operand_arg1.toLowerCase();
              switch (operand_arg1) {
                case "item":
                case "アイテム":
                  parameters.push(0);
                  parameters.push(parseInt(operand_arg2));
                  parameters.push(0);
                  break;
                case "weapon":
                case "武器":
                  parameters.push(1);
                  parameters.push(parseInt(operand_arg2));
                  parameters.push(0);
                  break;
                case "armor":
                case "防具":
                  parameters.push(2);
                  parameters.push(parseInt(operand_arg2));
                  parameters.push(0);
                  break;
                case "actor":
                case "アクター":
                case "enemy":
                case "敵キャラ":
                case "エネミー": {
                  if (operand_arg1 === "actor" || operand_arg1 === "アクター") {
                    parameters.push(3);
                  } else {
                    parameters.push(4);
                  }
                  parameters.push(parseInt(operand_arg2));
                  switch (operand_arg3.toLowerCase()) {
                    case "level":
                    case "レベル": {
                      parameters.push(0);
                      break;
                    }
                    case "exp":
                    case "経験値": {
                      parameters.push(1);
                      break;
                    }
                    case "hp": {
                      parameters.push(2);
                      break;
                    }
                    case "mp": {
                      parameters.push(3);
                      break;
                    }
                    case "maxhp":
                    case "最大hp": {
                      parameters.push(4);
                      break;
                    }
                    case "maxmp":
                    case "最大mp": {
                      parameters.push(5);
                      break;
                    }
                    case "attack":
                    case "攻撃力": {
                      parameters.push(6);
                      break;
                    }
                    case "defense":
                    case "防御力": {
                      parameters.push(7);
                      break;
                    }
                    case "m.attack":
                    case "魔法攻撃力": {
                      parameters.push(8);
                      break;
                    }
                    case "m.defense":
                    case "魔法防御力": {
                      parameters.push(9);
                      break;
                    }
                    case "agility":
                    case "敏捷性": {
                      parameters.push(10);
                      break;
                    }
                    case "luck":
                    case "運": {
                      parameters.push(11);
                      break;
                    }
                    default: {
                      parameters.push(0);
                      break;
                    }
                  }
                  if (operand_arg1 === "enemy" || operand_arg1 === "敵キャラ" || operand_arg1 === "エネミー") {
                    let value = parameters.pop();
                    let key = parameters.pop();
                    value = value - 2;
                    key = key - 1;
                    parameters.push(key);
                    parameters.push(value);
                  }
                  break;
                }
                case "character":
                case "キャラクター":
                  parameters.push(5);
                  switch (operand_arg2.toLowerCase()) {
                    case "player":
                    case "プレイヤー":
                    case "-1": {
                      parameters.push(-1);
                      break;
                    }
                    case "thisevent":
                    case "このイベント":
                    case "0": {
                      parameters.push(0);
                      break;
                    }
                    default: {
                      parameters.push(parseInt(operand_arg2));
                      break;
                    }
                  }
                  switch (operand_arg3.toLowerCase()) {
                    case "mapx":
                    case "マップx": {
                      parameters.push(0);
                      break;
                    }
                    case "mapy":
                    case "マップy": {
                      parameters.push(1);
                      break;
                    }
                    case "direction":
                    case "方向": {
                      parameters.push(2);
                      break;
                    }
                    case "screenx":
                    case "画面x": {
                      parameters.push(3);
                      break;
                    }
                    case "screeny":
                    case "画面y": {
                      parameters.push(4);
                      break;
                    }
                    default: {
                      parameters.push(0);
                      break;
                    }
                  }
                  break;
                case "party":
                case "パーティ":
                  parameters.push(6);
                  parameters.push(parseInt(operand_arg2) - 1);
                  parameters.push(0);
                  break;
                case "other":
                  parameters.push(7);
                  switch (operand_arg2.toLowerCase()) {
                    case "mapid":
                    case "マップid": {
                      parameters.push(0);
                      break;
                    }
                    case "partymembers":
                    case "パーティ人数": {
                      parameters.push(1);
                      break;
                    }
                    case "gold":
                    case "所持金": {
                      parameters.push(2);
                      break;
                    }
                    case "steps":
                    case "歩数": {
                      parameters.push(3);
                      break;
                    }
                    case "playtime":
                    case "プレイ時間": {
                      parameters.push(4);
                      break;
                    }
                    case "timer":
                    case "タイマー": {
                      parameters.push(5);
                      break;
                    }
                    case "savecount":
                    case "セーブ回数": {
                      parameters.push(6);
                      break;
                    }
                    case "battlecount":
                    case "戦闘回数": {
                      parameters.push(7);
                      break;
                    }
                    case "wincount":
                    case "勝利回数": {
                      parameters.push(8);
                      break;
                    }
                    case "escapecount":
                    case "逃走回数": {
                      parameters.push(9);
                      break;
                    }
                    default: {
                      parameters.push(parseInt(operand_arg2));
                      break;
                    }
                  }
                  parameters.push(0);
                  break;
                case "last":
                case "直前":
                  parameters.push(8);
                  switch (operand_arg2.toLowerCase()) {
                    case "last used skill id":
                    case "直前に使用したスキルのid":
                    case "used skill id": {
                      parameters.push(0);
                      break;
                    }
                    case "last used item id":
                    case "直前に使用したアイテムのid":
                    case "used item id": {
                      parameters.push(1);
                      break;
                    }
                    case "last actor id to act":
                    case "直前に行動したアクターのid":
                    case "actor id to act": {
                      parameters.push(2);
                      break;
                    }
                    case "last enemy index to act":
                    case "直前に行動した敵キャラのインデックス":
                    case "enemy index to act": {
                      parameters.push(3);
                      break;
                    }
                    case "last target actor id":
                    case "直前に対象となったアクターのid":
                    case "target actor id": {
                      parameters.push(4);
                      break;
                    }
                    case "last target enemy index":
                    case "直前に対象となった敵キャラのインデックス":
                    case "target enemy index": {
                      parameters.push(5);
                      break;
                    }
                    default: {
                      parameters.push(0);
                      break;
                    }
                  }
                  parameters.push(0);
                  break;
              }
              break;
            }
            case "script": {
              parameters.push(4);
              parameters.push(operand_arg1);
              break;
            }
            default:
              parameters.push(0);
              parameters.push(operand_arg1);
              parameters.push(operand_arg2);
              parameters.push(operand_arg3);
              break;
          }
          return { code: 122, indent: 0, parameters };
        };
        const getControlSelfSwitch = function(target, value) {
          switch (value.toLowerCase()) {
            case "on":
            case "オン":
            case "1":
            case "true": {
              return { code: 123, indent: 0, parameters: [target.toUpperCase(), 0] };
            }
            case "off":
            case "オフ":
            case "0":
            case "false": {
              return { code: 123, indent: 0, parameters: [target.toUpperCase(), 1] };
            }
            default:
              return { code: 123, indent: 0, parameters: [target.toUpperCase(), 1] };
          }
        };
        const getControlTimer = function(operation, sec) {
          switch (operation.toLowerCase()) {
            case "start":
            case "始動":
            case "スタート": {
              return { code: 124, indent: 0, parameters: [0, parseInt(sec)] };
            }
            case "stop":
            case "停止":
            case "ストップ": {
              return { code: 124, indent: 0, parameters: [1, parseInt(sec)] };
            }
            default:
              return { code: 124, indent: 0, parameters: [1, parseInt(sec)] };
          }
        };
        const getBlockStatement = function(scenario_text2, statement) {
          const block_map = {};
          let block_count = 0;
          let re = null;
          let event_head_func = function() {
          };
          let event_body_func = function() {
          };
          switch (statement.toLowerCase()) {
            case "script": {
              re = /<script>([\s\S]*?)<\/script>|<sc>([\s\S]*?)<\/sc>|<スクリプト>([\s\S]*?)<\/スクリプト>/i;
              event_head_func = getScriptHeadEvent;
              event_body_func = getScriptBodyEvent;
              break;
            }
            case "comment": {
              re = /<comment>([\s\S]*?)<\/comment>|<co>([\s\S]*?)<\/co>|<注釈>([\s\S]*?)<\/注釈>/i;
              event_head_func = getCommentOutHeadEvent;
              event_body_func = getCommentOutBodyEvent;
              break;
            }
            case "scrolling": {
              let block2 = scenario_text2.match(/<ShowScrollingText\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/ShowScrollingText>/i) || scenario_text2.match(/<sst\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/sst>/i) || scenario_text2.match(
                /<文章のスクロール表示\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/文章のスクロール表示>/i
              );
              while (block2 !== null) {
                const match_block = block2[0];
                const scrolling_speed = Number(block2[1]);
                const enable_auto_scroll = block2[2];
                const scrolling_text = block2[3];
                const match_text_list = scrolling_text.replace(/^\n/, "").replace(/\n$/, "").split("\n");
                let event_list = [];
                event_list.push(getScrollingTextHeadEvent(scrolling_speed, enable_auto_scroll));
                event_list = event_list.concat(match_text_list.map((t) => getScrollingTextBodyEvent(t)));
                block_map[`#${statement.toUpperCase()}_BLOCK${block_count}#`] = event_list;
                scenario_text2 = scenario_text2.replace(match_block, `
#${statement.toUpperCase()}_BLOCK${block_count}#
`);
                block_count++;
                block2 = scenario_text2.match(
                  /<ShowScrollingText\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/ShowScrollingText>/i
                ) || scenario_text2.match(/<sst\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/sst>/i) || scenario_text2.match(
                  /<文章のスクロール表示\s*:*\s*(\d*)\s*,*\s*([\s\S]*?)>([\s\S]*?)<\/文章のスクロール表示>/i
                );
              }
              return { scenario_text: scenario_text2, block_map };
            }
          }
          let block = scenario_text2.match(re);
          while (block !== null) {
            const match_block = block[0];
            const match_text = block[1] || block[2] || block[3];
            scenario_text2 = scenario_text2.replace(match_block, `
#${statement.toUpperCase()}_BLOCK${block_count}#
`);
            const match_text_list = match_text.replace(/^\n/, "").replace(/\n$/, "").split("\n");
            const event_list = [];
            for (let i = 0; i < match_text_list.length; i++) {
              const text = match_text_list[i];
              if (i === 0) {
                event_list.push(event_head_func(text));
              } else {
                event_list.push(event_body_func(text));
              }
            }
            block_map[`#${statement.toUpperCase()}_BLOCK${block_count}#`] = event_list;
            block = scenario_text2.match(re);
            block_count++;
          }
          return { scenario_text: scenario_text2, block_map };
        };
        const getDefaultPictureOptions = function() {
          return {
            origin: 0,
            // 0: UpperLeft, 1:Center
            variable: 0,
            // 0: Constant, 1: Variable
            // if variable is 0, x and y are  a constant values.
            // if variable is 1, x is a number of variables
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            // %
            opacity: 255,
            blend_mode: 0,
            // 0:Normal, 1:Additive, 2:Multiply, 3:Screen
            duration: 60,
            wait: true,
            // for a function that move a picture
            red: 0,
            green: 0,
            blue: 0,
            gray: 0,
            // for a function that tints a picture.
            easing: 0
            // for MZ
          };
        };
        const getPictureOptions = function(option_str) {
          const out = {};
          const option_regexp = /([^[\]]+)(\[[\s\-a-zA-Z0-9\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf[\]]+\])/i;
          const option2 = option_str.match(option_regexp);
          if (option2) {
            const key = option2[1] || "";
            const values = option2[2].slice(1, -1).split("][") || "";
            switch (key.toLowerCase()) {
              case "position":
              case "位置": {
                const origin = values[0] || "Upper Left";
                if (origin.toLowerCase() === "center" || origin === "中央") {
                  out.origin = 1;
                }
                const constant_regexp = /^[0-9]+$/;
                const variable_regexp = /(?:variables|v|変数)\[([0-9]+)\]/i;
                const x = values[1] || "0";
                if (x.match(constant_regexp)) {
                  out.variable = 0;
                  out.x = Number(x);
                } else {
                  const v = x.match(variable_regexp);
                  if (v) {
                    out.variable = 1;
                    out.x = Number(v[1]);
                  }
                }
                const y = values[2] || "0";
                if (y.match(constant_regexp)) {
                  out.variable = 0;
                  out.y = Number(y);
                } else {
                  const v = y.match(variable_regexp);
                  if (v) {
                    out.variable = 1;
                    out.y = Number(v[1]);
                  }
                }
                break;
              }
              case "scale":
              case "拡大率": {
                out.width = getValidNumberOrDefault(values[0], 100);
                out.height = getValidNumberOrDefault(values[1], 100);
                break;
              }
              case "blend":
              case "合成": {
                out.opacity = getValidNumberOrDefault(values[0], 255);
                out.blend_mode = {
                  normal: 0,
                  通常: 0,
                  additive: 1,
                  加算: 1,
                  multiply: 2,
                  乗算: 2,
                  screen: 3,
                  スクリーン: 3
                }[values[1].toLowerCase()] || 0;
                break;
              }
              case "duration":
              case "時間": {
                out.duration = getValidNumberOrDefault(values[0], 60);
                if (typeof values[1] === "undefined" || values[1] === "") {
                  out.wait = false;
                }
                break;
              }
              case "colortone":
              case "色調":
              case "ct": {
                const firstValue = values[0].toLowerCase() || 0;
                switch (firstValue) {
                  case "normal":
                  case "通常": {
                    out.red = 0;
                    out.green = 0;
                    out.blue = 0;
                    out.gray = 0;
                    break;
                  }
                  case "dark":
                  case "ダーク": {
                    out.red = -68;
                    out.green = -68;
                    out.blue = -68;
                    out.gray = 0;
                    break;
                  }
                  case "sepia":
                  case "セピア": {
                    out.red = 34;
                    out.green = -34;
                    out.blue = -68;
                    out.gray = 170;
                    break;
                  }
                  case "sunset":
                  case "夕暮れ": {
                    out.red = 68;
                    out.green = -34;
                    out.blue = -34;
                    out.gray = 0;
                    break;
                  }
                  case "night":
                  case "夜": {
                    out.red = -68;
                    out.green = -68;
                    out.blue = 0;
                    out.gray = 68;
                    break;
                  }
                  default: {
                    out.red = Number(values[0]) || 0;
                    out.green = Number(values[1]) || 0;
                    out.blue = Number(values[2]) || 0;
                    out.gray = Number(values[3]) || 0;
                    break;
                  }
                }
                break;
              }
              case "easing":
              case "イージング": {
                const easingMode = values[0].toLowerCase() || "inear";
                out.easing = {
                  "constant speed": 0,
                  一定速度: 0,
                  linear: 0,
                  "slow start": 1,
                  ゆっくり始まる: 1,
                  "ease-in": 1,
                  "slow end": 2,
                  ゆっくり終わる: 2,
                  "ease-out": 2,
                  "slow start and end": 3,
                  ゆっくり始まってゆっくり終わる: 3,
                  "ease-in-out": 3
                }[easingMode];
                break;
              }
            }
          }
          return out;
        };
        const getShowPicture = function(pic_no, name, options = []) {
          const ps = getDefaultPictureOptions();
          options.map((x) => Object.assign(ps, getPictureOptions(x)));
          return {
            code: 231,
            indent: 0,
            parameters: [
              pic_no,
              name,
              ps.origin,
              ps.variable,
              ps.x,
              ps.y,
              ps.width,
              ps.height,
              ps.opacity,
              ps.blend_mode
            ]
          };
        };
        const getMovePicture = function(pic_no, options = []) {
          const ps = getDefaultPictureOptions();
          options.map((x) => Object.assign(ps, getPictureOptions(x)));
          return {
            code: 232,
            indent: 0,
            parameters: [
              pic_no,
              0,
              ps.origin,
              ps.variable,
              ps.x,
              ps.y,
              ps.width,
              ps.height,
              ps.opacity,
              ps.blend_mode,
              ps.duration,
              ps.wait,
              ps.easing
            ]
          };
        };
        const getRotatePicture = function(pic_no, speed) {
          return { code: 233, indent: 0, parameters: [pic_no, speed] };
        };
        const getTintPicture = function(pic_no, options = []) {
          const ps = getDefaultPictureOptions();
          options.map((x) => Object.assign(ps, getPictureOptions(x)));
          return {
            code: 234,
            indent: 0,
            parameters: [
              pic_no,
              [ps.red, ps.green, ps.blue, ps.gray],
              ps.duration,
              ps.wait
            ]
          };
        };
        const getErasePicture = function(pic_no) {
          return { code: 235, indent: 0, parameters: [pic_no] };
        };
        const getIfSwitchParameters = function(switchId, params) {
          switchId = Math.max(Number(switchId) || 1, 1);
          if (typeof params[0] === "undefined") {
            return [0, switchId, 0];
          }
          const value = {
            on: 0,
            オン: 0,
            true: 0,
            1: 0,
            off: 1,
            オフ: 1,
            false: 1,
            0: 1
          }[params[0].toLowerCase()];
          if (switchId > 0 && (value === 1 || value === 0)) {
            return [0, switchId, value];
          }
          return [0, switchId, 0];
        };
        const getIfVariableParameters = function(variableId, params) {
          variableId = Math.max(Number(variableId) || 1, 1);
          const operator = {
            "==": 0,
            "＝": 0,
            ">=": 1,
            "≧": 1,
            "<=": 2,
            "≦": 2,
            ">": 3,
            "＞": 3,
            "<": 4,
            "＜": 4,
            "!=": 5,
            "≠": 5
          }[params[0]] || 0;
          const constant_regexp = /^\d+$/;
          const variable_regexp = /(?:variables|v|変数)\[([0-9]+)\]/i;
          const operand = params[1] || "0";
          if (operand.match(constant_regexp)) {
            return [1, variableId, 0, Number(operand), operator];
          } else if (operand.match(variable_regexp)) {
            const value = Math.max(Number(operand.match(variable_regexp)[1]), 1);
            return [1, variableId, 1, value, operator];
          }
          return [1, variableId, 0, 0, 0];
        };
        const getIfSelfSwitchParameters = function(selfSwitchId, params) {
          selfSwitchId = selfSwitchId.toUpperCase();
          switch (selfSwitchId) {
            case "A":
            case "B":
            case "C":
            case "D":
              break;
            default:
              selfSwitchId = "A";
          }
          if (typeof params[0] === "undefined") {
            return [2, selfSwitchId, 0];
          }
          const value = {
            on: 0,
            オン: 0,
            true: 0,
            1: 0,
            off: 1,
            オフ: 1,
            false: 1,
            0: 1
          }[params[0].toLowerCase()];
          if (value === 0 || value === 1) {
            return [2, selfSwitchId, value];
          }
          return [2, selfSwitchId, 0];
        };
        const getIfTimerParameters = function(params) {
          const condition = {
            ">=": 0,
            "≧": 0,
            "<=": 1,
            "≦": 1
          }[params[0]] || 0;
          const minute = Number(params[1]) || 0;
          const second = Number(params[2]) || 0;
          return [3, 60 * minute + second, condition];
        };
        const getIfActorParameters = function(actorId, params) {
          actorId = Math.max(Number(actorId) || 1, 1);
          const actor_mode = {
            "in the party": 0,
            パーティにいる: 0,
            name: 1,
            名前: 1,
            class: 2,
            職業: 2,
            skill: 3,
            スキル: 3,
            weapon: 4,
            武器: 4,
            armor: 5,
            防具: 5,
            state: 6,
            ステート: 6
          }[params[0].toLowerCase()] || 0;
          if (actor_mode > 0) {
            if (actor_mode === 1) {
              return [4, actorId, 1, params[1]];
            } else if (Number(params[1])) {
              return [4, actorId, actor_mode, Math.max(Number(params[1]), 1)];
            }
          }
          return [4, actorId, 0];
        };
        const getIfEnemyParameters = function(enemyId, params) {
          enemyId = Math.max(Number(enemyId) || 1, 1) - 1;
          const condition = (params[0] || "appeared").toLowerCase();
          const state_id = Math.max(Number(params[1]) || 1, 1);
          if (condition === "appeared" || condition === "出現している") {
            return [5, enemyId, 0];
          } else if (condition === "state" || condition === "ステート") {
            return [5, enemyId, 1, state_id];
          } else {
            return [5, enemyId, 0];
          }
        };
        const getIfCharacterParameters = function(character2, params) {
          let characterId = {
            player: -1,
            プレイヤー: -1,
            thisevent: 0,
            このイベント: 0
          }[character2.toLowerCase()];
          if (typeof characterId === "undefined") {
            characterId = Math.max(Number(character2) || 0, -1);
          }
          const direction = {
            down: 2,
            下: 2,
            2: 2,
            left: 4,
            左: 4,
            4: 4,
            right: 6,
            右: 6,
            6: 6,
            up: 8,
            上: 8,
            8: 8
          }[(params[0] || "").toLowerCase()] || 2;
          return [6, characterId, direction];
        };
        const getIfVehicleParameters = function(params) {
          const vehicle = {
            boat: 0,
            小型船: 0,
            ship: 1,
            大型船: 1,
            airship: 2,
            飛行船: 2
          }[(params[0] || "").toLowerCase()] || 0;
          return [13, vehicle];
        };
        const getIfGoldParameters = function(params) {
          const condition = {
            ">=": 0,
            "≧": 0,
            "<=": 1,
            "≦": 1,
            "<": 2,
            "＜": 2
          }[params[0]] || 0;
          const gold = Number(params[1]) || 0;
          return [7, gold, condition];
        };
        const getIfItemParameters = function(itemId) {
          itemId = Math.max(Number(itemId) || 1, 1);
          return [8, itemId];
        };
        const getIfWeaponParameters = function(weaponId, params) {
          weaponId = Math.max(Number(weaponId) || 1, 1);
          let include_equipment = false;
          if (params[0])
            include_equipment = true;
          return [9, weaponId, include_equipment];
        };
        const getIfArmorParameters = function(armorId, params) {
          armorId = Math.max(Number(armorId) || 1, 1);
          let include_equipment = false;
          if (params[0])
            include_equipment = true;
          return [10, armorId, include_equipment];
        };
        const getIfButtonParameters = function(params) {
          const button = {
            ok: "ok",
            決定: "ok",
            cancel: "cancel",
            キャンセル: "cancel",
            shift: "shift",
            シフト: "shift",
            down: "down",
            下: "down",
            left: "left",
            左: "left",
            right: "right",
            右: "right",
            up: "up",
            上: "up",
            pageup: "pageup",
            ページアップ: "pageup",
            pagedown: "pagedown",
            ページダウン: "pagedown"
          }[(params[0] || "").toLowerCase()] || "ok";
          const how = {
            "is being pressed": 0,
            が押されている: 0,
            pressed: 0,
            "is being triggered": 1,
            がトリガーされている: 1,
            triggered: 1,
            "is being repeated": 2,
            がリピートされている: 2,
            repeated: 2
          }[(params[1] || "").toLowerCase()] || 0;
          return [11, button, how];
        };
        const getIfScriptParameters = function(params) {
          return [12, params.join(",").trim()];
        };
        const getConditionalBranch = function(target, params) {
          const out = { code: 111, indent: 0, parameters: [0, 1, 0] };
          const target_regexp = /([^[\]]+)(\[[\s\-a-zA-Z0-9\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf[\]]+\])*/i;
          target = target.match(target_regexp);
          const mode = target[1];
          const mode_value = (target[2] || "").replace(/[[\]]/g, "");
          switch (mode.toLowerCase()) {
            case "script":
            case "スクリプト":
            case "sc":
              break;
            default:
              params = params.map((s) => s.trim());
              break;
          }
          switch (mode.toLowerCase()) {
            case "switches":
            case "スイッチ":
            case "sw": {
              out.parameters = getIfSwitchParameters(mode_value, params);
              break;
            }
            case "variables":
            case "変数":
            case "v": {
              out.parameters = getIfVariableParameters(mode_value, params);
              break;
            }
            case "selfswitches":
            case "セルフスイッチ":
            case "ssw": {
              out.parameters = getIfSelfSwitchParameters(mode_value, params);
              break;
            }
            case "timer":
            case "タイマー": {
              out.parameters = getIfTimerParameters(params);
              break;
            }
            case "actors":
            case "アクター": {
              out.parameters = getIfActorParameters(mode_value, params);
              break;
            }
            case "enemies":
            case "敵キャラ":
            case "エネミー": {
              out.parameters = getIfEnemyParameters(mode_value, params);
              break;
            }
            case "characters":
            case "キャラクター": {
              out.parameters = getIfCharacterParameters(mode_value, params);
              break;
            }
            case "vehicle":
            case "乗り物": {
              out.parameters = getIfVehicleParameters(params);
              break;
            }
            case "gold":
            case "お金": {
              out.parameters = getIfGoldParameters(params);
              break;
            }
            case "items":
            case "アイテム": {
              out.parameters = getIfItemParameters(mode_value);
              break;
            }
            case "weapons":
            case "武器": {
              out.parameters = getIfWeaponParameters(mode_value, params);
              break;
            }
            case "armors":
            case "防具": {
              out.parameters = getIfArmorParameters(mode_value, params);
              break;
            }
            case "button":
            case "ボタン": {
              out.parameters = getIfButtonParameters(params);
              break;
            }
            case "script":
            case "スクリプト":
            case "sc": {
              out.parameters = getIfScriptParameters(params);
              break;
            }
          }
          return out;
        };
        const getElse = function() {
          return { code: 411, indent: 0, parameters: [] };
        };
        const getEnd = function() {
          return { code: 412, indent: 0, parameters: [] };
        };
        const getLoop = function() {
          return { code: 112, indent: 0, parameters: [] };
        };
        const getRepeatAbove = function() {
          return { code: 413, indent: 0, parameters: [] };
        };
        const getBreakLoop = function() {
          return { code: 113, indent: 0, parameters: [] };
        };
        const getBlockEnd = function() {
          return { code: 0, indent: 0, parameters: [] };
        };
        const getExitEventProcessing = function() {
          return { code: 115, indent: 0, parameters: [] };
        };
        const getLabel = function(name) {
          return { code: 118, indent: 0, parameters: [name] };
        };
        const getJumpToLabel = function(name) {
          return { code: 119, indent: 0, parameters: [name] };
        };
        const getInputNumber = function(val_num, num_of_digits) {
          return { code: 103, indent: 0, parameters: [val_num, num_of_digits] };
        };
        const getSelectItem = function(val_num, item_type) {
          let item_type_num = 1;
          switch (item_type.trim().toLowerCase()) {
            case "Regular Item".toLowerCase():
            case "通常アイテム".toLowerCase(): {
              item_type_num = 1;
              break;
            }
            case "Key Item".toLowerCase():
            case "大事なもの".toLowerCase(): {
              item_type_num = 2;
              break;
            }
            case "Hidden Item A".toLowerCase():
            case "隠しアイテムA".toLowerCase(): {
              item_type_num = 3;
              break;
            }
            case "Hidden Item B".toLowerCase():
            case "隠しアイテムB".toLowerCase(): {
              item_type_num = 4;
              break;
            }
          }
          return { code: 104, indent: 0, parameters: [val_num, item_type_num] };
        };
        const getShowChoices = function(window_type, window_position, default_choice, default_cancel) {
          return { code: 102, indent: 0, parameters: [[], default_cancel, default_choice, window_position, window_type] };
        };
        const getShowChoiceWhen = function(index, text) {
          return { code: 402, indent: 0, parameters: [index, text] };
        };
        const getShowChoiceWhenCancel = function() {
          return { code: 403, indent: 0, parameters: [6, null] };
        };
        const getShowChoiceEnd = function() {
          return { code: 404, indent: 0, parameters: [] };
        };
        const getChangeGold = function(operation, operand, variable) {
          return { code: 125, indent: 0, parameters: [operation, operand, variable] };
        };
        const getChangeItems = function(itemId, operation, operand, variable) {
          return { code: 126, indent: 0, parameters: [itemId, operation, operand, variable] };
        };
        const getChangeWeapons = function(weaponId, operation, operand, variableId, includeEquipment) {
          return { code: 127, indent: 0, parameters: [weaponId, operation, operand, variableId, includeEquipment] };
        };
        const getChangeArmors = function(armorId, operation, operand, variableId, includeEquipment) {
          return { code: 128, indent: 0, parameters: [armorId, operation, operand, variableId, includeEquipment] };
        };
        const getChangePartyMember = function(actorId, operation, initialize) {
          return { code: 129, indent: 0, parameters: [actorId, operation, initialize] };
        };
        const getChangeHp = function(actor2, actorValue, operation, operand, operandValue, allowDeath) {
          return { code: 311, indent: 0, parameters: [actor2, actorValue, operation, operand, operandValue, allowDeath] };
        };
        const getChangeMp = function(actor2, actorValue, operation, operand, operandValue) {
          return { code: 312, indent: 0, parameters: [actor2, actorValue, operation, operand, operandValue] };
        };
        const getChangeTp = function(actor2, actorValue, operation, operand, operandValue) {
          return { code: 326, indent: 0, parameters: [actor2, actorValue, operation, operand, operandValue] };
        };
        const getChangeState = function(actor2, actorValue, operation, stateId) {
          return { code: 313, indent: 0, parameters: [actor2, actorValue, operation, stateId] };
        };
        const getRecoverAll = function(actor2, actorValue) {
          return { code: 314, indent: 0, parameters: [actor2, actorValue] };
        };
        const getChangeExp = function(actor2, actorValue, operation, operand, operandValue, showLevelUp) {
          return { code: 315, indent: 0, parameters: [actor2, actorValue, operation, operand, operandValue, showLevelUp] };
        };
        const getChangeLevel = function(actor2, actorValue, operation, operand, operandValue, showLevelUp) {
          return { code: 316, indent: 0, parameters: [actor2, actorValue, operation, operand, operandValue, showLevelUp] };
        };
        const getChangeParameter = function(actor2, actorValue, parameter, operation, operand, operandValue) {
          return { code: 317, indent: 0, parameters: [actor2, actorValue, parameter, operation, operand, operandValue] };
        };
        const getChangeSkill = function(actor2, actorValue, operation, skillId) {
          return { code: 318, indent: 0, parameters: [actor2, actorValue, operation, skillId] };
        };
        const getChangeEquipment = function(actorId, equipmentType, equipmentItem) {
          return { code: 319, indent: 0, parameters: [actorId, equipmentType, equipmentItem] };
        };
        const getChangeName = function(actorId, name) {
          return { code: 320, indent: 0, parameters: [actorId, name] };
        };
        const getChangeClass = function(actorId, classId, saveExp) {
          return { code: 321, indent: 0, parameters: [actorId, classId, saveExp] };
        };
        const getChangeNickname = function(actorId, nickname) {
          return { code: 324, indent: 0, parameters: [actorId, nickname] };
        };
        const getChangeProfile = function(actorId, profile) {
          const replaceProfile = profile.replace("\\n", "\n");
          return { code: 325, indent: 0, parameters: [actorId, replaceProfile] };
        };
        const getTransferPlayer = function(location, mapId, mapX, mapY, direction, fade) {
          return { code: 201, indent: 0, parameters: [location, mapId, mapX, mapY, direction, fade] };
        };
        const getSetVehicleLocation = function(vehicle, location, mapId, mapX, mapY) {
          return { code: 202, indent: 0, parameters: [vehicle, location, mapId, mapX, mapY] };
        };
        const getSetEventLocation = function(event, location, mapX, mapY, direction) {
          return { code: 203, indent: 0, parameters: [event, location, mapX, mapY, direction] };
        };
        const getScrollMap = function(direction, distance, speed, waitForCompletion) {
          return { code: 204, indent: 0, parameters: [direction, distance, speed, waitForCompletion] };
        };
        const getMovementRoute = function(target, repeat, skippable, wait) {
          return {
            code: 205,
            indent: 0,
            parameters: [target, { list: [{ code: 0 }], repeat, skippable, wait }]
          };
        };
        const getMovementRoute505 = function(parameters) {
          return { code: 505, indent: 0, parameters: [parameters] };
        };
        const getMoveDown = function() {
          const parameters = { code: 1, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveLeft = function() {
          const parameters = { code: 2, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveRight = function() {
          const parameters = { code: 3, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveUp = function() {
          const parameters = { code: 4, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveLowerLeft = function() {
          const parameters = { code: 5, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveLowerRight = function() {
          const parameters = { code: 6, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveUpperLeft = function() {
          const parameters = { code: 7, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveUpperRight = function() {
          const parameters = { code: 8, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveAtRandom = function() {
          const parameters = { code: 9, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveTowardPlayer = function() {
          const parameters = { code: 10, indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveAwayFromPlayer = function() {
          const parameters = { code: 11, indent: null };
          return getMovementRoute505(parameters);
        };
        const getOneStepForward = function() {
          const parameters = { code: 12, indent: null };
          return getMovementRoute505(parameters);
        };
        const getOneStepBackward = function() {
          const parameters = { code: 13, indent: null };
          return getMovementRoute505(parameters);
        };
        const getJump = function(x, y) {
          const parameters = { code: 14, parameters: [x, y], indent: null };
          return getMovementRoute505(parameters);
        };
        const getMoveWait = function(wait) {
          const parameters = { code: 15, parameters: [wait], indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnDown = function() {
          const parameters = { code: 16, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnLeft = function() {
          const parameters = { code: 17, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnRight = function() {
          const parameters = { code: 18, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnUp = function() {
          const parameters = { code: 19, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurn90Right = function() {
          const parameters = { code: 20, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurn90Left = function() {
          const parameters = { code: 21, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurn180 = function() {
          const parameters = { code: 22, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurn90RightorLeft = function() {
          const parameters = { code: 23, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnAtRandom = function() {
          const parameters = { code: 24, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnTowardPlayer = function() {
          const parameters = { code: 25, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTurnAwayFromPlayer = function() {
          const parameters = { code: 26, indent: null };
          return getMovementRoute505(parameters);
        };
        const getSwitchOn = function(switchId) {
          const parameters = { code: 27, parameters: [switchId], indent: null };
          return getMovementRoute505(parameters);
        };
        const getSwitchOff = function(switchId) {
          const parameters = { code: 28, parameters: [switchId], indent: null };
          return getMovementRoute505(parameters);
        };
        const getChangeSpeed = function(speed) {
          const parameters = { code: 29, parameters: [speed], indent: null };
          return getMovementRoute505(parameters);
        };
        const getChangeFrequency = function(frequency) {
          const parameters = { code: 30, parameters: [frequency], indent: null };
          return getMovementRoute505(parameters);
        };
        const getWalkingAnimationOn = function() {
          const parameters = { code: 31, indent: null };
          return getMovementRoute505(parameters);
        };
        const getWalkingAnimationOff = function() {
          const parameters = { code: 32, indent: null };
          return getMovementRoute505(parameters);
        };
        const getSteppingAnimationOn = function() {
          const parameters = { code: 33, indent: null };
          return getMovementRoute505(parameters);
        };
        const getSteppingAnimationOff = function() {
          const parameters = { code: 34, indent: null };
          return getMovementRoute505(parameters);
        };
        const getDirectionFixOn = function() {
          const parameters = { code: 35, indent: null };
          return getMovementRoute505(parameters);
        };
        const getDirectionFixOff = function() {
          const parameters = { code: 36, indent: null };
          return getMovementRoute505(parameters);
        };
        const getThroughOn = function() {
          const parameters = { code: 37, indent: null };
          return getMovementRoute505(parameters);
        };
        const getThroughOff = function() {
          const parameters = { code: 38, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTransparentOn = function() {
          const parameters = { code: 39, indent: null };
          return getMovementRoute505(parameters);
        };
        const getTransparentOff = function() {
          const parameters = { code: 40, indent: null };
          return getMovementRoute505(parameters);
        };
        const getChangeImage = function(image, imageId) {
          const parameters = { code: 41, parameters: [image, imageId], indent: null };
          return getMovementRoute505(parameters);
        };
        const getChangeOpacity = function(opacity) {
          const parameters = { code: 42, parameters: [opacity], indent: null };
          return getMovementRoute505(parameters);
        };
        const getChangeBlendMode = function(blendMode) {
          const parameters = { code: 43, parameters: [blendMode], indent: null };
          return getMovementRoute505(parameters);
        };
        const getMcPlaySeEvent = function(name, volume, pitch, pan) {
          let param_volume = 90;
          let param_pitch = 100;
          let param_pan = 0;
          if (typeof volume === "number") {
            param_volume = volume;
          }
          if (typeof pitch === "number") {
            param_pitch = pitch;
          }
          if (typeof pan === "number") {
            param_pan = pan;
          }
          const parameters = {
            code: 44,
            parameters: [{ name, volume: param_volume, pitch: param_pitch, pan: param_pan }],
            indent: null
          };
          return getMovementRoute505(parameters);
        };
        const getMoveScript = function(script) {
          const parameters = { code: 45, parameters: [script], indent: null };
          return getMovementRoute505(parameters);
        };
        const getOnOffVehicle = function() {
          return { code: 206, indent: 0, parameters: [] };
        };
        const getChangeTransparency = function(transparency) {
          return { code: 211, indent: 0, parameters: [transparency] };
        };
        const getChangePlayerFollowers = function(playerFollowers) {
          return { code: 216, indent: 0, parameters: [playerFollowers] };
        };
        const getGatherFollowers = function() {
          return { code: 217, indent: 0, parameters: [] };
        };
        const getShowAnimation = function(character2, animationId, waitForCompletion) {
          return { code: 212, indent: 0, parameters: [character2, animationId, waitForCompletion] };
        };
        const getShowBalloonIcon = function(character2, balloonIcon, waitForCompletion) {
          return { code: 213, indent: 0, parameters: [character2, balloonIcon, waitForCompletion] };
        };
        const getEraseEvent = function() {
          return { code: 214, indent: 0, parameters: [] };
        };
        const getTintScreen = function(options = []) {
          const ps = getDefaultPictureOptions();
          options.map((x) => Object.assign(ps, getPictureOptions(x)));
          return { code: 223, indent: 0, parameters: [[ps.red, ps.green, ps.blue, ps.gray], ps.duration, ps.wait] };
        };
        const getFlashScreen = function(red, green, blue, intensity, frames, waitForCompletion) {
          return { code: 224, indent: 0, parameters: [[red, green, blue, intensity], frames, waitForCompletion] };
        };
        const getShakeScreen = function(power, speed, frames, waitForCompletion) {
          return { code: 225, indent: 0, parameters: [power, speed, frames, waitForCompletion] };
        };
        const getSetWeatherEffect = function(type, power, frames, waitForCompletion) {
          return { code: 236, indent: 0, parameters: [type, power, frames, waitForCompletion] };
        };
        const getPlayMovie = function(fileName) {
          return { code: 261, indent: 0, parameters: [fileName] };
        };
        const getBattleProcessing = function(troop, troopValue) {
          return { code: 301, indent: 0, parameters: [troop, troopValue, false, false] };
        };
        const getIfWin = function() {
          return { code: 601, indent: 0, parameters: [] };
        };
        const getIfEscape = function() {
          return { code: 602, indent: 0, parameters: [] };
        };
        const getIfLose = function() {
          return { code: 603, indent: 0, parameters: [] };
        };
        const getIfEnd = function() {
          return { code: 604, indent: 0, parameters: [] };
        };
        const getNameInputProcessing = function(actorId, maxCharacter) {
          return { code: 303, indent: 0, parameters: [actorId, maxCharacter] };
        };
        const getShopProcessing = function(purchaseOnly) {
          return { code: 302, indent: 0, parameters: [0, 0, 0, 0, purchaseOnly] };
        };
        const getMerchandise = function(merchandiseType, merchandiseId, price, priceValue) {
          return { code: 605, indent: 0, parameters: [merchandiseType, merchandiseId, price, priceValue] };
        };
        const getOpenMenuScreen = function() {
          return { code: 351, indent: 0, parameters: [] };
        };
        const getOpenSaveScreen = function() {
          return { code: 352, indent: 0, parameters: [] };
        };
        const getGameOver = function() {
          return { code: 353, indent: 0, parameters: [] };
        };
        const getReturnToTitleScreen = function() {
          return { code: 354, indent: 0, parameters: [] };
        };
        const getChangeVictoryMe = function(name, volume, pitch, pan) {
          return { code: 133, indent: 0, parameters: [{ name, volume, pitch, pan }] };
        };
        const getChangeDefeatMe = function(name, volume, pitch, pan) {
          return { code: 139, indent: 0, parameters: [{ name, volume, pitch, pan }] };
        };
        const getChangeVehicleBgm = function(vehicle, name, volume, pitch, pan) {
          return { code: 140, indent: 0, parameters: [vehicle, { name, volume, pitch, pan }] };
        };
        const getChangeSaveAccess = function(save) {
          return { code: 134, indent: 0, parameters: [save] };
        };
        const getChangeMenuAccess = function(menu) {
          return { code: 135, indent: 0, parameters: [menu] };
        };
        const getChangeEncounter = function(encounter) {
          return { code: 136, indent: 0, parameters: [encounter] };
        };
        const getChangeFormationAccess = function(formation) {
          return { code: 137, indent: 0, parameters: [formation] };
        };
        const getChangeWindowColor = function(red, green, blue) {
          return { code: 138, indent: 0, parameters: [[red, green, blue, 0]] };
        };
        const getChangeActorImages = function(actorId, faceName, faceId, characterName, characterId, battlerName) {
          return {
            code: 322,
            indent: 0,
            parameters: [actorId, faceName, faceId, characterName, characterId, battlerName]
          };
        };
        const getChangeVehicleImage = function(vehicle, vehicleName, vehicleId) {
          return { code: 323, indent: 0, parameters: [vehicle, vehicleName, vehicleId] };
        };
        const getChangeMapNameDisplay = function(mapNameDisplay) {
          return { code: 281, indent: 0, parameters: [mapNameDisplay] };
        };
        const getChangeTileset = function(tilesetId) {
          return { code: 282, indent: 0, parameters: [tilesetId] };
        };
        const getChangeBattleBackGround = function(battleBackGround1, battleBackGround2) {
          return { code: 283, indent: 0, parameters: [battleBackGround1, battleBackGround2] };
        };
        const getChangeParallax = function(image, loopHorizontally, loopVertically, loopHorizontallyScroll, loopVerticallyScroll) {
          return {
            code: 284,
            indent: 0,
            parameters: [image, loopHorizontally, loopVertically, loopHorizontallyScroll, loopVerticallyScroll]
          };
        };
        const getGetLocationInfo = function(variableId, infoType, locationType, locationX, locationY) {
          return {
            code: 285,
            indent: 0,
            parameters: [variableId, infoType, locationType, locationX, locationY]
          };
        };
        const getChangeEnemyHp = function(enemy, operation, operand, operandValue, allowDeath) {
          return { code: 331, indent: 0, parameters: [enemy, operation, operand, operandValue, allowDeath] };
        };
        const getChangeEnemyMp = function(enemy, operation, operand, operandValue) {
          return { code: 332, indent: 0, parameters: [enemy, operation, operand, operandValue] };
        };
        const getChangeEnemyTp = function(enemy, operation, operand, operandValue) {
          return { code: 342, indent: 0, parameters: [enemy, operation, operand, operandValue] };
        };
        const getChangeEnemyState = function(enemy, operation, stateId) {
          return { code: 333, indent: 0, parameters: [enemy, operation, stateId] };
        };
        const getEnemyRecoverAll = function(enemy) {
          return { code: 334, indent: 0, parameters: [enemy] };
        };
        const getEnemyAppear = function(enemy) {
          return { code: 335, indent: 0, parameters: [enemy] };
        };
        const getEnemyTransform = function(enemy, transformToEnemyId) {
          return { code: 336, indent: 0, parameters: [enemy, transformToEnemyId] };
        };
        const getShowBattleAnimation = function(enemyValue, animationId, isAllChecked) {
          return { code: 337, indent: 0, parameters: [enemyValue, animationId, isAllChecked] };
        };
        const getForceAction = function(subject, subjectValue, skillId, target) {
          return { code: 339, indent: 0, parameters: [subject, subjectValue, skillId, target] };
        };
        const getAbortBattle = function() {
          return { code: 340, indent: 0, parameters: [] };
        };
        const completeLackedBottomEvent = function(events2) {
          const BOTTOM_CODE = 0;
          const IF_CODE = 111;
          const ELSE_CODE = 411;
          const LOOP_CODE = 112;
          const stack = events2.reduce((s, e) => {
            const code = e.code;
            if (code === IF_CODE)
              s.push(IF_CODE);
            else if (code === ELSE_CODE)
              s.push(ELSE_CODE);
            else if (code === BOTTOM_CODE)
              s.pop();
            return s;
          }, []);
          const bottom = stack.reduce((b, code) => {
            b.push(getCommandBottomEvent());
            if (code === IF_CODE)
              b.push(getEnd());
            else if (code === ELSE_CODE)
              b.push(getEnd());
            else if (code === LOOP_CODE)
              b.push(getRepeatAbove());
            return b;
          }, []);
          return events2.concat(bottom);
        };
        const _getEvents = function(text, frame_param, block_stack, block_map) {
          const face = text.match(/<face *: *(.+?)>/i) || text.match(/<FC *: *(.+?)>/i) || text.match(/<顔 *: *(.+?)>/i);
          const window_position = text.match(/<windowposition *: *(.+?)>/i) || text.match(/<WP *: *(.+?)>/i) || text.match(/<位置 *: *(.+?)>/i);
          const background = text.match(/<background *: *(.+?)>/i) || text.match(/<BG *: *(.+?)>/i) || text.match(/<背景 *: *(.+?)>/i);
          const namebox = text.match(/<name *: ?(.+?)>/i) || text.match(/<NM *: ?(.+?)>/i) || text.match(/<名前 *: ?(.+?)>/i);
          const plugin_command = text.match(/<plugincommand *: *(.+?)>/i) || text.match(/<PC *: *(.+?)>/i) || text.match(/<プラグインコマンド *: *(.+?)>/i);
          const plugin_command_mz = text.match(/<plugincommandmz\s*:\s*([^\s].*)>/i) || text.match(/<PCZ\s*:\s*([^\s].*)>/i) || text.match(/<プラグインコマンドmz\s*:\s*([^\s].*)>/i);
          const common_event = text.match(/<commonevent *: *(.+?)>/i) || text.match(/<CE *: *(.+?)>/i) || text.match(/<コモンイベント *: *(.+?)>/i);
          const wait = text.match(/<wait *: *(.+?)>/i) || text.match(/<ウェイト *: *(.+?)>/i);
          const fadein = text.match(/<fadein>/i) || text.match(/<FI>/i) || text.match(/<フェードイン>/i);
          const fadeout = text.match(/<fadeout>/i) || text.match(/<FO>/i) || text.match(/<フェードアウト>/i);
          const play_bgm = text.match(/<playbgm *: *([^ ].+)>/i) || text.match(/<BGMの演奏 *: *([^ ].+)>/);
          const stop_bgm = text.match(/<stopbgm>/i) || text.match(/<playbgm *: *none>/i) || text.match(/<playbgm *: *なし>/i) || text.match(/<BGMの停止>/);
          const fadeout_bgm = text.match(/<fadeoutbgm *: *(.+?)>/i) || text.match(/<BGMのフェードアウト *: *(.+?)>/);
          const save_bgm = text.match(/<savebgm>/i) || text.match(/<BGMの保存>/);
          const replay_bgm = text.match(/<replaybgm>/i) || text.match(/<BGMの再開>/);
          const change_battle_bgm = text.match(/<changebattlebgm *: *([^ ].+)>/i) || text.match(/<戦闘曲の変更 *: *([^ ].+)>/);
          const play_bgs = text.match(/<playbgs *: *([^ ].+)>/i) || text.match(/<BGSの演奏 *: *([^ ].+)>/);
          const stop_bgs = text.match(/<stopbgs>/i) || text.match(/<playbgs *: *none>/i) || text.match(/<playbgs *: *なし>/i) || text.match(/<BGSの停止>/);
          const fadeout_bgs = text.match(/<fadeoutbgs *: *(.+?)>/i) || text.match(/<BGSのフェードアウト *: *(.+?)>/);
          const play_se = text.match(/<playse *: *([^ ].+)>/i) || text.match(/<SEの演奏 *: *([^ ].+)>/);
          const stop_se = text.match(/<stopse>/i) || text.match(/<SEの停止>/);
          const play_me = text.match(/<playme *: *([^ ].+)>/i) || text.match(/<MEの演奏 *: *([^ ].+)>/);
          const stop_me = text.match(/<stopme>/i) || text.match(/<playme *: *none>/i) || text.match(/<playme *: *なし>/i) || text.match(/<MEの停止>/);
          const show_picture = text.match(/<showpicture\s*:\s*([^\s].*)>/i) || text.match(/<ピクチャの表示\s*:\s*([^\s].+)>/i) || text.match(/<SP\s*:\s*([^\s].+)>/i);
          const move_picture = text.match(/<movepicture\s*:\s*([^\s].*)>/i) || text.match(/<ピクチャの移動\s*:\s*([^\s].*)>/i) || text.match(/<MP\s*:\s*([^\s].*)>/i);
          const rotate_picture = text.match(/<rotatepicture\s*:\s*(\d{1,2})\s*,\s*(-?\d{1,2})\s*>/i) || text.match(/<ピクチャの回転\s*:\s*(\d{1,2})\s*,\s*(-?\d{1,2})\s*>/i) || text.match(/<RP\s*:\s*(\d{1,2})\s*,\s*(-?\d{1,2})\s*>/i);
          const tint_picture = text.match(/<tintpicture\s*:\s*([^\s].*)>/i) || text.match(/<ピクチャの色調変更\s*:\s*([^\s].*)>/i) || text.match(/<TP\s*:\s*([^\s].*)>/i);
          const erase_picture = text.match(/<erasepicture\s*:\s*(\d{1,2})\s*>/i) || text.match(/<ピクチャの消去\s*:\s*(\d{1,2})\s*>/i) || text.match(/<ep\s*:\s*(\d{1,2})\s*>/i);
          const conditional_branch_if = text.match(/\s*<if\s*:\s*([^\s].*)>/i) || text.match(/\s*<条件分岐\s*:\s*([^\s].*)>/i);
          const conditional_branch_else = text.match(/\s*<else>/i) || text.match(/\s*<それ以外のとき>/);
          const conditional_branch_end = text.match(/\s*<end>/i) || text.match(/\s*<分岐終了>/);
          const loop = text.match(/\s*<loop>/i) || text.match(/\s*<ループ>/);
          const repeat_above = text.match(/<repeatabove>/i) || text.match(/\s*<以上繰り返し>/) || text.match(/\s*<ra>/i);
          const break_loop = text.match(/<breakloop>/i) || text.match(/<ループの中断>/) || text.match(/<BL>/i);
          const exit_event_processing = text.match(/<ExitEventProcessing>/i) || text.match(/<イベント処理の中断>/) || text.match(/<EEP>/i);
          const label = text.match(/<label\s*:\s*(\S+)\s*>/i) || text.match(/<ラベル\s*:\s*(\S+)\s*>/i);
          const jump_to_label = text.match(/<jumptolabel\s*:\s*(\S+)\s*>/i) || text.match(/<ラベルジャンプ\s*:\s*(\S+)\s*>/) || text.match(/<jtl\s*:\s*(\S+)\s*>/i);
          const input_number = text.match(/<InputNumber\s*:\s*(\d+),\s*(\d+)>/i) || text.match(/<INN\s*:\s*(\d+),\s*(\d+)>/i) || text.match(/<数値入力の処理\s*:\s*(\d+),\s*(\d+)>/i);
          const select_item = text.match(/<SelectItem\s*:\s*(\d+),\s*([\s\S]+)\s*>/i) || text.match(/<SI\s*:\s*(\d+),\s*([\s\S]+)\s*>/i) || text.match(/<アイテム選択の処理\s*:\s*(\d+),\s*([\s\S]+)\s*>/i);
          const show_choices = text.match(/<ShowChoices\s*:*\s*([\s\S]*)>/i) || text.match(/<SHC\s*:*\s*([\s\S]*)>/i) || text.match(/<選択肢の表示\s*:*\s*([\s\S]*)>/i);
          const show_choice_when = text.match(/<When\s*:\s*([\s\S]+)>/i) || text.match(/<選択肢\s*:\s*([\s\S]+)>/i);
          const show_choice_when_cancel = text.match(/<WhenCancel>/i) || text.match(/<キャンセルのとき>/i);
          const change_gold = text.match(/<ChangeGold\s*:\s*([^\s].*)>/i) || text.match(/<所持金の増減\s*:\s*([^\s].*)>/i);
          const change_items = text.match(/<ChangeItems\s*:\s*([^\s].*)>/i) || text.match(/<アイテムの増減\s*:\s*([^\s].*)>/i);
          const change_weapons = text.match(/<ChangeWeapons\s*:\s*([^\s].*)>/i) || text.match(/<武器の増減\s*:\s*([^\s].*)>/i);
          const change_armors = text.match(/<ChangeArmors\s*:\s*([^\s].*)>/i) || text.match(/<防具の増減\s*:\s*([^\s].*)>/i);
          const change_party_member = text.match(/<ChangePartyMember\s*:\s*([^\s].*)>/i) || text.match(/<メンバーの入れ替え\s*:\s*([^\s].*)>/i);
          const change_hp = text.match(/<ChangeHp\s*:\s*([^\s].*)>/i) || text.match(/<HPの増減\s*:\s*([^\s].*)>/i);
          const change_mp = text.match(/<ChangeMp\s*:\s*([^\s].*)>/i) || text.match(/<MPの増減\s*:\s*([^\s].*)>/i);
          const change_tp = text.match(/<ChangeTp\s*:\s*([^\s].*)>/i) || text.match(/<TPの増減\s*:\s*([^\s].*)>/i);
          const change_state = text.match(/<ChangeState\s*:\s*([^\s].*)>/i) || text.match(/<ステートの変更\s*:\s*([^\s].*)>/i);
          const recover_all = text.match(/<RecoverAll\s*:\s*([^\s].*)>/i) || text.match(/<全回復\s*:\s*([^\s].*)>/i);
          const change_exp = text.match(/<ChangeExp\s*:\s*([^\s].*)>/i) || text.match(/<経験値の増減\s*:\s*([^\s].*)>/i);
          const change_level = text.match(/<ChangeLevel\s*:\s*([^\s].*)>/i) || text.match(/<レベルの増減\s*:\s*([^\s].*)>/i);
          const change_parameter = text.match(/<ChangeParameter\s*:\s*([^\s].*)>/i) || text.match(/<能力値の増減\s*:\s*([^\s].*)>/i);
          const change_skill = text.match(/<ChangeSkill\s*:\s*([^\s].*)>/i) || text.match(/<スキルの増減\s*:\s*([^\s].*)>/i);
          const change_equipment = text.match(/<ChangeEquipment\s*:\s*([^\s].*)>/i) || text.match(/<装備の変更\s*:\s*([^\s].*)>/i);
          const change_name = text.match(/<ChangeName\s*:\s*([^\s].*)>/i) || text.match(/<名前の変更\s*:\s*([^\s].*)>/i);
          const change_class = text.match(/<ChangeClass\s*:\s*([^\s].*)>/i) || text.match(/<職業の変更\s*:\s*([^\s].*)>/i);
          const change_nickname = text.match(/<ChangeNickname\s*:\s*([^\s].*)>/i) || text.match(/<二つ名の変更\s*:\s*([^\s].*)>/i);
          const change_profile = text.match(/<ChangeProfile\s*:\s*([^\s].*)>/i) || text.match(/<プロフィールの変更\s*:\s*([^\s].*)>/i);
          const transfer_player = text.match(/<TransferPlayer\s*:\s*([^\s].*)>/i) || text.match(/<場所移動\s*:\s*([^\s].*)>/i);
          const set_vehicle_location = text.match(/<SetVehicleLocation\s*:\s*([^\s].*)>/i) || text.match(/<乗り物の位置設定\s*:\s*([^\s].*)>/i);
          const set_event_location = text.match(/<SetEventLocation\s*:\s*([^\s].*)>/i) || text.match(/<イベントの位置設定\s*:\s*([^\s].*)>/i);
          const scroll_map = text.match(/<ScrollMap\s*:\s*([^\s].*)>/i) || text.match(/<マップのスクロール\s*:\s*([^\s].*)>/i);
          const set_movement_route = text.match(/<SetMovementRoute\s*:\s*([^\s].*)>/i) || text.match(/<移動ルートの設定\s*:\s*([^\s].*)>/i);
          const move_down = text.match(/<MoveDown>/i) || text.match(/<下に移動>/);
          const move_left = text.match(/<MoveLeft>/i) || text.match(/<左に移動>/);
          const move_right = text.match(/<MoveRight>/i) || text.match(/<右に移動>/);
          const move_up = text.match(/<MoveUp>/i) || text.match(/<上に移動>/);
          const move_lower_left = text.match(/<MoveLowerLeft>/i) || text.match(/<左下に移動>/);
          const move_lower_right = text.match(/<MoveLowerRight>/i) || text.match(/<右下に移動>/);
          const move_upper_left = text.match(/<MoveUpperLeft>/i) || text.match(/<左上に移動>/);
          const move_upper_right = text.match(/<MoveUpperRight>/i) || text.match(/<右上に移動>/);
          const move_at_random = text.match(/<MoveAtRandom>/i) || text.match(/<ランダムに移動>/);
          const move_toward_player = text.match(/<MoveTowardPlayer>/i) || text.match(/<プレイヤーに近づく>/);
          const move_away_from_player = text.match(/<MoveAwayFromPlayer>/i) || text.match(/<プレイヤーから遠ざかる>/);
          const one_step_forward = text.match(/<OneStepForward>/i) || text.match(/<一歩前進>/);
          const one_step_backward = text.match(/<OneStepBackward>/i) || text.match(/<一歩後退>/);
          const jump = text.match(/<Jump\s*:\s*([^\s].*)>/i) || text.match(/<ジャンプ\s*:\s*([^\s].*)>/i);
          const mc_wait = text.match(/<McWait\s*:\s*([^\s].*)>/i) || text.match(/<移動コマンドウェイト\s*:\s*([^\s].*)>/i);
          const turn_down = text.match(/<TurnDown>/i) || text.match(/<下を向く>/);
          const turn_left = text.match(/<TurnLeft>/i) || text.match(/<左を向く>/);
          const turn_right = text.match(/<TurnRight>/i) || text.match(/<右を向く>/);
          const turn_up = text.match(/<TurnUp>/i) || text.match(/<上を向く>/);
          const turn_90_right = text.match(/<Turn90Right>/i) || text.match(/<右に90度回転>/);
          const turn_90_left = text.match(/<Turn90Left>/i) || text.match(/<左に90度回転>/);
          const turn_180 = text.match(/<Turn180>/i) || text.match(/<180度回転>/);
          const turn_90_right_or_left = text.match(/<Turn90RightorLeft>/i) || text.match(/<右か左に90度回転>/);
          const turn_at_random = text.match(/<TurnAtRandom>/i) || text.match(/<ランダムに方向転換>/);
          const turn_toward_Player = text.match(/<TurnTowardPlayer>/i) || text.match(/<プレイヤーの方を向く>/);
          const turn_away_from_player = text.match(/<TurnAwayFromPlayer>/i) || text.match(/<プレイヤーの逆を向く>/);
          const switch_on = text.match(/<SwitchOn\s*:\s*([^\s].*)>/i) || text.match(/<スイッチON\s*:\s*([^\s].*)>/i);
          const switch_off = text.match(/<SwitchOff\s*:\s*([^\s].*)>/i) || text.match(/<スイッチOFF\s*:\s*([^\s].*)>/i);
          const change_speed = text.match(/<ChangeSpeed\s*:\s*([^\s].*)>/i) || text.match(/<移動速度の変更\s*:\s*([^\s].*)>/i);
          const change_frequency = text.match(/<ChangeFrequency\s*:\s*([^\s].*)>/i) || text.match(/<移動頻度の変更\s*:\s*([^\s].*)>/i);
          const walking_animation_on = text.match(/<WalkingAnimationOn>/i) || text.match(/<歩行アニメON>/);
          const walking_animation_off = text.match(/<WalkingAnimationOff>/i) || text.match(/<歩行アニメOFF>/);
          const stepping_animation_on = text.match(/<SteppingAnimationOn>/i) || text.match(/<足踏みアニメON>/);
          const stepping_animation_off = text.match(/<SteppingAnimationOff>/i) || text.match(/<足踏みアニメOFF>/);
          const direction_fix_on = text.match(/<DirectionFixOn>/i) || text.match(/<向き固定ON>/);
          const direction_fix_off = text.match(/<DirectionFixOff>/i) || text.match(/<向き固定OFF>/);
          const through_On = text.match(/<ThroughOn>/i) || text.match(/<すり抜けON>/);
          const through_Off = text.match(/<ThroughOff>/i) || text.match(/<すり抜けOFF>/);
          const transparent_on = text.match(/<TransparentOn>/i) || text.match(/<透明化ON>/);
          const transparent_off = text.match(/<TransparentOff>/i) || text.match(/<透明化OFF>/);
          const change_image = text.match(/<ChangeImage\s*:\s*([^\s].*)>/i) || text.match(/<画像の変更\s*:\s*([^\s].*)>/i);
          const change_opacity = text.match(/<ChangeOpacity\s*:\s*([^\s].*)>/i) || text.match(/<不透明度の変更\s*:\s*([^\s].*)>/i);
          const change_blend_mode = text.match(/<ChangeBlendMode\s*:\s*([^\s].*)>/i) || text.match(/<合成方法の変更\s*:\s*([^\s].*)>/i);
          const mc_play_se = text.match(/<McPlaySe *: *([^ ].+)>/i) || text.match(/<移動コマンドSEの演奏 *: *([^ ].+)>/);
          const mc_script = text.match(/<McScript\s*:\s*([^\s].*)>/i) || text.match(/<移動コマンドスクリプト\s*:\s*([^\s].*)>/i);
          const get_on_off_vehicle = text.match(/<GetOnOffVehicle>/i) || text.match(/<乗り物の乗降>/);
          const change_transparency = text.match(/<ChangeTransparency\s*:\s*([^\s].*)>/i) || text.match(/<透明状態の変更\s*:\s*([^\s].*)>/i);
          const change_player_followers = text.match(/<ChangePlayerFollowers\s*:\s*([^\s].*)>/i) || text.match(/<隊列歩行の変更\s*:\s*([^\s].*)>/i);
          const gather_followers = text.match(/<GatherFollowers>/i) || text.match(/<隊列メンバーの集合>/);
          const show_animation = text.match(/<ShowAnimation\s*:\s*([^\s].*)>/i) || text.match(/<アニメーションの表示\s*:\s*([^\s].*)>/i);
          const show_balloon_icon = text.match(/<ShowBalloonIcon\s*:\s*([^\s].*)>/i) || text.match(/<フキダシアイコンの表示\s*:\s*([^\s].*)>/i);
          const erase_event = text.match(/<EraseEvent>/i) || text.match(/<イベントの一時消去>/);
          const tint_screen = text.match(/<TintScreen\s*:?\s*([^\s]*.*)>/i) || text.match(/<画面の色調変更\s*:?\s*([^\s]*.*)>/i);
          const flash_screen = text.match(/<FlashScreen\s*:\s*([^\s].*)>/i) || text.match(/<画面のフラッシュ\s*:\s*([^\s].*)>/i);
          const shake_screen = text.match(/<ShakeScreen\s*:\s*([^\s].*)>/i) || text.match(/<画面のシェイク\s*:\s*([^\s].*)>/i);
          const set_weather_effect = text.match(/<SetWeatherEffect\s*:\s*([^\s].*)>/i) || text.match(/<天候の設定\s*:\s*([^\s].*)>/i);
          const play_movie = text.match(/<PlayMovie\s*:\s*([^\s].*)>/i) || text.match(/<ムービーの再生\s*:\s*([^\s].*)>/i);
          const battle_processing = text.match(/<BattleProcessing\s*:\s*([^\s].*)>/i) || text.match(/<戦闘の処理\s*:\s*([^\s].*)>/i);
          const shop_processing = text.match(/<ShopProcessing\s*:*\s*([\s\S]*)>/i) || text.match(/<ショップの処理\s*:\s*([^\s].*)>/i);
          const merchandise = text.match(/<Merchandise\s*:\s*([^\s].*)>/i) || text.match(/<商品\s*:\s*([^\s].*)>/i);
          const if_win = text.match(/\s*<IfWin>/i) || text.match(/\s*<勝ったとき>/);
          const if_escape = text.match(/\s*<IfEscape>/i) || text.match(/\s*<逃げたとき>/);
          const if_lose = text.match(/\s*<IfLose>/i) || text.match(/\s*<負けたとき>/);
          const name_input_processing = text.match(/<NameInputProcessing\s*:\s*([^\s].*)>/i) || text.match(/<名前入力の処理\s*:\s*([^\s].*)>/i);
          const open_menu_screen = text.match(/<OpenMenuScreen>/i) || text.match(/<メニュー画面を開く>/);
          const open_save_screen = text.match(/<OpenSaveScreen>/i) || text.match(/<セーブ画面を開く>/);
          const game_over = text.match(/<GameOver>/i) || text.match(/<ゲームオーバー>/);
          const return_to_title_screen = text.match(/<ReturnToTitleScreen>/i) || text.match(/<タイトル画面に戻す>/);
          const change_victory_me = text.match(/<ChangeVictoryMe\s*:\s*([^\s].*)>/i) || text.match(/<勝利MEの変更\s*:\s*([^\s].*)>/i);
          const change_defeat_me = text.match(/<ChangeDefeatMe\s*:\s*([^\s].*)>/i) || text.match(/<敗北MEの変更\s*:\s*([^\s].*)>/i);
          const change_vehicle_bgm = text.match(/<ChangeVehicleBgm\s*:\s*([^\s].*)>/i) || text.match(/<乗り物BGMの変更\s*:\s*([^\s].*)>/i);
          const change_save_access = text.match(/<ChangeSaveAccess\s*:\s*([^\s].*)>/i) || text.match(/<セーブ禁止の変更\s*:\s*([^\s].*)>/i);
          const change_menu_access = text.match(/<ChangeMenuAccess\s*:\s*([^\s].*)>/i) || text.match(/<メニュー禁止の変更\s*:\s*([^\s].*)>/i);
          const change_encounter = text.match(/<ChangeEncounter\s*:\s*([^\s].*)>/i) || text.match(/<エンカウント禁止の変更\s*:\s*([^\s].*)>/i);
          const change_formation_access = text.match(/<ChangeFormationAccess\s*:\s*([^\s].*)>/i) || text.match(/<並び変え禁止の変更\s*:\s*([^\s].*)>/i);
          const change_window_color = text.match(/<ChangeWindowColor\s*:\s*([^\s].*)>/i) || text.match(/<ウィンドウカラーの変更\s*:\s*([^\s].*)>/i);
          const change_actor_images = text.match(/<ChangeActorImages\s*:\s*([^\s].*)>/i) || text.match(/<アクターの画像変更\s*:\s*([^\s].*)>/i);
          const change_vehicle_image = text.match(/<ChangeVehicleImage\s*:\s*([^\s].*)>/i) || text.match(/<乗り物の画像変更\s*:\s*([^\s].*)>/i);
          const change_map_name_display = text.match(/<ChangeMapNameDisplay\s*:\s*([^\s].*)>/i) || text.match(/<マップ名表示の変更\s*:\s*([^\s].*)>/i);
          const change_tileset = text.match(/<ChangeTileset\s*:\s*([^\s].*)>/i) || text.match(/<タイルセットの変更\s*:\s*([^\s].*)>/i);
          const change_battle_background = text.match(/<ChangeBattleBackGround\s*:\s*([^\s].*)>/i) || text.match(/<戦闘背景の変更\s*:\s*([^\s].*)>/i);
          const change_parallax = text.match(/<ChangeParallax\s*:\s*([^\s].*)>/i) || text.match(/<遠景の変更\s*:\s*([^\s].*)>/i);
          const get_location_info = text.match(/<GetLocationInfo\s*:\s*([^\s].*)>/i) || text.match(/<指定位置の情報取得\s*:\s*([^\s].*)>/i);
          const change_enemy_hp = text.match(/<ChangeEnemyHp\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラのHP増減\s*:\s*([^\s].*)>/i);
          const change_enemy_mp = text.match(/<ChangeEnemyMp\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラのMP増減\s*:\s*([^\s].*)>/i);
          const change_enemy_tp = text.match(/<ChangeEnemyTp\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラのTP増減\s*:\s*([^\s].*)>/i);
          const change_enemy_state = text.match(/<ChangeEnemyState\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラのステート変更\s*:\s*([^\s].*)>/i);
          const enemy_recover_all = text.match(/<EnemyRecoverAll\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラの全回復\s*:\s*([^\s].*)>/i);
          const enemy_appear = text.match(/<EnemyAppear\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラの出現\s*:\s*([^\s].*)>/i);
          const enemy_transform = text.match(/<EnemyTransform\s*:\s*([^\s].*)>/i) || text.match(/<敵キャラの変身\s*:\s*([^\s].*)>/i);
          const show_battle_animation = text.match(/<ShowBattleAnimation\s*:\s*([^\s].*)>/i) || text.match(/<戦闘アニメーションの表示\s*:\s*([^\s].*)>/i);
          const force_action = text.match(/<ForceAction\s*:\s*([^\s].*)>/i) || text.match(/<戦闘行動の強制\s*:\s*([^\s].*)>/i);
          const abort_battle = text.match(/<AbortBattle>/i) || text.match(/<バトルの中断>/);
          const script_block = text.match(/#SCRIPT_BLOCK[0-9]+#/i);
          const comment_block = text.match(/#COMMENT_BLOCK[0-9]+#/i);
          const scrolling_block = text.match(/#SCROLLING_BLOCK[0-9]+#/i);
          if (script_block) {
            const block_tag = script_block[0];
            return block_map[block_tag];
          }
          if (comment_block) {
            const block_tag = comment_block[0];
            return block_map[block_tag];
          }
          if (scrolling_block) {
            const block_tag = scrolling_block[0];
            return block_map[block_tag];
          }
          if (plugin_command) {
            return [getPluginCommandEvent(plugin_command[1])];
          }
          if (plugin_command_mz) {
            const params = plugin_command_mz[1].split(",").map((s) => s.trim());
            const event_command_list3 = [];
            if (params.length > 2) {
              const arg_plugin_name = params[0];
              const arg_plugin_command = params[1];
              const arg_disp_plugin_command = params[2];
              const pcz_args = params.slice(3);
              const pcemz = getPluginCommandEventMZ(
                arg_plugin_name,
                arg_plugin_command,
                arg_disp_plugin_command,
                pcz_args
              );
              event_command_list3.push(pcemz);
              pcz_args.map((arg) => event_command_list3.push(getPluginCommandMzParamsComment(arg)));
            } else {
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
            return event_command_list3;
          }
          if (common_event) {
            const event_num = Number(common_event[1]);
            if (event_num) {
              return [getCommonEventEvent(event_num)];
            } else {
              throw new Error(
                "Syntax error. / 文法エラーです。" + common_event[1] + " is not number. / " + common_event[1] + "は整数ではありません"
              );
            }
          }
          if (wait) {
            const wait_num = Number(wait[1]);
            if (wait_num) {
              return [getWaitEvent(wait_num)];
            } else {
              throw new Error(
                "Syntax error. / 文法エラーです。" + common_event[1] + " is not number. / " + common_event[1] + "は整数ではありません"
              );
            }
          }
          if (fadein) {
            return [getFadeinEvent()];
          }
          if (fadeout) {
            return [getFadeoutEvent()];
          }
          if (stop_bgm) {
            return [getStopBgmEvent(90, 100, 0)];
          }
          if (play_bgm) {
            if (play_bgm[1]) {
              const params = play_bgm[1].replace(/ /g, "").split(",");
              let name = "Battle1";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getPlayBgmEvent("", volume, pitch, pan)];
              } else {
                return [getPlayBgmEvent(name, volume, pitch, pan)];
              }
            }
          }
          if (fadeout_bgm) {
            if (fadeout_bgm[1]) {
              let duration = 10;
              const d = fadeout_bgm[1].replace(/ /g, "");
              if (Number(d) || Number(d) === 0) {
                duration = Number(d);
              }
              return [getFadeoutBgmEvent(duration)];
            }
          }
          if (save_bgm) {
            return [getSaveBgmEvent()];
          }
          if (replay_bgm) {
            return [getReplayBgmEvent()];
          }
          if (change_battle_bgm) {
            if (change_battle_bgm[1]) {
              const params = change_battle_bgm[1].replace(/ /g, "").split(",");
              let name = "Battle1";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getChangeBattleBgmEvent("", volume, pitch, pan)];
              } else {
                return [getChangeBattleBgmEvent(name, volume, pitch, pan)];
              }
            }
          }
          if (stop_bgs) {
            return [getStopBgsEvent(90, 100, 0)];
          }
          if (play_bgs) {
            if (play_bgs[1]) {
              const params = play_bgs[1].replace(/ /g, "").split(",");
              let name = "City";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getPlayBgsEvent("", volume, pitch, pan)];
              } else {
                return [getPlayBgsEvent(name, volume, pitch, pan)];
              }
            }
          }
          if (fadeout_bgs) {
            if (fadeout_bgs[1]) {
              let duration = 10;
              const d = fadeout_bgs[1].replace(/ /g, "");
              if (Number(d) || Number(d) === 0) {
                duration = Number(d);
              }
              return [getFadeoutBgsEvent(duration)];
            }
          }
          if (play_se) {
            if (play_se[1]) {
              const params = play_se[1].replace(/ /g, "").split(",");
              let name = "Attack1";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getPlaySeEvent("", volume, pitch, pan)];
              } else {
                return [getPlaySeEvent(name, volume, pitch, pan)];
              }
            }
          }
          if (stop_se) {
            return [getStopSeEvent()];
          }
          if (stop_me) {
            return [getStopMeEvent(90, 100, 0)];
          }
          if (play_me) {
            if (play_me[1]) {
              const params = play_me[1].replace(/ /g, "").split(",");
              let name = "Curse1";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getPlayMeEvent("", volume, pitch, pan)];
              } else {
                return [getPlayMeEvent(name, volume, pitch, pan)];
              }
            }
          }
          const num_char_regex = "\\w゠-ヿ぀-ゟ々-〆ム-鿏";
          const control_variable_arg_regex = ".+";
          const set_operation_list = ["set", "代入", "="];
          const set_reg_list = set_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const set = text.match(new RegExp(set_reg_list.join("|"), "i"));
          const add_operation_list = ["add", "加算", "\\+"];
          const add_reg_list = add_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const add = text.match(new RegExp(add_reg_list.join("|"), "i"));
          const sub_operation_list = ["sub", "減算", "-"];
          const sub_reg_list = sub_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const sub = text.match(new RegExp(sub_reg_list.join("|"), "i"));
          const mul_operation_list = ["mul", "乗算", "\\*"];
          const mul_reg_list = mul_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const mul = text.match(new RegExp(mul_reg_list.join("|"), "i"));
          const div_operation_list = ["div", "除算", "\\/"];
          const div_reg_list = div_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const div = text.match(new RegExp(div_reg_list.join("|"), "i"));
          const mod_operation_list = ["mod", "剰余", "\\%"];
          const mod_reg_list = mod_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const mod = text.match(new RegExp(mod_reg_list.join("|"), "i"));
          const switch_operation_list = ["sw", "switch", "スイッチ"];
          const switch_reg_list = switch_operation_list.map(
            (x) => `<${x} *: *(\\d+\\-?\\d*) *, *(${control_variable_arg_regex}) *>`
          );
          const switch_tag = text.match(new RegExp(switch_reg_list.join("|"), "i"));
          const self_switch_operation_list = ["ssw", "selfswitch", "セルフスイッチ"];
          const self_switch_reg_list = self_switch_operation_list.map(
            (x) => `<${x} *: *([abcd]) *, *(${control_variable_arg_regex}) *>`
          );
          const self_switch_tag = text.match(new RegExp(self_switch_reg_list.join("|"), "i"));
          const getControlTag = function(operator, operand1, operand2) {
            if (operator === "selfswitch") {
              const selfswitch_target = operand1.match(/[abcd]/i);
              const selfswitch_value = operand2.match(/on|オン|1|true|off|オフ|0|false/i);
              if (selfswitch_target && selfswitch_value) {
                return getControlSelfSwitch(selfswitch_target[0], selfswitch_value[0]);
              }
            }
            const operand1_num = operand1.match(/\d+/i);
            const operand1_range = operand1.match(/(\d+)-(\d+)/i);
            let start_pointer = 0;
            let end_pointer = 0;
            if (operand1_range) {
              start_pointer = parseInt(operand1_range[1]);
              end_pointer = parseInt(operand1_range[2]);
            } else if (operand1_num) {
              const num = parseInt(operand1_num[0]);
              start_pointer = num;
              end_pointer = num;
            } else {
              throw new Error("Syntax error. / 文法エラーです。");
            }
            if (operator === "switch") {
              const switch_tag2 = operand2.match(/on|オン|1|true|off|オフ|0|false/i);
              if (switch_tag2) {
                return getControlSwitch(start_pointer, end_pointer, switch_tag2[0]);
              }
            }
            const variables = operand2.match(/v\[(\d+)\]|variables\[(\d+)\]|変数\[(\d+)\]/i);
            if (variables) {
              const num = variables[1] || variables[2] || variables[3];
              return getControlValiable(operator, start_pointer, end_pointer, "variables", parseInt(num));
            }
            const random = operand2.match(
              /r\[(\-?\d+)\]\[(\-?\d+)\]|random\[(\-?\d+)\]\[(\-?\d+)\]|乱数\[(\-?\d+)\]\[(\-?\d+)\]/i
            );
            if (random) {
              const random_range1 = random[1] || random[3] || random[5];
              const random_range2 = random[2] || random[4] || random[6];
              return getControlValiable(
                operator,
                start_pointer,
                end_pointer,
                "random",
                parseInt(random_range1),
                parseInt(random_range2)
              );
            }
            const gamedata_operation_list = ["gd", "gamedata", "ゲームデータ"];
            const gamedata_reg_list = gamedata_operation_list.map((x) => `(${x})(${control_variable_arg_regex})`);
            const gamedata = operand2.match(new RegExp(gamedata_reg_list.join("|"), "i"));
            if (gamedata) {
              const func = gamedata[2] || gamedata[4] || gamedata[6];
              const gamedata_key_match = func.match(new RegExp(`\\[([${num_char_regex}]+)\\]`, "i"));
              if (gamedata_key_match) {
                const gamedata_key = gamedata_key_match[1];
                switch (gamedata_key.toLowerCase()) {
                  case "mapid":
                  case "マップid":
                  case "partymembers":
                  case "パーティ人数":
                  case "gold":
                  case "所持金":
                  case "steps":
                  case "歩数":
                  case "playtime":
                  case "プレイ時間":
                  case "timer":
                  case "タイマー":
                  case "savecount":
                  case "セーブ回数":
                  case "battlecount":
                  case "戦闘回数":
                  case "wincount":
                  case "勝利回数":
                  case "escapecount":
                  case "逃走回数": {
                    return getControlValiable(
                      operator,
                      start_pointer,
                      end_pointer,
                      "gamedata",
                      "other",
                      gamedata_key.toLowerCase(),
                      0
                    );
                  }
                  case "item":
                  case "アイテム":
                  case "weapon":
                  case "武器":
                  case "armor":
                  case "防具":
                  case "party":
                  case "パーティ": {
                    const args2 = func.match(new RegExp(`\\[[${num_char_regex}]+\\]\\[([${num_char_regex}]+)\\]`, "i"));
                    if (args2) {
                      const arg1 = args2[1];
                      return getControlValiable(
                        operator,
                        start_pointer,
                        end_pointer,
                        "gamedata",
                        gamedata_key.toLowerCase(),
                        parseInt(arg1)
                      );
                    }
                    break;
                  }
                  case "last":
                  case "直前": {
                    const args2 = func.match(new RegExp(`\\[[${num_char_regex}]+\\]\\[([${num_char_regex} ]+)\\]`, "i"));
                    if (args2) {
                      const arg1 = args2[1];
                      return getControlValiable(
                        operator,
                        start_pointer,
                        end_pointer,
                        "gamedata",
                        gamedata_key.toLowerCase(),
                        arg1
                      );
                    }
                    break;
                  }
                  case "actor":
                  case "アクター":
                  case "enemy":
                  case "敵キャラ":
                  case "エネミー":
                  case "character":
                  case "キャラクター": {
                    const args2 = func.match(
                      new RegExp(
                        `\\[[${num_char_regex}]+\\]\\[([${num_char_regex}\\-]+)\\]\\[([${num_char_regex}\\.]+)\\]`,
                        "i"
                      )
                    );
                    if (args2) {
                      const arg1 = args2[1];
                      const arg2 = args2[2];
                      return getControlValiable(
                        operator,
                        start_pointer,
                        end_pointer,
                        "gamedata",
                        gamedata_key.toLowerCase(),
                        arg1,
                        arg2
                      );
                    }
                    break;
                  }
                }
              }
            }
            const script = operand2.match(/sc\[(.+)\]|script\[(.+)\]|スクリプト\[(.+)\]/i);
            if (script) {
              const script_body = script[1] || script[2] || script[3];
              return getControlValiable(operator, start_pointer, end_pointer, "script", script_body);
            }
            const value_num = Number(operand2);
            return getControlValiable(operator, start_pointer, end_pointer, "constant", value_num);
          };
          if (set) {
            const operand1 = set[1] || set[3] || set[5];
            const operand2 = set[2] || set[4] || set[6];
            return [getControlTag("set", operand1, operand2)];
          }
          if (add) {
            const operand1 = add[1] || add[3] || add[5];
            const operand2 = add[2] || add[4] || add[6];
            return [getControlTag("add", operand1, operand2)];
          }
          if (sub) {
            const operand1 = sub[1] || sub[3] || sub[5];
            const operand2 = sub[2] || sub[4] || sub[6];
            return [getControlTag("sub", operand1, operand2)];
          }
          if (mul) {
            const operand1 = mul[1] || mul[3] || mul[5];
            const operand2 = mul[2] || mul[4] || mul[6];
            return [getControlTag("mul", operand1, operand2)];
          }
          if (div) {
            const operand1 = div[1] || div[3] || div[5];
            const operand2 = div[2] || div[4] || div[6];
            return [getControlTag("div", operand1, operand2)];
          }
          if (mod) {
            const operand1 = mod[1] || mod[3] || mod[5];
            const operand2 = mod[2] || mod[4] || mod[6];
            return [getControlTag("mod", operand1, operand2)];
          }
          if (switch_tag) {
            const operand1 = switch_tag[1] || switch_tag[3] || switch_tag[5];
            const operand2 = switch_tag[2] || switch_tag[4] || switch_tag[6];
            return [getControlTag("switch", operand1, operand2)];
          }
          if (self_switch_tag) {
            const operand1 = self_switch_tag[1] || self_switch_tag[3] || self_switch_tag[5];
            const operand2 = self_switch_tag[2] || self_switch_tag[4] || self_switch_tag[6];
            return [getControlTag("selfswitch", operand1, operand2)];
          }
          const timer_start_reg_list = ["timer", "タイマー"].map((x) => `<${x} *: *(.+) *, *(\\d+), *(\\d+) *>`);
          const timer_start = text.match(new RegExp(timer_start_reg_list.join("|"), "i"));
          const timer_stop_reg_list = ["timer", "タイマー"].map((x) => `<${x} *: *(.+) *>`);
          const timer_stop = text.match(new RegExp(timer_stop_reg_list.join("|"), "i"));
          if (timer_start) {
            const operand1 = timer_start[1] || timer_start[4];
            const min = parseInt(timer_start[2] || timer_start[5]);
            const sec = parseInt(timer_start[3] || timer_start[6]);
            const setting_sec = 60 * min + sec;
            return [getControlTimer(operand1, setting_sec)];
          }
          if (timer_stop) {
            const operand1 = timer_stop[1] || timer_stop[2];
            return [getControlTimer(operand1, 0)];
          }
          if (show_picture) {
            const params = show_picture[1].split(",").map((s) => s.trim());
            if (params.length > 1) {
              const pic_no = Number(params[0]);
              const name = params[1];
              const options = params.slice(2);
              return [getShowPicture(pic_no, name, options)];
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (move_picture) {
            const params = move_picture[1].split(",").map((s) => s.trim());
            if (params.length > 0) {
              const pic_no = Number(params[0]);
              const options = params.slice(1);
              return [getMovePicture(pic_no, options)];
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (rotate_picture) {
            const pic_no = Number(rotate_picture[1]);
            const speed = Number(rotate_picture[2]);
            return [getRotatePicture(pic_no, speed)];
          }
          if (tint_picture) {
            const params = tint_picture[1].split(",").map((s) => s.trim());
            if (params.length > 0) {
              const pic_no = Number(params[0]);
              const options = params.slice(1);
              return [getTintPicture(pic_no, options)];
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (erase_picture) {
            const pic_no = Number(erase_picture[1]);
            return [getErasePicture(pic_no)];
          }
          if (conditional_branch_if) {
            const args2 = conditional_branch_if[1].split(",");
            if (args2.length > 0) {
              const target = args2[0].trim();
              const params = args2.slice(1);
              return [getConditionalBranch(target, params)];
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (conditional_branch_else) {
            const event_command_list3 = [];
            event_command_list3.push(getCommandBottomEvent());
            event_command_list3.push(getElse());
            return event_command_list3;
          }
          if (conditional_branch_end) {
            const current_block = block_stack.slice(-1)[0];
            const CHOICE_CODE = 102;
            const BATTLE_PROCESSING_CODE = 301;
            if (Boolean(current_block) && current_block.code === CHOICE_CODE) {
              return [getBlockEnd(), getShowChoiceEnd()];
            } else if (Boolean(current_block) && current_block.code === BATTLE_PROCESSING_CODE) {
              return [getBlockEnd(), getIfEnd()];
            } else {
              return [getCommandBottomEvent(), getEnd()];
            }
          }
          if (loop) {
            return [getLoop()];
          }
          if (repeat_above) {
            const event_command_list3 = [];
            event_command_list3.push(getCommandBottomEvent());
            event_command_list3.push(getRepeatAbove());
            return event_command_list3;
          }
          if (break_loop) {
            return [getBreakLoop()];
          }
          if (exit_event_processing) {
            return [getExitEventProcessing()];
          }
          if (label) {
            const label_name = label[1] || "";
            return [getLabel(label_name)];
          }
          if (jump_to_label) {
            const label_name = jump_to_label[1] || "";
            return [getJumpToLabel(label_name)];
          }
          if (input_number) {
            const val_num = Number(input_number[1]);
            const num_of_digits = Number(input_number[2]);
            return [getInputNumber(val_num, num_of_digits)];
          }
          if (select_item) {
            const val_num = Number(select_item[1]);
            const item_type = select_item[2];
            return [getSelectItem(val_num, item_type)];
          }
          if (show_choices) {
            const params = show_choices[1].split(",").filter((s) => s).map((s) => s.trim());
            let window_type = 0;
            let window_position2 = 2;
            let default_choice = 0;
            let default_cancel = 1;
            let exist_default_choice = false;
            params.forEach((p) => {
              try {
                window_type = getBackground(p);
                return;
              } catch (e) {
              }
              try {
                window_position2 = getChoiceWindowPosition(p);
                return;
              } catch (e) {
              }
              switch (p.toLowerCase()) {
                case "branch":
                case "分岐":
                  default_cancel = -2;
                  return;
                case "disallow":
                case "禁止":
                  default_cancel = -1;
                  return;
                case "none":
                case "なし":
                  default_choice = -1;
                  exist_default_choice = true;
                  return;
              }
              if (!isNaN(Number(p))) {
                if (exist_default_choice) {
                  default_cancel = Number(p) - 1;
                } else {
                  default_choice = Number(p) - 1;
                  exist_default_choice = true;
                }
              }
            });
            return [getShowChoices(window_type, window_position2, default_choice, default_cancel)];
          }
          if (show_choice_when) {
            const index = 0;
            const text2 = show_choice_when[1];
            return [getShowChoiceWhen(index, text2)];
          }
          if (show_choice_when_cancel) {
            return [getShowChoiceWhenCancel()];
          }
          if (face) {
            if (!frame_param) {
              frame_param = getPretextEvent();
            }
            const face_number = face[1].match(/.*\((.+?)\)/i);
            if (face_number) {
              frame_param.parameters[0] = face[1].replace(/\(\d\)/, "");
              frame_param.parameters[1] = parseInt(face_number[1]);
              text = text.replace(face[0], "");
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (background) {
            if (!frame_param) {
              frame_param = getPretextEvent();
            }
            try {
              frame_param.parameters[2] = getBackground(background[1]);
            } catch (e) {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
            text = text.replace(background[0], "");
          }
          if (window_position) {
            if (!frame_param) {
              frame_param = getPretextEvent();
            }
            try {
              frame_param.parameters[3] = getWindowPosition(window_position[1]);
            } catch (e) {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
            text = text.replace(window_position[0], "");
          }
          if (namebox) {
            if (!frame_param) {
              frame_param = getPretextEvent();
            }
            frame_param.parameters[4] = namebox[1];
            text = text.replace(namebox[0], "");
          }
          const event_command_list2 = [];
          if (face || background || window_position || namebox) {
            if (frame_param) {
              logger.log("push: ", frame_param.parameters);
              event_command_list2.push(frame_param);
            }
          }
          const constant_regexp = /^\d+$/;
          const variable_regexp = /(?:variables|v|変数)\[([0-9]+)\]/i;
          const actor_regexp = /(?:actors|v|アクター)\[([0-9]+)\]/i;
          const operationIncreaseList = ["increase", "+", "増やす"];
          const operationDecreaseList = ["decrease", "-", "減らす"];
          const operationAddList = ["add", "+", "加える", "付加"];
          const operationRemoveList = ["remove", "-", "外す", "解除"];
          const operationLearnList = ["learn", "+", "覚える"];
          const operationForgetList = ["forget", "-", "忘れる"];
          const locationDirectList = ["direct", "0", "直接指定"];
          const locationEventVariablesList = ["withvariables", "変数で指定"];
          const locationExchangeList = ["exchange", "2", "交換"];
          const troopRandomEncountList = ["random", "2", "ランダム"];
          const locationDesignationList = ["character", "2", "キャラクターで指定", "キャラクター"];
          const directionRetainList = ["retain", "0", "そのまま"];
          const directionDownList = ["down", "2", "下"];
          const directionLeftList = ["left", "4", "左"];
          const directionRightList = ["right", "6", "右"];
          const directionUpList = ["up", "8", "上"];
          const fadeBlackList = ["black", "0", "黒"];
          const fadeWhiteList = ["white", "1", "白"];
          const fadeNoneList = ["none", "2", "なし"];
          const vehicleBoatList = ["boat", "0", "小型船"];
          const vehicleShipList = ["ship", "1", "大型船"];
          const vehicleAirshipList = ["airship", "2", "飛行船"];
          const speedX8SlowerList = ["x8 slower", "1", "1/8倍速"];
          const speedX4SlowerList = ["x4 slower", "2", "1/4倍速"];
          const speedX2SlowerList = ["x2 slower", "3", "1/2倍速"];
          const speedNormalList = ["normal", "4", "標準速"];
          const speedX2FasterList = ["x2 faster", "5", "2倍速"];
          const speedX4FasterList = ["x4 faster", "6", "4倍速"];
          const infoTypeTerrainTagList = ["terrain tag", "0", "地形タグ"];
          const infoTypeEventIdList = ["event id", "1", "イベントid"];
          const infoTypeLayer1List = ["layer 1", "2", "レイヤー１"];
          const infoTypeLayer2List = ["layer 2", "3", "レイヤー２"];
          const infoTypeLayer3List = ["layer 3", "4", "レイヤー３"];
          const infoTypeLayer4List = ["layer 4", "5", "レイヤー４"];
          const infoTypeRegionIdList = ["region id", "6", "リージョンid"];
          const frequencyLowestList = ["lowest", "1", "最低"];
          const frequencyLowerList = ["lower", "2", "低"];
          const frequencynormalList = ["normal", "3", "標準"];
          const frequencyHigherList = ["higher", "4", "高"];
          const frequencyHighestList = ["highest", "5", "最高"];
          const blendModeNormalList = ["normal", "0", "通常"];
          const blendModeAdditiveList = ["additive", "1", "加算"];
          const blendModeMultiplyList = ["multiply", "2", "乗算"];
          const blendModeScreenList = ["screen", "3", "スクリーン"];
          const actorMaxHpList = ["maxhp", "0", "最大hp"];
          const actorMaxMpList = ["maxmp", "1", "最大mp"];
          const actorAttackList = ["attack", "2", "攻撃力"];
          const actorDefenseList = ["defense", "3", "防御力"];
          const actorMAttackList = ["m.attack", "4", "魔法力"];
          const actorMDefenseList = ["m.defense", "5", "魔法防御"];
          const actorAgilityList = ["agility", "6", "敏捷性"];
          const actorLuckList = ["luck", "7", "運"];
          const equipmentItemList = ["none", "なし", "0"];
          const characterPlayerList = ["player", "-1", "プレイヤー"];
          const characterThisEventList = ["this event", "0", "このイベント"];
          const balloonIconExclamationList = ["exclamation", "1", "びっくり"];
          const balloonIconQuestionList = ["question", "2", "はてな"];
          const balloonIconMusicNoteList = ["music note", "3", "音符"];
          const balloonIconHeartList = ["heart", "4", "ハート"];
          const balloonIconAngerList = ["anger", "5", "怒り"];
          const balloonIconSweatList = ["sweat", "6", "汗"];
          const balloonIconFlustrationList = ["flustration", "cobweb", "7", "くしゃくしゃ"];
          const balloonIconSilenceList = ["silence", "8", "沈黙"];
          const balloonIconLightBulbList = ["light bulb", "9", "電球"];
          const balloonIconZzzList = ["zzz", "10", "zzz"];
          const balloonIconUserDefined1List = ["user-defined1", "11", "ユーザー定義1"];
          const balloonIconUserDefined2List = ["user-defined2", "12", "ユーザー定義2"];
          const balloonIconUserDefined3List = ["user-defined3", "13", "ユーザー定義3"];
          const balloonIconUserDefined4List = ["user-defined4", "14", "ユーザー定義4"];
          const balloonIconUserDefined5List = ["user-defined5", "15", "ユーザー定義5"];
          const weatherNoneList = ["none", "なし"];
          const weatherRainList = ["rain", "雨"];
          const weatherStormList = ["storm", "嵐"];
          const weatherSnowList = ["snow", "雪"];
          const merchandiseItemList = ["item", "0", "アイテム"];
          const merchandiseWeaponList = ["weapon", "1", "武器"];
          const merchandiseArmorList = ["armor", "2", "防具"];
          const priceStandardList = ["standard", "0", "標準"];
          const actionTargetLastTargetList = ["last target", "-1", "ラストターゲット"];
          const actionTargetRandomList = ["random", "0", "ランダム"];
          const actionTargetIndex1List = ["index 1", "1", "インデックス１"];
          const actionTargetIndex2List = ["index 2", "2", "インデックス２"];
          const actionTargetIndex3List = ["index 3", "3", "インデックス３"];
          const actionTargetIndex4List = ["index 4", "4", "インデックス４"];
          const actionTargetIndex5List = ["index 5", "5", "インデックス５"];
          const actionTargetIndex6List = ["index 6", "6", "インデックス６"];
          const actionTargetIndex7List = ["index 7", "7", "インデックス７"];
          const actionTargetIndex8List = ["index 8", "8", "インデックス８"];
          const checkBoxOnList = ["true", "on", "オン", "1"];
          const checkBoxOffList = ["false", "off", "オフ", "0"];
          const checkBoxWaitList = ["wait for completion", "完了までウェイト", "wait"];
          const checkBoxPurchaseOnlyList = ["purchase only", "購入のみ"];
          const checkBoxRepeatList = ["repeat", "repeat movements", "動作を繰り返す"];
          const checkBoxSkipList = ["skip", "skip if cannot move", "移動できない場合は飛ばす"];
          const checkBoxEquipmentList = ["include equipment", "装備品を含む"];
          const checkBoxInitializeList = ["initialize", "初期化"];
          const checkBoxKnockoutList = ["allow knockout", "戦闘不能を許可"];
          const checkBoxLevelUpList = ["show level up", "レベルアップを表示"];
          const checkBoxSaveExpList = ["save exp", "経験値の保存", "save level", "レベルの保存"];
          const checkBoxLoopHorizontallyList = ["loophorizontally", "横方向にループする"];
          const checkBoxLoopVerticallyList = ["loopvertically", "縦方向にループする"];
          const radioButtonOnList = ["true", "on", "オン", "0"];
          const radioButtonOffList = ["false", "off", "オフ", "1"];
          const radioButtonDisableList = ["disable", "0", "禁止"];
          const radioButtonEnableList = ["enable", "1", "許可"];
          const enemyTargetList = ["entire troop", "敵グループ全体"];
          const actorTargetList = ["entire party", "パーティ全体"];
          const getIncreaseOrDecrease = (operationType) => {
            if (operationIncreaseList.includes(operationType)) {
              return 0;
            } else if (operationDecreaseList.includes(operationType)) {
              return 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getAddOrRemove = (operationType) => {
            if (operationAddList.includes(operationType)) {
              return 0;
            } else if (operationRemoveList.includes(operationType)) {
              return 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getLearnOrForget = (operationType) => {
            if (operationLearnList.includes(operationType)) {
              return 0;
            } else if (operationForgetList.includes(operationType)) {
              return 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getConstantOrVariable = (operandValue) => {
            if (operandValue.match(constant_regexp)) {
              return { operand: 0, operandValue: Number(operandValue) };
            } else if (operandValue.match(variable_regexp)) {
              return { operand: 1, operandValue: Number(operandValue.match(variable_regexp)[1]) };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getFixedOrVariable = (operandValue) => {
            if (operandValue.match(constant_regexp)) {
              return { actor: 0, actorValue: Number(operandValue) };
            } else if (actorTargetList.includes(operandValue)) {
              return { actor: 0, actorValue: 0 };
            } else if (operandValue.match(variable_regexp)) {
              return { actor: 1, actorValue: Number(operandValue.match(variable_regexp)[1]) };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getEnemyOrActor = (subject) => {
            if (subject.match(constant_regexp)) {
              return { subject: 0, subjectValue: Number(subject) - 1 };
            } else if (subject.match(actor_regexp)) {
              return { subject: 1, subjectValue: Number(subject.match(actor_regexp)[1]) };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getCheckBoxValue = (checkBoxValue) => {
            if (checkBoxOnList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxWaitList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxPurchaseOnlyList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxRepeatList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxSkipList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxEquipmentList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxInitializeList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxKnockoutList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxLevelUpList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxSaveExpList.includes(checkBoxValue)) {
              return true;
            } else if (checkBoxOffList.includes(checkBoxValue)) {
              return false;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getOnOffRadioButtonValue = (checkBoxValue) => {
            if (radioButtonOnList.includes(checkBoxValue)) {
              return 0;
            } else if (radioButtonOffList.includes(checkBoxValue)) {
              return 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getDisableEnableRadioButtonValue = (radioButtonValue) => {
            if (radioButtonDisableList.includes(radioButtonValue)) {
              return 0;
            } else if (radioButtonEnableList.includes(radioButtonValue)) {
              return 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getLocationValue = (location) => {
            if (locationDirectList.includes(location)) {
              return 0;
            } else if (locationEventVariablesList.includes(location)) {
              return 1;
            } else if (locationExchangeList.includes(location) || locationDesignationList.includes(location)) {
              return 2;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getLocationEvent = (matches1, matches2, matches4) => {
            if (locationDirectList.includes(matches1)) {
              return { locationType: 0, locationX: parseInt(matches2), locationY: parseInt(matches4) };
            } else if (locationEventVariablesList.includes(matches1)) {
              return { locationType: 1, locationX: parseInt(matches2), locationY: parseInt(matches4) };
            } else if (locationDesignationList.includes(matches1)) {
              if (characterPlayerList.includes(matches2)) {
                return { locationType: 2, locationX: -1, locationY: 0 };
              } else if (characterThisEventList.includes(matches2)) {
                return { locationType: 2, locationX: 0, locationY: 0 };
              } else if (!isNaN(parseInt(matches2))) {
                return { locationType: 2, locationX: parseInt(matches2), locationY: 0 };
              } else {
                throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
              }
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getTroopValue = (troop) => {
            if (troop.match(constant_regexp)) {
              return { troop: 0, troopValue: Number(troop) };
            } else if (troop.match(variable_regexp)) {
              return { troop: 1, troopValue: Number(troop.match(variable_regexp)[1]) };
            } else if (troopRandomEncountList.includes(troop)) {
              return { troop: 2, troopValue: 0 };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getDirectionValue = (direction) => {
            if (directionRetainList.includes(direction)) {
              return 0;
            } else if (directionDownList.includes(direction)) {
              return 2;
            } else if (directionLeftList.includes(direction)) {
              return 4;
            } else if (directionRightList.includes(direction)) {
              return 6;
            } else if (directionUpList.includes(direction)) {
              return 8;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getFadeValue = (fade) => {
            if (fadeBlackList.includes(fade)) {
              return 0;
            } else if (fadeWhiteList.includes(fade)) {
              return 1;
            } else if (fadeNoneList.includes(fade)) {
              return 2;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getVehicleValue = (vehicle) => {
            if (vehicleBoatList.includes(vehicle)) {
              return 0;
            } else if (vehicleShipList.includes(vehicle)) {
              return 1;
            } else if (vehicleAirshipList.includes(vehicle)) {
              return 2;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getSpeedValue = (speed) => {
            if (speedX8SlowerList.includes(speed)) {
              return 1;
            } else if (speedX4SlowerList.includes(speed)) {
              return 2;
            } else if (speedX2SlowerList.includes(speed)) {
              return 3;
            } else if (speedNormalList.includes(speed)) {
              return 4;
            } else if (speedX2FasterList.includes(speed)) {
              return 5;
            } else if (speedX4FasterList.includes(speed)) {
              return 6;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getFrequencyValue = (frequency) => {
            if (frequencyLowestList.includes(frequency)) {
              return 1;
            } else if (frequencyLowerList.includes(frequency)) {
              return 2;
            } else if (frequencynormalList.includes(frequency)) {
              return 3;
            } else if (frequencyHigherList.includes(frequency)) {
              return 4;
            } else if (frequencyHighestList.includes(frequency)) {
              return 5;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getBlendModeValue = (blendMode) => {
            if (blendModeNormalList.includes(blendMode)) {
              return 0;
            } else if (blendModeAdditiveList.includes(blendMode)) {
              return 1;
            } else if (blendModeMultiplyList.includes(blendMode)) {
              return 2;
            } else if (blendModeScreenList.includes(blendMode)) {
              return 3;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getLocationInfoTypeValue = (infoType) => {
            if (infoTypeTerrainTagList.includes(infoType)) {
              return 0;
            } else if (infoTypeEventIdList.includes(infoType)) {
              return 1;
            } else if (infoTypeLayer1List.includes(infoType)) {
              return 2;
            } else if (infoTypeLayer2List.includes(infoType)) {
              return 3;
            } else if (infoTypeLayer3List.includes(infoType)) {
              return 4;
            } else if (infoTypeLayer4List.includes(infoType)) {
              return 5;
            } else if (infoTypeRegionIdList.includes(infoType)) {
              return 6;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getActorParameterValue = (actorParameter) => {
            if (actorMaxHpList.includes(actorParameter)) {
              return 0;
            } else if (actorMaxMpList.includes(actorParameter)) {
              return 1;
            } else if (actorAttackList.includes(actorParameter)) {
              return 2;
            } else if (actorDefenseList.includes(actorParameter)) {
              return 3;
            } else if (actorMAttackList.includes(actorParameter)) {
              return 4;
            } else if (actorMDefenseList.includes(actorParameter)) {
              return 5;
            } else if (actorAgilityList.includes(actorParameter)) {
              return 6;
            } else if (actorLuckList.includes(actorParameter)) {
              return 7;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getChangeEquipmentItemValue = (equipmentItem) => {
            if (equipmentItemList.includes(equipmentItem)) {
              return 0;
            } else if (!isNaN(parseInt(equipmentItem))) {
              return parseInt(equipmentItem);
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getCharacterValue = (character2) => {
            if (characterPlayerList.includes(character2)) {
              return -1;
            } else if (characterThisEventList.includes(character2)) {
              return 0;
            } else if (!isNaN(parseInt(character2))) {
              return parseInt(character2);
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getBalloonIconValue = (balloonIcon) => {
            if (balloonIconExclamationList.includes(balloonIcon)) {
              return 1;
            } else if (balloonIconQuestionList.includes(balloonIcon)) {
              return 2;
            } else if (balloonIconMusicNoteList.includes(balloonIcon)) {
              return 3;
            } else if (balloonIconHeartList.includes(balloonIcon)) {
              return 4;
            } else if (balloonIconAngerList.includes(balloonIcon)) {
              return 5;
            } else if (balloonIconSweatList.includes(balloonIcon)) {
              return 6;
            } else if (balloonIconFlustrationList.includes(balloonIcon)) {
              return 7;
            } else if (balloonIconSilenceList.includes(balloonIcon)) {
              return 8;
            } else if (balloonIconLightBulbList.includes(balloonIcon)) {
              return 9;
            } else if (balloonIconZzzList.includes(balloonIcon)) {
              return 10;
            } else if (balloonIconUserDefined1List.includes(balloonIcon)) {
              return 11;
            } else if (balloonIconUserDefined2List.includes(balloonIcon)) {
              return 12;
            } else if (balloonIconUserDefined3List.includes(balloonIcon)) {
              return 13;
            } else if (balloonIconUserDefined4List.includes(balloonIcon)) {
              return 14;
            } else if (balloonIconUserDefined5List.includes(balloonIcon)) {
              return 15;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getWeatherTypeValue = (weather) => {
            if (weatherNoneList.includes(weather)) {
              return "none";
            } else if (weatherRainList.includes(weather)) {
              return "rain";
            } else if (weatherStormList.includes(weather)) {
              return "storm";
            } else if (weatherSnowList.includes(weather)) {
              return "snow";
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getMerchandiseType = (merchandise2) => {
            if (merchandiseItemList.includes(merchandise2)) {
              return 0;
            } else if (merchandiseWeaponList.includes(merchandise2)) {
              return 1;
            } else if (merchandiseArmorList.includes(merchandise2)) {
              return 2;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getPriceValue = (price) => {
            if (priceStandardList.includes(price)) {
              return { price: 0, priceValue: 0 };
            } else if (!isNaN(parseInt(price))) {
              return { price: 1, priceValue: parseInt(price) };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getActionTarget = (target) => {
            if (actionTargetLastTargetList.includes(target)) {
              return -2;
            } else if (actionTargetRandomList.includes(target)) {
              return -1;
            } else if (actionTargetIndex1List.includes(target)) {
              return 0;
            } else if (actionTargetIndex2List.includes(target)) {
              return 1;
            } else if (actionTargetIndex3List.includes(target)) {
              return 2;
            } else if (actionTargetIndex4List.includes(target)) {
              return 3;
            } else if (actionTargetIndex5List.includes(target)) {
              return 4;
            } else if (actionTargetIndex6List.includes(target)) {
              return 5;
            } else if (actionTargetIndex7List.includes(target)) {
              return 6;
            } else if (actionTargetIndex8List.includes(target)) {
              return 7;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getEnemyTargetValue = (enemy) => {
            if (enemyTargetList.includes(enemy)) {
              return -1;
            } else if (!isNaN(parseInt(enemy))) {
              return parseInt(enemy) - 1;
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          const getTargetEnemyMultipleValues = (enemy) => {
            if (enemyTargetList.includes(enemy)) {
              return { enemyValue: 0, isAllChecked: true };
            } else if (!isNaN(parseInt(enemy))) {
              return { enemyValue: parseInt(enemy) - 1, isAllChecked: false };
            } else {
              throw new Error("Syntax error. / 文法エラーです。:" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          };
          if (change_gold) {
            const params = change_gold[1].split(",").map((s) => s.trim().toLowerCase());
            const operation = getIncreaseOrDecrease(params[0].toLowerCase());
            const { operand, operandValue } = getConstantOrVariable(params[1].toLowerCase());
            return [getChangeGold(operation, operand, operandValue)];
          }
          if (change_items) {
            const params = change_items[1].split(",").map((s) => s.trim().toLowerCase());
            const itemId = parseInt(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            return [getChangeItems(itemId, operation, operand, operandValue)];
          }
          if (change_weapons) {
            const params = change_weapons[1].split(",").map((s) => s.trim().toLowerCase());
            const weaponId = parseInt(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const includeEquipmentFlg = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeWeapons(weaponId, operation, operand, operandValue, includeEquipmentFlg)];
          }
          if (change_armors) {
            const params = change_armors[1].split(",").map((s) => s.trim().toLowerCase());
            const armorId = parseInt(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const includeEquipmentFlg = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeArmors(armorId, operation, operand, operandValue, includeEquipmentFlg)];
          }
          if (change_party_member) {
            const params = change_party_member[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const operation = getAddOrRemove(params[1]);
            const includeEquipmentFlg = params[2] === void 0 ? false : getCheckBoxValue(params[2]);
            return [getChangePartyMember(actorId, operation, includeEquipmentFlg)];
          }
          if (change_hp) {
            const params = change_hp[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const allowDeathFlg = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeHp(actor2, actorValue, operation, operand, operandValue, allowDeathFlg)];
          }
          if (change_mp) {
            const params = change_mp[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            return [getChangeMp(actor2, actorValue, operation, operand, operandValue)];
          }
          if (change_tp) {
            const params = change_tp[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            return [getChangeTp(actor2, actorValue, operation, operand, operandValue)];
          }
          if (change_state) {
            const params = change_state[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getAddOrRemove(params[1]);
            const stateId = parseInt(params[2]);
            return [getChangeState(actor2, actorValue, operation, stateId)];
          }
          if (recover_all) {
            const params = recover_all[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            return [getRecoverAll(actor2, actorValue)];
          }
          if (change_exp) {
            const params = change_exp[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const showLevelUpFlg = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeExp(actor2, actorValue, operation, operand, operandValue, showLevelUpFlg)];
          }
          if (change_level) {
            const params = change_level[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const showLevelUpFlg = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeLevel(actor2, actorValue, operation, operand, operandValue, showLevelUpFlg)];
          }
          if (change_parameter) {
            const params = change_parameter[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const parameter = getActorParameterValue(params[1]);
            const operation = getIncreaseOrDecrease(params[2]);
            const { operand, operandValue } = getConstantOrVariable(params[3]);
            return [getChangeParameter(actor2, actorValue, parameter, operation, operand, operandValue)];
          }
          if (change_skill) {
            const params = change_skill[1].split(",").map((s) => s.trim().toLowerCase());
            const { actor: actor2, actorValue } = getFixedOrVariable(params[0]);
            const operation = getLearnOrForget(params[1]);
            const skillId = parseInt(params[2]);
            return [getChangeSkill(actor2, actorValue, operation, skillId)];
          }
          if (change_equipment) {
            const params = change_equipment[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const equipmentType = parseInt(params[1]);
            const equipmentItem = getChangeEquipmentItemValue(params[2]);
            return [getChangeEquipment(actorId, equipmentType, equipmentItem)];
          }
          if (change_name) {
            const params = change_name[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const name = params[1] === void 0 ? "" : params[1];
            return [getChangeName(actorId, name)];
          }
          if (change_class) {
            const params = change_class[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const classId = parseInt(params[1]);
            const saveExpFlg = params[2] === void 0 ? false : getCheckBoxValue(params[2]);
            return [getChangeClass(actorId, classId, saveExpFlg)];
          }
          if (change_nickname) {
            const params = change_nickname[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const nickname = params[1] === void 0 ? "" : params[1];
            return [getChangeNickname(actorId, nickname)];
          }
          if (change_profile) {
            const params = change_profile[1].split(",").map((s) => s.trim());
            const actorId = parseInt(params[0]);
            const firstLine = params[1] === void 0 ? "" : String(params[1]);
            const secondLine = params[2] === void 0 ? "" : String(params[2]);
            const isNewlineCharacter = firstLine.includes("\\n");
            let profile = "";
            if (isNewlineCharacter || secondLine === "") {
              profile = firstLine;
            } else {
              profile = firstLine + "\n" + secondLine;
            }
            return [getChangeProfile(actorId, profile)];
          }
          if (transfer_player) {
            const params = transfer_player[1].split(",").map((s) => s.trim().toLowerCase());
            const regex = /(.*?)\[(\d+)]\[(\d+)]\[(\d+)]/;
            const matches = params[0].match(regex);
            if (!matches)
              throw new Error("Syntax error. / 文法エラーです。:" + params[0]);
            const location = getLocationValue(matches[1]);
            const mapId = parseInt(matches[2]);
            const mapX = parseInt(matches[3]);
            const mapY = parseInt(matches[4]);
            const direction = getDirectionValue(params[1]);
            const fade = getFadeValue(params[2]);
            return [getTransferPlayer(location, mapId, mapX, mapY, direction, fade)];
          }
          if (set_vehicle_location) {
            const params = set_vehicle_location[1].split(",").map((s) => s.trim().toLowerCase());
            const vehicle = getVehicleValue(params[0]);
            const regex = /(.*?)\[(\d+)]\[(\d+)]\[(\d+)]/;
            const matches = params[1].match(regex);
            if (!matches)
              throw new Error("Syntax error. / 文法エラーです。:" + params[1]);
            const location = getLocationValue(matches[1]);
            const mapId = parseInt(matches[2]);
            const mapX = parseInt(matches[3]);
            const mapY = parseInt(matches[4]);
            return [getSetVehicleLocation(vehicle, location, mapId, mapX, mapY)];
          }
          if (set_event_location) {
            const params = set_event_location[1].split(",").map((s) => s.trim().toLowerCase());
            const event = getCharacterValue(params[0]);
            const regex = /(.*?)\[(.*?)](\[(\d+)])?(\[(\d+)])?/;
            const matches = params[1].match(regex);
            if (!matches)
              throw new Error("Syntax error. / 文法エラーです。:" + params[1]);
            const location = getLocationValue(matches[1]);
            let mapX = 0;
            let mapY = 0;
            if (location === 0 || location === 1) {
              mapX = parseInt(matches[2]);
              mapY = parseInt(matches[4]);
            } else if (location === 2) {
              mapX = getCharacterValue(matches[2]);
              mapY = 0;
            }
            const direction = getDirectionValue(params[2]);
            return [getSetEventLocation(event, location, mapX, mapY, direction)];
          }
          if (scroll_map) {
            const params = scroll_map[1].split(",").map((s) => s.trim().toLowerCase());
            const direction = getDirectionValue(params[0]);
            const distance = parseInt(params[1]);
            const speed = getSpeedValue(params[2]);
            const waitForCompletion = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getScrollMap(direction, distance, speed, waitForCompletion)];
          }
          if (set_movement_route) {
            const params = set_movement_route[1].split(",").map((s) => s.trim().toLowerCase());
            const target = getCharacterValue(params[0]);
            const repeat = params[1] === void 0 ? false : getCheckBoxValue(params[1]);
            const skippable = params[2] === void 0 ? false : getCheckBoxValue(params[2]);
            const wait2 = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getMovementRoute(target, repeat, skippable, wait2)];
          }
          if (move_down) {
            return [getMoveDown()];
          }
          if (move_left) {
            return [getMoveLeft()];
          }
          if (move_right) {
            return [getMoveRight()];
          }
          if (move_up) {
            return [getMoveUp()];
          }
          if (move_lower_left) {
            return [getMoveLowerLeft()];
          }
          if (move_lower_right) {
            return [getMoveLowerRight()];
          }
          if (move_upper_left) {
            return [getMoveUpperLeft()];
          }
          if (move_upper_right) {
            return [getMoveUpperRight()];
          }
          if (move_at_random) {
            return [getMoveAtRandom()];
          }
          if (move_toward_player) {
            return [getMoveTowardPlayer()];
          }
          if (move_away_from_player) {
            return [getMoveAwayFromPlayer()];
          }
          if (one_step_forward) {
            return [getOneStepForward()];
          }
          if (one_step_backward) {
            return [getOneStepBackward()];
          }
          if (jump) {
            const params = jump[1].split(",").map((s) => s.trim().toLowerCase());
            const x = parseInt(params[0]);
            const y = parseInt(params[1]);
            return [getJump(x, y)];
          }
          if (mc_wait) {
            const params = mc_wait[1].split(",").map((s) => s.trim().toLowerCase());
            const wait2 = parseInt(params[0]);
            return [getMoveWait(wait2)];
          }
          if (turn_down) {
            return [getTurnDown()];
          }
          if (turn_left) {
            return [getTurnLeft()];
          }
          if (turn_right) {
            return [getTurnRight()];
          }
          if (turn_up) {
            return [getTurnUp()];
          }
          if (turn_90_left) {
            return [getTurn90Left()];
          }
          if (turn_90_right) {
            return [getTurn90Right()];
          }
          if (turn_180) {
            return [getTurn180()];
          }
          if (turn_90_right_or_left) {
            return [getTurn90RightorLeft()];
          }
          if (turn_at_random) {
            return [getTurnAtRandom()];
          }
          if (turn_toward_Player) {
            return [getTurnTowardPlayer()];
          }
          if (turn_away_from_player) {
            return [getTurnAwayFromPlayer()];
          }
          if (switch_on) {
            const params = switch_on[1].split(",").map((s) => s.trim().toLowerCase());
            const switchId = parseInt(params[0]);
            return [getSwitchOn(switchId)];
          }
          if (switch_off) {
            const params = switch_off[1].split(",").map((s) => s.trim().toLowerCase());
            const switchId = parseInt(params[0]);
            return [getSwitchOff(switchId)];
          }
          if (change_speed) {
            const params = change_speed[1].split(",").map((s) => s.trim().toLowerCase());
            const speed = getSpeedValue(params[0]);
            return [getChangeSpeed(speed)];
          }
          if (change_frequency) {
            const params = change_frequency[1].split(",").map((s) => s.trim().toLowerCase());
            const frequency = getFrequencyValue(params[0]);
            return [getChangeFrequency(frequency)];
          }
          if (walking_animation_on) {
            return [getWalkingAnimationOn()];
          }
          if (walking_animation_off) {
            return [getWalkingAnimationOff()];
          }
          if (stepping_animation_on) {
            return [getSteppingAnimationOn()];
          }
          if (stepping_animation_off) {
            return [getSteppingAnimationOff()];
          }
          if (direction_fix_on) {
            return [getDirectionFixOn()];
          }
          if (direction_fix_off) {
            return [getDirectionFixOff()];
          }
          if (through_On) {
            return [getThroughOn()];
          }
          if (through_Off) {
            return [getThroughOff()];
          }
          if (transparent_on) {
            return [getTransparentOn()];
          }
          if (transparent_off) {
            return [getTransparentOff()];
          }
          if (change_image) {
            const params = change_image[1].split(",").map((s) => s.trim());
            const image = weatherNoneList.includes(params[0].toLowerCase()) ? "" : params[0];
            const imageId = params[1] === void 0 ? 0 : parseInt(params[1]);
            return [getChangeImage(image, imageId)];
          }
          if (change_opacity) {
            const params = change_opacity[1].split(",").map((s) => s.trim().toLowerCase());
            const opacity = parseInt(params[0]);
            return [getChangeOpacity(opacity)];
          }
          if (change_blend_mode) {
            const params = change_blend_mode[1].split(",").map((s) => s.trim().toLowerCase());
            const blendMode = getBlendModeValue(params[0]);
            return [getChangeBlendMode(blendMode)];
          }
          if (mc_play_se) {
            if (mc_play_se[1]) {
              const params = mc_play_se[1].replace(/ /g, "").split(",");
              let name = "Attack1";
              let volume = 90;
              let pitch = 100;
              let pan = 0;
              if (params[0]) {
                name = params[0];
              }
              if (Number(params[1]) || Number(params[1]) === 0) {
                volume = Number(params[1]);
              }
              if (Number(params[2]) || Number(params[2]) === 0) {
                pitch = Number(params[2]);
              }
              if (Number(params[3]) || Number(params[3]) === 0) {
                pan = Number(params[3]);
              }
              if (name.toUpperCase() === "NONE" || name === "なし") {
                return [getMcPlaySeEvent("", volume, pitch, pan)];
              } else {
                return [getMcPlaySeEvent(name, volume, pitch, pan)];
              }
            }
          }
          if (mc_script) {
            const params = mc_script[1].split(",").map((s) => s.trim().toLowerCase());
            const script = params[0];
            return [getMoveScript(script)];
          }
          if (get_on_off_vehicle) {
            return [getOnOffVehicle()];
          }
          if (change_transparency) {
            const params = change_transparency[1].split(",").map((s) => s.trim().toLowerCase());
            const transparency = getOnOffRadioButtonValue(params[0]);
            return [getChangeTransparency(transparency)];
          }
          if (change_player_followers) {
            const params = change_player_followers[1].split(",").map((s) => s.trim().toLowerCase());
            const playerFollowers = getOnOffRadioButtonValue(params[0]);
            return [getChangePlayerFollowers(playerFollowers)];
          }
          if (gather_followers) {
            return [getGatherFollowers()];
          }
          if (show_animation) {
            const params = show_animation[1].split(",").map((s) => s.trim().toLowerCase());
            const character2 = getCharacterValue(params[0]);
            const animationId = parseInt(params[1]);
            const waitForCompletion = params[2] === void 0 ? false : getCheckBoxValue(params[2]);
            return [getShowAnimation(character2, animationId, waitForCompletion)];
          }
          if (show_balloon_icon) {
            const params = show_balloon_icon[1].split(",").map((s) => s.trim().toLowerCase());
            const character2 = getCharacterValue(params[0]);
            const balloonIcon = getBalloonIconValue(params[1]);
            const waitForCompletion = params[2] === void 0 ? false : getCheckBoxValue(params[2]);
            return [getShowBalloonIcon(character2, balloonIcon, waitForCompletion)];
          }
          if (erase_event) {
            return [getEraseEvent()];
          }
          if (tint_screen) {
            const params = tint_screen[1].split(",").map((s) => s.trim());
            if (params.length > 0) {
              const options = params;
              return [getTintScreen(options)];
            } else {
              console.error(text);
              throw new Error("Syntax error. / 文法エラーです。" + text.replace(/</g, "  ").replace(/>/g, "  "));
            }
          }
          if (flash_screen) {
            const params = flash_screen[1].split(",").map((s) => s.trim().toLowerCase());
            const red = parseInt(params[0]);
            const green = parseInt(params[1]);
            const blue = parseInt(params[2]);
            const intensity = parseInt(params[3]);
            const frames = parseInt(params[4]);
            const waitForCompletion = params[5] === void 0 ? false : getCheckBoxValue(params[5]);
            return [getFlashScreen(red, green, blue, intensity, frames, waitForCompletion)];
          }
          if (shake_screen) {
            const params = shake_screen[1].split(",").map((s) => s.trim().toLowerCase());
            const power = parseInt(params[0]);
            const speed = parseInt(params[1]);
            const frames = parseInt(params[2]);
            const waitForCompletion = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getShakeScreen(power, speed, frames, waitForCompletion)];
          }
          if (set_weather_effect) {
            const params = set_weather_effect[1].split(",").map((s) => s.trim().toLowerCase());
            const type = getWeatherTypeValue(params[0]);
            const power = parseInt(params[1]);
            const frames = parseInt(params[2]);
            const waitForCompletion = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getSetWeatherEffect(type, power, frames, waitForCompletion)];
          }
          if (play_movie) {
            const params = play_movie[1].split(",").map((s) => s.trim());
            const fileName = weatherNoneList.includes(params[0].toLowerCase()) ? "" : params[0];
            return [getPlayMovie(fileName)];
          }
          if (battle_processing) {
            const params = battle_processing[1].split(",").map((s) => s.trim().toLowerCase());
            const { troop, troopValue } = getTroopValue(params[0]);
            return [getBattleProcessing(troop, troopValue)];
          }
          if (if_win) {
            return [getIfWin()];
          }
          if (if_escape) {
            return [getIfEscape()];
          }
          if (if_lose) {
            return [getIfLose()];
          }
          if (name_input_processing) {
            const params = name_input_processing[1].split(",").map((s) => s.trim().toLowerCase());
            const actorId = parseInt(params[0]);
            const maxCharacter = parseInt(params[1]);
            return [getNameInputProcessing(actorId, maxCharacter)];
          }
          if (shop_processing) {
            const params = shop_processing[1].split(",").map((s) => s.trim().toLowerCase());
            const purchaseOnly = params[0] === "" ? false : getCheckBoxValue(params[0]);
            return [getShopProcessing(purchaseOnly)];
          }
          if (merchandise) {
            const params = merchandise[1].split(",").map((s) => s.trim().toLowerCase());
            const merchandiseType = getMerchandiseType(params[0]);
            const merchandiseId = parseInt(params[1]);
            const { price, priceValue } = params[2] === void 0 ? { price: 0, priceValue: 0 } : getPriceValue(params[2]);
            return [getMerchandise(merchandiseType, merchandiseId, price, priceValue)];
          }
          if (open_menu_screen) {
            return [getOpenMenuScreen()];
          }
          if (open_save_screen) {
            return [getOpenSaveScreen()];
          }
          if (game_over) {
            return [getGameOver()];
          }
          if (return_to_title_screen) {
            return [getReturnToTitleScreen()];
          }
          if (change_victory_me) {
            const params = change_victory_me[1].split(",").map((s) => s.trim());
            const name = weatherNoneList.includes(params[0].toLowerCase()) ? "" : params[0];
            const volume = params[1] === void 0 ? 90 : parseInt(params[1]);
            const pitch = params[2] === void 0 ? 100 : parseInt(params[2]);
            const pan = params[3] === void 0 ? 0 : parseInt(params[3]);
            return [getChangeVictoryMe(name, volume, pitch, pan)];
          }
          if (change_defeat_me) {
            const params = change_defeat_me[1].split(",").map((s) => s.trim());
            const name = weatherNoneList.includes(params[0].toLowerCase()) ? "" : params[0];
            const volume = params[1] === void 0 ? 90 : parseInt(params[1]);
            const pitch = params[2] === void 0 ? 100 : parseInt(params[2]);
            const pan = params[3] === void 0 ? 0 : parseInt(params[3]);
            return [getChangeDefeatMe(name, volume, pitch, pan)];
          }
          if (change_vehicle_bgm) {
            const params = change_vehicle_bgm[1].split(",").map((s) => s.trim());
            const vehicle = getVehicleValue(params[0].toLowerCase());
            const name = weatherNoneList.includes(params[1].toLowerCase()) ? "" : params[1];
            const volume = params[2] === void 0 ? 90 : parseInt(params[2]);
            const pitch = params[3] === void 0 ? 100 : parseInt(params[3]);
            const pan = params[4] === void 0 ? 0 : parseInt(params[4]);
            return [getChangeVehicleBgm(vehicle, name, volume, pitch, pan)];
          }
          if (change_save_access) {
            const params = change_save_access[1].split(",").map((s) => s.trim().toLowerCase());
            const save = getDisableEnableRadioButtonValue(params[0]);
            return [getChangeSaveAccess(save)];
          }
          if (change_menu_access) {
            const params = change_menu_access[1].split(",").map((s) => s.trim().toLowerCase());
            const menu = getDisableEnableRadioButtonValue(params[0]);
            return [getChangeMenuAccess(menu)];
          }
          if (change_encounter) {
            const params = change_encounter[1].split(",").map((s) => s.trim().toLowerCase());
            const encounter = getDisableEnableRadioButtonValue(params[0]);
            return [getChangeEncounter(encounter)];
          }
          if (change_formation_access) {
            const params = change_formation_access[1].split(",").map((s) => s.trim().toLowerCase());
            const formation = getDisableEnableRadioButtonValue(params[0]);
            return [getChangeFormationAccess(formation)];
          }
          if (change_window_color) {
            const params = change_window_color[1].split(",").map((s) => s.trim().toLowerCase());
            const red = parseInt(params[0]);
            const green = parseInt(params[1]);
            const blue = parseInt(params[2]);
            return [getChangeWindowColor(red, green, blue)];
          }
          if (change_actor_images) {
            const params = change_actor_images[1].split(",").map((s) => s.trim());
            const actorId = parseInt(params[0]);
            const faceName = weatherNoneList.includes(params[1].toLowerCase()) ? "" : String(params[1]);
            const faceId = parseInt(params[2]);
            const characterName = weatherNoneList.includes(params[3].toLowerCase()) ? "" : String(params[3]);
            const characterId = parseInt(params[4]);
            const battlerName = weatherNoneList.includes(params[5].toLowerCase()) ? "" : String(params[5]);
            return [getChangeActorImages(actorId, faceName, faceId, characterName, characterId, battlerName)];
          }
          if (change_vehicle_image) {
            const params = change_vehicle_image[1].split(",").map((s) => s.trim());
            const vehicle = getVehicleValue(params[0].toLowerCase());
            const vehicleName = weatherNoneList.includes(params[1].toLowerCase()) ? "" : String(params[1]);
            const vehicleId = params[2] === void 0 ? 0 : parseInt(params[2]);
            return [getChangeVehicleImage(vehicle, vehicleName, vehicleId)];
          }
          if (change_map_name_display) {
            const params = change_map_name_display[1].split(",").map((s) => s.trim().toLowerCase());
            const mapNameDisplay = getOnOffRadioButtonValue(params[0]);
            return [getChangeMapNameDisplay(mapNameDisplay)];
          }
          if (change_tileset) {
            const params = change_tileset[1].split(",").map((s) => s.trim().toLowerCase());
            const tilesetId = parseInt(params[0]);
            return [getChangeTileset(tilesetId)];
          }
          if (change_battle_background) {
            const params = change_battle_background[1].split(",").map((s) => s.trim());
            const battleBackGround1 = weatherNoneList.includes(params[0].toLowerCase()) ? "" : String(params[0]);
            const battleBackGround2 = weatherNoneList.includes(params[1].toLowerCase()) ? "" : String(params[1]);
            return [getChangeBattleBackGround(battleBackGround1, battleBackGround2)];
          }
          if (change_parallax) {
            const params = change_parallax[1].split(",").map((s) => s.trim());
            const image = weatherNoneList.includes(params[0].toLowerCase()) ? "" : String(params[0]);
            const regex = /(.*?)\[(-?\d+)]/;
            const matches1 = params[1] === void 0 ? void 0 : params[1].match(regex);
            const matches2 = params[2] === void 0 ? void 0 : params[2].match(regex);
            let loopHorizontally = false;
            let loopVertically = false;
            let loopHorizontallyScroll = 0;
            let loopVerticallyScroll = 0;
            if (matches1 !== void 0) {
              if (checkBoxLoopHorizontallyList.includes(matches1[1].toLowerCase())) {
                loopHorizontally = true;
                loopHorizontallyScroll = parseInt(matches1[2]);
              } else if (checkBoxLoopVerticallyList.includes(matches1[1].toLowerCase())) {
                loopVertically = true;
                loopVerticallyScroll = parseInt(matches1[2]);
              }
            }
            if (matches2 !== void 0) {
              if (checkBoxLoopHorizontallyList.includes(matches2[1].toLowerCase())) {
                loopHorizontally = true;
                loopHorizontallyScroll = parseInt(matches2[2]);
              } else if (checkBoxLoopVerticallyList.includes(matches2[1].toLowerCase())) {
                loopVertically = true;
                loopVerticallyScroll = parseInt(matches2[2]);
              }
            }
            return [getChangeParallax(image, loopHorizontally, loopVertically, loopHorizontallyScroll, loopVerticallyScroll)];
          }
          if (get_location_info) {
            const params = get_location_info[1].split(",").map((s) => s.trim().toLowerCase());
            const variableId = parseInt(params[0]);
            const infoType = getLocationInfoTypeValue(params[1]);
            const regex = /^(.*?)\[(.*?)](\[(\d+)])?/;
            const matches = params[2].match(regex);
            if (!matches)
              throw new Error("Syntax error. / 文法エラーです。:" + params[2]);
            const { locationType, locationX, locationY } = getLocationEvent(matches[1], matches[2], matches[4]);
            return [getGetLocationInfo(variableId, infoType, locationType, locationX, locationY)];
          }
          if (change_enemy_hp) {
            const params = change_enemy_hp[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            const allowDeath = params[3] === void 0 ? false : getCheckBoxValue(params[3]);
            return [getChangeEnemyHp(enemy, operation, operand, operandValue, allowDeath)];
          }
          if (change_enemy_mp) {
            const params = change_enemy_mp[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            return [getChangeEnemyMp(enemy, operation, operand, operandValue)];
          }
          if (change_enemy_tp) {
            const params = change_enemy_tp[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            const operation = getIncreaseOrDecrease(params[1]);
            const { operand, operandValue } = getConstantOrVariable(params[2]);
            return [getChangeEnemyTp(enemy, operation, operand, operandValue)];
          }
          if (change_enemy_state) {
            const params = change_enemy_state[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            const operation = getAddOrRemove(params[1]);
            const stateId = parseInt(params[2]);
            return [getChangeEnemyState(enemy, operation, stateId)];
          }
          if (enemy_recover_all) {
            const params = enemy_recover_all[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            return [getEnemyRecoverAll(enemy)];
          }
          if (enemy_appear) {
            const params = enemy_appear[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            return [getEnemyAppear(enemy)];
          }
          if (enemy_transform) {
            const params = enemy_transform[1].split(",").map((s) => s.trim().toLowerCase());
            const enemy = getEnemyTargetValue(params[0]);
            const transformToEnemyId = parseInt(params[1]);
            return [getEnemyTransform(enemy, transformToEnemyId)];
          }
          if (show_battle_animation) {
            const params = show_battle_animation[1].split(",").map((s) => s.trim().toLowerCase());
            const { enemyValue, isAllChecked } = getTargetEnemyMultipleValues(params[0]);
            const animationId = parseInt(params[1]);
            return [getShowBattleAnimation(enemyValue, animationId, isAllChecked)];
          }
          if (force_action) {
            const params = force_action[1].split(",").map((s) => s.trim().toLowerCase());
            const { subject, subjectValue } = getEnemyOrActor(params[0]);
            const skillId = parseInt(params[1]);
            const target = getActionTarget(params[2]);
            return [getForceAction(subject, subjectValue, skillId, target)];
          }
          if (abort_battle) {
            return [getAbortBattle()];
          }
          if (text.match(/\S/g)) {
            logger.log("push: ", text);
            event_command_list2.push(getTextFrameEvent(text));
          }
          return event_command_list2;
        };
        const getEvents = function(text, previous_text, window_frame, previous_frame, block_stack, block_map) {
          let event_command_list2 = [];
          const events2 = _getEvents(text, window_frame, block_stack, block_map);
          const PRE_CODE = 101;
          const CHOICE_CODE = 102;
          const TEXT_CODE = 401;
          const WHEN_CODE = 402;
          const WHEN_CANCEL_CODE = 403;
          const IF_CODE = 111;
          const SHOP_PROCESSING_CODE = 302;
          const MERCHANDISE_CODE = 605;
          const IF_END_CODE = getEnd().code;
          const CHOICE_END_CODE = getShowChoiceEnd().code;
          const IF_IFEND_CODE = getIfEnd().code;
          const BATTLE_PROCESSING_CODE = 301;
          const IF_WIN_CODE = 601;
          const IF_ESCAPE_CODE = 602;
          const IF_LOSE_CODE = 603;
          const MOVEMENT_ROUTE_CODE = 205;
          const MOVEMENT_COMMANDS_CODE = 505;
          events2.forEach((current_frame) => {
            if (current_frame.code === IF_END_CODE || current_frame.code === CHOICE_END_CODE || current_frame.code === IF_IFEND_CODE) {
              block_stack.pop();
            }
          });
          if (Array.isArray(events2) && events2.length > 0) {
            if (events2.length > 1) {
              event_command_list2 = event_command_list2.concat(events2);
              return { window_frame: null, event_command_list: event_command_list2, block_stack };
            }
            const current_frame = events2[0];
            if (current_frame.code === PRE_CODE) {
              window_frame = current_frame;
              return { window_frame, event_command_list: event_command_list2, block_stack };
            }
            if (current_frame.code === TEXT_CODE) {
              if (previous_frame) {
                if (previous_frame.code === TEXT_CODE) {
                  if (previous_text === "") {
                    event_command_list2.push(getPretextEvent());
                  }
                } else if (previous_frame.code === PRE_CODE) {
                  event_command_list2.push(window_frame);
                } else {
                  event_command_list2.push(getPretextEvent());
                }
              } else {
                event_command_list2.push(getPretextEvent());
              }
            } else if (current_frame.code === WHEN_CODE) {
              const current_index = block_stack.slice(-1)[0].index;
              const current_choice = block_stack.slice(-1)[0].event;
              if (current_index !== 0) {
                event_command_list2.push(getBlockEnd());
              }
              current_frame.parameters[0] = current_index;
              block_stack.slice(-1)[0].index += 1;
              if (current_choice) {
                if (Array.isArray(current_choice.parameters)) {
                  current_choice.parameters[0].push(current_frame.parameters[1]);
                }
              }
            } else if (current_frame.code === WHEN_CANCEL_CODE) {
              const current_index = block_stack.slice(-1)[0].index;
              if (current_index !== 0) {
                event_command_list2.push(getBlockEnd());
              }
              block_stack.slice(-1)[0].index += 1;
            } else if (current_frame.code === IF_WIN_CODE) {
              block_stack.slice(-1)[0].winCode = true;
            } else if (current_frame.code === IF_ESCAPE_CODE) {
              if (block_stack.slice(-1)[0].winCode === false) {
                event_command_list2.push(getIfWin());
                block_stack.slice(-1)[0].winCode = true;
              }
              const current_event = block_stack.slice(-1)[0].event;
              event_command_list2.push(getBlockEnd());
              current_event.parameters[2] = true;
            } else if (current_frame.code === IF_LOSE_CODE) {
              if (block_stack.slice(-1)[0].winCode === false) {
                event_command_list2.push(getIfWin());
                block_stack.slice(-1)[0].winCode = true;
              }
              const current_event = block_stack.slice(-1)[0].event;
              event_command_list2.push(getBlockEnd());
              current_event.parameters[3] = true;
            } else if (current_frame.code === CHOICE_CODE) {
              block_stack.push({ code: current_frame.code, event: current_frame, indent: block_stack.length, index: 0 });
            } else if (current_frame.code === IF_CODE) {
              block_stack.push({ code: current_frame.code, event: current_frame, indent: block_stack.length, index: 0 });
            } else if (current_frame.code === BATTLE_PROCESSING_CODE) {
              block_stack.push({ code: current_frame.code, event: current_frame, indent: block_stack.length, winCode: false });
            } else if (current_frame.code === MOVEMENT_ROUTE_CODE) {
              block_stack.push({ code: current_frame.code, event: current_frame, indent: block_stack.length });
            }
            if (current_frame.code === MERCHANDISE_CODE) {
              if (previous_frame.code === SHOP_PROCESSING_CODE && previous_frame.parameters[1] === 0) {
                previous_frame.parameters[0] = current_frame.parameters[0];
                previous_frame.parameters[1] = current_frame.parameters[1];
                previous_frame.parameters[2] = current_frame.parameters[2];
                previous_frame.parameters[3] = current_frame.parameters[3];
                events2.pop();
              }
            }
            if (current_frame.code === MOVEMENT_COMMANDS_CODE) {
              const current_movement_route = block_stack.slice(-1)[0].event;
              if (current_movement_route.code === MOVEMENT_ROUTE_CODE) {
                const movement_command_parameters = current_frame.parameters[0];
                const movement_command_end = current_movement_route.parameters[1].list.pop();
                current_movement_route.parameters[1].list.push(movement_command_parameters);
                current_movement_route.parameters[1].list.push(movement_command_end);
              }
            }
            event_command_list2 = event_command_list2.concat(events2);
          }
          return { window_frame: null, event_command_list: event_command_list2, block_stack };
        };
        const autoIndent = function(events2) {
          const BOTTOM_CODE = 0;
          const IF_CODE = 111;
          const ELSE_CODE = 411;
          const LOOP_CODE = 112;
          const WHEN_CODE = 402;
          const WHEN_CANCEL_CODE = 403;
          const IF_WIN_CODE = 601;
          const IF_ESCAPE_CODE = 602;
          const IF_LOSE_CODE = 603;
          const out_events = events2.reduce((o, e) => {
            const parameters = JSON.parse(JSON.stringify(e.parameters));
            let now_indent = 0;
            const last = o.slice(-1)[0];
            if (last !== void 0) {
              now_indent = last.indent;
              switch (last.code) {
                case IF_CODE:
                case ELSE_CODE:
                case LOOP_CODE:
                case WHEN_CODE:
                case IF_WIN_CODE:
                case IF_ESCAPE_CODE:
                case IF_LOSE_CODE:
                case WHEN_CANCEL_CODE: {
                  now_indent += 1;
                  break;
                }
                case BOTTOM_CODE:
                  now_indent -= 1;
                  break;
              }
            }
            o.push({ code: e.code, indent: now_indent, parameters });
            return o;
          }, []);
          return out_events;
        };
        const convert2 = function(text) {
          let scenario_text2 = uniformNewLineCode(text);
          scenario_text2 = eraseCommentOutLines(scenario_text2, Laurus.Text2Frame.CommentOutChar);
          let block_map = {};
          ["script", "comment", "scrolling"].forEach(function(block_name) {
            const t = getBlockStatement(scenario_text2, block_name);
            scenario_text2 = t.scenario_text;
            block_map = Object.assign(block_map, t.block_map);
          });
          const text_lines = scenario_text2.split("\n");
          let event_command_list2 = [];
          let previous_text = "";
          let window_frame = null;
          let block_stack = [];
          for (let i = 0; i < text_lines.length; i++) {
            const text2 = text_lines[i];
            if (text2) {
              let previous_frame = window_frame;
              if (previous_frame === null) {
                previous_frame = event_command_list2.slice(-1)[0];
              }
              const return_obj = getEvents(text2, previous_text, window_frame, previous_frame, block_stack, block_map);
              window_frame = return_obj.window_frame;
              const new_event_command_list = return_obj.event_command_list;
              block_stack = return_obj.block_stack;
              event_command_list2 = event_command_list2.concat(new_event_command_list);
            }
            logger.log(i, text2);
            previous_text = text2;
          }
          event_command_list2 = completeLackedBottomEvent(event_command_list2);
          event_command_list2 = autoIndent(event_command_list2);
          return event_command_list2;
        };
        Laurus.Text2Frame.export = { convert: convert2 };
        if (Laurus.Text2Frame.ExecMode === "LIBRARY_EXPORT") {
          return;
        }
        const scenario_text = readText(Laurus.Text2Frame.TextPath);
        const event_command_list = convert2(scenario_text);
        event_command_list.push(getCommandBottomEvent());
        switch (Laurus.Text2Frame.ExecMode) {
          case "IMPORT_MESSAGE_TO_EVENT":
          case "メッセージをイベントにインポート": {
            const map_data = readJsonData(Laurus.Text2Frame.MapPath);
            if (!map_data.events[Laurus.Text2Frame.EventID]) {
              throw new Error(
                "EventID not found. / EventIDが見つかりません。\nEvent ID: " + Laurus.Text2Frame.EventID
              );
            }
            const pageID = Number(Laurus.Text2Frame.PageID) - 1;
            while (!map_data.events[Laurus.Text2Frame.EventID].pages[pageID]) {
              map_data.events[Laurus.Text2Frame.EventID].pages.push(getDefaultPage());
            }
            let map_events = map_data.events[Laurus.Text2Frame.EventID].pages[pageID].list;
            if (Laurus.Text2Frame.IsOverwrite) {
              map_events = [];
            }
            map_events.pop();
            map_events = map_events.concat(event_command_list);
            map_data.events[Laurus.Text2Frame.EventID].pages[pageID].list = map_events;
            writeData(Laurus.Text2Frame.MapPath, map_data);
            addMessage(
              "Success / 書き出し成功！\n======> MapID: " + Laurus.Text2Frame.MapID + " -> EventID: " + Laurus.Text2Frame.EventID + " -> PageID: " + Laurus.Text2Frame.PageID
            );
            break;
          }
          case "IMPORT_MESSAGE_TO_CE":
          case "メッセージをコモンイベントにインポート": {
            const ce_data = readJsonData(Laurus.Text2Frame.CommonEventPath);
            if (ce_data.length - 1 < Laurus.Text2Frame.CommonEventID) {
              throw new Error(
                "Common Event not found. / コモンイベントが見つかりません。: " + Laurus.Text2Frame.CommonEventID
              );
            }
            let ce_events = ce_data[Laurus.Text2Frame.CommonEventID].list;
            if (Laurus.Text2Frame.IsOverwrite) {
              ce_events = [];
            }
            ce_events.pop();
            ce_data[Laurus.Text2Frame.CommonEventID].list = ce_events.concat(event_command_list);
            writeData(Laurus.Text2Frame.CommonEventPath, ce_data);
            addMessage("Success / 書き出し成功！\n=====> Common EventID :" + Laurus.Text2Frame.CommonEventID);
            break;
          }
        }
        addMessage("\n");
        addMessage(
          "Please restart RPG Maker MV(Editor) WITHOUT save. \n**セーブせずに**プロジェクトファイルを開き直してください"
        );
        console.log(
          "Please restart RPG Maker MV(Editor) WITHOUT save. \n**セーブせずに**プロジェクトファイルを開き直してください"
        );
      };
      Game_Interpreter.prototype.pluginCommandText2Frame("LIBRARY_EXPORT", [0]);
    })();
    {
      module2.exports = Laurus.Text2Frame.export;
    }
    if (typeof commonjsRequire !== "undefined" && false) {
      const program = requireCommander();
      program.version("0.0.1").usage("[options]").option("-m, --mode <map|common|test>", "output mode", /^(map|common|test)$/i).option("-t, --text_path <name>", "text file path").option("-o, --output_path <name>", "output file path").option("-e, --event_id <name>", "event file id").option("-p, --page_id <name>", "page id").option("-c, --common_event_id <name>", "common event id").option("-w, --overwrite <true/false>", "overwrite mode", "false").option("-v, --verbose", "debug mode", false).parse();
      const options = program.opts();
      Laurus.Text2Frame.IsDebug = options.verbose;
      Laurus.Text2Frame.TextPath = options.text_path;
      Laurus.Text2Frame.IsOverwrite = options.overwrite === "true";
      if (options.mode === "map") {
        Laurus.Text2Frame.MapPath = options.output_path;
        Laurus.Text2Frame.EventID = options.event_id;
        Laurus.Text2Frame.PageID = options.page_id ? options.page_id : "1";
        Game_Interpreter.prototype.pluginCommandText2Frame("COMMAND_LINE", ["IMPORT_MESSAGE_TO_EVENT"]);
      } else if (options.mode === "common") {
        Laurus.Text2Frame.CommonEventPath = options.output_path;
        Laurus.Text2Frame.CommonEventID = options.common_event_id;
        Game_Interpreter.prototype.pluginCommandText2Frame("COMMAND_LINE", ["IMPORT_MESSAGE_TO_CE"]);
      } else if (options.mode === "test") {
        const folder_name = "test";
        const file_name = "basic.txt";
        const map_id = "1";
        const event_id = "1";
        const page_id = "1";
        const overwrite = "true";
        Game_Interpreter.prototype.pluginCommandText2Frame("IMPORT_MESSAGE_TO_EVENT", [
          folder_name,
          file_name,
          map_id,
          event_id,
          page_id,
          overwrite
        ]);
      } else {
        console.log("===== Manual =====");
        console.log(`
    NAME
       Text2Frame - Simple compiler to convert text to event command.
    SYNOPSIS
        node Text2Frame.js
        node Text2Frame.js --verbose --mode map --text_path <text file path> --output_path <output file path> --event_id <event id> --page_id <page id> --overwrite <true|false>
        node Text2Frame.js --verbose --mode common --text_path <text file path> --common_event_id <common event id> --overwrite <true|false>
        node Text2Frame.js --verbose --mode test
    DESCRIPTION
        node Text2Frame.js
          テストモードです。test/basic.txtを読み込み、data/Map001.jsonに出力します。
        node Text2Frame.js --verbose --mode map --text_path <text file path> --output_path <output file path> --event_id <event id> --page_id <page id> --overwrite <true|false>
          マップへのイベント出力モードです。
          読み込むファイル、出力マップ、上書きの有無を引数で指定します。
          test/basic.txt を読み込み data/Map001.json に上書きするコマンド例は以下です。

          例1：$ node Text2Frame.js --mode map --text_path test/basic.txt --output_path data/Map001.json --event_id 1 --page_id 1 --overwrite true
          例2：$ node Text2Frame.js -m map -t test/basic.txt -o data/Map001.json -e 1 -p 1 -w true

        node Text2Frame.js --verbose --mode common --text_path <text file path> --common_event_id <common event id> --overwrite <true|false>
          コモンイベントへのイベント出力モードです。
          読み込むファイル、出力コモンイベント、上書きの有無を引数で指定します。
          test/basic.txt を読み込み data/CommonEvents.json に上書きするコマンド例は以下です。

          例1：$ node Text2Frame.js --mode common --text_path test/basic.txt --output_path data/CommonEvents.json --common_event_id 1 --overwrite true
          例2：$ node Text2Frame.js -m common -t test/basic.txt -o data/CommonEvents.json -c 1 -w true
    `);
      }
    }
  })(Text2Frame$1);
  var Text2FrameExports = Text2Frame$1.exports;
  var Text2Frame = /* @__PURE__ */ getDefaultExportFromCjs(Text2FrameExports);
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
  const convert = Text2Frame.convert;
  exports2.convert = convert;
  exports2.events = events;
  exports2.parse = parse;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});