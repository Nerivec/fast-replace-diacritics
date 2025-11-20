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


## Benchmarks (vitest on GH action runner)

[index.bench.ts](./test/index.bench.ts)

> [!TIP]
> Click on the `CI` badge at the top of the readme to see the latest runs.

```
✓ test/index.bench.ts > Reference 21193ms
name                             hz     min     max    mean     p75     p99    p995    p999     rme   samples
· replaceDiacritics      3,132,848.74  0.0003  3.4313  0.0003  0.0003  0.0004  0.0006  0.0009  ±0.17%  15664244
· tradReplaceDiacritics    825,294.48  0.0011  0.4770  0.0012  0.0012  0.0022  0.0023  0.0103  ±0.06%   4126474

✓ test/index.bench.ts > Simple single-char 40549ms
name                             hz     min     max    mean     p75     p99    p995    p999     rme   samples
· replaceDiacritics      9,426,427.37  0.0001  0.1798  0.0001  0.0001  0.0001  0.0002  0.0002  ±0.05%  47132137
· tradReplaceDiacritics  3,357,032.68  0.0003  0.3967  0.0003  0.0003  0.0003  0.0005  0.0008  ±0.08%  16785164

✓ test/index.bench.ts > Simple dual-char 37012ms
name                             hz     min     max    mean     p75     p99    p995    p999     rme   samples
· replaceDiacritics      8,667,886.46  0.0001  0.7378  0.0001  0.0001  0.0001  0.0002  0.0002  ±0.04%  43339473
· tradReplaceDiacritics  3,000,826.24  0.0003  0.4585  0.0003  0.0003  0.0004  0.0005  0.0009  ±0.06%  15004132

✓ test/index.bench.ts > 1-char string 55942ms
name                              hz     min     max    mean     p75     p99    p995    p999     rme   samples
· replaceDiacritics      13,195,729.10  0.0001  0.1602  0.0001  0.0001  0.0001  0.0001  0.0001  ±0.03%  65978646
· tradReplaceDiacritics   7,335,602.75  0.0001  1.0018  0.0001  0.0001  0.0002  0.0002  0.0004  ±0.15%  36678014

✓ test/index.bench.ts > No replacement 45973ms
name                             hz     min     max    mean     p75     p99    p995    p999     rme   samples
· replaceDiacritics      9,102,157.51  0.0001  0.0845  0.0001  0.0001  0.0001  0.0001  0.0002  ±0.03%  45510788
· tradReplaceDiacritics  7,207,826.72  0.0001  0.4877  0.0001  0.0001  0.0002  0.0002  0.0004  ±0.10%  36039134

BENCH  Summary

replaceDiacritics - test/index.bench.ts > Reference
3.80x faster than tradReplaceDiacritics

replaceDiacritics - test/index.bench.ts > Simple single-char
2.81x faster than tradReplaceDiacritics

replaceDiacritics - test/index.bench.ts > Simple dual-char
2.89x faster than tradReplaceDiacritics

replaceDiacritics - test/index.bench.ts > 1-char string
1.80x faster than tradReplaceDiacritics

replaceDiacritics - test/index.bench.ts > No replacement
1.26x faster than tradReplaceDiacritics
```
