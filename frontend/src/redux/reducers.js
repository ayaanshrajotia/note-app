import { createReducer } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    notesList: localStorage.getItem("noteslist")
        ? JSON.parse(localStorage.getItem("noteslist"))
        : [
              {
                  bgColour: "bg-yellow-50",
                  colour: "border-yellow-400",
                  date: "NA",
                  id: "a04730a5-2ae7-4121-8b48-c58de8494d11",
                  note: "Start writing your notes here",
                  title: "Welcome to Notebook",
              },
          ],
    noteForEdit: [],
    searchQuery: "",
};

export const notesReducer = createReducer(initialState, {
    addNotes: (state, action) => {
        const { id, title, note, colour, date, bgColour } = action.payload;

        if (title || note) {
            state.notesList.unshift({
                id,
                title,
                note,
                colour,
                date,
                bgColour,
            });

            toast("Note added!", {
                icon: "📒",
                style: {
                    borderRadius: "20px",
                    background: "#333",
                    color: "#fff",
                },
            });
        } else if (!title && !note) {
            toast("Empty Note!", {
                icon: "👎🏻",
                style: {
                    borderRadius: "20px",
                    background: "#333",
                    color: "#fff",
                },
            });
        }

        localStorage.setItem(
            "noteslist",
            JSON.stringify(state.notesList.map((item) => item))
        );
    },

    removeNotes: (state, action) => {
        state.notesList = state.notesList.filter(
            (i) => i.id !== action.payload
        );

        localStorage.setItem(
            "noteslist",
            JSON.stringify(state.notesList.map((item) => item))
        );
    },

    sendNote: (state, action) => {
        state.noteForEdit.pop();
        state.noteForEdit.push(action.payload);
    },

    editNote: (state, action) => {
        const isPayloadNoteExisted = state.notesList.find(
            (i) => i.id === action.payload.id
        );

        if (state.noteForEdit[0].id === action.payload.id) {
            isPayloadNoteExisted.title = action.payload.title;
            isPayloadNoteExisted.note = action.payload.note;
            isPayloadNoteExisted.colour = action.payload.colour;
            isPayloadNoteExisted.date = action.payload.date;
            isPayloadNoteExisted.bgColour = action.payload.bgColour;
            state.noteForEdit[0].title = action.payload.title;
            state.noteForEdit[0].note = action.payload.note;
            state.noteForEdit[0].colour = action.payload.colour;
            state.noteForEdit[0].date = action.payload.date;
            state.noteForEdit[0].bgColour = action.payload.bgColour;
        }

        localStorage.setItem(
            "noteslist",
            JSON.stringify(state.notesList.map((item) => item))
        );
    },

    sortNotesByAscending: (state, action) => {
        state.notesList.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        localStorage.setItem(
            "noteslist",
            JSON.stringify(state.notesList.map((item) => item))
        );
    },

    sortNotesByDescending: (state, action) => {
        state.notesList.sort((a, b) => {
            let fa = a.title.toLowerCase(),
                fb = b.title.toLowerCase();

            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        });

        localStorage.setItem(
            "noteslist",
            JSON.stringify(state.notesList.map((item) => item))
        );
    },

    searchQuery: (state, action) => {
        state.searchQuery = action.payload;
    },
});
