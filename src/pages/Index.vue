<template>
  <q-page class="bg-grey-3  column">
    <task-todo
      :tasks="tasksTodo"
      v-if="!hasError && Object.keys(tasksTodo).length"
    />
    <hr />
    <tasks-completed
      :tasks="tasksCompleted"
      v-if="!hasError && Object.keys(tasksCompleted).length"
    />
    <div v-else class="text-center">
      <h3>Desculpe...</h3>
      <h5>=(</h5>
    </div>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        size="24px"
        round
        color="deep-purple-5 "
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog persistent v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import api from "../api/api";
import { mapGetters } from "vuex";

export default {
  name: "PageIndex",
  components: {
    AddTask: require("components/Tasks/Modals/AddTask").default,
    TaskTodo: require("components/Tasks/TasksTodo").default,
    TasksCompleted: require("components/Tasks/TasksCompleted").default
  },
  data() {
    return {
      hasError: false,
      showLoading: false,
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"])
  },
  methods: {
    async getTasks() {
      let data = [];
      try {
        this.$q.loading.show();
        const resp = await fetch(api.baseURL);
        if (!resp.ok) {
          this.hasError = true;
        }

        data = await resp.json();
        this.$q.loading.hide();
      } catch (error) {
        console.error("Fetch data error", error);
        return error;
        this.$q.loading.hide();
      }
      return data;
    }
  },
  mounted() {
    this.getTasks()
      .then(resp => (this.tasks = resp))
      .catch(e => console.log(e));
  }
};
</script>
<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
