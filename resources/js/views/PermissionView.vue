<template>
    <div class="row justify-content-center">
    <div class="col-md-7">
      <div class="card">
        <div class="card-header">Permission Details</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Guard Name</th>
                <th scope="col">Created At</th>
                <th scope="col">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ permission.id }}</td>
                <td>{{ permission.name }}</td>
                <td>{{ permission.guard_name }}</td>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      permission: 'permission/getPermission'
    })
  },
  methods: {
    ...mapActions('permission', ['viewPermission'])
  },
  created() {
    this.viewPermission(this.$route.params.id)
  }
};
</script>

<style scoped>

</style>