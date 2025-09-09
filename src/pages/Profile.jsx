import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    const cards = [
        { id: 1, color: "bg-blue-200", path: "/about", label: "About" },
        { id: 2, color: "bg-red-200", path: "/projects", label: "Projects" },
    ];

    return (
        <div className="flex gap-6 p-8 justify-center items-center h-screen">
        {cards.map((card) => (
            <motion.div
            key={card.id}
            onClick={() => navigate(card.path)}
            className={`w-40 h-40 rounded-full cursor-pointer ${card.color} flex items-center justify-center`}
            whileHover={{ scale: 1.1 }}
            >
            <span className="text-white text-xl font-bold">{card.label}</span>
            </motion.div>
        ))}
        </div>
    );
}
