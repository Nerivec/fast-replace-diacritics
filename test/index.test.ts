import { describe, expect, it } from "vitest";
import { replaceDiacritics } from "../src/index.js";
import { SAMPLES } from "./samples";

describe("Diacritic removal", () => {
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
