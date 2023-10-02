<template>
      <div v-bind:isModalVisible = "isModalVisible"></div>
<div class="NavPan">
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">

    <!--<router-link to="/" class="rl">
      <div class="basspunklogo" >
        <img class ="rndlogo" src="@/assets/basso_logo.png" alt="bass" height="120" width="120">
    </div>
    </router-link>-->

    <div class="auth">

      <!-- AUTH / REG -->
<div class="page">
  <div class="navbar-toggler">
  <button v-if="!isAuthenticated"
  @click="showModal"
  class="btn btn-secondary"
  >
  Авторизация
</button>
 <modal-auth
 :isModalVisible="isModalVisible"
 @close-modal="closeModal"
 />
<button v-if="!isAuthenticated"
  @click="showRegModal"
  type="button"
  class="btn btn-dark"
  >
  Регистрация
</button>
<modal-reg
:isModalRegVisible="isModalRegVisible"
@close-reg-modal="closeRegModal"
/>

      <!-- AUTH / REG -->
    <p class="balance" v-if="isAuthenticated">Баланс: 210535р</p>
    <p class="balance" v-if="!isAuthenticated">Баланс: ???</p>
    </div>

    </div>
    <button @click="logOut" v-if="isAuthenticated"
            class="btn-logout" aria-label="Close" id="close-modal"> Выход</button>
  </div>

  <button class="navbar-toggler"
  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
    aria-controls="offcanvasDarkNavbar"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark"
    tabindex="-1" id="offcanvasDarkNavbar"
    aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Привет, друг!</h5>
        <button type="button"
        class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
            ГЛАВНАЯ
            </router-link>
          </li>
          <li class="nav-item">
          <router-link class="nav-link" to="/donate">
            DONATE
        </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              КУПИТЬ МЕРЧУХУ
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <router-link class="nav-link"
              :to="{ name: 'merch', params: { type: 'footba' } }">
                <li class="nav-item"><a class="dropdown-item">ФУТБЫ</a></li>
              </router-link>
              <router-link class="nav-link"
              :to="{ name: 'merch', params: { type: 'krujka' } }">
                <li><a class="dropdown-item" href="#">КРУЖКИ</a></li>
              </router-link>
                <router-link class="nav-link"
                :to="{ name: 'merch', params: { type: 'znachok' } }">
                <li><a class="dropdown-item" href="#">ЗНАЧКИ</a></li>
              </router-link>
                <router-link class="nav-link"
                :to="{ name: 'merch', params: { type: 'nashivka' } }">
                <li><a class="dropdown-item" href="#">НАШИВКИ</a></li>
              </router-link>
              <li>
                <hr class="dropdown-divider">
              </li>
              <router-link class="nav-link" to="/merch1">
              <li><a class="dropdown-item" href="#">Что-то еще??</a></li>
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

</div>

</template>

<script>
/* eslint-disable */
import ModalAuth from './ModalAuth.vue';
import ModalReg from './ModalReg.vue';

export default {
  components: {
    ModalAuth, ModalReg,
  },
  data() {
    return {
      isModalVisible: false,
      isModalRegVisible: false,
      authToken: false,
    };
  },
  name: 'NavPan',
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showRegModal() {
      this.isModalRegVisible = true;
    },
    closeRegModal() {
      this.isModalRegVisible = false;
    },
    logOut() {


      //alert('au');
      this.$cookies.set("myCookie", null);
      //alert(this.$cookies.get('myCookie'));
      // Здесь мы устанавливаем куки с именем "myCookie" и значением "Значение вашего куки"
        this.cookieValue = null;
      this.$store.commit('setCookie', '');
      this.$store.commit('setAuthenticated', false);
      //localStorage.setItem('role', false);
      this.$store.commit('setRole', false);

      window.location.reload();
    },
  },
  
        created() {
          

         // alert(this.$cookies.get("myCookie"));
         // Здесь мы проверяем, есть ли куки с именем "myCookie"
        if (this.$cookies.get('myCookie') != 'null') {
        //this.$store.commit('setCookie', myCookie);
       // alert(this.$cookies.get(newCookies));
        this.$store.commit('setAuthenticated', true);
      }
        },
  computed: {
    isAuthenticated() {
      // Проверяем состояние аутентификации
      return this.$store.getters.isAuthenticated;
    },
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  color:#f3444d;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f3444d;
  text-decoration: none;
}

.btn {
  margin: 0 5px;
}

.offcanvas-title {
  color: rgb(148, 148, 148);
}

.auth {
  background-color: #3d2d34c2;
}

.balance {

  margin: 10px;
}

.btn-logout {
  width: 100px;
  height: 28px;
  border: 1px solid #000000;
  color:#7c7c7ccb;
  background-color: #2c2c2c7e;
  border-radius: 6px;
  position: absolute;
  right: 110px;
}

.container-fluid {
  display:flex;
  position: relative;
}

.page {
  position: absolute;
  top:0;
  right: 75px;
}

.navbar-toggler {
  height: 80px;
}

.balance {
  font-size: smaller;
}

.basspunklogo {
  position: absolute;
  top: -21px;
  left: 21px;
}

.rndlogo {
  border-radius: 50%;

}

@media screen and (max-width: 500px) {
  .page {
  position: absolute;
  top:100px;
  left:70px;
}
.btn-logout {
  position: absolute;
  top:140px;
  left:150px;
}

}

</style>
