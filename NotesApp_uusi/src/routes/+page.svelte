<script>
    import {goto} from '$app/navigation';

    const buttonPressed = (e) => {
        let buttonID = e.target.id;
        console.log(buttonID);

        goto(buttonID);
    }
</script>


<button id="newNote" on:click={buttonPressed}>Create new NOTE</button>
<button id="newCourse" on:click={buttonPressed}>Create new COURSE</button>
<button id="listNotes" on:click={buttonPressed}>List NOTES</button>
