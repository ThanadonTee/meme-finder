<template>
  <div>
    <template v-for="i in 2">
      <div class="columns">
        <div class="columns" v-for="i in 2">
          <div class="column">
            <img src="~/assets/images/cat.jpg" />
          </div>
          <div class="column">
            <h1 class="is-size-4">Polite cat variation</h1>
            <h1 class="is-size-5">Still cute eh</h1>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>