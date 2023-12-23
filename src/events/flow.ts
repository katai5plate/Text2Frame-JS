import { argId, joinSkip, tag } from "../validate";

/**
 * 条件分岐（スクリプト）
 * @param condition 条件（JS）
 * @param then 真のとき
 * @param otherwise 偽のとき
 * @returns {string}
 */
export const Check = (condition: string, then: string, otherwise?: string) =>
  joinSkip("\n", [
    tag("If", ["Script", condition]),
    then,
    ...(otherwise ? joinSkip("\n", [tag("Else"), otherwise]) : []),
    tag("End"),
  ]);

export const Loop = (content: string) =>
  joinSkip("\n", [tag("Loop"), content, tag("RepeatAbove")]);
export const LoopBreak = () => tag("BreakLoop");

export const ExitEventProcessing = () => tag("ExitEventProcessing");

export const CommonEvent = (id: number) => tag("CommonEvent", [argId(id)]);

export const Label = (name: string) => tag("Label", [name]);
export const Goto = (name: string) => tag("JumpToLabel", [name]);

export const Comment = (text: string) => tag("Comment", undefined, text);
