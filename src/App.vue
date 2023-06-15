<template>
  <div id="childApp">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('===子应用app====')
  }
}
</script>
