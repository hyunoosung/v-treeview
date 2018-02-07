<template>
  <ul>
    <v-tree-item class="v-treeItem" v-for="(item, index) in value" :key="item.id" 
      :model="item" :treeTypes="treeTypes" 
      @selected="selected" @contextCall="contextCall"></v-tree-item>            
  </ul>
</template>

<script>
import VTreeItem from "./VTreeItem.vue";

export default {
  props: ["value", "treeTypes"],
  name: "v-tree",
  data: function() {
    return {};
  },
  created() {
    this.message = "VTree created!";
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
    VTreeItem
  }
};
</script>

<style scoped>
ul {
  position: relative;
}
</style>


