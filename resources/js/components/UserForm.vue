<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="name">First Name</label>
      <input
        type="text"
        name="name"
        class="form-control"
        placeholder="Name"
        v-model="user.first_name"
      />
    </div>
    <div class="form-group">
      <label for="name">Last Name</label>
      <input
        type="text"
        name="name"
        class="form-control"
        placeholder="Name"
        v-model="user.last_name"
      />
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        name="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="user.email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
      />
    </div>
    <!-- <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input type="password" name="confirmPassword" class="form-control" placeholder="Password">
    </div>-->
    <div class="form-group">
      <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Submit</button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        default: function () {
          return { 
            first_name: '',
            last_name: '',
            email: '',
            password: ''
          }
        }
      },
      onSubmitHandler: {
        type: Function
      }
    },
    methods: {
      onSubmit() {
        return this.onSubmitHandler(this.user)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>