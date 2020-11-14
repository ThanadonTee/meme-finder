<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body is-vcentered">
        <div class="container">
          <div class="column is-centered">
            <img src="../assets/images/logo.svg" width="150px" />
          </div>
          <h1 style="font-size: 5em">
            <span class="header">FIND YOUR MEME</span>
          </h1>
          <h2 class="title">No more meme that only exists in your memory</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  loading: false,
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },
  $upload() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  },
}
</script>
