module.exports = {
    toContractCallParams(event) {
        const splitted = event.pathParameters.type.split('/')
        if (splitted.length === 2) {
            const [type, tokenId] = splitted
            return {
                method: type,
                args: [Number(tokenId)]
            }
        } else if (splitted.length === 1) {
            const [type] = splitted
            return {
                method: type,
                args: []
            }
        } else {
            throw new Error()
        }

    }
}
