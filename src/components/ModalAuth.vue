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

    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        name: "ModalAuth",
        methods: {
            closeModal: function () {
                this.$emit('closeModal');
            },

        submitForm(event) {

        // Проверка логина и пароля, например, на стороне сервера
        if (this.username === 'root' && this.password === 'root')
        {
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem('role', true);
        this.$store.commit('setAuthenticated', true);
        this.$store.commit('setRole', true);
        // Затем перенаправьте пользователя на страницу Dashboard
        this.closeModal();
        this.$router.push({path: '/', query: {authenticated: true}});
        }

        else if (this.authenticate(this.username, this.password))  {
        // Если логин и пароль верны, сохраните их в localStorage
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);
        localStorage.setItem('role', false);
        this.$store.commit('setAuthenticated', true);
        this.$store.commit('setRole', false);
        // Затем перенаправьте пользователя на страницу Dashboard
        this.closeModal();
        this.$router.push({path: '/', query: {authenticated: true}});

      } else {
        alert('Неверный логин или пароль');
      }
        },
        authenticate(username, password) {
      // Здесь вы проверяете, совпадают ли введенные данные с зарегистрированными
      // в локальном хранилище (или на сервере в реальном приложении)
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      return username === storedUsername && password === storedPassword;
    },
        },
        mounted() {
    const valueFromLocalStorageUsername = localStorage.getItem('username'); 
    const valueFromLocalStoragePassword = localStorage.getItem('password');
    if (valueFromLocalStorageUsername !== null) {
      this.$store.commit('setAuthenticated', true);
    }
    if (valueFromLocalStorageUsername === 'root' && valueFromLocalStoragePassword === 'root')
    {

        this.$store.commit('setRole', true);
    }
  },

        props: {
            isModalVisible: Boolean,
        },
    }
</script>
