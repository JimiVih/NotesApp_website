<script>
    import {notes} from '$lib/noteStore.js';

    export let noteId;
    export let courseId;
    export let noteText;
    export let courseName;
    export let timeStamp;

    const deleteNote = () =>{
        
        notes.remove(noteId);
        console.log(noteId, " note deleted?");
        
    }

</script>

<div class="noteBox">
    <button id={noteId} class="deleteButton" on:click={deleteNote}>X</button>
    <h3>{timeStamp} {courseName} (id {courseId})</h3>
    <p>{noteText}</p>
</div>

<style>

    .deleteButton{
        transform: translateX(470px);
        
    }

    .noteBox{
        display: inline-block;
        border: solid 2px gray;
        margin-top: 20px;
        width: 500px;        
    }
    .noteBox h3{
        transform: translateY(-40px);
        width: 450px;
    }
</style>