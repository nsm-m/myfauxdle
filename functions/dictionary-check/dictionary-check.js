const axios = require("axios");


// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {

  const { wordGuess } = event.queryStringParameters;
  const key = process.env.API_KEY;
  const options = {
    method: 'GET',
    url: `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${wordGuess}`,

    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
 

  try {

    const { data } = await axios.request(options);

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

