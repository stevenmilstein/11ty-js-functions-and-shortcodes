module.exports = function (data) {
  return `
  <!DOCTYPE html>
  <html lang="en" class="font-body dark:bg-black">
  <head>
  <style>
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: Grey;
    color: white;
  }
</style>

  </head>
    <title>${data.title}</title>
    <body>
          ${data.content}
    </body>
  </html>
  `;
};
