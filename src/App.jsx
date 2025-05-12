import React, { useState } from 'react';
import './App.css'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function App() {
    const [style, setStyle] = useState({});
  
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; 
      const y = e.clientY - rect.top; 
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = ((y - centerY) / centerY) * 10; // intensidade
      const rotateY = ((x - centerX) / centerX) * -10;
  
      setStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      });
    };
  
    const resetRotation = () => {
      setStyle({
        transform: `rotateX(0deg) rotateY(0deg)`,
        transition: "transform 0.3s ease",
      });
    };

  return (
    <>
    <div>
        <img className="flex absolute" src="src\assets\bg.jpg" alt="" />
        <div className="card" style={{ perspective: "1000px" }}>
            <div className="w-100 h-100 bg-white/80 backdrop-invert backdrop-opacity-5 rounded-2xl shadow-xl/10" 
                  style={{ ...style, transformStyle: "preserve-3d" }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={resetRotation}>
                <div className='flex flex-col items-center justify-center mt-35'>
                  <h1 className='font-[pecita] text-[30px] text-gray-500 mb-[-10px]'>Hello, I am Francine!</h1>
                  <p className='text-gray-500'>Front-end and software developer,</p>
                  <p className='text-gray-500'>UI and web design enthusiast.</p>
                </div>
                <div className='flex flex-row items-center justify-center gap-3 mt-10 text-sm font-bold text-gray-600'>
                      <a href="https://github.com/francinedds" target="_blank" rel="noreferrer" className='p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-400 transition ease-in-out duration-400'>
                        <FaGithub size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/francinedds/" target="_blank" rel="noreferrer" className='p-2 rounded-lg  bg-gray-500 text-white hover:bg-gray-400 transition ease-in-out duration-400'>
                        <FaLinkedinIn size={20} />
                      </a>
                      <a href="https://instagram.com/dani.ellef" target="_blank" rel="noreferrer" className='p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-400 transition ease-in-out duration-400'>
                        <FaInstagram size={20} />
                      </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
