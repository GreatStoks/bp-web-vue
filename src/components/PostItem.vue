    <!-- eslint-disable linebreak-style -->
<template>
        <div class="post">
          <ul class="conc_table">
          <!-- Список анонсов ближайших концертов -->
 <!--        <li v-for="post in upcomingConcerts" :key="post.id" class="conc_container"> -->
            <div class="concert-preview">
                <img alt="lglglg" :src="post.imgurl" height="100" width="100">
            </div>
            <div class="concert-date">{{ post.date }}</div>
            <div class="concert-location"><b>{{ post.place }}</b></div>
            <div class="concert-details">{{ post.info }}</div>
 <!--         </li>    -->
        </ul>
    </div>
</template>
    <!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */

export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    
}
</script>

<style scoped>
.conc_table {
    color: #000000;
    font-size: 24px;
  padding: 1rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.979) 80%, rgb(100, 100, 100) 150%);
  border: 3px solid #000000;
}

h1 {
  font-size: 36px;
  padding: 1rem;
  margin-top: 5rem;
}

h2 {
    padding: 1rem;
}


.conc_table {
    font-size: large;
    margin: 1rem;
    background-color: #ffffff;
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
  border: 1px solid #b33f3f;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff; /* Цвет фона каждого анонса концерта */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); /* Тень для каждого анонса концерта */
}

.post {
  padding: 1rem;
}

</style>