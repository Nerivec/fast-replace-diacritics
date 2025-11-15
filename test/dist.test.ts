// test against built js
import { replaceDiacritics } from "fast-replace-diacritics";
import { describe, expect, it } from "vitest";
import { SAMPLES } from "./samples";

describe("Diacritic removal - dist", () => {
    it("works on zero-length strings", () => {
        expect(replaceDiacritics("")).toStrictEqual("");
    });

    it("works on ASCII-only strings", () => {
        expect(replaceDiacritics("here be dragons")).toStrictEqual("here be dragons");
    });

    it.each(SAMPLES)("replace diacritics from %s", (value, expected) => {
        expect(replaceDiacritics(value)).toStrictEqual(expected);
    });
});
