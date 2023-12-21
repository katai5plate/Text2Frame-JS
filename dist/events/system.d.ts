import { VEHICLE } from "../constants";
import { Color3, Sound } from "../type";
export declare const ChangeVehicleBgm: (vehicle: keyof typeof VEHICLE, sound: Sound) => string;
export declare const ChangeSaveAccess: (allow: boolean) => string;
export declare const ChangeMenuAccess: (allow: boolean) => string;
export declare const ChangeEncounter: (allow: boolean) => string;
export declare const ChangeFormationAccess: (allow: boolean) => string;
export declare const ChangeWindowColor: (color: Color3) => string;
export declare const ChangeActorImages: (id: number, face: {
    name: string;
    index: number;
}, character: {
    name: string;
    index: number;
}, battler: string) => string;
export declare const ChangeVehicleImage: (vehicle: keyof typeof VEHICLE, image: {
    name: string;
    index: number;
}) => string;
//# sourceMappingURL=system.d.ts.map