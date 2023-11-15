import { createContext, useReducer } from "react";
import {reducer, initialState} from "./reducer";





export const DataContext = createContext();


export const DataProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState);
console.log(state)






    return (
        <DataContext.Provider value={{state, dispatch,}}>
            {children}
        </DataContext.Provider>
    )
}