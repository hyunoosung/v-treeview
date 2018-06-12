<template>
<div @mouseup.prevent="mousedown">
    <ul>
      <v-treeview-item class="v-treeview-item" v-for="item in value" :key="item.id" 
        :model="item" :treeTypes="treeTypes" :openAll="openAll" :searchText="searchText"
        @selected="selected" @openTree="openTree"></v-treeview-item>            
    </ul>
    <v-context :show="showContext" :contextItems="contextItems" :mouseEvent="mouseEvent" @contextSelected="contextSelected" ></v-context>
  </div>
</template>

<script>
import VTreeviewItem from "./VTreeviewItem.vue";
import VContext from "../VContext/VContext.vue";

export default {
  props: ["value", "treeTypes", "openAll", "contextItems", "editName", "searchText"],
  name: "v-treeview",
  data() {
    return {
      showContext: false,
      mouseEvent: null
    };
  },
  created() {},
  methods: {
    selected(node) {
      this.$emit("selected", node);
    },
    contextSelected(title){
      this.$emit("contextSelected", title);
    },
    openTree(node) {
      this.$emit("openTree", node);
    },
    mousedown(e) {
      if (this.contextItems) {
        e.preventDefault();
        this.mouseEvent = {
          button: e.button,
          layerX: e.layerX,
          layerY: e.layerY
        };
      }
    }
  },
  components: {
    VContext,
    VTreeviewItem
  }
};
</script>

<style scoped>
ul {
  position: relative;
}
</style>


