import fetch from 'node-fetch'
exports.handler = async function (event, context) {
  let data = { text: 'Bigger than five' }

  if (true) {
    fetch('https://hooks.slack.com/services/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', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
