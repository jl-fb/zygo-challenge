<template>
  <q-card>
    <modal-header>Editar tarefa</modal-header>
    <q-form @submit.prevent="onSubmit" @reset="onReset" ref="form">
      <q-card style="min-width: 350px">
        <q-card-section class="q-pt-none">
          <modal-task-name :title.sync="toSubmit.title" ref="modalTaskName" />
        </q-card-section>

        <modal-buttons>Editar</modal-buttons>
      </q-card>
    </q-form>
  </q-card>
</template>

<script>
import { addTask } from "src/store/tasks/actions";
import { mapActions } from "vuex";
import ModalHeader from "./Shared/ModalHeader.vue";
import ModalTaskName from "./Shared/ModalTaskName.vue";
import ModalButtons from "./Shared/ModalButtons.vue";
export default {
  name: "EditTask",
  props: ["task", "id"],
  components: {
    ModalHeader: require("./Shared/ModalHeader").default,
    ModalTaskName: require("./Shared/ModalTaskName").default,
    ModalButtons: require("./Shared/ModalButtons").default
  },
  data() {
    return {
      toSubmit: {}
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    onSubmit() {
      this.$refs.modalTaskName.$refs.title.validate();
      if (!this.$refs.modalTaskName.$refs.title.hasError) {
        console.log("foi", this.toSubmit);
        this.submitTask(this.toSubmit);
      }
    },

    submitTask(task) {
      this.updateTask({
        id: this.id,
        updates: this.toSubmit
      });
      this.$emit("close");
    },
    onReset() {
      this.toSubmit.title = null;
      this.toSubmit.completed = false;
    },

    firstSetTask(task) {
      return Object.assign({}, task);
    }
  },
  mounted() {
    this.toSubmit = this.firstSetTask(this.task);
  }
};
</script>

<style></style>
