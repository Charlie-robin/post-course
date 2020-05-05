// 10: How do you print the first non-repeated character from a string?

import { printFirstNonRepeat } from "../week-two/kata-10"

describe("How do you check if two strings are anagrams of each other?", () => {
    it("First Character doesn't repeat", () => {
        expect(printFirstNonRepeat("abc")).toBe("a");
        expect(printFirstNonRepeat("bcd")).toBe("b");
    });
    it("First Character repeats", () => {
        expect(printFirstNonRepeat("aabc")).toBe("b");
    });
    it("Mixed position of characters", () => {
        expect(printFirstNonRepeat("abcba")).toBe("c");
    });

});
