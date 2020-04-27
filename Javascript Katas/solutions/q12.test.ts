// 12: How can a given string be reversed using recursion?

import { reverseWithRecursion } from "../completed/kata-12";

describe("How can a given string be reversed using recursion?", () => {
    it("Basic characters", () => {
        expect(reverseWithRecursion("dog")).toBe("god");
        expect(reverseWithRecursion("hello")).toBe("olleh");
        expect(reverseWithRecursion("Howdy")).toBe("ydwoH");
        expect(reverseWithRecursion("Greetings from Earth")).toBe("htraE morf sgniteerG");
    });

});
