import { MatchingPenniesSimulator } from "./matching-pennies-simulator.js";
import {
  NetworkId,
  setNetworkId
} from "@midnight-ntwrk/midnight-js-network-id";
import { describe, it, expect } from "vitest";

setNetworkId(NetworkId.Undeployed);

describe("MatchingPennies smart contract", () => {
  it("Generates initial ledger state deterministically", () => {
    const simulator0 = new MatchingPenniesSimulator();
    const simulator1 = new MatchingPenniesSimulator();
    expect(simulator0.getLedger()).toEqual(simulator1.getLedger());
  });

  it("Fails when trying to resolve an empty game", () => {
    const simulator = new MatchingPenniesSimulator();
    expect(() => simulator.resolverPartida()).toThrow("No jugó el jugador A");
  });

  it("Fails when trying to resolve and player B hasn't played yet", () => {
    const simulator = new MatchingPenniesSimulator();
    const secretKey = new Uint8Array(32);
    secretKey.set([0x00, 0x00, 0x12, 0x34], 28);
    simulator.commitJugada(true, secretKey);
    expect(() => simulator.resolverPartida()).toThrow("No jugó el jugador B");
  });

  it("Fails when trying play twice", () => {
    const simulator = new MatchingPenniesSimulator();
    const secretKey = new Uint8Array(32);
    secretKey.set([0x00, 0x00, 0x12, 0x34], 28);
    simulator.commitJugada(true, secretKey);
    expect(() => simulator.commitJugada(true, secretKey)).toThrow(
      "Ya jugaste ameo"
    );
  });
});
