<template>
  <h1 class="title-primary">{{ primaryTitle }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    primaryTitle: {
      type: String,
      required: true,
      default: "---",
    },
  },
  setup(props) {
    props.primaryTitle;
  },
});
</script>
<style lang="scss">
.title-primary {
  font-size: 2.6rem;
  display: flex;
}
</style>
