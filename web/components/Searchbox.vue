<template>
  <div>
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

    <section class="section">
      <div class="columns is-multiline">
        <Result :meme="meme" v-for="meme in memes" :key="meme.id"/>
      </div>
    </section>
  </div>
</template>

<style>
 .checkerpattern:nth-child(odd){
   background-color: #ececec;
 }

 img.checkerpattern{
   object-fit: cover;
 }
</style>

<script>
import Result from './Result.vue'
export default {
  components: { Result },
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
          console.log(res.output)
          this.memes = res.output.reverse()
        })
        .catch((err) => {
          throw new Error(err)
        })
    },
  },
  data() {
    return {
      memes: null
    }
  },
}
</script>
