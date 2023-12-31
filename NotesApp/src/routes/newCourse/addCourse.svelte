<script>
    import {courses} from '$lib/courseStore.js'

    let name = "";
    let id = 0;

    let messages;
    

    function SaveNewCourse() {
        if(name != ""){

            if($courses.length == undefined){
                id = 1;
            }
            if($courses.length != undefined){
                id = $courses.length + 1;
            }
            
            let course = {id, name};
            courses.add(course);

            const message = document.createElement('p');
            message.textContent = "Opintojako " + "'" + name + "'" + " lisätty id:llä " + id;
            messages.appendChild(message);

            name = "";
            id++;
            console.log(course);

            
        }
    }
</script>

<div>
    
    <textarea name="noteTextArea" id="noteArea" cols="30" rows="10" bind:value={name}></textarea>

    <button id="saveNote" on:click={SaveNewCourse}>Save</button>
    <button id="Back">Back</button>

    <div id="messages" bind:this={messages}>

    </div>
</div>