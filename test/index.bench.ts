import { test } from "vitest";
import { CODE_POINT_REPLACEMENTS, replaceDiacritics } from "../src/index.js";

const noop = (..._args: unknown[]) => {};

const PLAIN_DIACRITICS_MAP = new Map<string, string>();

for (const [key, val] of CODE_POINT_REPLACEMENTS) {
    PLAIN_DIACRITICS_MAP.set(String.fromCodePoint(key), val);
}

const tradReplaceDiacritics = (str: string) => {
    // biome-ignore lint/suspicious/noControlCharactersInRegex: unicode regex
    return str.replace(/[^\u0000-\u007e]/g, (c) => {
        return PLAIN_DIACRITICS_MAP.get(c) || c;
    });
};

test("Reference", async ({ bench }) => {
    await bench.compare(
        bench("replaceDiacritics", () => {
            noop(replaceDiacritics("Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ"));
        }),
        bench("tradReplaceDiacritics", () => {
            noop(tradReplaceDiacritics("Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ"));
        }),
        { warmupTime: 1000 },
    );
});

test("Simple single-char", async ({ bench }) => {
    await bench.compare(
        bench("replaceDiacritics", () => {
            noop(replaceDiacritics("niño"));
        }),
        bench("tradReplaceDiacritics", () => {
            noop(tradReplaceDiacritics("niño"));
        }),
        { warmupTime: 1000 },
    );
});

test("Simple dual-char", async ({ bench }) => {
    await bench.compare(
        bench("replaceDiacritics", () => {
            noop(replaceDiacritics("cœur"));
        }),
        bench("tradReplaceDiacritics", () => {
            noop(tradReplaceDiacritics("cœur"));
        }),
        { warmupTime: 1000 },
    );
});

test("1-char string", async ({ bench }) => {
    await bench.compare(
        bench("replaceDiacritics", () => {
            noop(replaceDiacritics("w"));
        }),
        bench("tradReplaceDiacritics", () => {
            noop(tradReplaceDiacritics("w"));
        }),
        { warmupTime: 1000 },
    );
});

test("No replacement", async ({ bench }) => {
    await bench.compare(
        bench("replaceDiacritics", () => {
            noop(replaceDiacritics("dragons"));
        }),
        bench("tradReplaceDiacritics", () => {
            noop(tradReplaceDiacritics("dragons"));
        }),
        { warmupTime: 1000 },
    );
});
