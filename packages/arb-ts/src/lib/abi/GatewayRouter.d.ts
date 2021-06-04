/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface GatewayRouterInterface extends ethers.utils.Interface {
  functions: {
    'defaultGateway()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'getGateway(address)': FunctionFragment
    'initialize(address,address,address)': FunctionFragment
    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)': FunctionFragment
    'owner()': FunctionFragment
    'setDefaultGateway(address)': FunctionFragment
    'setGateways(address[],address[])': FunctionFragment
    'setOwner(address)': FunctionFragment
    'tokenToGateway(address)': FunctionFragment
    'updateWhitelistSource(address)': FunctionFragment
    'whitelist()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'defaultGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'getGateway', values: [string]): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setDefaultGateway',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'setGateways',
    values: [string[], string[]]
  ): string
  encodeFunctionData(functionFragment: 'setOwner', values: [string]): string
  encodeFunctionData(
    functionFragment: 'tokenToGateway',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'updateWhitelistSource',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'defaultGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getGateway', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setDefaultGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setGateways', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'tokenToGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'updateWhitelistSource',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result

  events: {
    'InboundTransferFinalized(address,address,address,uint256,uint256,bytes)': EventFragment
    'OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)': EventFragment
    'TransferAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TransferRouted(address,address,address,address)': EventFragment
    'WhitelistSourceUpdated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'InboundTransferFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboundTransferInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferRouted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WhitelistSourceUpdated'): EventFragment
}

export class GatewayRouter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: GatewayRouterInterface

  functions: {
    defaultGateway(overrides?: CallOverrides): Promise<[string]>

    'defaultGateway()'(overrides?: CallOverrides): Promise<[string]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { gateway: string }>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { gateway: string }>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    setDefaultGateway(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setDefaultGateway(address)'(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setGateways(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setGateways(address[],address[])'(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    tokenToGateway(arg0: string, overrides?: CallOverrides): Promise<[string]>

    'tokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    whitelist(overrides?: CallOverrides): Promise<[string]>

    'whitelist()'(overrides?: CallOverrides): Promise<[string]>
  }

  defaultGateway(overrides?: CallOverrides): Promise<string>

  'defaultGateway()'(overrides?: CallOverrides): Promise<string>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getGateway(_token: string, overrides?: CallOverrides): Promise<string>

  'getGateway(address)'(
    _token: string,
    overrides?: CallOverrides
  ): Promise<string>

  initialize(
    _owner: string,
    _defaultGateway: string,
    _whitelist: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,address)'(
    _owner: string,
    _defaultGateway: string,
    _whitelist: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  outboundTransfer(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  setDefaultGateway(
    newDefaultGateway: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setDefaultGateway(address)'(
    newDefaultGateway: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setGateways(
    token: string[],
    gateway: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setGateways(address[],address[])'(
    token: string[],
    gateway: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>

  setOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setOwner(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  tokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

  'tokenToGateway(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>

  updateWhitelistSource(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateWhitelistSource(address)'(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  whitelist(overrides?: CallOverrides): Promise<string>

  'whitelist()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    defaultGateway(overrides?: CallOverrides): Promise<string>

    'defaultGateway()'(overrides?: CallOverrides): Promise<string>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getGateway(_token: string, overrides?: CallOverrides): Promise<string>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<string>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: CallOverrides
    ): Promise<void>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    setDefaultGateway(
      newDefaultGateway: string,
      overrides?: CallOverrides
    ): Promise<void>

    'setDefaultGateway(address)'(
      newDefaultGateway: string,
      overrides?: CallOverrides
    ): Promise<void>

    setGateways(
      token: string[],
      gateway: string[],
      overrides?: CallOverrides
    ): Promise<void>

    'setGateways(address[],address[])'(
      token: string[],
      gateway: string[],
      overrides?: CallOverrides
    ): Promise<void>

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>

    'setOwner(address)'(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>

    tokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

    'tokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>

    updateWhitelistSource(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    whitelist(overrides?: CallOverrides): Promise<string>

    'whitelist()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    InboundTransferFinalized(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    OutboundTransferInitiated(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    TransferAndCallTriggered(
      success: null,
      _from: string | null,
      _to: string | null,
      _amount: null,
      callHookData: null
    ): EventFilter

    TransferRouted(
      token: string | null,
      _userFrom: string | null,
      _userTo: string | null,
      gateway: null
    ): EventFilter

    WhitelistSourceUpdated(newSource: null): EventFilter
  }

  estimateGas: {
    defaultGateway(overrides?: CallOverrides): Promise<BigNumber>

    'defaultGateway()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>

    getGateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    setDefaultGateway(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'setDefaultGateway(address)'(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    setGateways(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<BigNumber>

    'setGateways(address[],address[])'(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<BigNumber>

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    tokenToGateway(arg0: string, overrides?: CallOverrides): Promise<BigNumber>

    'tokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    whitelist(overrides?: CallOverrides): Promise<BigNumber>

    'whitelist()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    defaultGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'defaultGateway()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setDefaultGateway(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setDefaultGateway(address)'(
      newDefaultGateway: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    setGateways(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setGateways(address[],address[])'(
      token: string[],
      gateway: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    tokenToGateway(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'tokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'whitelist()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}