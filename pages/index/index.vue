<template>
  <view>
    <view class="header">
      <uni-search-bar placeholder="搜索" bgColor="#EEEEEE" />
    </view>
  </view>
</template>
<script setup>
  import {ref} from "vue";

  ref([])
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
  }
</style>
