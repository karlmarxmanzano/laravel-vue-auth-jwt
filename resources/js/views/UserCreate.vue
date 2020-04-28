<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Add new Permission</div>
          <div class="card-body">
            <UserForm :onSubmitHandler="createUser"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import UserForm from '../components/UserForm'
  
  export default {
    components: {
      UserForm
    },
    methods: {
      ...mapActions('user', ['createUser'])
    }
  }
</script>

<style lang="scss" scoped>

</style>