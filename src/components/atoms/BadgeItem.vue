<template>
  <div class="badge-item">
    <span>{{ name }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
      default: "---",
    },
  },
  setup(props) {
    props.name;
  },
});
</script>
<style lang="scss">
.badge-item {
  background-color: var(--color-text);
  color: #ffffff;
  width: min-content;
  padding: 0.4rem 0.8rem 0.4rem 0.8rem;
  margin: 0.4rem;
  font-size: 1.2rem;
  display: flex;
  border-radius: 0.8rem;
}
</style>
