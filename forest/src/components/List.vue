<template>
    <div id="List">
        <router-link  v-for="(item) of list" :to="'/goods'" :key="item.id">
            <img :src="`${baseUrl+item.img}`" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    props:['list','dataName']
}
</script>


<style scoped>
    #List{display: flex;flex-wrap: wrap}
    #List a{margin:.25rem .35rem}
</style>
