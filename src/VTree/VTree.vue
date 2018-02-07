<template>
  <ul>
      <p>{{version}}</p>
  </ul>
</template>

<script>
import Vue from "vue";

export default {
  computed: {
    version() {
      return Vue.version;
    }
  }
};
</script>

<style>

</style>
