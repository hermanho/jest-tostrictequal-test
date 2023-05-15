import { jest, describe, it, expect } from "@jest/globals";
import { testFn } from "./fn1";
import { Response } from "./fn1.dto";
import { DataService } from "./dataService";
import MOCK_JSON from "./__fixtures__/result_1.json";

describe("testFn()", () => {
  it("should pass", () => {
    const dataService = new DataService();

    const serviceMock = [MOCK_JSON];
    const serviceSpy = jest
      .spyOn(dataService, "getData")
      .mockImplementation(() => serviceMock);

    expect(testFn(dataService)).toStrictEqual([
      Object.setPrototypeOf(
        {
          raw: [
            {
              fieldA: "A",
              fieldB: "B",
              fieldC: "C",
            },
          ],
        },
        Response.prototype
      ),
    ]);
    expect(serviceSpy).toHaveBeenCalled();
    serviceSpy.mockClear();
    serviceSpy.mockRestore();
  });
});
