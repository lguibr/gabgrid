import { PropsWithChildren, useReducer } from "react";
import { createSafeContext } from "../utils/createSafeContext";

interface LocalStorageState {
  data: Record<string, string>;
}

interface LocalStorageActions {
  setItem: (key: string, value: string) => void;
  getItem: (key: string) => string | null;
  removeItem: (key: string) => void;
  clear: () => void;
}

type ActionType =
  | { type: "SET_ITEM"; payload: { key: string; value: string } }
  | { type: "REMOVE_ITEM"; payload: { key: string } }
  | { type: "CLEAR" };

function localStorageReducer(
  state: LocalStorageState,
  action: ActionType
): LocalStorageState {
  switch (action.type) {
    case "SET_ITEM":
      localStorage.setItem(action.payload.key, action.payload.value);
      return {
        ...state,
        data: { ...state.data, [action.payload.key]: action.payload.value },
      };
    case "REMOVE_ITEM":
      localStorage.removeItem(action.payload.key);
      const newData = { ...state.data };
      delete newData[action.payload.key];
      return { ...state, data: newData };
    case "CLEAR":
      localStorage.clear();
      return { ...state, data: {} };
    default:
      return state;
  }
}

const [useLocalStorageState, LocalStorageStateProvider] =
  createSafeContext<LocalStorageState>();
const [useLocalStorageActions, LocalStorageActionsProvider] =
  createSafeContext<LocalStorageActions>();

function LocalStorageProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(localStorageReducer, { data: {} });

  const actions: LocalStorageActions = {
    setItem: (key, value) =>
      dispatch({ type: "SET_ITEM", payload: { key, value } }),
    getItem: (key) => state.data[key] || null,
    removeItem: (key) => dispatch({ type: "REMOVE_ITEM", payload: { key } }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return (
    <LocalStorageStateProvider value={state}>
      <LocalStorageActionsProvider value={actions}>
        {children}
      </LocalStorageActionsProvider>
    </LocalStorageStateProvider>
  );
}

export { LocalStorageProvider, useLocalStorageState, useLocalStorageActions };
