<!-- eslint-disable linebreak-style -->

<template>
          <nav-pan
    />
  <div class="DonateBlank">
    <div class="bd1">
    <h1>DONATEEEE</h1>
    <div class="donate-container">
    <h2 class="donate-title">Поддержите нас</h2>
    <div class="wallets">
      <div class="wallet">
        <div class="wallet-title">Bitcoin (BTC)</div>
        <div class="wallet-address">{{ bitcoinAddress }}</div>
        <!-- Дополнительная информация или QR-код можно добавить здесь -->
      </div>
      <div class="wallet">
        <div class="wallet-title">Ethereum (ETH)</div>
        <div class="wallet-address">{{ ethereumAddress }}</div>
        <!-- Дополнительная информация или QR-код можно добавить здесь -->
      </div>
      <!-- Добавьте другие кошельки по аналогии -->
    </div>
  </div>
</div>
    </div>
</template>
<!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
import NavPan from '@/components/NavPan.vue';

export default {
  data() {
    return {
      bitcoinAddress: 'bc1qg90al49k34z54prf6eufh9sng30l93kgf43ccr',
      ethereumAddress: '0x4c1e026D78fF924Ff25B2d0c9D186CF897c105D3',
      //
    }
  },
  components: {
    NavPan,
  },
};
</script>

<style scoped>

html {
  background: linear-gradient(to bottom, #1f1f1f, #585858); /* Градиент от верха к низу, можно настроить цвета по вашему усмотрению */
  background-attachment: fixed; /* Фиксированный фон */
  background-size: cover; /* Фон будет занимать всю высоту и ширину экрана */
  background-repeat: no-repeat; /* Фон не повторяется */
}
.donate-container {
  text-align: center;
  padding: 20px;
}

.donate-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.wallets {
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
}

.wallet {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;

}

.wallet-title {
  font-size: 18px;
  margin-bottom: 5px;
}

.wallet-address {
  font-size: 14px;
}

.DonateBlank {
  margin-top: 8rem;
}

.bd1 {
  padding: 1rem;
  margin-bottom: 2rem;
}

</style>
