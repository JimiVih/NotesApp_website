<script>
    import {goto} from '$app/navigation'
    const gotoMenu = () =>{
        goto("/");
    }
</script>

<header>
    
        <h1 on:click={gotoMenu}> NotesApp</h1>
    
    
</header>
<main>
    <slot></slot>
</main>
<footer>
    ©NotesApp 2023
</footer>

<style>
    h1{
        width: 150px;
    }
    h1:hover{
        cursor: pointer;
    }
</style>