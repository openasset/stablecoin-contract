// Auto-generated file - DO NOT EDIT MANUALLY
// Generated on: 2025-11-26T05:44:49.424Z
//
// To regenerate this file:
// 1. yarn compile
// 2. node scripts/generate-frontend-contracts.js

const CONTRACTS = {
  "FiatToken": {
    "abi": [
      {
        "inputs": [],
        "name": "AccountBlacklisted",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AllowanceExceeded",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AlreadyInitialized",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AmountZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AuthorizationExpired",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AuthorizationNotYetValid",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AuthorizationUsedOrCanceled",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BalanceExceeded",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BalanceOverflow",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "BlacklistedAccount",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSignature",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSignature",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSignatureLength",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSignatureS",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "InvalidSignatureV",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "MintAllowanceExceeded",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotBlacklister",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotMasterMinter",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotMinter",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotOwner",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotPauser",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotPayee",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NotRescuer",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "Paused",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "PermitExpired",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          }
        ],
        "name": "SafeERC20FailedOperation",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ZeroAddress",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "authorizer",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          }
        ],
        "name": "AuthorizationCanceled",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "authorizer",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          }
        ],
        "name": "AuthorizationUsed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "Blacklisted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "newBlacklister",
            "type": "address"
          }
        ],
        "name": "BlacklisterChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "burner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Burn",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "newMasterMinter",
            "type": "address"
          }
        ],
        "name": "MasterMinterChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "Mint",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "minterAllowedAmount",
            "type": "uint256"
          }
        ],
        "name": "MinterConfigured",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "oldMinter",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": false,
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
        "inputs": [],
        "name": "Pause",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "newAddress",
            "type": "address"
          }
        ],
        "name": "PauserChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "newRescuer",
            "type": "address"
          }
        ],
        "name": "RescuerChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "UnBlacklisted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Unpause",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "CANCEL_AUTHORIZATION_TYPEHASH",
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
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
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
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
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
        "inputs": [],
        "name": "RECEIVE_WITH_AUTHORIZATION_TYPEHASH",
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
        "inputs": [],
        "name": "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
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
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
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
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "authorizer",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          }
        ],
        "name": "authorizationState",
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
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "blacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "blacklister",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "authorizer",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "cancelAuthorization",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minterAllowedAmount",
            "type": "uint256"
          }
        ],
        "name": "configureMinter",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "currency",
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
        "name": "decimals",
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
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "decrement",
            "type": "uint256"
          }
        ],
        "name": "decreaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "increment",
            "type": "uint256"
          }
        ],
        "name": "increaseAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "tokenName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tokenSymbol",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tokenCurrency",
            "type": "string"
          },
          {
            "internalType": "uint8",
            "name": "tokenDecimals",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "newMasterMinter",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "newPauser",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "newBlacklister",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "newRescuer",
            "type": "address"
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
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "isBlacklisted",
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
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isMinter",
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
        "inputs": [],
        "name": "masterMinter",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "_to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "mint",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "minter",
            "type": "address"
          }
        ],
        "name": "minterAllowance",
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
        "name": "name",
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
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "nonces",
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
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "paused",
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
        "inputs": [],
        "name": "pauser",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "permit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validBefore",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "receiveWithAuthorization",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "minter",
            "type": "address"
          }
        ],
        "name": "removeMinter",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "tokenContract",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "rescueERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rescuer",
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
        "name": "symbol",
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
        "name": "totalSupply",
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
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
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
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validAfter",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "validBefore",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "name": "transferWithAuthorization",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_account",
            "type": "address"
          }
        ],
        "name": "unBlacklist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newBlacklister",
            "type": "address"
          }
        ],
        "name": "updateBlacklister",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newMasterMinter",
            "type": "address"
          }
        ],
        "name": "updateMasterMinter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newPauser",
            "type": "address"
          }
        ],
        "name": "updatePauser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newRescuer",
            "type": "address"
          }
        ],
        "name": "updateRescuer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040526001805460ff60a01b191690555f600f55348015601f575f5ffd5b50613dda8061002d5f395ff3fe608060405234801561000f575f5ffd5b5060043610610304575f3560e01c80638456cb591161019d578063ad38bf22116100e8578063dd62ed3e11610093578063f2fde38b1161006e578063f2fde38b146107c3578063f9f92be4146107d6578063fe575a87146107e9575f5ffd5b8063dd62ed3e14610731578063e5a6b10f14610776578063e94a01021461077e575f5ffd5b8063bd102430116100c3578063bd102430146106d7578063cf092995146106f7578063d91694871461070a575f5ffd5b8063ad38bf221461069e578063b2118a8d146106b1578063b7b72899146106c4575f5ffd5b80639fd5a6cf11610148578063a9059cbb11610123578063a9059cbb14610640578063aa20e1e414610653578063aa271e1a14610666575f5ffd5b80639fd5a6cf146105f3578063a0cc6a6814610606578063a457c2d71461062d575f5ffd5b80638da5cb5b116101785780638da5cb5b146105ae57806395d89b41146105cb5780639fd0506d146105d3575f5ffd5b80638456cb591461055e57806388b7ab63146105665780638a6db9c314610579575f5ffd5b806338a631831161025d578063554bab3c1161020857806374ebf673116101e357806374ebf673146104ef5780637ecebe00146105025780637f2eecc314610537575f5ffd5b8063554bab3c146104a45780635c975abb146104b757806370a08231146104dc575f5ffd5b806340c10f191161023857806340c10f191461046b57806342966c681461047e5780634e44d95614610491575f5ffd5b806338a631831461043257806339509351146104505780633f4ba83a14610463575f5ffd5b80632ab60045116102bd578063313ce56711610298578063313ce567146103d057806335d99f35146103e55780633644e5151461042a575f5ffd5b80632ab60045146103835780633092afd51461039657806330adf81f146103a9575f5ffd5b806318160ddd116102ed57806318160ddd146103495780631a8952661461035b57806323b872dd14610370575f5ffd5b806306fdde0314610308578063095ea7b314610326575b5f5ffd5b6103106107fc565b60405161031d91906136f5565b60405180910390f35b610339610334366004613733565b61088c565b604051901515815260200161031d565b600f545b60405190815260200161031d565b61036e61036936600461375d565b6108f8565b005b61033961037e366004613778565b610995565b61036e61039136600461375d565b610bea565b6103396103a436600461375d565b610cf5565b61034d7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b600a5460405160ff909116815260200161031d565b600c546104059073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161031d565b61034d610dce565b60045473ffffffffffffffffffffffffffffffffffffffff16610405565b61033961045e366004613733565b610ddc565b61036e610e3e565b610339610479366004613733565b610ee1565b61036e61048c3660046137b6565b61122f565b61033961049f366004613733565b61144c565b61036e6104b236600461375d565b611588565b6001546103399074010000000000000000000000000000000000000000900460ff1681565b61034d6104ea36600461375d565b611693565b61036e6104fd3660046138b9565b6116df565b61034d61051036600461375d565b73ffffffffffffffffffffffffffffffffffffffff165f9081526007602052604090205490565b61034d7fd099cc98ef71107a616c4f0f941f04c322d8e254fe26b3c6668db87aae413de881565b61036e6119c4565b61036e6105743660046139a9565b611a7e565b61034d61058736600461375d565b73ffffffffffffffffffffffffffffffffffffffff165f9081526011602052604090205490565b5f5473ffffffffffffffffffffffffffffffffffffffff16610405565b610310611bb3565b6001546104059073ffffffffffffffffffffffffffffffffffffffff1681565b61036e610601366004613a2c565b611bc2565b61034d7f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a226781565b61033961063b366004613733565b611c2b565b61033961064e366004613733565b611c8d565b61036e61066136600461375d565b611da8565b61033961067436600461375d565b73ffffffffffffffffffffffffffffffffffffffff165f9081526010602052604090205460ff1690565b61036e6106ac36600461375d565b611eb3565b61036e6106bf366004613778565b611fbe565b61036e6106d2366004613a9d565b612035565b6002546104059073ffffffffffffffffffffffffffffffffffffffff1681565b61036e6107053660046139a9565b612095565b61034d7f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a159742981565b61034d61073f366004613af2565b73ffffffffffffffffffffffffffffffffffffffff9182165f908152600e6020908152604080832093909416825291909152205490565b6103106121bf565b61033961078c366004613733565b73ffffffffffffffffffffffffffffffffffffffff919091165f908152600660209081526040808320938352929052205460ff1690565b61036e6107d136600461375d565b61224b565b61036e6107e436600461375d565b612380565b6103396107f736600461375d565b61241d565b60606008805461080b90613b29565b80601f016020809104026020016040519081016040528092919081815260200182805461083790613b29565b80156108825780601f1061085957610100808354040283529160200191610882565b820191905f5260205f20905b81548152906001019060200180831161086557829003601f168201915b5050505050905090565b6001545f9074010000000000000000000000000000000000000000900460ff16156108e3576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ee33848461244d565b5060015b92915050565b60025473ffffffffffffffffffffffffffffffffffffffff163314610949576040517f3d93d31a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109528161254c565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f117e3210bb9aa7d9baff172026820255c6f6c30ba8999d1c2fd88e2848137c4e905f90a250565b6001545f9074010000000000000000000000000000000000000000900460ff16156109ec576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f818152600d602052604090205460ff1c600103610a37576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85165f908152600d6020526040902054859060ff1c600103610a9a576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85165f908152600d6020526040902054859060ff1c600103610afd576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87165f908152600e60209081526040808320338452909152902054851115610b66576040517fc45cb51300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b71878787612556565b73ffffffffffffffffffffffffffffffffffffffff87165f908152600e60209081526040808320338452909152902054610bac908690613ba7565b73ffffffffffffffffffffffffffffffffffffffff88165f908152600e60209081526040808320338452909152902055600193505050509392505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c3a576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c87576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fe475e580d85111348e40d8ca33cfdd74c30fe1655c2d8537a13abc10065ffa5a905f90a250565b600c545f9073ffffffffffffffffffffffffffffffffffffffff163314610d48576040517fd5295ad100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f81815260106020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556011909152808220829055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a25060015b919050565b5f610dd7612802565b905090565b6001545f9074010000000000000000000000000000000000000000900460ff1615610e33576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ee338484612940565b60015473ffffffffffffffffffffffffffffffffffffffff163314610e8f576040517f492f678100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33905f90a1565b6001545f9074010000000000000000000000000000000000000000900460ff1615610f38576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f9081526010602052604090205460ff16610f80576040517ff8d2906c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f818152600d602052604090205460ff1c600103610fcb576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84165f908152600d6020526040902054849060ff1c60010361102e576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff851661107b576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b835f036110b4576040517fcbca5aa200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f90815260116020526040902054808511156110fd576040517fe6333e2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84600f5461110b9190613bba565b600f5561116f86866111608273ffffffffffffffffffffffffffffffffffffffff165f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690565b61116a9190613bba565b61298a565b6111798582613ba7565b335f81815260116020908152604091829020939093555187815273ffffffffffffffffffffffffffffffffffffffff8916927fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f8910160405180910390a360405185815273ffffffffffffffffffffffffffffffffffffffff8716905f907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350600195945050505050565b60015474010000000000000000000000000000000000000000900460ff1615611284576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f9081526010602052604090205460ff166112cc576040517ff8d2906c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f818152600d602052604090205460ff1c600103611317576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f03611350576040517fcbca5aa200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16808311156113bb576040517f4d9d73a300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82600f546113c99190613ba7565b600f556113da3361116a8584613ba7565b60405183815233907fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca59060200160405180910390a26040518381525f9033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050565b6001545f9074010000000000000000000000000000000000000000900460ff16156114a3576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c5473ffffffffffffffffffffffffffffffffffffffff1633146114f4576040517fd5295ad100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83165f81815260106020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055601182529182902085905590518481527f46980fca912ef9bcdbd36877427b6b90e860769f604e89c0e67720cece530d20910160405180910390a250600192915050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146115d8576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611625576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a604905f90a250565b73ffffffffffffffffffffffffffffffffffffffff81165f908152600d60205260408120547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166108f2565b600c5474010000000000000000000000000000000000000000900460ff1615611734576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8516611781576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166117ce576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831661181b576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611868576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60086118748a82613c11565b5060096118818982613c11565b50600b61188e8882613c11565b50600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff8816179055600c80547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff88811691909117909255600180548216878416179055600280548216928616929092179091555f80549091163317905561193281610bea565b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617905561197a30612a6d565b5050600c80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000017905550505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314611a15576040517f492f678100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625905f90a1565b60015474010000000000000000000000000000000000000000900460ff1615611ad3576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87165f908152600d6020526040902054879060ff1c600103611b36576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87165f908152600d6020526040902054879060ff1c600103611b99576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ba889898989898989612a78565b505050505050505050565b60606009805461080b90613b29565b60015474010000000000000000000000000000000000000000900460ff1615611c17576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c248585858585612b85565b5050505050565b6001545f9074010000000000000000000000000000000000000000900460ff1615611c82576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ee338484612d3a565b6001545f9074010000000000000000000000000000000000000000900460ff1615611ce4576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f818152600d602052604090205460ff1c600103611d2f576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84165f908152600d6020526040902054849060ff1c600103611d92576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d9d338686612556565b506001949350505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611df8576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611e45576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600c80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fdb66dfa9c6b8f5226fe9aac7e51897ae8ee94ac31dc70bb6c9900b2574b707e6905f90a250565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611f03576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611f50576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517fc67398012c111ce95ecb7429b933096c977380ee6c421175a71a4a4c6c88c06e905f90a250565b60045473ffffffffffffffffffffffffffffffffffffffff16331461200f576040517fd95aace900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61203073ffffffffffffffffffffffffffffffffffffffff84168383612d7f565b505050565b60015474010000000000000000000000000000000000000000900460ff161561208a576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612030838383612e0c565b60015474010000000000000000000000000000000000000000900460ff16156120ea576040517f9e87fac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87165f908152600d6020526040902054879060ff1c60010361214d576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff87165f908152600d6020526040902054879060ff1c6001036121b0576040517f7d28af3f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ba889898989898989612ef8565b600b80546121cc90613b29565b80601f01602080910402602001604051908101604052809291908181526020018280546121f890613b29565b80156122435780601f1061221a57610100808354040283529160200191612243565b820191905f5260205f20905b81548152906001019060200180831161222657829003601f168201915b505050505081565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461229b576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166122e8576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f546040805173ffffffffffffffffffffffffffffffffffffffff928316815291831660208301527f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0910160405180910390a15f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905550565b50565b60025473ffffffffffffffffffffffffffffffffffffffff1633146123d1576040517f3d93d31a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6123da81612a6d565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fffa4e6181777692565cf28528fc88fd1516ea86b56da075235fa575af6a4b855905f90a250565b73ffffffffffffffffffffffffffffffffffffffff81165f908152600d602052604081205460ff1c6001146108f2565b73ffffffffffffffffffffffffffffffffffffffff831661249a576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166124e7576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152600e602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910161143f565b61237d815f612f80565b73ffffffffffffffffffffffffffffffffffffffff83166125a3576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166125f0576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83165f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1680821115612671576040517f4d9d73a300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61267a83613045565b156126f55761268d8461116a8484613ba7565b81600f5461269b9190613ba7565b600f5560405182815273ffffffffffffffffffffffffffffffffffffffff80851691908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a350505050565b61275184836127478773ffffffffffffffffffffffffffffffffffffffff165f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690565b61116a9190613ba7565b6127a383836111608673ffffffffffffffffffffffffffffffffffffffff165f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1690565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516126e791815260200190565b5f610dd76008805461281390613b29565b80601f016020809104026020016040519081016040528092919081815260200182805461283f90613b29565b801561288a5780601f106128615761010080835404028352916020019161288a565b820191905f5260205f20905b81548152906001019060200180831161286d57829003601f168201915b50505050506040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506128cc4690565b8251602093840120825192840192909220604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8187015280820194909452606084019190915260808301919091523060a0808401919091528151808403909101815260c09092019052805191012090565b73ffffffffffffffffffffffffffffffffffffffff8084165f908152600e60209081526040808320938616835292905220546120309084908490612985908590613bba565b61244d565b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111156129e4576040517f89560ca100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f908152600d602052604090205460ff1c600103612a45576040517f64d09d6300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff9091165f908152600d6020526040902055565b61237d816001612f80565b73ffffffffffffffffffffffffffffffffffffffff86163314612ac7576040517f56cab67b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612ad387838686613077565b604080517fd099cc98ef71107a616c4f0f941f04c322d8e254fe26b3c6668db87aae413de8602082015273ffffffffffffffffffffffffffffffffffffffff808a169282019290925290871660608201526080810186905260a0810185905260c0810184905260e08101839052612b67908890610100015b60405160208183030381529060405280519060200120836130f9565b612b718783613183565b612b7c878787612556565b50505050505050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821480612bb35750428210155b612be9576040517f1a15a3cc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f612ce8612bf5612802565b73ffffffffffffffffffffffffffffffffffffffff88165f90815260076020526040812080547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928b928b928b92909190612c4f83613d28565b9091555060408051602081019690965273ffffffffffffffffffffffffffffffffffffffff94851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001206040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b90505f612cf6878385613207565b905080612d2f576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b612b7c87878761244d565b73ffffffffffffffffffffffffffffffffffffffff8084165f908152600e60209081526040808320938616835292905220546120309084908490612985908590613ba7565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052612030908490613260565b612e168383613303565b604080517f158b0a9edf7a828aad02f63cd515c68ef2f50ba807396f6d12842833a1597429602082015273ffffffffffffffffffffffffffffffffffffffff85169181019190915260608101839052612e73908490608001612b4b565b73ffffffffffffffffffffffffffffffffffffffff83165f81815260066020908152604080832086845290915280822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055518492917f1cdd46ff242716cdaa72d159d339a485b3438398348d68f09d7c8c0a59353d8191a3505050565b612f0487838686613077565b604080517f7c7c6cdb67a18743f49ec6fa9b35f50d52ed05cbed4cc592e13b44501c1a2267602082015273ffffffffffffffffffffffffffffffffffffffff808a169282019290925290871660608201526080810186905260a0810185905260c0810184905260e08101839052612b6790889061010001612b4b565b80612fd15773ffffffffffffffffffffffffffffffffffffffff82165f908152600d60205260409020547f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16613019565b73ffffffffffffffffffffffffffffffffffffffff82165f908152600d60205260409020547f8000000000000000000000000000000000000000000000000000000000000000175b73ffffffffffffffffffffffffffffffffffffffff9092165f908152600d602052604090209190915550565b5f73ffffffffffffffffffffffffffffffffffffffff82166001811080159061307057506101008111155b9392505050565b8142116130b0576040517fdf8e437200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8042106130e9576040517f0f05f5bf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6130f38484613303565b50505050565b5f61314a84613144613109612802565b866040517f19010000000000000000000000000000000000000000000000000000000000008152600281019290925260228201526042902090565b84613207565b9050806130f3576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f81815260066020908152604080832085845290915280822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055518392917f98de503528ee59b575ef0c0a2576a82497bfc029a5685b209e9ec333479b10a591a35050565b5f833b61324d578373ffffffffffffffffffffffffffffffffffffffff1661322f8484613371565b73ffffffffffffffffffffffffffffffffffffffff16149050613070565b6132588484846133d4565b949350505050565b5f5f60205f8451602086015f885af18061327f576040513d5f823e3d81fd5b50505f513d915081156132965780600114156132b0565b73ffffffffffffffffffffffffffffffffffffffff84163b155b156130f3576040517f5274afe700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260240160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f90815260066020908152604080832084845290915290205460ff161561336d576040517fcbea100100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b5f81516041146133ad576040517f4be6321b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6020820151604083015160608401515f1a6133ca8682858561352c565b9695505050505050565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff16631626ba7e60e01b8686604051602401613409929190613d5f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009094169390931790925290516134929190613d77565b5f60405180830381855afa9150503d805f81146134ca576040519150601f19603f3d011682016040523d82523d5f602084013e6134cf565b606091505b50915091508180156134e357506020815110155b80156133ca575080517f1626ba7e00000000000000000000000000000000000000000000000000000000906135219083016020908101908401613d8d565b149695505050505050565b5f7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115613587576040517fbf4bf5b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8360ff16601b1415801561359f57508360ff16601c14155b156135d6576040517fff551e8900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604080515f8082526020820180845288905260ff871692820192909252606081018590526080810184905260019060a0016020604051602081039080840390855afa158015613627573d5f5f3e3d5ffd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116156136a0576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b95945050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f61307060208301846136a9565b73ffffffffffffffffffffffffffffffffffffffff8116811461237d575f5ffd5b8035610dc981613707565b5f5f60408385031215613744575f5ffd5b823561374f81613707565b946020939093013593505050565b5f6020828403121561376d575f5ffd5b813561307081613707565b5f5f5f6060848603121561378a575f5ffd5b833561379581613707565b925060208401356137a581613707565b929592945050506040919091013590565b5f602082840312156137c6575f5ffd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f82601f830112613809575f5ffd5b8135602083015f5f67ffffffffffffffff841115613829576138296137cd565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715613876576138766137cd565b60405283815290508082840187101561388d575f5ffd5b838360208301375f602085830101528094505050505092915050565b803560ff81168114610dc9575f5ffd5b5f5f5f5f5f5f5f5f5f6101208a8c0312156138d2575f5ffd5b893567ffffffffffffffff8111156138e8575f5ffd5b6138f48c828d016137fa565b99505060208a013567ffffffffffffffff811115613910575f5ffd5b61391c8c828d016137fa565b98505060408a013567ffffffffffffffff811115613938575f5ffd5b6139448c828d016137fa565b97505061395360608b016138a9565b955061396160808b01613728565b945061396f60a08b01613728565b935061397d60c08b01613728565b925061398b60e08b01613728565b915061399a6101008b01613728565b90509295985092959850929598565b5f5f5f5f5f5f5f60e0888a0312156139bf575f5ffd5b87356139ca81613707565b965060208801356139da81613707565b955060408801359450606088013593506080880135925060a0880135915060c088013567ffffffffffffffff811115613a11575f5ffd5b613a1d8a828b016137fa565b91505092959891949750929550565b5f5f5f5f5f60a08688031215613a40575f5ffd5b8535613a4b81613707565b94506020860135613a5b81613707565b93506040860135925060608601359150608086013567ffffffffffffffff811115613a84575f5ffd5b613a90888289016137fa565b9150509295509295909350565b5f5f5f60608486031215613aaf575f5ffd5b8335613aba81613707565b925060208401359150604084013567ffffffffffffffff811115613adc575f5ffd5b613ae8868287016137fa565b9150509250925092565b5f5f60408385031215613b03575f5ffd5b8235613b0e81613707565b91506020830135613b1e81613707565b809150509250929050565b600181811c90821680613b3d57607f821691505b602082108103613b74577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156108f2576108f2613b7a565b808201808211156108f2576108f2613b7a565b601f82111561203057805f5260205f20601f840160051c81016020851015613bf25750805b601f840160051c820191505b81811015611c24575f8155600101613bfe565b815167ffffffffffffffff811115613c2b57613c2b6137cd565b613c3f81613c398454613b29565b84613bcd565b6020601f821160018114613c90575f8315613c5a5750848201515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600385901b1c1916600184901b178455611c24565b5f848152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08516915b82811015613cdd5787850151825560209485019460019092019101613cbd565b5084821015613d1957868401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b60f8161c191681555b50505050600190811b01905550565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203613d5857613d58613b7a565b5060010190565b828152604060208201525f61325860408301846136a9565b5f82518060208501845e5f920191825250919050565b5f60208284031215613d9d575f5ffd5b505191905056fea26469706673582212205400565bd2ded63307b51adb143475756d2f8368631a4640215617814247306764736f6c634300081e0033"
  },
  "AdminUpgradeabilityProxy": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "implementationContract",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "CallFailed",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "FallbackCalledByAdmin",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ImplementationIsNotContract",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "NewAdminIsZeroAddress",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "previousAdmin",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "AdminChanged",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "implementation",
            "type": "address"
          }
        ],
        "name": "Upgraded",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "name": "admin",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "newAdmin",
            "type": "address"
          }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "implementation",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "newImplementation",
            "type": "address"
          }
        ],
        "name": "upgradeTo",
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
        "stateMutability": "payable",
        "type": "receive"
      }
    ],
    "bytecode": "0x6080604052348015600e575f5ffd5b5060405161073a38038061073a833981016040819052602b9160ad565b806033816060565b50605b337f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b55565b5060d8565b806001600160a01b03163b5f0360895760405163e84f0f9960e01b815260040160405180910390fd5b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c355565b5f6020828403121560bc575f5ffd5b81516001600160a01b038116811460d1575f5ffd5b9392505050565b610655806100e55f395ff3fe60806040526004361061005d575f3560e01c80635c60da1b116100425780635c60da1b146100a65780638f283970146100e3578063f851a440146101025761006c565b80633659cfe6146100745780634f1ef286146100935761006c565b3661006c5761006a610116565b005b61006a610116565b34801561007f575f5ffd5b5061006a61008e366004610572565b610150565b61006a6100a1366004610592565b6101a2565b3480156100b1575f5ffd5b506100ba610271565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100ee575f5ffd5b5061006a6100fd366004610572565b61029f565b34801561010d575f5ffd5b506100ba6103ca565b61011e6103f3565b61014e6101497f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35490565b610463565b565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5473ffffffffffffffffffffffffffffffffffffffff16330361019a5761019781610481565b50565b610197610116565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5473ffffffffffffffffffffffffffffffffffffffff163303610264576101e983610481565b5f3073ffffffffffffffffffffffffffffffffffffffff16348484604051610212929190610610565b5f6040518083038185875af1925050503d805f811461024c576040519150601f19603f3d011682016040523d82523d5f602084013e610251565b606091505b505090508061025e575f5ffd5b50505050565b61026c610116565b505050565b5f61029a7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c35490565b905090565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5473ffffffffffffffffffffffffffffffffffffffff16330361019a5773ffffffffffffffffffffffffffffffffffffffff811661032a576040517f607e23fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103737f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5490565b6040805173ffffffffffffffffffffffffffffffffffffffff928316815291841660208301520160405180910390a1610197817f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b55565b5f61029a7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5490565b7f10d6a54a4754c8869d6886b5f5d7fbfa5b4522237ea5c60d11bc4e7a1ff9390b5473ffffffffffffffffffffffffffffffffffffffff16330361014e576040517f245308bb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b365f5f375f5f365f845af43d5f5f3e80801561047d573d5ff35b3d5ffd5b61048a816104d6565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9060200160405180910390a150565b8073ffffffffffffffffffffffffffffffffffffffff163b5f03610526576040517fe84f0f9900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c355565b803573ffffffffffffffffffffffffffffffffffffffff8116811461056d575f5ffd5b919050565b5f60208284031215610582575f5ffd5b61058b8261054a565b9392505050565b5f5f5f604084860312156105a4575f5ffd5b6105ad8461054a565b9250602084013567ffffffffffffffff8111156105c8575f5ffd5b8401601f810186136105d8575f5ffd5b803567ffffffffffffffff8111156105ee575f5ffd5b8660208284010111156105ff575f5ffd5b939660209190910195509293505050565b818382375f910190815291905056fea26469706673582212209d68c94a6c87808e8b1d6ccfedaa7ab01f3eda32502ce8dafc8d69d1e2d054bf64736f6c634300081e0033"
  },
  "MasterMinter": {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_minterManager",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [],
        "name": "AllowanceDecrementMustBeGreaterThanZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "AllowanceIncrementMustBeGreaterThanZero",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CanOnlyDecrementAllowanceForActiveMinter",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "CanOnlyIncrementAllowanceForActiveMinter",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ControllerNotConfigured",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "ControllerZeroAddress",
        "type": "error"
      },
      {
        "inputs": [],
        "name": "WorkerZeroAddress",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_controller",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_worker",
            "type": "address"
          }
        ],
        "name": "ControllerConfigured",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_controller",
            "type": "address"
          }
        ],
        "name": "ControllerRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "msgSender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "decrement",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "newAllowance",
            "type": "uint256"
          }
        ],
        "name": "MinterAllowanceDecremented",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_msgSender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_increment",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_newAllowance",
            "type": "uint256"
          }
        ],
        "name": "MinterAllowanceIncremented",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_msgSender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_minter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_allowance",
            "type": "uint256"
          }
        ],
        "name": "MinterConfigured",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_oldMinterManager",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_newMinterManager",
            "type": "address"
          }
        ],
        "name": "MinterManagerSet",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "_msgSender",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "_minter",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_controller",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_worker",
            "type": "address"
          }
        ],
        "name": "configureController",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_newAllowance",
            "type": "uint256"
          }
        ],
        "name": "configureMinter",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_allowanceDecrement",
            "type": "uint256"
          }
        ],
        "name": "decrementMinterAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getMinterManager",
        "outputs": [
          {
            "internalType": "contract MinterManagementInterface",
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
            "name": "_controller",
            "type": "address"
          }
        ],
        "name": "getWorker",
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
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_allowanceIncrement",
            "type": "uint256"
          }
        ],
        "name": "incrementMinterAllowance",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
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
        "inputs": [
          {
            "internalType": "address",
            "name": "_controller",
            "type": "address"
          }
        ],
        "name": "removeController",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "removeMinter",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_newMinterManager",
            "type": "address"
          }
        ],
        "name": "setMinterManager",
        "outputs": [],
        "stateMutability": "nonpayable",
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
      }
    ],
    "bytecode": "0x6080604052348015600e575f5ffd5b5060405161119a38038061119a833981016040819052602b916062565b5f80546001600160a01b0319163317905580600280546001600160a01b0319166001600160a01b039290921691909117905550608d565b5f602082840312156071575f5ffd5b81516001600160a01b03811681146086575f5ffd5b9392505050565b6111008061009a5f395ff3fe608060405234801561000f575f5ffd5b50600436106100c4575f3560e01c8063c011b1c31161007d578063ea72156911610058578063ea721569146101d2578063f2fde38b146101da578063f6a74ed7146101ed575f5ffd5b8063c011b1c314610174578063c4faf7df146101ac578063cbf2b8bf146101bf575f5ffd5b80637c6b8ef5116100ad5780637c6b8ef5146101055780638da5cb5b146101185780639398608b14610156575f5ffd5b806333db2ad2146100c8578063542fef91146100f0575b5f5ffd5b6100db6100d6366004610fbd565b610200565b60405190151581526020015b60405180910390f35b6101036100fe366004610ff7565b61047a565b005b6100db610113366004610fbd565b61058c565b5f5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e7565b60025473ffffffffffffffffffffffffffffffffffffffff16610131565b610131610182366004610ff7565b73ffffffffffffffffffffffffffffffffffffffff9081165f908152600160205260409020541690565b6101036101ba366004611010565b610817565b6100db6101cd366004610fbd565b6109ac565b6100db610a7e565b6101036101e8366004610ff7565b610bc5565b6101036101fb366004610ff7565b610d7d565b335f9081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff1661025b576040517f8c2ec5b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f03610294576040517f3472b26500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f90815260016020526040908190205460025491517faa271e1a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820181905292919091169063aa271e1a90602401602060405180830381865afa158015610316573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061033a9190611041565b610370576040517f15d0d9e600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546040517f8a6db9c300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301525f921690638a6db9c390602401602060405180830381865afa1580156103de573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104029190611060565b90505f61040f85836110a4565b604080518781526020810183905291925073ffffffffffffffffffffffffffffffffffffffff85169133917f3703d23abba1e61f32acc0682fc062ea5c710672c7d100af5ecd08485e983ad0910160405180910390a361046f8382610f1a565b93505050505b919050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b60025460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f9992ea32e96992be98be5c833cd5b9fd77314819d2146b6f06ab9cfef957af12905f90a3600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b335f9081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff166105e7576040517f8c2ec5b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f03610620576040517fef61a20900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f90815260016020526040908190205460025491517faa271e1a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820181905292919091169063aa271e1a90602401602060405180830381865afa1580156106a2573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106c69190611041565b6106fc576040517fd79a1f4900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546040517f8a6db9c300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301525f921690638a6db9c390602401602060405180830381865afa15801561076a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061078e9190611060565b90505f84821161079e57816107a0565b845b90505f6107ad82846110b7565b604080518481526020810183905291925073ffffffffffffffffffffffffffffffffffffffff86169133917f3cc75d3bf58b0100659088c03539964108d5d06342e1bd8085ee43ad8ff6f69a910160405180910390a361080d8482610f1a565b9695505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b73ffffffffffffffffffffffffffffffffffffffff82166108e4576040517f9bf7dd0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610931576040517f0944e0e200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8281165f8181526001602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169486169485179055517fa56687ff5096e83f6e2c673cda0b677f56bbfcdf5fe0555d5830c407ede193cb9190a35050565b335f9081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff16610a07576040517f8c2ec5b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f818152600160205260409081902054905173ffffffffffffffffffffffffffffffffffffffff919091169182917f5b0b60a4f757b33d9dcb8bd021b6aa371bb2e6f134086797aefcd8c0afab538c90610a659087815260200190565b60405180910390a3610a778184610f1a565b9392505050565b335f9081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff16610ad9576040517f8c2ec5b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f8181526001602052604080822054905173ffffffffffffffffffffffffffffffffffffffff90911692839290917f4b5ef9a786cf64a7d82ebcf2d5132667edc9faef4ac36260d9a9e52c526b62329190a36002546040517f3092afd500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015290911690633092afd5906024016020604051808303815f875af1158015610b9b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bbf9190611041565b91505090565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b73ffffffffffffffffffffffffffffffffffffffff8116610ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016104f6565b5f546040805173ffffffffffffffffffffffffffffffffffffffff928316815291831660208301527f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0910160405180910390a15f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831617905550565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610dfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104f6565b73ffffffffffffffffffffffffffffffffffffffff8116610e4a576040517f9bf7dd0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8181165f9081526001602052604090205416610ea7576040517f8c2ec5b000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81165f8181526001602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055517f33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e811139190a250565b6002546040517f4e44d95600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152602482018490525f921690634e44d956906044016020604051808303815f875af1158015610f90573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fb49190611041565b90505b92915050565b5f60208284031215610fcd575f5ffd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610475575f5ffd5b5f60208284031215611007575f5ffd5b610fb482610fd4565b5f5f60408385031215611021575f5ffd5b61102a83610fd4565b915061103860208401610fd4565b90509250929050565b5f60208284031215611051575f5ffd5b81518015158114610a77575f5ffd5b5f60208284031215611070575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610fb757610fb7611077565b81810381811115610fb757610fb761107756fea26469706673582212208f83d451f7924fa7cb92605c8e98e2f77449b95da59621ade4c29f63edaf3b6564736f6c634300081e0033"
  }
};
