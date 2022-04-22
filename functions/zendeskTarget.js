exports.handler = async function (event, context) {
  const { path, httpMethod, headers, queryStringParameters, body } = event

  let details = await body.json()
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(details),
  }
}
