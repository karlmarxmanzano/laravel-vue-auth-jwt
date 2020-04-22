<template>
  <div id="app">
    <theHeader />
    <router-view />
  </div>
</template>

<script>
import theHeader from "./views/TheHeader";

export default {
  name: "mainApp",
  components: {
    theHeader
  }
};
</script>

<style scoped>

</style>