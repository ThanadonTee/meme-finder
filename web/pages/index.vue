<template>
  <div>
    <Nav />
    <HeaderSection />
    <Searchbox />
    <Result />
    <Foot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style>
/* .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  } */
/* .headerArea{

}
.resultArea{

} */

.headerLogo {
  width: 200px;
  height: 200px;
  margin-left: 42%;
}

.navLogo {
  height: 200px;
}

.header {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
}
.title {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
}
.content {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
.red {
  color: #a0432e;
}
.yellow {
  color: #b68f43;
}
.ashGreen {
  background-color: #9daf9f;
}
.navy {
  color: #3c4d59;
}
.almostBlack {
  color: #191323;
}
</style>
