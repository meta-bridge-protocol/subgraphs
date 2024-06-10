import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DVNFeePaid } from "../generated/schema"
import { DVNFeePaid as DVNFeePaidEvent } from "../generated/Contract/Contract"
import { handleDVNFeePaid } from "../src/send-uln-302"
import { createDVNFeePaidEvent } from "./send-uln-302-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requiredDVNs = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let optionalDVNs = [
      Address.fromString("0x0000000000000000000000000000000000000001")
    ]
    let fees = [BigInt.fromI32(234)]
    let newDVNFeePaidEvent = createDVNFeePaidEvent(
      requiredDVNs,
      optionalDVNs,
      fees
    )
    handleDVNFeePaid(newDVNFeePaidEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DVNFeePaid created and stored", () => {
    assert.entityCount("DVNFeePaid", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DVNFeePaid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requiredDVNs",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "DVNFeePaid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "optionalDVNs",
      "[0x0000000000000000000000000000000000000001]"
    )
    assert.fieldEquals(
      "DVNFeePaid",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fees",
      "[234]"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
