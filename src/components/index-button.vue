<template>
  <button class="index-user-button" :class="[size, type]">
    <slot />
  </button>
</template>
<script>
export default {
  name: "UserButton",
  props: {
    size: {
      type: String,
      default: "medium",
    },
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>
<style scoped lang="less">
.ueser-button {
  background-color: red;
}
.medium {
  width: 50px;
  height: 50px;
}
</style>