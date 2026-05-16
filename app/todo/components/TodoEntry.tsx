import {useEffect, useState} from "react";
import {MdAddCircle} from "react-icons/md";
import {useTodo} from "@/app/todo/components/TodoContext";
import {Todo} from "@/lib/type";
import {BiEdit} from "react-icons/bi";

let id = 1;
function getTodo(text : string) {
    return{
        id : id++,
        title : text,
        completed:false,
    }
}

interface TodoEntryProps{
    editingTodo : Todo | null;
    setEditingTodo : (todo : Todo | null) => void;
}

export default function TodoEntry({editingTodo, setEditingTodo}: TodoEntryProps){
    const [text, setText]= useState<string>(editingTodo ? editingTodo.title : '' );
    const {state, dispatch}  = useTodo();
    console.log('editingTodo TodoEntry',editingTodo?.title);
    const addTodo = (e : React.FormEvent) => {
        e.preventDefault();
        if(!text.trim()) return;
        if(editingTodo){
            dispatch({
                type : "UPDATE_TODO",
                payload : {...editingTodo, title: text}
            })
            setEditingTodo(null)
        }else {
            const data =  getTodo(text);
            console.log('Add todo => ', data)
            dispatch({
                type : "ADD_TODO",
                payload : data
            })
        }

        setText('')
    }

    return (
        <form className={" p-2  max-w-md mt-0 rounded m-2 flex justify-between gap-2"}
              onSubmit={addTodo}>
            <input
                value={text}
                placeholder="Add a new task..."
                className="w-full px-4 py-2 text-sm text-slate-700
              bg-slate-50 placeholder-slate-400 border
              border-slate-200 rounded-lg outline-none transition-all
              focus:border-emerald-500 focus:bg-white focus:ring-2
              focus:ring-emerald-100"
                onChange={(e) => setText(e.target.value)}
            />
            <button type={"submit"}
                    className={"bg-green-400 active:scale-96 active:bg-green-500 whitespace-nowrap transition-all duration-150 shadow-sm  shadow-emerald-100 font-semibold  p-1  rounded text-white"} >
                {editingTodo  ? <BiEdit className={"w-10 text-2xl"}/> : <MdAddCircle className={"w-10 text-2xl"}/>}
            </button>
        </form>)
}