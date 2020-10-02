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
            const [auctionSell, priceSell] = await Promise.all([
                functions.getAuctionSell(...args),
                functions.getCurrentPriceSell(...args)
            ])
            response.body = JSON.stringify({ ...priceSell, ...auctionSell })
            break
        case 'breed':
            const [auctionSeed, priceSeed] = await Promise.all([
                functions.getAuctionSeed(...args),
                functions.getCurrentPriceSeed(...args)
            ])
            response.body = JSON.stringify({ ...priceSeed, ...auctionSeed })
            break
        default:
            response.statusCode = 400
    }

    return response;
};
