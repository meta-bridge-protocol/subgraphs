import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenAdd,
  TokenRemove,
  TokenSent,
  TokenUpdate
} from "../generated/LayerZeroBridge/LayerZeroBridge"

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTokenAddEvent(token: Address, tokenId: BigInt): TokenAdd {
  let tokenAddEvent = changetype<TokenAdd>(newMockEvent())

  tokenAddEvent.parameters = new Array()

  tokenAddEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenAddEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return tokenAddEvent
}

export function createTokenRemoveEvent(token: Address): TokenRemove {
  let tokenRemoveEvent = changetype<TokenRemove>(newMockEvent())

  tokenRemoveEvent.parameters = new Array()

  tokenRemoveEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenRemoveEvent
}

export function createTokenSentEvent(
  token: Address,
  dstEid: BigInt,
  from: Address,
  amount: BigInt,
  brideFee: BigInt
): TokenSent {
  let tokenSentEvent = changetype<TokenSent>(newMockEvent())

  tokenSentEvent.parameters = new Array()

  tokenSentEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenSentEvent.parameters.push(
    new ethereum.EventParam("dstEid", ethereum.Value.fromUnsignedBigInt(dstEid))
  )
  tokenSentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  tokenSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenSentEvent.parameters.push(
    new ethereum.EventParam(
      "brideFee",
      ethereum.Value.fromUnsignedBigInt(brideFee)
    )
  )

  return tokenSentEvent
}

export function createTokenUpdateEvent(token: Address): TokenUpdate {
  let tokenUpdateEvent = changetype<TokenUpdate>(newMockEvent())

  tokenUpdateEvent.parameters = new Array()

  tokenUpdateEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return tokenUpdateEvent
}
