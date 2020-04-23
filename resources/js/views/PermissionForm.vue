<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">{{ formTitle }}</div>
          <div class="card-body">
            <form @submit.prevent="onCreatePermission">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" v-model="name" />
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
import { mapActions } from 'vuex';
import { isEmpty  } from 'lodash'

export default {
  props: {
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    formTitle() {
      return (isEmpty(this.$route.params.id)) ? 'Create new permission' : 'Edit permission'
    }
  },
  methods: {
    ...mapActions('permission', ['createPermission']),
    onCreatePermission() {
      this.createPermission(this.name)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>