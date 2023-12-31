import { writable } from "svelte/store";
import { browser } from "$app/environment";



function createCourse() {
	

	console.log("Create new course");
    	// @ts-ignore
	const { subscribe, set, update } = writable([]);

    const add_course = (course) =>{
        update((courses) => {
            let id = notes.length;
            return [...courses, {id, ...course}];
        });
    };

	return {
		subscribe,
		// @ts-ignore
		add: (course) => update((courses) => [...courses, course]),
		reset: () => set([])
	};
}

export const courses = createCourse();