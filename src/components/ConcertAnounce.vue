<!-- eslint-disable linebreak-style -->

<template>
            <post-form
        @create="createPost"
        />
        <post-list
        :posts="posts"
        />
</template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import jsCookie from 'js-cookie';

export default {
    components: {
    PostForm, PostList,
  },
    data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    createPost(post) {
        this.posts.push(post);
    },


    getPost() {
      var id,
      imgurl,
      date,
      place,
      info;

      var requestData = { id, imgurl, date, place, info};
      fetch("http://localhost:7137/api/getPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
      if (Array.isArray(data)) { // Проверка на массив
        
        data.forEach(post => {
          this.posts.push(post);
        });
      } else {
        console.error("Сервер вернул неправильный формат данных.");
      }
        })
        .catch(error => {
          console.error("Ошибка при отправке запроса:", error);
        });
      }

  },
    name: 'ConcertAnounce',
    
    computed: {
    upcomingConcerts() {
      const currentDate = new Date();
      return this.posts.filter(concert => new Date(post.post_data) >= currentDate);
    },
    pastedConcerts() {
      const currentDate = new Date();
      return this.posts.filter(concert => new Date(post.post_data) < currentDate);
    },
  },

  };


</script>

<style scoped>

h1 {
  font-size: 36px;
  padding: 1rem;
  margin-top: 5rem;
}

h2 {
    padding: 1rem;
}

h2 {
  font-size: 24px;
  color: #ffffff; /* Цвет заголовка раздела */
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff; /* Цвет фона каждого анонса концерта */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); /* Тень для каждого анонса концерта */
}

</style>