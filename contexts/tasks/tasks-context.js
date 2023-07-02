import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./tasks-reducer";
const TasksContext = createContext();
export function TasksContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const customDispatch = (actionType, actionPayload) => {
    dispatch({ type: actionType, payload: actionPayload });
  };

  const contextValues = {
    state,
    dispatch: customDispatch,
  };
  console.log(state);
  return (
    <TasksContext.Provider value={contextValues}>
      {children}
    </TasksContext.Provider>
  );
}

export const useTasks = () => useContext(TasksContext);
