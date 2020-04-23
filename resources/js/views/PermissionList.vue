<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">Permission List</div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="permission in permissions" :key="permission.id">
                <td>{{ permission.id }}</td>
                <td>{{ permission.name }}</td>
                <td>{{ permission.created_at }}</td>
                <td>{{ permission.updated_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
        permissions: 'permission/getPermissions'
      })
  },
  mounted() {
    this.$store.dispatch('permission/fetchPermissions')
  }
};
</script>

<style scoped>
</style>