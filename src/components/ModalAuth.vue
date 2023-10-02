<!-- eslint-disable linebreak-style -->
<template>
    <div
    v-if="isModalVisible"
    class="modal-shadow"
    @keydown.esc="closeModal"
    >
    <div class="modalq1">
        <div class="modalq1_cont">
            <button
            @click="closeModal"
            class="btn-close" aria-label="Close" id="close-modal"> &times;</button>
            <h2>Вход в систему</h2>
            <form @submit.prevent="submitForm">
                <label for="auth_username">Имя пользователя:<br>
                <input type="text" v-model="username"
                id="auth_username" name="auth_username" required><br><br>
                </label>
                <label For="auth_password">Пароль:<br>
                <input type="password" v-model="password"
                id="auth_password" name="auth_password" required><br><br>
                </label>
                <br>
                <button type="submit" class="btn btn-dark">Войти</button>
            </form>
        </div>
    </div>
    </div>
</template>
 <!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
import axios from 'axios';
import VueCookies from 'vue-cookies'

    export default {
        data() {
            return {
                username: '',
                password: '',
                cookieValue: null,
            }
        },
        name: "ModalAuth",
        methods: {
            closeModal: function () {
                this.$emit('closeModal');
            },

        async submitForm(event) {


       // this.$cookies.set("myCookie", this.username);
      // Здесь мы устанавливаем куки с именем "myCookie" и значением "Значение вашего куки"
        //this.cookieValue = this.username;

        // Проверка логина и пароля, например, на стороне сервера
        if (this.username === this.$store.getters.getAdUs && this.password === this.$store.getters.getAdPa)
        {
          alert('da');
        this.$cookies.set('myCookie', this.username);
        this.$store.commit('setAuthenticated', true);
        //this.$store.commit('setRole', true);
        // Затем перенаправьте пользователя на страницу Dashboard
        this.closeModal();
        this.$router.push({path: '/'});
        }

        else  {
        
        var login = this.username;
        var password = this.password;

        var requestData = { login, password};


      fetch("http://localhost:7137/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          //localStorage.setItem('authToken', this.username);
          this.$store.commit('setAuthenticated', true);
          this.$store.commit('setRole', false);
          this.$cookies.set('myCookie', this.username);
        //this.$store.commit('setRole', true);
        // Затем перенаправьте пользователя на страницу Dashboard
        this.closeModal();
        this.$router.push({path: '/'});
          // Обработка ответа от сервера здесь
        })
        .catch(error => {
          console.error("Ошибка при отправке запроса:", error);
        });




        // Затем перенаправьте пользователя на страницу Dashboard
        //this.closeModal();
        //this.$router.push({path: '/', query: {authenticated: true}});

      }
        },
        },

        props: {
            isModalVisible: Boolean,
        },
    }
</script>
