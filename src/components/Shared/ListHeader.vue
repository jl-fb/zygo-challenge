<template>
  <q-banner dense inline-actions class=" text-center" :class="color">
    <span class="text-grey-3 text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>

<script>
export default {
  name: "ListHeader",
  props: ["color"]
};
</script>

<style></style>
