/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConnectorManager,
  ConnectorManagerInterface,
} from "../../../../../contracts/core/messaging/connectors/ConnectorManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "domain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract Connector",
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
        internalType: "address",
        name: "_potentialReplica",
        type: "address",
      },
    ],
    name: "isReplica",
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
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161022238038061022283398101604081905261002f91610081565b8063ffffffff166000036100735760405162461bcd60e51b815260206004820152600760248201526610b237b6b0b4b760c91b604482015260640160405180910390fd5b63ffffffff166080526100ae565b60006020828403121561009357600080fd5b815163ffffffff811681146100a757600080fd5b9392505050565b6080516101546100ce600039600081816084015260cc01526101546000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635190bc53146100515780638d3638f4146100825780639fa92f9d146100b9578063c2fb26a6146100c7575b600080fd5b61006d61005f3660046100ee565b6001600160a01b0316301490565b60405190151581526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000005b60405163ffffffff9091168152602001610079565b604051308152602001610079565b6100a47f000000000000000000000000000000000000000000000000000000000000000081565b60006020828403121561010057600080fd5b81356001600160a01b038116811461011757600080fd5b939250505056fea2646970667358221220cc41fd2affd63de60bc3bf592ba1ebf8e3368d3b4bf420b08128cc3e4a34ab6a64736f6c634300080f0033";

type ConnectorManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnectorManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnectorManager__factory extends ContractFactory {
  constructor(...args: ConnectorManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConnectorManager> {
    return super.deploy(_domain, overrides || {}) as Promise<ConnectorManager>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_domain, overrides || {});
  }
  override attach(address: string): ConnectorManager {
    return super.attach(address) as ConnectorManager;
  }
  override connect(signer: Signer): ConnectorManager__factory {
    return super.connect(signer) as ConnectorManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnectorManagerInterface {
    return new utils.Interface(_abi) as ConnectorManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnectorManager {
    return new Contract(address, _abi, signerOrProvider) as ConnectorManager;
  }
}
