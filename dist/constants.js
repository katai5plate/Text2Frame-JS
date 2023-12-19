"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCATION = exports.SHOP_ITEM = exports.BATTLE_TROOP = exports.WEATHER = exports.COLOR_TONE = exports.EASING = exports.PICTURE_ORIGIN = exports.BALLOON = exports.BLEND_MODE = exports.CHARACTER_FREQ = exports.CHARACTER_SPEED = exports.VEHICLE = exports.FADE = exports.DIRECTION_CAR = exports.DIRECTION_TURN_METHOD = exports.DIRECTION_METHOD = exports.DIRECTION_ROUTE8 = exports.DIRECTION_RETAIN = exports.DIRECTION = exports.ACTION_TARGET = exports.ENEMY_MEMBER = exports.EQUIP_STATE = exports.ACTER_PARAMETER = exports.ACTOR_MEMBER = exports.TIMER_MODE = exports.CHARACTER = exports.EVENT = exports.VARIABLE_OPERATOR = exports.ITEM_TYPE = exports.CHOICES_CANCEL = exports.CHOICES_INIT = exports.WINDOW_POSITION_VERTICAL = exports.WINDOW_POSITION_HORIZONTAL = exports.WINDOW_BACKGROUND = void 0;
exports.WINDOW_BACKGROUND = {
    WINDOW: "Window",
    DIM: "Dim",
    TRANSPARENT: "Transparent",
};
exports.WINDOW_POSITION_HORIZONTAL = {
    LEFT: "Left",
    MIDDLE: "Middle",
    RIGHT: "Right",
};
exports.WINDOW_POSITION_VERTICAL = {
    TOP: "Top",
    MIDDLE: "Middle",
    BOTTOM: "Bottom",
};
exports.CHOICES_INIT = {
    NONE: "None",
};
exports.CHOICES_CANCEL = {
    BRANCH: "Branch",
    DISALLOW: "Disallow",
};
exports.ITEM_TYPE = {
    REGULAR: "Regular Item",
    KEY: "Key Item",
    HIDDEN_A: "Hidden Item A",
    HIDDEN_B: "Hidden Item B",
};
exports.VARIABLE_OPERATOR = {
    SET: "Set",
    ADD: "Add",
    SUB: "Sub",
    MUL: "Mul",
    DIV: "Div",
    MOD: "Mod",
};
exports.EVENT = {
    THIS_EVENT: "ThisEvent",
};
exports.CHARACTER = {
    PLAYER: "Player",
    ...exports.EVENT,
};
exports.TIMER_MODE = {
    START: "Start",
    END: "End",
};
exports.ACTOR_MEMBER = {
    ALL: "Entire Party",
};
exports.ACTER_PARAMETER = {
    MAX_HP: "MaxHP",
    MAX_MP: "MaxMP",
    ATTACK: "Attack",
    DEFENSE: "Defense",
    M_ATTACK: "M.Attack",
    M_DEFENSE: "M.Defense",
    AGILITY: "Agility",
    LUCK: "Luck",
};
exports.EQUIP_STATE = {
    NONE: "None",
};
exports.ENEMY_MEMBER = {
    ENTIRE_TROOP: "Entire Troop",
};
exports.ACTION_TARGET = {
    LAST_TARGET: "Last Target",
    RANDOM: "Random",
};
exports.DIRECTION = {
    DOWN: "Down",
    LEFT: "Left",
    RIGHT: "Right",
    UP: "Up",
};
exports.DIRECTION_RETAIN = {
    RETAIN: "Retain",
    ...exports.DIRECTION,
};
exports.DIRECTION_ROUTE8 = {
    ...exports.DIRECTION,
    DOWN_LEFT: "LowerLeft",
    DOWN_RIGHT: "LowerRight",
    UP_LEFT: "UpperLeft",
    UP_RIGHT: "UpperRight",
};
exports.DIRECTION_METHOD = {
    RANDOM: "AtRandom",
    TOWARD_PLAYER: "TowardPlayer",
    AWAY_PLAYER: "AwayFromPlayer",
};
exports.DIRECTION_TURN_METHOD = {
    LEFT_90: "90Left",
    RIGHT_90: "90Right",
    RANDOM_90: "90RightorLeft",
    TURN_180: "180",
};
exports.DIRECTION_CAR = {
    FRONT: "Forward",
    BACK: "Backward",
};
exports.FADE = {
    BLACK: "Black",
    WHITE: "White",
    NONE: "None",
};
exports.VEHICLE = {
    BOAT: "Boat",
    SHIP: "Ship",
    AIR_SHIP: "AirShip",
};
exports.CHARACTER_SPEED = {
    X8_SLOW: "x8 Slower",
    X4_SLOW: "x4 Slower",
    X2_SLOW: "x2 Slower",
    NORMAL: "Normal",
    X2_FAST: "x2 Faster",
    X4_FAST: "x4 Faster",
};
exports.CHARACTER_FREQ = {
    LOWEST: "Lowest",
    LOW: "Lower",
    NORMAL: "Normal",
    HIGH: "Higher",
    HIGHEST: "Highest",
};
exports.BLEND_MODE = {
    NORMAL: "Normal",
    ADD: "Additive",
    MUL: "Multiply",
    SCREEN: "Screen",
};
exports.BALLOON = {
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
exports.PICTURE_ORIGIN = {
    CORNER: "Upper Left",
    CENTER: "Center",
};
exports.EASING = {
    LINEAR: "Linear",
    IN: "Ease-in",
    OUT: "Ease-out",
    IN_OUT: "Ease-in-out",
};
exports.COLOR_TONE = {
    NORMAL: "Normal",
    DARK: "Dark",
    SEPIA: "Sepia",
    SUNSET: "Sunset",
    NIGHT: "Night",
};
exports.WEATHER = {
    NONE: "None",
    RAIN: "Rain",
    STORM: "Storm",
    SNOW: "Snow",
};
exports.BATTLE_TROOP = {
    RANDOM: "Random",
};
exports.SHOP_ITEM = {
    ITEM: "Item",
    WEAPON: "Weapon",
    ARMOR: "Armor",
};
exports.LOCATION = {
    TERRAIN_TAG: "Terrain Tag",
    EVENT_ID: "Event ID",
    LAYER_1: "Layer 1",
    REGION_ID: "Region ID",
};
