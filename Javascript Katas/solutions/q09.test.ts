// 09: How do you check if two strings are anagrams of each other?

import { compareAnagrams } from "../completed/kata-09";

describe("How do you check if two strings are anagrams of each other?", () => {
    it("Dog", () => {
        expect(compareAnagrams("dog", "god")).toBeTruthy();
        expect(compareAnagrams("dog", "cat")).toBeFalsy();
    });
    it("Doggy", () => {
        expect(compareAnagrams("doggy", "gogdy")).toBeTruthy();
    });
    it("Listen", () => {
        expect(compareAnagrams("listen", "silent")).toBeTruthy();
        expect(compareAnagrams("listen", "silentt")).toBeFalsy();
    });
    it("Listen", () => {
        expect(compareAnagrams("Listen", "silent")).toBeTruthy();
        expect(compareAnagrams("Listen", "listen")).toBeTruthy();
    });
});
