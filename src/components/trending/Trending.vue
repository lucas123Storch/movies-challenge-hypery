<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <v-toolbar-title>Movies</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="left">
          <v-col cols="1">
            <h2 class="display-1 purple--text text--darken-2">Trending</h2>
            
          </v-col>
          <v-col cols="4" style="margin-left: 40px; padding-top: 30px">
            <v-select
              :items="items"
              label="Time"
              outlined
              class="select-custom"
              @change="handleChange"
            ></v-select>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <movies-list :movies-list-data="moviesListData"></movies-list>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MoviesList from "../MoviesList.vue";
import axios from "axios";

export default Vue.extend({
  name: "Trending",

  components: {
    MoviesList,
  },

  data() {
    return {
      moviesListData: {},
      items: ["day", "week"],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.getMovies(e);
    },
    getMovies(time = "day") {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/all/${time}?api_key=1ee7f176bd2d93ed7c3a9b2bc2d81d31`
        )
        .then((res) => {
          this.moviesListData = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>

