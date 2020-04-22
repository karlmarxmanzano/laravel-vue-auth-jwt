<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <!-- <div 
                            class="alert alert-danger" 
                            role="alert"
                            v-if="error">
                            {{ error }}
            </div>-->
            <form @submit.prevent="onSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Name"
                  v-model="formData.name"
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
                  v-model="formData.email"
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
                  v-model="formData.password"
                />
              </div>
              <!-- <div class="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input type="password" name="confirmPassword" class="form-control" placeholder="Password">
              </div>-->
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
import { mapActions } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["signUp"]),
    onSubmit() {
      this.signUp(this.formData)
        .then(res => {
          this.$router.replace({ name: "dashboard" });
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },
  components: {}
};
</script>