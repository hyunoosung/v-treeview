<template>
  <ul>
    <v-treeview-item class="v-treeview-item" v-for="item in value" :key="item.id" 
      :model="item" :treeTypes="treeTypes" :openAll="openAll"
      @selected="selected" @contextCall="contextCall"></v-treeview-item>            
  </ul>
</template>

<script>
import VTreeviewItem from "./VTreeviewItem.vue";
import { EventBus } from "../event-bus.js";

export default {
  props: ["value", "treeTypes", "openAll"],
  name: "v-treeview",
  data: function() {
    return {};
  },
  created() {
    this.message = "VTreeview created!";
    console.log("openAll in parent: " + this.open);
  },
  methods: {
    selected(node) {
      this.$emit("selected", node);
    },
    contextCall(e) {
      this.$emit("contextCall", e);
    }
  },
  components: {
    VTreeviewItem
  }
};
</script>

<style scoped>
ul {
  position: relative;
}
</style>


