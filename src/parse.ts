/**
 * JS で書かれたイベントコマンドを Text2Frame の文法で書かれた文字列に変換する
 *
 * イベントコマンド関数を使用するときは必ずこの関数を通すこと
 *
 * ```js
 * ev(
 *   cmd.message.Window({ name: "アレックス" }),
 *   "きよ",
 *   cmd.flow.Check(
 *     "$gameSwitches.value(10)",
 *     ev(
 *       cmd.message.Window({ name: "ブライアン" }),
 *       "しこのよる",
 *     )
 *   )
 * )
 * ```
 *
 * @param arr イベントコマンド関数リスト
 * @returns {string}
 */
export const ev = (...arr: string[]) => arr.join("\n");
