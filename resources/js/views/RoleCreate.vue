<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Add new Role</div>
          <div class="card-body">
            <RoleForm :onSubmitHandler="createRole"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import RoleForm from '../components/RoleForm'
  
  export default {
    components: {
      RoleForm
    },
    methods: {
      ...mapActions('role', ['createRole'])
    }
  }
</script>

<style lang="scss" scoped>

</style>