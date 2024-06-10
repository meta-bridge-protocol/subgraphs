import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import { JobAssigned } from "../generated/schema"
import { JobAssigned as JobAssignedEvent } from "../generated/MuonDVN/MuonDVN"
import { handleJobAssigned } from "../src/muon-dvn"
import { createJobAssignedEvent } from "./muon-dvn-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let jobId = BigInt.fromI32(234)
    let newJobAssignedEvent = createJobAssignedEvent(jobId)
    handleJobAssigned(newJobAssignedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("JobAssigned created and stored", () => {
    assert.entityCount("JobAssigned", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "JobAssigned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "jobId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
