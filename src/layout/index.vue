<template lang="">
    <div>
        <watcha-header></watcha-header>
        <watcha-aside></watcha-aside>
        <slot></slot>
        <watcha-footer></watcha-footer>
    </div>
</template>
<script>
import WatchaAside from './WatchaAside.vue'
import WatchaFooter from './WatchaFooter.vue'
import WatchaHeader from './WatchaHeader.vue'

export default {
    name: 'watcha-layout',
    components: {
        WatchaHeader,
        WatchaAside,
        WatchaFooter
        
    }
}
</script>
<style lang="">
    
</style>