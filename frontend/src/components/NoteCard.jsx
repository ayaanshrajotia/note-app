import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "@material-tailwind/react";

const NoteCard = ({
    id,
    title,
    note,
    handleEditShow,
    theme,
    colour,
    date,
    bgColour,
}) => {
    const dispatch = useDispatch();
    const [confirmDeleteBox, setConfirmDeleteBox] = useState(false);

    const copyToClipboard = (text) => navigator.clipboard.writeText(text);

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

    const handleShare = () => {
        copyToClipboard(`${title} - ${note}`);
        toast("Note copied!", {
            icon: "✌🏻",
            style: {
                borderRadius: "20px",
                background: "#333",
                color: "#fff",
            },
        });
    };

    const handleEdit = () => {
        dispatch({
            type: "sendNote",
            payload: { id, title, note, colour, date, bgColour },
        });
        handleEditShow(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
            exit={{ opacity: 0, scale: 0 }}
            className={`note-card max-w-[330px] md:max-w-[400px] h-fit border-t-8 ${colour} rounded-lg px-3 flex flex-col shrink-0 shadow-md z-40 m-6 mx-2 ${bgColour} :bg-[#2b2b2a] overflow-x-hidden`}
        >
            <h1 className="card-text text-[#2f2f2e] font-[Alexandria] font-[600] pt-3 text-3xl px-3 text-ellipsis w-[376px] whitespace-nowrap overflow-y-hidden :text-[#e5e5e5]">
                {title}
            </h1>
            <p className="font-[Alexandria] text-[#838894] px-3 pt-2 font-bold text-sm md:text-lg z-20 :text-[#9f9f9f]">
                {date ? date : "NA"}
            </p>
            <section
                className={`${
                    theme === "dark" ? "note-page-dark" : "note-page"
                } z-10 rotate-180 w-[100%] h-[240px] relative -mt-4`}
            >
                <textarea
                    readOnly
                    className="w-[100%] h-[222px] px-3 text-[#2f2f2e] z-10  outline-none resize-none bg-transparent overflow-hidden rotate-180 pt-[8px] leading-[31px] text-[16px] font-[Alexandria] font-[400] :text-[#efefef]"
                    value={note}
                ></textarea>
            </section>
            <div className="h-[1px] w-[100%] bg-[#b4b3b3] dark:bg-[#676767] "></div>
            <section className="flex gap-6 my-4 px-2 justify-end items-center">
                <Tooltip
                    content="Edit"
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
                        className="edit-button"
                        onClick={() => handleEdit()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            className=" w-6 h-6 cursor-pointer stroke-[#2f2f2e] dark:stroke-[#676767] dark:hover:stroke-dark-bg hover:fill-blue-300  "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    </motion.button>
                </Tooltip>

                <Tooltip
                    content="Copy"
                    placement="bottom"
                    className="bg-[#fefefe] font-[Alexandria] mt-2 border-[1px] border-[#676767] text-[#2f2f2e] rounded-md text-sm p-1 px-[6px] z-[999]"
                >
                    {/* <CopyToClipboard text={`${title} - ${note}`}> */}
                    <motion.button
                        className="share-button"
                        whileHover={{ scale: 1.15 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        onClick={handleShare}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer stroke-[#2f2f2e] hover:fill-violet-300 dark:stroke-[#676767] dark:hover:stroke-dark-bg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                            />
                        </svg>
                    </motion.button>
                    {/* </CopyToClipboard> */}
                </Tooltip>

                <motion.button className="delete-button relative z-[100]">
                    <motion.div
                        className={`speech-bubble absolute rounded-lg h-fit w-fit p-[4px] bg-white text-[#2f2f2e] border-note-yellow border-2 z-[100] overflow-visible font-[Alexandria] bottom-10 right-[-15px] after:border-t-note-yellow cursor-pointer duration-200 ease-linear ${
                            !confirmDeleteBox ? "hidden" : ""
                        }`}
                        onClick={() => handleDelete()}
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
                                className="w-6 h-6 cursor-pointer stroke-[#2f2f2e] dark:stroke-[#676767] dark:hover:stroke-dark-bg hover:fill-red-300  "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </motion.div>
                    </Tooltip>
                </motion.button>
            </section>
        </motion.div>
    );
};

export default NoteCard;

// bg-[#fbfafb]

// oh! to the chills and shivers of blissful winter mornings, cuddled up in blankets and sipping hot cup of tea.
