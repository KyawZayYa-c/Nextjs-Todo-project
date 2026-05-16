export default function Footer() {
    return (
        <footer className="w-full max-w-4xl mx-auto mt-auto px-6 py-4 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-500">
            <div>
                © {new Date().getFullYear()} <span className="font-bold text-slate-700">TaskFlow Inc.</span> All rights reserved.
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Contact Support</a>
            </div>
        </footer>
    );
}