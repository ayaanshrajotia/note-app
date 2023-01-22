import Home from "./components/Home";
import { motion, useScroll } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import "./styles/NoteCard.scss";
import "./styles/Home.scss";
import "./styles/Navbar.scss";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
    const { scrollYProgress } = useScroll();
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.body.style.background = "#2e2e2d";
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.background = "#f3f4f6";
        }
    }, [theme]);

    const handleTheme = (mode) => {
        setTheme(mode === "dark" ? "light" : "dark");
    };

    return (
        <BrowserRouter>
            <motion.div
                className="progress-bar bg-note-yellow z-[100] h-[6px] w-[99.9vw] top-0 right-0 left-0 fixed origin-[0%]"
                style={{ scaleX: scrollYProgress }}
            />
            <Navbar handleTheme={handleTheme} />
            <Routes>
                <Route path="/" element={<Home theme={theme} />} />
            </Routes>
            <Footer />
            <Toaster />
        </BrowserRouter>
    );
}

export default App;
