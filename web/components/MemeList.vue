<template>
<section class="section">
    <div class="columns">
    <div class="columns">
      <div class="column is-6">
        <img src="~/assets/images/cat.jpg" />
      </div>
      <div class="column">
        <h1 class="is-size-4">{meme.name}</h1>
        <h1 class="is-size-5">{meme.desc}</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <img src="~/assets/images/cat.jpg" />
      </div>
      <div class="column">
        <h1 class="is-size-4">{meme.name}</h1>
        <h1 class="is-size-5">{meme.desc}</h1>
      </div>
    </div>

    <!-- <div class="column is-4" v-for="i in (memes.length/2)">

          <div class="columns" v-for="meme in memes" :meme="meme">
            <div class="column is-8">
              <img :src="{meme.img_path}" />
            </div>
            <div class="column">
              <h1 class="is-size-4">{meme.name}</h1>
              <h1 class="is-size-5">{meme.desc}</h1>
            </div>
          </div>

        </div> -->
  </div>
</section>
  
</template>