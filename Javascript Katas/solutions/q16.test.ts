// 16: How do you check if a string contains only digits?

import { onlyDigits } from "../week-eight/kata-16";

test("How do you check if a string contains only digits?", () => {
    expect(onlyDigits("abc")).toBeFalsy();
    expect(onlyDigits("abc1")).toBeFalsy();
    expect(onlyDigits("1234")).toBeTruthy();
});
