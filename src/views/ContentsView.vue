<template>
  <div class="about">
    {{ id }}
    <h1>This is an about page</h1>

    <nav>
      <router-link :to="`/contents/${id}/content_info`">콘텐츠 정보</router-link>
      <router-link :to="`/contents/${id}/related_content`">관련 콘텐츠</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
  
  export default {
    props: {
      id: {
        type: String
      }
    }
  }
</script>

<style lang="scss">
  nav {
    .router-link-exact-active {
      font-weight: bold;
    }  
  }
  

</style>
