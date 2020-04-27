<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Edit Permission</div>
          <div class="card-body">
            <PermissionForm :permission="permission" :onSubmitHandler="savePermission" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import PermissionForm from '../components/PermissionForm'
  
  export default {
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    components: {
      PermissionForm
    },
    computed: {
     ...mapGetters({
        permission: 'permission/getPermission'
      }) 
    },
    methods: {
      ...mapActions('permission', ['fetchPermission', 'savePermission'])
    },
    created() {
      this.fetchPermission(this.id)
    }
  }
</script>

<style lang="scss" scoped>

</style>