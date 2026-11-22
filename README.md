# fast-replace-diacritics

[![Version](https://img.shields.io/npm/v/fast-replace-diacritics.svg)](https://npmjs.org/package/fast-replace-diacritics)
[![CI](https://github.com/Nerivec/fast-replace-diacritics/actions/workflows/ci.yaml/badge.svg)](https://github.com/Nerivec/fast-replace-diacritics/actions/workflows/ci.yaml)

2-5x faster diacritics replacement compared to traditional 'str.replace'

Uses code points and direct string manipulation. Intended for use in search-like scenario.

No dependencies.

#### Traditional 'str.replace'?

```js
str.replace(/[^\u0000-\u007e]/g, (c) => {
    return DIACRITICS_MAP.get(c) || c;
});
```

> [!IMPORTANT]
> The traditional method will bridge the gap performance-wise, when the input string contains long stretches of ASCII.

## Usage

```bash
npm i fast-replace-diacritics
```

```js
import { replaceDiacritics } from "fast-replace-diacritics";

const sanitized = replaceDiacritics("Iлｔèｒnåｔïｏnɑｌíƶａｔï߀ԉ"); // "Internationalizati0n"
```

You can also download `dist/index.js` from NPM to use directly:

https://www.npmjs.com/package/fast-replace-diacritics?activeTab=code

## Benchmarks

[index.bench.ts](./test/index.bench.ts)

> [!TIP]
> Click on the `CI` badge at the top of the readme to see the latest runs in GH action runner.

```
   ✓ Reference 5880ms
     name                             hz     min     max    mean     p75     p99    p995    p999     rme  samples
     replaceDiacritics      5,927,093.32  0.0002  7.2893  0.0002  0.0002  0.0002  0.0003  0.0004  ±1.43%  5791811   fastest
     tradReplaceDiacritics  1,690,868.87  0.0005  0.1473  0.0006  0.0006  0.0006  0.0007  0.0011  ±0.08%  1675852
   ✓ Simple single-char 10618ms
     name                              hz     min      max    mean     p75     p99    p995    p999     rme   samples
     replaceDiacritics      17,216,448.58  0.0000  44.9558  0.0001  0.0001  0.0001  0.0001  0.0001  ±8.81%  16222183   fastest
     tradReplaceDiacritics   8,422,705.62  0.0001  48.4061  0.0001  0.0001  0.0001  0.0002  0.0003  ±9.49%   7877936
   ✓ Simple dual-char 9703ms
     name                              hz     min      max    mean     p75     p99    p995    p999     rme   samples
     replaceDiacritics      16,385,509.59  0.0000   0.2460  0.0001  0.0001  0.0001  0.0001  0.0001  ±0.08%  16196399   fastest
     tradReplaceDiacritics   7,316,472.01  0.0001  49.7596  0.0001  0.0001  0.0002  0.0002  0.0006  ±9.75%   6770290
   ✓ 1-char string 12810ms
     name                              hz     min     max    mean     p75     p99    p995    p999     rme   samples
     replaceDiacritics      20,553,740.93  0.0000  0.0604  0.0000  0.0001  0.0001  0.0001  0.0001  ±0.05%  20266045   fastest
     tradReplaceDiacritics  14,938,047.17  0.0001  0.2836  0.0001  0.0001  0.0001  0.0001  0.0002  ±0.17%  14541408
   ✓ No replacement 10953ms
     name                              hz     min      max    mean     p75     p99    p995    p999     rme   samples
     replaceDiacritics      14,495,776.32  0.0001   0.0332  0.0001  0.0001  0.0001  0.0001  0.0001  ±0.04%  14354808   fastest
     tradReplaceDiacritics  14,329,706.47  0.0001  36.6136  0.0001  0.0001  0.0001  0.0001  0.0003  ±7.18%  13492125
```
