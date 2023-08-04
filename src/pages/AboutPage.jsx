import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About </h1>
        <hr />
        <p className="lead text-center">
       Hey, This is Ayush Agrawal. Graduate of B.Tech Computer Science from Amity University, I am a technology enthusiast with a passion for developing innovative solutions. As a dedicated MERN stack developer, I have a solid understanding of programming fundamentals in C/C++ and Java, coupled with modern web technologies including React.js and SQL.
I have honed my skills by actively participating in projects such as an issue tracker application developed during my ReactJS internship, and a standalone food cart website built from scratch using HTML and CSS. I have also gained practical experience in WordPress.
        </p>

    
      </div>
      <Footer />
    </>
  )
}

export default AboutPage