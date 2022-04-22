exports.handler = async function (event, context) {
  const { path, httpMethod, headers, queryStringParameters, body } = event

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ event: event, context: context }),
  }
}
