import { BATTLE_TROOP, SHOP_ITEM } from "../constants";
import { VariableId } from "../type";
export declare const BattleProcessing: (id: keyof typeof BATTLE_TROOP | VariableId | number, { ifWin, ifEscape, ifLose, }: {
    ifWin?: string | undefined;
    ifEscape?: string | undefined;
    ifLose?: string | undefined;
}) => string;
export declare const ShopProcessing: (items: {
    type: keyof typeof SHOP_ITEM;
    id: number;
    price: number;
}[], purchaseOnly?: boolean) => string;
export declare const NameInputProcessing: (id: number, length: number) => string;
export declare const OpenMenuScreen: () => string;
export declare const OpenSaveScreen: () => string;
export declare const GameOver: () => string;
export declare const ReturnToTitleScreen: () => string;
//# sourceMappingURL=scene.d.ts.map