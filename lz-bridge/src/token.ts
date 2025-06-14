import { Address, BigInt, ethereum, store } from '@graphprotocol/graph-ts'
import { Token, TokenAddress } from '../generated/schema'
import { LayerZeroBridge } from '../generated/LayerZeroBridge/LayerZeroBridge'
import { ADDRESS_ZERO, ZERO_BI } from './constants'

export function getOrCreateToken(tokenId: BigInt): Token {
  let existingToken = Token.load(tokenId.toString())

  if (existingToken != null) {
    return existingToken as Token
  }

  let newToken = new Token(tokenId.toString())
  newToken.tokenId = tokenId

  return newToken
}

export function getOrCreateTokenAddress(tokenAddress: Address): TokenAddress {
  let existingMapping = TokenAddress.load(tokenAddress)

  if (existingMapping != null) {
    return existingMapping as TokenAddress
  }

  let newMapping = new TokenAddress(tokenAddress)

  return newMapping
}

export function addToken(
  tokenId: BigInt,
  event: ethereum.Event
): Token {
  let contract = LayerZeroBridge.bind(event.address);

  let token = getOrCreateToken(tokenId);

  let data = contract.tokens(tokenId)

  token.tokenAddress = data.getNativeToken();
  token.mbToken = data.getMbToken();
  token.gateway = data.getGateway();
  
  let addressMapping = getOrCreateTokenAddress(Address.fromBytes(token.tokenAddress));
  addressMapping.tokenId = tokenId;

  token.save();
  addressMapping.save();

  return token;
}

export function updateToken(
  tokenAddress: Address,
  event: ethereum.Event
): Token {
  let contract = LayerZeroBridge.bind(event.address);
  let tokenId = contract.tokenIds(tokenAddress);

  let token = getOrCreateToken(tokenId);
  let prevAddressMapping = getOrCreateTokenAddress(Address.fromBytes(token.tokenAddress));
  let newAddressMapping = getOrCreateTokenAddress(tokenAddress);

  let data = contract.tokens(tokenId)

  token.tokenAddress = tokenAddress;
  token.mbToken = data.getMbToken();
  token.gateway = data.getGateway();
  
  prevAddressMapping.tokenId = ZERO_BI;
  newAddressMapping.tokenId = tokenId;

  token.save();
  prevAddressMapping.save();
  newAddressMapping.save();

  return token;
}

export function removeToken(
  tokenAddress: Address
): void {
  let addressMapping = TokenAddress.load(tokenAddress);

  if(addressMapping != null) {
    let token = getOrCreateToken(addressMapping.tokenId);

    addressMapping.tokenId = ZERO_BI;
  
    token.tokenAddress = Address.fromString(ADDRESS_ZERO);
    token.mbToken = Address.fromString(ADDRESS_ZERO);
    token.gateway = Address.fromString(ADDRESS_ZERO);
  
    addressMapping.save();
    token.save();
  }

}