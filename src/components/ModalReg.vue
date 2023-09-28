<!-- eslint-disable linebreak-style -->
<template>
    <div
    v-if="isModalRegVisible"
    class="modal-shadow"
    @keydown.esc="closeModal"
    >
    <div class="modalq1">
        <div class="modalq1_cont">
            <button
            @click="closeModal"
            class="btn-close" aria-label="Close" id="close-modal"> &times;</button>
            <h2>Регистрация</h2>
            <form @submit.prevent="register">
                <label for="reg_username">Имя пользователя:<br>
                <input type="text" id="reg_username" v-model="username"
                name="reg_username" required><br><br>
                </label>

                <label for="reg_email">R U FEMALE OR A MALE?<br>
                <input type="email" id="reg_email" v-model="email"
                name="reg_email" required><br><br>
                </label>

                <label For="reg_password">Пароль:<br>
                <input type="password" id="reg_password" v-model="password"
                name="reg_password" required><br><br>
                </label>
                <p v-if="!isValidEmail">Введите корректный email.</p>
                <br>
                <button type="submit" class="btn btn-dark">Регистрация</button>
            </form>
        </div>
    </div>
    </div>
</template>
 <!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
//import axios from 'axios';

export default {
    data () {
        return {
            username: '',
            email: '',
            password: '',
            isValidEmail: true,
        }
    },
        name: "ModalReg",
        methods: {
            closeModal: function () {
                this.$emit('closeRegModal');
            },
            validateEmail() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            this.isValidEmail = emailPattern.test(this.email);
            },
            async register() {
            this.validateEmail();
      // Проверка, что все поля заполнены
        if (!this.isValidEmail) {alert('Введите корректный email')}
        else if (!this.username || !this.email || !this.password) {
        alert('Пожалуйста, заполните все поля');
        }
        else {
        // Сохранение данных в localStorage
        localStorage.setItem('username', this.username);
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        this.closeModal();
        this.$router.push({path: '/', query: {authenticated: true}});
        }
        //запрос на сервер
        //axios.post('/api/register', { login: this.username, password: this.password })
        },
        },
        props: {
            isModalRegVisible: Boolean,
        }
    }
</script>
