<template>
  <div v-if="showContext" :style="menuStyle">
      <ul class="list-unstyled">
        <li v-for="(item) in contextItems" :key="item.title" @click="click(item.title)">
          <span>
            <i :class="item.icon"></i>
          </span>
          <span>{{item.title}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ["treeTypes", "contextItems", "mouseEvent"],
  data() {
    return {
      showContext: true,
      menuStyle: null
    };
  },
  methods: {
    closeMenu() {
      this.showContext = false;
    },
    click(title) {
        this.$emit("contextSelected", title);
    }
  },
  watch: {
    mouseEvent() {
      if (this.mouseEvent.button === 2) {
        this.showContext = false;
        this.menuStyle = {
          left: this.mouseEvent.pageX + "px",
          top: this.mouseEvent.pageY + "px",
          border: "2px solid #ddd",
          padding: "5px 10px",
          position: "absolute",
          "background-color": "#fff",
          "box-shadow": "2px 2px 2px #aaa",
          "z-index": 10
        };
        this.$nextTick(() => {
          this.showContext = true;
        });
      } else if (this.mouseEvent.button === 0) {
        this.showContext = false;
      }
    }
  }
};
</script>

<style scoped>
ul {
  display: block;
  margin: 0;
  padding: 5px;
}

ul li {
  list-style: none;
  cursor: pointer;
  padding: 5px;
}

li:hover{
    background: rgba(83, 215, 220, 0.3);
}
</style>
