<template lang="">
    <div>
        <router-link :to="`/contents/${data.id}`">
            <img :src="data.medium_cover_image" />
        </router-link>
    </div>
</template>
<script>
//background_image_original={datas.background_image_original}
//medium_cover_image={datas.medium_cover_image}
//url={datas.url}
//title_long={datas.title_long}
//rating={datas.rating}
//runtime={datas.runtime}
//genres={datas.genres}
//download_count={datas.download_count}   
export default {
    name: 'movie-poster',
    props: {
        posterType: {
            // hover / hover + text / none 
            type: String,
            default: 'hover'
        },
        data: {
            type: Object
        }
    }
    
}
</script>
<style lang="">
    
</style>

