exports.handler = async function (event, context) {
  const { path, httpMethod, headers, queryStringParameters, body } = event

  let ticket = JSON.parse(body)['ticket']

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ticket),
  }
}
