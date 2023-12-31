<script>
    import '../styles/global.css'
    import {goto} from '$app/navigation'
    const gotoMenu = () =>{
        goto("/");
    }
</script>

<header>
    
    <h1 on:click={gotoMenu} id="Title"> NotesApp</h1>
    
    
</header>
<main>
    <slot></slot>
</main>
<footer id="copyright">
    ©NotesApp 2023
</footer>


