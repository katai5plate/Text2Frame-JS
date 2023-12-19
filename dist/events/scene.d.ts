import { BATTLE_TROOP, SHOP_ITEM } from "../constants";
import { C, VariableId } from "../type";
export declare const BattleProcessing: C<{
    id: keyof typeof BATTLE_TROOP | VariableId | number;
    ifWin?: string[];
    ifEscape?: string[];
    ifLose?: string[];
}>;
export declare const ShopProcessing: C<{
    items: {
        type: keyof typeof SHOP_ITEM;
        id: number;
        price: number;
    }[];
    purchaseOnly?: boolean;
}>;
export declare const NameInputProcessing: C<{
    id: number;
    length: number;
}>;
export declare const OpenMenuScreen: C;
export declare const OpenSaveScreen: C;
export declare const GameOver: C;
export declare const ReturnToTitleScreen: C;
//# sourceMappingURL=scene.d.ts.map