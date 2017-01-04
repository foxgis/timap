<template>
  <div>
    <Radio-group :model.sync="value" type="button">
        <Radio value="湖泊"></Radio>
        <Radio value="居民地"></Radio>
        <Radio value="铁路"></Radio>
        <Radio value="城际公路"></Radio>
        <Radio value="城市道路"></Radio>
        <Radio value="城市管线"></Radio>
        <Radio value="城市绿地"></Radio>
    </Radio-group>
  </div>
</template>


<script>
export default {
  computed: {
    value: {
      get () {
        return this.$store.state.theme
      },

      set (newValue) {
        this.$store.commit('changeTheme', {theme: newValue})
      }
    }
  }
}
</script>
