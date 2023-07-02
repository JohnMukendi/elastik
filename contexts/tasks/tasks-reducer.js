import { rowsData, columns } from "../../data/static-data";
import { updateData } from "../../utils/update-data";
export const reducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: updateData("add", state.tasks, action.payload),
      };
    case "isFirstTask":
        return {...state,firstTask:action.payload}
    default:
      return state;
  }
};
export const initialState = {
  tasks: [],
  taskColumns: columns,
  firstTask: true,
};
