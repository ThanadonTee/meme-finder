<template>
  <div>
    <template v-for="i in 2">
      <div class="columns">
        <div class="columns" v-for="i in 2">
          <div class="column is-3 is-centered">
            <img src="~/assets/images/cat.jpg" width="300px" />
          </div>
          <div class="column">
            <h1 class="is-size-4">Polite cat variation</h1>
            <div class="content textContent">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
