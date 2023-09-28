<!-- eslint-disable linebreak-style -->
<template>
    <div class="footerbg">
    <footer class="footer">

      <div class="footer-content">

        <div class="social-links">
          <a href="https://vk.com/basalt_strenght"
          class="social-link" target="_blank"><i class="vk">
            <img alt="insta_logo" src="@/assets/vklogo.png" width="80" height="80">
            Мы в вк
        </i></a>
          <a href="https://www.instagram.com/"
          class="social-link" target="_blank"><i class="inst">
            <img alt="insta_logo" src="@/assets/instalogo.png" width="80" height="80">
            Мы в инстаграм
          </i></a>
        </div>
        <p class="copyright">&copy; {{ currentYear }} Бáссо Остинáто. Все права защищены.</p>
      </div>
    </footer>
</div>
  </template>
  <!-- eslint-disable linebreak-style -->
<script>
/* eslint-disable */
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: rgb(0, 0, 0);
    color: #f3444d;
    padding: 20px 0;
    text-align: center;
    position: relative;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  
  .social-links {
    margin-bottom: 20px;
    z-index: 1001;
  }
  
  .social-link {
    color: #f3444d;
    font-size: 24px;
    margin: 0 20px;

    padding: 5px;
    text-decoration: none;
    z-index: 1001;
  }
  
  .copyright {
    font-size: 14px;
    z-index: 1001;
  }


  </style>