import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { wonderland1, wonderland2, wonderland3, wonderland4, wonderland5, wonderland6, wonderland7, wonderland8, wonderland9, flower1, flower2, flower3, flower4, flower5, jobhub1, jobhub2, jobhub3, jobhub4, jobhub5, jobhub6, compress1, compress2, compress3, compress4, compress5, compress6, book1, book2, book3, book4, kios1, kios2, kios3, cross1, cross2, cross3, calculator } from './Image';
import Sidebar from "./Sidebar";
import { FaGithub } from "react-icons/fa";


const Details = () => {
    const { id } = useParams();

    const projects = [
        { 
        id: 1, 
        name: "Wonderland Indonesia", 
        description: "Sebuah karya kreatif yang menampilkan keindahan alam Indonesia.",
        images: [wonderland1, wonderland2, wonderland3, wonderland4, wonderland5, wonderland6, wonderland7, wonderland8, wonderland9],
        tag: ["React", "CSS", "Express JS", "MySQL", "CRUD", "Node JS"],
        link: ["https://github.com/dewianggitaa/wonderland-indonesia"]
        },
        { 
        id: 2, 
        name: "Flower Classification", 
        description: "Proyek machine learning untuk mengklasifikasikan jenis bunga.",
        images: [flower1, flower2, flower3, flower4, flower5],
        tag: ["React", "Tailwind", "Flask", "Node JS"],
        link: ["https://github.com/dewianggitaa/flower-classification"]
        },
        { 
        id: 3, 
        name: "Job Hub", 
        description: "Proyek API integration untuk upload lowongan pekerjaan, filtering, dan pencarian. Sayangnya link API nya sudah tidak aktif.",
        images: [jobhub1, jobhub2, jobhub3, jobhub4, jobhub5, jobhub6],
        tag: ["React", "Tailwind", "API Integration", "CRUD"],
        link: ["https://github.com/dewianggitaa/jobHub"]
        },
        { 
        id: 4, 
        name: "compressHub", 
        description: "Proyek kompresi gambar dan audio",
        images: [compress1, compress2, compress3, compress4, compress5, compress6],
        tag: ["React", "Tailwind", "Javascript"],
        link: ["https://github.com/dewianggitaa/compressHUB"]
        },
        { 
        id: 5, 
        name: "Book Arcieve", 
        description: "Proyek CRUD Buku",
        images: [book1, book2, book3, book4],
        tag: ["React", "CSS", "Express JS", "MySQL", "CRUD", "Node JS"],
        link: ["https://github.com/dewianggitaa/booksArchieve"]
        },
        { 
        id: 6, 
        name: "Kios Kampus", 
        description: "Proyek E-commerse sederhana, dimana user dapat menjual sekaligus membeli barang bekas. Sayangnya database nya sudah tidak aktif.",
        images: [kios1, kios2, kios3],
        tag: ["React", "Tailwind", "Express JS", "Postgres SQL", "CRUD", "Node JS"],
        link: ["https://github.com/dewianggitaa/kios-kampus"]
        },
        { 
        id: 7, 
        name: "Cross Word", 
        description: "Proyek JavaScript sederhana untuk bermain teka-teki silang.",
        images: [cross1, cross2, cross3],
        tag: ["HTML", "CSS", "Javascript"],
        link: ["https://github.com/dewianggitaa/crossWord"]
        },
        { 
        id: 8, 
        name: "Simple Calculator", 
        description: "Proyek react untuk kalkulator sederhana.",
        images: [calculator],
        tag: ["React", "CSS"],
        link: ["https://github.com/dewianggitaa/calculator-react"]
        },
        
        
    ];

    const project = projects.find(p => p.id === parseInt(id));
    const [current, setCurrent] = useState(0);

    const images = project?.images || [];

    // auto slide
    useEffect(() => {
        if (images.length === 0) return;

        const interval = setInterval(() => {
        setCurrent(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // project tidak ditemukan
    if (!project) {
        return <div className="text-center mt-10">Project not found</div>;
    }

    return (
        <div className="bg-red-200 h-screen flex flex-col items-center justify-center">
            <Sidebar />
            <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
            <p className="mb-6 text-center max-w-xl">{project.description}</p>
            <div className='flex justify-center items-center gap-2 mb-4'>
                <a href={project.link}><FaGithub/></a>
                
            </div>
            <div className='flex gap-2 mb-4'>
                {project.tag.map((tag, index) => (
                    <div key={index} className=' bg-white rounded-full gap-2'>
                        {tag}
                    </div>
                ))}   
            </div>

            

            <div className="w-full max-w-4xl relative overflow-hidden">
                {/* slider */}
                <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
                >
                {images.map((img, index) => (
                    <div
                    key={index}
                    className="flex justify-center flex-shrink-0 w-full px-2"
                    >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-96 h-auto object-cover rounded-md"
                    />
                    </div>
                ))}
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, idx) => (
                    <button
                    key={idx}
                    className={`py-1 px-2 rounded-sm ${
                        idx === current
                        ? 'bg-transparent text-red-500 font-bold'
                        : 'bg-white text-black'
                    }`}
                    onClick={() => setCurrent(idx)}
                    >
                    {idx + 1}
                    </button>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
