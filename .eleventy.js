module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("now", () => {
    return new Date();
  });

  // This has no affect
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "./src",
      includes: "_includes",
      data: "_data",
      output: "./_site",
    },
  };
};
