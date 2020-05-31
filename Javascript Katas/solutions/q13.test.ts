// 13: How do you check if two strings are a rotation of each other?

import { areRotations } from "../week-seven/kata-13";

describe("How do you check if two strings are a rotation of each other?", () => {
    it("x", () => {
        expect(areRotations("abcd", "dabc")).toBeTruthy();
        expect(areRotations("abcd", "dacb")).toBeFalsy();
    });

});
