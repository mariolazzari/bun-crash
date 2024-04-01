import { describe, test, expect, beforeAll } from "bun:test";

beforeAll(() => {
  // setup tests
});

describe("test", () => {
  test("add", () => {
    expect(1 + 1).toBe(2);
  });
});
