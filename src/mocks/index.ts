import { Mocks, ScreenNames } from "enums";
import { TapModel } from "models";

const GenerateMocks = <T>(mock: Mocks, quantity: number): T[] => {
    const mocks = [];
    for (let i = 0; i < quantity; i++) {
        mocks.push(instances[mock](i));
    }
    return mocks as any as T[];
}

const instances = {
    tap: (i: number) => ({
        icon: [
            "ios-swap-vertical",
            "analytics"
        ][i],
        screen: /* ScreenNames[i === 0 ? "MOVEMENTS" : "ANALYTICS"]*/,
        isActive: !(i)
    }) as TapModel
}

export default GenerateMocks;