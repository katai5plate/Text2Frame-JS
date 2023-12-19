import { BALLOON, CHARACTER } from "../constants";
import { C } from "../type";
export declare const ChangeTransparency: C<{
    active: boolean;
}>;
export declare const ChangePlayerFollowers: C<{
    active: boolean;
}>;
export declare const GatherFollowers: C;
export declare const ShowAnimation: C<{
    id: keyof typeof CHARACTER | number;
    animationId: number;
    wait?: boolean;
}>;
export declare const ShowBalloonIcon: C<{
    id: keyof typeof CHARACTER | number;
    balloon: keyof typeof BALLOON;
    wait?: boolean;
}>;
export declare const EraseEvent: C;
//# sourceMappingURL=character.d.ts.map