/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface SendOutboundRootResolverInterface extends utils.Interface {
  functions: {
    "CONNECTOR()": FunctionFragment;
    "EXECUTION_INTERVAL()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "changeExecutionInterval(uint256)": FunctionFragment;
    "checker()": FunctionFragment;
    "delay()": FunctionFragment;
    "lastExecuted()": FunctionFragment;
    "lastRootSent()": FunctionFragment;
    "owner()": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "sendMessage(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CONNECTOR"
      | "EXECUTION_INTERVAL"
      | "acceptProposedOwner"
      | "changeExecutionInterval"
      | "checker"
      | "delay"
      | "lastExecuted"
      | "lastRootSent"
      | "owner"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "renounceOwnership"
      | "renounced"
      | "sendMessage"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CONNECTOR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "EXECUTION_INTERVAL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeExecutionInterval",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "checker", values?: undefined): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastExecuted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRootSent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "CONNECTOR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTION_INTERVAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeExecutionInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastExecuted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRootSent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SendOutboundRootResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SendOutboundRootResolverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONNECTOR(overrides?: CallOverrides): Promise<[string]>;

    EXECUTION_INTERVAL(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeExecutionInterval(
      _executionInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checker(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastExecuted(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastRootSent(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    sendMessage(
      outboundRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONNECTOR(overrides?: CallOverrides): Promise<string>;

  EXECUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeExecutionInterval(
    _executionInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checker(
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

  lastRootSent(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  sendMessage(
    outboundRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONNECTOR(overrides?: CallOverrides): Promise<string>;

    EXECUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    changeExecutionInterval(
      _executionInterval: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    checker(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    lastRootSent(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    sendMessage(
      outboundRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    CONNECTOR(overrides?: CallOverrides): Promise<BigNumber>;

    EXECUTION_INTERVAL(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeExecutionInterval(
      _executionInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checker(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    lastExecuted(overrides?: CallOverrides): Promise<BigNumber>;

    lastRootSent(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    sendMessage(
      outboundRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONNECTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EXECUTION_INTERVAL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeExecutionInterval(
      _executionInterval: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checker(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastExecuted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRootSent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendMessage(
      outboundRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
