<template>
    <div class="app" @click="closeSidebar"> </div>
    <div :class="['sidebar', { 'sidebar-open': isOpen }]">
        <div class="container">
        <h2 class="title">News</h2>
        <nav class="nav">
            <ul class="nav-menu">
                <li><a href="#">Политика</a></li>
                <li><a href="#">Экономика</a></li>
                <li><a href="#">Наши проекты</a></li>
            </ul>
        </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
};
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: -400px;
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: left 0.5s ease-in-out;
    background-color: black;
}

.sidebar-open {
    left: -2rem;
}
.title {
   color: white;
    position: relative;
    left: 130px;
    font-size:2.5rem;


}
.container {
    display: flex;
    flex-direction: column;
    background-color: black;
}
ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.nav-menu {
    text-decoration: none;

}
li {
    text-decoration: none;
}
  nav {
      display: flex;
      justify-content: center;
      align-items: start;
      border-top:2px solid white;
      text-decoration: none;
  }
  a {
      text-decoration: none;
      color: white;
  }
    .nav-menu {
        font-size: 2rem;
    }
    .nav-menu li {
        margin-bottom: 2rem;
    }

</style>
