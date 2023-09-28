<template>
  <div class="home">
    <nav-pan
    />
    <concert-anounce/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavPan from '@/components/NavPan.vue';
import ConcertAnounce from '@/components/ConcertAnounce.vue';

export default {
  name: 'HomeView',
  components: {
    NavPan, ConcertAnounce,
  },
};
</script>
