<template>
    <div class="container">


        <img  src="@/assets/icons/Выдвижной%20сайдбар%20.svg" alt="Открыть сайдбар" @click="toggleSidebar" class="sidebar">
        <sidebar :is-open="isSidebarOpen" />
        <a  href="/MainPage" class="logo">

            News
        </a>
        <li class="nav-menu">
            <a href="#" class="nav">
                РФ
            </a>

            <a href="#" class="nav">
                СНГ
            </a>

            <a href="/about-us" class="nav">
                О НАС
            </a>

            <a href="https://gitlab.com/users/sign_in" class="nav">
                GIT HUB
            </a>
            <a href="/userpage" class="nav">
                ЛИЧНЫЙ КАБИНЕТ
            </a>
        </li>
        <div class="search-bar">
            <input type="text" placeholder="Поиск...">
            <button type="submit"><i class="fa fa-search"></i></button>
        </div>


        <a href="#" class="user">
            Илья Михайлов
        </a>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
export default {
    name: 'MyHeader',
    components: {
        Sidebar,
    },
    data() {
        return {
            isSidebarOpen: false,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
    closeSidebar(event) {
        if (this.isSidebarOpen && event.target.closest('.sidebar') === null) {
            this.isSidebarOpen = false
        }
    }

};
</script>

<style scoped>
.container {
    background-color: black;
    display: flex;
   
}

.sidebar {
    display: flex;
    justify-content: center;
    margin-left: 1rem;

}

.logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    margin-left: 2rem;
    color: white;
    width: 10rem;
    font-size: 2rem;
    text-decoration: none;

}

.nav-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90rem;


}

.nav {
    text-decoration: none;
    color: white;
}


.user {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 10rem;
    text-decoration: none;
}
.nav-menu :before {

    display: block;
    width: 1px;
    height: 80%;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 10%;
}
.search-bar {
    position: relative;
    top: 0.5rem;
    right: 4rem;
    display: flex;
    align-items: en;
    height: 30px;
    background-color: #f2f2f2;
    border-radius: 20px;
    overflow: hidden;
}

.search-bar input[type="text"] {
    display: flex;
    justify-content: end;
    padding:10px;
    border: none;
    outline: none;
}


</style>