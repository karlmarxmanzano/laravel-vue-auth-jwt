<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Sign In</div>
          <div class="card-body">
            <!-- <div 
                            class="alert alert-danger" 
                            role="alert"
                            v-if="error">
                            {{ error }}
            </div>-->
            <form @submit.prevent="onSignIn">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="form.email"
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
                  v-model="form.password"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSignIn() {
      this.$store
        .dispatch("auth/signIn", this.form)
        .then(() => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch(() => {
          this.$router.replace({ name: "home" });
        });
    }
  },
  components: {}
};
</script>