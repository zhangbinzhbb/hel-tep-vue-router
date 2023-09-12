<template>
  <div>render

    <div id="vue2Button" />
    <!-- <vue2Button /> -->
    <RemoteCompAsyncBetter />
  </div>
</template>

<script>
import { vue3ToVue2 } from '@/utils/transform'
export default {
  components: {
    // 可能因为编译器的关系，此写法无效
    // vue2Button: vue3ToVue2('Button', 'vue2Button')

    RemoteCompAsyncBetter: () => ({
      component: new Promise((r, j) => {
        try {
          // const mod = await preFetchLib("hel-tpl-remote-vue-comps");
          r(vue3ToVue2('Button', 'vue2Button'))
        } catch (err) {
          j(err)
        }
      })
    })

  }
}
</script>
