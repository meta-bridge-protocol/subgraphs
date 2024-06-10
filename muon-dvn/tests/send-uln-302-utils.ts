import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DVNFeePaid,
  DefaultExecutorConfigsSet,
  DefaultUlnConfigsSet,
  ExecutorConfigSet,
  ExecutorFeePaid,
  LzTokenFeeWithdrawn,
  NativeFeeWithdrawn,
  OwnershipTransferred,
  TreasuryNativeFeeCapSet,
  TreasurySet,
  UlnConfigSet
} from "../generated/Contract/Contract"

export function createDVNFeePaidEvent(
  requiredDVNs: Array<Address>,
  optionalDVNs: Array<Address>,
  fees: Array<BigInt>
): DVNFeePaid {
  let dvnFeePaidEvent = changetype<DVNFeePaid>(newMockEvent())

  dvnFeePaidEvent.parameters = new Array()

  dvnFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "requiredDVNs",
      ethereum.Value.fromAddressArray(requiredDVNs)
    )
  )
  dvnFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "optionalDVNs",
      ethereum.Value.fromAddressArray(optionalDVNs)
    )
  )
  dvnFeePaidEvent.parameters.push(
    new ethereum.EventParam(
      "fees",
      ethereum.Value.fromUnsignedBigIntArray(fees)
    )
  )

  return dvnFeePaidEvent
}

export function createDefaultExecutorConfigsSetEvent(
  params: Array<ethereum.Tuple>
): DefaultExecutorConfigsSet {
  let defaultExecutorConfigsSetEvent = changetype<DefaultExecutorConfigsSet>(
    newMockEvent()
  )

  defaultExecutorConfigsSetEvent.parameters = new Array()

  defaultExecutorConfigsSetEvent.parameters.push(
    new ethereum.EventParam("params", ethereum.Value.fromTupleArray(params))
  )

  return defaultExecutorConfigsSetEvent
}

export function createDefaultUlnConfigsSetEvent(
  params: Array<ethereum.Tuple>
): DefaultUlnConfigsSet {
  let defaultUlnConfigsSetEvent = changetype<DefaultUlnConfigsSet>(
    newMockEvent()
  )

  defaultUlnConfigsSetEvent.parameters = new Array()

  defaultUlnConfigsSetEvent.parameters.push(
    new ethereum.EventParam("params", ethereum.Value.fromTupleArray(params))
  )

  return defaultUlnConfigsSetEvent
}

export function createExecutorConfigSetEvent(
  oapp: Address,
  eid: BigInt,
  config: ethereum.Tuple
): ExecutorConfigSet {
  let executorConfigSetEvent = changetype<ExecutorConfigSet>(newMockEvent())

  executorConfigSetEvent.parameters = new Array()

  executorConfigSetEvent.parameters.push(
    new ethereum.EventParam("oapp", ethereum.Value.fromAddress(oapp))
  )
  executorConfigSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  executorConfigSetEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return executorConfigSetEvent
}

export function createExecutorFeePaidEvent(
  executor: Address,
  fee: BigInt
): ExecutorFeePaid {
  let executorFeePaidEvent = changetype<ExecutorFeePaid>(newMockEvent())

  executorFeePaidEvent.parameters = new Array()

  executorFeePaidEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  executorFeePaidEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return executorFeePaidEvent
}

export function createLzTokenFeeWithdrawnEvent(
  lzToken: Address,
  receiver: Address,
  amount: BigInt
): LzTokenFeeWithdrawn {
  let lzTokenFeeWithdrawnEvent = changetype<LzTokenFeeWithdrawn>(newMockEvent())

  lzTokenFeeWithdrawnEvent.parameters = new Array()

  lzTokenFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("lzToken", ethereum.Value.fromAddress(lzToken))
  )
  lzTokenFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  lzTokenFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return lzTokenFeeWithdrawnEvent
}

export function createNativeFeeWithdrawnEvent(
  worker: Address,
  receiver: Address,
  amount: BigInt
): NativeFeeWithdrawn {
  let nativeFeeWithdrawnEvent = changetype<NativeFeeWithdrawn>(newMockEvent())

  nativeFeeWithdrawnEvent.parameters = new Array()

  nativeFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("worker", ethereum.Value.fromAddress(worker))
  )
  nativeFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  nativeFeeWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return nativeFeeWithdrawnEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTreasuryNativeFeeCapSetEvent(
  newTreasuryNativeFeeCap: BigInt
): TreasuryNativeFeeCapSet {
  let treasuryNativeFeeCapSetEvent = changetype<TreasuryNativeFeeCapSet>(
    newMockEvent()
  )

  treasuryNativeFeeCapSetEvent.parameters = new Array()

  treasuryNativeFeeCapSetEvent.parameters.push(
    new ethereum.EventParam(
      "newTreasuryNativeFeeCap",
      ethereum.Value.fromUnsignedBigInt(newTreasuryNativeFeeCap)
    )
  )

  return treasuryNativeFeeCapSetEvent
}

export function createTreasurySetEvent(treasury: Address): TreasurySet {
  let treasurySetEvent = changetype<TreasurySet>(newMockEvent())

  treasurySetEvent.parameters = new Array()

  treasurySetEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return treasurySetEvent
}

export function createUlnConfigSetEvent(
  oapp: Address,
  eid: BigInt,
  config: ethereum.Tuple
): UlnConfigSet {
  let ulnConfigSetEvent = changetype<UlnConfigSet>(newMockEvent())

  ulnConfigSetEvent.parameters = new Array()

  ulnConfigSetEvent.parameters.push(
    new ethereum.EventParam("oapp", ethereum.Value.fromAddress(oapp))
  )
  ulnConfigSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  ulnConfigSetEvent.parameters.push(
    new ethereum.EventParam("config", ethereum.Value.fromTuple(config))
  )

  return ulnConfigSetEvent
}
