const ethers = require('ethers')
const datefns = require('date-fns')
const contracts = require('./contracts')

const getAuction = (instance) => (tokenId) => {
    return instance.getAuction(tokenId).then((data) => {
        return {
            seller: data.seller,
            startingPrice: ethers.utils.formatEther(data.startingPrice),
            endingPrice: ethers.utils.formatEther(data.endingPrice),
            duration: data.duration.toNumber(),
            startedAt: data.startedAt.toNumber(),
            startedAtGMT: datefns.lightFormat(datefns.fromUnixTime(data.startedAt.toNumber()), 'yyyy-MM-dd HH:mm:ss'),
        }
    }).catch((e) => {
        if (e.code === 'CALL_EXCEPTION') {
            return {}
        } else {
            throw e
        }
    })
}

module.exports = {
    getEntity(tokenId) {
        return contracts.entityCore.getEntity(tokenId).then((data) => {
            return {
                isBreeding: data.isBreeding,
                isReady: data.isReady,
                cooldownIndex: data.cooldownIndex.toNumber(),
                nextActionAt: data.nextActionAt.toNumber(),
                matingWithId: data.matingWithId.toNumber(),
                birthTime: data.birthTime.toNumber(),
                birthTimeGMT: datefns.lightFormat(datefns.fromUnixTime(data.birthTime.toNumber()), 'yyyy-MM-dd HH:mm:ss'),
                breederId: data.breederId.toNumber(),
                seederId: data.seederId.toNumber(),
                generation: data.generation.toNumber(),
                dna: data.dna.toHexString()
            }
        })
    },
    getAuctionSell(tokenId) {
        return getAuction(contracts.auctionSell)(tokenId)
    },
    getAuctionSeed(tokenId) {
        return getAuction(contracts.auctionSeed)(tokenId)
    }
}
