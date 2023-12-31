<script>
    import {notes} from '$lib/noteStore.js';
    import { each } from 'svelte/internal';
    import {onMount} from 'svelte';
    import {courses} from '$lib/courseStore.js';
    import Course from '../newCourse/course.svelte';
    
    let noteAdded = false;
    
    let labelElement;
    let noteText = "";
    let noteId;


    let courseName;
    let storedCourseId;
    let courseId = null;
    let timeStamp;

    let messages;

    let messageBoxStyle = "border: solid 2px gray; margin-top: 20px; width: 400px; height: 100px; vertical-align:top; overflow-y:scroll; word-wrap: break-word;"
    

    function checkIfnoteAdded() {
        {
        if(noteAdded){
            courseId = storedCourseId;
            console.log("Can't Change course");
        }
        else{
            storedCourseId = courseId;
            console.log("course changed");
        }
    };
    }

    function SaveNewNote() {
        noteAdded = true;
        if(noteText != ""){

            if($notes.length != undefined){
                noteId = $notes.length;
            }
            if($notes.length == 0){
                noteId = 0;
            }
            

            courseName = labelElement.options[labelElement.selectedIndex].innerHTML;
            
            const date = new Date();
            let day = date.getDate().toString().padStart(2, '0');
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let year = date.getFullYear().toString().slice(-2);
            let hour = date.getHours().toString();
            let minute = date.getMinutes().toString();
            console.log(day, month, year);
            timeStamp = "Date: " + day + "." + month + "." + year + " Time: " + hour + ":" + minute;

            let note = {noteId, noteText, courseId, courseName, timeStamp};
            notes.add(note);

            const message = document.createElement('p');
            message.style = messageBoxStyle;
            message.textContent = noteText;
            messages.appendChild(message);

            noteText = '';

            

            console.log(note);
            console.log(notes.length);
        }
    }
</script>

<svelte:document/>

<div>
    <label for="courses" style="display: flex; margin-bottom:20px;">
        <select name="courses" id="courseLabel" contenteditable="true" on:click={checkIfnoteAdded} bind:value={courseId} bind:this={labelElement}>
            {#each $courses as course}
                <Course {...course}/>
            {/each}
        </select>
    </label>
    
    <textarea name="noteTextArea" id="noteArea" cols="30" rows="10" bind:value={noteText}></textarea>

    <button id="saveNote" on:click={SaveNewNote}>Save</button>
    <button id="Back">Back</button>

    <div id="messages" bind:this={messages}>

    </div>
</div>



<style>
    #messages{
        
    }

</style>