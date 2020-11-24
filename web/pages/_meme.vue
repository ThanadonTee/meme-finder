<template>
  <div>
    <Nav />
    <Searchbox />
    <section v-if="!loading" class="section">
      <div class="columns is-justify-content-center">
        <div class="column has-text-centered">
          <img :src="meme.base_img" width="300px" />
        </div>
        <div class="column">
          <h1 class="is-size-1 title">{{ meme.name }}</h1>
        </div>
      </div>
    </section>
    <section v-if="havememe">
      <div class="mx-5">
        <div class="columns">
          <div class="columns">
            <div class="column">
              <img :src="meme.generated_memes[item1].image_url" />
            </div>
            <div class="column">
              <h1 class="is-size-4">
                {{ meme.generated_memes[item1].caption_text }}
              </h1>
              <div class="content textContent">
                <p>
                  {{ meme.generated_memes[item1].alt_text }}
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <img :src="meme.generated_memes[item2].image_url" />
            </div>
            <div class="column">
              <h1 class="is-size-4">
                {{ meme.generated_memes[item2].caption_text }}
              </h1>
              <div class="content textContent">
                <p>
                  {{ meme.generated_memes[item2].alt_text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="columns">
            <div class="column">
              <img :src="meme.generated_memes[item3].image_url" />
            </div>
            <div class="column">
              <h1 class="is-size-4">
                {{ meme.generated_memes[item3].caption_text }}
              </h1>
              <div class="content textContent">
                <p>
                  {{ meme.generated_memes[item3].alt_text }}
                </p>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <img :src="meme.generated_memes[item4].image_url" />
            </div>
            <div class="column">
              <h1 class="is-size-4">
                {{ meme.generated_memes[item4].caption_text }}
              </h1>
              <div class="content textContent">
                <p>
                  {{ meme.generated_memes[item4].alt_text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Foot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      havememe: false,
      meme: {},
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$axios
        .$get(process.env.SERVER_URL + '/api/meme/' + this.$route.params.meme)
        .then((res) => {
          console.log(res.output)
          this.meme = res.output
          if (!res.output.generated_memes) {
          } else {
            this.item1 = Math.floor(
              Math.random() * res.output.generated_memes.length
            )
            this.item2 = Math.floor(
              Math.random() * res.output.generated_memes.length
            )
            this.item3 = Math.floor(
              Math.random() * res.output.generated_memes.length
            )
            this.item4 = Math.floor(
              Math.random() * res.output.generated_memes.length
            )
            this.havememe = true
          }
          this.loading = false
        })
        .catch((err) => {
          throw new Error(err)
        })
    },
  },
}
</script>
