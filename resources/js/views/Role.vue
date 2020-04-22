<template>
  <div class="container">
    <div class="row">
      <router-link class="btn btn-success" tag="button" :to="{ name: 'role-create' }">Add new role</router-link>
    </div>
    <RoleList />
  </div>
</template>

<script>
import RoleList from "./RoleList";

export default {
  components: {
    RoleList
  }
};
</script>

<style lang="scss" scoped>
</style>