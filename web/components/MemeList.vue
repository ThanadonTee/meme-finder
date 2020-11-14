<template>
  <div class="mx-5">
    <template v-for="i in 2">
      <div class="columns">
        <div class="columns" v-for="i in 2">
          <div class="column" v-on:click="modalImage">
            <img src="~/assets/images/cat.jpg" />
          </div>
          <div class="column">
            <h1 class="is-size-4">Polite cat variation</h1>
            <h1 class="is-size-5">Still cute eh</h1>
          </div>
        </div>
      </div>
      
    </template>
    <div class="modal" id="modalImage">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close" v-on:click="closeModalImg"></button>
      </div>
  </div>
</template>


<script>
export default {
  methods: {
    modalImg: function() {
          document.getElementsById("modalImage").classList.add("is-active");
    },
    closeModalImg: function() {
          document.getElementsById("modalImage").classList.remove("is-active");
    }
  }
}
</script>