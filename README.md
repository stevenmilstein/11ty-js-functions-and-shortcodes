# Javascript Return Values Containing Shortcode Not Rendering

#### See https://github.com/11ty/eleventy/issues/2069

## Try it

Click [Stackblitz](https://stackblitz.com/github/stevenmilstein/11ty-js-functions-and-shortcodes) to install.

1. From the terminal: `npm start`
1. If necessary, change embedded browser port from 3001 to 8080

### 1. Problem

Notice the shortcode `now` renders properly whenever it's **not** the result of a Javascript function.

### 2. Testing eleventy versions

#### 2.1 Change package.json from:

```
  "dependencies": {
    "@11ty/eleventy": "^0.12.1"
  }
```

to:

```
"dependencies": {
"@11ty/eleventy": "1.0.0-canary.44"
}
```

#### 2.2 From terminal:

```
> npm install
> npm start`
```

### 4. Regression

Notice the result for `_data/globalDataJsonNow.json` no longer renders today's date.
