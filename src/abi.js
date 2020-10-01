module.exports = {
    Auction: {
        abi: [
            {
                constant: true,
                inputs: [
                    {
                        name: '_tokenId',
                        type: 'uint256'
                    }
                ],
                name: 'getAuction',
                outputs: [
                    {
                        name: 'seller',
                        type: 'address'
                    },
                    {
                        name: 'startingPrice',
                        type: 'uint256'
                    },
                    {
                        name: 'endingPrice',
                        type: 'uint256'
                    },
                    {
                        name: 'duration',
                        type: 'uint256'
                    },
                    {
                        name: 'startedAt',
                        type: 'uint256'
                    }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [
                    {
                        name: '_tokenId',
                        type: 'uint256'
                    }
                ],
                name: 'getCurrentPrice',
                outputs: [
                    {
                        name: '',
                        type: 'uint256'
                    }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            }
        ]
    },
    EntityCore: {
        abi: [
            {
                constant: true,
                inputs: [],
                name: 'totalSupply',
                outputs: [
                    {
                        name: '',
                        type: 'uint256'
                    }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [
                    {
                        name: '_tokenId',
                        type: 'uint256'
                    }
                ],
                name: 'ownerOf',
                outputs: [
                    {
                        name: 'owner',
                        type: 'address'
                    }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: true,
                inputs: [
                    {
                        name: '_id',
                        type: 'uint256'
                    }
                ],
                name: 'getEntity',
                outputs: [
                    {
                        name: 'isBreeding',
                        type: 'bool'
                    },
                    {
                        name: 'isReady',
                        type: 'bool'
                    },
                    {
                        name: 'cooldownIndex',
                        type: 'uint256'
                    },
                    {
                        name: 'nextActionAt',
                        type: 'uint256'
                    },
                    {
                        name: 'matingWithId',
                        type: 'uint256'
                    },
                    {
                        name: 'birthTime',
                        type: 'uint256'
                    },
                    {
                        name: 'breederId',
                        type: 'uint256'
                    },
                    {
                        name: 'seederId',
                        type: 'uint256'
                    },
                    {
                        name: 'generation',
                        type: 'uint256'
                    },
                    {
                        name: 'dna',
                        type: 'uint256'
                    }
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            }
        ]
    }
}
