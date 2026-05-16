import {Todo} from "@/lib/type";
import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";
import React from "react";

export const initialState:Todo[] =[];

type ActionType = "ADD_TODO" | "DELETE_TODO" | "UPDATE_TODO";

type Action = {
    type : ActionType,
    payload :Todo ,
}

export const todoReducer =(state : Todo[], action : Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
            case "DELETE_TODO":
                return state.filter(st => st.id !== action.payload.id);
            case "UPDATE_TODO":
                return state.map(st => st.id === action.payload.id ? action.payload : st);
    }
}

type TodoContextTypeProps ={
    state :Todo[],
    dispatch : Dispatch<Action>,
}

export const TodoContext = createContext<TodoContextTypeProps | undefined>(undefined);

export function TodoProvider({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (<TodoContext.Provider value={{state, dispatch}} >
        {children}
    </TodoContext.Provider> )
}

export const useTodo= ()=> {
   const context = useContext(TodoContext);
    if(!context) throw new Error("useTodo() must be used within TodoProvider");
    return context;
}

