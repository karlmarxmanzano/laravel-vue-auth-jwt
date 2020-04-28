<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Created At</th>
        <th scope="col">Updated At</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.created_at }}</td>
        <td>{{ user.updated_at }}</td>
        <td>
          <router-link
            tag="a"
            :to="{ name: 'user-view', params: { id: user.id } }"
          >View</router-link> | 
          <router-link
            tag="a"
            :to="{ name: 'user-edit', params: { id: user.id } }"
          >Edit</router-link> | 
          <a href="#" @click.prevent="onRemoveHandler(user.id)">Delete</a>
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
        users: 'user/getUsers'
      })
  },
  methods: {
    ...mapActions('user', ['fetchUsers', 'deleteUser']),
    onRemoveHandler(id) {
      if (confirm("Do you want to remove this user?") == true) {
        this.deleteUser(id)
        this.fetchUsers()
      }
    }
  },
  mounted() {
    this.fetchUsers()
  }
};
</script>

<style scoped>
</style>