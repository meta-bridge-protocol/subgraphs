import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { ComposeDelivered } from "../generated/schema"
import { ComposeDelivered as ComposeDeliveredEvent } from "../generated/EndpointV2/EndpointV2"
import { handleComposeDelivered } from "../src/endpoint-v-2"
import { createComposeDeliveredEvent } from "./endpoint-v-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let from = Address.fromString("0x0000000000000000000000000000000000000001")
    let to = Address.fromString("0x0000000000000000000000000000000000000001")
    let guid = Bytes.fromI32(1234567890)
    let index = 123
    let newComposeDeliveredEvent = createComposeDeliveredEvent(
      from,
      to,
      guid,
      index
    )
    handleComposeDelivered(newComposeDeliveredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ComposeDelivered created and stored", () => {
    assert.entityCount("ComposeDelivered", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ComposeDelivered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ComposeDelivered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ComposeDelivered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "guid",
      "1234567890"
    )
    assert.fieldEquals(
      "ComposeDelivered",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
