const methodTable = {
    tons: 'getEntity',
    shop: 'getAuctionSell',
    breed: 'getAuctionSeed'
}

module.exports = {
    toContractCallParams(event) {
        const [type, tokenId] = event.pathParameters.type.split('/')
        return {
            method: methodTable[type],
            tokenId: Number(tokenId)
        }
    }
}
