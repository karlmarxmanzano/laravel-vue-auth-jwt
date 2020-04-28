<template>
    <div class="row justify-content-center">
    <div class="col-md-7">
      <div class="card">
        <div class="card-header">User Details</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Created At</th>
                <th scope="col">Updated At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.created_at }}</td>
                <td>{{ user.updated_at }}</td>
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
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getSelectedUser'
    })
  },
  methods: {
    ...mapActions('user', ['fetchUser'])
  },
  created() {
    this.fetchUser(this.id)
  }
};
</script>

<style scoped>

</style>