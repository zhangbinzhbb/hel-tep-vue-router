<template>
  <div>
    someModule-index
    <el-button @click="toPath">test</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toPath() {
      this.$router.push({
        path: '/someModule/test'
      })
    }
  }
}
</script>
