// createSafeContext.ts
import { createContext, useContext } from "react";

export function createSafeContext<A = unknown>() {
  const context = createContext<A | undefined>(undefined);

  function useSafeContext() {
    const safeContext = useContext(context);
    if (!safeContext) {
      throw new Error(
        "useSafeContext must be used within a SafeContextProvider"
      );
    }
    return safeContext;
  }

  return [useSafeContext, context.Provider] as const;
}
