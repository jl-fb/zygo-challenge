<template>
  <div>
    <list-header :color="'bg-deep-purple-6'">Tarefas concluídas</list-header>
    <q-list class="bg-white" separator bordered>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        v-ripple
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "TasksTodo",
  props: ["tasks"],
  components: {
    Task: require("components/Tasks/Task").default,
    ListHeader: require("components/Shared/ListHeader").default
  }
};
</script>

<style></style>
