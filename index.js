const lambdaPathParse = require('./src/lambdaPathParse')
const functions = require('./src/functions')

exports.handler = async (event) => {
    const { method, tokenId } = lambdaPathParse.toContractCallParams(event)
    const data = await functions[method](tokenId)
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    };
    return response;
};
