import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ handleTheme }) => {
    const [isOn, setIsOn] = useState(false);
    const [toggleTheme, setToggleTheme] = useState("light");
    const [isOpen, setIsOpen] = useState(true);

    const toggleSwitch = () => {
        setIsOn(!isOn);
        setToggleTheme(toggleTheme === "dark" ? "light" : "dark");
        handleTheme(toggleTheme);
    };

    return (
        <nav className="text-gray-300 max-w-[100vw] px-4 md:px-[70px] py-4 sticky top-0 flex justify-between items-center z-[80] backdrop-blur-md dark:text-[#2e2e2d] dark:bg-[#2f2f2e]">
            <Link to="/">
                <div className="flex items-center gap-2 md:gap-4">
                    <h1 className="text-3xl md:text-[40px] font-medium font-[Alexandria] text-[#2f2f2e] dark:text-dark-text">
                        notebook
                    </h1>
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.3}
                        className="w-6 md:w-9 h-6 md:h-9 stroke-[#2f2f2e] fill-[#eeeeee]"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                    </motion.svg>
                </div>
            </Link>
            <div
                class="space-y-1 md:hidden cursor-pointer absolute z-[100] right-6 top-5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span class="block w-6  h-0.5 bg-[#2f2f2e] dark:bg-[#f2f3f6]"></span>
                <span class="block w-6  h-0.5 bg-[#2f2f2e] dark:bg-[#f2f3f6]"></span>
                <span class="block w-3  h-0.5 bg-[#2f2f2e] dark:bg-[#f2f3f6]"></span>
            </div>
            <div
                className={`absolute top-0 pt-16 pr-12 p-6 md:p-0 md:static flex flex-col h-[100vh] md:h-0 md:flex-row md:items-center justify-start md:justify-end gap-6 md:gap-10 transition-all duration-500 ease-in-out bg-[#f2f3f6] md:bg-transparent dark:bg-[#30302f] shadow-lg ${isOpen ? "right-0" : "right-[-500px]"}`}
            >
                <Link
                    className="flex gap-8 items-center text-xl font-medium font-[Alexandria] text-[#2f2f2e] dark:text-dark-text"
                    to="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-6 h-6 md:hidden`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span>home</span>
                </Link>
                <Link
                    className="flex gap-8 items-center text-xl font-medium font-[Alexandria] text-[#2f2f2e] dark:text-dark-text"
                    to="#"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="md:w-7 md:h-7 w-6 h-6 stroke-[#2f2f2e] dark:stroke-dark-text"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                    </svg>
                    <span className="flex gap-4 items-center text-xl font-medium font-[Alexandria] text-[#2f2f2e] dark:text-dark-text md:hidden">
                        Login
                    </span>
                </Link>
                <div className="flex gap-8 items-center text-xl font-medium font-[Alexandria] text-[#2f2f2e] dark:text-dark-text">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 md:hidden"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                        />
                    </svg>

                    <div
                        className="switch border-2 border-dark-bg dark:border-dark-text"
                        data-ison={isOn}
                        onClick={() => {
                            toggleSwitch();
                        }}
                    >
                        <motion.div
                            className="handle bg-dark-bg dark:bg-dark-text"
                            layout
                            transition={spring}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

export default Navbar;
