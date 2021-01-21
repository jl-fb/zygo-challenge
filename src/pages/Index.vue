<template>
  <q-page>
    <div class="absolute full-width full-height bg-grey-3 column">
      <div class="row q-mb-lg">
        <div class="col-12 col-md ">
          <search />
        </div>

        <div
          style="max-width:250px"
          class="col-12 col-md q-mr-sm self-center flex q-pr-lg"
        >
          <q-toggle v-model="showOnlyTodo" label="À fazer" />
          <q-toggle v-model="showOnlyCompleted" label="Completas" />
        </div>
      </div>

      <p
        v-if="
          search &&
            !Object.keys(tasksTodo).length &&
            !Object.keys(tasksCompleted).length
        "
        class="q-ml-sm text-subtitle2"
      >
        Não foram encontrados resultados...
      </p>

      <q-scroll-area class="q-scroll-tasks">
        <no-tasks-banner
          v-if="!hasError && !Object.keys(tasksTodo).length && !search"
        ></no-tasks-banner>

        <task-todo
          :tasks="tasksTodo"
          v-if="
            (!hasError &&
              Object.keys(tasksTodo).length &&
              !showOnlyCompleted) ||
              (showOnlyTodo && showOnlyCompleted)
          "
        />

        <hr
          v-if="
            !hasError && Object.keys(tasksTodo).length && !showOnlyCompleted
          "
        />

        <tasks-completed
          class="q-mb-xl"
          :tasks="tasksCompleted"
          v-if="
            (!hasError &&
              Object.keys(tasksCompleted).length &&
              !showOnlyTodo) ||
              (showOnlyTodo && showOnlyCompleted)
          "
        />
        <div v-else-if="hasError" class="text-center">
          <h3>Desculpe...</h3>
          <h5>=(</h5>
        </div>
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          size="24px"
          round
          color="deep-purple-5 "
          icon="add"
          @click="showAddTask = true"
          class="all-pointer-events"
        />
        <q-btn
          size="24px"
          round
          color="red-10"
          icon="delete"
          @click="promptToDeleteAll()"
          class="all-pointer-events q-ml-lg"
        />
      </div>
    </div>
    <q-dialog persistent v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import api from "../api/api";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "PageIndex",
  components: {
    AddTask: require("components/Tasks/Modals/AddTask").default,
    TaskTodo: require("components/Tasks/TasksTodo").default,
    TasksCompleted: require("components/Tasks/TasksCompleted").default,
    NoTasksBanner: require("components/Tasks/NoTasksBanner").default,
    Search: require("components/Tasks/Tools/Search").default
  },
  data() {
    return {
      hasError: false,
      showLoading: false,
      showAddTask: false,
      showOnlyCompleted: false,
      showOnlyTodo: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted"]),
    ...mapState("tasks", ["search"])
  },
  methods: {
    ...mapActions("tasks", ["readDataFromAPI", "deleteAllTasks"]),

    promptToDeleteAll() {
      this.$q
        .dialog({
          title: "Deletar todas as tarefas",
          message: "Tem certaza que deseja deletar todas as tarefas?",
          cancel: true,
          persistent: true,
          color: "red-12"
        })
        .onOk(() => {
          this.deleteAllTasks();
        });
    }
  },

  mounted() {
    this.readDataFromAPI();
    this.$root.$on("showAddTask", () => (this.showAddTask = true));
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

.q-toggle__inner--truthy .q-toggle__thumb:after {
  background-color: #412296;
}

.q-toggle__thumb:after {
  background: rgb(218, 218, 218);
}
.q-scroll-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
