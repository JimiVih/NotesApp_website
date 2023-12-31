import { writable } from "svelte/store";
import { browser } from "$app/environment";



export const userId = writable(browser && localStorage.getItem("userId") || "webjeda")
userId.subscribe((val) => {
  if (browser) return (localStorage.userId = val)
})

function createNote() {
	

	console.log("Create new note");
    	// @ts-ignore
	const { subscribe, set, update } = writable([]);

    const add_note = (note) =>{
        update((notes) => {
            let id = notes.length;
            return [...notes, {id, ...note}];
        });
    };

	const removeNote = (givenId) => {
		
		;
	  };

	return {
		subscribe,
		// @ts-ignore
		add: (note) => update((notes) => [...notes, note], console.log(note, " add")),
		reset: () => set([]),
		remove: (givenId) => update((notes) => notes.filter((note) => note.noteId !== givenId)),
	};
}

export const notes = createNote();

// export const removeItem = (givenId) =>{
// 	update((notes) =>{
// 		return 
// 	})
// };






