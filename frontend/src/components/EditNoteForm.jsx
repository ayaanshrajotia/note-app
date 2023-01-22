import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Tooltip } from "@material-tailwind/react";

const EditNoteForm = ({ handleEditShow }) => {
    const dispatch = useDispatch();
    const { noteForEdit } = useSelector((state) => state.notes);
    const id = noteForEdit[0].id;
    const [title, setTitle] = useState(noteForEdit[0].title);
    const [note, setNote] = useState(noteForEdit[0].note);
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);
    const [colour, setColour] = useState(noteForEdit[0].colour);
    const [bgColour, setBgColour] = useState(noteForEdit[0].bgColour);
    const [date, setDate] = useState(noteForEdit[0].date);

    const getDate = () => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day} / ${month} / ${year}`;
        return currentDate;
    };

    const newDate = getDate();

    const handleSubmit = () => {
        setDate(newDate);

        dispatch({
            type: "editNote",
            payload: { id, title, note, colour, date, bgColour },
        });
        handleEditShow(false);

        toast("Note Saved!", {
            icon: "✅",
            style: {
                borderRadius: "20px",
                background: "#333",
                color: "#fff",
            },
        });
    };

    const handleDeleted = (cond) => {
        handleEditShow(cond);
    };

    const handleDelete = () => {
        dispatch({
            type: "removeNotes",
            payload: id,
        });

        toast("Note deleted!", {
            icon: "❌",
            style: {
                borderRadius: "20px",
                background: "#333",
                color: "#fff",
            },
        });
    };

    const keyHandler = (e) => {
        if (e.key === "Escape") {
            handleEditShow(false);
        } else if ((e.metaKey || e.ctrlKey) && e.code === "Enter") {
            handleSubmit();
        }
    };

    return (
        <motion.div
            onKeyDown={(e) => keyHandler(e)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`note-card  max-w-[1000px] h-[600px] border-t-8 ${colour} rounded-lg py-3 px-3 flex flex-col shadow-2xl ${bgColour} justify-center fixed z-[101] mx-4 lg:mx-auto my-auto top-0 bottom-0 left-0 right-0 dark:bg-[#2b2b2a] dark:shadow-none`}
        >
            <div className="flex justify-start">
                <input
                    autoFocus
                    className="card-text text-note-text font-[Alexandria] font-[600] text-4xl px-3 outline-none resize-none bg-transparent overflow-hidden h-[42px] text-ellipsis w-full whitespace-nowrap overflow-y-hidden dark:text-[#f5f5f5] dark:placeholder-[#676767]"
                    name=""
                    value={title}
                    placeholder={"title here"}
                    id=""
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button onClick={() => handleEditShow(false)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-8 h-8 dark:stroke-[#676767] "
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <p className="font-[Alexandria] text-[#838894] dark:text-[#9f9f9f] px-3 pt-2 font-bold text-lg z-20">
                {date ? date : "NA"}
            </p>
            <section className="z-10 rotate-180 w-[100%] h-[100%] relative">
                <textarea
                    className="w-[100%] h-[442px] px-3 text-note-text z-10  outline-none resize-none bg-transparent overflowy-scroll rotate-180 pt-[4px] leading-[31px] text-[18px] font-[Alexandria] font-[400] dark:text-[#f5f5f5] dark:placeholder-[#676767]"
                    name=""
                    value={note}
                    id=""
                    placeholder="your thoughts here"
                    onChange={(e) => setNote(e.target.value)}
                ></textarea>
            </section>
            <div className="h-[1px] w-[100%] bg-[#676767]"></div>
            <section className="flex gap-6 px-2 justify-between items-center mt-3">
                <section className="flex gap-3 px-2 items-center justify-evenly">
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="h-6 w-6 bg-red-400 rounded-full cursor-pointer"
                        onClick={() => {
                            setColour("border-red-400");
                            setBgColour("bg-red-50");
                        }}
                    ></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="h-6 w-6 bg-blue-400 rounded-full cursor-pointer"
                        onClick={() => {
                            setColour("border-blue-400");
                            setBgColour("bg-blue-50");
                        }}
                    ></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="h-6 w-6 bg-green-400 rounded-full cursor-pointer"
                        onClick={() => {
                            setColour("border-green-400");
                            setBgColour("bg-green-50");
                        }}
                    ></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="h-6 w-6 bg-violet-400 rounded-full cursor-pointer"
                        onClick={() => {
                            setColour("border-violet-400");
                            setBgColour("bg-violet-50");
                        }}
                    ></motion.div>
                    <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        className="h-6 w-6 bg-yellow-400 rounded-full cursor-pointer"
                        onClick={() => {
                            setColour("border-yellow-400");
                            setBgColour("bg-yellow-50");
                        }}
                    ></motion.div>
                </section>
                <section className="flex gap-6 px-2 justify-between items-center">
                    <Tooltip
                        content="Save"
                        placement="bottom"
                        className="bg-[#fefefe] font-[Alexandria] mt-2 border-[1px] border-[#676767] text-[#2f2f2e] rounded-md text-sm p-1 px-[6px]"
                    >
                        <motion.button
                            whileHover={{ scale: 1.15 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                            }}
                            className="save-button"
                            onClick={() => {
                                handleSubmit();
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 cursor-pointer dark:stroke-[#676767] dark:hover:stroke-dark-bg hover:fill-green-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </motion.button>
                    </Tooltip>

                    <div className="delete-button relative">
                        <motion.div
                            className={`speech-bubble absolute rounded-lg h-fit w-fit p-[6px] font-semibold bg-white border-note-yellow border-4 z-[100] font-[Alexandria] bottom-9 right-[-18px] after:border-t-note-yellow cursor-pointer ${
                                !confirmDeleteBox ? "hidden" : ""
                            }`}
                            onClick={() => {
                                handleDelete();
                                handleDeleted();
                            }}
                        >
                            Sure?
                        </motion.div>
                        <Tooltip
                            content="Delete"
                            placement="bottom"
                            className="bg-[#fefefe] font-[Alexandria] mt-2 border-[1px] border-[#676767] text-[#2f2f2e] rounded-md text-sm p-1 px-[6px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10,
                                }}
                                className="delete-button"
                                onClick={() => {
                                    setConfirmDeleteBox(!confirmDeleteBox);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-7 h-7 cursor-pointer dark:stroke-[#676767] dark:hover:stroke-dark-bg hover:fill-red-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </motion.div>
                        </Tooltip>
                    </div>
                </section>
            </section>
        </motion.div>
    );
};

export default EditNoteForm;

// bg-[#fbfafb]

// oh! to the chills and shivers of blissful winter mornings, cuddled up in blankets and sipping hot cup of tea.
