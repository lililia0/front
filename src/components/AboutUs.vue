<!-- max-width: calc(1436px + 3rem);
padding: 0 1.5rem;
margin: 0 auto; -->
<template>
<div class="container">
        <div class="main"> 
    <div class='title'> 
        <h1> О проекте </h1>
    </div> 


   
        <div v-for="item in items" :key="item.id">
        <h2> {{item.title}} </h2>
        <p class="text">     
            {{item.text}}
        </p>
    </div>
    </div>
</div>



    </template>

    <script>
   import axios from "axios";

export default {

    name: "AboutUs",
    data(){
        return{
            items: [],

        }
    },
    async mounted() {
        const about = (await axios.get('http://localhost:8001/about')).data
        this.items = about
    },
}
</script>

<style scoped> 
.container {
   

    background-size:cover;
    margin-bottom:5rem;
}
.title {
    border-bottom: 2px solid gray;
    color : #181818;
}
.main {
    max-width: calc(1436px + 3rem);
padding: 0 1.5rem;
margin: 0 auto;
background-color:#fff;

}


</style>