const Fn = (...e) => e.join(`
`), Q = {
  WINDOW: "Window",
  DIM: "Dim",
  TRANSPARENT: "Transparent"
}, J = {
  LEFT: "Left",
  MIDDLE: "Middle",
  RIGHT: "Right"
}, ee = {
  NONE: "None",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
}, te = {
  BRANCH: "Branch",
  DISALLOW: "Disallow",
  CASE_1: "1",
  CASE_2: "2",
  CASE_3: "3",
  CASE_4: "4",
  CASE_5: "5",
  CASE_6: "6"
}, ne = {
  REGULAR: "Regular Item",
  KEY: "Key Item",
  HIDDEN_A: "Hidden Item A",
  HIDDEN_B: "Hidden Item B"
}, oe = {
  SET: "Set",
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  MOD: "Mod"
}, y = {
  THIS_EVENT: "ThisEvent"
}, T = {
  PLAYER: "Player",
  ...y
}, N = {
  START: "Start",
  END: "End"
}, ae = {
  ALL: "Entire Party"
}, re = {
  MAX_HP: "MaxHP",
  MAX_MP: "MaxMP",
  ATTACK: "Attack",
  DEFENSE: "Defense",
  M_ATTACK: "M.Attack",
  M_DEFENSE: "M.Defense",
  AGILITY: "Agility",
  LUCK: "Luck"
}, L = {
  ENTIRE_TROOP: "Entire Troop"
}, ce = {
  LAST_TARGET: "Last Target",
  RANDOM: "Random"
}, d = {
  DOWN: "Down",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Up"
}, w = {
  RETAIN: "Retain",
  ...d
}, se = {
  ...d,
  DOWN_LEFT: "LowerLeft",
  DOWN_RIGHT: "LowerRight",
  UP_LEFT: "UpperLeft",
  UP_RIGHT: "UpperRight"
}, $ = {
  RANDOM: "AtRandom",
  TOWARD_PLAYER: "TowardPlayer",
  AWAY_PLAYER: "AwayFromPlayer"
}, me = {
  LEFT_90: "90Left",
  RIGHT_90: "90Right",
  RANDOM_90: "90RightorLeft",
  TURN_180: "180"
}, ie = {
  FRONT: "Forward",
  BACK: "Backward"
}, le = {
  BLACK: "Black",
  WHITE: "White",
  NONE: "None"
}, M = {
  BOAT: "Boat",
  SHIP: "Ship",
  AIR_SHIP: "AirShip"
}, B = {
  X8_SLOW: "x8 Slower",
  X4_SLOW: "x4 Slower",
  X2_SLOW: "x2 Slower",
  NORMAL: "Normal",
  X2_FAST: "x2 Faster",
  X4_FAST: "x4 Faster"
}, ge = {
  LOWEST: "Lowest",
  LOW: "Lower",
  NORMAL: "Normal",
  HIGH: "Higher",
  HIGHEST: "Highest"
}, x = {
  NORMAL: "Normal",
  ADD: "Additive",
  MUL: "Multiply",
  SCREEN: "Screen"
}, Ee = {
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
}, Se = {
  CORNER: "Upper Left",
  CENTER: "Center"
}, ue = {
  LINEAR: "Linear",
  IN: "Ease-in",
  OUT: "Ease-out",
  IN_OUT: "Ease-in-out"
}, he = {
  NORMAL: "Normal",
  DARK: "Dark",
  SEPIA: "Sepia",
  SUNSET: "Sunset",
  NIGHT: "Night"
}, pe = {
  NONE: "None",
  RAIN: "Rain",
  STORM: "Storm",
  SNOW: "Snow"
}, Ce = {
  RANDOM: "Random"
}, Ae = {
  ITEM: "Item",
  WEAPON: "Weapon",
  ARMOR: "Armor"
}, Te = {
  TERRAIN_TAG: "Terrain Tag",
  EVENT_ID: "Event ID",
  LAYER_1: "Layer 1",
  REGION_ID: "Region ID"
}, H = (e, t) => t.join(e ?? ", "), l = (e, t) => t.filter((o) => o !== void 0).join(e ?? ", "), a = (e, t, o) => {
  const n = H(null, t ?? []);
  return l(`
`, [
    n !== "" ? `<${e}: ${n}>` : `<${e}>`,
    ...o ? [o, `</${e}>`] : []
  ]);
}, u = (e, t) => {
  const o = () => new Error("サポートされていない型です");
  if (typeof e == "number" && t.number)
    return t.number(e, o);
  if (typeof e == "string" && t.string)
    return t.string(e, o);
  if (typeof e == "object") {
    if (t.object)
      return t.object(e, o);
    if ("variableId" in e && t.variableId)
      return t.variableId(e, o);
    if ("switchId" in e && t.switchId)
      return t.switchId(e, o);
    if ("from" in e && "to" in e && t.fromTo)
      return t.fromTo(e, o);
    if ("id" in e && "x" in e && "y" in e && t.mapPosition)
      return t.mapPosition(e, o);
    if ("name" in e && "volume" in e && "pitch" in e && "pan" in e && t.sound)
      return t.sound(e, o);
    if ("r" in e && "g" in e && "b" in e && t.color)
      return t.color(e, o);
  }
  throw o();
}, g = (e) => {
  if (e % 1 !== 0)
    throw new Error("値は整数である必要があります。");
  return e;
}, i = (e, t) => {
  if (g(e), !(t.from <= e && e <= t.to))
    throw new Error(
      `値は ${t.from} ～ ${t.to} の間の値である必要があります。`
    );
  return e;
}, c = (e) => i(e, { from: 1, to: 1 / 0 }), S = (e) => i(e, { from: 1, to: 8 }), m = (e, t) => t[e], de = (e) => `SW[${e.switchId}]`, I = (e) => `V[${e.variableId}]`, W = (e) => `${e.from}-${e.to}`, F = (e) => `ColorTone[${e.r}][${e.g}][${e.b}]${e != null && e.x ? `[${e.x}]` : ""}`, _ = (e) => H(null, [e.name ?? "None", e.volume, e.pitch, e.pan]), D = (e, t) => `${t === "DIRECT" ? "Direct" : "WithVariables"}[${e.id}][${e.x}][${e.y}]`, j = (e) => typeof e == "object" ? `ColorTone[${e.r}][${e.g}][${e.b}][${e.x}]` : m(e, he), h = (e) => u(e, {
  variableId: I,
  number: (t) => t
}), Ie = (e) => (t) => typeof t == "string" ? m(t, e) : c(t), P = (e, t) => (o) => u(o, {
  string: (n) => m(n, e),
  variableId: I,
  number: (n) => t ? i(n, t) : c(n)
}), A = P(ae), fe = (e, t, o, n) => a("ChangeHp", [
  A(e),
  t,
  h(o),
  n
]), f = (e) => (o, n, s) => a(e, [A(o), n, h(s)]), Oe = f("ChangeMp"), ye = f("ChangeTp"), Me = f("ChangeState"), _e = f("ChangeSkill"), De = (e) => a("RecoverAll", [A(e)]), v = (e) => (o, n, s, r) => a(e, [
  A(o),
  n,
  h(s),
  r
]), Pe = v("ChangeExp"), Re = v("ChangeLevel"), Ge = (e, t, o, n) => a("ChangeParameter", [
  A(e),
  m(t, re),
  o,
  h(n)
]), Ne = (e, t, o) => a("ChangeEquipment", [
  c(e),
  c(t),
  o && c(o)
]), $e = (e, t) => a("ChangeName", [c(e), t]), be = (e, t, o) => a("ChangeClass", [c(e), c(t), o]), Le = (e, t) => a("ChangeNickname", [c(e), t]), we = (e, t) => a("ChangeProfile", [c(e), t[0], t[1]]), Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeClass: be,
  ChangeEquipment: Ne,
  ChangeExp: Pe,
  ChangeHp: fe,
  ChangeLevel: Re,
  ChangeMp: Oe,
  ChangeName: $e,
  ChangeNickname: Le,
  ChangeParameter: Ge,
  ChangeProfile: we,
  ChangeSkill: _e,
  ChangeState: Me,
  ChangeTp: ye,
  RecoverAll: De
}, Symbol.toStringTag, { value: "Module" })), xe = P(L), R = P(
  L,
  { from: 1, to: 8 }
), He = (e, t, o, n) => a("ChangeEnemyHp", [
  R(e),
  t,
  h(o),
  n
]), G = (e) => (o, n, s) => a(e, [
  R(o),
  n,
  h(s)
]), We = G("ChangeEnemyMp"), Fe = G("ChangeEnemyTp"), je = G("ChangeEnemyState"), ve = (e) => a("EnemyRecoverAll", [R(e)]), ke = (e) => a("EnemyAppear", [xe(e)]), k = (e) => (o, n) => a(e, [S(o), c(n)]), Ue = k("EnemyTransform"), Ve = k("ShowBattleAnimation"), ze = (e, t, o, n) => a("ForceAction", [
  u(t, {
    number: (s) => e === "ACTOR" ? `Actor[${c(s)}]` : S(s)
  }),
  c(o),
  u(n, {
    string: (s) => m(s, ce),
    number: (s) => `Index ${i(s, { from: 1, to: 8 })}`
  })
]), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeEnemyHp: He,
  ChangeEnemyMp: We,
  ChangeEnemyState: je,
  ChangeEnemyTp: Fe,
  EnemyAppear: ke,
  EnemyRecoverAll: ve,
  EnemyTransform: Ue,
  ForceAction: ze,
  ShowBattleAnimation: Ve
}, Symbol.toStringTag, { value: "Module" })), U = (e, t) => u(e, {
  string: (o) => m(o, t),
  number: c
}), V = (e) => (o) => a(e, [o]), Ye = V("ChangeTransparency"), Ke = V("ChangePlayerFollowers"), Ze = () => a("GatherFollowers"), qe = (e, t, o) => a("ShowAnimation", [
  U(e, T),
  c(t),
  o
]), Qe = (e, t, o) => a("ShowBalloonIcon", [
  U(e, T),
  m(t, Ee),
  o
]), Je = () => a("EraseEvent"), et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangePlayerFollowers: Ke,
  ChangeTransparency: Ye,
  EraseEvent: Je,
  GatherFollowers: Ze,
  ShowAnimation: qe,
  ShowBalloonIcon: Qe
}, Symbol.toStringTag, { value: "Module" })), tt = (e, t, o) => l(`
`, [
  a("If", ["Script", e]),
  t,
  ...o ? l(`
`, [a("Else"), o]) : [],
  a("End")
]), nt = (e) => l(`
`, [a("Loop"), e, a("RepeatAbove")]), ot = () => a("BreakLoop"), at = () => a("ExitEventProcessing"), rt = (e) => a("CommonEvent", [c(e)]), ct = (e) => a("Label", [e]), st = (e) => a("JumpToLabel", [e]), mt = (e) => a("Comment", void 0, e), it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Check: tt,
  Comment: mt,
  CommonEvent: rt,
  ExitEventProcessing: at,
  Goto: st,
  Label: ct,
  Loop: nt,
  LoopBreak: ot
}, Symbol.toStringTag, { value: "Module" })), lt = (e) => a("Wait", [g(e)]), gt = (e) => {
  const t = e.toString().match(/\{([\s\S]*)\}/);
  return a("Script", void 0, t ? t[1].trim() : "");
}, Et = (e) => a("PluginCommand", [e]), St = (e, t, o, n) => a("PluginCommandMZ", [
  e,
  t,
  o,
  ...n.map((s) => `${s.name}[${s.value}]`)
]), ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PluginCommandMV: Et,
  PluginCommandMZ: St,
  Script: gt,
  Wait: lt
}, Symbol.toStringTag, { value: "Module" })), ht = (e) => a("ChangeMapNameDisplay", [e]), pt = (e) => a("ChangeTileset", [c(e)]), Ct = (e) => a("ChangeBattleBackGround", [e[0] ?? "None", e[1] ?? "None"]), At = (e, t) => a("ChangeParallax", [
  e,
  t.x && `LoopHorizontally[${i(t.x, { from: -32, to: 32 })}]`,
  t.y && `LoopVertically[${i(t.y, { from: -32, to: 32 })}]`
]), Tt = (e, t, o) => a("GetLocationInfo", [
  c(e),
  m(t, Te),
  u(o, {
    object: (n, s) => {
      const r = n;
      if ("x" in r && "y" in r) {
        if (typeof r.x == "number")
          return `Direct[${r.x}][${r.y}]`;
        if (r.x.variableId)
          return `WithVariables[${r.x}][${r.y}]`;
      }
      throw s();
    }
  })
]), dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeBattleBackGround: Ct,
  ChangeMapNameDisplay: ht,
  ChangeParallax: At,
  ChangeTileset: pt,
  GetLocationInfo: Tt
}, Symbol.toStringTag, { value: "Module" })), p = (e) => (o) => a(e, [_(o)]), It = p("PlayBGM"), ft = p("PlayBGS"), Ot = p("PlayME"), yt = p("PlaySE"), Mt = p("ChangeBattleBGM"), _t = p("ChangeVictoryMe"), Dt = p("ChangeDefeatMe"), z = (e) => (o) => a(e, [g(o)]), Pt = z("FadeoutBGM"), Rt = z("FadeoutBGS"), Gt = () => a("SaveBGM"), Nt = () => a("StopBGM"), $t = () => a("ReplayBGM"), bt = () => a("StopBGS"), Lt = () => a("StopME"), wt = () => a("StopSE"), Bt = (e) => a("PlayMovie", [e]), xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeBattleBGM: Mt,
  ChangeDefeatMe: Dt,
  ChangeVictoryMe: _t,
  FadeoutBGM: Pt,
  FadeoutBGS: Rt,
  PlayBGM: It,
  PlayBGS: ft,
  PlayME: Ot,
  PlayMovie: Bt,
  PlaySE: yt,
  ReplayBGM: $t,
  SaveBGM: Gt,
  StopBGM: Nt,
  StopBGS: bt,
  StopME: Lt,
  StopSE: wt
}, Symbol.toStringTag, { value: "Module" })), b = (e, t) => typeof e == "number" ? i(e, { from: 1, to: 6 }) : m(e, t), Ht = ({
  face: e,
  position: t,
  background: o,
  name: n
}) => l(`
`, [
  o && a("Background", [o]),
  t && a("WindowPosition", [t]),
  e && a("Face", [
    `${e.name}(${i(e.index, { from: 0, to: 15 })})`
  ]),
  n && a("Name", [n])
]), Wt = (e, {
  background: t,
  position: o,
  init: n,
  cancel: s
}) => {
  if (e.filter((r) => r.name === null).length >= 2)
    throw new Error("キャンセル扱いとなる name=null は複数設定できません");
  return l(`
`, [
    a("ShowChoices", [
      t && m(t, Q),
      o && m(o, J),
      n && b(n, ee),
      s && b(s, te)
    ]),
    l(
      `
`,
      e.map(
        ({ name: r, then: E }) => l(`
`, [
          l(`
`, [
            r ? a("When", [r]) : a("WhenCancel"),
            l(`
`, [E])
          ])
        ])
      )
    ),
    a("End")
  ]);
}, Ft = (e, t) => a("InputNumber", [c(e), i(t, { from: 1, to: 8 })]), jt = (e, t) => a("SelectItem", [c(e), m(t, ne)]), vt = (e, { speed: t = 2, noSkip: o }) => a("ScrollingText", [t, o], e), kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumber: Ft,
  ScrollingText: vt,
  SelectItem: jt,
  ShowChoices: Wt,
  Window: Ht
}, Symbol.toStringTag, { value: "Module" })), X = (e, t) => typeof e == "number" ? c(e) : m(e, t), Ut = (e, t, o, n) => a("TransferPlayer", [
  D(t, e),
  m(o, w),
  m(n, le)
]), Vt = (e, t, o) => a("SetVehicleLocation", [
  m(t, M),
  D(o, e)
]), zt = (e, t, o, n) => a("SetEventLocation", [
  X(t, y),
  e === "EXCHANGE" ? u(o, {
    string: (s) => `Exchange[${m(s, y)}]`,
    number: (s) => `Exchange[${c(s)}]`
  }) : u(o, {
    mapPosition: (s) => D(s, e)
  }),
  m(n, w)
]), Xt = (e, t, o, n) => a("SetVehicleLocation", [
  m(e, d),
  g(t),
  m(o, B),
  n
]), Yt = (e, t, { repeat: o = !1, skip: n = !1, wait: s = !0 } = {}) => l(`
`, [
  a("SetMovementRoute", [X(e, T), o, n, s]),
  ...t({
    jump: (r, E) => ({ name: "Jump", args: [g(r), g(E)] }),
    wait: (r) => ({ name: "McWait", args: [g(r)] }),
    changeSwitch: (r, E) => ({
      name: `Switch${E ? "On" : "Off"}`,
      args: [c(r)]
    }),
    changeSpeed: (r) => ({
      name: "ChangeSpeed",
      args: [m(r, B)]
    }),
    changeFreq: (r) => ({
      name: "ChangeFrequency",
      args: [m(r, ge)]
    }),
    changeImage: (r, E) => ({
      name: "ChangeImage",
      args: [r, i(E, { from: 0, to: 7 })]
    }),
    changeOpacity: (r) => ({
      name: "ChangeOpacity",
      args: [i(r, { from: 0, to: 255 })]
    }),
    changeBlendMode: (r) => ({ name: "ChangeBlendMode", args: [m(r, x)] }),
    playSe: (r) => ({
      name: "McPlaySe",
      args: [_(r)]
    }),
    script: (r) => ({ name: "McScript", args: [r] }),
    //
    move: (r) => {
      const E = { ...se, ...$ };
      return { name: `Move${m(r, E)}`, args: [] };
    },
    turn: (r) => {
      const E = {
        ...d,
        ...$,
        ...me
      };
      return { name: `Turn${m(r, E)}`, args: [] };
    },
    step: (r) => ({ name: `OneStep${m(r, ie)}`, args: [] }),
    //
    changeWalkAnimation: (r) => ({ name: `WalkingAnimation${r ? "On" : "Off"}`, args: [] }),
    changeStepAnimation: (r) => ({ name: `SteppingAnimation${r ? "On" : "Off"}`, args: [] }),
    changeDirectionFix: (r) => ({ name: `DirectionFix${r ? "On" : "Off"}`, args: [] }),
    changeNoClip: (r) => ({ name: `Through${r ? "On" : "Off"}`, args: [] }),
    changeTransparent: (r) => ({ name: `Transparent${r ? "On" : "Off"}`, args: [] })
  }).map(({ name: r, args: E }) => a(r, E))
]), Kt = () => a("GetOnOffVehicle"), Zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GetOnOffVehicle: Kt,
  ScrollMap: Xt,
  SetEventLocation: zt,
  SetMovementRoute: Yt,
  SetVehicleLocation: Vt,
  TransferPlayer: Ut
}, Symbol.toStringTag, { value: "Module" })), qt = (e, t) => a("ChangeGold", [e, h(t)]), Qt = (e, t, o) => a("ChangeItems", [c(e), t, h(o)]), Y = (e) => (o, n, s, r) => a(e, [c(o), n, h(s), r]), Jt = Y("ChangeWeapons"), en = Y("ChangeArmors"), tn = (e, t, o, n) => a("ChangeItems", [c(e), t, h(o), n]), nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeArmors: en,
  ChangeGold: qt,
  ChangeItems: Qt,
  ChangePartyMember: tn,
  ChangeWeapons: Jt
}, Symbol.toStringTag, { value: "Module" })), K = (e) => {
  const t = e.mode === "DIRECT" ? g : (o) => I({ variableId: o });
  return `Position[${m(e.origin, Se)}][${t(
    e.x
  )}][${t(e.y)}]`;
}, Z = (e) => `Scale[${g(e.width)}][${g(e.height)}]`, q = (e) => `Blend[${i(e.opacity, { from: 0, to: 255 })}][${m(
  e.mode,
  x
)}]`, on = (e) => `Duration[${g(e.time)}][${e.wait ? "Wait" : ""}]`, an = (e, t, {
  position: o,
  scale: n,
  blend: s
}) => a("ShowPicture", [
  i(e, { from: 1, to: 100 }),
  t,
  l(null, [
    o && K(o),
    n && Z(n),
    s && q(s)
  ])
]), rn = (e, {
  position: t,
  scale: o,
  blend: n,
  duration: s,
  easing: r
}) => a("MovePicture", [
  i(e, { from: 1, to: 100 }),
  l(null, [
    t && K(t),
    o && Z(o),
    n && q(n),
    s && on(s),
    r && m(r, ue)
  ])
]), cn = (e, t) => a("RotatePicture", [
  i(e, { from: 1, to: 100 }),
  i(t, { from: -90, to: 90 })
]), sn = (e, t, o) => a("TintPicture", [
  i(e, { from: 1, to: 100 }),
  l(null, [t && j(t), o])
]), mn = (e) => a("ErasePicture", [i(e, { from: 1, to: 100 })]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErasePicture: mn,
  MovePicture: rn,
  RotatePicture: cn,
  ShowPicture: an,
  TintPicture: sn
}, Symbol.toStringTag, { value: "Module" })), C = Ie(T), gn = (e, t) => a("Switch", [
  u(e, {
    switchId: de,
    fromTo: W
  }),
  t
]), En = (e, t) => t(
  {
    set: (n) => ({
      op: "SET",
      value: n
    }),
    add: (n) => ({
      op: "ADD",
      value: n
    }),
    sub: (n) => ({
      op: "SUB",
      value: n
    }),
    mul: (n) => ({
      op: "MUL",
      value: n
    }),
    div: (n) => ({
      op: "DIV",
      value: n
    }),
    mod: (n) => ({
      op: "MOD",
      value: n
    })
  },
  {
    variable: (n) => `V[${c(n)}]`,
    random: ({ from: n, to: s }) => `Random[${g(n)}][${g(s)}]`,
    script: (n) => `Script[${n}]`,
    game: {
      item: {
        itemCount: (n) => `GameData[Item][${c(n)}]`,
        weaponCount: (n) => `GameData[Weapon][${c(n)}]`,
        armorCount: (n) => `GameData[Armor][${c(n)}]`
      },
      actor: {
        level: (n) => `GameData[Actor][Level][${c(n)}]`,
        exp: (n) => `GameData[Actor][Exp][${c(n)}]`,
        HP: (n) => `GameData[Actor][HP][${c(n)}]`,
        MP: (n) => `GameData[Actor][MP][${c(n)}]`,
        maxHP: (n) => `GameData[Actor][MaxHp][${c(n)}]`,
        MaxMP: (n) => `GameData[Actor][MaxMP][${c(n)}]`,
        attack: (n) => `GameData[Actor][Attack][${c(n)}]`,
        defense: (n) => `GameData[Actor][Defense][${c(n)}]`,
        mAttack: (n) => `GameData[Actor][M.Attack][${c(n)}]`,
        mDefense: (n) => `GameData[Actor][M.Defense][${c(n)}]`,
        agility: (n) => `GameData[Actor][Agility][${c(n)}]`,
        luck: (n) => `GameData[Actor][Luck][${c(n)}]`,
        TP: (n) => `GameData[Actor][TP][${c(n)}]`
      },
      enemy: {
        HP: (n) => `GameData[Enemy][HP][${S(n)}]`,
        MP: (n) => `GameData[Enemy][MP][${S(n)}]`,
        maxHP: (n) => `GameData[Enemy][MaxHp][${S(n)}]`,
        MaxMP: (n) => `GameData[Enemy][MaxMP][${S(n)}]`,
        attack: (n) => `GameData[Enemy][Attack][${S(n)}]`,
        defense: (n) => `GameData[Enemy][Defense][${S(n)}]`,
        mAttack: (n) => `GameData[Enemy][M.Attack][${S(n)}]`,
        mDefense: (n) => `GameData[Enemy][M.Defense][${S(n)}]`,
        agility: (n) => `GameData[Enemy][Agility][${S(n)}]`,
        luck: (n) => `GameData[Enemy][Luck][${S(n)}]`,
        TP: (n) => `GameData[Enemy][TP][${S(n)}]`
      },
      character: {
        mapX: (n) => `GameData[Character][${C(
          n
        )}][MapX]`,
        mapY: (n) => `GameData[Character][${C(
          n
        )}][MapY]`,
        direction: (n) => `GameData[Character][${C(
          n
        )}][Direction]`,
        screenX: (n) => `GameData[Character][${C(
          n
        )}][ScreenX]`,
        screenY: (n) => `GameData[Character][${C(
          n
        )}][ScreenY]`
      },
      last: {
        usedSkillId: () => "GameData[Last][Used Skill ID]",
        usedItemId: () => "GameData[Last][Used Item ID]",
        actionActorId: () => "GameData[Last][Actor ID to Act]",
        actionEnemyIndex: () => "GameData[Last][Enemy Index to Act]",
        targetActorId: () => "GameData[Last][Target Actor ID]",
        targetEnemyIndex: () => "GameData[Last][Target Enemy Index]"
      },
      etc: {
        memberActorId: (n) => `GameData[Party][${c(n)}]`,
        memberCount: () => "GameData[PartyMembers]",
        gold: () => "GameData[Gold]",
        steps: () => "GameData[Steps]",
        playTime: () => "GameData[PlayTime]",
        timer: () => "GameData[Timer]",
        saveCount: () => "GameData[SaveCount]",
        battleCount: () => "GameData[BattleCount]",
        winCount: () => "GameData[WinCount]",
        escapeCount: () => "GameData[EscapeCount]"
      }
    }
  }
).map(
  ({ op: n, value: s }) => a(oe[n], [
    u(e, {
      fromTo: W,
      number: c
    }),
    s
  ])
).join(`
`), Sn = (e, t) => a("SelfSwitch", [e, t]), un = (e, t) => {
  if (typeof t == "string") {
    const [s, r, E] = t.match(/^(\d{1,}):(\d{1,})$/) ?? [];
    if (s)
      return a("Timer", [N[e], r, E]);
    throw new Error(
      "文字列でタイマー設定する場合は 00:00 形式で入力してください"
    );
  }
  const { min: o, sec: n } = t;
  return a("Timer", [N[e], o, n]);
}, hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelfSwitch: Sn,
  Switch: gn,
  Timer: un,
  Variable: En
}, Symbol.toStringTag, { value: "Module" })), pn = (e, {
  ifWin: t,
  ifEscape: o,
  ifLose: n
}) => l(`
`, [
  a("BattleProcessing", [
    u(e, {
      string: (s) => m(s, Ce),
      variableId: I,
      number: c
    })
  ]),
  t ? l(`
`, [a("IfWin"), t]) : void 0,
  o ? l(`
`, [a("IfEscape"), o]) : void 0,
  n ? l(`
`, [a("IfLose"), n]) : void 0,
  a("End")
]), Cn = (e, t) => l(`
`, [
  a("ShopProcessing", [t]),
  ...e.map(
    ({ type: o, id: n, price: s }) => a("Merchandise", [m(o, Ae), c(n), g(s)])
  )
]), An = (e, t) => a("NameInputProcessing", [c(e), i(t, { from: 1, to: 8 })]), Tn = () => a("OpenMenuScreen"), dn = () => a("OpenSaveScreen"), In = () => a("GameOver"), fn = () => a("ReturnToTitleScreen"), On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BattleProcessing: pn,
  GameOver: In,
  NameInputProcessing: An,
  OpenMenuScreen: Tn,
  OpenSaveScreen: dn,
  ReturnToTitleScreen: fn,
  ShopProcessing: Cn
}, Symbol.toStringTag, { value: "Module" })), yn = () => a("FadeOut"), Mn = () => a("FadeIn"), _n = (e, t) => a("TintScreen", [l(null, [e && j(e), t])]), Dn = (e, t, o) => a("FlashScreen", [F(e), t, o]), Pn = (e, t, o, n) => a("ShakeScreen", [g(e), g(t), g(o), n]), Rn = (e, t, o, n) => a("SetWeatherEffect", [
  m(e, pe),
  g(t),
  g(o),
  n
]), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FadeIn: Mn,
  FadeOut: yn,
  FlashScreen: Dn,
  SetWeatherEffect: Rn,
  ShakeScreen: Pn,
  TintScreen: _n
}, Symbol.toStringTag, { value: "Module" })), Nn = (e, t) => a("ChangeVehicleBgm", [m(e, M), _(t)]), O = (e) => (o) => a(e, [o]), $n = O("ChangeSaveAccess"), bn = O("ChangeMenuAccess"), Ln = O("ChangeEncounter"), wn = O("ChangeFormationAccess"), Bn = (e) => a("ChangeWindowColor", [F(e)]), xn = (e, t, o, n) => a("ChangeActorImages", [
  c(e),
  t.name,
  i(t.index, { from: 0, to: 15 }),
  o.name,
  i(o.index, { from: 0, to: 7 }),
  n
]), Hn = (e, t) => a("ChangeActorImages", [
  m(e, M),
  t.name,
  i(t.index, { from: 0, to: 7 })
]), Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChangeActorImages: xn,
  ChangeEncounter: Ln,
  ChangeFormationAccess: wn,
  ChangeMenuAccess: bn,
  ChangeSaveAccess: $n,
  ChangeVehicleBgm: Nn,
  ChangeVehicleImage: Hn,
  ChangeWindowColor: Bn
}, Symbol.toStringTag, { value: "Module" })), jn = {
  message: kt,
  progress: hn,
  flow: it,
  party: nn,
  actor: Be,
  movement: Zt,
  character: et,
  picture: ln,
  screen: Gn,
  media: xt,
  scene: On,
  system: Wn,
  map: dt,
  battle: Xe,
  interpreter: ut
};
export {
  jn as events,
  Fn as parse
};
