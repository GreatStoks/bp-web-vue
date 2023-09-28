<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <component :is="'script'"
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous">
    </component>

<div class="app">
    <router-view/>
</div>
<def-footer/>
</template>

<script>

import DefFooter from './components/DefFooter.vue';

export default {
  components: {
    DefFooter,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ec3838;
    }
  }
}

body {

  background: linear-gradient(90deg, rgba(27, 25, 25, 0.959) 20%,
  rgba(133, 110, 110, 0.966) 50%,
  rgba(196, 0, 0, 0.781) 80%, rgba(65, 20, 212, 0.952) 130%);  padding: 20px;
  background-attachment: fixed; /* Фиксированный фон */
  background-size: cover; /* Фон будет занимать всю высоту и ширину экрана */
  background-repeat: no-repeat; /* Фон не повторяется */
  color: #fff; /* Цвет текста на фоне */
}

.bd1 {
  background: linear-gradient(to bottom, #1f1f1f, #585858);
  background-attachment: fixed; /* Фиксированный фон */
  background-size: cover; /* Фон будет занимать всю высоту и ширину экрана */
  background-repeat: no-repeat; /* Фон не повторяется */
  color: #fff; /* Цвет текста на фоне */
}

.basspunklogo {
    margin-left:-2rem;
}

.navbar-brand {
  margin-left: 1rem;
}

.modal-backdrop fade shadow {
  display: none;
}

.page {
  background: #272727;
}

.modalq1 {
    padding: 15px;
    background: #0c0909bb;
    color: #fff;
    width: 350px;
    display: flex;
  justify-content:center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 14, 14, 0.808); /* Затемненный фон */
  z-index: 1;
    }

.modalq1_cont {
    display: flex;
  flex-direction: column; /* Элементы располагаются вертикально */
  align-items: center;
  top: 2100px;
}

label {
  margin: 1rem 0;
}

.concert-date, .concert-location, .concert_details {
    margin: 2rem;
}

.modal-shadow {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.39);
    }

.btn-close {
    margin-bottom: 1rem;
    float: right;
    background-color: rgba(211, 124, 124, 0.336);
}

@media screen and (max-width: 700px) {

      .basspunklogo {
        margin-left:0;
      }
      .bd1 {
  margin-top:13rem;
}

        }

  @media screen and (max-width: 677px) {

.modalq1 {
  margin-top:-100px;
}

  }

  @media screen and (max-width: 621px) {

.modalq1 {
  margin-top:-150px;
}

  }

</style>
