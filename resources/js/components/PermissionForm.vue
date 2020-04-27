<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" class="form-control" v-model="permission.name" />
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
    permission: {
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
      return this.onSubmitHandler(this.permission)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>