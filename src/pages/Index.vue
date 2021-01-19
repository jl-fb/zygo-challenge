<template>
  <q-page class="bg-grey-3  column">
    <div class="row q-mb-lg row ">
      <search />
      <div class="col-3 q-mr-sm self-center">
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
    <no-tasks-banner
      v-if="!hasError && !Object.keys(tasksTodo).length && !search"
    ></no-tasks-banner>
    <task-todo
      :tasks="tasksTodo"
      v-if="
        (!hasError && Object.keys(tasksTodo).length && !showOnlyCompleted) ||
          (showOnlyTodo && showOnlyCompleted)
      "
    />
    <hr
      v-if="!hasError && Object.keys(tasksTodo).length && !showOnlyCompleted"
    />
    <tasks-completed
      :tasks="tasksCompleted"
      v-if="
        (!hasError && Object.keys(tasksCompleted).length && !showOnlyTodo) ||
          (showOnlyTodo && showOnlyCompleted)
      "
    />
    <div v-else-if="hasError" class="text-center">
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

    // showOnlyCompleted: {
    //   get() {
    //     return this.onlyCompleted;
    //   },
    //   set(value) {
    //     this.showOnlyCompleted();
    //   }
    // },
    // showOnlyTodo: {
    //   get() {
    //     return this.onlyCompleted;
    //   },
    //   set(value) {
    //     this.showOnlyCompleted();
    //   }
    // }
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
</style>
