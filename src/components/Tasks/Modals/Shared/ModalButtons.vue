<template>
  <q-card-actions align="right" class="text-primary">
    <q-btn flat label="Cancel" v-close-popup />
    <q-btn class="text-light-blue-9" flat type="submit"><slot></slot></q-btn>
  </q-card-actions>
</template>

<script>
export default {
  name: "ModalButtons"
};
</script>

<style></style>
