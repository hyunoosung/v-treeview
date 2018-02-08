<template>
  <ul>
    <v-treeview-item class="v-treeview-item" v-for="(item) in value" :key="item.id" 
      :model="item" :treeTypes="treeTypes" 
      @selected="selected" @contextCall="contextCall"></v-treeview-item>            
  </ul>
</template>

<script>
import VTreeviewItem from "./VTreeviewItem.vue";

export default {
  props: ["value", "treeTypes"],
  name: "v-treeview",
  data: function() {
    return {};
  },
  created() {
    this.message = "VTreeview created!";
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


