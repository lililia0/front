<template>
    <nav class="main__nav">
        <h2 class="main__title">
            Мы открываем Россию заново! Вместе с вами!
        </h2>
        <div class="search-bar">
            <form @submit.prevent="searchQuery">
                <input v-model="search" type="text" placeholder="Search...">
                
            </form>
        </div>
        <ul class="main__subtitle">
            <li class="main__subtitle_">
                Последние новости
            </li>
            <li class="main__subtitle_">
                Среда, 12 Апреля
            </li>
        </ul>
        
    </nav>
     <div class="main__container">
        
        <div  v-for="(item, index) in filteredItems" :key="item.id" :class="'item items_' + index">
                <img :src="item.img" alt="">
                <p>{{ item.text }}</p>
        </div>
     
    
    
     </div>
     <div class="otzivi">
        <h2>Отзывы:</h2>
        <ul>
            <li v-for="comment in comments" :key="comment.id">
                <p>{{ comment.text }}</p>
                <p>Автор: {{ comment.author }}</p>
            </li>
        </ul>
        <h2>Добавить отзыв:</h2>
        <form @submit.prevent="addComment">
            <div>
                <label for="author">Автор:</label>
                <input type="text" id="author" v-model="newComment.author">
            </div>
            <div>
                <label for="text">Отзыв:</label>
                <textarea id="text" v-model="newComment.text"></textarea>
            </div>
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "MainPage",
    data() {
        
        return {
            search:"",
            items: [],
            comments: [
                {
                    id: 1,
                    text: "Отличный сервис",
                    author: "Иванов Иван"
                },
                {
                    id: 2,
                    text: "Не понравился",
                    author: "Петров Петр"
                }
            ],
            newComment: {
                id: null,
                text: "",
                author: ""
            }
        };
    },
    methods: {
        addComment() {
            if (this.newComment.text.trim() && this.newComment.author.trim()) {
                this.newComment.id = this.comments.length + 1;
                this.comments.push({ ...this.newComment });
                this.newComment.text = "";
                this.newComment.author = "";
            }
        },
        searchQuery() {
            this.$router.push({ path: '/', query: { string: this.search } })
        }
    },
    async mounted() {
        const newsData = (await axios.get('http://localhost:8001/main')).data
        this.items = newsData
    },
    computed: {
  filteredItems() {
    if (!this.search) {
      return this.items;
    }
    return this.items.filter(item => {
      return item.text.toLowerCase().includes(this.search.toLowerCase());
    });
  }
},
}
</script>

<style scoped>

.main__container {
    display: grid;
    justify-content: center;
    grid-template-columns:  493px 493px 493px;
    grid-template-rows: repeat(4, 1fr); /* две строки в каждом элементе */
    grid-gap: 20px;
    align-items: start;
    margin-bottom: 100px;
}
.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.images__grid {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.text {
    grid-row: 1;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 18px;
}

.items_0 {
    grid-column-start: 1;
    grid-column-end: 3;
}
.items_3 {
    grid-column-start: 2;
    grid-column-end: 4;
}
.items_4 {
    grid-column-start: 1;
    grid-column-end: 3  ;
}
 .main__nav{
    align-items: center;
     text-align: center;
 }
 .main__title{
     font-weight: 900;
     font-size: 24px;
     line-height: 42px;

 }
 .main__subtitle{
     display: flex;
     justify-content: space-between;
     padding-right: 75px;
     padding-left: 75px;
     font-size: 20px;
     line-height: 42px;
     color: rgba(23, 22, 22, 0.44);
     font-weight: 600;
 }
 .main__subtitle li{
     list-style-type: none;
 }
.otzivi {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-size: 18px;
}

.otzivi h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.otzivi ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.otzivi li {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f2f2f2;
}

.otzivi li p:first-of-type {
    font-size: 20px;
    margin-bottom: 10px;
}

.otzivi li p:last-of-type {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
}

.otzivi form {
    margin-top: 20px;
}

.otzivi form div {
    margin-bottom: 10px;
}

.otzivi label {
    display: block;
    font-size: 18px;
    margin-bottom: 5px;
}

.otzivi input[type="text"],
.otzivi textarea {
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.otzivi textarea {
    height: 150px;
}

.otzivi button[type="submit"] {
    background-color: #333333;;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.otzivi button[type="submit"]:hover {
    background-color: black;
}
.search-bar{
    display: flex;
    justify-content: center;
   
}
.search-bar input[type="text"] {
    display: flex;
    width: 15em;
    padding:10px;
    border: solid 1px;
    
}

</style>