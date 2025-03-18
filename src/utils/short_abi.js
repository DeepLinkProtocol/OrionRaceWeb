export const short_abi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "target",
                "type": "address"
            }
        ],
        "name": "AddressEmptyCode",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "ERC1967InvalidImplementation",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "ERC1967NonPayable",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "FailedInnerCall",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "InvalidInitialization",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "NotInitializing",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "UUPSUnauthorizedCallContext",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "slot",
                "type": "bytes32"
            }
        ],
        "name": "UUPSUnsupportedProxiableUUID",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint64",
                "name": "version",
                "type": "uint64"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "UPGRADE_INTERFACE_VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "totalClaimedAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "releasedAmount",
                "type": "uint256"
            }
        ],
        "name": "addClaimedRewardAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_calcPoint",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_reservedAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "_gpuCount",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "isAdd",
                "type": "bool"
            }
        ],
        "name": "addOrUpdateStakeHolder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "rentedGPUCount",
                "type": "uint8"
            }
        ],
        "name": "addRentedGPUCount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_reserveAmount",
                "type": "uint256"
            }
        ],
        "name": "addReserveAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "address2MachineCount",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addressCountInStaking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            }
        ],
        "name": "getCalcPointOfStakeHolders",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            }
        ],
        "name": "getHolderMachineIds",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLeftGPUCountToStartReward",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "machineId",
                "type": "string"
            }
        ],
        "name": "getMachineCalcPoint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "machineId",
                "type": "string"
            }
        ],
        "name": "getMachineGPUCount",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "machineId",
                "type": "string"
            }
        ],
        "name": "getMachineUploadInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "gpuType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "gpuMem",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "cpuRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "cpuType",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePerHour",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "reserveAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nextRenterCanRentAt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint64",
                        "name": "east",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "west",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "south",
                        "type": "uint64"
                    },
                    {
                        "internalType": "uint64",
                        "name": "north",
                        "type": "uint64"
                    }
                ],
                "internalType": "struct IStakingContract.MachineUploadInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "startIndex",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "pageSize",
                "type": "uint256"
            }
        ],
        "name": "getMachinesInStaking",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRentedGPUCountInDlcNftStaking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStateSummary",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "totalCalcPoint",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalGPUCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCalcPointPoolCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalRentedGPUCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalBurnedRentFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalReservedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "leftGPUCountBeforeRewardStart",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NFTStakingState.StateSummary",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "offset",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limit",
                "type": "uint256"
            }
        ],
        "name": "getTopStakeHolders",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "holder",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalCalcPoint",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalGPUCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "rentedGPUCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalReservedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "burnedRentFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalClaimedRewardAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "releasedRewardAmount",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct NFTStakingState.StakeHolder[]",
                "name": "",
                "type": "tuple[]"
            },
            {
                "internalType": "uint256",
                "name": "total",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalDlcNftStakingBurnedRentFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalGPUCountInStaking",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            }
        ],
        "name": "getTotalGPUCountOfStakeHolder",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_initialOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_precompileContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_rentContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_stakingContract",
                "type": "address"
            },
            {
                "internalType": "uint8",
                "name": "_phase_level",
                "type": "uint8"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "machineId",
                "type": "string"
            }
        ],
        "name": "isRented",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "machineIds",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "phaseLevel",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "precompileContract",
        "outputs": [
            {
                "internalType": "contract IPrecompileContract",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "proxiableUUID",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            }
        ],
        "name": "removeMachine",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "machineId",
                "type": "string"
            }
        ],
        "name": "removeMachineIdByValueUnordered",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rentContract",
        "outputs": [
            {
                "internalType": "contract IRentContract",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "fee",
                "type": "uint256"
            }
        ],
        "name": "setBurnedRentFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_precompileContract",
                "type": "address"
            }
        ],
        "name": "setPrecompileContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_rentContract",
                "type": "address"
            }
        ],
        "name": "setRentContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "caller",
                "type": "address"
            }
        ],
        "name": "setStakingContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "stakeHolders",
        "outputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalCalcPoint",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalGPUCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "rentedGPUCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalReservedAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "burnedRentFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalClaimedRewardAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "releasedRewardAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stakingContract",
        "outputs": [
            {
                "internalType": "contract IStakingContract",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "rentedGPUCount",
                "type": "uint8"
            }
        ],
        "name": "subRentedGPUCount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_holder",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_machineId",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_reserveAmount",
                "type": "uint256"
            }
        ],
        "name": "subReserveAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "topStakeHolders",
        "outputs": [
            {
                "internalType": "address",
                "name": "holder",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "totalCalcPoint",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "version",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
]