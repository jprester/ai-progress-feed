const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const url = `https://export.arxiv.org/api/query?search_query=all:${event.queryStringParameters.query}&start=${event.queryStringParameters.start}&max_results=${event.queryStringParameters.max_results}`;
  const response = await fetch(url);
  const data = await response.text();
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    body: data,
  };
};
