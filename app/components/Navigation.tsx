import { RiTodoLine } from "react-icons/ri";

export default function Navigation() {
    return (
        <nav className="w-full max-w-4xl sticky  z-50 mx-auto px-6 py-3 my-4 mt-0 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-tr from-emerald-400 to-cyan-500 rounded-xl text-white shadow-md">
                    <RiTodoLine className="text-xl" />
                </div>
                <span className="font-bold text-slate-800 tracking-wide text-base">
                    Task<span className="text-emerald-500">Flow</span>
                </span>
            </div>

            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 border-2 border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                KZY
            </div>
        </nav>
    );
}