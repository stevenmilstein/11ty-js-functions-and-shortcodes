const getglobalDataFuncNow = require("../_data/globalDataFuncNow");

exports.data = {
  layout: "base.11ty.js",
  tags: "pages",
  hardcodedNow: "{% now %}",
};

exports.render = async function (data) {
  let globalDataFuncNowResult = await getglobalDataFuncNow();
  return `<h1>${data.title}</h1>
  <h2>Markdown Content</h2>
  <div>${data.content}</dic>
  <h2>Javascript Template Content</h2>

  <table>
    <tr>
      <th>/src/</th>
      <th>Data Cascade</th>
      <th>Code</th>
      <th>Result</th>
      <th style="text-align:center">Works As Expected</th>
      <th style="text-align:center">Javascript Function Implemented</th>
    </tr>
    <tr>
      <td>_includes/index.11ty.js</td>
      <td>Javascript Template Data</td>
      <td>
        <code>data.hardCodedNow</code>
      </td>
      <td>${data.hardcodedNow}</td>
      <td style="text-align:center">&cross;</td>
      <td style="text-align:center">&check;</td>
    </tr>
    <tr>
      <td>_includes/index.11ty.js</td>
      <td>Javascript Template Function</td>
      <td>
        <code>getglobalDataFuncNowResult</code>
      </td>
      <td>${globalDataFuncNowResult}</td>
      <td style="text-align:center">&cross;</td>
      <td style="text-align:center">&check;</td>
    </tr>
    <tr>
      <td>_includes/globalDataJsonNow.json</td>
      <td>Global Data JSON</td>
      <td>
        <code>globalDataJsonNow.now</code>
      </td>
      <td>${data.globalDataJsonNow.now}</td>
      <td style="text-align:center">&check;</td>
      <td style="text-align:center">&cross;</td>
    </tr>
  </table>`;
};
