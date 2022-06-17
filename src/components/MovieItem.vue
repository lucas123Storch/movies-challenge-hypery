<template>
  <v-card class="mx-auto my-12" max-width="374" height="750px">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="400"
      :src="'https://image.tmdb.org/t/p/w500/'+movieItem.poster_path"
    ></v-img>

    <v-card-title>
      <span v-if="movieItem.title">
        {{ movieItem.title }}
      </span>
      <span v-else>
        {{ movieItem.name }}
      </span>
    </v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="movieItem.vote_average"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4 text-size">
          {{ movieItem.vote_average }}
          </div>
      </v-row>
      <div class="text-size">
        {{ movieItem.overview }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title v-if="movieItem.release_date">Release Date</v-card-title>

    <v-card-text v-if="movieItem.release_date">
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>{{ formatDate(movieItem.release_date) }}</v-chip>
        
      </v-chip-group>
    </v-card-text>

  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import moment from "moment";

export default defineComponent({
  props: {
    movieItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: '',
    };
  },
  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/yyyy");
      }
    },
  },

});
</script>

<style lang="scss" scoped>
.text--line-through {
  text-decoration: line-through;
}

.text-size{
  overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
}

.v-card {
  transition: all 0.3s ease-in-out;

  .btn-delete {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .btn-delete {
      opacity: 1;
    }
  }
}
</style>
