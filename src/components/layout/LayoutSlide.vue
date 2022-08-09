<template lang="">
    <movie-poster
        v-for="(data, key) in datas"
        :key="key"
        :data="data"
    />
</template>
<script>
import MoviePoster from '../MoviePoster.vue'

export default {
    name: 'layout-slide',
    components: {
        MoviePoster
    },
    props: {
        datas: {
            type: Array
        }
    }
}
</script>
<style lang="">
    
</style>