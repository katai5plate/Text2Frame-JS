"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLocationInfo = exports.ChangeParallax = exports.ChangeBattleBackGround = exports.ChangeTileset = exports.ChangeMapNameDisplay = void 0;
const constants_1 = require("../constants");
const validate_1 = require("../validate");
const ChangeMapNameDisplay = ({ allow }) => (0, validate_1.tag)("ChangeMapNameDisplay", [allow]);
exports.ChangeMapNameDisplay = ChangeMapNameDisplay;
const ChangeTileset = ({ id }) => (0, validate_1.tag)("ChangeTileset", [(0, validate_1.argId)(id)]);
exports.ChangeTileset = ChangeTileset;
const ChangeBattleBackGround = ({ images, }) => (0, validate_1.tag)("ChangeBattleBackGround", [images[0] ?? "None", images[1] ?? "None"]);
exports.ChangeBattleBackGround = ChangeBattleBackGround;
const ChangeParallax = ({ name, scroll }) => (0, validate_1.tag)("ChangeParallax", [
    name,
    scroll.x &&
        `LoopHorizontally[${(0, validate_1.argRange)(scroll.x, { from: -32, to: 32 })}]`,
    scroll.y && `LoopVertically[${(0, validate_1.argRange)(scroll.y, { from: -32, to: 32 })}]`,
]);
exports.ChangeParallax = ChangeParallax;
const GetLocationInfo = ({ id, layer, position }) => (0, validate_1.tag)("GetLocationInfo", [
    (0, validate_1.argVariableId)(id),
    (0, validate_1.argPreset)(layer, constants_1.LOCATION),
    (0, validate_1.typeCase)(position, {
        object: (value, e) => {
            const v = value;
            if ("x" in v && "y" in v) {
                if (typeof v.x === "number")
                    return `Direct[${v.x}][${v.y}]`;
                if (v.x.variableId)
                    return `WithVariables[${v.x}][${v.y}]`;
            }
            throw e();
        },
    }),
]);
exports.GetLocationInfo = GetLocationInfo;
