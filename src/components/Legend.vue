<template>
  <div class="legend">
    <h4>图例</h4>
    <ul>
      <li style="border-top-color: rgb(218, 59, 27);">2010</li>
      <li style="border-top-color: rgb(232, 92, 65);">2011</li>
      <li style="border-top-color: rgb(238, 131, 110);">2012</li>
      <li style="border-top-color: rgb(254, 190, 18);">2013</li>
      <li style="border-top-color: rgb(127, 205, 187);">2014</li>
      <li style="border-top-color: rgb(65, 182, 196);">2015</li>
      <li style="border-top-color: rgb(29, 145, 192);">2016</li>
    </ul>
  </div>
</template>


<script>
export default {
  //
}
</script>


<style scoped>
.legend {
  width: 500px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
}

ul {
  padding-top: 10px;
}

ul > li {
  display: inline-block;
  border-top: red solid 5px;
  width: 13.75%
}
</style>
