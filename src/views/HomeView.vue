<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <layout-slide 
      :datas="romance"
    />
  </div>
</template>

<script>
// @ is an alias to /src

import LayoutSlide from '@/components/layout/LayoutSlide.vue'


export default {
  name: 'HomeView',
  components: {
    LayoutSlide
  },
  created() {
    this.$store.dispatch('getGenres')
  },
  computed: {
    romance() {
      return this.$store.getters.getRomance
    }
  }
}
</script>
