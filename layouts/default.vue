<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">ETTN</el-menu-item>
    </el-menu>

    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1">
        <icon name="file-text-o"></icon>
        <span slot="title">Документи</span>
      </el-menu-item>

      <el-menu-item index="1-1">
        <icon name="male"></icon>
        <span slot="title">Водії</span>
      </el-menu-item>

      <el-menu-item index="1-2">
        <icon name="car"></icon>
        <span slot="title">Транспортні засоби</span>
      </el-menu-item>

      <el-menu-item index="1-3">
        <icon name="address-book"></icon>
        <span slot="title">Контрагенти</span>
      </el-menu-item>

      <el-menu-item index="1-4">
        <icon name="map-marker"></icon>
        <span slot="title">Пункти</span>
      </el-menu-item>

      <el-menu-item index="1-5">
        <icon name="cube"></icon>
        <span slot="title">Номенклатура</span>
      </el-menu-item>

      <el-menu-item index="1-6">
        <icon name="balance-scale"></icon>
        <span slot="title">Ваги</span>
      </el-menu-item>
    </el-menu>

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>

    <nuxt/>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
