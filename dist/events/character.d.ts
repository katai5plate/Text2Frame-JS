import { BALLOON, CHARACTER } from "../constants";
export declare const ChangeTransparency: (active: boolean) => string;
export declare const ChangePlayerFollowers: (active: boolean) => string;
export declare const GatherFollowers: () => string;
export declare const ShowAnimation: (id: keyof typeof CHARACTER | number, animationId: number, wait?: boolean) => string;
export declare const ShowBalloonIcon: (id: keyof typeof CHARACTER | number, balloon: keyof typeof BALLOON, wait?: boolean) => string;
export declare const EraseEvent: () => string;
//# sourceMappingURL=character.d.ts.map