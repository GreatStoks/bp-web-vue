    <!-- eslint-disable linebreak-style -->
<template>
<div class="bd1">
  <div class="main-container">
      <section class="concerts">
        <h1>Предстоящие мероприятия</h1>
        <post-item
    v-for="post in upcomingConcerts"
    :key="post.id"
    :post="post"
    />
      </section>
      <section class="concerts_past">
        <h2>Прошедшие события</h2>
        <post-item
    v-for="post in pastedConcerts"
    :key="post.id"
    :post="post"
    />
      </section>
  </div>
  </div>
</template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
import PostItem from './PostItem.vue';

export default {
 
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    computed: {
    upcomingConcerts() {
      const currentDate = new Date();
      return this.posts.filter(post => new Date(post.date) >= currentDate);
    },
    pastedConcerts() {
      const currentDate = new Date();
      return this.posts.filter(post => new Date(post.date) < currentDate);
    },
  },
}
</script>

<style scoped>

h1 {
  font-size: 36px;
  padding: 1rem;
  margin-top: 7rem;
  background: #362e2ead;  padding: 20px;
  border: 3px solid #ffffff44;
  border-radius: 10%/550%;
}

h2 {
    padding: 1rem;
}

/* Стили для раздела с концертами */
.concerts {

    font-size: large;
    
}

.concerts_past {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(165, 107, 199, 0.645) 17%, rgba(48, 30, 34, 0.706) 70%);
    font-size: large;
    margin: 1rem;
}

.main-container {
  padding: 0 0 5px 0;
  margin: 1rem;
}


</style>