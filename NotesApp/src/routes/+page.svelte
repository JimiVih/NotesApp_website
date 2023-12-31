<script>
    import {goto} from '$app/navigation';
    import {courses} from '$lib/courseStore.js'

    const buttonPressed = (e) => {
        if(e.target.id == "newNote" && $courses.length == 0){
            console.log("There are no courses available");
        }
        else{
            let buttonID = e.target.id;
            console.log(buttonID);

            goto(buttonID);
        }
        
    }
</script>

<div style="margin:auto;">
    <div id="menuButtons">
        <button id="newNote" on:click={buttonPressed}>Create new NOTE</button>
        <button id="newCourse" on:click={buttonPressed}>Create new COURSE</button>
        <button id="listNotes" on:click={buttonPressed}>List NOTES</button>
    </div>
</div>


