import { VEHICLE } from "../constants";
import { C, Color3, Sound } from "../type";
export declare const ChangeVehicleBgm: C<{
    vehicle: keyof typeof VEHICLE;
    sound: Sound;
}>;
export declare const ChangeSaveAccess: C<{
    allow: boolean;
}>;
export declare const ChangeMenuAccess: C<{
    allow: boolean;
}>;
export declare const ChangeEncounter: C<{
    allow: boolean;
}>;
export declare const ChangeFormationAccess: C<{
    allow: boolean;
}>;
export declare const ChangeWindowColor: C<{
    color: Color3;
}>;
export declare const ChangeActorImages: C<{
    id: number;
    face: {
        name: string;
        index: number;
    };
    character: {
        name: string;
        index: number;
    };
    battler: string;
}>;
export declare const ChangeVehicleImage: C<{
    vehicle: keyof typeof VEHICLE;
    image: {
        name: string;
        index: number;
    };
}>;
//# sourceMappingURL=system.d.ts.map