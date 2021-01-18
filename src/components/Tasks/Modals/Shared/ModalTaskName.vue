<template>
  <q-input
    filled
    :value="title"
    @input="$emit('update:title', $event)"
    label="Tarefa..."
    type="text"
    autofocus
    :rules="[val => !!val || 'Ops! Este campo é obrigatório']"
    ref="title"
    clearable
  />
</template>

<script>
export default {
  name: "ModalTaskName",
  props: ["title"]
};
</script>

<style></style>
