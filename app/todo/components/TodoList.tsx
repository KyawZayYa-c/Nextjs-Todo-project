'use client';
import {  MdDelete  } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import {Todo} from "@/lib/type";
import {btnStyle} from "@/app/todo/components/style";
import {useTodo} from "@/app/todo/components/TodoContext";
import {RiInboxArchiveLine} from "react-icons/ri";

interface TodoListProps {
    todo : Todo;
    setEditingTodo : (todo: Todo | null) => void;
}
export default function TodoList({todo , setEditingTodo}: TodoListProps) {
    const {dispatch} = useTodo();
    const onDeleteTodo = () => {
        console.log("onDeleteTodo", todo);
        dispatch({
            type: "DELETE_TODO",
            payload : todo
        });
    }
    const onUpdateTodo = () => {
        setEditingTodo(todo);
    }
    return(
    <div className={"group flex items-center " +
        "justify-between gap-4 m-2 bg-white/40 " +
        "backdrop-blur-md border hover:shadow-lg rounded-xl " +
        "shadow-md transition-all border-white/40 p-2"} >
        <div className={"flex-1 min-w-0 "} >
            <p className={"text-sm  font-medium text-slate-800 truncate transition-all duration-1000 ease-in-out group-hover:max-w-xl group-hover:whitespace-normal group-hover:break-words"} title={todo.title} >
                {todo.title}
            </p>
        </div>
        <div className={"flex gap-1 shrink-0"}>
            <button className={btnStyle} onClick={onUpdateTodo}  ><BiEdit className={"w-10 text-2xl"}/></button>
            <button  className={btnStyle} onClick={onDeleteTodo} ><MdDelete className={"w-10 text-2xl"}/></button>
        </div>
    </div>);
}

export function TodoListEmpty(){
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 mx-2 my-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-inner text-center animate-fade-in">
            <div className="p-4 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full border border-white/30 text-sky-600 mb-3 shadow-sm">
                <RiInboxArchiveLine className="text-4xl animate-bounce" style={{ animationDuration: '3s' }} />
            </div>

            <h3 className="text-base font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                No Tasks Left!
            </h3>
            <p className="text-xs text-slate-500/80 mt-1 max-w-[200px]">
                Enjoy your free time or add a new task above to get started.
            </p>
        </div>
    );
}