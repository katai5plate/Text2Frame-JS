/// <reference types="Text2Frame-MV" />

import TF from 'Text2Frame-MV/Text2Frame.mjs';

declare const $dataActors: any[];

declare const $dataAnimations: any[];

declare const $dataArmors: any[];

declare const $dataClasses: any[];

declare const $dataCommonEvents: any[];

declare const $dataEnemies: any[];

declare const $dataItems: any[];

declare const $dataMap: any[];

declare const $dataMapInfos: any[];

declare const $dataSkills: any[];

declare const $dataStates: any[];

declare const $dataSystem: any[];

declare const $dataTilesets: any[];

declare const $dataTroops: any[];

declare const $dataWeapons: any[];

declare const $gameActors: any;

declare const $gameMap: any;

declare const $gameMessage: any;

declare const $gameParty: any;

declare const $gamePlayer: any;

declare const $gameScreen: any;

declare const $gameSelfSwitches: any;

declare const $gameSwitches: any;

declare const $gameSystem: any;

declare const $gameTemp: any;

declare const $gameTimer: any;

declare const $gameTroop: any;

declare const $gameVariables: any;

declare const $plugins: {
    name: string;
    status: boolean;
    description: string;
    parameters: any;
}[];

declare const $testEvent: any;

declare const ACTER_PARAMETER: {
    MAX_HP: string;
    MAX_MP: string;
    ATTACK: string;
    DEFENSE: string;
    M_ATTACK: string;
    M_DEFENSE: string;
    AGILITY: string;
    LUCK: string;
};

declare const ACTION_TARGET: {
    LAST_TARGET: string;
    RANDOM: string;
};

declare namespace actor {
    export {
        ChangeHp,
        ChangeMp,
        ChangeTp,
        ChangeState,
        ChangeSkill,
        RecoverAll,
        ChangeExp,
        ChangeLevel,
        ChangeParameter,
        ChangeEquipment,
        ChangeName,
        ChangeClass,
        ChangeNickname,
        ChangeProfile
    }
}

declare const ACTOR_MEMBER: {
    ALL: string;
};

declare const AudioManager: any;

declare const BALLOON: {
    EXCLAMATION: string;
    QUESTION: string;
    MUSIC: string;
    HEART: string;
    ANGER: string;
    SWEAT: string;
    FLUSTRATION: string;
    SILENCE: string;
    LIGHT: string;
    ZZZ: string;
    USER_1: string;
    USER_2: string;
    USER_3: string;
    USER_4: string;
    USER_5: string;
};

declare namespace battle {
    export {
        ChangeEnemyHp,
        ChangeEnemyMp,
        ChangeEnemyTp,
        ChangeEnemyState,
        EnemyRecoverAll,
        EnemyAppear,
        EnemyTransform,
        ShowBattleAnimation,
        ForceAction
    }
}

declare const BATTLE_TROOP: {
    RANDOM: string;
};

declare const BattleManager: any;

declare const BattleProcessing: (id: keyof typeof BATTLE_TROOP | VariableId | number, { ifWin, ifEscape, ifLose, }: {
    ifWin?: string | undefined;
    ifEscape?: string | undefined;
    ifLose?: string | undefined;
}) => string;

declare const Bitmap: any;

declare const BLEND_MODE: {
    NORMAL: string;
    ADD: string;
    MUL: string;
    SCREEN: string;
};

declare const ChangeActorImages: (id: number, face: {
    name: string;
    index: number;
}, character: {
    name: string;
    index: number;
}, battler: string) => string;

declare const ChangeArmors: (id: number, op: CreaseOperator, value: number | VariableId, includeEquipment?: boolean) => string;

declare const ChangeBattleBackGround: (images: [string?, string?]) => string;

declare const ChangeBattleBGM: (sound: Sound) => string;

declare const ChangeClass: (id: number, classId: number, saveLevelAndExp?: boolean) => string;

declare const ChangeDefeatMe: (sound: Sound) => string;

declare const ChangeEncounter: (allow: boolean) => string;

declare const ChangeEnemyHp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowKnockout?: boolean) => string;

declare const ChangeEnemyMp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeEnemyState: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeEnemyTp: (index: keyof typeof ENEMY_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeEquipment: (id: number, equipType: number, equipId?: number) => string;

declare const ChangeExp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowLevelUp?: boolean) => string;

declare const ChangeFormationAccess: (allow: boolean) => string;

declare const ChangeGold: (op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeHp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowKnockout?: boolean) => string;

declare const ChangeItems: (id: number, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeLevel: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId, allowLevelUp?: boolean) => string;

declare const ChangeMapNameDisplay: (allow: boolean) => string;

declare const ChangeMenuAccess: (allow: boolean) => string;

declare const ChangeMp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeName: (id: number, name: string) => string;

declare const ChangeNickname: (id: number, name: string) => string;

declare const ChangeParallax: (name: string, scroll: {
    x?: number;
    y?: number;
}) => string;

declare const ChangeParameter: (id: keyof typeof ACTOR_MEMBER | number | VariableId, parameter: keyof typeof ACTER_PARAMETER, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangePartyMember: (id: number, op: CreaseOperator, value: number | VariableId, initialize?: boolean) => string;

declare const ChangePlayerFollowers: (active: boolean) => string;

declare const ChangeProfile: (id: number, profile: [string, string]) => string;

declare const ChangeSaveAccess: (allow: boolean) => string;

declare const ChangeSkill: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeState: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeTileset: (id: number) => string;

declare const ChangeTp: (id: keyof typeof ACTOR_MEMBER | number | VariableId, op: CreaseOperator, value: number | VariableId) => string;

declare const ChangeTransparency: (active: boolean) => string;

declare const ChangeVehicleBgm: (vehicle: keyof typeof VEHICLE, sound: Sound) => string;

declare const ChangeVehicleImage: (vehicle: keyof typeof VEHICLE, image: {
    name: string;
    index: number;
}) => string;

declare const ChangeVictoryMe: (sound: Sound) => string;

declare const ChangeWeapons: (id: number, op: CreaseOperator, value: number | VariableId, includeEquipment?: boolean) => string;

declare const ChangeWindowColor: (color: Color3) => string;

declare const CHARACTER: {
    THIS_EVENT: string;
    PLAYER: string;
};

declare namespace character {
    export {
        ChangeTransparency,
        ChangePlayerFollowers,
        GatherFollowers,
        ShowAnimation,
        ShowBalloonIcon,
        EraseEvent
    }
}

declare const CHARACTER_FREQ: {
    LOWEST: string;
    LOW: string;
    NORMAL: string;
    HIGH: string;
    HIGHEST: string;
};

declare const CHARACTER_SPEED: {
    X8_SLOW: string;
    X4_SLOW: string;
    X2_SLOW: string;
    NORMAL: string;
    X2_FAST: string;
    X4_FAST: string;
};

declare const Check: (condition: string, then: string, otherwise?: string) => string;

declare interface Color3 {
    r: number;
    g: number;
    b: number;
}

declare type Color4 = Color3 & {
    x: number;
};

declare const COLOR_TONE: {
    NORMAL: string;
    DARK: string;
    SEPIA: string;
    SUNSET: string;
    NIGHT: string;
};

declare const ColorFilter: any;

declare const ColorManager: any;

declare const Comment_2: (text: string) => string;

declare const CommonEvent: (id: number) => string;

declare const ConfigManager: any;

/**
 * Text2Frame の文法で書かれた文字列を RPG Maker MV/MZ のイベントコマンドリストに変換する。
 * @param text Text2Frame の文法で書かれた文字列
 * @return {{ code: number; parameters: any[]; indent: number }[]}
 */
export declare const convert: typeof TF.convert;

declare type CreaseOperator = "+" | "-";

declare interface Data {
    variable: (id: number) => string;
    random: (range: {
        from: number;
        to: number;
    }) => string;
    script: (js: string) => string;
    game: {
        item: {
            itemCount: (id: number) => string;
            weaponCount: (id: number) => string;
            armorCount: (id: number) => string;
        };
        actor: {
            level: (id: number) => string;
            exp: (id: number) => string;
            HP: (id: number) => string;
            MP: (id: number) => string;
            maxHP: (id: number) => string;
            MaxMP: (id: number) => string;
            attack: (id: number) => string;
            defense: (id: number) => string;
            mAttack: (id: number) => string;
            mDefense: (id: number) => string;
            agility: (id: number) => string;
            luck: (id: number) => string;
            TP: (id: number) => string;
        };
        enemy: {
            HP: (id: number) => string;
            MP: (id: number) => string;
            maxHP: (id: number) => string;
            MaxMP: (id: number) => string;
            attack: (id: number) => string;
            defense: (id: number) => string;
            mAttack: (id: number) => string;
            mDefense: (id: number) => string;
            agility: (id: number) => string;
            luck: (id: number) => string;
            TP: (id: number) => string;
        };
        character: {
            mapX: (characterId: keyof typeof CHARACTER | number) => string;
            mapY: (characterId: keyof typeof CHARACTER | number) => string;
            direction: (characterId: keyof typeof CHARACTER | number) => string;
            screenX: (characterId: keyof typeof CHARACTER | number) => string;
            screenY: (characterId: keyof typeof CHARACTER | number) => string;
        };
        last: {
            usedSkillId: () => string;
            usedItemId: () => string;
            actionActorId: () => string;
            actionEnemyIndex: () => string;
            targetActorId: () => string;
            targetEnemyIndex: () => string;
        };
        etc: {
            memberActorId: (index: number) => string;
            memberCount: () => string;
            gold: () => string;
            steps: () => string;
            playTime: () => string;
            timer: () => string;
            saveCount: () => string;
            battleCount: () => string;
            winCount: () => string;
            escapeCount: () => string;
        };
    };
}

declare const DataManager: any;

declare const DIRECTION: {
    DOWN: string;
    LEFT: string;
    RIGHT: string;
    UP: string;
};

declare const DIRECTION_CAR: {
    FRONT: string;
    BACK: string;
};

declare const DIRECTION_METHOD: {
    RANDOM: string;
    TOWARD_PLAYER: string;
    AWAY_PLAYER: string;
};

declare const DIRECTION_RETAIN: {
    DOWN: string;
    LEFT: string;
    RIGHT: string;
    UP: string;
    RETAIN: string;
};

declare const DIRECTION_ROUTE8: {
    DOWN_LEFT: string;
    DOWN_RIGHT: string;
    UP_LEFT: string;
    UP_RIGHT: string;
    DOWN: string;
    LEFT: string;
    RIGHT: string;
    UP: string;
};

declare const DIRECTION_TURN_METHOD: {
    LEFT_90: string;
    RIGHT_90: string;
    RANDOM_90: string;
    TURN_180: string;
};

declare type DirectOrVariables = "DIRECT" | "VARIABLES";

declare const EffectManager: any;

declare const ENEMY_MEMBER: {
    ENTIRE_TROOP: string;
};

declare const EnemyAppear: (index: keyof typeof ENEMY_MEMBER | number) => string;

declare const EnemyRecoverAll: (index: keyof typeof ENEMY_MEMBER | number | VariableId) => string;

declare const EnemyTransform: (index: number, id: number) => string;

declare const EraseEvent: () => string;

declare const ErasePicture: (id: number) => string;

declare const EVENT: {
    THIS_EVENT: string;
};

export declare const events: {
    message: typeof message;
    progress: typeof progress;
    flow: typeof flow;
    party: typeof party;
    actor: typeof actor;
    movement: typeof movement;
    character: typeof character;
    picture: typeof picture;
    screen: typeof screen_2;
    media: typeof media;
    scene: typeof scene;
    system: typeof system;
    map: typeof map;
    battle: typeof battle;
    interpreter: typeof interpreter;
};

declare const ExitEventProcessing: () => string;

declare const FADE: {
    BLACK: string;
    WHITE: string;
    NONE: string;
};

declare const FadeIn: () => string;

declare const FadeOut: () => string;

declare const FadeoutBGM: (time: number) => string;

declare const FadeoutBGS: (time: number) => string;

declare const FlashScreen: (color: Color4, time: number, wait?: boolean) => string;

declare namespace flow {
    export {
        Check,
        Loop,
        LoopBreak,
        ExitEventProcessing,
        CommonEvent,
        Label,
        Goto,
        Comment_2 as Comment
    }
}

declare const FontManager: any;

declare const ForceAction: (mode: "ENEMY" | "ACTOR", index: number, id: number, target: keyof typeof ACTION_TARGET | number) => string;

declare interface FromTo {
    from: number;
    to: number;
}

declare const Game_Action: any;

declare const Game_ActionResult: any;

declare const Game_Actor: any;

declare const Game_Actors: any;

declare const Game_Battler: any;

declare const Game_BattlerBase: any;

declare const Game_Character: any;

declare const Game_CharacterBase: any;

declare const Game_CommonEvent: any;

declare const Game_Enemy: any;

declare const Game_Event: any;

declare const Game_Follower: any;

declare const Game_Followers: any;

declare const Game_Interpreter: any;

declare const Game_Item: any;

declare const Game_Map: any;

declare const Game_Message: any;

declare const Game_Party: any;

declare const Game_Picture: any;

declare const Game_Player: any;

declare const Game_Screen: any;

declare const Game_SelfSwitches: any;

declare const Game_Switches: any;

declare const Game_System: any;

declare const Game_Temp: any;

declare const Game_Timer: any;

declare const Game_Troop: any;

declare const Game_Unit: any;

declare const Game_Variables: any;

declare const Game_Vehicle: any;

declare const GameOver: () => string;

declare const GatherFollowers: () => string;

declare const GetLocationInfo: (variableId: number, layer: keyof typeof LOCATION, position: PositionType | keyof typeof CHARACTER | number) => string;

declare const GetOnOffVehicle: () => string;

declare const Goto: (name: string) => string;

declare const Graphics: any;

declare const ImageManager: any;

declare const Input: any;

declare const InputNumber: (variableId: number, digit: number) => string;

declare namespace interpreter {
    export {
        Wait,
        Script,
        PluginCommandMV,
        PluginCommandMZ
    }
}

declare const ITEM_TYPE: {
    REGULAR: string;
    KEY: string;
    HIDDEN_A: string;
    HIDDEN_B: string;
};

declare const JsonEx: any;

declare const Label: (name: string) => string;

declare const LOCATION: {
    TERRAIN_TAG: string;
    EVENT_ID: string;
    LAYER_1: string;
    REGION_ID: string;
};

declare const Loop: (content: string) => string;

declare const LoopBreak: () => string;

declare namespace map {
    export {
        ChangeMapNameDisplay,
        ChangeTileset,
        ChangeBattleBackGround,
        ChangeParallax,
        GetLocationInfo
    }
}

declare interface MapPosition {
    id: number;
    x: number;
    y: number;
}

declare namespace media {
    export {
        PlayBGM,
        PlayBGS,
        PlayME,
        PlaySE,
        ChangeBattleBGM,
        ChangeVictoryMe,
        ChangeDefeatMe,
        FadeoutBGM,
        FadeoutBGS,
        SaveBGM,
        StopBGM,
        ReplayBGM,
        StopBGS,
        StopME,
        StopSE,
        PlayMovie
    }
}

declare namespace message {
    export {
        Window_2 as Window,
        ShowChoices,
        InputNumber,
        SelectItem,
        ScrollingText
    }
}

declare namespace movement {
    export {
        TransferPlayer,
        SetVehicleLocation,
        SetEventLocation,
        ScrollMap,
        SetMovementRoute,
        GetOnOffVehicle
    }
}

declare const MovePicture: (id: number, { position, scale, blend, duration, easing, }: {
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    } | undefined;
    scale?: {
        width: number;
        height: number;
    } | undefined;
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    } | undefined;
    duration?: {
        time: number;
        wait: boolean;
    } | undefined;
    easing?: "LINEAR" | "IN" | "OUT" | "IN_OUT" | undefined;
}) => string;

declare const NameInputProcessing: (id: number, length: number) => string;

declare const OpenMenuScreen: () => string;

declare const OpenSaveScreen: () => string;

declare interface Operations {
    set: (value: number | string) => {
        op: string;
        value: number | string;
    };
    add: (value: number | string) => {
        op: string;
        value: number | string;
    };
    sub: (value: number | string) => {
        op: string;
        value: number | string;
    };
    mul: (value: number | string) => {
        op: string;
        value: number | string;
    };
    div: (value: number | string) => {
        op: string;
        value: number | string;
    };
    mod: (value: number | string) => {
        op: string;
        value: number | string;
    };
}

/**
 * JS で書かれたイベントコマンドを Text2Frame の文法で書かれた文字列に変換する
 * @param arr イベントコマンド関数リスト
 * @returns {string}
 */
export declare const parse: (...arr: string[]) => string;

declare namespace party {
    export {
        ChangeGold,
        ChangeItems,
        ChangeWeapons,
        ChangeArmors,
        ChangePartyMember
    }
}

declare namespace picture {
    export {
        ShowPicture,
        MovePicture,
        RotatePicture,
        TintPicture,
        ErasePicture
    }
}

declare const PICTURE_ORIGIN: {
    CORNER: string;
    CENTER: string;
};

declare const PIXI: any;

declare const PlayBGM: (sound: Sound) => string;

declare const PlayBGS: (sound: Sound) => string;

declare const PlayME: (sound: Sound) => string;

declare const PlayMovie: (name: string) => string;

declare const PlaySE: (sound: Sound) => string;

declare const PluginCommandMV: (command: string) => string;

declare const PluginCommandMZ: (name: string, method: string, command: string, args: {
    name: string;
    value: any;
}[]) => string;

declare const PluginManager: any;

declare const Point: any;

declare type PositionType = {
    x: number;
    y: number;
} | {
    x: VariableId;
    y: VariableId;
};

declare namespace progress {
    export {
        Switch,
        Variable,
        SelfSwitch,
        Timer
    }
}

declare const RecoverAll: (id: keyof typeof ACTOR_MEMBER | number | VariableId) => string;

declare const Rectangle: any;

declare const ReplayBGM: () => string;

declare const ReturnToTitleScreen: () => string;

declare namespace rmmzGlobal {
    export {
        PIXI,
        Utils,
        Graphics,
        Point,
        Rectangle,
        Bitmap,
        Sprite,
        Tilemap,
        TilingSprite,
        ScreenSprite,
        Window_3 as Window,
        WindowLayer,
        Weather,
        ColorFilter,
        Stage,
        WebAudio,
        Video,
        Input,
        TouchInput,
        JsonEx,
        DataManager,
        ConfigManager,
        StorageManager_2 as StorageManager,
        FontManager,
        ImageManager,
        EffectManager,
        AudioManager,
        SoundManager,
        TextManager,
        ColorManager,
        SceneManager,
        BattleManager,
        PluginManager,
        Game_Temp,
        Game_System,
        Game_Timer,
        Game_Message,
        Game_Switches,
        Game_Variables,
        Game_SelfSwitches,
        Game_Screen,
        Game_Picture,
        Game_Item,
        Game_Action,
        Game_ActionResult,
        Game_BattlerBase,
        Game_Battler,
        Game_Actor,
        Game_Enemy,
        Game_Actors,
        Game_Unit,
        Game_Party,
        Game_Troop,
        Game_Map,
        Game_CommonEvent,
        Game_CharacterBase,
        Game_Character,
        Game_Player,
        Game_Follower,
        Game_Followers,
        Game_Vehicle,
        Game_Event,
        Game_Interpreter,
        Scene_Base,
        Scene_Boot,
        Scene_Title,
        Scene_Message,
        Scene_Map,
        Scene_MenuBase,
        Scene_Menu,
        Scene_ItemBase,
        Scene_Item,
        Scene_Skill,
        Scene_Equip,
        Scene_Status,
        Scene_Options,
        Scene_File,
        Scene_Save,
        Scene_Load,
        Scene_GameEnd,
        Scene_Shop,
        Scene_Name,
        Scene_Debug,
        Scene_Battle,
        Scene_Gameover,
        Sprite_Clickable,
        Sprite_Button,
        Sprite_Character,
        Sprite_Battler,
        Sprite_Actor,
        Sprite_Enemy,
        Sprite_Animation,
        Sprite_AnimationMV,
        Sprite_Battleback,
        Sprite_Damage,
        Sprite_Gauge,
        Sprite_Name,
        Sprite_StateIcon,
        Sprite_StateOverlay,
        Sprite_Weapon,
        Sprite_Balloon,
        Sprite_Picture,
        Sprite_Timer,
        Sprite_Destination,
        Spriteset_Base,
        Spriteset_Map,
        Spriteset_Battle,
        Window_Base,
        Window_Scrollable,
        Window_Selectable,
        Window_Command,
        Window_HorzCommand,
        Window_Help,
        Window_Gold,
        Window_StatusBase,
        Window_MenuCommand,
        Window_MenuStatus,
        Window_MenuActor,
        Window_ItemCategory,
        Window_ItemList,
        Window_SkillType,
        Window_SkillStatus,
        Window_SkillList,
        Window_EquipStatus,
        Window_EquipCommand,
        Window_EquipSlot,
        Window_EquipItem,
        Window_Status,
        Window_StatusParams,
        Window_StatusEquip,
        Window_Options,
        Window_SavefileList,
        Window_ShopCommand,
        Window_ShopBuy,
        Window_ShopSell,
        Window_ShopNumber,
        Window_ShopStatus,
        Window_NameEdit,
        Window_NameInput,
        Window_NameBox,
        Window_ChoiceList,
        Window_NumberInput,
        Window_EventItem,
        Window_Message,
        Window_ScrollText,
        Window_MapName,
        Window_BattleLog,
        Window_PartyCommand,
        Window_ActorCommand,
        Window_BattleStatus,
        Window_BattleActor,
        Window_BattleEnemy,
        Window_BattleSkill,
        Window_BattleItem,
        Window_TitleCommand,
        Window_GameEnd,
        Window_DebugRange,
        Window_DebugEdit,
        $dataActors,
        $dataClasses,
        $dataSkills,
        $dataItems,
        $dataWeapons,
        $dataArmors,
        $dataEnemies,
        $dataTroops,
        $dataStates,
        $dataAnimations,
        $dataTilesets,
        $dataCommonEvents,
        $dataSystem,
        $dataMapInfos,
        $dataMap,
        $gameTemp,
        $gameSystem,
        $gameScreen,
        $gameTimer,
        $gameMessage,
        $gameSwitches,
        $gameVariables,
        $gameSelfSwitches,
        $gameActors,
        $gameParty,
        $gameTroop,
        $gameMap,
        $gamePlayer,
        $testEvent,
        $plugins
    }
}

declare const RotatePicture: (id: number, speed: number) => string;

declare interface Route {
    jump: (x: number, y: number) => RouteCode;
    wait: (v: number) => RouteCode;
    changeSwitch: (switchId: number, to: boolean) => RouteCode;
    changeSpeed: (speed: keyof typeof CHARACTER_SPEED) => RouteCode;
    changeFreq: (freq: keyof typeof CHARACTER_FREQ) => RouteCode;
    changeImage: (name: string, index: number) => RouteCode;
    changeOpacity: (v: number) => RouteCode;
    changeBlendMode: (v: keyof typeof BLEND_MODE) => RouteCode;
    playSe: (sound: Sound) => RouteCode;
    script: (code: string) => RouteCode;
    move: (dir: keyof typeof DIRECTION_ROUTE8 | keyof typeof DIRECTION_METHOD) => RouteCode;
    turn: (dir: keyof typeof DIRECTION | keyof typeof DIRECTION_METHOD | keyof typeof DIRECTION_TURN_METHOD) => RouteCode;
    step: (dir: keyof typeof DIRECTION_CAR) => RouteCode;
    changeWalkAnimation: (active: boolean) => RouteCode;
    changeStepAnimation: (active: boolean) => RouteCode;
    changeDirectionFix: (active: boolean) => RouteCode;
    changeNoClip: (active: boolean) => RouteCode;
    changeTransparent: (active: boolean) => RouteCode;
}

declare type RouteCode = {
    name: string;
    args: (number | string)[];
};

declare const SaveBGM: () => string;

declare namespace scene {
    export {
        BattleProcessing,
        ShopProcessing,
        NameInputProcessing,
        OpenMenuScreen,
        OpenSaveScreen,
        GameOver,
        ReturnToTitleScreen
    }
}

declare const Scene_Base: any;

declare const Scene_Battle: any;

declare const Scene_Boot: any;

declare const Scene_Debug: any;

declare const Scene_Equip: any;

declare const Scene_File: any;

declare const Scene_GameEnd: any;

declare const Scene_Gameover: any;

declare const Scene_Item: any;

declare const Scene_ItemBase: any;

declare const Scene_Load: any;

declare const Scene_Map: any;

declare const Scene_Menu: any;

declare const Scene_MenuBase: any;

declare const Scene_Message: any;

declare const Scene_Name: any;

declare const Scene_Options: any;

declare const Scene_Save: any;

declare const Scene_Shop: any;

declare const Scene_Skill: any;

declare const Scene_Status: any;

declare const Scene_Title: any;

declare const SceneManager: any;

declare namespace screen_2 {
    export {
        FadeOut,
        FadeIn,
        TintScreen,
        FlashScreen,
        ShakeScreen,
        SetWeatherEffect
    }
}

declare const ScreenSprite: any;

declare const Script: (code: (globalThis: typeof rmmzGlobal) => unknown) => string;

declare const ScrollingText: (text: string, { speed, noSkip }: {
    speed?: number | undefined;
    noSkip?: boolean | undefined;
}) => string;

declare const ScrollMap: (direction: keyof typeof DIRECTION, step: number, speed: keyof typeof CHARACTER_SPEED, wait?: boolean) => string;

declare const SelectItem: (variableId: number, itemType: keyof typeof ITEM_TYPE) => string;

declare const SelfSwitch: (id: SelfSwitchName, toBe: boolean) => string;

declare type SelfSwitchName = "A" | "B" | "C" | "D";

declare const SetEventLocation: (mode: DirectOrVariables | "EXCHANGE", id: keyof typeof EVENT | number, position: MapPosition | keyof typeof EVENT | number, direction: keyof typeof DIRECTION_RETAIN) => string;

declare const SetMovementRoute: (id: keyof typeof CHARACTER | number, routes: (route: Route) => RouteCode[], { repeat, skip, wait }?: {
    repeat?: boolean | undefined;
    skip?: boolean | undefined;
    wait?: boolean | undefined;
}) => string;

declare const SetVehicleLocation: (mode: DirectOrVariables, vehicle: keyof typeof VEHICLE, position: MapPosition) => string;

declare const SetWeatherEffect: (weather: keyof typeof WEATHER, velocity: number, time: number, wait?: boolean) => string;

declare const ShakeScreen: (velocity: number, speed: number, time: number, wait?: boolean) => string;

declare const SHOP_ITEM: {
    ITEM: string;
    WEAPON: string;
    ARMOR: string;
};

declare const ShopProcessing: (items: {
    type: keyof typeof SHOP_ITEM;
    id: number;
    price: number;
}[], purchaseOnly?: boolean) => string;

declare const ShowAnimation: (id: keyof typeof CHARACTER | number, animationId: number, wait?: boolean) => string;

declare const ShowBalloonIcon: (id: keyof typeof CHARACTER | number, balloon: keyof typeof BALLOON, wait?: boolean) => string;

declare const ShowBattleAnimation: (index: number, id: number) => string;

declare const ShowChoices: (cases: {
    name: string | null;
    then: string;
}[], { background, position, init, cancel, }: {
    background?: "WINDOW" | "DIM" | "TRANSPARENT" | undefined;
    position?: "MIDDLE" | "LEFT" | "RIGHT" | undefined;
    init?: number | "NONE" | "CASE_1" | "CASE_2" | "CASE_3" | "CASE_4" | "CASE_5" | "CASE_6" | undefined;
    cancel?: number | "CASE_1" | "CASE_2" | "CASE_3" | "CASE_4" | "CASE_5" | "CASE_6" | "BRANCH" | "DISALLOW" | undefined;
}) => string;

declare const ShowPicture: (id: number, name: string, { position, scale, blend, }: {
    position?: {
        mode: DirectOrVariables;
        origin: keyof typeof PICTURE_ORIGIN;
        x: number;
        y: number;
    } | undefined;
    scale?: {
        width: number;
        height: number;
    } | undefined;
    blend?: {
        mode: keyof typeof BLEND_MODE;
        opacity: number;
    } | undefined;
}) => string;

declare interface Sound {
    name?: string;
    volume: number;
    pitch: number;
    pan: number;
}

declare const SoundManager: any;

declare const Sprite: any;

declare const Sprite_Actor: any;

declare const Sprite_Animation: any;

declare const Sprite_AnimationMV: any;

declare const Sprite_Balloon: any;

declare const Sprite_Battleback: any;

declare const Sprite_Battler: any;

declare const Sprite_Button: any;

declare const Sprite_Character: any;

declare const Sprite_Clickable: any;

declare const Sprite_Damage: any;

declare const Sprite_Destination: any;

declare const Sprite_Enemy: any;

declare const Sprite_Gauge: any;

declare const Sprite_Name: any;

declare const Sprite_Picture: any;

declare const Sprite_StateIcon: any;

declare const Sprite_StateOverlay: any;

declare const Sprite_Timer: any;

declare const Sprite_Weapon: any;

declare const Spriteset_Base: any;

declare const Spriteset_Battle: any;

declare const Spriteset_Map: any;

declare const Stage: any;

declare const StopBGM: () => string;

declare const StopBGS: () => string;

declare const StopME: () => string;

declare const StopSE: () => string;

declare const StorageManager_2: any;

declare const Switch: (id: SwitchId | FromTo, toBe: boolean) => string;

declare interface SwitchId {
    switchId: number;
}

declare namespace system {
    export {
        ChangeVehicleBgm,
        ChangeSaveAccess,
        ChangeMenuAccess,
        ChangeEncounter,
        ChangeFormationAccess,
        ChangeWindowColor,
        ChangeActorImages,
        ChangeVehicleImage
    }
}

declare const TextManager: any;

declare const Tilemap: any;

declare const TilingSprite: any;

declare const Timer: (mode: keyof typeof TIMER_MODE, time: {
    min: number;
    sec: number;
} | `${number}:${number}`) => string;

declare const TIMER_MODE: {
    START: string;
    END: string;
};

declare const TintPicture: (id: number, color?: keyof typeof COLOR_TONE | Color4, time?: number) => string;

declare const TintScreen: (color?: keyof typeof COLOR_TONE | Color4, time?: number) => string;

declare const TouchInput: any;

declare const TransferPlayer: (mode: DirectOrVariables, position: MapPosition, direction: keyof typeof DIRECTION_RETAIN, fade: keyof typeof FADE) => string;

declare const Utils: any;

declare const Variable: (id: number | FromTo, calc: (op: Operations, data: Data) => {
    op: string;
    value: number | string;
}[]) => string;

declare interface VariableId {
    variableId: number;
}

declare const VEHICLE: {
    BOAT: string;
    SHIP: string;
    AIR_SHIP: string;
};

declare const Video: any;

declare const Wait: (time: number) => string;

declare const WEATHER: {
    NONE: string;
    RAIN: string;
    STORM: string;
    SNOW: string;
};

declare const Weather: any;

declare const WebAudio: any;

declare const Window_2: ({ face, position, background, name, }: {
    background?: "WINDOW" | "DIM" | "TRANSPARENT" | undefined;
    position?: "TOP" | "MIDDLE" | "BOTTOM" | undefined;
    face?: {
        name: string;
        index: number;
    } | undefined;
    name?: string | undefined;
}) => string;

declare const Window_3: any;

declare const Window_ActorCommand: any;

declare const Window_Base: any;

declare const Window_BattleActor: any;

declare const Window_BattleEnemy: any;

declare const Window_BattleItem: any;

declare const Window_BattleLog: any;

declare const Window_BattleSkill: any;

declare const Window_BattleStatus: any;

declare const Window_ChoiceList: any;

declare const Window_Command: any;

declare const Window_DebugEdit: any;

declare const Window_DebugRange: any;

declare const Window_EquipCommand: any;

declare const Window_EquipItem: any;

declare const Window_EquipSlot: any;

declare const Window_EquipStatus: any;

declare const Window_EventItem: any;

declare const Window_GameEnd: any;

declare const Window_Gold: any;

declare const Window_Help: any;

declare const Window_HorzCommand: any;

declare const Window_ItemCategory: any;

declare const Window_ItemList: any;

declare const Window_MapName: any;

declare const Window_MenuActor: any;

declare const Window_MenuCommand: any;

declare const Window_MenuStatus: any;

declare const Window_Message: any;

declare const Window_NameBox: any;

declare const Window_NameEdit: any;

declare const Window_NameInput: any;

declare const Window_NumberInput: any;

declare const Window_Options: any;

declare const Window_PartyCommand: any;

declare const Window_SavefileList: any;

declare const Window_Scrollable: any;

declare const Window_ScrollText: any;

declare const Window_Selectable: any;

declare const Window_ShopBuy: any;

declare const Window_ShopCommand: any;

declare const Window_ShopNumber: any;

declare const Window_ShopSell: any;

declare const Window_ShopStatus: any;

declare const Window_SkillList: any;

declare const Window_SkillStatus: any;

declare const Window_SkillType: any;

declare const Window_Status: any;

declare const Window_StatusBase: any;

declare const Window_StatusEquip: any;

declare const Window_StatusParams: any;

declare const Window_TitleCommand: any;

declare const WindowLayer: any;

export { }
