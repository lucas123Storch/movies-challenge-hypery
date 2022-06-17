<template>
  <trending />
</template>

<script lang="ts">
import Vue from 'vue';
import Trending from './components/trending/Trending.vue';
export default Vue.extend({
  name: 'App',

  components: {
    Trending
  },
});
</script>
