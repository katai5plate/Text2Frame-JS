/**
 * JS で書かれたイベントコマンドを Text2Frame の文法で書かれた文字列に変換する
 * @param arr イベントコマンド関数リスト
 * @returns {string}
 */
export const parse = (...arr: string[]) => arr.join("\n");
