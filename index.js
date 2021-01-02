const lambdaPathParse = require('./src/lambdaPathParse')
const functions = require('./src/functions')

exports.handler = async (event) => {
    const { method, args } = lambdaPathParse.toContractCallParams(event)
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        }
    }
    switch (method) {
        case 'totalSupply':
            const totalSupply = await functions.totalSupply()
            response.body = JSON.stringify({
                ...totalSupply
            })
            break
        case 'tons':
            const [owner, entity] = await Promise.all([
                functions.ownerOf(...args),
                functions.getEntity(...args)
            ])
            response.body = JSON.stringify({ ...owner, ...entity })
            break
        case 'shop':
            try {
                const [auctionSell, priceSell] = await Promise.all([
                    functions.getAuctionSell(...args),
                    functions.getCurrentPriceSell(...args)
                ])
                response.body = JSON.stringify({ ...priceSell, ...auctionSell })
            } catch (e) {
                if (process.env.NODE_ENV === "development") {
                    console.error(e)
                }
                response.statusCode = 204
            }
            break
        case 'breed':
            try {
                const [auctionSeed, priceSeed] = await Promise.all([
                    functions.getAuctionSeed(...args),
                    functions.getCurrentPriceSeed(...args)
                ])
                response.body = JSON.stringify({ ...priceSeed, ...auctionSeed })
            } catch (e) {
                if (process.env.NODE_ENV === "development") {
                    console.error(e)
                }
                response.statusCode = 204
            }
            break
        default:
            response.statusCode = 400
    }

    return response;
};
