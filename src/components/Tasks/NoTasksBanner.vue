<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="check" color="green-8" />
    </template>
    Sem tarefas no momento!
    <template v-slot:action>
      <q-btn
        outline
        color="deep-purple-5"
        label="Adicionar"
        @click="$root.$emit('showAddTask')"
      />
    </template>
  </q-banner>
</template>

<script>
export default {
  name: "NoTaskBanner"
};
</script>

<style></style>
