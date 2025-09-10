import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="fixed left-0 h-1/2 w-12 bg-gray-800 flex flex-col justify-center py-4 space-y-2 rounded-tr-lg rounded-br-lg">
            <Link to="/projects" className="py-4 transform rotate-[-90deg] text-white text-sm tracking-wider hover:text-red-400">
                Projects
            </Link>

            <Link to="/about" className="py-4 transform rotate-[-90deg] text-white text-sm tracking-wider hover:text-red-400">
                About
            </Link>

            <Link to="/" className="py-4 transform rotate-[-90deg] text-white text-sm tracking-wider hover:text-red-400">
                Home
            </Link>
        </div>
    );
}
