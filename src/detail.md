---
title: Detail
summary: Javascript Return Values Containing Shortcode Not Rendering
layout: detail.11ty.js
permalink: /detail/
---

### Based on shortcode

```
eleventyConfig.addShortcode("now", () => {
   return new Date();
});
```

| /src/                         | Data Cascade         | Code                                                     | {{ version }} Result            | <mark>Javascript Function Implemented</mark> | Works As Expected 0.12.1 | Works As Expected 1.0.0-canary.44 |
| ----------------------------- | -------------------- | -------------------------------------------------------- | ------------------------------- | :------------------------------------------: | :----------------------: | :-------------------------------: | --- |
| pages/markdown.md             |                      | `{% raw %} {% now %} {% endraw %}`                       | {% now %}                       |                   &cross;                    |         &check;          |              &check;              |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedTemplateStringNow }} {% endraw %}` | {{ computedTemplateStringNow }} |                   &cross;                    |         &check;          |              &check;              |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedFunctionNow }} {% endraw %}`       | {{ computedFunctionNow }}       |                   &check;                    |         &cross;          |              &cross;              |     |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedFuncCallNow }} {% endraw %}`       | {{ computedFuncCallNow }}       |                   &check;                    |         &cross;          |              &cross;              |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedAsyncFuncCallNow }} {% endraw %}`  | {{ computedAsyncFuncCallNow }}  |                   &check;                    |         &cross;          |              &cross;              |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedPromiseNow }} {% endraw %}`        | {{ computedPromiseNow }}        |                   &check;                    |         &cross;          |              &cross;              |
| \_data/globalDataFuncNow.js   | Global Data Function | `{% raw %} {{ globalDataFuncNow }} {% endraw %}`         | {{ globalDataFuncNow }}         |                   &check;                    |         &cross;          |              &cross;              |
| \_data/globalDataStrNow.js    | Global Data String   | `{% raw %} {{ globalDataStrNow }} {% endraw %}`          | {{ globalDataStrNow  }}         |                   &check;                    |         &cross;          |              &cross;              |
| \_data/globalDataJsonNow.json | Global Data JSON     | `{% raw %} {{ globalDataJsonNow.now }} {% endraw %}`     | {{ globalDataJsonNow.now  }}    |                   &cross;                    |         &check;          |              &cross;              |
