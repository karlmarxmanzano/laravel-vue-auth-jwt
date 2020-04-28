<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Edit Role</div>
          <div class="card-body">
            <RoleForm :role="role" :onSubmitHandler="updateRole" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import RoleForm from '../components/RoleForm'
  
  export default {
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    components: {
      RoleForm
    },
    computed: {
     ...mapGetters({
        role: 'role/getCurrentRole'
      }) 
    },
    methods: {
      ...mapActions('role', ['fetchRole', 'updateRole'])
    },
    created() {
      this.fetchRole(this.id)
    }
  }
</script>

<style lang="scss" scoped>

</style>