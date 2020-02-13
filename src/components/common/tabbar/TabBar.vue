<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style>
  #tab-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;

    background-color: #f6f6f6;
    box-shadow: 0 -2px 5px rgba(50, 50, 50, 0.2);
    text-align: center;
  }
  .tab-bar-item {
      flex: 1;
      font-size: 14px;
      padding-top: 4px;
  }
  #tab-bar [class ^= el-icon] {
      font-size: 20px;
  }
</style>