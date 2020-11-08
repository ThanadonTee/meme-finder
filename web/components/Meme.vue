<template>
  <section class="section">
    <div class="columns is-justify-content-center">
      <div class="column has-text-centered">
        <img src="~/assets/images/cat.jpg" />
      </div>
      <div class="column">
        <h1 class="is-size-1">Polite cat</h1>
        <h1 class="is-size-5">Cute eh</h1>
      </div>
    </div>
    <div class="columns">
      <div class="columns">
        <div class="column is-4">
          <div class="columns" v-for="meme in memes" :meme="meme">
            <div class="column is-8">
              <img :src="{meme.img_path}" />
            </div>
            <div class="column">
              <h1 class="is-size-4">{meme.name}</h1>
              <h1 class="is-size-5">{meme.desc}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  Vue.component('meme-component', {
  template: `  
    <div class="columns">
      <div class="column is-4">
        <div class="columns">
          <div class="column is-8">
            <img :src="{meme.img_path}" />
          </div>
          <div class="column">
            <h1 class="is-size-4">{meme.name}</h1>
            <h1 class="is-size-5">{meme.desc}</h1>
          </div>
        </div>
      </div>
    </div>
  `,
  props: {
    meme: Object
  }
}),
}
</script>