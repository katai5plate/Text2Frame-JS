"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.JumpToLabel = exports.Goto = exports.Label = exports.CommonEvent = exports.ExitEventProcessing = exports.BreakLoop = exports.LoopBreak = exports.Loop = exports.Check = void 0;
const validate_1 = require("../validate");
const Check = ({ condition, then, otherwise }) => (0, validate_1.joinSkip)("\n", [
    (0, validate_1.tag)("If", ["Script", condition]),
    then,
    ...(otherwise ? [(0, validate_1.tag)("Else"), otherwise] : []),
    (0, validate_1.tag)("End"),
]);
exports.Check = Check;
const Loop = ({ children }) => (0, validate_1.joinSkip)("\n", [(0, validate_1.tag)("Loop"), children, (0, validate_1.tag)("RepeatAbove")]);
exports.Loop = Loop;
const LoopBreak = () => (0, validate_1.tag)("BreakLoop");
exports.LoopBreak = LoopBreak;
exports.BreakLoop = exports.LoopBreak;
const ExitEventProcessing = () => (0, validate_1.tag)("ExitEventProcessing");
exports.ExitEventProcessing = ExitEventProcessing;
const CommonEvent = ({ id }) => (0, validate_1.tag)("CommonEvent", [(0, validate_1.argId)(id)]);
exports.CommonEvent = CommonEvent;
const Label = ({ name }) => (0, validate_1.tag)("Label", [name]);
exports.Label = Label;
const Goto = ({ name }) => (0, validate_1.tag)("JumpToLabel", [name]);
exports.Goto = Goto;
exports.JumpToLabel = exports.Goto;
const Comment = ({ text }) => (0, validate_1.tag)("Comment", undefined, text);
exports.Comment = Comment;
