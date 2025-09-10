import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function Profile() {
    const navigate = useNavigate();
    const constraintsRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const cards = [
        { id: 3, color: "bg-yellow-200", path: "/", label: "Hi! I'm Dewi!" },
        { id: 1, color: "bg-green-200", path: "/about", label: "About Me" },
        { id: 2, color: "bg-red-200", path: "/projects", label: "My Projects" },
        { id: 4, color: "bg-blue-200", path: "/", label: "Try to drag Us!" },
        
    ];

    return (
        <div
        ref={constraintsRef}
        className="flex gap-6 p-8 justify-center items-center h-screen w-screen"
        >
        {cards.map((card) => (
            <motion.div
            key={card.id}
            className={`w-40 h-40 rounded-full cursor-pointer ${card.color} flex items-center justify-center`}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            whileTap={{ cursor: "grabbing" }}
            whileHover={{ scale: 1.3 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
                // reset setelah drag selesai
                setTimeout(() => setIsDragging(false), 0);
            }}
            onClick={() => {
                if (!isDragging) {
                navigate(card.path);
                }
            }}
            >
            <span className="text-gray-600 text-xl font-bold">{card.label}</span>
            </motion.div>
        ))}
        </div>
    );
}
