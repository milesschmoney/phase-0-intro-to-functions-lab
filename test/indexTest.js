const assert = require("assert");
const { add } = require("../index");

describe("add function", function () {
  it("adds two numbers correctly", function () {
    assert.strictEqual(add(2, 3), 5);
  });
});
