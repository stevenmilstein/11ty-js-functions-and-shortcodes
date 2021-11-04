---
title: Javascript Return Values Containing Shortcode Not Rendering
layout: index.11ty.js
permalink: /
fmNow: \{% now \%}
---

### Based on shortcode

```
eleventyConfig.addShortcode("now", () => {
   return new Date();
});
```

| /src/                         | Data Cascade         | Code                                                     | Result                          | Works As Expected | Javascrip Function Implemented |
| ----------------------------- | -------------------- | -------------------------------------------------------- | ------------------------------- | :---------------: | :----------------------------: |
| pages/markdown.md             |                      | `{% raw %} {% now %} {% endraw %}`                       | {% now %}                       |      &check;      |            &cross;             |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedTemplateStringNow }} {% endraw %}` | {{ computedTemplateStringNow }} |      &check;      |            &cross;             |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedFunctionNow }} {% endraw %}`       | {{ computedFunctionNow }}       |      &cross;      |            &check;             |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedFuncCallNow }} {% endraw %}`       | {{ computedFuncCallNow }}       |      &cross;      |            &check;             |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedAsyncFuncCallNow }} {% endraw %}`  | {{ computedAsyncFuncCallNow }}  |      &cross;      |            &check;             |
| \_includes/index.11tydata.js  | eleventyComputed     | `{% raw %} {{ computedPromiseNow }} {% endraw %}`        | {{ computedPromiseNow }}        |      &cross;      |            &check;             |
| \_data/globalDataFuncNow.js   | Global Data Function | `{% raw %} {{ globalDataFuncNow }} {% endraw %}`         | {{ globalDataFuncNow }}         |      &cross;      |            &check;             |
| \_data/globalDataStrNow.js    | Global Data String   | `{% raw %} {{ globalDataStrNow }} {% endraw %}`          | {{ globalDataStrNow  }}         |      &cross;      |            &check;             |
| \_data/globalDataJsonNow.json | Global Data JSON     | `{% raw %} {{ globalDataJsonNow.now }} {% endraw %}`     | {{ globalDataJsonNow.now  }}    |      &check;      |            &cross;             |
