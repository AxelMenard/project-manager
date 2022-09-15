<template>
  <h1 class="title-category">{{ titleCategory }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    titleCategory: {
      type: String,
      required: true,
      default: "---",
    },
  },
  setup(props) {
    props.titleCategory; // <-- type: string
  },
});
</script>
<style lang="scss">
.title-category {
  margin-top: 0.8rem;
  font-size: 1.2rem;
  display: flex;
  font-weight: bold;
}
</style>
