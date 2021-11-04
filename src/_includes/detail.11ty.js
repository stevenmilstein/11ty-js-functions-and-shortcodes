const getglobalDataFuncNow = require("../_data/globalDataFuncNow");

exports.data = {
  layout: "base.11ty.js",
  hardcodedNow: "{% now %}",
};

exports.render = async function (data) {
  let globalDataFuncNowResult = await getglobalDataFuncNow();
  return `
  <div>See <a href='/'>simpler version</a> or, <a href='https://www.11ty.dev/docs/data-computed/#using-javascript'>https://www.11ty.dev/docs/data-computed/#using-javascript</a> </div>


  <h2>Markdown Content</h2>
  <div>${data.content}</dic>
  <h2>Javascript Template Content</h2>

  <table>
    <tr>
      <th>/src/</th>
      <th>Data Cascade</th>
      <th>Code</th>
      <th>${data.version} Result</th>
      <th style="text-align:center"><mark>Javascript Function Implemented</mark></th>
      <th style="text-align:center">Works As Expected 0.12.1</th>
      <th style="text-align:center">Works As Expected 1.0.0-canary.44</th>
    </tr>
    <tr>
      <td>_includes/index.11ty.js</td>
      <td>Javascript Template Data</td>
      <td>
        <code>data.hardCodedNow</code>
      </td>
      <td>${data.hardcodedNow}</td>
      <td style="text-align:center">&check;</td>
      <td style="text-align:center">&cross;</td>
      <td style="text-align:center">&cross;</td>
    </tr>
    <tr>
      <td>_includes/index.11ty.js</td>
      <td>Javascript Template Function</td>
      <td>
        <code>getglobalDataFuncNowResult</code>
      </td>
      <td>${globalDataFuncNowResult}</td>
      <td style="text-align:center">&check;</td>
      <td style="text-align:center">&cross;</td>
      <td style="text-align:center">&cross;</td>
    </tr>
    <tr>
      <td>_includes/globalDataJsonNow.json</td>
      <td>Global Data JSON</td>
      <td>
        <code>globalDataJsonNow.now</code>
      </td>
      <td>${data.globalDataJsonNow.now}</td>
      <td style="text-align:center">&cross;</td>
      <td style="text-align:center">&check;</td>
      <td style="text-align:center">&cross;</td>
    </tr>
  </table>
  `;
};
