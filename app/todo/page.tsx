'use client';
import {Todo} from "@/lib/type";
import {useContext, useState} from "react";

import TodoEntry from "@/app/todo/components/TodoEntry";
import {TodoContext, TodoProvider, useTodo} from "@/app/todo/components/TodoContext";
import TodoList, {TodoListEmpty} from "@/app/todo/components/TodoList";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function TodoPage(){
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

    return (
        <TodoProvider>
            <div className={"min-h-screen bg-gradient-to-tr w-100 flex flex-col align-middle m-0  bg-cyan-300 via-sky-200 to-blue-300 border-amber-900 border-4  rounded-md"}>
                <div className="w-full max-w-md h-[600px] bg-white/20 flex flex-col">
                    <Navigation />
                <h1 className="text-xl font-bold text-slate-800 px-1 m-2">My Tasks</h1>
                <TodoEntry
                    setEditingTodo={setEditingTodo}
                    editingTodo={editingTodo}
                    key={editingTodo?.id || 'new'}
                />
                    <div className="flex-1 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar no-scrollbar no-scrollbar">
                    <TodoItem setEditingTodo={setEditingTodo}  />
                    </div>
                    <Footer />
                </div>
            </div>
        </TodoProvider>
    )
}

interface TodoItemProps{
    setEditingTodo:(todo:Todo | null)=>void;
}
function TodoItem({setEditingTodo}: TodoItemProps){
    const {state} = useTodo();
    if(state.length > 0){
        return (
            state.map(todo =>
                <TodoList key={todo.id} todo={todo} setEditingTodo={setEditingTodo} />
            )
        )
    }else {
       return <TodoListEmpty />
    }

}

