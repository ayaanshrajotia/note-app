import React, { useEffect } from "react";
import NoteCard from "./NoteCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NoteForm from "./NoteForm";
import { useDispatch, useSelector } from "react-redux";
import EditNoteForm from "./EditNoteForm";

const Home = ({ theme }) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const { notesList, searchQuery } = useSelector((state) => state.notes);
    const [showNew, setShowNew] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch({
            type: "searchQuery",
            payload: query,
        });
    }, [query, dispatch]);

    const handleShow = (cond) => {
        setShowNew(cond);
    };

    const handleEditShow = (cond) => {
        setShowEditForm(cond);
    };

    const handleQuery = (e) => {
        setQuery(e.target.value);
    };

    console.log(notesList);

    return (
        <>
            {showNew && <NoteForm handleShow={handleShow} />}
            {showEditForm && (
                <EditNoteForm
                    handleShow={handleShow}
                    handleEditShow={handleEditShow}
                />
            )}

            <main
                className={`home pattern-zigzag-xl overflow-x-hidden max-w-[100vw] min-h-[82vh] px-4 md:px-[30px] text-gray-100 bg-[#ffffff]  ${
                    showNew || showEditForm ? "blur-md" : ""
                } dark:bg-dark-bg relative dark:text-[#2e2e2d]`}
                style={{ transition: "0.2s -webkit-filter ease-in-out" }}
            >
                <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="flex flex-col md:flex-row mb-6 mx-0 md:mx-10 mt-6 gap-6 items-start md:items-center justify-between"
                >
                    <div className="flex gap-6 items-center justify-between">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 800,
                                damping: 10,
                            }}
                            className="font-[Alexandria] bg-white w-fit p-2 rounded-lg border-[2px] border-[#2f2f2e] dark:border-[#5a5a58] text-sm md:text-base cursor-pointer shadow-md flex items-center justify-center shrink-0 gap-2 text-note-text dark:text-dark-text dark:bg-[#2b2b2a] hover:border-yellow-300 dark:hover:border-yellow-300  duration-200 transition-colors"
                            onClick={() => setShowNew((i) => !i)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] stroke-[#4b4f61] dark:stroke-dark-text"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            add note
                        </motion.div>
                        <motion.div
                            initial={false}
                            animate={isOpen ? "open" : "closed"}
                            onClick={() => setIsOpen(!isOpen)}
                            // whileTap={{ scale: 0.97 }}
                            className="flex"
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 800,
                                    damping: 10,
                                }}
                                className="menu font-[Alexandria] bg-white w-fit p-2 rounded-lg border-[2px] border-[#2f2f2e] dark:border-[#5a5a58] text-sm md:text-base  cursor-pointer shadow-md text-note-text flex gap-2 shrink-0 items-center dark:bg-[#2b2b2a] dark:hover:border-yellow-300 dark:text-dark-text hover:border-yellow-300 duration-200 transition-colors "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] stroke-[#4b4f61] dark:stroke-dark-text"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                                    />
                                </svg>
                                sort by
                            </motion.button>
                            <motion.ul
                                className={`flex gap-4 mx-3 transition-all duration-200 ${
                                    isOpen ? "" : "hidden"
                                }`}
                                // style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            >
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 800,
                                        damping: 10,
                                    }}
                                    className="font-[Alexandria] bg-white w-fit p-2 rounded-lg border-[2px] border-[#2f2f2e] dark:border-[#5a5a58] text-sm md:text-base  cursor-pointer shadow-md text-note-text flex gap-2 items-center dark:bg-[#2b2b2a] dark:hover:border-yellow-300 dark:text-dark-text hover:border-yellow-300 duration-200 transition-colors"
                                    onClick={() =>
                                        dispatch({
                                            type: "sortNotesByAscending",
                                        })
                                    }
                                >
                                    Ascending
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 800,
                                        damping: 10,
                                    }}
                                    className="font-[Alexandria] bg-white w-fit p-2 rounded-lg border-[2px] border-[#2f2f2e] dark:border-[#5a5a58] text-sm md:text-base  cursor-pointer shadow-md text-note-text flex gap-2 items-center dark:bg-[#2b2b2a] dark:text-dark-text hover:border-yellow-300 duration-200 transition-colors"
                                    onClick={() =>
                                        dispatch({
                                            type: "sortNotesByDescending",
                                        })
                                    }
                                >
                                    Descending
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </div>
                    {/* Search Bar */}
                    <div className="search-bar flex items-center h-fit  border-[2px] p-2 w-[222px] rounded-lg border-[#2f2f2e] bg-[#ffffff] dark:bg-[#2f2f2e] dark:border-[#eeeeee]">
                        <button className="h-full w-[45px] flex justify-start items-center outline-none dark:placeholder-[#676767] dark:border-t-[#eeeeee] dark:border-l-[#eeeeee] dark:border-b-[#eeeeee]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                className="md:w-6 md:h-6 w-[22px] h-[22px] font-bold stroke-[#2f2f2e] dark:stroke-[#eeeeee]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </button>
                        <input
                            type="text"
                            placeholder="search your notes"
                            className="rounded-r-md outline-none bg-transparent w-full -ml-2 text-sm md:text-base text-[#2f2f2e] font-[Alexandria] dark:border-t-[#eeeeee] dark:border-r-[#eeeeee] dark:border-b-[#eeeeee] dark:text-dark-text"
                            onChange={(e) => handleQuery(e)}
                        />
                    </div>
                </motion.section>
                <motion.main className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ml-0 md:ml-4">
                    <AnimatePresence>
                        {notesList
                            .filter(
                                (note) =>
                                    note.title
                                        .toLowerCase()
                                        .includes(searchQuery) ||
                                    note.note
                                        .toLowerCase()
                                        .includes(searchQuery)
                            )
                            .map((item) => (
                                <NoteCard
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    note={item.note}
                                    handleEditShow={handleEditShow}
                                    theme={theme}
                                    colour={item.colour}
                                    date={item.date}
                                    bgColour={item.bgColour}
                                />
                            ))}
                    </AnimatePresence>
                </motion.main>
            </main>
        </>
    );
};

export default Home;

// [ { "id": "3f06f259-d4fb-485e-9d62-45f11d856ab6", "title": "Merry Christmas 🎅🏻", "note": "In a wonder daze, with that dearly gaze.\nLove \nPalak ❤️" }, { "id": "a280b23f-70c2-4eb1-994c-8cc7957b45bc", "title": "for her 💙", "note": "you look soo gorgeous in your white dress " }, { "id": "100df34a-9dd2-44b8-a7d2-de882cb534e3", "title": "Appreciation Note ", "note": "Love how you are putting all your efforts in this.\nmuch much success shining through your way." }, { "id": "d1527ade-eaa2-4bde-92dd-51c2a8af9eb9", "title": "Palak", "note": "is very grateful and blessed to have ayaansh:)" } ]
