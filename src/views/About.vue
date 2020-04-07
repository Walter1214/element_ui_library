<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Input />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input.vue'
export default Vue.extend({
  components: {
    Input
  }
})
</script>
