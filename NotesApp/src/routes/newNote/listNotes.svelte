<script>
    import {notes} from '$lib/noteStore.js';
    import Note from './note.svelte';
    import Course from '../newCourse/course.svelte';
    import {courses} from '$lib/courseStore.js';

    let id;
    let labelElement;



    
</script>

<div>
    <label for="courses" style="display: flex; margin-bottom:20px;">
        <select name="courses" id="courseLabel" contenteditable="true" bind:value={id} bind:this={labelElement}>
            <option value="0">All</option>
            {#each $courses as course}
                <Course {...course}/>
            {/each}
        </select>
    </label>
    <div style="width: 500px;">
        {#each $notes as note}

            {#if id == 0}
            
                <Note {...note}/> 
            {/if}
            {#if note.courseId == id && id != 0}
                  <Note {...note}/> 
            {/if}

            {:else}
                
            
        {/each}
    </div>

</div>