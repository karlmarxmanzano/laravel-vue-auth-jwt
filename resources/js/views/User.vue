<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="card-header">Users</div>
          <div class="card-body">
            <router-link
              class="btn btn-success float-right mb-4"
              tag="button"
              :to="{ name: 'user-create' }"
            >Add new user</router-link>

            <UserList />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "./UserList";

export default {
  components: {
    UserList
  }
};
</script>

<style lang="scss" scoped>
</style>