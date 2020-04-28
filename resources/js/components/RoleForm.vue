<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" class="form-control" v-model="role.name" />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Submit</button>
    </div>
  </form>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  props: {
    role: {
      type: Object,
      default: function () {
        return { 
          id: '',
          name: '' 
        }
      }
    },
    onSubmitHandler: {
      type: Function
    }
  },
  methods: {
    onSubmit() {
      return this.onSubmitHandler(this.role)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>