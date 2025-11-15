import { bench, describe } from "vitest";
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

describe("Reference", () => {
    bench(
        "replaceDiacritics",
        () => {
            noop(replaceDiacritics("Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ"));
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "tradReplaceDiacritics",
        () => {
            noop(tradReplaceDiacritics("Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ"));
        },
        { warmupTime: 1000, time: 5000 },
    );
});

describe("Simple single-char", () => {
    bench(
        "replaceDiacritics",
        () => {
            noop(replaceDiacritics("niño"));
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "tradReplaceDiacritics",
        () => {
            noop(tradReplaceDiacritics("niño"));
        },
        { warmupTime: 1000, time: 5000 },
    );
});

describe("Simple dual-char", () => {
    bench(
        "replaceDiacritics",
        () => {
            noop(replaceDiacritics("cœur"));
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "tradReplaceDiacritics",
        () => {
            noop(tradReplaceDiacritics("cœur"));
        },
        { warmupTime: 1000, time: 5000 },
    );
});

describe("1-char string", () => {
    bench(
        "replaceDiacritics",
        () => {
            noop(replaceDiacritics("w"));
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "tradReplaceDiacritics",
        () => {
            noop(tradReplaceDiacritics("w"));
        },
        { warmupTime: 1000, time: 5000 },
    );
});

describe("No replacement", () => {
    bench(
        "replaceDiacritics",
        () => {
            noop(replaceDiacritics("dragons"));
        },
        { warmupTime: 1000, time: 5000 },
    );
    bench(
        "tradReplaceDiacritics",
        () => {
            noop(tradReplaceDiacritics("dragons"));
        },
        { warmupTime: 1000, time: 5000 },
    );
});
