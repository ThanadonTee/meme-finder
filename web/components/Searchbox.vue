<template>
  <div>
    <!-- <section class="hero is-danger has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 style="font-size: 6em">
            <span class="header">FIND YOUR MEME</span>
          </h1>
          <h2 class="title">
            No more meme that only exists in your memory
          </h2>
        </div>
      </div>
    </section> -->
    <section class="section has-text-centered">
      <div class="container">
        <div class="section">
          <div class="column">
            <h1 class="is-size-3">Upload meme photo</h1>
            <input
              ref="file"
              type="file"
              style="display: none"
              @change="onFileSelected"
            />
            <button
              class="button my-3 is-danger is-large"
              @click="$refs.file.click()"
            >
              + Upload photo
            </button>
            <p class="is-size-4">Find out its name</p>
          </div>
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
  methods: {
    onFileSelected(event) {
      const fd = new FormData()
      fd.append('file', event.target.files[0])
      this.$axios
        .$post('http://lvh.me:3001/api/ai/upload', fd)
        .then((res) => {
          // TODO show data
        })
        .catch((err) => {
          throw new Error(err)
        })
    },
  },
}
</script>
