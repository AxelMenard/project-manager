<template>
  <h1 class="title-secondary">{{ secondaryTitle }}</h1>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    secondaryTitle: {
      type: String,
      required: true,
      default: "---",
    },
  },
  setup(props) {
    props.secondaryTitle; // <-- type: string
  },
});
</script>
<style lang="scss">
.title-secondary {
  font-size: 1.8rem;
  display: flex;
}
</style>
