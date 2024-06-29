import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("App", () => {
  it("should get counter, and do the increment and decrement actions", async () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toEqual(0);
    await act(() => {
      result.current.increment();
    });
    expect(result.current.count).toEqual(1);
    await act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toEqual(0);
  });
});
