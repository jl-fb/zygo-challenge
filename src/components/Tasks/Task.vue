<template>
  <q-item
    v-ripple
    :class="{ 'done bg-deep-purple-1': task.completed }"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
  >
    <q-item-section avatar>
      <q-checkbox v-model="task.completed" color="deep-purple-7 " />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ task.title }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="deep-purple-12"
          icon="edit"
          @click.stop="showEditTask = true"
          v-if="!task.completed"
        />

        <q-btn
          flat
          round
          dense
          color="red"
          icon="delete"
          @click.stop="promptToDelete(id)"
        />
      </div>
    </q-item-section>
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: ["task", "id"],
  components: {
    EditTask: require("./Modals/EditTask").default
  },
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),

    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Deletar Tarefa",
          message: "Confirmar?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  }
};
</script>

<style></style>
