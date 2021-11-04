// See https://www.11ty.dev/docs/data-computed/

function funcNow() {
  return `{% now %}`;
}

async function asyncFuncNow() {
  return `{% now %}`;
}

module.exports = {
  eleventyComputed: {
    version: "Eleventy <mark>{{ pkg.dependencies['@11ty/eleventy'] }}</mark>",
    computedTemplateStringNow: `{% now %}`,
    computedFunctionNow: (data) => `{% now %}`,
    computedFuncCallNow: (data) => funcNow(),
    computedAsyncFuncCallNow: async (data) => await asyncFuncNow(),
    computedPromiseNow: (data) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(`{% now %}`), 100);
      });
    },
  },
};
