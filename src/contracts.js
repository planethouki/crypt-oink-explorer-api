const ethers = require('ethers')
const abi = require('./abi')
const address = require('./address')

const provider = new ethers.providers.InfuraProvider("homestead", process.env.INFURA)

const entityCore = new ethers.Contract(address.EntityCore, abi.EntityCore.abi, provider)
const auctionSell = new ethers.Contract(address.AuctionSell, abi.Auction.abi, provider)
const auctionSeed = new ethers.Contract(address.AuctionSeed, abi.Auction.abi, provider)

module.exports = {
    entityCore,
    auctionSell,
    auctionSeed
}
