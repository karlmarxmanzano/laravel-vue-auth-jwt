<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Roles</div>
          <div class="card-body">
            <router-link
              class="btn btn-success float-right mb-4"
              tag="button"
              :to="{ name: 'role-create' }"
            >Add new role</router-link>

            <RoleList />
          </div>
        </div>
      </div>
    </div>
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