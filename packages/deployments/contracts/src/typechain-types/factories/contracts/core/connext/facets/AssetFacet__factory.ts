/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  AssetFacet,
  AssetFacetInterface,
} from "../../../../../contracts/core/connext/facets/AssetFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetFacet__addAssetId_alreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__addAssetId_nativeAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__removeAssetId_notAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetFacet__setTokenRegistry_invalidTokenRegistry",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "adoptedAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "localAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AssetRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "canonicalId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "swapPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "StableSwapAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTokenRegistry",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TokenRegistryUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "addStableSwapPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adopted",
        type: "address",
      },
    ],
    name: "adoptedToCanonical",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "adoptedToLocalPools",
    outputs: [
      {
        internalType: "contract IStableSwap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "approvedAssets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "approvedAssets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "canonicalToAdopted",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
    ],
    name: "canonicalToAdopted",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
    ],
    name: "removeAssetId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenRegistry",
        type: "address",
      },
    ],
    name: "setTokenRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "domain",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "id",
            type: "bytes32",
          },
        ],
        internalType: "struct TokenId",
        name: "_canonical",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_adoptedAssetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stableSwapPool",
        type: "address",
      },
    ],
    name: "setupAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenRegistry",
    outputs: [
      {
        internalType: "contract ITokenRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a3e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063600620911161008c578063bd7e1e2e11610066578063bd7e1e2e14610241578063bd8671a71461026a578063e9a25ab41461027d578063ea7a904d1461029057600080fd5b8063600620911461019b5780639d23c4c71461021d578063ae8bc0de1461022e57600080fd5b80631506e463146100d45780632c1999d0146100e957806335a5af921461012f5780633c84a51214610142578063569d29e41461015557806357bd0a3214610168575b600080fd5b6100e76100e23660046108c5565b6102a3565b005b6101126100f73660046108fd565b6000908152600a60205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e761013d366004610916565b6102f0565b6100e76101503660046108c5565b6103ca565b6100e761016336600461093a565b610411565b61018b6101763660046108fd565b60009081526008602052604090205460ff1690565b6040519015158152602001610126565b6101fc6101a9366004610916565b6040805180820190915260008082526020820152506040805180820182526001600160a01b03909216600081815260096020818152938220805463ffffffff168652929091528252600101549082015290565b60408051825163ffffffff1681526020928301519281019290925201610126565b6006546001600160a01b0316610112565b61018b61023c366004610984565b61063a565b61011261024f3660046108fd565b6000908152600760205260409020546001600160a01b031690565b610112610278366004610984565b61064e565b61011261028b366004610984565b61065c565b6100e761029e3660046109a0565b61066a565b336102ac6106a8565b6001600160a01b0316146102d3576040516314e74a2560e21b815260040160405180910390fd5b60006102de836106d6565b90506102eb8383836106f1565b505050565b336102f96106a8565b6001600160a01b031614610320576040516314e74a2560e21b815260040160405180910390fd5b6006546001600160a01b0390811690821681148061034657506001600160a01b0382163b155b1561036457604051630543d80f60e21b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915233908201527fb930976fe3861b681d9ff47fd2a0cd7631c018a3e76b25a945098e35e59c8ad69060600160405180910390a15050565b336103d36106a8565b6001600160a01b0316146103fa576040516314e74a2560e21b815260040160405180910390fd5b6000610405836106d6565b90506102eb8183610786565b3361041a6106a8565b6001600160a01b031614610441576040516314e74a2560e21b815260040160405180910390fd5b6001600160a01b03821661046857604051634fe3da3560e01b815260040160405180910390fd5b6000610473846106d6565b60008181526008602052604090205490915060ff16156104a657604051635c0aa50f60e01b815260040160405180910390fd5b6000818152600860209081526040909120805460ff191660011790556104ce908501856109c5565b6001600160a01b038481166000818152600960209081526040808320805463ffffffff191663ffffffff979097169690961786558982018035600190970196909655868352600a909152812080546001600160a01b031916909217909155600654909291169063589b3c649061054490886109c5565b6040516001600160e01b031960e084901b16815263ffffffff91909116600482015260208801356024820152604401602060405180830381865afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b491906109eb565b90506105c360208601866109c5565b63ffffffff168560200135837f0c58c78506e2d526f5ccdba28119c9ca3b5ce48e1462e0e19bc39232db11c632878533604051610620939291906001600160a01b0393841681529183166020830152909116604082015260600190565b60405180910390a46106338584846106f1565b5050505050565b6000610648610176836106d6565b92915050565b60006106486100f7836106d6565b600061064861024f836106d6565b336106736106a8565b6001600160a01b03161461069a576040516314e74a2560e21b815260040160405180910390fd5b6106a48282610786565b5050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6000610648602083018035906106ec90856109c5565b610853565b600081815260076020908152604090912080546001600160a01b0319166001600160a01b038516179055610727908401846109c5565b63ffffffff168360200135827f16285b1cf634d546d51fefe55f6e63e5edf970d2a3d2bd50b55a8cfad25e8b5685336040516107799291906001600160a01b0392831681529116602082015260400190565b60405180910390a4505050565b60008281526008602052604090205460ff166107b55760405163a7669c2160e01b815260040160405180910390fd5b6000828152600860209081526040808320805460ff191690556007825280832080546001600160a01b03199081169091556001600160a01b038516845260098352818420805463ffffffff19168155600101849055858452600a8352928190208054909316909255905133815283917f9d181adb70e733f5235f839c1eed929407ea8526e41d01f49b9fef703e78dddf910160405180910390a25050565b6000828260405160200161087792919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6000604082840312156108a757600080fd5b50919050565b6001600160a01b03811681146108c257600080fd5b50565b600080606083850312156108d857600080fd5b6108e28484610895565b915060408301356108f2816108ad565b809150509250929050565b60006020828403121561090f57600080fd5b5035919050565b60006020828403121561092857600080fd5b8135610933816108ad565b9392505050565b60008060006080848603121561094f57600080fd5b6109598585610895565b92506040840135610969816108ad565b91506060840135610979816108ad565b809150509250925092565b60006040828403121561099657600080fd5b6109338383610895565b600080604083850312156109b357600080fd5b8235915060208301356108f2816108ad565b6000602082840312156109d757600080fd5b813563ffffffff8116811461093357600080fd5b6000602082840312156109fd57600080fd5b8151610933816108ad56fea2646970667358221220ae401fa967c22f47bbf512f4e1aff75d8355e9e5ee62988bc691ba02796fe7e964736f6c634300080f0033";

type AssetFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetFacet__factory extends ContractFactory {
  constructor(...args: AssetFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetFacet> {
    return super.deploy(overrides || {}) as Promise<AssetFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetFacet {
    return super.attach(address) as AssetFacet;
  }
  override connect(signer: Signer): AssetFacet__factory {
    return super.connect(signer) as AssetFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetFacetInterface {
    return new utils.Interface(_abi) as AssetFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetFacet {
    return new Contract(address, _abi, signerOrProvider) as AssetFacet;
  }
}
