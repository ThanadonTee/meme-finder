<template>
  <div class="column is-one-third checkerpattern" v-bind="meme">
    <a :href="'/' + meme.id">
      <img :src="meme.base_img" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['meme'],
})
</script>
