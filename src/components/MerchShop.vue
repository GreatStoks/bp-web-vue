<!-- eslint-disable linebreak-style -->
<template>
    <nav-pan/>
    <div class="bd1">
    <h1>МЕРЧ ГРУППЫ</h1>
              <div class="container_types">
              <router-link class="nav-link"
              :to="{ name: 'merch', params: { type: 'footba' } }">
                <a class="merch_type" href="#">ФУТБЫ</a>
              </router-link>
              <p>//</p>
              <router-link class="nav-link"
              :to="{ name: 'merch', params: { type: 'krujka' } }">
                <a class="merch_type" href="#">КРУЖКИ</a>
              </router-link>
              <p>//</p>
                <router-link class="nav-link"
                :to="{ name: 'merch', params: { type: 'znachok' } }">
                <a class="merch_type" href="#">ЗНАЧКИ</a>
              </router-link>
              <p>//</p>
                <router-link class="nav-link"
                :to="{ name: 'merch', params: { type: 'nashivka' } }">
                <a class="merch_type" href="#">НАШИВКИ</a>
              </router-link>
            </div>
    <div v-for="product in sortedProducts" :key="product.name" class="product">
      <img :src="product.image" :alt="product.name" class="product-image" width="200" height="200"/>
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }} руб.</p>
      <button class="btn btn-danger" @click="addToCart(product)">Купить</button>
    </div>
    <div class="korzina" v-if="isAuthenticated">
    <h2>Корзина</h2>
    <ul>
      <li v-for="(item, index) in cart" :key="index">{{ item.name }} - {{ item.quantity }} шт.</li>
    </ul>

    <p><b>Итого: {{ totalCartPrice }} руб.</b></p>
    <button class="btn">ОПЛАТИТЬ</button>
    </div>
  </div>
</template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
import NavPan from './NavPan.vue';

export default {
    data() {
    return {
        type: '',
      cart: [],
      products: [
    {
        id: 1,
          name: "Футболка",
          description: "Красная футболка с логотипом.",
          price: 1500,
          image: "/footba.jpg",
          type: "footba",
        },
        {
            id: 2,
          name: "Кружка",
          description: "Керамическая кружка с логотипом.",
          price: 750,
          image: "/krujka.jpg",
          type: "krujka",
        },
        {
            id: 3,
          name: "Значок",
          description: "Металлический значок с дизайном.",
          price: 500,
          image: "/znachok.jpg",
          type: "znachok",
        },
        {
            id: 4,
          name: "Нашивка",
          description: "Текстильная нашивка для одежды.",
          price: 300,
          image: "/nashivka.jpg",
          type: "nashivka",
        }
      // Другие товары...
    ],
    };
  },
  methods: {
    addToCart(product) {
      // Проверяем, есть ли товар уже в корзине
      const existingItem = this.cart.find(item => item.name === product.name);

      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        existingItem.quantity++;
      } else {
        // Если товара нет в корзине, добавляем его с начальным количеством 1
        this.cart.push({ ...product, quantity: 1 });
      }
    }
  },
  computed: {
    totalCartPrice() {
      // Вычисляем общую стоимость корзины
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    sortedProducts() {
        const routeType = this.$route.params.type; // Получаем тип из роутера

// Фильтруем товары по заданному типу и сохраняем в отдельном массиве
const filteredProducts = this.products.filter((product) => {
  return product.type === routeType;
});

// Фильтруем товары, убирая те, которые уже включены в filteredProducts
const remainingProducts = this.products.filter((product) => {
  return product.type !== routeType;
});

// Объединяем отфильтрованные товары, чтобы сначала шли товары с заданным типом
// и затем все остальные
return [...filteredProducts, ...remainingProducts];
    },
    isAuthenticated() {
      // Проверяем состояние аутентификации
      return this.$store.getters.isAuthenticated;
    },
  },
    components: {
        NavPan,
    },
}
</script>

<style scoped>
h1 {
    margin-top: 1rem;
}

.product {
    margin: 1rem;
    padding: 10px;
    border: 10px solid #20202069;
}

.bd1 {
  margin-top: 100px;
  margin-bottom: 1rem;
  padding: 1rem;
}

@media screen and (max-width: 700px) {
  .bd1 {
  margin-top: 180px;
}
}

.container_types {
  display: flex;
  padding: 1rem;
  color: #f3444d;
  flex-wrap: wrap;
  align-items: center;
  justify-content:space-between;
  background-color: rgba(71, 71, 71, 0.829);
  border: 3px solid rgba(34, 34, 34, 0.788);
  border-radius: 20px;
}

.merch_type {
  margin: 0 3rem;
}

a {
  text-decoration: none;
  color: aliceblue;
  font-size: 30px;
}

</style>