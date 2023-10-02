<!-- eslint-disable linebreak-style -->
<template>

  <form @submit.prevent v-if="isAdmin">
    <div class="card" style="width: 18rem;">
        <div>create post</div>
        <input v-model="post.preview_url" class="imgpost_url">
        <a href="#" class="btn" @click="test_url">test url</a>
  <div v-if="isImageValid">
  <img :src="post.preview_url" class="card-img-top" alt="lglglg">
  </div>
  <div class="card-body">
    <input v-model="post.post_data" class="card-data" placeholder="2025-07-23">
    <input v-model="post.post_title" class="card-title" placeholder="Место проведения">
    <input v-model="post.post_body" class="card-text" placeholder="Инфо">
    <button
    class="btn btn-primary"
    @click="createPost"
    >ОПУБЛИКОВАТЬ ПОСТ</button>
  </div>
</div>
</form>

</template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
export default {
  name: 'PostForm',
  data() {
    return {
      post: {
        preview_url: '',
        post_data: '',
        post_title: '',
        post_body: '',
      },
      isValidDate: true,
      isImageValid: false,
    }
  },
  methods: {
    validateDate() {
      const datePattern = /^(?!0000)[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
      this.isValidDate = datePattern.test(this.post.post_data);
    },
    createPost() {
    this.validateDate();
    if (!this.isValidDate)
    {
      alert('Введите корректную дату');
    }
    else
    {
    //this.post.id = Date.now();
    this.$emit('create', this.post)

    var imgurl = this.post.preview_url;
    var date = this.post.post_data;
    var place = this.post.post_title;
    var info = this.post.post_body;

    var requestData = { imgurl, date, place, info};
    fetch("http://localhost:7137/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Обработка ответа от сервера здесь
        })
        .catch(error => {
          console.error("Ошибка при отправке запроса:", error);
        });






    this.post = {
      preview_url: '',
        post_data: '',
        post_title: '',
        post_body: '',
    }
    }},
    test_url() {
      // Проверка корректности URL картинки
      const image = new Image();
      image.src = this.post.preview_url;

      image.onload = () => {
        // Картинка успешно загружена
        this.isImageValid = true;
        // Дополнительные действия при успешной загрузке
      };

      image.onerror = () => {
        // Картинка не загрузилась
        this.isImageValid = false;
        // Дополнительные действия при ошибке загрузки
        alert('Ссылка на картинку недействительна');
      };
    },
  },
  computed: {
    isAdmin() {
      console.log(this.$adpa);
      if (this.$store.getters.getAdUs === $cookies.get('myCookie')) return 1;
    },
    isAuthenticated() {

      return this.$store.getters.isAuthenticated;
    },
  }
};
</script>

<style scoped lang="less">
p {
  color:#f3444d;
}

.card {
  margin-top:10rem;
}

</style>