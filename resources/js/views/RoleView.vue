<template>
    <div class="row justify-content-center">
    <div class="col-md-7">
      <div class="card">
        <div class="card-header">Role Details</div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Created At</th>
                <th scope="col">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ role.id }}</td>
                <td>{{ role.name }}</td>
                <td>{{ role.created_at }}</td>
                <td>{{ role.updated_at }}</td>
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
      role: 'role/getCurrentRole'
    })
  },
  methods: {
    ...mapActions('role', ['fetchRole'])
  },
  created() {
    this.fetchRole(this.id)
  }
};
</script>

<style scoped>

</style>