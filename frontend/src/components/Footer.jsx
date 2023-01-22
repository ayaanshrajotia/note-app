import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <main className=" max-w-[100vw] h-20 md:h-28 bg-[#f3f4f6] flex flex-row px-0 md:px-6 py-4 items-center  justify-evenly before:shadow-gray-800 dark:bg-[#2e2e2d]">
            <section className="w-[50vw] text-center p-2">
                <span className="text-base md:text-xl text-[#2f2f2e] font-medium font-[Alexandria] dark:text-[#efefef]">
                    Made with 💙 by Ayaansh Rajotia
                </span>
            </section>
            <div className="h-full w-[1px] md:w-[1px] bg-black dark:bg-[#efefef]"></div>
            <section className="w-[50vw] flex gap-8 md:gap-14 p-2 items-center justify-center">
                <a
                    href="https://github.com/ayaanshrajotia"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub className="w-6 md:w-7 h-6 md:h-7 cursor-pointer fill-[#2f2f2e] hover:fill-[#171515] hover:scale-110 duration-200 transition-all dark:fill-[#efefef]" />
                </a>
                <a
                    href="https://twitter.com/ayaansh_rajotia"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTwitter className="w-6 md:w-7 h-6 md:h-7 cursor-pointer fill-[#2f2f2e] hover:fill-[#1DA1F2] dark:hover:fill-[#1DA1F2] hover:scale-110  duration-200 transition-all dark:fill-[#efefef]" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ayaanshrajotia/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="w-6 md:w-7 h-6 md:h-7 cursor-pointer fill-[#2f2f2e] hover:fill-[#0A66C2] hover:scale-110 duration-200 transition-all dark:fill-[#efefef] dark:hover:fill-[#0A66C2]" />
                </a>
            </section>
        </main>
    );
};

export default Footer;
