<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Created At</th>
        <th scope="col">Updated At</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="permission in permissions" :key="permission.id">
        <td>{{ permission.id }}</td>
        <td>{{ permission.name }}</td>
        <td>{{ permission.created_at }}</td>
        <td>{{ permission.updated_at }}</td>
        <td>
          <router-link
            tag="a"
            :to="{ name: 'permission-view', params: { id: permission.id } }"
          >View</router-link> | 
          <router-link
            tag="a"
            :to="{ name: 'permission-edit', params: { id: permission.id } }"
          >Edit</router-link> | 
          <a href="#" @click.prevent="onRemovePermission(permission.id)">Delete</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
        permissions: 'permission/getPermissions'
      })
  },
  methods: {
    ...mapActions('permission', ['fetchPermissions', 'deletePermission']),
    onRemovePermission(id) {
      if (confirm("Do you want to remove this permission?") == true) {
        this.deletePermission(id)
        this.fetchPermissions()
      }
    }
  },
  mounted() {
    this.fetchPermissions()
  }
};
</script>

<style scoped>
</style>