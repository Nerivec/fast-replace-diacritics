# fast-replace-diacritics

[![Version](https://img.shields.io/npm/v/fast-replace-diacritics.svg)](https://npmjs.org/package/fast-replace-diacritics)
[![CI](https://github.com/Nerivec/fast-replace-diacritics/actions/workflows/ci.yaml/badge.svg)](https://github.com/Nerivec/fast-replace-diacritics/actions/workflows/ci.yaml)

2-5x faster diacritics replacement compared to traditional 'str.replace'

Uses code points and direct string manipulation.

Traditional:
```js
str.replace(/[^\u0000-\u007e]/g, (c) => {
    return DIACRITICS_MAP.get(c) || c;
});
```

> [!IMPORTANT]
> The traditional method will bridge the gap performance-wise, when the input string contains long stretches of ASCII.
