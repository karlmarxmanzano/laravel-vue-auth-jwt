<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Permission</div>
          <div class="card-body">
            <router-link
              class="btn btn-success float-right mb-4"
              tag="button"
              :to="{ name: 'permissions-create' }"
            >Add new permission</router-link>

            <PermissionList />
          </div>
        </div>
      </div>
    </div>
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