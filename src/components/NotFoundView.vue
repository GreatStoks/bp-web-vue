<!-- eslint-disable linebreak-style -->
<template>
    <div class="notfound">
      <h1>Ошибка 404</h1>
      <p>Извините, страница не найдена.</p>
      <router-link to="/" class="rl">
    <a class="navbar-brand" href="#"><h2>НА<br>ГЛАВНУЮ</h2></a>
    </router-link>
    </div>
  </template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
export default {
    name: 'NotFound',
};
</script>

<style scoped>
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Занимает всю высоту видимой области окна браузера */
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8; /* Цвет фона */
}

a {
  text-decoration: none;
  color: #000000;
  text-align: center;
}


h1 {
  font-size: 36px;
  color: #333; /* Цвет текста */
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666; /* Цвет текста */
}
</style>