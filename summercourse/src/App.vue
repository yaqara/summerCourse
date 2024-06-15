<template>
  <input type="number" v-model="number">
  <tableComponent :inputNumber="number"/>
</template>

<script>
import tableComponent from "@/components/table.vue"

export default {
  name: 'App',
  components: {
    tableComponent
  },
  data() {
    return {
      number: 0
    }
  }
}
</script>

<style>
</style>
