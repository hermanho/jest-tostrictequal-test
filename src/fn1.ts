import { Response } from "./fn1.dto";
import { DataService } from "./dataService";

export function testFn(client: DataService): Response[] {
  const rawData = client.getData();

  return [
    Object.setPrototypeOf(
      {
        raw: rawData,
      },
      Response.prototype
    ),
  ];
}
