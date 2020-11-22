<template>
  <div>
    <section class="section has-text-centered">
      <div class="container">
        <div class="section">
          <div class="columns">
            <div class="column is-centered is-half is-narrow">
              <p class="title">Insert meme description</p>
              <div class="field has-addons">
                <div class="control boxSize">
                  <input
                    class="input"
                    type="text"
                    placeholder="meme description"
                  />
                </div>

                <div class="control">
                  <button class="submitButton is-focus is hover" type="submit">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMS45OTkgNTExLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA4Ljg3NCw0NzguNzA4TDM2MC4xNDIsMzI5Ljk3NmMyOC4yMS0zNC44MjcsNDUuMTkxLTc5LjEwMyw0NS4xOTEtMTI3LjMwOWMwLTExMS43NS05MC45MTctMjAyLjY2Ny0yMDIuNjY3LTIwMi42NjcgICAgUzAsOTAuOTE3LDAsMjAyLjY2N3M5MC45MTcsMjAyLjY2NywyMDIuNjY3LDIwMi42NjdjNDguMjA2LDAsOTIuNDgyLTE2Ljk4MiwxMjcuMzA5LTQ1LjE5MWwxNDguNzMyLDE0OC43MzIgICAgYzQuMTY3LDQuMTY1LDEwLjkxOSw0LjE2NSwxNS4wODYsMGwxNS4wODEtMTUuMDgyQzUxMy4wNCw0ODkuNjI3LDUxMy4wNCw0ODIuODczLDUwOC44NzQsNDc4LjcwOHogTTIwMi42NjcsMzYyLjY2NyAgICBjLTg4LjIyOSwwLTE2MC03MS43NzEtMTYwLTE2MHM3MS43NzEtMTYwLDE2MC0xNjBzMTYwLDcxLjc3MSwxNjAsMTYwUzI5MC44OTYsMzYyLjY2NywyMDIuNjY3LDM2Mi42Njd6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="column is-one-quater is-narrow">
              <p class="title">or</p>
            </div>
            <div class="column is-half is-narrow">
              <h1 class="title">Upload meme photo</h1>
              <input
                ref="file"
                type="file"
                style="display: none"
                @change="onFileSelected"
              />
              <button
                class="button is medium yellowButton is-focus is hover"
                @click="$refs.file.click()"
              >
                + Upload photo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-multiline">
        <Result :meme="meme" v-for="meme in memes" :key="meme.id" />
      </div>
    </section>
  </div>
</template>

<style>
.checkerpattern:nth-child(odd) {
  background-color: #ececec;
}

img.checkerpattern {
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
      memes: null,
    }
  },
}
</script>
