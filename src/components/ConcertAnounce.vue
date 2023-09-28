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

export default {
    components: {
    PostForm, PostList,
  },
    data() {
    return {
      posts: [
        {
          id: 1,
          preview_url: 'https://img.gazeta.ru/files3/188/17124188/shutterstock_59594140-pic_32ratio_1200x800-1200x800-93562.jpg',
          post_data: '2023-09-11',
          post_title: 'Местоположение концерта 1',
          post_bod: 'Дополнительная информация о концерте 1',
          preview: '/nightclub.jpg',
        },
        {
          id: 2,
          preview_url: 'https://img.gazeta.ru/files3/188/17124188/shutterstock_59594140-pic_32ratio_1200x800-1200x800-93562.jpg',
          post_data: '2023-09-05',
          post_title: 'Местоположение концерта 2',
          post_bod: 'Дополнительная информация о концерте 2',
          preview: '/street.jpg',
        },
        {
          id: 3,
          preview_url: 'https://img.gazeta.ru/files3/188/17124188/shutterstock_59594140-pic_32ratio_1200x800-1200x800-93562.jpg',
          post_data: '2023-09-11',
          post_title: 'Местоположение концерта 3',
          post_bod: 'Дополнительная информация о концерте 3',
          preview: '/street.jpg',
        },
        // Добавьте информацию о других ближайших концертах
      ],
    };
  },
  methods: {
    createPost(post) {
        this.posts.push(post);
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