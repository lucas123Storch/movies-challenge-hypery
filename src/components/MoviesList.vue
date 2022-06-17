<template>
  <v-container max-width="60px">

    <v-row dense>
      <v-col v-for="todo in moviesListData" :key="todo.id" cols="4">
        <movie-item :movie-item="todo"  />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { defineComponent } from "@vue/composition-api";
import MovieItemComponent from "./MovieItem.vue";


export default defineComponent({
  components: {
    "movie-item": MovieItemComponent,
  },
  props: {
    moviesListData: {
      required: true,
    },
  },
});
</script>
