<template>
  <div class="container">
    <div class="row">
      <router-link
        class="btn btn-success"
        tag="button"
        :to="{ name: 'permissions-create' }"
      >Add new permission</router-link>
    </div>
    <PermissionList />
  </div>
</template>

<script>
import PermissionList from "./PermissionList";

export default {
  components: {
    PermissionList
  }
};
</script>

<style lang="scss" scoped>
</style>