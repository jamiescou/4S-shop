<template>
  <div>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
  },
  onLoad () {
    // 解决页面返回后，数据没重置的问题
    Object.assign(this, this.$options.data())
  }
}
</script>

<style>
</style>
