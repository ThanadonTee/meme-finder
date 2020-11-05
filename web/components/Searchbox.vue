

<template>
  <div>
    <section class="hero is-danger has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 style="font-size: 6em">
            <span class="has-text-weight-semibold">Find Your</span><br><span class="has-text-weight-bold">M e m e </span>
          </h1>
          <h2 class="subtitle is-size-4">
            No more meme that only exists in your memory
          </h2>
        </div>
      </div>
    </section>
    <section class="section has-text-centered">
      <div class="container">
        <div class="section">
          <div class="column">
            <h1 class="is-size-3">Upload meme photo</h1>
            <button class="button my-3 is-danger is-large" @click="('this is test')">+ Upload photo</button>
            <p class="is-size-4">Find out its name</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  loading : false,
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  $upload() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>