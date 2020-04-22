<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Add new role</div>
          <div class="card-body">
            <form @submit.prevent="onFormRoleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="email" name="name" class="form-control" v-model="name" />
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
  data() {
    return {
      name: ""
    };
  },
  methods: {
    onFormRoleSubmit() {
      console.log(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>