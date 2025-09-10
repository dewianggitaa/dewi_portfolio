import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";

const Projects = () => {
    const navigate = useNavigate();

    const projects = [
        { id: 1, name: "Wonderland Indonesia"},
        { id: 2, name: "Flower Classification"},
        { id: 3, name: "Job Hub"},
        { id: 4, name: "Compress Hub"},
        { id: 5, name: "Book Archieve"},
        { id: 6, name: "Kios Kampus"},
        { id: 7, name: "Cross Word"},
        { id: 8, name: "Simple Calculator"}
    ];

    return (
    <div className="bg-red-200 h-screen flex justify-center items-center gap-4">
        <Sidebar />
        {projects.map((project) => (
            <motion.div
            key={project.id}
            className="p-4 h-fit bg-white rounded cursor-pointer"
            onClick={() => navigate(`/details/${project.id}`)}
            >
            {project.name}
            </motion.div>
        ))}
    </div>
    )
}

export default Projects