const parser = require('../src/lambdaPathParse')

describe('/tons/5', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/tons/5","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"tons/5"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'tons', args: [5] });
    })
})

describe('/shop/5532', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/shop/5532","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"shop/5532"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'shop', args: [5532] });
    })
})

describe('/breed/5532', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/breed/5532","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"breed/5532"},"isBase64Encoded":false}
    test('test', () => {
        expect(parser.toContractCallParams(event))
            .toMatchObject({ method: 'breed', args: [5532] });
    })
})

describe('error path', () => {
    const event = {"version":"2.0","routeKey":"ANY /api/{type+}","rawPath":"/api/hoge/fuga/piyo","rawQueryString":"","headers":{},"requestContext":{},"pathParameters":{"type":"hoge/fuga/piyo"},"isBase64Encoded":false}
    test('test', () => {
        expect(() => {parser.toContractCallParams(event)})
            .toThrow();
    })
})
