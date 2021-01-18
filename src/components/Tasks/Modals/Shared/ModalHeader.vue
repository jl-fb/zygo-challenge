<template>
  <q-card-section class="row">
    <div class="text-h6"><slot></slot></div>
    <q-space></q-space>
    <q-btn flat icon="close" round dense v-close-popup></q-btn>
  </q-card-section>
</template>

<script>
export default {
  name: "ModalHeader"
};
</script>

<style></style>
