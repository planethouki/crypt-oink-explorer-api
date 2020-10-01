const parser = require('../src/lambdaPathParse')

describe('/tons/5', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/tons/5","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"tons/5"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'getEntity', tokenId: 5 });
    })
})

describe('/shop/5532', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/shop/5532","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"shop/5532"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'getAuctionSell', tokenId: 5532 });
    })
})

describe('/breed/5532', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/breed/5532","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"breed/5532"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'getAuctionSeed', tokenId: 5532 });
    })
})
