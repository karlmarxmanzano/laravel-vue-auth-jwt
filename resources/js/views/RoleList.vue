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
      <tr v-for="role in roles" :key="role.id">
        <td>{{ role.id }}</td>
        <td>{{ role.name }}</td>
        <td>{{ role.created_at }}</td>
        <td>{{ role.updated_at }}</td>
        <td>
          <router-link
            tag="a"
            :to="{ name: 'role-view', params: { id: role.id } }"
          >View</router-link> | 
          <router-link
            tag="a"
            :to="{ name: 'role-edit', params: { id: role.id } }"
          >Edit</router-link> | 
          <a href="#" @click.prevent="onRemovePermission(role.id)">Delete</a>
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
        roles: 'role/getRoles'
      })
  },
  methods: {
    ...mapActions('role', ['fetchRoles', 'deleteRole']),
    onRemovePermission(id) {
      if (confirm("Do you want to remove this permission?") == true) {
        this.deleteRole(id)
        this.fetchRoles()
      }
    }
  },
  mounted() {
    this.fetchRoles()
  }
};
</script>

<style scoped>
</style>