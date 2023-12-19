export const WINDOW_BACKGROUND = {
  WINDOW: "Window",
  DIM: "Dim",
  TRANSPARENT: "Transparent",
};
export const WINDOW_POSITION_HORIZONTAL = {
  LEFT: "Left",
  MIDDLE: "Middle",
  RIGHT: "Right",
};
export const WINDOW_POSITION_VERTICAL = {
  TOP: "Top",
  MIDDLE: "Middle",
  BOTTOM: "Bottom",
};

export const CHOICES_INIT = {
  NONE: "None",
};
export const CHOICES_CANCEL = {
  BRANCH: "Branch",
  DISALLOW: "Disallow",
};

export const ITEM_TYPE = {
  REGULAR: "Regular Item",
  KEY: "Key Item",
  HIDDEN_A: "Hidden Item A",
  HIDDEN_B: "Hidden Item B",
};

export const VARIABLE_OPERATOR = {
  SET: "Set",
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  MOD: "Mod",
};

export const EVENT = {
  THIS_EVENT: "ThisEvent",
};

export const CHARACTER = {
  PLAYER: "Player",
  ...EVENT,
};

export const TIMER_MODE = {
  START: "Start",
  END: "End",
};

export const ACTOR_MEMBER = {
  ALL: "Entire Party",
};

export const ACTER_PARAMETER = {
  MAX_HP: "MaxHP",
  MAX_MP: "MaxMP",
  ATTACK: "Attack",
  DEFENSE: "Defense",
  M_ATTACK: "M.Attack",
  M_DEFENSE: "M.Defense",
  AGILITY: "Agility",
  LUCK: "Luck",
};

export const EQUIP_STATE = {
  NONE: "None",
};

export const ENEMY_MEMBER = {
  ENTIRE_TROOP: "Entire Troop",
};

export const ACTION_TARGET = {
  LAST_TARGET: "Last Target",
  RANDOM: "Random",
};

export const DIRECTION = {
  DOWN: "Down",
  LEFT: "Left",
  RIGHT: "Right",
  UP: "Up",
};
export const DIRECTION_RETAIN = {
  RETAIN: "Retain",
  ...DIRECTION,
};
export const DIRECTION_ROUTE8 = {
  ...DIRECTION,
  DOWN_LEFT: "LowerLeft",
  DOWN_RIGHT: "LowerRight",
  UP_LEFT: "UpperLeft",
  UP_RIGHT: "UpperRight",
};
export const DIRECTION_METHOD = {
  RANDOM: "AtRandom",
  TOWARD_PLAYER: "TowardPlayer",
  AWAY_PLAYER: "AwayFromPlayer",
};
export const DIRECTION_TURN_METHOD = {
  LEFT_90: "90Left",
  RIGHT_90: "90Right",
  RANDOM_90: "90RightorLeft",
  TURN_180: "180",
};
export const DIRECTION_CAR = {
  FRONT: "Forward",
  BACK: "Backward",
};

export const FADE = {
  BLACK: "Black",
  WHITE: "White",
  NONE: "None",
};

export const VEHICLE = {
  BOAT: "Boat",
  SHIP: "Ship",
  AIR_SHIP: "AirShip",
};

export const CHARACTER_SPEED = {
  X8_SLOW: "x8 Slower",
  X4_SLOW: "x4 Slower",
  X2_SLOW: "x2 Slower",
  NORMAL: "Normal",
  X2_FAST: "x2 Faster",
  X4_FAST: "x4 Faster",
};

export const CHARACTER_FREQ = {
  LOWEST: "Lowest",
  LOW: "Lower",
  NORMAL: "Normal",
  HIGH: "Higher",
  HIGHEST: "Highest",
};
export const BLEND_MODE = {
  NORMAL: "Normal",
  ADD: "Additive",
  MUL: "Multiply",
  SCREEN: "Screen",
};
export const BALLOON = {
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
  USER_5: "user-defined5",
};

export const PICTURE_ORIGIN = {
  CORNER: "Upper Left",
  CENTER: "Center",
};

export const EASING = {
  LINEAR: "Linear",
  IN: "Ease-in",
  OUT: "Ease-out",
  IN_OUT: "Ease-in-out",
};

export const COLOR_TONE = {
  NORMAL: "Normal",
  DARK: "Dark",
  SEPIA: "Sepia",
  SUNSET: "Sunset",
  NIGHT: "Night",
};

export const WEATHER = {
  NONE: "None",
  RAIN: "Rain",
  STORM: "Storm",
  SNOW: "Snow",
};

export const BATTLE_TROOP = {
  RANDOM: "Random",
};

export const SHOP_ITEM = {
  ITEM: "Item",
  WEAPON: "Weapon",
  ARMOR: "Armor",
};

export const LOCATION = {
  TERRAIN_TAG: "Terrain Tag",
  EVENT_ID: "Event ID",
  LAYER_1: "Layer 1",
  REGION_ID: "Region ID",
};
