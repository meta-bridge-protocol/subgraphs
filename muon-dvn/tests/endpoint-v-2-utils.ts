import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ComposeDelivered,
  ComposeSent,
  DefaultReceiveLibrarySet,
  DefaultReceiveLibraryTimeoutSet,
  DefaultSendLibrarySet,
  DelegateSet,
  InboundNonceSkipped,
  LibraryRegistered,
  LzComposeAlert,
  LzReceiveAlert,
  LzTokenSet,
  OwnershipTransferred,
  PacketBurnt,
  PacketDelivered,
  PacketNilified,
  PacketSent,
  PacketVerified,
  ReceiveLibrarySet,
  ReceiveLibraryTimeoutSet,
  SendLibrarySet
} from "../generated/EndpointV2/EndpointV2"

export function createComposeDeliveredEvent(
  from: Address,
  to: Address,
  guid: Bytes,
  index: i32
): ComposeDelivered {
  let composeDeliveredEvent = changetype<ComposeDelivered>(newMockEvent())

  composeDeliveredEvent.parameters = new Array()

  composeDeliveredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  composeDeliveredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  composeDeliveredEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  composeDeliveredEvent.parameters.push(
    new ethereum.EventParam(
      "index",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))
    )
  )

  return composeDeliveredEvent
}

export function createComposeSentEvent(
  from: Address,
  to: Address,
  guid: Bytes,
  index: i32,
  message: Bytes
): ComposeSent {
  let composeSentEvent = changetype<ComposeSent>(newMockEvent())

  composeSentEvent.parameters = new Array()

  composeSentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  composeSentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  composeSentEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  composeSentEvent.parameters.push(
    new ethereum.EventParam(
      "index",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))
    )
  )
  composeSentEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )

  return composeSentEvent
}

export function createDefaultReceiveLibrarySetEvent(
  eid: BigInt,
  newLib: Address
): DefaultReceiveLibrarySet {
  let defaultReceiveLibrarySetEvent = changetype<DefaultReceiveLibrarySet>(
    newMockEvent()
  )

  defaultReceiveLibrarySetEvent.parameters = new Array()

  defaultReceiveLibrarySetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  defaultReceiveLibrarySetEvent.parameters.push(
    new ethereum.EventParam("newLib", ethereum.Value.fromAddress(newLib))
  )

  return defaultReceiveLibrarySetEvent
}

export function createDefaultReceiveLibraryTimeoutSetEvent(
  eid: BigInt,
  oldLib: Address,
  expiry: BigInt
): DefaultReceiveLibraryTimeoutSet {
  let defaultReceiveLibraryTimeoutSetEvent =
    changetype<DefaultReceiveLibraryTimeoutSet>(newMockEvent())

  defaultReceiveLibraryTimeoutSetEvent.parameters = new Array()

  defaultReceiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  defaultReceiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("oldLib", ethereum.Value.fromAddress(oldLib))
  )
  defaultReceiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("expiry", ethereum.Value.fromUnsignedBigInt(expiry))
  )

  return defaultReceiveLibraryTimeoutSetEvent
}

export function createDefaultSendLibrarySetEvent(
  eid: BigInt,
  newLib: Address
): DefaultSendLibrarySet {
  let defaultSendLibrarySetEvent = changetype<DefaultSendLibrarySet>(
    newMockEvent()
  )

  defaultSendLibrarySetEvent.parameters = new Array()

  defaultSendLibrarySetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  defaultSendLibrarySetEvent.parameters.push(
    new ethereum.EventParam("newLib", ethereum.Value.fromAddress(newLib))
  )

  return defaultSendLibrarySetEvent
}

export function createDelegateSetEvent(
  sender: Address,
  delegate: Address
): DelegateSet {
  let delegateSetEvent = changetype<DelegateSet>(newMockEvent())

  delegateSetEvent.parameters = new Array()

  delegateSetEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  delegateSetEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )

  return delegateSetEvent
}

export function createInboundNonceSkippedEvent(
  srcEid: BigInt,
  sender: Bytes,
  receiver: Address,
  nonce: BigInt
): InboundNonceSkipped {
  let inboundNonceSkippedEvent = changetype<InboundNonceSkipped>(newMockEvent())

  inboundNonceSkippedEvent.parameters = new Array()

  inboundNonceSkippedEvent.parameters.push(
    new ethereum.EventParam("srcEid", ethereum.Value.fromUnsignedBigInt(srcEid))
  )
  inboundNonceSkippedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromFixedBytes(sender))
  )
  inboundNonceSkippedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  inboundNonceSkippedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return inboundNonceSkippedEvent
}

export function createLibraryRegisteredEvent(
  newLib: Address
): LibraryRegistered {
  let libraryRegisteredEvent = changetype<LibraryRegistered>(newMockEvent())

  libraryRegisteredEvent.parameters = new Array()

  libraryRegisteredEvent.parameters.push(
    new ethereum.EventParam("newLib", ethereum.Value.fromAddress(newLib))
  )

  return libraryRegisteredEvent
}

export function createLzComposeAlertEvent(
  from: Address,
  to: Address,
  executor: Address,
  guid: Bytes,
  index: i32,
  gas: BigInt,
  value: BigInt,
  message: Bytes,
  extraData: Bytes,
  reason: Bytes
): LzComposeAlert {
  let lzComposeAlertEvent = changetype<LzComposeAlert>(newMockEvent())

  lzComposeAlertEvent.parameters = new Array()

  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam(
      "index",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))
    )
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("gas", ethereum.Value.fromUnsignedBigInt(gas))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )
  lzComposeAlertEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromBytes(reason))
  )

  return lzComposeAlertEvent
}

export function createLzReceiveAlertEvent(
  receiver: Address,
  executor: Address,
  origin: ethereum.Tuple,
  guid: Bytes,
  gas: BigInt,
  value: BigInt,
  message: Bytes,
  extraData: Bytes,
  reason: Bytes
): LzReceiveAlert {
  let lzReceiveAlertEvent = changetype<LzReceiveAlert>(newMockEvent())

  lzReceiveAlertEvent.parameters = new Array()

  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("executor", ethereum.Value.fromAddress(executor))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromTuple(origin))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("guid", ethereum.Value.fromFixedBytes(guid))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("gas", ethereum.Value.fromUnsignedBigInt(gas))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromBytes(message))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )
  lzReceiveAlertEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromBytes(reason))
  )

  return lzReceiveAlertEvent
}

export function createLzTokenSetEvent(token: Address): LzTokenSet {
  let lzTokenSetEvent = changetype<LzTokenSet>(newMockEvent())

  lzTokenSetEvent.parameters = new Array()

  lzTokenSetEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return lzTokenSetEvent
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

export function createPacketBurntEvent(
  srcEid: BigInt,
  sender: Bytes,
  receiver: Address,
  nonce: BigInt,
  payloadHash: Bytes
): PacketBurnt {
  let packetBurntEvent = changetype<PacketBurnt>(newMockEvent())

  packetBurntEvent.parameters = new Array()

  packetBurntEvent.parameters.push(
    new ethereum.EventParam("srcEid", ethereum.Value.fromUnsignedBigInt(srcEid))
  )
  packetBurntEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromFixedBytes(sender))
  )
  packetBurntEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  packetBurntEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  packetBurntEvent.parameters.push(
    new ethereum.EventParam(
      "payloadHash",
      ethereum.Value.fromFixedBytes(payloadHash)
    )
  )

  return packetBurntEvent
}

export function createPacketDeliveredEvent(
  origin: ethereum.Tuple,
  receiver: Address
): PacketDelivered {
  let packetDeliveredEvent = changetype<PacketDelivered>(newMockEvent())

  packetDeliveredEvent.parameters = new Array()

  packetDeliveredEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromTuple(origin))
  )
  packetDeliveredEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return packetDeliveredEvent
}

export function createPacketNilifiedEvent(
  srcEid: BigInt,
  sender: Bytes,
  receiver: Address,
  nonce: BigInt,
  payloadHash: Bytes
): PacketNilified {
  let packetNilifiedEvent = changetype<PacketNilified>(newMockEvent())

  packetNilifiedEvent.parameters = new Array()

  packetNilifiedEvent.parameters.push(
    new ethereum.EventParam("srcEid", ethereum.Value.fromUnsignedBigInt(srcEid))
  )
  packetNilifiedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromFixedBytes(sender))
  )
  packetNilifiedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  packetNilifiedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  packetNilifiedEvent.parameters.push(
    new ethereum.EventParam(
      "payloadHash",
      ethereum.Value.fromFixedBytes(payloadHash)
    )
  )

  return packetNilifiedEvent
}

export function createPacketSentEvent(
  encodedPayload: Bytes,
  options: Bytes,
  sendLibrary: Address
): PacketSent {
  let packetSentEvent = changetype<PacketSent>(newMockEvent())

  packetSentEvent.parameters = new Array()

  packetSentEvent.parameters.push(
    new ethereum.EventParam(
      "encodedPayload",
      ethereum.Value.fromBytes(encodedPayload)
    )
  )
  packetSentEvent.parameters.push(
    new ethereum.EventParam("options", ethereum.Value.fromBytes(options))
  )
  packetSentEvent.parameters.push(
    new ethereum.EventParam(
      "sendLibrary",
      ethereum.Value.fromAddress(sendLibrary)
    )
  )

  return packetSentEvent
}

export function createPacketVerifiedEvent(
  origin: ethereum.Tuple,
  receiver: Address,
  payloadHash: Bytes
): PacketVerified {
  let packetVerifiedEvent = changetype<PacketVerified>(newMockEvent())

  packetVerifiedEvent.parameters = new Array()

  packetVerifiedEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromTuple(origin))
  )
  packetVerifiedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  packetVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "payloadHash",
      ethereum.Value.fromFixedBytes(payloadHash)
    )
  )

  return packetVerifiedEvent
}

export function createReceiveLibrarySetEvent(
  receiver: Address,
  eid: BigInt,
  newLib: Address
): ReceiveLibrarySet {
  let receiveLibrarySetEvent = changetype<ReceiveLibrarySet>(newMockEvent())

  receiveLibrarySetEvent.parameters = new Array()

  receiveLibrarySetEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  receiveLibrarySetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  receiveLibrarySetEvent.parameters.push(
    new ethereum.EventParam("newLib", ethereum.Value.fromAddress(newLib))
  )

  return receiveLibrarySetEvent
}

export function createReceiveLibraryTimeoutSetEvent(
  receiver: Address,
  eid: BigInt,
  oldLib: Address,
  timeout: BigInt
): ReceiveLibraryTimeoutSet {
  let receiveLibraryTimeoutSetEvent = changetype<ReceiveLibraryTimeoutSet>(
    newMockEvent()
  )

  receiveLibraryTimeoutSetEvent.parameters = new Array()

  receiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  receiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  receiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam("oldLib", ethereum.Value.fromAddress(oldLib))
  )
  receiveLibraryTimeoutSetEvent.parameters.push(
    new ethereum.EventParam(
      "timeout",
      ethereum.Value.fromUnsignedBigInt(timeout)
    )
  )

  return receiveLibraryTimeoutSetEvent
}

export function createSendLibrarySetEvent(
  sender: Address,
  eid: BigInt,
  newLib: Address
): SendLibrarySet {
  let sendLibrarySetEvent = changetype<SendLibrarySet>(newMockEvent())

  sendLibrarySetEvent.parameters = new Array()

  sendLibrarySetEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sendLibrarySetEvent.parameters.push(
    new ethereum.EventParam("eid", ethereum.Value.fromUnsignedBigInt(eid))
  )
  sendLibrarySetEvent.parameters.push(
    new ethereum.EventParam("newLib", ethereum.Value.fromAddress(newLib))
  )

  return sendLibrarySetEvent
}
