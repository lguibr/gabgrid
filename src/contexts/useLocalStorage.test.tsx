import { renderHook, act } from "@testing-library/react-hooks";
import { LocalStorageProvider, useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LocalStorageProvider>{children}</LocalStorageProvider>
  );

  it("should set an item in the localStorage", () => {
    const { result } = renderHook(() => useLocalStorage(), { wrapper });

    act(() => {
      result.current.setItem("key", "value");
    });

    expect(result.current.getItem("key")).toBe("value");
  });
});
