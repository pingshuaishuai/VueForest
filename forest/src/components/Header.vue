<template>
  <div class="Header">
    <router-link tag="a" href="#" to="/home"><img src="../assets/images/logo.png" alt=""></router-link>
    <router-link tag="a" to="/Menu"><img src="../assets/images/menu.png" alt=""></router-link>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header{display: flex;justify-content: space-between;padding: .5rem .5rem .2rem .5rem;}
</style>
