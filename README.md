# fast-replace-diacritics

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
