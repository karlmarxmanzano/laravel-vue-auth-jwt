<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Edit User</div>
          <div class="card-body">
            <UserForm :user="user" :onSubmitHandler="updateUser" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import UserForm from '../components/UserForm'
  
  export default {
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    components: {
      UserForm
    },
    computed: {
     ...mapGetters({
        user: 'user/getSelectedUser'
      }) 
    },
    methods: {
      ...mapActions('user', ['fetchUser', 'updateUser'])
    },
    created() {
      this.fetchUser(this.id)
    }
  }
</script>

<style lang="scss" scoped>

</style>